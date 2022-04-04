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
    init: function (parent) {
      this._super.apply(this, arguments);
      this.actor = [];
  },
    start: function () {
      this._actorsList();

      this._super.apply(this, arguments);
    },

    _actorsList: function () {
      var actorsTable = new ActorsTable(this);
      this.actors = actorsTable.actors
      console.log(actors);
      // actors.on("click", this._actorPreview);
      // actors.on('preview_actor', this, this._actorPreview);
      return actorsTable.appendTo(this.$('.left-zone'));
    },

    _actorPreview: function (ev) {
      ev.preventDefault();
      var target = $(ev.target);   // chop le target (btn ici)
      var actor_id = parseInt(target.data('actor_id'), 10);    // chop l'ID via l'attribut data mis dans le xml
      // var actor = _.where(, {id: actor_id});
      console.log(actor);
      console.log('preview');
    }
  });
});
