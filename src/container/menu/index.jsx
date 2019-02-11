
// https://bulma.io/documentation/components/navbar

import PropTypes from 'prop-types';
import React     from 'react';

export default class Menu extends React.Component {
    static propTypes = {
        app          : PropTypes.object.isRequired,
        isAuthorized : PropTypes.bool.isRequired
    }

    handleAuthBtnClick = () => {
        this.props.app.handleAuthBtnClick();
    }

    render() {
        const label = this.props.isAuthorized ? 'Logout' : 'Authorize';

        return (
            <nav id="navbar" className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://developers.google.com/youtube/v3/code_samples/javascript#search-by-keyword" target="_blank">
                        <img src="public/img/logo.jpg" width="auto" height="85" />
                    </a>
                    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                    </a>
                </div>
                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a id="auth-btn" className="button" onClick={this.handleAuthBtnClick}><strong>{label}</strong></a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}
