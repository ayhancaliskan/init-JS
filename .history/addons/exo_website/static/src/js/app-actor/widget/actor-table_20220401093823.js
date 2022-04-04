odoo.define("exo_website.actor_table", function (require) {
  "use strict";

  var Widget = require("web.Widget");
  console.log("table");

  var ActorsTable = Widget.extend({
    template: 'exo_website.actorsTable',
    xmlDependencies: ['/exo_website/static/src/js/app-actor/views/actors_table.xml'],

    init: function (parent, options) {
      this._super.apply(this, arguments);
      this.actors = [
        {
          'id' : "1",
          'id' : "Ayhan",
          'phone' : "047854534",
          'id' : "Ayhan",


        },
      ];
    },

    start: function () {
      this._super.apply(this, arguments);
      this.actors;
    },
  });
  return ActorsTable;
});
