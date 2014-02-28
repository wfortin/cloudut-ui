/*global define*/
define([
    'jquery',
    'underscore',
    'backbone',
    'moment',
    'text!templates/users.html'
], function($, _, Backbone, moment, usersTemplate) {
	'use strict';

	var UsersView = Backbone.View.extend({
		template: _.template(usersTemplate),
		el: "#users tbody",
		initialize: function() {
			_.bindAll(this, 'render');

			var self = this;
			this.collection.bind('add', function() {
				self.render();
			});
		},
        templateHelpers: {
            timeago : function (timestamp) {
                if (timestamp > 0) {
                    var now = moment(new Date());
                    var then = moment.unix(timestamp);
                    return moment.duration(now.diff(then)).humanize() + ' ago';
                }
            }
        },
		render: function() {
            var data = this.collection.toJSON();
            _.extend(data, this.templateHelpers);
			this.$el.html(this.template({
				users: data
			}));
		}
	});

	return UsersView;
});