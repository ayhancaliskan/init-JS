odoo.define("exo_website.actor_table", function (require) {
    "use strict";

    var Widget = require("web.Widget");
    console.log("table");

    var ActorsPreview = Widget.extend({
      template: '',
      xmlDependencies: ['/exo_website/static/src/js/app-actor/views/'],

      init: function (parent, options) {
        this._super.apply(this, arguments);

      },

      start: function () {
        this._super.apply(this, arguments);
        // this.actors;
      },
    });
    return ActorsPreview;
  });
