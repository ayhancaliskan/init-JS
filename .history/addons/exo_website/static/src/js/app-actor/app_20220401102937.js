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
      var defs = [this._super.apply(this, arguments)];
      defs.push(self._actorsList());

      this._super.apply(this, arguments);
    },

    _actorsList: function (domain) {
      console.log(domain);
      var objet = new ActorsTable (this)
      objet.appendTo(this.$('.left-zone'))
    },
    _actorPreview: function (ev) {
      console.log(ev);
      console.log('preview');
    }
  });
});
