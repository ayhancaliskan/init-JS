odoo.define("exo_website.actor_app", function (require) {
  "use strict";
  var Widget = require("web.Widget");
  var sAnimation = require("website.content.snippets.animation");

  var ActorsTable = require('exo_website.actor_table');
  sAnimation.registry.actor_app = Widget.extend({
    selector: ".app-actor",

    events: {
        'click .contact-info' : '_actorPreview',
    },

    start: function () {
      this._actorsList();

      this._super.apply(this, arguments);
    },

    _actorsList: function () {
      var actors = new ActorsTable(this);
      console.log(actors);
      // actors.on("click", this._actorPreview);
      // actors.on('preview_actor', this, this._actorPreview);
      console.log(actors);
      return actors.appendTo(this.$('.left-zone'));
    },

    _actorPreview: function (ev) {
      ev.preventDefault();
      var target = $(ev.target);
      var actor_id = parseInt(target.data('actor_id'), 10);
      console.log(ev);
      console.log('preview');
    }
  });
});
