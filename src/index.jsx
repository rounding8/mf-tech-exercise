
import React    from 'react';
import ReactDOM from 'react-dom';

import 'bulma/css/bulma.css';
import 'css/app';

import Home from 'container/home';
import Menu from 'container/menu';

import Settings from 'session/settings';

const App = {
    init: function() {
        console.log('=> App.init()');

        // Initialize Application User
        // App.User = {};

        // Initialize Application State
        App.State = {
            isAuthorized: false
        };

        // Load the auth2 library and API client library
        gapi.load('client:auth2', function() {
            // Initializes the API client library and sets up sign-in state listeners
            gapi.client.init({
                discoveryDocs : Settings['YOUTUBE_API_DISCOVERY_DOCS'],
                clientId      : Settings['YOUTUBE_API_CLIENT_ID'],
                scope         : Settings['YOUTUBE_API_SCOPES']
            }).then(() => {
                // Listen for sign-in state changes
                gapi.auth2.getAuthInstance().isSignedIn.listen(App.updateSigninStatus);

                // Handle the initial sign-in state
                App.updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
            });
        });
    },

    load: function() {
        console.log('=> App.load()');

        const content = (
            <React.Fragment>
                <Menu app={App} isAuthorized={App.State['isAuthorized']} />
                <Home app={App} isAuthorized={App.State['isAuthorized']} />
            </React.Fragment>
        );

        App.render(content).exec();
    },

    exec: function() {
        console.log('=> App.exec()');

        // Global Event Handlers go here
    },

    handleAuthBtnClick: function() {
        // if auth => sign user out, if unauth => init login sequence
        console.log('this.handleAuthBtnClick()');

        const toggledState = !App.State['isAuthorized'];

        if (!App.State['isAuthorized']) {
            // Authorize / Login
            gapi.auth2.getAuthInstance().signIn();
        } else {
            // Sign Out / Logout
            gapi.auth2.getAuthInstance().signOut();
        }

        // update state
        App.State['isAuthorized'] = toggledState;
    },

    render: function(element) {
        ReactDOM.render(element, document.getElementById('root'));

        return this;
    },

    updateSigninStatus: function(isSignedIn) {
        // Called when the signed in status changes
        if (isSignedIn) {
            App.State['isAuthorized'] = true;
        }

        App.load();
    }
};

window.onload = () => {
    App.init();
};
