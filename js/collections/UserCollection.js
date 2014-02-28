define([
    'jquery',
    'underscore',
    'backbone',
    '../models/UserModel'
], function($, _, Backbone, UserModel) {
	'use strict';

	var UsersCollection = Backbone.Collection.extend({
		model: UserModel,
        comparator: function(model) {
            return -model.get('unitTestsCount');
        }
	});

	return UsersCollection;
});

