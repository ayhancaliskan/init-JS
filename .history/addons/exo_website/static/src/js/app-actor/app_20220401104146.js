odoo.define("exo_website.actor_app", function (require) {
  "use strict";
  var Widget = require("web.Widget");
  var sAnimation = require("website.content.snippets.animation");

  var ActorsTable = require('exo_website.actor_table');
  sAnimation.registry.actor_app = Widget.extend({
    selector: ".app-actor",

    events: {
        'click .edit-contact' : '_actorPreview',
    },

    start: function () {
      this._actorsList();

      this._super.apply(this, arguments);
    },

    _actorsList: function () {
      var actors = new ActorsTable(this);
      console.log(actors.actors);
      // actors.on("click", this._actorPreview);
      return actors.appendTo(this.$('.left-zone'));
    },

    _actorPreview: function (ev) {
      console.log(ev);
      console.log('preview');
    }
  });
});
