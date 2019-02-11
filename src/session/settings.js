
const Settings = {
    // (local) development values - `yarn start`
    development: function() {
        return {
            YOUTUBE_API_CLIENT_ID      : '669306438775-38420udhqbkqf4k57nq4erp8fe0p7ql8.apps.googleusercontent.com',        // Client ID & API key from Developer Console
            YOUTUBE_API_DISCOVERY_DOCS : ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'],                  // Array of API discovery doc URLs used by quickstart
            YOUTUBE_API_SCOPES         : 'https://www.googleapis.com/auth/youtube.readonly'                                 // Authorization scopes required by API
        };
    },

    // settings (e.g. API URL endpoints) specific to production
    production: function() {
        // leaving blank, but u get the idea. note: this is what's compiled during `yarn build`
        // meaning the `dist` files, specifically the Youtube API JS code that uses these values will (intentionally) break
        return {};
    }
};

export default process.env.NODE_ENV == 'production' ? Settings.production() : Settings.development();
