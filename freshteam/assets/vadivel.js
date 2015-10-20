"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

define('vadivel/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'vadivel/config/environment'], function (exports, Ember, Resolver, loadInitializers, config) {

  'use strict';

  var App;

  Ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = Ember['default'].Application.extend({
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix,
    Resolver: Resolver['default']
  });

  loadInitializers['default'](App, config['default'].modulePrefix);

  exports['default'] = App;

});
define('vadivel/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'vadivel/config/environment'], function (exports, AppVersionComponent, config) {

  'use strict';

  var _config$APP = config['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;

  exports['default'] = AppVersionComponent['default'].extend({
    version: version,
    name: name
  });

});
define('vadivel/controllers/array', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('vadivel/controllers/object', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('vadivel/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'vadivel/config/environment'], function (exports, initializerFactory, config) {

  'use strict';

  var _config$APP = config['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;

  exports['default'] = {
    name: 'App Version',
    initialize: initializerFactory['default'](name, version)
  };

});
define('vadivel/initializers/export-application-global', ['exports', 'ember', 'vadivel/config/environment'], function (exports, Ember, config) {

  'use strict';

  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (config['default'].exportApplicationGlobal !== false) {
      var value = config['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember['default'].String.classify(config['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  ;

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };

});
define('vadivel/models/added', ['exports', 'ember-data'], function (exports, DS) {

	'use strict';

	exports['default'] = DS['default'].Model.extend({});

});
define('vadivel/models/avail-candidate', ['exports', 'ember-data'], function (exports, DS) {

	'use strict';

	exports['default'] = DS['default'].Model.extend({});

});
define('vadivel/models/dashboard', ['exports', 'ember-data'], function (exports, DS) {

	'use strict';

	exports['default'] = DS['default'].Model.extend({});

});
define('vadivel/models/match', ['exports', 'ember-data'], function (exports, DS) {

	'use strict';

	exports['default'] = DS['default'].Model.extend({});

});
define('vadivel/models/matchlist', ['exports', 'ember-data'], function (exports, DS) {

	'use strict';

	exports['default'] = DS['default'].Model.extend({});

});
define('vadivel/models/newjob', ['exports', 'ember-data'], function (exports, DS) {

	'use strict';

	exports['default'] = DS['default'].Model.extend({});

});
define('vadivel/models/recruit', ['exports', 'ember-data'], function (exports, DS) {

	'use strict';

	exports['default'] = DS['default'].Model.extend({});

});
define('vadivel/models/selected', ['exports', 'ember-data'], function (exports, DS) {

	'use strict';

	exports['default'] = DS['default'].Model.extend({});

});
define('vadivel/models/stage', ['exports', 'ember-data'], function (exports, DS) {

	'use strict';

	exports['default'] = DS['default'].Model.extend({});

});
define('vadivel/router', ['exports', 'ember', 'vadivel/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function () {
    this.route('recruit');
    this.route('dashboard');
    this.route('newjob');
    this.route('match');
    this.route('matchlist');
    this.route('stages');
    this.route('avail-candidate');
    this.route('added');
    this.route('selected');
  });

  exports['default'] = Router;

});
define('vadivel/routes/added', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('vadivel/routes/avail-candidate', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('vadivel/routes/dashboard', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('vadivel/routes/match', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('vadivel/routes/matchlist', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('vadivel/routes/newjob', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('vadivel/routes/recruit', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('vadivel/routes/selected', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('vadivel/routes/stages', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('vadivel/templates/added', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 12
            },
            "end": {
              "line": 4,
              "column": 45
            }
          },
          "moduleName": "vadivel/templates/added.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode(" Recruit ");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 136,
            "column": 10
          }
        },
        "moduleName": "vadivel/templates/added.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","sub-header");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","content");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("ol");
        dom.setAttribute(el3,"class","breadcrumb");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("Drafts");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","row");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","dropdown col-sm-5 title");
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"id","dLabel");
        dom.setAttribute(el5,"data-target","#");
        dom.setAttribute(el5,"data-toggle","dropdown");
        dom.setAttribute(el5,"aria-haspopup","true");
        dom.setAttribute(el5,"aria-expanded","false");
        dom.setAttribute(el5,"class","");
        var el6 = dom.createTextNode("\n              Senior Android Developer\n          ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","text-muted");
        var el6 = dom.createTextNode("Senior Android Developer, requistion #398 | 16 jul 2014, at 6.30am");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","col-sm-3");
        var el5 = dom.createTextNode("\n        	");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5,"src","images/mem1.png");
        dom.setAttribute(el5,"style","width:321px; margin-top: -25px;");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","col-sm-4 header-options");
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","dropdown");
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6,"id","dpublish");
        dom.setAttribute(el6,"data-target","#");
        dom.setAttribute(el6,"data-toggle","dropdown");
        dom.setAttribute(el6,"aria-haspopup","true");
        dom.setAttribute(el6,"class","dropdown-toggle btn-subheader");
        var el7 = dom.createTextNode("\n                Draft\n            ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"class","dropdown-menu");
        dom.setAttribute(el6,"aria-labelledby","dpublish");
        dom.setAttribute(el6,"style","margin-top: 25px;margin-left: 182px;");
        var el7 = dom.createTextNode("\n              ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"class","dropdown-item");
        dom.setAttribute(el7,"href","#");
        var el8 = dom.createTextNode("Active");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n              ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"class","dropdown-item");
        dom.setAttribute(el7,"href","#");
        var el8 = dom.createTextNode("Published Internally");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n              ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"class","dropdown-item");
        dom.setAttribute(el7,"href","#");
        var el8 = dom.createTextNode("On Hold");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n              ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"class","dropdown-item");
        dom.setAttribute(el7,"href","#");
        var el8 = dom.createTextNode("Closed");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("ul");
        dom.setAttribute(el5,"class","sub-header-options pull-right");
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createTextNode("\n              Add Candidate\n            ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createTextNode("\n            	");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        dom.setAttribute(el7,"class","dropdown downtog");
        dom.setAttribute(el7,"style","position:relative;");
        var el8 = dom.createTextNode("\n                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("a");
        dom.setAttribute(el8,"class","dropdown-toggle");
        dom.setAttribute(el8,"id","dnmenu");
        dom.setAttribute(el8,"data-target","#");
        dom.setAttribute(el8,"data-toggle","dropdown");
        var el9 = dom.createTextNode("\n                  ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("i");
        dom.setAttribute(el9,"class","icon-down");
        var el10 = dom.createTextNode(" ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"class","dropdown-menu");
        dom.setAttribute(el8,"aria-labelledby","dnmenu");
        dom.setAttribute(el8,"style","z-index:15; top: 15px; left: -50px;");
        var el9 = dom.createTextNode("\n                  ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("a");
        dom.setAttribute(el9,"class","dropdown-item");
        dom.setAttribute(el9,"href","#");
        var el10 = dom.createTextNode("Add tag ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                  ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("a");
        dom.setAttribute(el9,"class","dropdown-item");
        dom.setAttribute(el9,"href","#");
        var el10 = dom.createTextNode("Send e-mail ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                  ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("a");
        dom.setAttribute(el9,"class","dropdown-item");
        dom.setAttribute(el9,"href","#");
        var el10 = dom.createTextNode("Schedule interview");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n\n                  ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("a");
        dom.setAttribute(el9,"class","dropdown-item");
        dom.setAttribute(el9,"href","#");
        var el10 = dom.createTextNode("Reject candidate");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                  ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("a");
        dom.setAttribute(el9,"class","dropdown-item");
        dom.setAttribute(el9,"href","#");
        var el10 = dom.createTextNode("Archive candidate");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                  ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("a");
        dom.setAttribute(el9,"class","dropdown-item");
        dom.setAttribute(el9,"href","#");
        var el10 = dom.createTextNode("Move candidate");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                  ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("a");
        dom.setAttribute(el9,"class","dropdown-item");
        dom.setAttribute(el9,"href","#");
        var el10 = dom.createTextNode("Delete candidate");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        dom.setAttribute(el6,"id","jobdetails-show");
        var el7 = dom.createTextNode(" ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        dom.setAttribute(el7,"style","padding:0 5px; font-size: 13px; font-weight: 600;");
        var el8 = dom.createTextNode("i");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        dom.setAttribute(el6,"style","opacity:0.5");
        var el7 = dom.createElement("i");
        dom.setAttribute(el7,"class","icon-rectangular");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createElement("i");
        dom.setAttribute(el7,"class","icon-filter ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment(" <div style=\"position:absolute; right: 20px; margin-top: 4px; font-size: 18px; color:#788489;\"><i class=\"icon-ellipsis\"></i></div> ");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("  \n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","content pagearea normal");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        dom.setAttribute(el2,"style","margin: -8px auto 6px; text-align: center;");
        var el3 = dom.createTextNode(" \n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("i");
        dom.setAttribute(el3,"class","sucess-icon");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" 3 Candidates sucessfully added from your archive list \n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("table");
        dom.setAttribute(el2,"class","content-table match-table");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("tr");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        var el5 = dom.createTextNode(" ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"href","#");
        dom.setAttribute(el5,"class","conversation-show");
        var el6 = dom.createTextNode(" ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("img");
        dom.setAttribute(el6,"src","images/match/tdh.png");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(" ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("tr");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("td");
        var el5 = dom.createTextNode(" \n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"href","#");
        dom.setAttribute(el5,"class","conversation-show");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("img");
        dom.setAttribute(el6,"src","images/match/tb1.png");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("tr");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("td");
        var el5 = dom.createTextNode(" \n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"href","#");
        dom.setAttribute(el5,"class","conversation-show");
        var el6 = dom.createElement("img");
        dom.setAttribute(el6,"src","images/match/tb2.png");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("tr");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("td");
        var el5 = dom.createTextNode(" \n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"href","#");
        dom.setAttribute(el5,"class","conversation-show");
        var el6 = dom.createElement("img");
        dom.setAttribute(el6,"src","images/match/tb5.png");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" Modal ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"id","jobdetails");
        dom.setAttribute(el1,"style","display:none;width: 100%;background-color: #fff;padding: 10px 0;");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","content pagearea");
        dom.setAttribute(el2,"style","top:140px;");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"style","position: absolute;top:20px;right:0");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","btn btn-primary-outline");
        dom.setAttribute(el4,"style","padding: 2px 12px;font-size: 13px;");
        var el5 = dom.createTextNode(" Edit ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","btn btn btn-secondary-outline");
        dom.setAttribute(el4,"id","jobdetails-show");
        dom.setAttribute(el4,"style","padding: 2px 12px;font-size: 13px;");
        var el5 = dom.createTextNode(" Close ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3,"data-toggle","modal");
        dom.setAttribute(el3,"data-target","#formpreview");
        dom.setAttribute(el3,"style","position: relative;display: inline-block;left: 52px;padding: 14px 163px;top: 668px;");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3,"data-toggle","modal");
        dom.setAttribute(el3,"data-target","#interviewprocess");
        dom.setAttribute(el3,"style","position: relative;display: inline-block;left: 227px;padding:14px 123px;top: 668px;");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("img");
        dom.setAttribute(el3,"src","images/jobdetails.png");
        dom.setAttribute(el3,"style","width:1150px; margin-top: -35px;");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","modal fade");
        dom.setAttribute(el1,"id","formpreview");
        dom.setAttribute(el1,"tabindex","-1");
        dom.setAttribute(el1,"role","dialog");
        dom.setAttribute(el1,"aria-labelledby","formpreview");
        dom.setAttribute(el1,"aria-hidden","true");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","modal-dialog");
        dom.setAttribute(el2,"role","document");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","modal-content");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","modal-body");
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5,"src","images/apppre.png");
        dom.setAttribute(el5,"style","width:595px; margin-left:-12px;");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"class","close");
        dom.setAttribute(el5,"data-dismiss","modal");
        dom.setAttribute(el5,"aria-label","Close");
        dom.setAttribute(el5,"style","    position: absolute;top: 10px;right: 10px;");
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6,"aria-hidden","true");
        var el7 = dom.createTextNode("×");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6,"class","sr-only");
        var el7 = dom.createTextNode("Close");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","modal fade");
        dom.setAttribute(el1,"id","interviewprocess");
        dom.setAttribute(el1,"tabindex","-1");
        dom.setAttribute(el1,"role","dialog");
        dom.setAttribute(el1,"aria-labelledby","interviewprocess");
        dom.setAttribute(el1,"aria-hidden","true");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","modal-dialog");
        dom.setAttribute(el2,"role","document");
        dom.setAttribute(el2,"style","width:820px;");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","modal-content");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","modal-body");
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5,"src","images/intpre.png");
        dom.setAttribute(el5,"style","width:800px; margin-left:-12px;");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"class","close");
        dom.setAttribute(el5,"data-dismiss","modal");
        dom.setAttribute(el5,"aria-label","Close");
        dom.setAttribute(el5,"style","    position: absolute;top: 10px;right: 10px;");
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6,"aria-hidden","true");
        var el7 = dom.createTextNode("×");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6,"class","sr-only");
        var el7 = dom.createTextNode("Close");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" Modal ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("script");
        var el2 = dom.createTextNode("\n$( \"#jobdetails-show\" ).click(function(e) {\n	e.preventDefault();\n  $(this).toggleClass('copyfromselected');\n  $( \"#jobdetails\" ).slideToggle( \"fast\", function() {});\n  $('.normal').toggle();\n  $('body, html').toggleClass('body-white');\n});\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 1, 1, 1]),0,0);
        morphs[1] = dom.createMorphAt(fragment,16,16,contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","link-to",["dashboard"],[],0,null,["loc",[null,[4,12],[4,57]]]],
        ["content","outlet",["loc",[null,[136,0],[136,10]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('vadivel/templates/allcandidates', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 115,
            "column": 34
          }
        },
        "moduleName": "vadivel/templates/allcandidates.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","body");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","sub-header");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","content");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("ol");
        dom.setAttribute(el4,"class","breadcrumb");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createElement("a");
        dom.setAttribute(el6,"href","#");
        var el7 = dom.createTextNode("Recruit");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        dom.setAttribute(el5,"class","active");
        var el6 = dom.createTextNode("Library");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","row");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","dropdown col-sm-6");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6,"id","dLabel");
        dom.setAttribute(el6,"data-target","#");
        dom.setAttribute(el6,"data-toggle","dropdown");
        dom.setAttribute(el6,"aria-haspopup","true");
        dom.setAttribute(el6,"aria-expanded","false");
        dom.setAttribute(el6,"class","dropdown-toggle");
        var el7 = dom.createTextNode("\n              All Candidates\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"class","dropdown-menu");
        dom.setAttribute(el6,"aria-labelledby","dLabel");
        var el7 = dom.createTextNode("\n              ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7,"style","background: url('images/dropdown.png'); width: 229px; height: 299px; margin: -10px; background-size: 100%;");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","col-sm-6");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("ul");
        dom.setAttribute(el6,"class","sub-header-options pull-right");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("li");
        var el8 = dom.createTextNode("New Job Opening");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("li");
        var el8 = dom.createElement("i");
        dom.setAttribute(el8,"class","icon-rectangular");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("li");
        dom.setAttribute(el7,"id","filter-show");
        var el8 = dom.createElement("i");
        dom.setAttribute(el8,"class","icon-filter ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"style","position:absolute; right: 20px; margin-top: 4px; font-size: 18px; color:#788489;");
        var el6 = dom.createElement("i");
        dom.setAttribute(el6,"class","icon-ellipsis");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  \n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","content");
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" Filter ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","pop-sidebar");
        dom.setAttribute(el3,"id","filter-content");
        dom.setAttribute(el3,"style","min-width: 200px;background-color: #fff;top: -5px; min-height:600px;");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"href","#");
        dom.setAttribute(el4,"id","filter-hide");
        dom.setAttribute(el4,"style","position: absolute;padding: 28px;right: 0;");
        var el5 = dom.createTextNode(" \n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("img");
        dom.setAttribute(el4,"src","images/filter.png");
        dom.setAttribute(el4,"style","width:290px;");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","dropdown");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"id","dfilter");
        dom.setAttribute(el5,"data-target","#");
        dom.setAttribute(el5,"data-toggle","dropdown");
        dom.setAttribute(el5,"aria-haspopup","true");
        dom.setAttribute(el5,"class","dropdown-toggle");
        dom.setAttribute(el5,"style","margin-top: -42px;padding: 5px;position: relative;display: block;");
        var el6 = dom.createTextNode(" ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","dropdown-menu");
        dom.setAttribute(el5,"aria-labelledby","dfilter");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("img");
        dom.setAttribute(el6,"src","images/filter-options.png");
        dom.setAttribute(el6,"style","    width: 154px;");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(" \n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" Filter");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("table");
        dom.setAttribute(el3,"class","content-table");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("tr");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("th");
        var el6 = dom.createTextNode(" ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6,"href","#");
        dom.setAttribute(el6,"class","conversation-show");
        var el7 = dom.createTextNode(" ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("img");
        dom.setAttribute(el7,"src","images/tbh.png");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode(" ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("tr");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("td");
        var el6 = dom.createTextNode(" ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6,"href","#");
        dom.setAttribute(el6,"class","conversation-show");
        var el7 = dom.createElement("img");
        dom.setAttribute(el7,"src","images/tb1.png");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("tr");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("td");
        var el6 = dom.createTextNode(" ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6,"href","#");
        dom.setAttribute(el6,"class","conversation-show");
        var el7 = dom.createElement("img");
        dom.setAttribute(el7,"src","images/tb2.png");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("tr");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("td");
        var el6 = dom.createTextNode(" ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6,"href","#");
        dom.setAttribute(el6,"class","conversation-show");
        var el7 = dom.createElement("img");
        dom.setAttribute(el7,"src","images/tb3.png");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("tr");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("td");
        var el6 = dom.createTextNode(" ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6,"href","#");
        dom.setAttribute(el6,"class","conversation-show");
        var el7 = dom.createElement("img");
        dom.setAttribute(el7,"src","images/tb5.png");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("tr");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("td");
        var el6 = dom.createTextNode(" ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6,"href","#");
        dom.setAttribute(el6,"class","conversation-show");
        var el7 = dom.createElement("img");
        dom.setAttribute(el7,"src","images/tb6.png");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("tr");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("td");
        var el6 = dom.createTextNode(" ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6,"href","#");
        dom.setAttribute(el6,"class","conversation-show");
        var el7 = dom.createElement("img");
        dom.setAttribute(el7,"src","images/tb4.png");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" conversation Section Code ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","pop-sidebar");
        dom.setAttribute(el1,"id","conversation-content");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"style","background:#fff; margin:-10px; padding:10px;margin-bottom: 0; border-bottom:2px solid #edeef2");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3,"href","#");
        dom.setAttribute(el3,"id","conversation-hide");
        var el4 = dom.createTextNode(" \n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"style","background:#000; padding:0 4px; color:#fff; width:15px; height:16px; line-height:1;");
        var el5 = dom.createTextNode(" x  ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("img");
        dom.setAttribute(el3,"src","images/conv1.jpg");
        dom.setAttribute(el3,"style","width: 580px; margin: 15px 0px 0 20px;");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"style","background-color: #fff;margin: 0px -10px; padding: 0px 35px; border-bottom:1px solid #cddae2;");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("nav");
        dom.setAttribute(el3,"class","navbar navbar-light");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4,"class","navbar-toggler hidden-sm-up");
        dom.setAttribute(el4,"type","button");
        dom.setAttribute(el4,"data-toggle","collapse");
        dom.setAttribute(el4,"data-target","#exCollapsingNavbar2");
        var el5 = dom.createTextNode("\n        ☰\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","collapse navbar-toggleable-xs");
        dom.setAttribute(el4,"id","exCollapsingNavbar2");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("ul");
        dom.setAttribute(el5,"class","nav navbar-nav");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        dom.setAttribute(el6,"class","nav-item");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"class","nav-link");
        dom.setAttribute(el7,"href","#timeline");
        dom.setAttribute(el7,"role","tab");
        dom.setAttribute(el7,"data-toggle","tab");
        var el8 = dom.createTextNode("Timeline ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("span");
        dom.setAttribute(el8,"class","sr-only");
        var el9 = dom.createTextNode("(current)");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        dom.setAttribute(el6,"class","nav-item active");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"class","nav-link");
        dom.setAttribute(el7,"href","#conversation-tab");
        dom.setAttribute(el7,"role","tab");
        dom.setAttribute(el7,"data-toggle","tab");
        var el8 = dom.createTextNode("Conversation");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        dom.setAttribute(el6,"class","nav-item");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"class","nav-link");
        dom.setAttribute(el7,"href","#profile");
        dom.setAttribute(el7,"role","tab");
        dom.setAttribute(el7,"data-toggle","tab");
        var el8 = dom.createTextNode("Profile / Resume");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        dom.setAttribute(el6,"class","nav-item");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"class","nav-link");
        dom.setAttribute(el7,"href","#Offer");
        dom.setAttribute(el7,"role","tab");
        dom.setAttribute(el7,"data-toggle","tab");
        var el8 = dom.createTextNode("Offer");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","tab-content");
        dom.setAttribute(el2,"style","overflow-y:auto; min-height:100%; padding-top: 10px; margin: 0px -10px -20px 0px;");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"role","tabpanel");
        dom.setAttribute(el3,"class","tab-pane");
        dom.setAttribute(el3,"id","timeline");
        var el4 = dom.createTextNode(" timeline ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"role","tabpanel");
        dom.setAttribute(el3,"class","tab-pane active");
        dom.setAttribute(el3,"id","conversation-tab");
        var el4 = dom.createTextNode(" \n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5,"src","images/conversation.png");
        dom.setAttribute(el5,"style","width: 576px;margin-left: 8px;");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"style","padding:15px; position:relative; width:100%");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("ul");
        dom.setAttribute(el5,"class","list-inline");
        dom.setAttribute(el5,"style","background-color: #fff; border-radius: 3px;padding: 5px;box-sizing: border-box;position: fixed;width: 580px;");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"href","#");
        dom.setAttribute(el7,"id","reply");
        var el8 = dom.createTextNode(" Reply ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"href","#");
        dom.setAttribute(el7,"id","comment");
        var el8 = dom.createTextNode(" Comment ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"role","tabpanel");
        dom.setAttribute(el3,"class","tab-pane");
        dom.setAttribute(el3,"id","profile");
        var el4 = dom.createTextNode(" profile ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"role","tabpanel");
        dom.setAttribute(el3,"class","tab-pane");
        dom.setAttribute(el3,"id","Offer");
        var el4 = dom.createTextNode(" offer ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" conversation Section Code ");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() { return []; },
      statements: [

      ],
      locals: [],
      templates: []
    };
  }()));

});
define('vadivel/templates/application', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 57,
            "column": 9
          }
        },
        "moduleName": "vadivel/templates/application.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("header");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","content");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","logo");
        var el4 = dom.createTextNode("  \n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("img");
        dom.setAttribute(el4,"src","images/logo.png");
        dom.setAttribute(el4,"title","FreshTeam");
        dom.setAttribute(el4,"alt","FreshTeam");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","menu");
        var el4 = dom.createTextNode(" \n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"href","#");
        var el5 = dom.createElement("i");
        dom.setAttribute(el5,"class","icon-user");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4,"class","dropdown");
        dom.setAttribute(el4,"style","position:relative;");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"class","selected dropdown-toggle");
        dom.setAttribute(el5,"id","dmenu");
        dom.setAttribute(el5,"data-target","#");
        dom.setAttribute(el5,"data-toggle","dropdown");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("i");
        dom.setAttribute(el6,"class","icon-company");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","dropdown-menu");
        dom.setAttribute(el5,"aria-labelledby","dmenu");
        dom.setAttribute(el5,"style","left: -196px; top: 40px;");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"style","background: url('images/menu.jpg'); width: 469px; height: 274px; margin: -10px; background-size: 100%;");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"href","#");
        var el5 = dom.createElement("i");
        dom.setAttribute(el5,"class","icon-search");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","settings");
        var el4 = dom.createTextNode(" \n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4,"class","dropdown");
        dom.setAttribute(el4,"style","position:relative;");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"class","dropdown-toggle helptog");
        dom.setAttribute(el5,"id","hmenu");
        dom.setAttribute(el5,"data-target","#");
        dom.setAttribute(el5,"data-toggle","dropdown");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("i");
        dom.setAttribute(el6,"class","icon-settings");
        dom.setAttribute(el6,"style","font-size: 21px;margin-right: 7px;margin-top: -1px;");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","dropdown-menu");
        dom.setAttribute(el5,"aria-labelledby","hmenu");
        dom.setAttribute(el5,"style","z-index:15; top: 35px; left: -50px;");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"style","background: url('images/helpmenu.png'); width: 142px; height: 111px; background-size: 100%;");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4,"class","dropdown");
        dom.setAttribute(el4,"style","position:relative;");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"class","dropdown-toggle helptog");
        dom.setAttribute(el5,"id","hmenu");
        dom.setAttribute(el5,"data-target","#");
        dom.setAttribute(el5,"data-toggle","dropdown");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("i");
        dom.setAttribute(el6,"class","icon-help");
        dom.setAttribute(el6,"style","font-size: 21px;margin-right: 7px;margin-top: -1px;");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","dropdown-menu");
        dom.setAttribute(el5,"aria-labelledby","hmenu");
        dom.setAttribute(el5,"style","z-index:15; top: 35px; left: -50px;");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"style","background: url('images/helpmenu.png'); width: 142px; height: 111px; background-size: 100%;");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("script");
        var el2 = dom.createTextNode("\n  $( \".conversation-show\" ).click(function(e) {\n    e.preventDefault();\n    $('#conversation-content').animate({\n      right: '0px',\n      opacity: 1\n    }, 400);\n\n  });\n  $( \"#conversation-hide\" ).click(function(e) {\n    e.preventDefault();\n    $('#conversation-content').animate({\n    right: '-1000px',\n    opacity: 0\n    }, 400); \n  });\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,3,3,contextualElement);
        return morphs;
      },
      statements: [
        ["content","outlet",["loc",[null,[39,0],[39,10]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('vadivel/templates/avail-candidate', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 12
            },
            "end": {
              "line": 4,
              "column": 43
            }
          },
          "moduleName": "vadivel/templates/avail-candidate.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode(" Recruit ");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 569,
            "column": 10
          }
        },
        "moduleName": "vadivel/templates/avail-candidate.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","sub-header");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","content");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("ol");
        dom.setAttribute(el3,"class","breadcrumb");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("Drafts");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","row");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","dropdown col-sm-5 title");
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"id","dLabel");
        dom.setAttribute(el5,"data-target","#");
        dom.setAttribute(el5,"data-toggle","dropdown");
        dom.setAttribute(el5,"aria-haspopup","true");
        dom.setAttribute(el5,"aria-expanded","false");
        dom.setAttribute(el5,"class","");
        var el6 = dom.createTextNode("\n              Senior Android Developer\n          ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","text-muted");
        var el6 = dom.createTextNode("Senior Android Developer, requistion #398 | 16 jul 2014, at 6.30am");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","col-sm-3");
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5,"src","images/mem3.png");
        dom.setAttribute(el5,"style","width:321px; margin-top: -25px;");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","col-sm-4 header-options");
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","dropdown");
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6,"id","dpublish");
        dom.setAttribute(el6,"data-target","#");
        dom.setAttribute(el6,"data-toggle","dropdown");
        dom.setAttribute(el6,"aria-haspopup","true");
        dom.setAttribute(el6,"class","dropdown-toggle btn-subheader");
        var el7 = dom.createTextNode("\n                Publish\n            ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"class","dropdown-menu");
        dom.setAttribute(el6,"aria-labelledby","dpublish");
        dom.setAttribute(el6,"style","margin-top: 25px;margin-left: 182px;");
        var el7 = dom.createTextNode("\n              ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"class","dropdown-item");
        dom.setAttribute(el7,"href","#");
        var el8 = dom.createTextNode("Publish ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n              ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"class","dropdown-item");
        dom.setAttribute(el7,"href","#");
        var el8 = dom.createTextNode("Published Internally");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n              ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"class","dropdown-item");
        dom.setAttribute(el7,"href","#");
        var el8 = dom.createTextNode("On Hold");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n              ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"class","dropdown-item");
        dom.setAttribute(el7,"href","#");
        var el8 = dom.createTextNode("Draft");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n              ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"class","dropdown-item");
        dom.setAttribute(el7,"href","#");
        var el8 = dom.createTextNode("Closed");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("ul");
        dom.setAttribute(el5,"class","sub-header-options pull-right");
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createTextNode("\n              Add Candidate\n            ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createTextNode("\n              ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        dom.setAttribute(el7,"class","dropdown downtog");
        dom.setAttribute(el7,"style","position:relative;");
        var el8 = dom.createTextNode("\n                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("a");
        dom.setAttribute(el8,"class","dropdown-toggle");
        dom.setAttribute(el8,"id","dnmenu");
        dom.setAttribute(el8,"data-target","#");
        dom.setAttribute(el8,"data-toggle","dropdown");
        var el9 = dom.createTextNode("\n                  ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("i");
        dom.setAttribute(el9,"class","icon-down");
        var el10 = dom.createTextNode(" ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"class","dropdown-menu");
        dom.setAttribute(el8,"aria-labelledby","dnmenu");
        dom.setAttribute(el8,"style","z-index:15; top: 15px; left: -50px;");
        var el9 = dom.createTextNode("\n                  ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("a");
        dom.setAttribute(el9,"class","dropdown-item");
        dom.setAttribute(el9,"href","#");
        var el10 = dom.createTextNode("Add tag ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                  ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("a");
        dom.setAttribute(el9,"class","dropdown-item");
        dom.setAttribute(el9,"href","#");
        var el10 = dom.createTextNode("Send e-mail ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                  ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("a");
        dom.setAttribute(el9,"class","dropdown-item");
        dom.setAttribute(el9,"href","#");
        var el10 = dom.createTextNode("Schedule interview");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n\n                  ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("a");
        dom.setAttribute(el9,"class","dropdown-item");
        dom.setAttribute(el9,"href","#");
        var el10 = dom.createTextNode("Reject candidate");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                  ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("a");
        dom.setAttribute(el9,"class","dropdown-item");
        dom.setAttribute(el9,"href","#");
        var el10 = dom.createTextNode("Archive candidate");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                  ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("a");
        dom.setAttribute(el9,"class","dropdown-item");
        dom.setAttribute(el9,"href","#");
        var el10 = dom.createTextNode("Move candidate");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                  ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("a");
        dom.setAttribute(el9,"class","dropdown-item");
        dom.setAttribute(el9,"href","#");
        var el10 = dom.createTextNode("Delete candidate");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        dom.setAttribute(el6,"id","jobdetails-show");
        var el7 = dom.createTextNode(" ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        dom.setAttribute(el7,"style","padding:0 5px; font-size: 13px; font-weight: 600;");
        var el8 = dom.createTextNode("i");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        dom.setAttribute(el6,"style","opacity:0.5");
        var el7 = dom.createElement("i");
        dom.setAttribute(el7,"class","icon-rectangular");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        dom.setAttribute(el6,"id","filter-show");
        var el7 = dom.createElement("i");
        dom.setAttribute(el7,"class","icon-filter ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","conversation-show");
        dom.setAttribute(el4,"style","position:absolute; right: 20px; margin-top: 14px; font-size: 18px; color:#788489;");
        var el5 = dom.createElement("i");
        dom.setAttribute(el5,"class","icon-ellipsis");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("  \n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"id","jobdetails");
        dom.setAttribute(el1,"style","display:none;width: 100%;background-color: #fff;padding: 10px 0;");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","content pagearea");
        dom.setAttribute(el2,"style","top:140px;");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"style","position: absolute;top:20px;right:0");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","btn btn-primary-outline");
        dom.setAttribute(el4,"style","padding: 2px 12px;font-size: 13px;");
        var el5 = dom.createTextNode(" Edit ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","btn btn btn-secondary-outline");
        dom.setAttribute(el4,"id","jobdetails-show");
        dom.setAttribute(el4,"style","padding: 2px 12px;font-size: 13px;");
        var el5 = dom.createTextNode(" Close ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3,"data-toggle","modal");
        dom.setAttribute(el3,"data-target","#formpreview");
        dom.setAttribute(el3,"style","position: relative;display: inline-block;left: 52px;padding: 14px 163px;top: 668px;");
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3,"data-toggle","modal");
        dom.setAttribute(el3,"data-target","#interviewprocess");
        dom.setAttribute(el3,"style","position: relative;display: inline-block;left: 227px;padding:14px 123px;top: 668px;");
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("img");
        dom.setAttribute(el3,"src","images/jobdetails.png");
        dom.setAttribute(el3,"style","width:1150px; margin-top: -35px;");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","pagearea ab-center");
        dom.setAttribute(el1,"id","avail-candidate");
        dom.setAttribute(el1,"style","width:1075px;");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","content normal");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" Filter ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","pop-sidebar");
        dom.setAttribute(el3,"id","filter-content");
        dom.setAttribute(el3,"style","min-width: 200px;background-color: #fff;top: -5px; min-height:600px;");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"href","#");
        dom.setAttribute(el4,"id","filter-hide");
        dom.setAttribute(el4,"style","position: absolute;padding: 28px;right: 0;");
        var el5 = dom.createTextNode(" \n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("img");
        dom.setAttribute(el4,"src","images/filter.png");
        dom.setAttribute(el4,"style","width:290px;");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","dropdown");
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"id","dfilter");
        dom.setAttribute(el5,"data-target","#");
        dom.setAttribute(el5,"data-toggle","dropdown");
        dom.setAttribute(el5,"aria-haspopup","true");
        dom.setAttribute(el5,"class","dropdown-toggle");
        dom.setAttribute(el5,"style","margin-top: -42px;padding: 5px;position: relative;display: block;");
        var el6 = dom.createTextNode(" ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","dropdown-menu");
        dom.setAttribute(el5,"aria-labelledby","dfilter");
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("img");
        dom.setAttribute(el6,"src","images/filter-options.png");
        dom.setAttribute(el6,"style","    width: 154px;");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(" \n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" Filter");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"style","margin-bottom: -40px;position: relative;float: right;top: 6px;margin-right: -80px;cursor:pointer;");
        dom.setAttribute(el3,"class","nextstagelink");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("img");
        dom.setAttribute(el4,"src","images/nextstage.png");
        dom.setAttribute(el4,"class","nextstage");
        dom.setAttribute(el4,"style","width:75px;");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  	");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("table");
        dom.setAttribute(el3,"class","simple_with_no_drag vertical");
        var el4 = dom.createTextNode("\n  		");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("tr");
        var el5 = dom.createTextNode("\n  			");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("td");
        var el6 = dom.createTextNode(" ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("img");
        dom.setAttribute(el6,"src","images/shortlist.png");
        dom.setAttribute(el6,"style","width:90px;");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(" ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n  			");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("td");
        var el6 = dom.createTextNode(" ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("img");
        dom.setAttribute(el6,"src","images/f2f.png");
        dom.setAttribute(el6,"style","width:90px;");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(" ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n  			");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("td");
        var el6 = dom.createTextNode(" ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("img");
        dom.setAttribute(el6,"src","images/arc.png");
        dom.setAttribute(el6,"style","width:90px;");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(" ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n  			");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("td");
        var el6 = dom.createTextNode(" ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("img");
        dom.setAttribute(el6,"src","images/del.png");
        dom.setAttribute(el6,"style","width:90px;");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(" ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n  		");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n  	");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  	");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","shortlist");
        dom.setAttribute(el3,"style","display:none");
        var el4 = dom.createTextNode("\n  		");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("img");
        dom.setAttribute(el4,"src","images/mm.png");
        dom.setAttribute(el4,"style","width: 164px;position: fixed;z-index: 999;bottom: 77px;left: 29%;");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n  	");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("table");
        dom.setAttribute(el3,"class","content-table match-table");
        var el4 = dom.createTextNode("\n    	");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("thead");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("tr");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("th");
        var el7 = dom.createTextNode(" ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"href","#");
        dom.setAttribute(el7,"class","profile-show");
        var el8 = dom.createTextNode(" ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("img");
        dom.setAttribute(el8,"src","images/match/tdh2.png");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode(" ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("tbody");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("tr");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("td");
        var el7 = dom.createTextNode(" \n          ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"href","#");
        dom.setAttribute(el7,"class","profile-show");
        var el8 = dom.createTextNode("\n            ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("img");
        dom.setAttribute(el8,"src","images/match/tb1.png");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("tr");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("td");
        var el7 = dom.createTextNode(" \n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"href","#");
        dom.setAttribute(el7,"class","profile-show");
        var el8 = dom.createElement("img");
        dom.setAttribute(el8,"src","images/match/tb2.png");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("tr");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("td");
        dom.setAttribute(el6,"class","matchselected");
        var el7 = dom.createTextNode(" \n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"href","#");
        dom.setAttribute(el7,"class","profile-show");
        var el8 = dom.createElement("img");
        dom.setAttribute(el8,"src","images/match/tb6.png");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("tr");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("td");
        var el7 = dom.createTextNode(" \n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"href","#");
        dom.setAttribute(el7,"class","profile-show");
        var el8 = dom.createElement("img");
        dom.setAttribute(el8,"src","images/match/tb5.png");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("tr");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("td");
        var el7 = dom.createTextNode(" \n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"href","#");
        dom.setAttribute(el7,"class","profile-show");
        var el8 = dom.createElement("img");
        dom.setAttribute(el8,"src","images/match/tb3.png");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("tr");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("td");
        var el7 = dom.createTextNode(" \n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"href","#");
        dom.setAttribute(el7,"class","profile-show");
        var el8 = dom.createElement("img");
        dom.setAttribute(el8,"src","images/match/tb4.png");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","pagearea ab-center");
        dom.setAttribute(el1,"id","stages");
        dom.setAttribute(el1,"style","opacity:0; right:-4000px;width:1075px;");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","content normal");
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" Filter ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","pop-sidebar");
        dom.setAttribute(el3,"id","filter-content");
        dom.setAttribute(el3,"style","min-width: 200px;background-color: #fff;top: -5px; min-height:600px;");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"href","#");
        dom.setAttribute(el4,"id","filter-hide");
        dom.setAttribute(el4,"style","position: absolute;padding: 28px;right: 0;");
        var el5 = dom.createTextNode(" \n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("img");
        dom.setAttribute(el4,"src","images/filter.png");
        dom.setAttribute(el4,"style","width:290px;");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","dropdown");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"id","dfilter");
        dom.setAttribute(el5,"data-target","#");
        dom.setAttribute(el5,"data-toggle","dropdown");
        dom.setAttribute(el5,"aria-haspopup","true");
        dom.setAttribute(el5,"class","dropdown-toggle");
        dom.setAttribute(el5,"style","margin-top: -42px;padding: 5px;position: relative;display: block;");
        var el6 = dom.createTextNode(" ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","dropdown-menu");
        dom.setAttribute(el5,"aria-labelledby","dfilter");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("img");
        dom.setAttribute(el6,"src","images/filter-options.png");
        dom.setAttribute(el6,"style","    width: 154px;");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(" \n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" Filter");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"style","margin-bottom: -40px;position: relative;float: right;top: 6px;margin-right:-80px; cursor:pointer;");
        var el4 = dom.createElement("img");
        dom.setAttribute(el4,"src","images/nextstage.png");
        dom.setAttribute(el4,"style","width:75px;");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(" ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","prevstage");
        dom.setAttribute(el3,"style","cursor:pointer;margin-bottom: -40px;position: relative;float: left;margin-left: -90px;top:7px;");
        var el4 = dom.createElement("img");
        dom.setAttribute(el4,"src","images/prevstage.png");
        dom.setAttribute(el4,"style","width:89px;");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","sortable-table");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("table");
        dom.setAttribute(el4,"class","inline-table");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("thead");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("tr");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("th");
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"style","text-align:center; border-radius:3px; background: #45C4CE; color:#fff; padding:5px 10px; font-weight:normal;");
        var el9 = dom.createTextNode(" Shortlist 05 ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("tbody");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("tr");
        dom.setAttribute(el6,"class","profile-show");
        var el7 = dom.createElement("td");
        var el8 = dom.createTextNode("\n          ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"style","text-align:center;border-radius:3px; background: #fff; padding:5px 10px; ");
        var el9 = dom.createTextNode(" \n            ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("img");
        dom.setAttribute(el9,"src","images/stage/1.png");
        dom.setAttribute(el9,"style","width: 178px;");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n          ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n          ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("tr");
        dom.setAttribute(el6,"class","profile-show");
        var el7 = dom.createElement("td");
        var el8 = dom.createTextNode("\n          ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"style","text-align:center;border-radius:3px; background: #fff; padding:5px 10px; ");
        var el9 = dom.createTextNode(" \n            ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("img");
        dom.setAttribute(el9,"src","images/stage/2.png");
        dom.setAttribute(el9,"style","width: 178px;");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n          ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n          ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("tr");
        dom.setAttribute(el6,"class","profile-show");
        var el7 = dom.createElement("td");
        var el8 = dom.createTextNode("\n          ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"style","text-align:center;border-radius:3px; background: #fff; padding:5px 10px; ");
        var el9 = dom.createTextNode(" \n            ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("img");
        dom.setAttribute(el9,"src","images/stage/3.png");
        dom.setAttribute(el9,"style","width: 178px;");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n          ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n          ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("tr");
        dom.setAttribute(el6,"class","profile-show");
        var el7 = dom.createElement("td");
        var el8 = dom.createTextNode("\n          ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"style","text-align:center;border-radius:3px; background: #fff; padding:5px 10px; ");
        var el9 = dom.createTextNode(" \n            ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("img");
        dom.setAttribute(el9,"src","images/stage/4.png");
        dom.setAttribute(el9,"style","width: 178px;");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n          ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n          ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("tr");
        dom.setAttribute(el6,"class","profile-show");
        var el7 = dom.createElement("td");
        var el8 = dom.createTextNode("\n          ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"style","text-align:center;border-radius:3px; background: #fff; padding:5px 10px; ");
        var el9 = dom.createTextNode(" \n            ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("img");
        dom.setAttribute(el9,"src","images/stage/5.png");
        dom.setAttribute(el9,"style","width: 178px;");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n          ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n          ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("tr");
        dom.setAttribute(el6,"class","profile-show");
        var el7 = dom.createElement("td");
        var el8 = dom.createTextNode("\n          ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"style","text-align:center;border-radius:3px; background: #fff; padding:5px 10px; ");
        var el9 = dom.createTextNode(" \n            ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("img");
        dom.setAttribute(el9,"src","images/stage/6.png");
        dom.setAttribute(el9,"style","width: 178px;");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n          ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n          ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"class","text-muted");
        dom.setAttribute(el6,"style","text-align: center;margin-top: 15px;    margin-left: -5px;");
        var el7 = dom.createTextNode("4 candidates rejected");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("table");
        dom.setAttribute(el4,"class","inline-table");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("thead");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("tr");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("th");
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"style","text-align:center;border-radius:3px; background: #45C4CE; color:#fff; padding:5px 10px; font-weight:normal; ");
        var el9 = dom.createTextNode(" Challange Round 04 ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("tbody");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("tr");
        dom.setAttribute(el6,"class","profile-show");
        var el7 = dom.createElement("td");
        var el8 = dom.createTextNode("\n            ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"style","text-align:center;border-radius:3px; background: #fff; padding:5px 10px;");
        var el9 = dom.createTextNode("\n              ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("img");
        dom.setAttribute(el9,"src","images/stage/11.png");
        dom.setAttribute(el9,"style"," width: 178px;");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n          ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n          ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("tr");
        dom.setAttribute(el6,"class","profile-show");
        var el7 = dom.createElement("td");
        var el8 = dom.createTextNode("\n          ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"style","text-align:center;border-radius:3px; background: #fff; padding:5px 10px; ");
        var el9 = dom.createTextNode(" \n            ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("img");
        dom.setAttribute(el9,"src","images/stage/12.png");
        dom.setAttribute(el9,"style","width: 178px;");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n          ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n          ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("tr");
        dom.setAttribute(el6,"class","profile-show");
        var el7 = dom.createElement("td");
        var el8 = dom.createTextNode("\n          ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"style","text-align:center;border-radius:3px; background: #fff; padding:5px 10px; ");
        var el9 = dom.createTextNode(" \n            ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("img");
        dom.setAttribute(el9,"src","images/stage/13.png");
        dom.setAttribute(el9,"style","width: 178px;");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n          ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n          ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"class","text-muted");
        dom.setAttribute(el6,"style","text-align: center;margin-top: 15px;    margin-left: -5px;");
        var el7 = dom.createTextNode("3 candidates rejected");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("table");
        dom.setAttribute(el4,"class","inline-table");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("thead");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("tr");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("th");
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"style","text-align:center;border-radius:3px; background: #45C4CE; color:#fff; padding:5px 10px; font-weight:normal; ");
        var el9 = dom.createTextNode(" Face To Face 02 ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("tbody");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("tr");
        dom.setAttribute(el6,"class","profile-show");
        var el7 = dom.createElement("td");
        var el8 = dom.createTextNode("\n          ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"style","text-align:center;border-radius:3px; background: #fff; padding:5px 10px; ");
        var el9 = dom.createTextNode(" \n            ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("img");
        dom.setAttribute(el9,"src","images/stage/21.png");
        dom.setAttribute(el9,"style","width: 178px;");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n          ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n          ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("tr");
        dom.setAttribute(el6,"class","profile-show");
        var el7 = dom.createElement("td");
        var el8 = dom.createTextNode("\n          ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"style","text-align:center;border-radius:3px; background: #fff; padding:5px 10px; ");
        var el9 = dom.createTextNode(" \n            ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("img");
        dom.setAttribute(el9,"src","images/stage/22.png");
        dom.setAttribute(el9,"style","width: 178px;");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n          ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n          ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"class","text-muted");
        dom.setAttribute(el6,"style","text-align: center;margin-top: 15px;    margin-left: -5px;");
        var el7 = dom.createTextNode("2 candidates rejected");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("table");
        dom.setAttribute(el4,"class","inline-table");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("thead");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("tr");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("th");
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"style","text-align:center;border-radius:3px; background: #45C4CE; color:#fff; padding:5px 10px; font-weight:normal; ");
        var el9 = dom.createTextNode(" Technical Round ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("tbody");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("tr");
        dom.setAttribute(el6,"class","profile-show");
        var el7 = dom.createElement("td");
        var el8 = dom.createTextNode("\n          ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"style","text-align:center;border-radius:3px; background: #fff; padding:5px 10px; ");
        var el9 = dom.createTextNode(" \n            ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("img");
        dom.setAttribute(el9,"src","images/stage/1.png");
        dom.setAttribute(el9,"style","width: 178px;");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n          ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n          ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("table");
        dom.setAttribute(el4,"class","inline-table last-table");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("thead");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("tr");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("td");
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"style","text-align:center;border-radius:3px; background: #45C4CE; color:#fff; padding:5px 10px; font-weight:normal;");
        var el9 = dom.createTextNode(" Leadership Round ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("tbody");
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","pop-sidebar");
        dom.setAttribute(el1,"id","conversation-content");
        dom.setAttribute(el1,"style","top: 153px;z-index: 8; min-width: 200px;background-color: #fff; height:760px; z-index:8;");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2,"href","#");
        dom.setAttribute(el2,"id","conversation-hide");
        dom.setAttribute(el2,"class","position: absolute;padding: 19px 55px;right: 0;");
        var el3 = dom.createTextNode(" \n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"style","position: absolute;right: 36px;top: 28px;padding: 10px;box-sizing: border-box;");
        var el4 = dom.createTextNode(" ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("img");
        dom.setAttribute(el2,"src","images/stage/canstage.png");
        dom.setAttribute(el2,"style","width:297px;");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","pop-sidebar fullsize");
        dom.setAttribute(el1,"id","profile-content");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"style","background:#fff; margin:-10px; padding:10px;margin-bottom: 0; border-bottom:2px solid #edeef2");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3,"href","#");
        dom.setAttribute(el3,"id","profile-hide");
        var el4 = dom.createTextNode(" \n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"style","background:#000; padding:0 4px; color:#fff; width:15px; height:16px; line-height:1;");
        var el5 = dom.createTextNode(" x  ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("img");
        dom.setAttribute(el3,"src","images/conv2.jpg");
        dom.setAttribute(el3,"style","width: 580px; margin: 15px 0px 0;");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","dropdown");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"id","tech");
        dom.setAttribute(el4,"data-target","#");
        dom.setAttribute(el4,"data-toggle","dropdown");
        dom.setAttribute(el4,"aria-haspopup","true");
        dom.setAttribute(el4,"aria-expanded","false");
        dom.setAttribute(el4,"class","dropdown-toggle");
        dom.setAttribute(el4,"style","padding: 13px 84px;position: absolute;top: -36px;right: 17px;");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","dropdown-menu");
        dom.setAttribute(el4,"aria-labelledby","tech");
        dom.setAttribute(el4,"style","position: absolute;margin-left: 394px;top: -13px;");
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"style","background: url('images/conv/tech.png');width: 164px; height: 353px; margin: 1px; background-size: 100%;");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","dropdown");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"id","demail");
        dom.setAttribute(el4,"data-target","#");
        dom.setAttribute(el4,"data-toggle","dropdown");
        dom.setAttribute(el4,"aria-haspopup","true");
        dom.setAttribute(el4,"aria-expanded","false");
        dom.setAttribute(el4,"class","dropdown-toggle");
        dom.setAttribute(el4,"style","position: absolute;top: -68px;right: 21px;padding: 11px;");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","dropdown-menu");
        dom.setAttribute(el4,"aria-labelledby","demail");
        dom.setAttribute(el4,"style","position: absolute;margin-left: 425px;top: -46px;");
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"style","background: url('images/conv/email.png');width: 157px; height: 265px; margin: 1px; background-size: 100%;");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","dropdown");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"id","reject");
        dom.setAttribute(el4,"data-target","#");
        dom.setAttribute(el4,"data-toggle","dropdown");
        dom.setAttribute(el4,"aria-haspopup","true");
        dom.setAttribute(el4,"aria-expanded","false");
        dom.setAttribute(el4,"class","dropdown-toggle");
        dom.setAttribute(el4,"style","    position: absolute;top: -68px;right: 126px;padding: 11px; ");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","dropdown-menu");
        dom.setAttribute(el4,"aria-labelledby","reject");
        dom.setAttribute(el4,"style","position: absolute;margin-left: 377px;top: -46px;");
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"style","background: url('images/conv/reject.png');width: 194px; height: 305px; margin: 1px; background-size: 100%;");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"style","background-color: #fff;margin: 0px -10px; padding: 0px 35px; border-bottom:1px solid #cddae2;");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("nav");
        dom.setAttribute(el3,"class","navbar navbar-light");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4,"class","navbar-toggler hidden-sm-up");
        dom.setAttribute(el4,"type","button");
        dom.setAttribute(el4,"data-toggle","collapse");
        dom.setAttribute(el4,"data-target","#exCollapsingNavbar2");
        var el5 = dom.createTextNode("\n        ☰\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","collapse navbar-toggleable-xs");
        dom.setAttribute(el4,"id","exCollapsingNavbar2");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("ul");
        dom.setAttribute(el5,"class","nav navbar-nav");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        dom.setAttribute(el6,"class","nav-item");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"class","nav-link");
        dom.setAttribute(el7,"href","#timeline");
        dom.setAttribute(el7,"role","tab");
        dom.setAttribute(el7,"data-toggle","tab");
        var el8 = dom.createTextNode("Timeline ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("span");
        dom.setAttribute(el8,"class","sr-only");
        var el9 = dom.createTextNode("(current)");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        dom.setAttribute(el6,"class","nav-item active");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"class","nav-link");
        dom.setAttribute(el7,"href","#conversation-tab");
        dom.setAttribute(el7,"role","tab");
        dom.setAttribute(el7,"data-toggle","tab");
        var el8 = dom.createTextNode("Conversation");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        dom.setAttribute(el6,"class","nav-item");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"class","nav-link");
        dom.setAttribute(el7,"href","#profile");
        dom.setAttribute(el7,"role","tab");
        dom.setAttribute(el7,"data-toggle","tab");
        var el8 = dom.createTextNode("Profile / Resume");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        dom.setAttribute(el6,"class","nav-item");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"class","nav-link");
        dom.setAttribute(el7,"href","#Offer");
        dom.setAttribute(el7,"role","tab");
        dom.setAttribute(el7,"data-toggle","tab");
        var el8 = dom.createTextNode("Offer");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","tab-content");
        dom.setAttribute(el2,"style","overflow-y:auto;min-height:100%; padding-top: 10px; margin: 0px -10px -20px 0px;");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"role","tabpanel");
        dom.setAttribute(el3,"class","tab-pane");
        dom.setAttribute(el3,"id","timeline");
        var el4 = dom.createTextNode(" \n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"style","background-color: #fff;margin: -10px 0;left: -10px;position: absolute;padding: 54px;height: 100%; padding-right:400px;");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5,"src","images/timeline.png");
        dom.setAttribute(el5,"style","width: 344px;margin-left: 8px;");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"role","tabpanel");
        dom.setAttribute(el3,"class","tab-pane active");
        dom.setAttribute(el3,"id","conversation-tab");
        var el4 = dom.createTextNode(" \n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5,"src","images/conversation.png");
        dom.setAttribute(el5,"style","width: 576px;margin-left: 8px;");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"style","padding:15px; position: fixed; width:100%; bottom:-16px");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5,"src","images/con-reply.png");
        dom.setAttribute(el5,"style","width: 620px; margin-left: -25px;");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"role","tabpanel");
        dom.setAttribute(el3,"class","tab-pane");
        dom.setAttribute(el3,"id","profile");
        var el4 = dom.createTextNode(" \n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("img");
        dom.setAttribute(el4,"src","images/resume.png");
        dom.setAttribute(el4,"style","width: 576px;margin-left: 8px;");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"role","tabpanel");
        dom.setAttribute(el3,"class","tab-pane");
        dom.setAttribute(el3,"id","Offer");
        var el4 = dom.createTextNode(" \n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("img");
        dom.setAttribute(el4,"src","images/offer.png");
        dom.setAttribute(el4,"style","width: 576px;margin-left: 8px;");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" <div class=\"pop-sidebar fullsize\" id=\"conversation-content\">\n  <div style=\"background:#fff; margin:-10px; padding:10px;margin-bottom: 0; border-bottom:2px solid #edeef2\">\n    <a href=\"#\" id=\"conversation-hide\"> \n      <div style=\"background:#000; padding:0 4px; color:#fff; width:15px; height:16px; line-height:1;\"> x  </div>\n    </a>\n    <img src='images/conv1.jpg' style=\"width: 580px; margin: 15px 0px 0 20px;\"/>\n    <div class=\"dropdown\">\n        <a id=\"dtech\" data-target=\"#\" data-toggle=\"dropdown\" aria-haspopup=\"true\" class=\"dropdown-toggle\">\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dtech\" style=\"margin-left: -50px;margin-top: 25px;\">\n          <a class=\"dropdown-item\" href=\"#\">Publish </a>\n          <a class=\"dropdown-item\" href=\"#\">Published Internally</a>\n          <a class=\"dropdown-item\" href=\"#\">Oh Hold</a>\n          <a class=\"dropdown-item\" href=\"#\">Closed</a>\n        </div>\n      </div>\n  </div>\n  <div style=\"background-color: #fff;margin: 0px -10px; padding: 0px 35px; border-bottom:1px solid #cddae2;\">\n    <nav class=\"navbar navbar-light\">\n      <button class=\"navbar-toggler hidden-sm-up\" type=\"button\" data-toggle=\"collapse\" data-target=\"#exCollapsingNavbar2\">\n        &#9776;\n      </button>\n      <div class=\"collapse navbar-toggleable-xs\" id=\"exCollapsingNavbar2\">\n        <ul class=\"nav navbar-nav\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#timeline\" role=\"tab\" data-toggle=\"tab\">Timeline <span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item active\">\n            <a class=\"nav-link\" href=\"#conversation-tab\" role=\"tab\" data-toggle=\"tab\">Conversation</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#profile\" role=\"tab\" data-toggle=\"tab\">Profile / Resume</a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n  </div>\n  <div class=\"tab-content\" style=\"overflow-y:auto; min-height:100%; padding-top: 10px; margin: 0px -10px -20px 0px;\">\n    <div role=\"tabpanel\" class=\"tab-pane\" id=\"timeline\"> \n    	<div style=\"background-color: #fff;margin: -10px 0;left: -10px;position: absolute;padding: 54px;height: 100%;\">\n        <img src=\"images/timeline2.png\" style=\"width: 576px;margin-left: 8px;\"/>\n      </div>\n    </div>\n    <div role=\"tabpanel\" class=\"tab-pane active\" id=\"conversation-tab\"> \n      <div>\n        <img src=\"images/conversation2.png\" style=\"width: 576px;margin-left: 8px;\"/>\n      </div>\n    </div>\n    <div role=\"tabpanel\" class=\"tab-pane\" id=\"profile\">  \n    	<div>\n        <img src=\"images/resume.png\" style=\"width: 576px;margin-left: 8px;\"/>\n      </div>\n    </div>\n    <div role=\"tabpanel\" class=\"tab-pane\" id=\"Offer\"> offer </div>\n  </div>\n</div> ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" Modal ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","modal fade");
        dom.setAttribute(el1,"id","formpreview");
        dom.setAttribute(el1,"tabindex","-1");
        dom.setAttribute(el1,"role","dialog");
        dom.setAttribute(el1,"aria-labelledby","formpreview");
        dom.setAttribute(el1,"aria-hidden","true");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","modal-dialog");
        dom.setAttribute(el2,"role","document");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","modal-content");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","modal-body");
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5,"src","images/apppre.png");
        dom.setAttribute(el5,"style","width:595px; margin-left:-12px;");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"class","close");
        dom.setAttribute(el5,"data-dismiss","modal");
        dom.setAttribute(el5,"aria-label","Close");
        dom.setAttribute(el5,"style","    position: absolute;top: 10px;right: 10px;");
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6,"aria-hidden","true");
        var el7 = dom.createTextNode("×");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6,"class","sr-only");
        var el7 = dom.createTextNode("Close");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","modal fade");
        dom.setAttribute(el1,"id","interviewprocess");
        dom.setAttribute(el1,"tabindex","-1");
        dom.setAttribute(el1,"role","dialog");
        dom.setAttribute(el1,"aria-labelledby","interviewprocess");
        dom.setAttribute(el1,"aria-hidden","true");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","modal-dialog");
        dom.setAttribute(el2,"role","document");
        dom.setAttribute(el2,"style","width:820px;");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","modal-content");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","modal-body");
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5,"src","images/intpre.png");
        dom.setAttribute(el5,"style","width:800px; margin-left:-12px;");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"class","close");
        dom.setAttribute(el5,"data-dismiss","modal");
        dom.setAttribute(el5,"aria-label","Close");
        dom.setAttribute(el5,"style","    position: absolute;top: 10px;right: 10px;");
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6,"aria-hidden","true");
        var el7 = dom.createTextNode("×");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6,"class","sr-only");
        var el7 = dom.createTextNode("Close");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","modal fade");
        dom.setAttribute(el1,"id","schmodal");
        dom.setAttribute(el1,"tabindex","-1");
        dom.setAttribute(el1,"role","dialog");
        dom.setAttribute(el1,"aria-labelledby","interviewprocess");
        dom.setAttribute(el1,"aria-hidden","true");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","modal-dialog");
        dom.setAttribute(el2,"role","document");
        dom.setAttribute(el2,"style","width:800px;");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","modal-content");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","modal-body");
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5,"src","images/sche.png");
        dom.setAttribute(el5,"style","width:763px;");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"class","close");
        dom.setAttribute(el5,"data-dismiss","modal");
        dom.setAttribute(el5,"aria-label","Close");
        dom.setAttribute(el5,"style","position: absolute;top: 10px;right: 10px;");
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6,"aria-hidden","true");
        var el7 = dom.createTextNode("×");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6,"class","sr-only");
        var el7 = dom.createTextNode("Close");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" Modal ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("script");
        var el2 = dom.createTextNode("\n$( \"#jobdetails-show\" ).click(function(e) {\n	e.preventDefault();\n  $(this).toggleClass('copyfromselected');\n  $( \"#jobdetails\" ).slideToggle( \"fast\", function() {});\n  $('.normal').toggle();\n  $('body, html').toggleClass('body-white');\n});\n$( \".match-table td\" ).click(function(e) {\n  $('#conversation-content').animate({\n    right: '0px',\n    opacity: 1\n  }, 400);\n\n});\n$( \"#conversation-hide\" ).click(function(e) {\n  e.preventDefault();\n  $('#conversation-content').animate({\n  right: '-1000px',\n  opacity: 0\n  }, 400); \n});\n\n  $('.match-table').sortable({\n	  containerSelector: 'table',\n	  itemPath: '> tbody',\n	  itemSelector: 'tr',\n	  placeholder:'',\n	  onDragStart: function ($item, container, _super) {\n	  	$item.addClass(container.group.options.draggedClass)\n	    $('.simple_with_no_drag').slideDown();\n	  },\n	  onDrop:function ($item, container, _super) {  \n      $(\"body\").removeClass(container.group.options.bodyClass)\n      $item.animate({ left: '1207px', top: '8px', width: '30px'}, 1000);\n	    $('.shortlist').slideDown();\n      $('.nextstage').addClass('zoomtransition').delay( 1000 ).removeClass('zoomtransition');\n      $item.animate({opacity:0}, 1000);\n	  }\n	});\n	$('.shortlist').click(function(e) {\n    e.preventDefault();\n    $('.simple_with_no_drag').slideUp();\n    $(this).slideUp();\n  });\n$(\"table.simple_with_no_drag\").sortable({\n  drag: false,\n});\n  $( \"#filter-show\" ).click(function(e) {\n    e.preventDefault();\n    $('#filter-content').animate({\n      right: '0px',\n      opacity: 1\n    }, 400);\n  });\n  $( \"#filter-hide\" ).click(function(e) {\n    e.preventDefault();\n    $('#filter-content').animate({\n    right: '-1000px',\n    opacity: 0\n    }, 400); \n  });\n\n\n  $('.sortable-table > table').sortable({\n    containerSelector: 'table',\n    group: '.sortable-table > table',\n    itemPath: '> tbody',\n    itemSelector: 'tr',\n    onDrop:function ($item, container, _super) {\n      $item.removeClass(container.group.options.draggedClass).removeAttr(\"style\")\n      $(\"body\").removeClass(container.group.options.bodyClass)\n      $('#schmodal').modal();\n    }\n  });\n  $('.nextstagelink').click(function(e){\n    e.preventDefault();\n    $('#avail-candidate').animate({\n      left: '-4000px',\n      opacity: 0\n    }, 400);\n    $('#stages').show().animate({\n      right: '0px',\n      opacity: 1\n    }, 400);\n  });\n  $('.prevstage').click(function(e){\n    e.preventDefault();\n    $('#avail-candidate').animate({\n      left: '0px',\n      opacity: 1\n    }, 400);\n    $('#stages').show().animate({\n      right: '-4000px',\n      opacity: 0\n    }, 400);\n  });\n  $( \".profile-show\" ).click(function(e) {\n    e.preventDefault();\n    $('#profile-content').animate({\n      right: '0px',\n      opacity: 1\n    }, 400);\n  });\n  $( \"#profile-hide\" ).click(function(e) {\n    e.preventDefault();\n    $('#profile-content').animate({\n    right: '-1000px',\n    opacity: 0\n    }, 400); \n  });\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 1, 1, 1]),0,0);
        morphs[1] = dom.createMorphAt(fragment,26,26,contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","link-to",["recruit"],[],0,null,["loc",[null,[4,12],[4,55]]]],
        ["content","outlet",["loc",[null,[569,0],[569,10]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('vadivel/templates/candidates-list/candidates-list', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 0
          }
        },
        "moduleName": "vadivel/templates/candidates-list/candidates-list.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() { return []; },
      statements: [

      ],
      locals: [],
      templates: []
    };
  }()));

});
define('vadivel/templates/dashboard', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 12
            },
            "end": {
              "line": 6,
              "column": 8
            }
          },
          "moduleName": "vadivel/templates/dashboard.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode(" \n          Recruit ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("img");
          dom.setAttribute(el1,"src","images/arrow.png");
          dom.setAttribute(el1,"style","width: 6px;margin-top: -2px;margin-left: 5px;");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" \n        ");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 21,
              "column": 14
            },
            "end": {
              "line": 21,
              "column": 51
            }
          },
          "moduleName": "vadivel/templates/dashboard.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode(" New Job Opening");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child2 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 23,
              "column": 17
            },
            "end": {
              "line": 23,
              "column": 73
            }
          },
          "moduleName": "vadivel/templates/dashboard.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode(" ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("i");
          dom.setAttribute(el1,"class","icon-rectangular");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" ");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child3 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 36,
              "column": 5
            },
            "end": {
              "line": 38,
              "column": 5
            }
          },
          "moduleName": "vadivel/templates/dashboard.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("					");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("img");
          dom.setAttribute(el1,"src","images/dash/1.png");
          dom.setAttribute(el1,"class","cell");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child4 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 41,
              "column": 5
            },
            "end": {
              "line": 43,
              "column": 5
            }
          },
          "moduleName": "vadivel/templates/dashboard.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("					");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("img");
          dom.setAttribute(el1,"src","images/dash/2.png");
          dom.setAttribute(el1,"class","cell");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child5 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 46,
              "column": 5
            },
            "end": {
              "line": 48,
              "column": 5
            }
          },
          "moduleName": "vadivel/templates/dashboard.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("					");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("img");
          dom.setAttribute(el1,"src","images/dash/3.png");
          dom.setAttribute(el1,"class","cell");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child6 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 51,
              "column": 5
            },
            "end": {
              "line": 53,
              "column": 5
            }
          },
          "moduleName": "vadivel/templates/dashboard.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("					");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("img");
          dom.setAttribute(el1,"src","images/dash/4.png");
          dom.setAttribute(el1,"class","cell");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child7 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 56,
              "column": 5
            },
            "end": {
              "line": 58,
              "column": 5
            }
          },
          "moduleName": "vadivel/templates/dashboard.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("					");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("img");
          dom.setAttribute(el1,"src","images/dash/5.png");
          dom.setAttribute(el1,"class","cell");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child8 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 61,
              "column": 5
            },
            "end": {
              "line": 63,
              "column": 5
            }
          },
          "moduleName": "vadivel/templates/dashboard.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("					");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("img");
          dom.setAttribute(el1,"src","images/dash/6.png");
          dom.setAttribute(el1,"class","cell");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 120,
            "column": 9
          }
        },
        "moduleName": "vadivel/templates/dashboard.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","sub-header");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","content");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("ol");
        dom.setAttribute(el3,"class","breadcrumb");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","row");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","dropdown col-sm-6 title");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"id","dLabel");
        dom.setAttribute(el5,"data-target","#");
        dom.setAttribute(el5,"data-toggle","dropdown");
        dom.setAttribute(el5,"aria-haspopup","true");
        dom.setAttribute(el5,"aria-expanded","false");
        dom.setAttribute(el5,"class","dropdown-toggle");
        dom.setAttribute(el5,"style","top: 9px;position: relative;");
        var el6 = dom.createTextNode("\n            Active Job Openings\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","dropdown-menu");
        dom.setAttribute(el5,"aria-labelledby","dLabel");
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"style","background: url('images/dropdown.png');width: 229px; height: 299px; margin: 1px; background-size: 100%;");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","col-sm-6 header-options");
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","no-pr-btn");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("  \n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("ul");
        dom.setAttribute(el5,"class","sub-header-options pull-right");
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createTextNode("\n              ");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createTextNode(" ");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        dom.setAttribute(el6,"id","filter-show");
        var el7 = dom.createElement("i");
        dom.setAttribute(el7,"class","icon-filter ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","conversation-show");
        dom.setAttribute(el4,"style","position:absolute; right: 50px; margin-top: 13px; font-size: 18px; color:#788489;");
        var el5 = dom.createElement("i");
        dom.setAttribute(el5,"class","icon-ellipsis");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("  \n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","pagearea");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","content");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","left-side");
        dom.setAttribute(el3,"style"," margin-left: -12px; margin-right: -20px;");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("ul");
        dom.setAttribute(el4,"id","freewall");
        dom.setAttribute(el4,"class","list-inline dash-hover");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createTextNode("\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createTextNode("\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createTextNode("\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createTextNode("\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createTextNode("\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createTextNode("\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" Filter ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","pop-sidebar");
        dom.setAttribute(el3,"id","filter-content");
        dom.setAttribute(el3,"style","min-width: 200px;background-color: #fff;top: -5px; min-height:600px;");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"href","#");
        dom.setAttribute(el4,"id","filter-hide");
        dom.setAttribute(el4,"style","position: absolute;padding: 28px;right: 0;");
        var el5 = dom.createTextNode(" \n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("img");
        dom.setAttribute(el4,"src","images/filter.png");
        dom.setAttribute(el4,"style","width:290px;");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","dropdown");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"id","dfilter");
        dom.setAttribute(el5,"data-target","#");
        dom.setAttribute(el5,"data-toggle","dropdown");
        dom.setAttribute(el5,"aria-haspopup","true");
        dom.setAttribute(el5,"class","dropdown-toggle");
        dom.setAttribute(el5,"style","margin-top: -42px;padding: 5px;position: relative;display: block;");
        var el6 = dom.createTextNode(" ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","dropdown-menu");
        dom.setAttribute(el5,"aria-labelledby","dfilter");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("img");
        dom.setAttribute(el6,"src","images/filter-options.png");
        dom.setAttribute(el6,"style","    width: 154px;");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(" \n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" Filter");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","pop-sidebar");
        dom.setAttribute(el3,"id","conversation-content");
        dom.setAttribute(el3,"style","min-width: 400px;background-color: #fff;top: -5px;");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"href","/");
        dom.setAttribute(el4,"id","conversation-hide");
        var el5 = dom.createTextNode(" \n		    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"style","position: absolute;right: 36px;top: 28px;padding: 10px;box-sizing: border-box;");
        var el6 = dom.createTextNode(" ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n		  ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("img");
        dom.setAttribute(el4,"src","images/dash/sidebar.png");
        dom.setAttribute(el4,"style","width:390px;");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("script");
        var el2 = dom.createTextNode("\n  $( \".conversation-show\" ).click(function(e) {\n    e.preventDefault();\n    $('#conversation-content').animate({\n      right: '0px',\n      opacity: 1\n    }, 400);\n\n  });\n  $( \"#conversation-hide\" ).click(function(e) {\n    e.preventDefault();\n    $('#conversation-content').animate({\n    right: '-1000px',\n    opacity: 0\n    }, 400); \n  });\n    $( \"#filter-show\" ).click(function(e) {\n    e.preventDefault();\n    $('#filter-content').animate({\n      right: '0px',\n      opacity: 1\n    }, 400);\n  });\n  $( \"#filter-hide\" ).click(function(e) {\n    e.preventDefault();\n    $('#filter-content').animate({\n    right: '-1000px',\n    opacity: 0\n    }, 400); \n  });\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1]);
        var element1 = dom.childAt(element0, [3, 3, 3]);
        var element2 = dom.childAt(fragment, [2, 1, 1, 1]);
        var morphs = new Array(10);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1, 1]),0,0);
        morphs[1] = dom.createMorphAt(dom.childAt(element1, [1]),1,1);
        morphs[2] = dom.createMorphAt(dom.childAt(element1, [3]),1,1);
        morphs[3] = dom.createMorphAt(dom.childAt(element2, [1]),1,1);
        morphs[4] = dom.createMorphAt(dom.childAt(element2, [3]),1,1);
        morphs[5] = dom.createMorphAt(dom.childAt(element2, [5]),1,1);
        morphs[6] = dom.createMorphAt(dom.childAt(element2, [7]),1,1);
        morphs[7] = dom.createMorphAt(dom.childAt(element2, [9]),1,1);
        morphs[8] = dom.createMorphAt(dom.childAt(element2, [11]),1,1);
        morphs[9] = dom.createMorphAt(fragment,4,4,contextualElement);
        return morphs;
      },
      statements: [
        ["block","link-to",["dashboard"],[],0,null,["loc",[null,[4,12],[6,20]]]],
        ["block","link-to",["newjob"],[],1,null,["loc",[null,[21,14],[21,63]]]],
        ["block","link-to",["recruit"],[],2,null,["loc",[null,[23,17],[23,85]]]],
        ["block","link-to",["stages"],[],3,null,["loc",[null,[36,5],[38,18]]]],
        ["block","link-to",["stages"],[],4,null,["loc",[null,[41,5],[43,18]]]],
        ["block","link-to",["stages"],[],5,null,["loc",[null,[46,5],[48,18]]]],
        ["block","link-to",["stages"],[],6,null,["loc",[null,[51,5],[53,18]]]],
        ["block","link-to",["stages"],[],7,null,["loc",[null,[56,5],[58,18]]]],
        ["block","link-to",["recruit"],[],8,null,["loc",[null,[61,5],[63,18]]]],
        ["content","outlet",["loc",[null,[88,0],[88,10]]]]
      ],
      locals: [],
      templates: [child0, child1, child2, child3, child4, child5, child6, child7, child8]
    };
  }()));

});
define('vadivel/templates/match', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 12
            },
            "end": {
              "line": 4,
              "column": 45
            }
          },
          "moduleName": "vadivel/templates/match.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode(" Recruit ");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 73,
              "column": 1
            },
            "end": {
              "line": 75,
              "column": 1
            }
          },
          "moduleName": "vadivel/templates/match.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("	");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("img");
          dom.setAttribute(el1,"src","images/mem2.png");
          dom.setAttribute(el1,"style","width:648px; margin:20px 80px; margin-top: 200px;");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 113,
            "column": 0
          }
        },
        "moduleName": "vadivel/templates/match.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","sub-header");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","content");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("ol");
        dom.setAttribute(el3,"class","breadcrumb");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("Drafts");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","row");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","dropdown col-sm-5 title");
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"id","dLabel");
        dom.setAttribute(el5,"data-target","#");
        dom.setAttribute(el5,"data-toggle","dropdown");
        dom.setAttribute(el5,"aria-haspopup","true");
        dom.setAttribute(el5,"aria-expanded","false");
        dom.setAttribute(el5,"class","");
        var el6 = dom.createTextNode("\n              Senior Android Developer\n          ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","text-muted");
        var el6 = dom.createTextNode("Senior Android Developer, requistion #398 | 16 jul 2014, at 6.30am");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","col-sm-3");
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5,"src","images/mem1.png");
        dom.setAttribute(el5,"style","width:321px; margin-top: -25px;");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","col-sm-4 header-options");
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","dropdown");
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6,"id","dpublish");
        dom.setAttribute(el6,"data-target","#");
        dom.setAttribute(el6,"data-toggle","dropdown");
        dom.setAttribute(el6,"aria-haspopup","true");
        dom.setAttribute(el6,"class","dropdown-toggle btn-subheader");
        var el7 = dom.createTextNode("\n                Draft\n            ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"class","dropdown-menu");
        dom.setAttribute(el6,"aria-labelledby","dpublish");
        dom.setAttribute(el6,"style","margin-top: 25px;margin-left: 182px;");
        var el7 = dom.createTextNode("\n              ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"class","dropdown-item");
        dom.setAttribute(el7,"href","#");
        var el8 = dom.createTextNode("Active");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n              ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"class","dropdown-item");
        dom.setAttribute(el7,"href","#");
        var el8 = dom.createTextNode("Published Internally");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n              ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"class","dropdown-item");
        dom.setAttribute(el7,"href","#");
        var el8 = dom.createTextNode("On Hold");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n              ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"class","dropdown-item");
        dom.setAttribute(el7,"href","#");
        var el8 = dom.createTextNode("Closed");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("ul");
        dom.setAttribute(el5,"class","sub-header-options pull-right");
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createTextNode("\n              Add Candidate\n            ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createTextNode("\n              ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        dom.setAttribute(el7,"class","dropdown downtog");
        dom.setAttribute(el7,"style","position:relative;");
        var el8 = dom.createTextNode("\n                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("a");
        dom.setAttribute(el8,"class","dropdown-toggle");
        dom.setAttribute(el8,"id","dnmenu");
        dom.setAttribute(el8,"data-target","#");
        dom.setAttribute(el8,"data-toggle","dropdown");
        var el9 = dom.createTextNode("\n                  ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("i");
        dom.setAttribute(el9,"class","icon-down");
        var el10 = dom.createTextNode(" ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"class","dropdown-menu");
        dom.setAttribute(el8,"aria-labelledby","dnmenu");
        dom.setAttribute(el8,"style","z-index:15; top: 15px; left: -50px;");
        var el9 = dom.createTextNode("\n                  ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("a");
        dom.setAttribute(el9,"class","dropdown-item");
        dom.setAttribute(el9,"href","#");
        var el10 = dom.createTextNode("Add tag ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                  ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("a");
        dom.setAttribute(el9,"class","dropdown-item");
        dom.setAttribute(el9,"href","#");
        var el10 = dom.createTextNode("Send e-mail ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                  ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("a");
        dom.setAttribute(el9,"class","dropdown-item");
        dom.setAttribute(el9,"href","#");
        var el10 = dom.createTextNode("Schedule interview");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n\n                  ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("a");
        dom.setAttribute(el9,"class","dropdown-item");
        dom.setAttribute(el9,"href","#");
        var el10 = dom.createTextNode("Reject candidate");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                  ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("a");
        dom.setAttribute(el9,"class","dropdown-item");
        dom.setAttribute(el9,"href","#");
        var el10 = dom.createTextNode("Archive candidate");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                  ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("a");
        dom.setAttribute(el9,"class","dropdown-item");
        dom.setAttribute(el9,"href","#");
        var el10 = dom.createTextNode("Move candidate");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                  ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("a");
        dom.setAttribute(el9,"class","dropdown-item");
        dom.setAttribute(el9,"href","#");
        var el10 = dom.createTextNode("Delete candidate");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        dom.setAttribute(el6,"id","jobdetails-show");
        var el7 = dom.createTextNode(" ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        dom.setAttribute(el7,"style","padding:0 5px; font-size: 13px; font-weight: 600;");
        var el8 = dom.createTextNode("i");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        dom.setAttribute(el6,"style","opacity:0.5");
        var el7 = dom.createElement("i");
        dom.setAttribute(el7,"class","icon-rectangular");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createElement("i");
        dom.setAttribute(el7,"class","icon-filter ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment(" <div style=\"position:absolute; right: 20px; margin-top: 4px; font-size: 18px; color:#788489;\"><i class=\"icon-ellipsis\"></i></div> ");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("  \n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"id","jobdetails");
        dom.setAttribute(el1,"style","display:none;width: 100%;background-color: #fff;padding: 10px 0;");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","content pagearea");
        dom.setAttribute(el2,"style","top:140px;");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"style","position: absolute;top:20px;right:0");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","btn btn-primary-outline");
        dom.setAttribute(el4,"style","padding: 2px 12px;font-size: 13px;");
        var el5 = dom.createTextNode(" Edit ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","btn btn btn-secondary-outline");
        dom.setAttribute(el4,"id","jobdetails-show");
        dom.setAttribute(el4,"style","padding: 2px 12px;font-size: 13px;");
        var el5 = dom.createTextNode(" Close ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3,"data-toggle","modal");
        dom.setAttribute(el3,"data-target","#formpreview");
        dom.setAttribute(el3,"style","position: relative;display: inline-block;left: 52px;padding: 14px 163px;top: 668px;");
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3,"data-toggle","modal");
        dom.setAttribute(el3,"data-target","#interviewprocess");
        dom.setAttribute(el3,"style","position: relative;display: inline-block;left: 227px;padding:14px 123px;top: 668px;");
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("img");
        dom.setAttribute(el3,"src","images/jobdetails.png");
        dom.setAttribute(el3,"style","width:1150px; margin-top: -35px;");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"style","text-align:center;");
        dom.setAttribute(el1,"class","normal");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" Modal ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","modal fade");
        dom.setAttribute(el1,"id","formpreview");
        dom.setAttribute(el1,"tabindex","-1");
        dom.setAttribute(el1,"role","dialog");
        dom.setAttribute(el1,"aria-labelledby","formpreview");
        dom.setAttribute(el1,"aria-hidden","true");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","modal-dialog");
        dom.setAttribute(el2,"role","document");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","modal-content");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","modal-body");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5,"src","images/apppre.png");
        dom.setAttribute(el5,"style","width:595px; margin-left:-12px;");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"class","close");
        dom.setAttribute(el5,"data-dismiss","modal");
        dom.setAttribute(el5,"aria-label","Close");
        dom.setAttribute(el5,"style","    position: absolute;top: 10px;right: 10px;");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6,"aria-hidden","true");
        var el7 = dom.createTextNode("×");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6,"class","sr-only");
        var el7 = dom.createTextNode("Close");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","modal fade");
        dom.setAttribute(el1,"id","interviewprocess");
        dom.setAttribute(el1,"tabindex","-1");
        dom.setAttribute(el1,"role","dialog");
        dom.setAttribute(el1,"aria-labelledby","interviewprocess");
        dom.setAttribute(el1,"aria-hidden","true");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","modal-dialog");
        dom.setAttribute(el2,"role","document");
        dom.setAttribute(el2,"style","width:820px;");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","modal-content");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","modal-body");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5,"src","images/intpre.png");
        dom.setAttribute(el5,"style","width:800px; margin-left:-12px;");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"class","close");
        dom.setAttribute(el5,"data-dismiss","modal");
        dom.setAttribute(el5,"aria-label","Close");
        dom.setAttribute(el5,"style","    position: absolute;top: 10px;right: 10px;");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6,"aria-hidden","true");
        var el7 = dom.createTextNode("×");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6,"class","sr-only");
        var el7 = dom.createTextNode("Close");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("script");
        var el2 = dom.createTextNode("\n$( \"#jobdetails-show\" ).click(function(e) {\n	e.preventDefault();\n  $( \"#jobdetails\" ).slideToggle( \"fast\", function() {});\n  $('.normal').toggleDown();\n  $('body, html').toggleClass('body-white');\n});\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 1, 1, 1]),0,0);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [4]),1,1);
        morphs[2] = dom.createMorphAt(fragment,14,14,contextualElement);
        return morphs;
      },
      statements: [
        ["block","link-to",["dashboard"],[],0,null,["loc",[null,[4,12],[4,57]]]],
        ["block","link-to",["matchlist"],[],1,null,["loc",[null,[73,1],[75,13]]]],
        ["content","outlet",["loc",[null,[112,0],[112,10]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }()));

});
define('vadivel/templates/matchlist', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 12
            },
            "end": {
              "line": 4,
              "column": 45
            }
          },
          "moduleName": "vadivel/templates/matchlist.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode(" Recruit ");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 66,
              "column": 48
            },
            "end": {
              "line": 66,
              "column": 123
            }
          },
          "moduleName": "vadivel/templates/matchlist.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("img");
          dom.setAttribute(el1,"src","images/nextstage.png");
          dom.setAttribute(el1,"style","width:75px;");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" ");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 194,
            "column": 10
          }
        },
        "moduleName": "vadivel/templates/matchlist.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","sub-header");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","content");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("ol");
        dom.setAttribute(el3,"class","breadcrumb");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("Drafts");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","row");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","dropdown col-sm-5 title");
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"id","dLabel");
        dom.setAttribute(el5,"data-target","#");
        dom.setAttribute(el5,"data-toggle","dropdown");
        dom.setAttribute(el5,"aria-haspopup","true");
        dom.setAttribute(el5,"aria-expanded","false");
        dom.setAttribute(el5,"class","");
        var el6 = dom.createTextNode("\n              Senior Android Developer\n          ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","text-muted");
        var el6 = dom.createTextNode("Senior Android Developer, requistion #398 | 16 jul 2014, at 6.30am");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","col-sm-3");
        var el5 = dom.createTextNode("\n        	");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5,"src","images/mem1.png");
        dom.setAttribute(el5,"style","width:321px; margin-top: -25px;");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","col-sm-4 header-options");
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","dropdown");
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6,"id","dpublish");
        dom.setAttribute(el6,"data-target","#");
        dom.setAttribute(el6,"data-toggle","dropdown");
        dom.setAttribute(el6,"aria-haspopup","true");
        dom.setAttribute(el6,"class","dropdown-toggle btn-subheader");
        var el7 = dom.createTextNode("\n                Draft\n            ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"class","dropdown-menu");
        dom.setAttribute(el6,"aria-labelledby","dpublish");
        dom.setAttribute(el6,"style","margin-top: 25px;margin-left: 182px;");
        var el7 = dom.createTextNode("\n              ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"class","dropdown-item");
        dom.setAttribute(el7,"href","#");
        var el8 = dom.createTextNode("Active");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n              ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"class","dropdown-item");
        dom.setAttribute(el7,"href","#");
        var el8 = dom.createTextNode("Published Internally");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n              ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"class","dropdown-item");
        dom.setAttribute(el7,"href","#");
        var el8 = dom.createTextNode("On Hold");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n              ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"class","dropdown-item");
        dom.setAttribute(el7,"href","#");
        var el8 = dom.createTextNode("Closed");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("ul");
        dom.setAttribute(el5,"class","sub-header-options pull-right");
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createTextNode("\n              Add Candidate\n            ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createTextNode("\n            	");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        dom.setAttribute(el7,"class","dropdown downtog");
        dom.setAttribute(el7,"style","position:relative;");
        var el8 = dom.createTextNode("\n                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("a");
        dom.setAttribute(el8,"class","dropdown-toggle");
        dom.setAttribute(el8,"id","dnmenu");
        dom.setAttribute(el8,"data-target","#");
        dom.setAttribute(el8,"data-toggle","dropdown");
        var el9 = dom.createTextNode("\n                  ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("i");
        dom.setAttribute(el9,"class","icon-down");
        var el10 = dom.createTextNode(" ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"class","dropdown-menu");
        dom.setAttribute(el8,"aria-labelledby","dnmenu");
        dom.setAttribute(el8,"style","z-index:15; top: 15px; left: -50px;");
        var el9 = dom.createTextNode("\n                  ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("a");
        dom.setAttribute(el9,"class","dropdown-item");
        dom.setAttribute(el9,"href","#");
        var el10 = dom.createTextNode("Add tag ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                  ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("a");
        dom.setAttribute(el9,"class","dropdown-item");
        dom.setAttribute(el9,"href","#");
        var el10 = dom.createTextNode("Send e-mail ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                  ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("a");
        dom.setAttribute(el9,"class","dropdown-item");
        dom.setAttribute(el9,"href","#");
        var el10 = dom.createTextNode("Schedule interview");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n\n                  ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("a");
        dom.setAttribute(el9,"class","dropdown-item");
        dom.setAttribute(el9,"href","#");
        var el10 = dom.createTextNode("Reject candidate");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                  ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("a");
        dom.setAttribute(el9,"class","dropdown-item");
        dom.setAttribute(el9,"href","#");
        var el10 = dom.createTextNode("Archive candidate");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                  ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("a");
        dom.setAttribute(el9,"class","dropdown-item");
        dom.setAttribute(el9,"href","#");
        var el10 = dom.createTextNode("Move candidate");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                  ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("a");
        dom.setAttribute(el9,"class","dropdown-item");
        dom.setAttribute(el9,"href","#");
        var el10 = dom.createTextNode("Delete candidate");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        dom.setAttribute(el6,"id","jobdetails-show");
        var el7 = dom.createTextNode(" ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        dom.setAttribute(el7,"style","padding:0 5px; font-size: 13px; font-weight: 600;");
        var el8 = dom.createTextNode("i");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        dom.setAttribute(el6,"style","opacity:0.5");
        var el7 = dom.createElement("i");
        dom.setAttribute(el7,"class","icon-rectangular");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        dom.setAttribute(el6,"id","filter-show");
        var el7 = dom.createElement("i");
        dom.setAttribute(el7,"class","icon-filter ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment(" <div style=\"position:absolute; right: 20px; margin-top: 4px; font-size: 18px; color:#788489;\"><i class=\"icon-ellipsis\"></i></div> ");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("  \n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","pagearea");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","content normal");
        var el3 = dom.createTextNode("\n    \n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createTextNode(" \n      Matching Candidates from Archive ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4,"class","close-icon");
        var el5 = dom.createTextNode(" X ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4,"class","counts");
        dom.setAttribute(el4,"style","display:none");
        var el5 = dom.createTextNode(" ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("i");
        dom.setAttribute(el5,"class","counts-icon");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode(" 3 Candidates added to your \"Shortlisted Stage\"");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"style","position:absolute;right: 20px;");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" Filter ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","pop-sidebar");
        dom.setAttribute(el3,"id","filter-content");
        dom.setAttribute(el3,"style","min-width: 200px;background-color: #fff;top: -5px; min-height:600px;");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"href","#");
        dom.setAttribute(el4,"id","filter-hide");
        dom.setAttribute(el4,"style","position: absolute;padding: 28px;right: 0;");
        var el5 = dom.createTextNode(" \n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("img");
        dom.setAttribute(el4,"src","images/filter.png");
        dom.setAttribute(el4,"style","width:290px;");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","dropdown");
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"id","dfilter");
        dom.setAttribute(el5,"data-target","#");
        dom.setAttribute(el5,"data-toggle","dropdown");
        dom.setAttribute(el5,"aria-haspopup","true");
        dom.setAttribute(el5,"class","dropdown-toggle");
        dom.setAttribute(el5,"style","margin-top: -42px;padding: 5px;position: relative;display: block;");
        var el6 = dom.createTextNode(" ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","dropdown-menu");
        dom.setAttribute(el5,"aria-labelledby","dfilter");
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("img");
        dom.setAttribute(el6,"src","images/filter-options.png");
        dom.setAttribute(el6,"style","    width: 154px;");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(" \n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" Filter");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("table");
        dom.setAttribute(el3,"class","content-table match-table");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("tr");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("th");
        var el6 = dom.createTextNode(" ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6,"href","#");
        dom.setAttribute(el6,"class","conversation-show");
        var el7 = dom.createTextNode(" ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("img");
        dom.setAttribute(el7,"src","images/match/tdh.png");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode(" ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("tr");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("td");
        var el6 = dom.createTextNode(" \n        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"id","plus");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6,"href","#");
        dom.setAttribute(el6,"class","conversation-show");
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("img");
        dom.setAttribute(el7,"src","images/match/tb1.png");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("tr");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("td");
        var el6 = dom.createTextNode(" \n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"id","plus");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6,"href","#");
        dom.setAttribute(el6,"class","conversation-show");
        var el7 = dom.createElement("img");
        dom.setAttribute(el7,"src","images/match/tb2.png");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("tr");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("td");
        dom.setAttribute(el5,"class","matchselected");
        var el6 = dom.createTextNode(" \n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"id","plus");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6,"href","#");
        dom.setAttribute(el6,"class","conversation-show");
        var el7 = dom.createElement("img");
        dom.setAttribute(el7,"src","images/match/tb6.png");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("tr");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("td");
        var el6 = dom.createTextNode(" \n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"id","plus");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6,"href","#");
        dom.setAttribute(el6,"class","conversation-show");
        var el7 = dom.createElement("img");
        dom.setAttribute(el7,"src","images/match/tb5.png");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("tr");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("td");
        var el6 = dom.createTextNode(" \n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"id","plus");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6,"href","#");
        dom.setAttribute(el6,"class","conversation-show");
        var el7 = dom.createElement("img");
        dom.setAttribute(el7,"src","images/match/tb3.png");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("tr");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("td");
        var el6 = dom.createTextNode(" \n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"id","plus");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6,"href","#");
        dom.setAttribute(el6,"class","conversation-show");
        var el7 = dom.createElement("img");
        dom.setAttribute(el7,"src","images/match/tb4.png");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" Modal ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"id","jobdetails");
        dom.setAttribute(el1,"style","display:none;width: 100%;background-color: #fff;padding: 10px 0;");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","content pagearea");
        dom.setAttribute(el2,"style","top:140px;");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"style","position: absolute;top:20px;right:0");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","btn btn-primary-outline");
        dom.setAttribute(el4,"style","padding: 2px 12px;font-size: 13px;");
        var el5 = dom.createTextNode(" Edit ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","btn btn btn-secondary-outline");
        dom.setAttribute(el4,"id","jobdetails-show");
        dom.setAttribute(el4,"style","padding: 2px 12px;font-size: 13px;");
        var el5 = dom.createTextNode(" Close ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3,"data-toggle","modal");
        dom.setAttribute(el3,"data-target","#formpreview");
        dom.setAttribute(el3,"style","position: relative;display: inline-block;left: 52px;padding: 14px 163px;top: 668px;");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3,"data-toggle","modal");
        dom.setAttribute(el3,"data-target","#interviewprocess");
        dom.setAttribute(el3,"style","position: relative;display: inline-block;left: 227px;padding:14px 123px;top: 668px;");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("img");
        dom.setAttribute(el3,"src","images/jobdetails.png");
        dom.setAttribute(el3,"style","width:1150px; margin-top: -35px;");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","modal fade");
        dom.setAttribute(el1,"id","formpreview");
        dom.setAttribute(el1,"tabindex","-1");
        dom.setAttribute(el1,"role","dialog");
        dom.setAttribute(el1,"aria-labelledby","formpreview");
        dom.setAttribute(el1,"aria-hidden","true");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","modal-dialog");
        dom.setAttribute(el2,"role","document");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","modal-content");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","modal-body");
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5,"src","images/apppre.png");
        dom.setAttribute(el5,"style","width:595px; margin-left:-12px;");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"class","close");
        dom.setAttribute(el5,"data-dismiss","modal");
        dom.setAttribute(el5,"aria-label","Close");
        dom.setAttribute(el5,"style","    position: absolute;top: 10px;right: 10px;");
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6,"aria-hidden","true");
        var el7 = dom.createTextNode("×");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6,"class","sr-only");
        var el7 = dom.createTextNode("Close");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","modal fade");
        dom.setAttribute(el1,"id","interviewprocess");
        dom.setAttribute(el1,"tabindex","-1");
        dom.setAttribute(el1,"role","dialog");
        dom.setAttribute(el1,"aria-labelledby","interviewprocess");
        dom.setAttribute(el1,"aria-hidden","true");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","modal-dialog");
        dom.setAttribute(el2,"role","document");
        dom.setAttribute(el2,"style","width:820px;");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","modal-content");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","modal-body");
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5,"src","images/intpre.png");
        dom.setAttribute(el5,"style","width:800px; margin-left:-12px;");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"class","close");
        dom.setAttribute(el5,"data-dismiss","modal");
        dom.setAttribute(el5,"aria-label","Close");
        dom.setAttribute(el5,"style","    position: absolute;top: 10px;right: 10px;");
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6,"aria-hidden","true");
        var el7 = dom.createTextNode("×");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6,"class","sr-only");
        var el7 = dom.createTextNode("Close");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" Modal ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("script");
        var el2 = dom.createTextNode("\n$( \"#jobdetails-show\" ).click(function(e) {\n	e.preventDefault();\n  $(this).toggleClass('copyfromselected');\n  $( \"#jobdetails\" ).slideToggle( \"fast\", function() {});\n  $('.normal').toggle();\n  $('body, html').toggleClass('body-white');\n});\n$('.match-table td').click(function(e){\n  $(this).toggleClass('selected');\n  $('.counts').show();\n});\n  $( \"#filter-show\" ).click(function(e) {\n    e.preventDefault();\n    $('#filter-content').animate({\n      right: '0px',\n      opacity: 1\n    }, 400);\n  });\n  $( \"#filter-hide\" ).click(function(e) {\n    e.preventDefault();\n    $('#filter-content').animate({\n    right: '-1000px',\n    opacity: 0\n    }, 400); \n  });\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 1, 1, 1]),0,0);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2, 1, 3]),0,0);
        morphs[2] = dom.createMorphAt(fragment,16,16,contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","link-to",["dashboard"],[],0,null,["loc",[null,[4,12],[4,57]]]],
        ["block","link-to",["added"],[],1,null,["loc",[null,[66,48],[66,135]]]],
        ["content","outlet",["loc",[null,[194,0],[194,10]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }()));

});
define('vadivel/templates/newjob', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 12
            },
            "end": {
              "line": 6,
              "column": 8
            }
          },
          "moduleName": "vadivel/templates/newjob.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode(" \n          Recruit ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("img");
          dom.setAttribute(el1,"src","images/arrow.png");
          dom.setAttribute(el1,"style","width: 6px;margin-top: -2px;margin-left: 5px;");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" \n        ");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 11,
              "column": 31
            },
            "end": {
              "line": 11,
              "column": 90
            }
          },
          "moduleName": "vadivel/templates/newjob.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode(" ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1,"class","close-icon");
          var el2 = dom.createTextNode("x");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" ");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child2 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 113,
              "column": 5
            },
            "end": {
              "line": 114,
              "column": 5
            }
          },
          "moduleName": "vadivel/templates/newjob.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child3 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 115,
              "column": 5
            },
            "end": {
              "line": 116,
              "column": 5
            }
          },
          "moduleName": "vadivel/templates/newjob.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 168,
            "column": 0
          }
        },
        "moduleName": "vadivel/templates/newjob.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","sub-header");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","content");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("ol");
        dom.setAttribute(el3,"class","breadcrumb");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","row");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","dropdown col-sm-6 title");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"id","dLabel");
        dom.setAttribute(el5,"data-target","#");
        dom.setAttribute(el5,"data-toggle","dropdown");
        dom.setAttribute(el5,"aria-haspopup","true");
        dom.setAttribute(el5,"aria-expanded","false");
        dom.setAttribute(el5,"style","top: 9px;position: relative; margin-right:20px;");
        var el6 = dom.createTextNode("\n        	Creating Job Openings ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","col-sm-6 header-options");
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","no-pr-btn");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("  \n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("ul");
        dom.setAttribute(el5,"class","sub-header-options pull-right");
        var el6 = dom.createTextNode("\n          	");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        dom.setAttribute(el6,"id","copyfrom");
        dom.setAttribute(el6,"style","margin-right: 123px;");
        var el7 = dom.createTextNode("\n            	Copy From\n            ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("  \n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","pagearea");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","content");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"style","width:75%; float:left;");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("form");
        dom.setAttribute(el4,"class","");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5,"class","input input--haruki");
        dom.setAttribute(el5,"style","width: calc(100% - 30px);");
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("input");
        dom.setAttribute(el6,"class","input__field input__field--haruki");
        dom.setAttribute(el6,"type","text");
        dom.setAttribute(el6,"id","input-1");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("label");
        dom.setAttribute(el6,"class","input__label input__label--haruki");
        dom.setAttribute(el6,"for","input-1");
        var el7 = dom.createTextNode("\n						");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        dom.setAttribute(el7,"class","input__label-content input__label-content--haruki");
        var el8 = dom.createTextNode("Job Title");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n					");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5,"class","input input--haruki ");
        dom.setAttribute(el5,"style","width: calc(50% - 30px);");
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("input");
        dom.setAttribute(el6,"class","input__field input__field--haruki");
        dom.setAttribute(el6,"type","text");
        dom.setAttribute(el6,"id","input-2");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("label");
        dom.setAttribute(el6,"class","input__label input__label--haruki");
        dom.setAttribute(el6,"for","input-2");
        var el7 = dom.createTextNode("\n						");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        dom.setAttribute(el7,"class","input__label-content input__label-content--haruki");
        var el8 = dom.createTextNode("Job Function");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n					");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5,"class","input input--haruki");
        dom.setAttribute(el5,"style","width: calc(50% - 30px);");
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("input");
        dom.setAttribute(el6,"class","input__field input__field--haruki");
        dom.setAttribute(el6,"type","text");
        dom.setAttribute(el6,"id","input-3");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("label");
        dom.setAttribute(el6,"class","input__label input__label--haruki");
        dom.setAttribute(el6,"for","input-3");
        var el7 = dom.createTextNode("\n						");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        dom.setAttribute(el7,"class","input__label-content input__label-content--haruki");
        var el8 = dom.createTextNode("Location");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n					");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5,"class","input input--haruki ");
        dom.setAttribute(el5,"style","width: calc(50% - 30px);");
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("input");
        dom.setAttribute(el6,"class","input__field input__field--haruki");
        dom.setAttribute(el6,"type","text");
        dom.setAttribute(el6,"id","input-2");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("label");
        dom.setAttribute(el6,"class","input__label input__label--haruki");
        dom.setAttribute(el6,"for","input-2");
        var el7 = dom.createTextNode("\n						");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        dom.setAttribute(el7,"class","input__label-content input__label-content--haruki");
        var el8 = dom.createTextNode("Employee Type");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n					");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5,"class","input input--haruki");
        dom.setAttribute(el5,"style","width: calc(50% - 30px);");
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("input");
        dom.setAttribute(el6,"class","input__field input__field--haruki");
        dom.setAttribute(el6,"type","text");
        dom.setAttribute(el6,"id","input-3");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("label");
        dom.setAttribute(el6,"class","input__label input__label--haruki");
        dom.setAttribute(el6,"for","input-3");
        var el7 = dom.createTextNode("\n						");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        dom.setAttribute(el7,"class","input__label-content input__label-content--haruki");
        var el8 = dom.createTextNode("Experience");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n					");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5,"class","input input--haruki");
        dom.setAttribute(el5,"style","width: calc(100% - 30px);");
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("textarea");
        dom.setAttribute(el6,"class","input__field input__field--haruki");
        dom.setAttribute(el6,"id","input-3");
        dom.setAttribute(el6,"style","height:80px;");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("label");
        dom.setAttribute(el6,"class","input__label input__label--haruki");
        dom.setAttribute(el6,"for","input-3");
        dom.setAttribute(el6,"style","height:80px;");
        var el7 = dom.createTextNode("\n						");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        dom.setAttribute(el7,"class","input__label-content input__label-content--haruki");
        var el8 = dom.createTextNode("Description");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n					");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","");
        dom.setAttribute(el5,"id","par-form-show");
        var el6 = dom.createElement("i");
        dom.setAttribute(el6,"class","icon-ellipsis");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"id","par-form");
        dom.setAttribute(el5,"class","hide");
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h5");
        dom.setAttribute(el6,"style","margin-left: 14px;font-size: 13px;line-height: 1;margin-bottom: 0;");
        var el7 = dom.createTextNode("Internal Details");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6,"class","input input--haruki");
        dom.setAttribute(el6,"style","width: calc(50% - 30px);");
        var el7 = dom.createTextNode("\n						");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("input");
        dom.setAttribute(el7,"class","input__field input__field--haruki");
        dom.setAttribute(el7,"type","text");
        dom.setAttribute(el7,"id","input-2");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n						");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("label");
        dom.setAttribute(el7,"class","input__label input__label--haruki");
        dom.setAttribute(el7,"for","input-3");
        var el8 = dom.createTextNode("\n							");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("span");
        dom.setAttribute(el8,"class","input__label-content input__label-content--haruki");
        var el9 = dom.createTextNode("No.of openings");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n						");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n					");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6,"class","input input--haruki");
        dom.setAttribute(el6,"style","width: calc(50% - 30px);");
        var el7 = dom.createTextNode("\n						");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("input");
        dom.setAttribute(el7,"class","input__field input__field--haruki");
        dom.setAttribute(el7,"type","text");
        dom.setAttribute(el7,"id","input-2");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n						");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("label");
        dom.setAttribute(el7,"class","input__label input__label--haruki");
        dom.setAttribute(el7,"for","input-3");
        var el8 = dom.createTextNode("\n							");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("span");
        dom.setAttribute(el8,"class","input__label-content input__label-content--haruki");
        var el9 = dom.createTextNode("Job requistion code");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n						");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n					");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6,"class","input input--haruki");
        dom.setAttribute(el6,"style","width: calc(50% - 30px);");
        var el7 = dom.createTextNode("\n						");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("input");
        dom.setAttribute(el7,"class","input__field input__field--haruki");
        dom.setAttribute(el7,"type","text");
        dom.setAttribute(el7,"id","input-2");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n						");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("label");
        dom.setAttribute(el7,"class","input__label input__label--haruki");
        dom.setAttribute(el7,"for","input-3");
        var el8 = dom.createTextNode("\n							");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("span");
        dom.setAttribute(el8,"class","input__label-content input__label-content--haruki");
        var el9 = dom.createTextNode("Recruiter");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n						");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n					");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6,"class","input input--haruki");
        dom.setAttribute(el6,"style","width: calc(50% - 30px);");
        var el7 = dom.createTextNode("\n						");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("input");
        dom.setAttribute(el7,"class","input__field input__field--haruki");
        dom.setAttribute(el7,"type","text");
        dom.setAttribute(el7,"id","input-2");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n						");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("label");
        dom.setAttribute(el7,"class","input__label input__label--haruki");
        dom.setAttribute(el7,"for","input-3");
        var el8 = dom.createTextNode("\n							");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("span");
        dom.setAttribute(el8,"class","input__label-content input__label-content--haruki");
        var el9 = dom.createTextNode("Hiring Manager");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n						");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n					");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6,"class","input input--haruki");
        dom.setAttribute(el6,"style","width: calc(100% - 30px);");
        var el7 = dom.createTextNode("\n						");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("input");
        dom.setAttribute(el7,"class","input__field input__field--haruki");
        dom.setAttribute(el7,"type","text");
        dom.setAttribute(el7,"id","input-2");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n						");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("label");
        dom.setAttribute(el7,"class","input__label input__label--haruki");
        dom.setAttribute(el7,"for","input-3");
        var el8 = dom.createTextNode("\n							");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("span");
        dom.setAttribute(el8,"class","input__label-content input__label-content--haruki");
        var el9 = dom.createTextNode("Hiring Panel Members");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n						");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n					");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6,"class","input input--haruki");
        dom.setAttribute(el6,"style","width: calc(50% - 30px);");
        var el7 = dom.createTextNode("\n						");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("input");
        dom.setAttribute(el7,"class","input__field input__field--haruki");
        dom.setAttribute(el7,"type","text");
        dom.setAttribute(el7,"id","input-2");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n						");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("label");
        dom.setAttribute(el7,"class","input__label input__label--haruki");
        dom.setAttribute(el7,"for","input-3");
        var el8 = dom.createTextNode("\n							");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("span");
        dom.setAttribute(el8,"class","input__label-content input__label-content--haruki");
        var el9 = dom.createTextNode("Turn around time");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n						");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n					");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("img");
        dom.setAttribute(el6,"src","images/forminput.png");
        dom.setAttribute(el6,"style","width:720px; margin-left:13px;");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6,"data-toggle","modal");
        dom.setAttribute(el6,"data-target","#formpreview");
        dom.setAttribute(el6,"style","position: relative;display: inline-block;left: 52px;padding: 14px 163px;top: -30px;");
        var el7 = dom.createTextNode("\n					");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6,"data-toggle","modal");
        dom.setAttribute(el6,"data-target","#interviewprocess");
        dom.setAttribute(el6,"style","position: relative;display: inline-block;left: 157px;padding:14px 123px;top: -33px;");
        var el7 = dom.createTextNode("\n					");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"style","position:relative;");
        var el6 = dom.createTextNode("\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("img");
        dom.setAttribute(el6,"src","images/save.png");
        dom.setAttribute(el6,"style","width:806px;margin-left: -30px;margin-top: 30px;margin-bottom: -30px;");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"style","width:25%; float:right; position:relative; padding-left:20px;");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"style","position: absolute;left: 30px;width: 250px;height: 500px;");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5,"src","images/copyfrom.png");
        dom.setAttribute(el5,"id","slideimage");
        dom.setAttribute(el5,"style","width:242px; display:none;");
        dom.setAttribute(el5,"align","center");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("img");
        dom.setAttribute(el4,"src","images/side1.png");
        dom.setAttribute(el4,"style","width:242px;");
        dom.setAttribute(el4,"align","center");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" Modal ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","modal fade");
        dom.setAttribute(el1,"id","formpreview");
        dom.setAttribute(el1,"tabindex","-1");
        dom.setAttribute(el1,"role","dialog");
        dom.setAttribute(el1,"aria-labelledby","formpreview");
        dom.setAttribute(el1,"aria-hidden","true");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","modal-dialog");
        dom.setAttribute(el2,"role","document");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","modal-content");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","modal-body");
        var el5 = dom.createTextNode("\n      	");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5,"src","images/apppre.png");
        dom.setAttribute(el5,"style","width:595px; margin-left:-12px;");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      	");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"class","close");
        dom.setAttribute(el5,"data-dismiss","modal");
        dom.setAttribute(el5,"aria-label","Close");
        dom.setAttribute(el5,"style","    position: absolute;top: 10px;right: 10px;");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6,"aria-hidden","true");
        var el7 = dom.createTextNode("×");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6,"class","sr-only");
        var el7 = dom.createTextNode("Close");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","modal fade");
        dom.setAttribute(el1,"id","interviewprocess");
        dom.setAttribute(el1,"tabindex","-1");
        dom.setAttribute(el1,"role","dialog");
        dom.setAttribute(el1,"aria-labelledby","interviewprocess");
        dom.setAttribute(el1,"aria-hidden","true");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","modal-dialog");
        dom.setAttribute(el2,"role","document");
        dom.setAttribute(el2,"style","width:820px;");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","modal-content");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","modal-body");
        var el5 = dom.createTextNode("\n      	");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5,"src","images/intpre.png");
        dom.setAttribute(el5,"style","width:800px; margin-left:-12px;");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      	");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"class","close");
        dom.setAttribute(el5,"data-dismiss","modal");
        dom.setAttribute(el5,"aria-label","Close");
        dom.setAttribute(el5,"style","    position: absolute;top: 10px;right: 10px;");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6,"aria-hidden","true");
        var el7 = dom.createTextNode("×");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6,"class","sr-only");
        var el7 = dom.createTextNode("Close");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("script");
        var el2 = dom.createTextNode("\n$( \"#par-form-show\" ).click(function(e) {\n	e.preventDefault();\n  $( \"#par-form\" ).slideToggle( \"fast\", function() {});\n});\n$( \"#copyfrom\" ).click(function(e) {\n	e.preventDefault();\n	$(this).toggleClass('copyfromselected');\n	$( \"#slideimage\" ).slideToggle( \"fast\", function() {});\n});\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1]);
        var element1 = dom.childAt(fragment, [2, 1, 1, 1, 19]);
        var morphs = new Array(5);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1, 1]),0,0);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [3, 1, 1]),1,1);
        morphs[2] = dom.createMorphAt(element1,1,1);
        morphs[3] = dom.createMorphAt(element1,2,2);
        morphs[4] = dom.createMorphAt(fragment,10,10,contextualElement);
        return morphs;
      },
      statements: [
        ["block","link-to",["dashboard"],[],0,null,["loc",[null,[4,12],[6,20]]]],
        ["block","link-to",["dashboard"],[],1,null,["loc",[null,[11,31],[11,102]]]],
        ["block","link-to",["match"],["class","savefrom"],2,null,["loc",[null,[113,5],[114,17]]]],
        ["block","link-to",["dashboard"],["class","cancel"],3,null,["loc",[null,[115,5],[116,17]]]],
        ["content","outlet",["loc",[null,[156,0],[156,10]]]]
      ],
      locals: [],
      templates: [child0, child1, child2, child3]
    };
  }()));

});
define('vadivel/templates/recruit', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 12
            },
            "end": {
              "line": 6,
              "column": 8
            }
          },
          "moduleName": "vadivel/templates/recruit.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode(" \n          Recruit ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("img");
          dom.setAttribute(el1,"src","images/arrow.png");
          dom.setAttribute(el1,"style","width: 6px;margin-top: -2px;margin-left: 5px;");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" \n        ");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 21,
              "column": 14
            },
            "end": {
              "line": 21,
              "column": 51
            }
          },
          "moduleName": "vadivel/templates/recruit.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode(" New Job Opening");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child2 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 23,
              "column": 17
            },
            "end": {
              "line": 23,
              "column": 60
            }
          },
          "moduleName": "vadivel/templates/recruit.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode(" ");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 173,
            "column": 9
          }
        },
        "moduleName": "vadivel/templates/recruit.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","sub-header");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","content");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("ol");
        dom.setAttribute(el3,"class","breadcrumb");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","row");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","dropdown col-sm-6 title");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"id","dLabel");
        dom.setAttribute(el5,"data-target","#");
        dom.setAttribute(el5,"data-toggle","dropdown");
        dom.setAttribute(el5,"aria-haspopup","true");
        dom.setAttribute(el5,"aria-expanded","false");
        dom.setAttribute(el5,"class","dropdown-toggle");
        dom.setAttribute(el5,"style","top: 9px;position: relative;");
        var el6 = dom.createTextNode("\n            All Candidates\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","dropdown-menu");
        dom.setAttribute(el5,"aria-labelledby","dLabel");
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"style","background: url('images/dropdown.png');width: 229px; height: 299px; margin: 1px; background-size: 100%;");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","col-sm-6 header-options");
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","no-pr-btn");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("  \n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("ul");
        dom.setAttribute(el5,"class","sub-header-options pull-right");
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createTextNode("\n              ");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createTextNode(" ");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        dom.setAttribute(el6,"id","filter-show");
        var el7 = dom.createElement("i");
        dom.setAttribute(el7,"class","icon-filter ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("  \n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class"," pagearea");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","content");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("table");
        dom.setAttribute(el3,"class","content-table");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("tr");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("th");
        var el6 = dom.createTextNode(" ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6,"href","#");
        dom.setAttribute(el6,"class","conversation-show");
        var el7 = dom.createTextNode(" ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("img");
        dom.setAttribute(el7,"src","images/tbh.png");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode(" ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("tr");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("td");
        var el6 = dom.createTextNode(" ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6,"href","#");
        dom.setAttribute(el6,"class","conversation-show");
        var el7 = dom.createElement("img");
        dom.setAttribute(el7,"src","images/tb1.png");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("tr");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("td");
        var el6 = dom.createTextNode(" ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6,"href","#");
        dom.setAttribute(el6,"class","conversation-show");
        var el7 = dom.createElement("img");
        dom.setAttribute(el7,"src","images/tb2.png");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("tr");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("td");
        var el6 = dom.createTextNode(" ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6,"href","#");
        dom.setAttribute(el6,"class","conversation-show");
        var el7 = dom.createElement("img");
        dom.setAttribute(el7,"src","images/tb3.png");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("tr");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("td");
        var el6 = dom.createTextNode(" ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6,"href","#");
        dom.setAttribute(el6,"class","conversation-show");
        var el7 = dom.createElement("img");
        dom.setAttribute(el7,"src","images/tb5.png");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("tr");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("td");
        var el6 = dom.createTextNode(" ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6,"href","#");
        dom.setAttribute(el6,"class","conversation-show");
        var el7 = dom.createElement("img");
        dom.setAttribute(el7,"src","images/tb6.png");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("tr");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("td");
        var el6 = dom.createTextNode(" ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6,"href","#");
        dom.setAttribute(el6,"class","conversation-show");
        var el7 = dom.createElement("img");
        dom.setAttribute(el7,"src","images/tb4.png");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" Filter ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","pop-sidebar");
        dom.setAttribute(el3,"id","filter-content");
        dom.setAttribute(el3,"style","min-width: 200px;background-color: #fff;top: -5px; min-height:600px;");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"href","#");
        dom.setAttribute(el4,"id","filter-hide");
        dom.setAttribute(el4,"style","position: absolute;padding: 28px;right: 0;");
        var el5 = dom.createTextNode(" \n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("img");
        dom.setAttribute(el4,"src","images/filter.png");
        dom.setAttribute(el4,"style","width:290px;");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","dropdown");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"id","dfilter");
        dom.setAttribute(el5,"data-target","#");
        dom.setAttribute(el5,"data-toggle","dropdown");
        dom.setAttribute(el5,"aria-haspopup","true");
        dom.setAttribute(el5,"class","dropdown-toggle");
        dom.setAttribute(el5,"style","margin-top: -42px;padding: 5px;position: relative;display: block;");
        var el6 = dom.createTextNode(" ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","dropdown-menu");
        dom.setAttribute(el5,"aria-labelledby","dfilter");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("img");
        dom.setAttribute(el6,"src","images/filter-options.png");
        dom.setAttribute(el6,"style","    width: 154px;");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(" \n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" Filter");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","pop-sidebar fullsize");
        dom.setAttribute(el1,"id","conversation-content");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"style","background:#fff; margin:-10px; padding:10px;margin-bottom: 0; border-bottom:2px solid #edeef2");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3,"href","#");
        dom.setAttribute(el3,"id","conversation-hide");
        var el4 = dom.createTextNode(" \n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"style","background:#000; padding:0 4px; color:#fff; width:15px; height:16px; line-height:1;");
        var el5 = dom.createTextNode(" x  ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("img");
        dom.setAttribute(el3,"src","images/conv1.jpg");
        dom.setAttribute(el3,"style","width: 580px; margin: 15px 0px 0;");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","dropdown");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"id","dcanlist");
        dom.setAttribute(el4,"data-target","#");
        dom.setAttribute(el4,"data-toggle","dropdown");
        dom.setAttribute(el4,"aria-haspopup","true");
        dom.setAttribute(el4,"aria-expanded","false");
        dom.setAttribute(el4,"class","dropdown-toggle");
        dom.setAttribute(el4,"style","padding: 13px 84px;position: absolute;top: -36px;right: 17px;");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","dropdown-menu");
        dom.setAttribute(el4,"aria-labelledby","dcanlist");
        dom.setAttribute(el4,"style","position: absolute;margin-left: 394px;top: -13px;");
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"style","background: url('images/conv/canlist.png');width: 170px; height: 356px; margin: 1px; background-size: 100%;");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","dropdown");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"id","demail");
        dom.setAttribute(el4,"data-target","#");
        dom.setAttribute(el4,"data-toggle","dropdown");
        dom.setAttribute(el4,"aria-haspopup","true");
        dom.setAttribute(el4,"aria-expanded","false");
        dom.setAttribute(el4,"class","dropdown-toggle");
        dom.setAttribute(el4,"style","position: absolute;top: -68px;right: 21px;padding: 11px;");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","dropdown-menu");
        dom.setAttribute(el4,"aria-labelledby","demail");
        dom.setAttribute(el4,"style","position: absolute;margin-left: 377px;top: -46px;");
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"style","background: url('images/conv/email.png');width: 157px; height: 265px; margin: 1px; background-size: 100%;");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","dropdown");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"id","reject");
        dom.setAttribute(el4,"data-target","#");
        dom.setAttribute(el4,"data-toggle","dropdown");
        dom.setAttribute(el4,"aria-haspopup","true");
        dom.setAttribute(el4,"aria-expanded","false");
        dom.setAttribute(el4,"class","dropdown-toggle");
        dom.setAttribute(el4,"style","    position: absolute;top: -68px;right: 126px;padding: 11px; ");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","dropdown-menu");
        dom.setAttribute(el4,"aria-labelledby","reject");
        dom.setAttribute(el4,"style","position: absolute;margin-left: 377px;top: -46px;");
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"style","background: url('images/conv/reject.png');width: 194px; height: 305px; margin: 1px; background-size: 100%;");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"style","background-color: #fff;margin: 0px -10px; padding: 0px 35px; border-bottom:1px solid #cddae2;");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("nav");
        dom.setAttribute(el3,"class","navbar navbar-light");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4,"class","navbar-toggler hidden-sm-up");
        dom.setAttribute(el4,"type","button");
        dom.setAttribute(el4,"data-toggle","collapse");
        dom.setAttribute(el4,"data-target","#exCollapsingNavbar2");
        var el5 = dom.createTextNode("\n        ☰\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","collapse navbar-toggleable-xs");
        dom.setAttribute(el4,"id","exCollapsingNavbar2");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("ul");
        dom.setAttribute(el5,"class","nav navbar-nav");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        dom.setAttribute(el6,"class","nav-item");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"class","nav-link");
        dom.setAttribute(el7,"href","#timeline");
        dom.setAttribute(el7,"role","tab");
        dom.setAttribute(el7,"data-toggle","tab");
        var el8 = dom.createTextNode("Timeline ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("span");
        dom.setAttribute(el8,"class","sr-only");
        var el9 = dom.createTextNode("(current)");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        dom.setAttribute(el6,"class","nav-item active");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"class","nav-link");
        dom.setAttribute(el7,"href","#conversation-tab");
        dom.setAttribute(el7,"role","tab");
        dom.setAttribute(el7,"data-toggle","tab");
        var el8 = dom.createTextNode("Conversation");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        dom.setAttribute(el6,"class","nav-item");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"class","nav-link");
        dom.setAttribute(el7,"href","#profile");
        dom.setAttribute(el7,"role","tab");
        dom.setAttribute(el7,"data-toggle","tab");
        var el8 = dom.createTextNode("Profile / Resume");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        dom.setAttribute(el6,"class","nav-item");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"class","nav-link");
        dom.setAttribute(el7,"href","#Offer");
        dom.setAttribute(el7,"role","tab");
        dom.setAttribute(el7,"data-toggle","tab");
        var el8 = dom.createTextNode("Offer");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","tab-content");
        dom.setAttribute(el2,"style","overflow-y:auto;min-height:100%; padding-top: 10px; margin: 0px -10px -20px 0px;");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"role","tabpanel");
        dom.setAttribute(el3,"class","tab-pane");
        dom.setAttribute(el3,"id","timeline");
        var el4 = dom.createTextNode(" \n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"style","background-color: #fff;margin: -10px 0;left: -10px;position: absolute;padding: 54px;height: 100%; padding-right:400px;");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5,"src","images/timeline.png");
        dom.setAttribute(el5,"style","width: 344px;margin-left: 8px;");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"role","tabpanel");
        dom.setAttribute(el3,"class","tab-pane active");
        dom.setAttribute(el3,"id","conversation-tab");
        var el4 = dom.createTextNode(" \n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5,"src","images/conversation.png");
        dom.setAttribute(el5,"style","width: 576px;margin-left: 8px;");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"style","padding:15px; position: fixed; width:100%; bottom:-16px");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5,"src","images/con-reply.png");
        dom.setAttribute(el5,"style","width: 620px; margin-left: -25px;");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"role","tabpanel");
        dom.setAttribute(el3,"class","tab-pane");
        dom.setAttribute(el3,"id","profile");
        var el4 = dom.createTextNode(" \n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("img");
        dom.setAttribute(el4,"src","images/resume.png");
        dom.setAttribute(el4,"style","width: 576px;margin-left: 8px;");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"role","tabpanel");
        dom.setAttribute(el3,"class","tab-pane");
        dom.setAttribute(el3,"id","Offer");
        var el4 = dom.createTextNode(" \n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("img");
        dom.setAttribute(el4,"src","images/offer.png");
        dom.setAttribute(el4,"style","width: 576px;margin-left: 8px;");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" conversation Section Code ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("script");
        var el2 = dom.createTextNode("\n  $( \"#filter-show\" ).click(function(e) {\n    e.preventDefault();\n    $('#filter-content').animate({\n      right: '0px',\n      opacity: 1\n    }, 400);\n  });\n  $( \"#filter-hide\" ).click(function(e) {\n    e.preventDefault();\n    $('#filter-content').animate({\n    right: '-1000px',\n    opacity: 0\n    }, 400); \n  });\n\n  $( \".conversation-show\" ).click(function(e) {\n    e.preventDefault();\n    $('#conversation-content').animate({\n      right: '0px',\n      opacity: 1\n    }, 400);\n  });\n  $( \"#conversation-hide\" ).click(function(e) {\n    e.preventDefault();\n    $('#conversation-content').animate({\n    right: '-1000px',\n    opacity: 0\n    }, 400); \n  });\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1]);
        var element1 = dom.childAt(element0, [3, 3, 3]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1, 1]),0,0);
        morphs[1] = dom.createMorphAt(dom.childAt(element1, [1]),1,1);
        morphs[2] = dom.createMorphAt(dom.childAt(element1, [3]),1,1);
        morphs[3] = dom.createMorphAt(fragment,8,8,contextualElement);
        return morphs;
      },
      statements: [
        ["block","link-to",["dashboard"],[],0,null,["loc",[null,[4,12],[6,20]]]],
        ["block","link-to",["newjob"],[],1,null,["loc",[null,[21,14],[21,63]]]],
        ["block","link-to",["dashboard"],["class","view-icon"],2,null,["loc",[null,[23,17],[23,72]]]],
        ["content","outlet",["loc",[null,[141,0],[141,10]]]]
      ],
      locals: [],
      templates: [child0, child1, child2]
    };
  }()));

});
define('vadivel/templates/selected', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 12
            },
            "end": {
              "line": 4,
              "column": 45
            }
          },
          "moduleName": "vadivel/templates/selected.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode(" Recruit ");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 51,
              "column": 16
            },
            "end": {
              "line": 51,
              "column": 56
            }
          },
          "moduleName": "vadivel/templates/selected.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode(" ");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child2 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 61,
              "column": 97
            },
            "end": {
              "line": 61,
              "column": 182
            }
          },
          "moduleName": "vadivel/templates/selected.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("img");
          dom.setAttribute(el1,"src","images/prevstage.png");
          dom.setAttribute(el1,"style","width:89px;");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" ");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 203,
            "column": 9
          }
        },
        "moduleName": "vadivel/templates/selected.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","sub-header");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","content");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("ol");
        dom.setAttribute(el3,"class","breadcrumb");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("Active Job Openings");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","row");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","dropdown col-sm-5 title");
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"id","dLabel");
        dom.setAttribute(el5,"data-target","#");
        dom.setAttribute(el5,"data-toggle","dropdown");
        dom.setAttribute(el5,"aria-haspopup","true");
        dom.setAttribute(el5,"aria-expanded","false");
        dom.setAttribute(el5,"class","");
        var el6 = dom.createTextNode("\n              Data Scientist, People Analytics\n          ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","text-muted");
        var el6 = dom.createTextNode("Data Scientist, People Analytics, requistion #398 | 16 jul 2014, at 6.30am");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","col-sm-3");
        var el5 = dom.createTextNode("\n        	");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5,"src","images/mem3.png");
        dom.setAttribute(el5,"style","width:321px; margin-top: -25px;");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","col-sm-4 header-options");
        var el5 = dom.createTextNode("\n		      ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","dropdown");
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6,"id","dpublish");
        dom.setAttribute(el6,"data-target","#");
        dom.setAttribute(el6,"data-toggle","dropdown");
        dom.setAttribute(el6,"aria-haspopup","true");
        dom.setAttribute(el6,"class","dropdown-toggle btn-subheader");
        var el7 = dom.createTextNode("\n                Publish\n            ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"class","dropdown-menu");
        dom.setAttribute(el6,"aria-labelledby","dpublish");
        dom.setAttribute(el6,"style","margin-top: 25px;margin-left: 182px;");
        var el7 = dom.createTextNode("\n              ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"class","dropdown-item");
        dom.setAttribute(el7,"href","#");
        var el8 = dom.createTextNode("Active");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n              ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"class","dropdown-item");
        dom.setAttribute(el7,"href","#");
        var el8 = dom.createTextNode("Published Internally");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n              ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"class","dropdown-item");
        dom.setAttribute(el7,"href","#");
        var el8 = dom.createTextNode("On Hold");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n              ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"class","dropdown-item");
        dom.setAttribute(el7,"href","#");
        var el8 = dom.createTextNode("Closed");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n           	");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("  \n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("ul");
        dom.setAttribute(el5,"class","sub-header-options pull-right");
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createTextNode("\n              Add Candidate\n            ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createTextNode("\n            	");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        dom.setAttribute(el7,"class","dropdown downtog");
        dom.setAttribute(el7,"style","position:relative;");
        var el8 = dom.createTextNode("\n                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("a");
        dom.setAttribute(el8,"class","dropdown-toggle");
        dom.setAttribute(el8,"id","dnmenu");
        dom.setAttribute(el8,"data-target","#");
        dom.setAttribute(el8,"data-toggle","dropdown");
        var el9 = dom.createTextNode("\n                  ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("i");
        dom.setAttribute(el9,"class","icon-down");
        var el10 = dom.createTextNode(" ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"class","dropdown-menu");
        dom.setAttribute(el8,"aria-labelledby","dnmenu");
        dom.setAttribute(el8,"style","z-index:15; top: 15px; left: -50px;");
        var el9 = dom.createTextNode("\n                  ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("a");
        dom.setAttribute(el9,"class","dropdown-item");
        dom.setAttribute(el9,"href","#");
        var el10 = dom.createTextNode("Add tag ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                  ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("a");
        dom.setAttribute(el9,"class","dropdown-item");
        dom.setAttribute(el9,"href","#");
        var el10 = dom.createTextNode("Send e-mail ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                  ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("a");
        dom.setAttribute(el9,"class","dropdown-item");
        dom.setAttribute(el9,"href","#");
        var el10 = dom.createTextNode("Schedule interview");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n\n                  ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("a");
        dom.setAttribute(el9,"class","dropdown-item");
        dom.setAttribute(el9,"href","#");
        var el10 = dom.createTextNode("Reject candidate");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                  ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("a");
        dom.setAttribute(el9,"class","dropdown-item");
        dom.setAttribute(el9,"href","#");
        var el10 = dom.createTextNode("Archive candidate");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                  ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("a");
        dom.setAttribute(el9,"class","dropdown-item");
        dom.setAttribute(el9,"href","#");
        var el10 = dom.createTextNode("Move candidate");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                  ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("a");
        dom.setAttribute(el9,"class","dropdown-item");
        dom.setAttribute(el9,"href","#");
        var el10 = dom.createTextNode("Delete candidate");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        dom.setAttribute(el6,"id","jobdetails-show");
        var el7 = dom.createTextNode(" ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        dom.setAttribute(el7,"style","padding:0 5px; font-size: 13px; font-weight: 600;");
        var el8 = dom.createTextNode("i");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        dom.setAttribute(el6,"id","filter-show");
        var el7 = dom.createElement("i");
        dom.setAttribute(el7,"class","icon-filter ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment(" <div style=\"position:absolute; right: 20px; margin-top: 4px; font-size: 18px; color:#788489;\"><i class=\"icon-ellipsis\"></i></div> ");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("  \n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class"," pagearea");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","content");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"style","margin-bottom: -40px;position: relative;float: left;margin-left: -90px;top:3px;");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("table");
        dom.setAttribute(el3,"class","content-table");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("tr");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("th");
        var el6 = dom.createTextNode(" ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6,"href","#");
        dom.setAttribute(el6,"class","conversation-show");
        var el7 = dom.createTextNode(" ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("img");
        dom.setAttribute(el7,"src","images/tbh.png");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode(" ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("tr");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("td");
        var el6 = dom.createTextNode(" ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6,"href","#");
        dom.setAttribute(el6,"class","conversation-show");
        var el7 = dom.createElement("img");
        dom.setAttribute(el7,"src","images/tb1.png");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("tr");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("td");
        var el6 = dom.createTextNode(" ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6,"href","#");
        dom.setAttribute(el6,"class","conversation-show");
        var el7 = dom.createElement("img");
        dom.setAttribute(el7,"src","images/tb2.png");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("tr");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("td");
        var el6 = dom.createTextNode(" ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6,"href","#");
        dom.setAttribute(el6,"class","conversation-show");
        var el7 = dom.createElement("img");
        dom.setAttribute(el7,"src","images/tb3.png");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("tr");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("td");
        var el6 = dom.createTextNode(" ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6,"href","#");
        dom.setAttribute(el6,"class","conversation-show");
        var el7 = dom.createElement("img");
        dom.setAttribute(el7,"src","images/tb5.png");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("tr");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("td");
        var el6 = dom.createTextNode(" ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6,"href","#");
        dom.setAttribute(el6,"class","conversation-show");
        var el7 = dom.createElement("img");
        dom.setAttribute(el7,"src","images/tb6.png");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("tr");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("td");
        var el6 = dom.createTextNode(" ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6,"href","#");
        dom.setAttribute(el6,"class","conversation-show");
        var el7 = dom.createElement("img");
        dom.setAttribute(el7,"src","images/tb4.png");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" Filter ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","pop-sidebar");
        dom.setAttribute(el3,"id","filter-content");
        dom.setAttribute(el3,"style","min-width: 200px;background-color: #fff;top: -5px; min-height:600px;");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"href","#");
        dom.setAttribute(el4,"id","filter-hide");
        dom.setAttribute(el4,"style","position: absolute;padding: 28px;right: 0;");
        var el5 = dom.createTextNode(" \n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("img");
        dom.setAttribute(el4,"src","images/filter.png");
        dom.setAttribute(el4,"style","width:290px;");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","dropdown");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"id","dfilter");
        dom.setAttribute(el5,"data-target","#");
        dom.setAttribute(el5,"data-toggle","dropdown");
        dom.setAttribute(el5,"aria-haspopup","true");
        dom.setAttribute(el5,"class","dropdown-toggle");
        dom.setAttribute(el5,"style","margin-top: -42px;padding: 5px;position: relative;display: block;");
        var el6 = dom.createTextNode(" ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","dropdown-menu");
        dom.setAttribute(el5,"aria-labelledby","dfilter");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("img");
        dom.setAttribute(el6,"src","images/filter-options.png");
        dom.setAttribute(el6,"style","    width: 154px;");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(" \n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" Filter");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","pop-sidebar fullsize");
        dom.setAttribute(el1,"id","conversation-content");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"style","background:#fff; margin:-10px; padding:10px;margin-bottom: 0; border-bottom:2px solid #edeef2");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3,"href","#");
        dom.setAttribute(el3,"id","conversation-hide");
        var el4 = dom.createTextNode(" \n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"style","background:#000; padding:0 4px; color:#fff; width:15px; height:16px; line-height:1;");
        var el5 = dom.createTextNode(" x  ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("img");
        dom.setAttribute(el3,"src","images/conv2.jpg");
        dom.setAttribute(el3,"style","width: 580px; margin: 15px 0px 0;");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","dropdown");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"id","tech");
        dom.setAttribute(el4,"data-target","#");
        dom.setAttribute(el4,"data-toggle","dropdown");
        dom.setAttribute(el4,"aria-haspopup","true");
        dom.setAttribute(el4,"aria-expanded","false");
        dom.setAttribute(el4,"class","dropdown-toggle");
        dom.setAttribute(el4,"style","padding: 13px 84px;position: absolute;top: -36px;right: 17px;");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","dropdown-menu");
        dom.setAttribute(el4,"aria-labelledby","tech");
        dom.setAttribute(el4,"style","position: absolute;margin-left: 394px;top: -13px;");
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"style","background: url('images/conv/tech.png');width: 164px; height: 353px; margin: 1px; background-size: 100%;");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","dropdown");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"id","demail");
        dom.setAttribute(el4,"data-target","#");
        dom.setAttribute(el4,"data-toggle","dropdown");
        dom.setAttribute(el4,"aria-haspopup","true");
        dom.setAttribute(el4,"aria-expanded","false");
        dom.setAttribute(el4,"class","dropdown-toggle");
        dom.setAttribute(el4,"style","position: absolute;top: -68px;right: 21px;padding: 11px;");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","dropdown-menu");
        dom.setAttribute(el4,"aria-labelledby","demail");
        dom.setAttribute(el4,"style","position: absolute;margin-left: 425px;top: -46px;");
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"style","background: url('images/conv/email.png');width: 157px; height: 265px; margin: 1px; background-size: 100%;");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","dropdown");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"id","reject");
        dom.setAttribute(el4,"data-target","#");
        dom.setAttribute(el4,"data-toggle","dropdown");
        dom.setAttribute(el4,"aria-haspopup","true");
        dom.setAttribute(el4,"aria-expanded","false");
        dom.setAttribute(el4,"class","dropdown-toggle");
        dom.setAttribute(el4,"style","    position: absolute;top: -68px;right: 126px;padding: 11px; ");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","dropdown-menu");
        dom.setAttribute(el4,"aria-labelledby","reject");
        dom.setAttribute(el4,"style","position: absolute;margin-left: 377px;top: -46px;");
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"style","background: url('images/conv/reject.png');width: 194px; height: 305px; margin: 1px; background-size: 100%;");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"style","background-color: #fff;margin: 0px -10px; padding: 0px 35px; border-bottom:1px solid #cddae2;");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("nav");
        dom.setAttribute(el3,"class","navbar navbar-light");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4,"class","navbar-toggler hidden-sm-up");
        dom.setAttribute(el4,"type","button");
        dom.setAttribute(el4,"data-toggle","collapse");
        dom.setAttribute(el4,"data-target","#exCollapsingNavbar2");
        var el5 = dom.createTextNode("\n        ☰\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","collapse navbar-toggleable-xs");
        dom.setAttribute(el4,"id","exCollapsingNavbar2");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("ul");
        dom.setAttribute(el5,"class","nav navbar-nav");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        dom.setAttribute(el6,"class","nav-item");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"class","nav-link");
        dom.setAttribute(el7,"href","#timeline");
        dom.setAttribute(el7,"role","tab");
        dom.setAttribute(el7,"data-toggle","tab");
        var el8 = dom.createTextNode("Timeline ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("span");
        dom.setAttribute(el8,"class","sr-only");
        var el9 = dom.createTextNode("(current)");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        dom.setAttribute(el6,"class","nav-item active");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"class","nav-link");
        dom.setAttribute(el7,"href","#conversation-tab");
        dom.setAttribute(el7,"role","tab");
        dom.setAttribute(el7,"data-toggle","tab");
        var el8 = dom.createTextNode("Conversation");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        dom.setAttribute(el6,"class","nav-item");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"class","nav-link");
        dom.setAttribute(el7,"href","#profile");
        dom.setAttribute(el7,"role","tab");
        dom.setAttribute(el7,"data-toggle","tab");
        var el8 = dom.createTextNode("Profile / Resume");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        dom.setAttribute(el6,"class","nav-item");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"class","nav-link");
        dom.setAttribute(el7,"href","#Offer");
        dom.setAttribute(el7,"role","tab");
        dom.setAttribute(el7,"data-toggle","tab");
        var el8 = dom.createTextNode("Offer");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","tab-content");
        dom.setAttribute(el2,"style","overflow-y:auto;min-height:100%; padding-top: 10px; margin: 0px -10px -20px 0px;");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"role","tabpanel");
        dom.setAttribute(el3,"class","tab-pane");
        dom.setAttribute(el3,"id","timeline");
        var el4 = dom.createTextNode(" \n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"style","background-color: #fff;margin: -10px 0;left: -10px;position: absolute;padding: 54px;height: 100%; padding-right:400px;");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5,"src","images/timeline.png");
        dom.setAttribute(el5,"style","width: 344px;margin-left: 8px;");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"role","tabpanel");
        dom.setAttribute(el3,"class","tab-pane active");
        dom.setAttribute(el3,"id","conversation-tab");
        var el4 = dom.createTextNode(" \n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5,"src","images/conversation.png");
        dom.setAttribute(el5,"style","width: 576px;margin-left: 8px;");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"style","padding:15px; position: fixed; width:100%; bottom:-16px");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5,"src","images/con-reply.png");
        dom.setAttribute(el5,"style","width: 620px; margin-left: -25px;");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"role","tabpanel");
        dom.setAttribute(el3,"class","tab-pane");
        dom.setAttribute(el3,"id","profile");
        var el4 = dom.createTextNode(" \n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("img");
        dom.setAttribute(el4,"src","images/resume.png");
        dom.setAttribute(el4,"style","width: 576px;margin-left: 8px;");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"role","tabpanel");
        dom.setAttribute(el3,"class","tab-pane");
        dom.setAttribute(el3,"id","Offer");
        var el4 = dom.createTextNode(" \n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("img");
        dom.setAttribute(el4,"src","images/offer.png");
        dom.setAttribute(el4,"style","width: 576px;margin-left: 8px;");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" conversation Section Code ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("script");
        var el2 = dom.createTextNode("\n  $( \"#filter-show\" ).click(function(e) {\n    e.preventDefault();\n    $('#filter-content').animate({\n      right: '0px',\n      opacity: 1\n    }, 400);\n  });\n  $( \"#filter-hide\" ).click(function(e) {\n    e.preventDefault();\n    $('#filter-content').animate({\n    right: '-1000px',\n    opacity: 0\n    }, 400); \n  });\n\n  $( \".conversation-show\" ).click(function(e) {\n    e.preventDefault();\n    $('#conversation-content').animate({\n      right: '0px',\n      opacity: 1\n    }, 400);\n  });\n  $( \"#conversation-hide\" ).click(function(e) {\n    e.preventDefault();\n    $('#conversation-content').animate({\n    right: '-1000px',\n    opacity: 0\n    }, 400); \n  });\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1, 1]),0,0);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [3, 5, 3, 7]),0,0);
        morphs[2] = dom.createMorphAt(dom.childAt(fragment, [2, 1, 1]),0,0);
        morphs[3] = dom.createMorphAt(fragment,8,8,contextualElement);
        return morphs;
      },
      statements: [
        ["block","link-to",["dashboard"],[],0,null,["loc",[null,[4,12],[4,57]]]],
        ["block","link-to",["stages"],["class","view-icon"],1,null,["loc",[null,[51,16],[51,68]]]],
        ["block","link-to",["avail-candidate"],[],2,null,["loc",[null,[61,97],[61,194]]]],
        ["content","outlet",["loc",[null,[171,0],[171,10]]]]
      ],
      locals: [],
      templates: [child0, child1, child2]
    };
  }()));

});
define('vadivel/templates/stages', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 12
            },
            "end": {
              "line": 4,
              "column": 45
            }
          },
          "moduleName": "vadivel/templates/stages.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode(" Recruit ");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 51,
              "column": 16
            },
            "end": {
              "line": 51,
              "column": 71
            }
          },
          "moduleName": "vadivel/templates/stages.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("i");
          dom.setAttribute(el1,"class","icon-rectangular");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child2 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 88,
              "column": 97
            },
            "end": {
              "line": 88,
              "column": 182
            }
          },
          "moduleName": "vadivel/templates/stages.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("img");
          dom.setAttribute(el1,"src","images/prevstage.png");
          dom.setAttribute(el1,"style","width:89px;");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" ");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 307,
            "column": 0
          }
        },
        "moduleName": "vadivel/templates/stages.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","sub-header");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","content");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("ol");
        dom.setAttribute(el3,"class","breadcrumb");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("Active Job Openings");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","row");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","dropdown col-sm-5 title");
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"id","dLabel");
        dom.setAttribute(el5,"data-target","#");
        dom.setAttribute(el5,"data-toggle","dropdown");
        dom.setAttribute(el5,"aria-haspopup","true");
        dom.setAttribute(el5,"aria-expanded","false");
        dom.setAttribute(el5,"class","");
        var el6 = dom.createTextNode("\n              Data Scientist, People Analytics\n          ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","text-muted");
        var el6 = dom.createTextNode("Data Scientist, People Analytics, requistion #398 | 16 jul 2014, at 6.30am");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","col-sm-3");
        var el5 = dom.createTextNode("\n        	");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5,"src","images/mem3.png");
        dom.setAttribute(el5,"style","width:321px; margin-top: -25px;");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","col-sm-4 header-options");
        var el5 = dom.createTextNode("\n		      ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","dropdown");
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6,"id","dpublish");
        dom.setAttribute(el6,"data-target","#");
        dom.setAttribute(el6,"data-toggle","dropdown");
        dom.setAttribute(el6,"aria-haspopup","true");
        dom.setAttribute(el6,"class","dropdown-toggle btn-subheader");
        var el7 = dom.createTextNode("\n                Publish\n            ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"class","dropdown-menu");
        dom.setAttribute(el6,"aria-labelledby","dpublish");
        dom.setAttribute(el6,"style","margin-top: 25px;margin-left: 182px;");
        var el7 = dom.createTextNode("\n              ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"class","dropdown-item");
        dom.setAttribute(el7,"href","#");
        var el8 = dom.createTextNode("Active");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n              ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"class","dropdown-item");
        dom.setAttribute(el7,"href","#");
        var el8 = dom.createTextNode("Published Internally");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n              ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"class","dropdown-item");
        dom.setAttribute(el7,"href","#");
        var el8 = dom.createTextNode("On Hold");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n              ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"class","dropdown-item");
        dom.setAttribute(el7,"href","#");
        var el8 = dom.createTextNode("Closed");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n           	");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("  \n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("ul");
        dom.setAttribute(el5,"class","sub-header-options pull-right");
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createTextNode("\n              Add Candidate\n            ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createTextNode("\n            	");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        dom.setAttribute(el7,"class","dropdown downtog");
        dom.setAttribute(el7,"style","position:relative;");
        var el8 = dom.createTextNode("\n                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("a");
        dom.setAttribute(el8,"class","dropdown-toggle");
        dom.setAttribute(el8,"id","dnmenu");
        dom.setAttribute(el8,"data-target","#");
        dom.setAttribute(el8,"data-toggle","dropdown");
        var el9 = dom.createTextNode("\n                  ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("i");
        dom.setAttribute(el9,"class","icon-down");
        var el10 = dom.createTextNode(" ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"class","dropdown-menu");
        dom.setAttribute(el8,"aria-labelledby","dnmenu");
        dom.setAttribute(el8,"style","z-index:15; top: 15px; left: -50px;");
        var el9 = dom.createTextNode("\n                  ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("a");
        dom.setAttribute(el9,"class","dropdown-item");
        dom.setAttribute(el9,"href","#");
        var el10 = dom.createTextNode("Add tag ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                  ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("a");
        dom.setAttribute(el9,"class","dropdown-item");
        dom.setAttribute(el9,"href","#");
        var el10 = dom.createTextNode("Send e-mail ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                  ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("a");
        dom.setAttribute(el9,"class","dropdown-item");
        dom.setAttribute(el9,"href","#");
        var el10 = dom.createTextNode("Schedule interview");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n\n                  ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("a");
        dom.setAttribute(el9,"class","dropdown-item");
        dom.setAttribute(el9,"href","#");
        var el10 = dom.createTextNode("Reject candidate");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                  ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("a");
        dom.setAttribute(el9,"class","dropdown-item");
        dom.setAttribute(el9,"href","#");
        var el10 = dom.createTextNode("Archive candidate");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                  ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("a");
        dom.setAttribute(el9,"class","dropdown-item");
        dom.setAttribute(el9,"href","#");
        var el10 = dom.createTextNode("Move candidate");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                  ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("a");
        dom.setAttribute(el9,"class","dropdown-item");
        dom.setAttribute(el9,"href","#");
        var el10 = dom.createTextNode("Delete candidate");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        dom.setAttribute(el6,"id","jobdetails-show");
        var el7 = dom.createTextNode(" ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        dom.setAttribute(el7,"style","padding:0 5px; font-size: 13px; font-weight: 600;");
        var el8 = dom.createTextNode("i");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        dom.setAttribute(el6,"id","filter-show");
        var el7 = dom.createElement("i");
        dom.setAttribute(el7,"class","icon-filter ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","conversation-show");
        dom.setAttribute(el4,"style","position:absolute; right: 20px; margin-top: 14px; font-size: 18px; color:#788489;");
        var el5 = dom.createElement("i");
        dom.setAttribute(el5,"class","icon-ellipsis");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("  \n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"id","jobdetails");
        dom.setAttribute(el1,"style","display:none;width: 100%;background-color: #fff;padding: 10px 0;");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","content pagearea");
        dom.setAttribute(el2,"style","top:140px;");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"style","position: absolute;top:20px;right:0");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","btn btn-primary-outline");
        dom.setAttribute(el4,"style","padding: 2px 12px;font-size: 13px;");
        var el5 = dom.createTextNode(" Edit ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","btn btn btn-secondary-outline");
        dom.setAttribute(el4,"id","jobdetails-show");
        dom.setAttribute(el4,"style","padding: 2px 12px;font-size: 13px;");
        var el5 = dom.createTextNode(" Close ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3,"data-toggle","modal");
        dom.setAttribute(el3,"data-target","#formpreview");
        dom.setAttribute(el3,"style","position: relative;display: inline-block;left: 52px;padding: 14px 163px;top: 668px;");
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3,"data-toggle","modal");
        dom.setAttribute(el3,"data-target","#interviewprocess");
        dom.setAttribute(el3,"style","position: relative;display: inline-block;left: 227px;padding:14px 123px;top: 668px;");
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("img");
        dom.setAttribute(el3,"src","images/jobdetails.png");
        dom.setAttribute(el3,"style","width:1150px; margin-top: -35px;");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","pagearea");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","content normal");
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" Filter ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","pop-sidebar");
        dom.setAttribute(el3,"id","filter-content");
        dom.setAttribute(el3,"style","min-width: 200px;background-color: #fff;top: -5px; min-height:600px;");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"href","#");
        dom.setAttribute(el4,"id","filter-hide");
        dom.setAttribute(el4,"style","position: absolute;padding: 28px;right: 0;");
        var el5 = dom.createTextNode(" \n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("img");
        dom.setAttribute(el4,"src","images/filter.png");
        dom.setAttribute(el4,"style","width:290px;");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","dropdown");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"id","dfilter");
        dom.setAttribute(el5,"data-target","#");
        dom.setAttribute(el5,"data-toggle","dropdown");
        dom.setAttribute(el5,"aria-haspopup","true");
        dom.setAttribute(el5,"class","dropdown-toggle");
        dom.setAttribute(el5,"style","margin-top: -42px;padding: 5px;position: relative;display: block;");
        var el6 = dom.createTextNode(" ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","dropdown-menu");
        dom.setAttribute(el5,"aria-labelledby","dfilter");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("img");
        dom.setAttribute(el6,"src","images/filter-options.png");
        dom.setAttribute(el6,"style","    width: 154px;");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(" \n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" Filter");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"style","margin-bottom: -40px;position: relative;float: right;top: 6px;margin-right: -80px;");
        var el4 = dom.createElement("img");
        dom.setAttribute(el4,"src","images/nextstage.png");
        dom.setAttribute(el4,"style","width:75px;");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(" ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"style","margin-bottom: -40px;position: relative;float: left;margin-left: -90px;top:7px;");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","sortable-table");
        var el4 = dom.createTextNode("\n	  	");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("table");
        dom.setAttribute(el4,"class","inline-table");
        var el5 = dom.createTextNode("\n	  		");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("thead");
        var el6 = dom.createTextNode("\n	  			");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("tr");
        var el7 = dom.createTextNode("\n	  				");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("th");
        var el8 = dom.createTextNode("\n	  					");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"style","text-align:center; border-radius:3px; background: #45C4CE; color:#fff; padding:5px 10px; font-weight:normal;");
        var el9 = dom.createTextNode(" Shortlist 05 ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n	  				");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n	  			");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n	  		");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n	  		");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("tbody");
        var el6 = dom.createTextNode("\n	  			");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("tr");
        var el7 = dom.createElement("td");
        var el8 = dom.createTextNode("\n	  			");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"style","text-align:center;border-radius:3px; background: #fff; padding:5px 10px; ");
        var el9 = dom.createTextNode(" \n	      		");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("img");
        dom.setAttribute(el9,"src","images/stage/1.png");
        dom.setAttribute(el9,"style","width: 178px;");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n	      	");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n	      	");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n	      	");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("tr");
        var el7 = dom.createElement("td");
        var el8 = dom.createTextNode("\n	  			");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"style","text-align:center;border-radius:3px; background: #fff; padding:5px 10px; ");
        var el9 = dom.createTextNode(" \n	      		");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("img");
        dom.setAttribute(el9,"src","images/stage/2.png");
        dom.setAttribute(el9,"style","width: 178px;");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n	      	");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n	      	");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n	      	");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("tr");
        var el7 = dom.createElement("td");
        var el8 = dom.createTextNode("\n	  			");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"style","text-align:center;border-radius:3px; background: #fff; padding:5px 10px; ");
        var el9 = dom.createTextNode(" \n	      		");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("img");
        dom.setAttribute(el9,"src","images/stage/3.png");
        dom.setAttribute(el9,"style","width: 178px;");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n	      	");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n	      	");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n	      	");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("tr");
        var el7 = dom.createElement("td");
        var el8 = dom.createTextNode("\n	  			");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"style","text-align:center;border-radius:3px; background: #fff; padding:5px 10px; ");
        var el9 = dom.createTextNode(" \n	      		");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("img");
        dom.setAttribute(el9,"src","images/stage/4.png");
        dom.setAttribute(el9,"style","width: 178px;");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n	      	");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n	      	");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n	      	");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("tr");
        var el7 = dom.createElement("td");
        var el8 = dom.createTextNode("\n	  			");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"style","text-align:center;border-radius:3px; background: #fff; padding:5px 10px; ");
        var el9 = dom.createTextNode(" \n	      		");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("img");
        dom.setAttribute(el9,"src","images/stage/5.png");
        dom.setAttribute(el9,"style","width: 178px;");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n	      	");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n	      	");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n	      	");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("tr");
        var el7 = dom.createElement("td");
        var el8 = dom.createTextNode("\n	  			");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"style","text-align:center;border-radius:3px; background: #fff; padding:5px 10px; ");
        var el9 = dom.createTextNode(" \n	      		");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("img");
        dom.setAttribute(el9,"src","images/stage/6.png");
        dom.setAttribute(el9,"style","width: 178px;");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n	      	");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n	      	");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n	      	");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"class","text-muted");
        dom.setAttribute(el6,"style","text-align: center;margin-top: 15px;    margin-left: -5px;");
        var el7 = dom.createTextNode("4 candidates rejected");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n	  		");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n	  	");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n	  	");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("table");
        dom.setAttribute(el4,"class","inline-table");
        var el5 = dom.createTextNode("\n	  		");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("thead");
        var el6 = dom.createTextNode("\n	  			");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("tr");
        var el7 = dom.createTextNode("\n	  				");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("th");
        var el8 = dom.createTextNode("\n	  					");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"style","text-align:center;border-radius:3px; background: #45C4CE; color:#fff; padding:5px 10px; font-weight:normal; ");
        var el9 = dom.createTextNode(" Challange Round 04 ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n	  				");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n	  			");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n	  		");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n	  		");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("tbody");
        var el6 = dom.createTextNode("\n	  			");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("tr");
        var el7 = dom.createElement("td");
        var el8 = dom.createTextNode("\n	  				");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"style","text-align:center;border-radius:3px; background: #fff; padding:5px 10px;");
        var el9 = dom.createTextNode("\n	  					");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("img");
        dom.setAttribute(el9,"src","images/stage/11.png");
        dom.setAttribute(el9,"style"," width: 178px;");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n	      	");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n	  			");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n	  			");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("tr");
        var el7 = dom.createElement("td");
        var el8 = dom.createTextNode("\n	  			");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"style","text-align:center;border-radius:3px; background: #fff; padding:5px 10px; ");
        var el9 = dom.createTextNode(" \n	      		");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("img");
        dom.setAttribute(el9,"src","images/stage/12.png");
        dom.setAttribute(el9,"style","width: 178px;");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n	      	");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n	      	");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n	      	");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("tr");
        var el7 = dom.createElement("td");
        var el8 = dom.createTextNode("\n	  			");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"style","text-align:center;border-radius:3px; background: #fff; padding:5px 10px; ");
        var el9 = dom.createTextNode(" \n	      		");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("img");
        dom.setAttribute(el9,"src","images/stage/13.png");
        dom.setAttribute(el9,"style","width: 178px;");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n	      	");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n	      	");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n	      	");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"class","text-muted");
        dom.setAttribute(el6,"style","text-align: center;margin-top: 15px;    margin-left: -5px;");
        var el7 = dom.createTextNode("3 candidates rejected");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n	  		");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n	  	");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n	  	");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("table");
        dom.setAttribute(el4,"class","inline-table");
        var el5 = dom.createTextNode("\n	  		");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("thead");
        var el6 = dom.createTextNode("\n	  			");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("tr");
        var el7 = dom.createTextNode("\n	  				");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("th");
        var el8 = dom.createTextNode("\n	  					");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"style","text-align:center;border-radius:3px; background: #45C4CE; color:#fff; padding:5px 10px; font-weight:normal; ");
        var el9 = dom.createTextNode(" Face To Face 02 ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n	  				");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n	  			");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n	  		");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n	  		");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("tbody");
        var el6 = dom.createTextNode("\n	  			");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("tr");
        var el7 = dom.createElement("td");
        var el8 = dom.createTextNode("\n	  			");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"style","text-align:center;border-radius:3px; background: #fff; padding:5px 10px; ");
        var el9 = dom.createTextNode(" \n	      		");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("img");
        dom.setAttribute(el9,"src","images/stage/21.png");
        dom.setAttribute(el9,"style","width: 178px;");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n	      	");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n	      	");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n	      	");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("tr");
        var el7 = dom.createElement("td");
        var el8 = dom.createTextNode("\n	  			");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"style","text-align:center;border-radius:3px; background: #fff; padding:5px 10px; ");
        var el9 = dom.createTextNode(" \n	      		");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("img");
        dom.setAttribute(el9,"src","images/stage/22.png");
        dom.setAttribute(el9,"style","width: 178px;");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n	      	");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n	      	");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n	      	");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"class","text-muted");
        dom.setAttribute(el6,"style","text-align: center;margin-top: 15px;    margin-left: -5px;");
        var el7 = dom.createTextNode("2 candidates rejected");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n	  		");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n	  	");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n	  	");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("table");
        dom.setAttribute(el4,"class","inline-table");
        var el5 = dom.createTextNode("\n	  		");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("thead");
        var el6 = dom.createTextNode("\n	  			");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("tr");
        var el7 = dom.createTextNode("\n	  				");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("th");
        var el8 = dom.createTextNode("\n	  					");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"style","text-align:center;border-radius:3px; background: #45C4CE; color:#fff; padding:5px 10px; font-weight:normal; ");
        var el9 = dom.createTextNode(" Technical Round ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n	  				");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n	  			");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n	  		");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n	  		");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("tbody");
        var el6 = dom.createTextNode("\n	  			");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("tr");
        var el7 = dom.createElement("td");
        var el8 = dom.createTextNode("\n	  			");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"style","text-align:center;border-radius:3px; background: #fff; padding:5px 10px; ");
        var el9 = dom.createTextNode(" \n	      		");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("img");
        dom.setAttribute(el9,"src","images/stage/1.png");
        dom.setAttribute(el9,"style","width: 178px;");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n	      	");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n	      	");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n	  		");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n	  	");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n	  	");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("table");
        dom.setAttribute(el4,"class","inline-table last-table");
        var el5 = dom.createTextNode("\n	  		");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("thead");
        var el6 = dom.createTextNode("\n	  			");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("tr");
        var el7 = dom.createTextNode("\n	  				");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("td");
        var el8 = dom.createTextNode("\n	  					");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"style","text-align:center;border-radius:3px; background: #45C4CE; color:#fff; padding:5px 10px; font-weight:normal;");
        var el9 = dom.createTextNode(" Leadership Round ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n	  				");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n	  			");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n	  		");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n	  		");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("tbody");
        var el6 = dom.createTextNode("\n	  		");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n	  	");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n	  ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","pop-sidebar");
        dom.setAttribute(el3,"id","conversation-content");
        dom.setAttribute(el3,"style","min-width: 200px;background-color: #fff; height:760px;");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"href","#");
        dom.setAttribute(el4,"id","conversation-hide");
        dom.setAttribute(el4,"class","position: absolute;padding: 19px 55px;right: 0;");
        var el5 = dom.createTextNode(" \n		    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"style","position: absolute;right: 36px;top: 28px;padding: 10px;box-sizing: border-box;");
        var el6 = dom.createTextNode(" ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n		  ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("img");
        dom.setAttribute(el4,"src","images/stage/canstage.png");
        dom.setAttribute(el4,"style","width:297px;");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" Modal ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","modal fade");
        dom.setAttribute(el1,"id","formpreview");
        dom.setAttribute(el1,"tabindex","-1");
        dom.setAttribute(el1,"role","dialog");
        dom.setAttribute(el1,"aria-labelledby","formpreview");
        dom.setAttribute(el1,"aria-hidden","true");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","modal-dialog");
        dom.setAttribute(el2,"role","document");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","modal-content");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","modal-body");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5,"src","images/apppre.png");
        dom.setAttribute(el5,"style","width:595px; margin-left:-12px;");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"class","close");
        dom.setAttribute(el5,"data-dismiss","modal");
        dom.setAttribute(el5,"aria-label","Close");
        dom.setAttribute(el5,"style","    position: absolute;top: 10px;right: 10px;");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6,"aria-hidden","true");
        var el7 = dom.createTextNode("×");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6,"class","sr-only");
        var el7 = dom.createTextNode("Close");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","modal fade");
        dom.setAttribute(el1,"id","interviewprocess");
        dom.setAttribute(el1,"tabindex","-1");
        dom.setAttribute(el1,"role","dialog");
        dom.setAttribute(el1,"aria-labelledby","interviewprocess");
        dom.setAttribute(el1,"aria-hidden","true");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","modal-dialog");
        dom.setAttribute(el2,"role","document");
        dom.setAttribute(el2,"style","width:820px;");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","modal-content");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","modal-body");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5,"src","images/intpre.png");
        dom.setAttribute(el5,"style","width:800px; margin-left:-12px;");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"class","close");
        dom.setAttribute(el5,"data-dismiss","modal");
        dom.setAttribute(el5,"aria-label","Close");
        dom.setAttribute(el5,"style","    position: absolute;top: 10px;right: 10px;");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6,"aria-hidden","true");
        var el7 = dom.createTextNode("×");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6,"class","sr-only");
        var el7 = dom.createTextNode("Close");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","modal fade");
        dom.setAttribute(el1,"id","schmodal");
        dom.setAttribute(el1,"tabindex","-1");
        dom.setAttribute(el1,"role","dialog");
        dom.setAttribute(el1,"aria-labelledby","interviewprocess");
        dom.setAttribute(el1,"aria-hidden","true");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","modal-dialog");
        dom.setAttribute(el2,"role","document");
        dom.setAttribute(el2,"style","width:800px;");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","modal-content");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","modal-body");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5,"src","images/sche.png");
        dom.setAttribute(el5,"style","width:763px;");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"class","close");
        dom.setAttribute(el5,"data-dismiss","modal");
        dom.setAttribute(el5,"aria-label","Close");
        dom.setAttribute(el5,"style","position: absolute;top: 10px;right: 10px;");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6,"aria-hidden","true");
        var el7 = dom.createTextNode("×");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6,"class","sr-only");
        var el7 = dom.createTextNode("Close");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("script");
        var el2 = dom.createTextNode("\n$( \"#jobdetails-show\" ).click(function(e) {\n	e.preventDefault();\n	$(this).toggleClass('copyfromselected');\n  $( \"#jobdetails\" ).slideToggle( \"fast\", function() {});\n  $('.normal').toggle();\n  $('body, html').toggleClass('body-white');\n});\n  $( \"#filter-show\" ).click(function(e) {\n    e.preventDefault();\n    $('#filter-content').animate({\n      right: '0px',\n      opacity: 1\n    }, 400);\n  });\n  $( \"#filter-hide\" ).click(function(e) {\n    e.preventDefault();\n    $('#filter-content').animate({\n    right: '-1000px',\n    opacity: 0\n    }, 400); \n  });\n\n	$('.sortable-table > table').sortable({\n		containerSelector: 'table',\n		group: '.sortable-table > table',\n	  itemPath: '> tbody',\n	  itemSelector: 'tr',\n	  onDrop:function ($item, container, _super) {\n	  	$item.removeClass(container.group.options.draggedClass).removeAttr(\"style\")\n  		$(\"body\").removeClass(container.group.options.bodyClass)\n	    $('#schmodal').modal();\n	  }\n	});\n$( \".conversation-show\" ).click(function(e) {\n  $('#conversation-content').animate({\n    right: '0px',\n    opacity: 1\n  }, 400);\n\n});\n$( \"#conversation-hide\" ).click(function(e) {\n  e.preventDefault();\n  $('#conversation-content').animate({\n  right: '-1000px',\n  opacity: 0\n  }, 400); \n});\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1, 1]),0,0);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [3, 5, 3, 7]),0,0);
        morphs[2] = dom.createMorphAt(dom.childAt(fragment, [4, 1, 9]),0,0);
        morphs[3] = dom.createMorphAt(fragment,14,14,contextualElement);
        return morphs;
      },
      statements: [
        ["block","link-to",["dashboard"],[],0,null,["loc",[null,[4,12],[4,57]]]],
        ["block","link-to",["selected"],[],1,null,["loc",[null,[51,16],[51,83]]]],
        ["block","link-to",["avail-candidate"],[],2,null,["loc",[null,[88,97],[88,194]]]],
        ["content","outlet",["loc",[null,[257,0],[257,10]]]]
      ],
      locals: [],
      templates: [child0, child1, child2]
    };
  }()));

});
define('vadivel/tests/app.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('app.js should pass jshint', function(assert) { 
    assert.ok(true, 'app.js should pass jshint.'); 
  });

});
define('vadivel/tests/helpers/resolver', ['exports', 'ember/resolver', 'vadivel/config/environment'], function (exports, Resolver, config) {

  'use strict';

  var resolver = Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix
  };

  exports['default'] = resolver;

});
define('vadivel/tests/helpers/resolver.jshint', function () {

  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/resolver.js should pass jshint', function(assert) { 
    assert.ok(true, 'helpers/resolver.js should pass jshint.'); 
  });

});
define('vadivel/tests/helpers/start-app', ['exports', 'ember', 'vadivel/app', 'vadivel/config/environment'], function (exports, Ember, Application, config) {

  'use strict';



  exports['default'] = startApp;
  function startApp(attrs) {
    var application;

    var attributes = Ember['default'].merge({}, config['default'].APP);
    attributes = Ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    Ember['default'].run(function () {
      application = Application['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }

});
define('vadivel/tests/helpers/start-app.jshint', function () {

  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/start-app.js should pass jshint', function(assert) { 
    assert.ok(true, 'helpers/start-app.js should pass jshint.'); 
  });

});
define('vadivel/tests/models/added.jshint', function () {

  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/added.js should pass jshint', function(assert) { 
    assert.ok(true, 'models/added.js should pass jshint.'); 
  });

});
define('vadivel/tests/models/avail-candidate.jshint', function () {

  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/avail-candidate.js should pass jshint', function(assert) { 
    assert.ok(true, 'models/avail-candidate.js should pass jshint.'); 
  });

});
define('vadivel/tests/models/dashboard.jshint', function () {

  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/dashboard.js should pass jshint', function(assert) { 
    assert.ok(true, 'models/dashboard.js should pass jshint.'); 
  });

});
define('vadivel/tests/models/match.jshint', function () {

  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/match.js should pass jshint', function(assert) { 
    assert.ok(true, 'models/match.js should pass jshint.'); 
  });

});
define('vadivel/tests/models/matchlist.jshint', function () {

  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/matchlist.js should pass jshint', function(assert) { 
    assert.ok(true, 'models/matchlist.js should pass jshint.'); 
  });

});
define('vadivel/tests/models/newjob.jshint', function () {

  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/newjob.js should pass jshint', function(assert) { 
    assert.ok(true, 'models/newjob.js should pass jshint.'); 
  });

});
define('vadivel/tests/models/recruit.jshint', function () {

  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/recruit.js should pass jshint', function(assert) { 
    assert.ok(true, 'models/recruit.js should pass jshint.'); 
  });

});
define('vadivel/tests/models/selected.jshint', function () {

  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/selected.js should pass jshint', function(assert) { 
    assert.ok(true, 'models/selected.js should pass jshint.'); 
  });

});
define('vadivel/tests/models/stage.jshint', function () {

  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/stage.js should pass jshint', function(assert) { 
    assert.ok(true, 'models/stage.js should pass jshint.'); 
  });

});
define('vadivel/tests/router.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('router.js should pass jshint', function(assert) { 
    assert.ok(true, 'router.js should pass jshint.'); 
  });

});
define('vadivel/tests/routes/added.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/added.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/added.js should pass jshint.'); 
  });

});
define('vadivel/tests/routes/avail-candidate.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/avail-candidate.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/avail-candidate.js should pass jshint.'); 
  });

});
define('vadivel/tests/routes/dashboard.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/dashboard.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/dashboard.js should pass jshint.'); 
  });

});
define('vadivel/tests/routes/match.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/match.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/match.js should pass jshint.'); 
  });

});
define('vadivel/tests/routes/matchlist.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/matchlist.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/matchlist.js should pass jshint.'); 
  });

});
define('vadivel/tests/routes/newjob.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/newjob.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/newjob.js should pass jshint.'); 
  });

});
define('vadivel/tests/routes/recruit.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/recruit.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/recruit.js should pass jshint.'); 
  });

});
define('vadivel/tests/routes/selected.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/selected.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/selected.js should pass jshint.'); 
  });

});
define('vadivel/tests/routes/stages.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/stages.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/stages.js should pass jshint.'); 
  });

});
define('vadivel/tests/test-helper', ['vadivel/tests/helpers/resolver', 'ember-qunit'], function (resolver, ember_qunit) {

	'use strict';

	ember_qunit.setResolver(resolver['default']);

});
define('vadivel/tests/test-helper.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('test-helper.js should pass jshint', function(assert) { 
    assert.ok(true, 'test-helper.js should pass jshint.'); 
  });

});
define('vadivel/tests/unit/models/added-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel('added', 'Unit | Model | added', {
    // Specify the other units that are required for this test.
    needs: []
  });

  ember_qunit.test('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });

});
define('vadivel/tests/unit/models/added-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/added-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/models/added-test.js should pass jshint.'); 
  });

});
define('vadivel/tests/unit/models/avail-candidate-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel('avail-candidate', 'Unit | Model | avail candidate', {
    // Specify the other units that are required for this test.
    needs: []
  });

  ember_qunit.test('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });

});
define('vadivel/tests/unit/models/avail-candidate-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/avail-candidate-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/models/avail-candidate-test.js should pass jshint.'); 
  });

});
define('vadivel/tests/unit/models/candidate-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel('candidate', 'Unit | Model | candidate', {
    // Specify the other units that are required for this test.
    needs: []
  });

  ember_qunit.test('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });

});
define('vadivel/tests/unit/models/candidate-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/candidate-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/models/candidate-test.js should pass jshint.'); 
  });

});
define('vadivel/tests/unit/models/company-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel('company', 'Unit | Model | company', {
    // Specify the other units that are required for this test.
    needs: []
  });

  ember_qunit.test('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });

});
define('vadivel/tests/unit/models/company-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/company-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/models/company-test.js should pass jshint.'); 
  });

});
define('vadivel/tests/unit/models/dashboard-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel('dashboard', 'Unit | Model | dashboard', {
    // Specify the other units that are required for this test.
    needs: []
  });

  ember_qunit.test('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });

});
define('vadivel/tests/unit/models/dashboard-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/dashboard-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/models/dashboard-test.js should pass jshint.'); 
  });

});
define('vadivel/tests/unit/models/draft-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel('draft', 'Unit | Model | draft', {
    // Specify the other units that are required for this test.
    needs: []
  });

  ember_qunit.test('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });

});
define('vadivel/tests/unit/models/draft-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/draft-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/models/draft-test.js should pass jshint.'); 
  });

});
define('vadivel/tests/unit/models/holiday-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel('holiday', 'Unit | Model | holiday', {
    // Specify the other units that are required for this test.
    needs: []
  });

  ember_qunit.test('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });

});
define('vadivel/tests/unit/models/holiday-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/holiday-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/models/holiday-test.js should pass jshint.'); 
  });

});
define('vadivel/tests/unit/models/match-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel('match', 'Unit | Model | match', {
    // Specify the other units that are required for this test.
    needs: []
  });

  ember_qunit.test('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });

});
define('vadivel/tests/unit/models/match-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/match-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/models/match-test.js should pass jshint.'); 
  });

});
define('vadivel/tests/unit/models/matchlist-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel('matchlist', 'Unit | Model | matchlist', {
    // Specify the other units that are required for this test.
    needs: []
  });

  ember_qunit.test('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });

});
define('vadivel/tests/unit/models/matchlist-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/matchlist-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/models/matchlist-test.js should pass jshint.'); 
  });

});
define('vadivel/tests/unit/models/newjob-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel('newjob', 'Unit | Model | newjob', {
    // Specify the other units that are required for this test.
    needs: []
  });

  ember_qunit.test('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });

});
define('vadivel/tests/unit/models/newjob-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/newjob-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/models/newjob-test.js should pass jshint.'); 
  });

});
define('vadivel/tests/unit/models/recruit-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel('recruit', 'Unit | Model | recruit', {
    // Specify the other units that are required for this test.
    needs: []
  });

  ember_qunit.test('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });

});
define('vadivel/tests/unit/models/recruit-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/recruit-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/models/recruit-test.js should pass jshint.'); 
  });

});
define('vadivel/tests/unit/models/selected-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel('selected', 'Unit | Model | selected', {
    // Specify the other units that are required for this test.
    needs: []
  });

  ember_qunit.test('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });

});
define('vadivel/tests/unit/models/selected-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/selected-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/models/selected-test.js should pass jshint.'); 
  });

});
define('vadivel/tests/unit/models/stage-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel('stage', 'Unit | Model | stage', {
    // Specify the other units that are required for this test.
    needs: []
  });

  ember_qunit.test('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });

});
define('vadivel/tests/unit/models/stage-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/stage-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/models/stage-test.js should pass jshint.'); 
  });

});
define('vadivel/tests/unit/models/task-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel('task', 'Unit | Model | task', {
    // Specify the other units that are required for this test.
    needs: []
  });

  ember_qunit.test('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });

});
define('vadivel/tests/unit/models/task-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/task-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/models/task-test.js should pass jshint.'); 
  });

});
define('vadivel/tests/unit/routes/added-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:added', 'Unit | Route | added', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('vadivel/tests/unit/routes/added-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/added-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/added-test.js should pass jshint.'); 
  });

});
define('vadivel/tests/unit/routes/avail-candidate-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:avail-candidate', 'Unit | Route | avail candidate', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('vadivel/tests/unit/routes/avail-candidate-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/avail-candidate-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/avail-candidate-test.js should pass jshint.'); 
  });

});
define('vadivel/tests/unit/routes/candidates-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:candidates', 'Unit | Route | candidates', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('vadivel/tests/unit/routes/candidates-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/candidates-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/candidates-test.js should pass jshint.'); 
  });

});
define('vadivel/tests/unit/routes/company-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:company', 'Unit | Route | company', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('vadivel/tests/unit/routes/company-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/company-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/company-test.js should pass jshint.'); 
  });

});
define('vadivel/tests/unit/routes/dashboard-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:dashboard', 'Unit | Route | dashboard', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('vadivel/tests/unit/routes/dashboard-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/dashboard-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/dashboard-test.js should pass jshint.'); 
  });

});
define('vadivel/tests/unit/routes/dashboards-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:dashboards', 'Unit | Route | dashboards', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('vadivel/tests/unit/routes/dashboards-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/dashboards-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/dashboards-test.js should pass jshint.'); 
  });

});
define('vadivel/tests/unit/routes/drafts-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:drafts', 'Unit | Route | drafts', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('vadivel/tests/unit/routes/drafts-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/drafts-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/drafts-test.js should pass jshint.'); 
  });

});
define('vadivel/tests/unit/routes/holidays-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:holidays', 'Unit | Route | holidays', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('vadivel/tests/unit/routes/holidays-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/holidays-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/holidays-test.js should pass jshint.'); 
  });

});
define('vadivel/tests/unit/routes/match-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:match', 'Unit | Route | match', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('vadivel/tests/unit/routes/match-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/match-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/match-test.js should pass jshint.'); 
  });

});
define('vadivel/tests/unit/routes/matchlist-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:matchlist', 'Unit | Route | matchlist', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('vadivel/tests/unit/routes/matchlist-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/matchlist-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/matchlist-test.js should pass jshint.'); 
  });

});
define('vadivel/tests/unit/routes/newjob-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:newjob', 'Unit | Route | newjob', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('vadivel/tests/unit/routes/newjob-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/newjob-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/newjob-test.js should pass jshint.'); 
  });

});
define('vadivel/tests/unit/routes/recruit-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:recruit', 'Unit | Route | recruit', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('vadivel/tests/unit/routes/recruit-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/recruit-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/recruit-test.js should pass jshint.'); 
  });

});
define('vadivel/tests/unit/routes/selected-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:selected', 'Unit | Route | selected', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('vadivel/tests/unit/routes/selected-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/selected-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/selected-test.js should pass jshint.'); 
  });

});
define('vadivel/tests/unit/routes/stages-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:stages', 'Unit | Route | stages', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('vadivel/tests/unit/routes/stages-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/stages-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/stages-test.js should pass jshint.'); 
  });

});
define('vadivel/tests/unit/routes/tasks-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:tasks', 'Unit | Route | tasks', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('vadivel/tests/unit/routes/tasks-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/tasks-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/tasks-test.js should pass jshint.'); 
  });

});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('vadivel/config/environment', ['ember'], function(Ember) {
  var prefix = 'vadivel';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("vadivel/tests/test-helper");
} else {
  require("vadivel/app")["default"].create({"name":"vadivel","version":"0.0.0+1e25a9cc"});
}

/* jshint ignore:end */
//# sourceMappingURL=vadivel.map