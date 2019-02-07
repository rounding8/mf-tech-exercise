
import React    from 'react';
import ReactDOM from 'react-dom';

// import 'css/app';

import Home from 'container/home';

const App = {

    init: function() {
        console.log('=> App.init()');

        // Initialize Application User
        // App.User = {};

        // Initialize Application State
        // App.State = {};

        // Initialize Application Globals/Constants
        // App['TIMEOUT'] = 1000 * 60 * 30;

        App.load();
    },

    load: function() {
        console.log('=> App.load()');

        const content = (
            <Home app={App} />
        );

        App.render(content).exec();
    },

    exec: function() {
        console.log('=> App.exec()');

        // Global Event Handlers go here, e.g.
        // window.addEventListener('keyup', App.handleKeyup);
    },

    render: function(element) {
        ReactDOM.render(element, document.getElementById('root'));

        return this;
    }
};

window.onload = () => {
    App.init();
};
