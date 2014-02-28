define([
    'backbone',
    'md5'
], function(Backbone) {
    'use strict';

    var UserModel = Backbone.Model.extend({
        defaults: {
            name: '',
            email: '',
            team: '',
            unitTestsCount: 0,
            latestTestTimestamp : 0,
            latestTestDescription : ''
        },
        initialize: function() {
            this.set({
                gravatar : 'http://www.gravatar.com/avatar/' + hex_md5(this.get('email'))
            });
        }
    });

    return UserModel;
});