/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'mirror-hud',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    firebase: {
      apiKey: "AIzaSyAn2VJecK_7FQm6zlGw_LgnGKe_kt9HeA4",
      authDomain: "mirror-hud.firebaseapp.com",
      databaseURL: "https://mirror-hud.firebaseio.com",
      storageBucket: "mirror-hud.appspot.com",
      messagingSenderId: "468064034529"
    },
    forecast: {
      dataType: 'json'
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.forecast.dataType = 'jsonp';
  }

  return ENV;
};
