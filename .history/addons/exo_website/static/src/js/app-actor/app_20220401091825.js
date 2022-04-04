odoo.define("exo_website.actor_app", function (require) {
  "use strict";
  var Widget = require("web.Widget");
  var sAnimation = require("website.content.snippets.animation");

  var ActorsTable = require('exo_website.actor_table');
  console.log(ActorsTable);
  console.log('app');
  sAnimation.registry.actor_app = Widget.extend({
    selector: ".app-actor",
  
    start: function () {
      var objet = new ActorsTable (this)
      this._super.apply(this, arguments);
      console.log('app start');
    },
  });
});
