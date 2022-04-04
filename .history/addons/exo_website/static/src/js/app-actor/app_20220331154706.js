odoo.define("exo_website.actor_app", function (require) {
  "use strict";
  var Widget = require("web.Widget");
  var sAnimation = require("website.content.snippets.animation");

//   var ActorsTable = require("exo_website.ActorsTable");
  console.log('test');
  sAnimation.registry.actor_app = Widget.extend({
    selector: ".app-actor",

    start: function () {
      var listActor = new ActorsTable(this);
      listActor.appendTo(this.$('.left-zone'))

      this._super.apply(this, arguments);
    },
  });
});
