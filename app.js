require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        bootstrap: {
            deps: ['jquery']
        }
    },
    paths: {
        bootstrap: "bower_components/bootstrap/dist/js/bootstrap.min",
        jquery: 'bower_components/jquery/jquery',
        underscore: 'bower_components/underscore/underscore',
        backbone: 'bower_components/backbone/backbone',
        text: 'bower_components/requirejs-text/text',
        moment: 'bower_components/moment/moment',
        md5: 'js/lib/md5'
    }
});

require([
    'backbone',
    'jquery',
    'bootstrap',
    'js/collections/UserCollection',
    'js/models/UserModel',
    'js/views/UsersView',
    'js/views/AddTestView'
], function(Backbone,
            $,
            bootstrap,
            UserCollection,
            UserModel,
            UsersView,
            AddTestView)
{
    'use strict';

    var users = new UserCollection([{
        name: 'William Fortin',
        email: 'willyfortin@gmail.com',
        team: 'Cloud Js Admin',
        unitTestsCount: '0',
        latestTestTimestamp : '0',
        latestTestDescription : ''
    }, {
        name: 'Jonathan Rochette',
        email: 'rochette.jonathan@gmail.com',
        team: 'Cloud Platfom',
        unitTestsCount: '279',
        latestTestTimestamp : '1393156020',
        latestTestDescription : 'Tested Usage Analytics server side computing.'
    }, {
        name: 'Guillaume Simard',
        email: 'gsimard@coveo.com',
        team: 'Usage Analytics',
        unitTestsCount: '73',
        latestTestTimestamp : '1393159020',
        latestTestDescription : 'Tested Kynesis push to S3.'
    }]);


    var usersView = new UsersView({
        collection: users
    });

    var addTestView = new AddTestView();
    addTestView.render();

    addTestView.on('addTest', function(test) {
       users.add(test);
    });

    usersView.render();
});