
import PropTypes from 'prop-types';
import React     from 'react';

export default class Media extends React.Component {
    static propTypes = {
        data: PropTypes.object
    }

    composeMedia = media => {
        let response = null;
        let elements = [];

        if (media && media.count > 0) {
            const subscriptions = media.subscriptions;

            for (const id in subscriptions) {
                const desc     = subscriptions[id].desc;
                const thumbUrl = subscriptions[id].thumbUrl.url;
                const title    = subscriptions[id].title;

                elements.push(
                    <article key={`media-${id}`} className="media">
                        <figure className="media-left">
                            <p className="image is-64x64">
                                <img src={`${thumbUrl}`} />
                            </p>
                        </figure>
                        <div className="media-content">
                            <div className="content">
                                <p>
                                    <strong>{title}</strong>
                                    <br />
                                    {desc}
                                    <br />
                                </p>
                            </div>
                        </div>
                    </article>
                );
            }

            response = (
                <section className="section">
                    <h2>{media.count}</h2>
                    <h3>Subscriptions</h3>
                    <br />
                    <div className="container">
                        {elements}
                    </div>
                </section>
            );
        }

        return response;
    }

    render() {
        const content = this.props.data ? this.composeMedia(this.props.data) : null;

        return content;
    }
}
