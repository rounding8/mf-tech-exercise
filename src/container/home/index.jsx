
import axios     from 'axios';
import PropTypes from 'prop-types';
import React     from 'react';

// import Columns from 'component/columns';

export default class Home extends React.Component {
    static propTypes = {
        app          : PropTypes.object.isRequired,
        isAuthorized : PropTypes.bool.isRequired
    }

    componentDidMount() {
        if (this.props.isAuthorized) {
            this.getSubscriptions();
        }
    }

    componentDidUpdate() {
        if (this.props.isAuthorized) {
            this.getSubscriptions();
        }
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

    getChannel = id => {
        const getUploads = this.getUploads;

        gapi.client.youtube.channels.list({
            part : 'snippet,contentDetails,statistics',
            id   : id
        }).execute(function(response) {
            var channels = response.items;
            if (channels.length > 0) {
                // getUploads(channels[0].contentDetails.relatedPlaylists.uploads);
            } else {
                // todo: update later to display in DOM
                console.log('no channels found!');
            }
        });
    }

    getSubscriptions = token => {
        const getChannel       = this.getChannel;
        const getSubscriptions = this.getSubscriptions;

        var request = {
            part       : 'id,contentDetails,subscriberSnippet,snippet',
            mine       : true,
            maxResults : 50
        };

        if (token) {
            request.pageToken = token;
        }

        gapi.client.youtube.subscriptions.list(request).execute(function(response) {
            console.log(response);

            for (var i = 0; i < response.items.length; i++) {
                var itm = response.items[i];
                var cid = itm.snippet.resourceId.channelId;

                getChannel(cid);
            }

            var next = response.nextPageToken;

            if (next) {
                getSubscriptions(next);
            }
        });
    }

    getUploads = pid => {
        // todo: add link to README & here from website this is from (on laptop files..)
        gapi.client.youtube.playlistItems.list({
            part       : 'snippet,contentDetails',
            playlistId : pid,
            maxResults : 50
        }).execute(function(response) {
            if (response) {
                const itm   = response.items[0];
                const thumb = itm.snippet.thumbnails.medium;

                const head = "<a href='https://www.youtube.com/watch?v=" + itm.snippet.resourceId.videoId + "' target='_blank'>";
                const img  = "<img src='" + thumb.url + "' width=" + thumb.width + " height=" + thumb.height + ">";
                const tail = "</a>";

                console.log(head + img + tail);
            }
        });
    }

    render() {
        const content = this.props.isAuthorized ? this.composeSearchByKeyword() : null;

        return (
            <div>
                {content}
            </div>
        );
    }
}
