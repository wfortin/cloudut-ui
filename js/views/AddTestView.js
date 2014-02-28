/*global define*/
define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/addtest.html'
], function($, _, Backbone, addUserTemplate) {
    'use strict';

    var AddTestView = Backbone.View.extend({
        template: _.template(addUserTemplate),
        el: '#add-test',
        initialize: function() {
            _.bindAll(this, 'render');
        },
        render: function() {
            this.$el.html(this.template());
        },
        events: {
            'click #add-test': 'addTest'
        },
        addTest: function() {
            var test = {
                name: this.$el.find('#username').val(),
                email: this.$el.find('#email').val(),
                team: this.$el.find('#team').find(':selected').text(),
                latestTestDescription : this.$el.find('#description').val()
            };

            this.$el.modal('hide');
            this.trigger('addTest', test);
        }
    });

    return AddTestView;
});