odoo.define("exo_website.actor_preview", function (require) {
    "use strict";

    var Widget = require("web.Widget");
    console.log("table");

    var ActorPreview = Widget.extend({
      template: 'exo_website.actorPreview',
      xmlDependencies: ['/exo_website/static/src/js/app-actor/views/actpr_preview.xml'],

      init: function (parent, ...actor) {
        this._super.apply(this, arguments);
        this.actor = actor;
      },

      start: function () {
        this._super.apply(this, arguments);
        // this.actors;
      },
    });
    return ActorPreview;
  });
