
import axios     from 'axios';
import PropTypes from 'prop-types';
import React     from 'react';

import Media from 'component/media';

export default class Home extends React.Component {
    static propTypes = {
        app          : PropTypes.object.isRequired,
        isAuthorized : PropTypes.bool.isRequired
    }

    state = {
        channelLoaded     : false,
        channelData       : {},
        subscriptionsData : {}
    }

    componentDidMount() {
        // if user is already authorized this will load YT API data on 1st render
        if (this.props.isAuthorized) {
            this.getChannel();
            this.updateChannelLoadedState(true);
        }
    }

    componentDidUpdate() {
        // if user isn't authorized this will load YT API data on 2nd render (only) following login
        if (this.props.isAuthorized && !this.state.channelLoaded) {
            this.getChannel();
            this.updateChannelLoadedState(true);
        }
    }

    composeChannel(channel) {
        return (
            <React.Fragment>
                <h1 className="title">{channel['title']}</h1>
                <h2 className="subtitle">{channel['description']}</h2>
                <table className="table is-fullwidth">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Views</th>
                            <th>Comments</th>
                            <th>Subscribers</th>
                            <th>Videos</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{channel['id']}</td>
                            <td>{channel['views']}</td>
                            <td>{channel['comments']}</td>
                            <td>{channel['subscribers']}</td>
                            <td>{channel['videos']}</td>
                        </tr>
                    </tbody>
                </table>
            </React.Fragment>
        );
    }

    composeSearchByKeyword() {
        return (
            <React.Fragment>
                <form>
                    <h2><a href="https://developers.google.com/youtube/v3/code_samples/javascript#search-by-keyword">Search by keyword</a></h2>
                    <input id="query" name="query" type="text" placeholder="endpoint" maxLength="50" size="30" required />
                    <button id="search-button" name="search-button">Search</button>
                </form>
                <div id="search-container" />
            </React.Fragment>
        );
    }

    composeSubscriptions = data => {
        return <Media data={data} />;
    }

    getChannel = () => {
        const getSubscriptions = this.getSubscriptions;

        gapi.client.youtube.channels.list({
            'part' : 'snippet,contentDetails,statistics',
            'mine' : true
        }).then(function(response) {
            const channel = response.result.items[0];

            const channelInfo = {
                id          : channel.id,
                title       : channel.snippet.title,
                description : channel.snippet.description,
                comments    : channel.statistics.commentCount,
                subscribers : channel.statistics.subscriberCount,
                videos      : channel.statistics.videoCount,
                views       : channel.statistics.viewCount
            };

            getSubscriptions(channelInfo);
        });
    }

    getSubscriptions = channel => {
        const parseSubscriptionsData = this.parseSubscriptionsData;

        this.setState({
            channelData: channel
        });

        gapi.client.youtube.subscriptions.list({
            'part'       : 'contentDetails,snippet',
            'maxResults' : 50,
            'mine'       : true
        }).then(function(response) {
            parseSubscriptionsData(response.result.items);
        });
    }

    parseSubscriptionsData = subscriptions => {
        let subscriptionsData = {
            count         : subscriptions.length,
            subscriptions : []
        };

        // Format remaining raw data into pretty, ready-to-go {} data
        for (const s in subscriptions) {
            const subscription = subscriptions[s].snippet;

            // FYI these will be unordered; create ids for click/sort/etc handling functionality
            subscriptionsData['subscriptions'].push({
                desc     : subscription.description,
                thumbUrl : subscription.thumbnails.default,
                title    : subscription.title
            });
        }

        this.setState({
            subscriptionsData: subscriptionsData
        });
    }

    updateChannelLoadedState = state => {
        this.setState({
            channelLoaded: state
        });
    }

    render() {
        const channelContent       = this.props.isAuthorized ? this.composeChannel(this.state.channelData)             : null;
        const subscriptionsContent = this.props.isAuthorized ? this.composeSubscriptions(this.state.subscriptionsData) : null;

        // const searchContent = this.props.isAuthorized ? this.composeSearchByKeyword() : null;

        return (
            <div>
                {channelContent}
                {subscriptionsContent}
                {null}
            </div>
        );
    }
}
