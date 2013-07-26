(function() {
  var App;

  window.App = this.App = App = {};

  App.log = function(status) {
    if (typeof console !== "undefined" && console !== null) {
      return console.log("LOG:", status);
    }
  };

  App.warn = function(status) {
    if (typeof console !== "undefined" && console !== null) {
      return console.log("WARNING:", status);
    }
  };

  App.title = function(title) {
    if (typeof window !== "undefined" && window !== null) {
      return window.title = title;
    }
  };

}).call(this);

(function() {

  App.Session = Mozart.Model.create({
    modelName: 'Session'
  });

  App.Session.attributes({
    "dtend": "datetime",
    "dtstart": "datetime",
    "begin": "string",
    "end": "string",
    "dtstamp": "datetime",
    "location": "string",
    "url": "string",
    "uid": "string",
    "summary": "string",
    "description": "string"
  });

  App.Session.ajax({
    url: 'http://osconsessions.herokuapp.com/sessions'
  });

}).call(this);

(function() {



}).call(this);

(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App.MainController = (function(_super) {

    __extends(MainController, _super);

    function MainController() {
      this.init = __bind(this.init, this);
      return MainController.__super__.constructor.apply(this, arguments);
    }

    MainController.prototype.init = function() {
      this.set('sessions', App.Session);
      return App.Session.loadAll();
    };

    return MainController;

  })(Mozart.Controller);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App.MainView = (function(_super) {

    __extends(MainView, _super);

    function MainView() {
      return MainView.__super__.constructor.apply(this, arguments);
    }

    MainView.prototype.templateName = 'app/templates/main_view';

    return MainView;

  })(Mozart.View);

}).call(this);

(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App.AccordionControl = (function(_super) {

    __extends(AccordionControl, _super);

    function AccordionControl() {
      this.markActive = __bind(this.markActive, this);

      this.draw = __bind(this.draw, this);
      return AccordionControl.__super__.constructor.apply(this, arguments);
    }

    AccordionControl.prototype.viewClassLookup = "App.AccordionPanelControl";

    AccordionControl.prototype.activeClassName = 'active';

    AccordionControl.prototype.idPrefix = 'accordion';

    AccordionControl.prototype.idField = 'id';

    AccordionControl.prototype.tag = 'div';

    AccordionControl.prototype.init = function() {
      AccordionControl.__super__.init.apply(this, arguments);
      return this.bind('change:value', this.markActive);
    };

    AccordionControl.prototype.draw = function() {
      AccordionControl.__super__.draw.apply(this, arguments);
      return this.markActive();
    };

    AccordionControl.prototype.markActive = function() {
      var id, view, _ref, _results;
      _ref = this.itemViews;
      _results = [];
      for (id in _ref) {
        view = _ref[id];
        if (view.element != null) {
          _results.push(view.element.toggleClass(this.activeClassName, view.content[this.idField] === this.value));
        }
      }
      return _results;
    };

    return AccordionControl;

  })(Mozart.Collection);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App.AccordionPanelControl = (function(_super) {

    __extends(AccordionPanelControl, _super);

    function AccordionPanelControl() {
      return AccordionPanelControl.__super__.constructor.apply(this, arguments);
    }

    AccordionPanelControl.prototype.templateName = 'app/templates/controls/accordion_panel_control';

    AccordionPanelControl.prototype.idPrefix = 'accordion-panel';

    return AccordionPanelControl;

  })(Mozart.View);

}).call(this);

(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App.CheckboxControl = (function(_super) {

    __extends(CheckboxControl, _super);

    function CheckboxControl() {
      this.updateValue = __bind(this.updateValue, this);

      this.afterRender = __bind(this.afterRender, this);
      return CheckboxControl.__super__.constructor.apply(this, arguments);
    }

    CheckboxControl.prototype.tag = 'input';

    CheckboxControl.prototype.typeHtml = 'checkbox';

    CheckboxControl.prototype.skipTemplate = true;

    CheckboxControl.prototype.init = function() {
      CheckboxControl.__super__.init.apply(this, arguments);
      return this.bind('change:value', this.updateValue);
    };

    CheckboxControl.prototype.afterRender = function() {
      return this.updateValue();
    };

    CheckboxControl.prototype.updateValue = function() {
      if (this.element == null) {
        return;
      }
      return this.element[0].checked = this.value;
    };

    CheckboxControl.prototype.setValue = function() {
      if (this.element == null) {
        return;
      }
      return this.set('value', this.element[0].checked);
    };

    CheckboxControl.prototype.change = function() {
      return this.setValue();
    };

    return CheckboxControl;

  })(Mozart.Control);

}).call(this);

(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App.CollectionPageControl = (function(_super) {

    __extends(CollectionPageControl, _super);

    function CollectionPageControl() {
      this.setPage = __bind(this.setPage, this);

      this.next = __bind(this.next, this);

      this.previous = __bind(this.previous, this);

      this.beforeRender = __bind(this.beforeRender, this);
      return CollectionPageControl.__super__.constructor.apply(this, arguments);
    }

    CollectionPageControl.prototype.templateName = 'app/templates/controls/collection_page_control';

    CollectionPageControl.prototype.init = function() {
      CollectionPageControl.__super__.init.call(this);
      this.bind('change:pageCurrent', this.redraw);
      return this.bind('change:pageTotal', this.redraw);
    };

    CollectionPageControl.prototype.beforeRender = function() {
      var end, pos, start, txt;
      this.pages = [];
      start = Math.max(0, Math.min(this.pageCurrent - 4, this.pageTotal - 9));
      end = Math.min(this.pageTotal - 1, start + 8);
      pos = start;
      while (pos <= end) {
        txt = pos + 1;
        this.pages.push({
          number: pos,
          text: txt,
          current: pos === this.pageCurrent
        });
        pos++;
      }
      if (this.pages.length === 0) {
        this.pages = [
          {
            number: 1,
            text: 1,
            current: true
          }
        ];
      }
      this.previousDisabled = this.pageCurrent <= 0;
      this.nextDisabled = this.pageCurrent >= this.pageTotal - 1;
      return this.dispCurrentPage = this.pageCurrent + 1;
    };

    CollectionPageControl.prototype.previous = function() {
      if (!this.previousDisabled) {
        return this.set('pageCurrent', this.pageCurrent - 1);
      }
    };

    CollectionPageControl.prototype.next = function() {
      if (!this.nextDisabled) {
        return this.set('pageCurrent', this.pageCurrent + 1);
      }
    };

    CollectionPageControl.prototype.setPage = function(e) {
      return this.set('pageCurrent', e.data('page'));
    };

    return CollectionPageControl;

  })(Mozart.Control);

}).call(this);

(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App.ModalControl = (function(_super) {

    __extends(ModalControl, _super);

    function ModalControl() {
      this.hide = __bind(this.hide, this);

      this.show = __bind(this.show, this);

      this.afterRender = __bind(this.afterRender, this);
      return ModalControl.__super__.constructor.apply(this, arguments);
    }

    ModalControl.prototype.afterRender = function() {
      return this.element.hide();
    };

    ModalControl.prototype.show = function() {
      return this.element.modal('show');
    };

    ModalControl.prototype.hide = function() {
      return this.element.modal('hide');
    };

    ModalControl.prototype.ok = function() {
      Mozart.getPath(this.parent, this.target);
      return this.hide();
    };

    return ModalControl;

  })(Mozart.Control);

}).call(this);

(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App.PageSelectControl = (function(_super) {

    __extends(PageSelectControl, _super);

    function PageSelectControl() {
      this.unbindFromCollection = __bind(this.unbindFromCollection, this);

      this.bindToCollection = __bind(this.bindToCollection, this);

      this.release = __bind(this.release, this);

      this.pageSelected = __bind(this.pageSelected, this);

      this.pageChanged = __bind(this.pageChanged, this);

      this.pageTotalChanged = __bind(this.pageTotalChanged, this);

      this.afterRender = __bind(this.afterRender, this);

      this.init = __bind(this.init, this);
      return PageSelectControl.__super__.constructor.apply(this, arguments);
    }

    PageSelectControl.prototype.templateName = 'app/templates/controls/page_select_control';

    PageSelectControl.prototype.pages = [];

    PageSelectControl.prototype.init = function() {
      PageSelectControl.__super__.init.call(this);
      if (this.target != null) {
        this.targetObj = Mozart._getPath(this.target);
      }
      if (this.targetObj == null) {
        return this.targetObj = this.parent;
      }
    };

    PageSelectControl.prototype.afterRender = function() {
      if (this.collectionView == null) {
        this.collectionView = this.targetObj.childView(this["for"]);
        this.bindToCollection();
      }
      this.selectEl = this.element.find("#" + this.id + "-select");
      return this.pageChanged();
    };

    PageSelectControl.prototype.pageTotalChanged = function() {
      var i;
      this.pages = (function() {
        var _i, _ref, _results;
        _results = [];
        for (i = _i = 1, _ref = this.collectionView.pageTotal; 1 <= _ref ? _i <= _ref : _i >= _ref; i = 1 <= _ref ? ++_i : --_i) {
          _results.push(i);
        }
        return _results;
      }).call(this);
      return this.redraw();
    };

    PageSelectControl.prototype.pageChanged = function() {
      return this.selectEl.val(this.collectionView.pageCurrent + 1);
    };

    PageSelectControl.prototype.pageSelected = function(el, data) {
      return this.collectionView.set('pageCurrent', this.selectEl.val() - 1);
    };

    PageSelectControl.prototype.release = function() {
      this.unbindFromCollection();
      return PageSelectControl.__super__.release.call(this);
    };

    PageSelectControl.prototype.bindToCollection = function() {
      return this.collectionView.bind('change:pageTotal', this.pageTotalChanged);
    };

    PageSelectControl.prototype.unbindFromCollection = function() {
      return this.collectionView.unbind('change:pageTotal', this.pageTotalChanged);
    };

    return PageSelectControl;

  })(Mozart.Control);

}).call(this);

(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App.RadioControl = (function(_super) {

    __extends(RadioControl, _super);

    function RadioControl() {
      this.changeChecked = __bind(this.changeChecked, this);

      this.updateValue = __bind(this.updateValue, this);

      this.afterRender = __bind(this.afterRender, this);
      return RadioControl.__super__.constructor.apply(this, arguments);
    }

    RadioControl.prototype.tag = 'form';

    RadioControl.prototype.skipTemplate = true;

    RadioControl.prototype.idField = 'id';

    RadioControl.prototype.valueField = 'name';

    RadioControl.prototype.init = function() {
      RadioControl.__super__.init.apply(this, arguments);
      this.bind('change:value', this.updateValue);
      return this.bind('change:collection', this.redraw);
    };

    RadioControl.prototype.afterRender = function() {
      var ele, value, _i, _len, _ref;
      this.elements = {};
      _ref = this.collection;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        value = _ref[_i];
        ele = $('<input>').attr('type', 'radio').attr('value', value[this.idField]).change(this.changeChecked);
        this.elements[value[this.idField]] = ele;
        this.element.append($('<div>').append(ele).append(value[this.valueField]));
      }
      return this.updateValue();
    };

    RadioControl.prototype.updateValue = function() {
      var element, value, _ref, _results;
      if (this.element == null) {
        return;
      }
      _ref = this.elements;
      _results = [];
      for (value in _ref) {
        element = _ref[value];
        _results.push(element[0].checked = this.value === value);
      }
      return _results;
    };

    RadioControl.prototype.changeChecked = function(e) {
      return this.set('value', e.target.value);
    };

    return RadioControl;

  })(Mozart.Control);

}).call(this);

(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App.SelectControl = (function(_super) {

    __extends(SelectControl, _super);

    function SelectControl() {
      this.setValue = __bind(this.setValue, this);

      this.updateValue = __bind(this.updateValue, this);

      this.afterRender = __bind(this.afterRender, this);
      return SelectControl.__super__.constructor.apply(this, arguments);
    }

    SelectControl.prototype.tag = 'select';

    SelectControl.prototype.skipTemplate = true;

    SelectControl.prototype.idField = 'id';

    SelectControl.prototype.valueField = 'name';

    SelectControl.prototype.init = function() {
      SelectControl.__super__.init.apply(this, arguments);
      this.bind('change:value', this.updateValue);
      return this.bind('change:collection', this.redraw);
    };

    SelectControl.prototype.afterRender = function() {
      var ele, value, _i, _len, _ref;
      this.element.empty();
      _ref = this.collection;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        value = _ref[_i];
        ele = $('<option>').attr('value', value[this.idField]).html(value[this.valueField]);
        this.element.append(ele);
      }
      return this.updateValue();
    };

    SelectControl.prototype.updateValue = function() {
      if (this.element == null) {
        return;
      }
      return this.element.val(this.value);
    };

    SelectControl.prototype.setValue = function() {
      if (this.element == null) {
        return;
      }
      return this.set('value', this.element.val());
    };

    SelectControl.prototype.change = function() {
      return this.setValue();
    };

    return SelectControl;

  })(Mozart.Control);

}).call(this);

(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App.TextControl = (function(_super) {

    __extends(TextControl, _super);

    function TextControl() {
      this.updateInputValue = __bind(this.updateInputValue, this);

      this.afterRender = __bind(this.afterRender, this);
      return TextControl.__super__.constructor.apply(this, arguments);
    }

    TextControl.prototype.tag = "input";

    TextControl.prototype.skipTemplate = true;

    TextControl.prototype.init = function() {
      TextControl.__super__.init.apply(this, arguments);
      return this.bind('change:value', this.updateInputValue);
    };

    TextControl.prototype.afterRender = function() {
      if (this.typeHtml != null) {
        this.element.type = this.typeHtml;
      }
      this.updateInputValue();
      return this.element;
    };

    TextControl.prototype.updateInputValue = function() {
      if (this.element == null) {
        return;
      }
      return this.element.val(this.value);
    };

    TextControl.prototype.focus = function() {
      if (this.element == null) {
        return;
      }
      return this.element.focus();
    };

    TextControl.prototype.blur = function() {
      if (this.element == null) {
        return;
      }
      return this.element.blur();
    };

    TextControl.prototype.keyUp = function(e) {
      return this.set('value', this.element.val());
    };

    return TextControl;

  })(Mozart.Control);

}).call(this);

(function() {

  App.mainController = App.MainController.create();

  Mozart.root = window;

  App.Application = Mozart.MztObject.create();

  App.Application.set('layout', Mozart.Layout.create({
    rootElement: '#main',
    states: [
      Mozart.Route.create({
        viewClass: App.MainView,
        path: "/"
      })
    ]
  }));

  App.Application.ready = function() {
    App.Application.set('domManager', Mozart.DOMManager.create({
      rootElement: 'body',
      layouts: [App.Application.layout]
    }));
    App.Application.layout.bindRoot();
    App.Application.layout.start();
    return $(document).trigger('Mozart:loaded');
  };

  $(document).ready(App.Application.ready);

}).call(this);

this["HandlebarsTemplates"] = this["HandlebarsTemplates"] || {};

this["HandlebarsTemplates"]["app/templates/controls/accordion_panel_control"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<h1>"
    + escapeExpression(((stack1 = ((stack1 = depth0.content),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h1>\n";
  options = {hash:{
    'content': (depth0.content)
  },data:data};
  buffer += escapeExpression(((stack1 = helpers.view),stack1 ? stack1.call(depth0, ((stack1 = depth0.content),stack1 == null || stack1 === false ? stack1 : stack1.viewClass), options) : helperMissing.call(depth0, "view", ((stack1 = depth0.content),stack1 == null || stack1 === false ? stack1 : stack1.viewClass), options)));
  return buffer;
  });

this["HandlebarsTemplates"]["app/templates/controls/collection_page_control"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, options, self=this, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return " class=\"disabled\"";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n    <li";
  stack1 = helpers['if'].call(depth0, depth0.current, {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n      <a data-page=\"";
  if (stack1 = helpers.number) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.number; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.action),stack1 ? stack1.call(depth0, "setPage", options) : helperMissing.call(depth0, "action", "setPage", options)))
    + ">";
  if (stack2 = helpers.text) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.text; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</a>\n    </li>\n    ";
  return buffer;
  }
function program4(depth0,data) {
  
  
  return " class=\"active\"";
  }

  buffer += "<div class=\"pagination\">\n  <ul>\n    <li class=\"disabled\"><a>Page ";
  if (stack1 = helpers.dispCurrentPage) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.dispCurrentPage; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " of ";
  if (stack1 = helpers.pageTotal) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.pageTotal; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a></li>\n    <li";
  stack1 = helpers['if'].call(depth0, depth0.previousDisabled, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n      <a ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.action),stack1 ? stack1.call(depth0, "previous", options) : helperMissing.call(depth0, "action", "previous", options)))
    + ">&lt;</a>\n    </li>\n    ";
  stack2 = helpers.each.call(depth0, depth0.pages, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n    <li";
  stack2 = helpers['if'].call(depth0, depth0.nextDisabled, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += ">\n      <a ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.action),stack1 ? stack1.call(depth0, "next", options) : helperMissing.call(depth0, "action", "next", options)))
    + ">&gt;</a>\n    </li>\n  </ul>\n</div>";
  return buffer;
  });

this["HandlebarsTemplates"]["app/templates/controls/page_select_control"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "";
  buffer += "\n  <option value=\""
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\">"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</option>\n";
  return buffer;
  }

  buffer += "<select id=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "-select\" ";
  options = {hash:{
    'events': ("change")
  },data:data};
  buffer += escapeExpression(((stack1 = helpers.action),stack1 ? stack1.call(depth0, "pageSelected", options) : helperMissing.call(depth0, "action", "pageSelected", options)))
    + ">\n";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.valueEach),stack1 ? stack1.call(depth0, "pages", options) : helperMissing.call(depth0, "valueEach", "pages", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</select>";
  return buffer;
  });

this["HandlebarsTemplates"]["app/templates/main_view"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	<p><strong>"
    + escapeExpression(((stack1 = ((stack1 = depth0.content),stack1 == null || stack1 === false ? stack1 : stack1.summary)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</strong></p>\n	<em>"
    + escapeExpression(((stack1 = ((stack1 = depth0.content),stack1 == null || stack1 === false ? stack1 : stack1.begin)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " - "
    + escapeExpression(((stack1 = ((stack1 = depth0.content),stack1 == null || stack1 === false ? stack1 : stack1.end)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ", "
    + escapeExpression(((stack1 = ((stack1 = depth0.content),stack1 == null || stack1 === false ? stack1 : stack1.location)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</em>\n	<p>"
    + escapeExpression(((stack1 = ((stack1 = depth0.content),stack1 == null || stack1 === false ? stack1 : stack1.description)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n";
  return buffer;
  }

  buffer += "<div class=\"hero-unit\">\n  <h1>OSCON Sessions</h1>\n  <p>Display sessions at OSCON 2013</p><p><a href='api.html'>API</a></p>\n</div>\nFilter: ";
  options = {hash:{
    'valueNotifyBinding': ("App.mainController.filterText")
  },data:data};
  buffer += escapeExpression(((stack1 = helpers.view),stack1 ? stack1.call(depth0, "App.TextControl", options) : helperMissing.call(depth0, "view", "App.TextControl", options)))
    + "\n";
  options = {hash:{
    'collectionObserveBinding': ("App.mainController.sessions"),
    'tag': ("div"),
    'collectionTag': ("div"),
    'filterAttribute': ("summary"),
    'filterTextObserveBinding': ("App.mainController.filterText")
  },inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.collection),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "collection", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  return buffer;
  });