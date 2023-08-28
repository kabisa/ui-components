'use strict';

var React = require('react');
var classNames = require('classnames');
var reactMovable = require('react-movable');

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$e = ".index-module_button__ftajO {\n    appearance: none;\n\n    width: max-content;\n    margin: var(--margin-level-1) var(--margin-level-3);\n    border: .1rem solid transparent;\n    border-radius: var(--radii-level-1);\n    padding: var(--padding-level-2) var(--padding-level-5);\n\n    cursor: pointer;\n\n    font-size: var(--font-size-s);\n    font-family: var(--font-family);\n}\n\n.index-module_button__ftajO.index-module_primary__78TUo {\n    background: var(--brand-color-2);\n\n    color: var(--font-color-2);\n}\n\n.index-module_button__ftajO.index-module_secondary__qPU8g {\n    background: var(--brand-color-1);\n\n    color: var(--font-color-2);\n}\n\n.index-module_button__ftajO.index-module_tertiary__yTP-Y {\n    border-color: var(--brand-color-1);\n\n    background: transparent;\n\n    color: var(--font-color-1);\n}\n\n.index-module_button__ftajO:disabled {\n    cursor: not-allowed;\n\n    opacity: 40%;\n}\n\n.index-module_button__ftajO:focus {\n    outline: none;\n\n    border: .1rem solid var(--outline-color);\n}\n\n.index-module_button__ftajO:not(:disabled):active {\n    transform: translateY(.1rem);\n}\n\n.index-module_button__ftajO.index-module_primary__78TUo:not(:disabled):hover {\n    border-color: var(--brand-color-2);\n\n    background: transparent;\n\n    color: var(--brand-color-2);\n}\n\n.index-module_button__ftajO.index-module_secondary__qPU8g:not(:disabled):hover {\n    border-color: var(--brand-color-1);\n\n    background: transparent;\n\n    color: var(--brand-color-1);\n}\n\n.index-module_button__ftajO.index-module_tertiary__yTP-Y:not(:disabled):hover {\n    background: var(--brand-color-1);\n\n    color: var(--font-color-2);\n}\n";
var styles$e = {"button":"index-module_button__ftajO","primary":"index-module_primary__78TUo","secondary":"index-module_secondary__qPU8g","tertiary":"index-module_tertiary__yTP-Y"};
styleInject(css_248z$e);

const Button = _ref => {
  let {
    children,
    className,
    variant = 'primary',
    disabled = false,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement("button", _extends({
    className: classNames(styles$e.button, styles$e[variant], className),
    disabled: disabled
    // eslint-disable-next-line react/jsx-props-no-spreading
  }, props), children);
};

var css_248z$d = ".index-module_input__bEnUT {\n    border: .1rem solid var(--subtle-color);\n    border-radius: var(--radii-level-1);\n    padding: var(--padding-level-2) var(--padding-level-3);\n\n    font-family: var(--font-family);\n    font-size: var(--font-size-s);\n}\n\n.index-module_input__bEnUT:disabled {\n    cursor: not-allowed;\n    opacity: 40%;\n}\n\n.index-module_input__bEnUT:focus {\n    outline: none;\n\n    border: .1rem solid var(--outline-color);\n}\n\n.index-module_input__bEnUT:user-invalid,\n.index-module_input__bEnUT.index-module_error__KEvXi {\n    border: .1rem solid var(--error-color);\n}\n\n.index-module_input__bEnUT[type=\"radio\"] {\n    accent-color: var(--brand-color-1);\n}\n\n.index-module_input__bEnUT[type=\"radio\"]:focus {\n    accent-color: var(--brand-color-2);\n}\n";
var styles$d = {"input":"index-module_input__bEnUT","error":"index-module_error__KEvXi"};
styleInject(css_248z$d);

const Input = _ref => {
  let {
    className,
    error,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement("input", _extends({
    className: classNames(styles$d.input, className, {
      [styles$d.error]: error
    })
  }, props));
};

var css_248z$c = ".index-module_label__xE9vF {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-level-1);\n\n  text-indent: var(--spacing-level-2);\n  font-size: var(--font-size-xs);\n  font-family: var(--font-family);\n  color: var(--font-color-1);\n\n  opacity: 65%;\n}\n\n.index-module_disabled__RyEgW {\n  opacity: 40%;\n}\n";
var styles$c = {"label":"index-module_label__xE9vF","disabled":"index-module_disabled__RyEgW"};
styleInject(css_248z$c);

const Label = _ref => {
  let {
    children,
    disabled,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement("label", _extends({
    className: classNames({
      [styles$c.label]: true,
      [styles$c.disabled]: disabled
    })
  }, props), children);
};
Label.displayName = "Label";

var css_248z$b = ".index-module_select__nfX1j {\n    border: .1rem solid var(--subtle-color);\n    border-radius: var(--radii-level-1);\n    padding: var(--padding-level-2) var(--padding-level-3);\n\n    font-family: var(--font-family);\n    font-size: var(--font-size-s);\n}\n\n.index-module_select__nfX1j:disabled {\n    cursor: not-allowed;\n    opacity: 40%;\n}\n\n.index-module_select__nfX1j:focus {\n    outline: none;\n\n    border: .1rem solid var(--outline-color);\n}\n\n.index-module_select__nfX1j:user-invalid,\n.index-module_select__nfX1j.index-module_error__Uewds {\n    border: .1rem solid var(--error-color);\n}";
var styles$b = {"select":"index-module_select__nfX1j","error":"index-module_error__Uewds"};
styleInject(css_248z$b);

const Select = _ref => {
  let {
    className,
    options,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement("select", _extends({
    className: classNames(styles$b.select, className)
  }, props), options.map((_ref2, index) => {
    let {
      value,
      label
    } = _ref2;
    return /*#__PURE__*/React.createElement("option", {
      key: index,
      value: value
    }, label || value);
  }));
};

var css_248z$a = "@import url(\"../../principles/index.module.css\");\n\n.index-module_slideToggle__azetD {\n  display: inline-block;\n  appearance: none;\n  height: 1.5rem;\n  aspect-ratio: 2/1;\n  background-color: #0001;\n  box-shadow: inset 2px 2px 2px #0004;\n  border: none;\n  border-radius: var(--radii-pill);\n  margin: 0;\n  padding: 0;\n  width: 3rem;\n\n  cursor: pointer;\n\n  transition: background-color 200ms ease-in-out;\n}\n\n.index-module_slideToggle__azetD:disabled {\n  cursor: not-allowed;\n\n  opacity: 0.6;\n}\n.index-module_slideToggle__azetD:focus {\n  outline: var(--outline-color) solid 1px;\n  border: none;\n}\n\n.index-module_slideToggle__azetD::before {\n  display: inline-block;\n  content: \"\";\n  height: 1.25rem;\n  aspect-ratio: 1;\n  border-radius: 50%;\n  margin: var(--margin-level-1);\n  box-shadow: var(--shadow-level-1);\n  background: #fff;\n  transition: transform 200ms ease-in-out;\n}\n\n.index-module_slideToggle__azetD:checked {\n  background-color: var(--brand-color-1);\n}\n\n.index-module_slideToggle__azetD:checked::before {\n  transform: translateX(1.5rem);\n}\n";
var styles$a = {"slideToggle":"index-module_slideToggle__azetD"};
styleInject(css_248z$a);

const SlideToggle = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  let {
    disabled,
    value = false,
    onChange
  } = _ref;
  return /*#__PURE__*/React.createElement(Input, {
    type: "checkbox",
    checked: value,
    className: styles$a.slideToggle,
    onChange: event => {
      if (onChange) {
        onChange(event.target.checked);
      }
    },
    disabled: disabled,
    ref: ref
  });
});
SlideToggle.displayName = "SlideToggle";

var css_248z$9 = ".index-module_tile__dAWf8 {\n    list-style: none;\n\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    transition: box-shadow 500ms ease-in;\n\n    padding: var(--padding-level-5);\n\n    background: var(--bg-color-1);\n\n    font-family: var(--font-family);\n}\n";
var styles$9 = {"tile":"index-module_tile__dAWf8"};
styleInject(css_248z$9);

const Tile = _ref => {
  let {
    className,
    children
  } = _ref;
  return /*#__PURE__*/React.createElement("div", {
    className: classNames(styles$9.tile, className)
  }, children);
};

var css_248z$8 = ".index-module_link__0sIQz {\n    border-bottom: 2px solid rgba(0, 0, 0, 0);\n    padding-bottom: var(--padding-level-2);\n    font-family: Poppins, sans-serif;\n    font-size: var(--font-size-s);\n    letter-spacing: .1em;\n    text-decoration: none;\n    outline: 0;\n    color: var(--base-color);\n    transition: border-color .2s cubic-bezier(0.55, 0, 0.1, 1), padding .2s cubic-bezier(0.55, 0, 0.1, 1);\n}\n\n.index-module_link__0sIQz:hover {\n    padding-bottom: var(--padding-level-1);\n    border-color: var(--brand-color-2);\n}\n\n.index-module_light__Lh7pV {\n    color: var(--base-color);\n}\n\n.index-module_dark__Vu3-M {\n    color: var(--brand-color-1);\n\n}";
var styles$8 = {"link":"index-module_link__0sIQz","light":"index-module_light__Lh7pV","dark":"index-module_dark__Vu3-M"};
styleInject(css_248z$8);

const Link = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  let {
    children,
    theme,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement("a", _extends({}, props, {
    className: classNames(styles$8.link, styles$8[theme]),
    ref: ref
  }), children);
});
Link.displayName = "Link";

var css_248z$7 = "@import url(\"../../principles/index.module.css\");\n\n.index-module_card__50bIc {\n  box-shadow: var(--shadow-level-1);\n  border-radius: var(--radii-level-1);\n  padding: var(--padding-level-5);\n\n  background: var(--base-color);\n\n  font-family: var(--font-family); /** TODO: Should inherit */\n  color: var(--font-color-1);\n}\n\n/** TODO: On hover transform shadow? */\n";
var styles$7 = {"card":"index-module_card__50bIc"};
styleInject(css_248z$7);

const Card = _ref => {
  let {
    className,
    children,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames(styles$7.card, className)
  }, props), children);
};

var css_248z$6 = "@import url(\"../../principles/icons.css\");\n\n.index-module_icon__0YM9Y {\n    background: var(--bg-color-1);\n\n    color: var(--font-color-1)\n}\n";
var styles$6 = {"icon":"index-module_icon__0YM9Y"};
styleInject(css_248z$6);

const Icon = _ref => {
  let {
    className,
    name
  } = _ref;
  return /*#__PURE__*/React.createElement("span", {
    className: classNames('material-symbols-rounded', styles$6.icon, className)
  }, name);
};

var css_248z$5 = ".index-module_icon-button__Pgekb {\n    padding: var(--padding-level-2) var(--padding-level-3);\n}\n\n.index-module_icon__i4OBf {\n    display: block;\n    background: inherit;\n\n    font-size: var(--font-size-l);\n    color: inherit;\n}\n\n";
var styles$5 = {"icon-button":"index-module_icon-button__Pgekb","icon":"index-module_icon__i4OBf"};
styleInject(css_248z$5);

const IconButton = _ref => {
  let {
    className,
    variant = 'primary',
    disabled,
    name,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(Button, _extends({
    className: classNames(styles$5['icon-button'], className),
    variant: variant,
    disabled: disabled
  }, props), /*#__PURE__*/React.createElement(Icon, {
    className: styles$5.icon,
    name: name
  }));
};

var css_248z$4 = ":root {\n    --input-diameter: .75rem;\n}\n\n.index-module_group__2bfiL {\n    display: flex;\n    flex-direction: column;\n\n    border: none;\n    margin: 0;\n    padding: 0;\n}\n\n.index-module_group__2bfiL > legend {\n    font-size: var(--font-size-xs);\n    font-family: var(--font-family);\n    color: var(--font-color-1);\n\n    opacity: 65%;\n}\n\n.index-module_group__2bfiL > label {\n    position: relative;\n\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: flex-start;\n\n    padding: 0 0 0 calc(var(--input-diameter) + var(--padding-level-3));\n    margin: var(--margin-level-2) 0 0 0;\n\n    font-size: var(--font-size-s);\n\n    opacity: 100%;\n}\n\n.index-module_group__2bfiL > label > input {\n    position: absolute;\n\n    cursor: pointer;\n\n    width: 100%;\n    height: 100%;\n\n    opacity: 0;\n}\n\n.index-module_group__2bfiL > label:before {\n    content: '';\n    position: absolute;\n    left: 0;\n\n    cursor: pointer;\n\n    border: .1rem solid var(--brand-color-1);\n    border-radius: 50%;\n    width: var(--input-diameter);\n    height: var(--input-diameter);\n}\n\n.index-module_group__2bfiL > label.index-module_checked__X2zt-:before {\n    background: var(--brand-color-2);\n    border-color: var(--brand-color-2);\n}\n";
var styles$4 = {"group":"index-module_group__2bfiL","checked":"index-module_checked__X2zt-"};
styleInject(css_248z$4);

const RadioGroup = _ref => {
  let {
    name,
    options,
    legend,
    onChange
  } = _ref;
  return /*#__PURE__*/React.createElement("fieldset", {
    className: styles$4.group
  }, legend && /*#__PURE__*/React.createElement("legend", null, legend), options.map((_ref2, index) => {
    let {
      label,
      value,
      checked
    } = _ref2;
    return /*#__PURE__*/React.createElement(Label, {
      key: index,
      className: classNames({
        [styles$4.checked]: checked
      })
    }, label, /*#__PURE__*/React.createElement(Input, {
      type: "radio",
      name: name,
      value: value,
      onChange: onChange,
      defaultChecked: checked
    }));
  }));
};

var css_248z$3 = ".index-module_list__LBLiQ {\n    list-style-type: none;\n\n    display: grid;\n    grid-template-columns: 1fr;\n\n    grid-gap: var(--spacing-level-3);\n    margin: 0;\n    padding: 1rem;\n}\n\n.index-module_list__LBLiQ > li {\n    box-shadow: 0 0 0 rgba(0, 0, 0, 0.25);\n\n    cursor: grab;\n\n    transition: box-shadow 500ms ease-in !important;\n}\n\n.index-module_list__LBLiQ > li:hover {\n    box-shadow: var(--shadow-level-3);\n}\n\n.index-module_list__LBLiQ > li:not(.index-module_selected__Yk5YY):focus {\n    outline: var(--outline-color) solid 2px;\n    border-radius: var(--radii-level-1);\n}\n\n.index-module_list__LBLiQ > li.index-module_dragging__8PBks,\n.index-module_list__LBLiQ > li.index-module_selected__Yk5YY > * {\n    cursor: grabbing;\n\n    box-shadow: var(--shadow-level-3);\n}\n";
var styles$3 = {"list":"index-module_list__LBLiQ","selected":"index-module_selected__Yk5YY","dragging":"index-module_dragging__8PBks"};
styleInject(css_248z$3);

const SortableList = _ref => {
  let {
    children
  } = _ref;
  const [items, setItems] = React.useState(React.Children.toArray(children));
  const renderList = _ref2 => {
    let {
      children,
      props
    } = _ref2;
    return /*#__PURE__*/React.createElement("ol", _extends({
      className: styles$3.list
    }, props), children);
  };
  const renderItem = _ref3 => {
    let {
      value,
      props,
      isDragged,
      isSelected
    } = _ref3;
    return /*#__PURE__*/React.createElement("li", _extends({
      className: classNames({
        [styles$3.dragging]: isDragged,
        [styles$3.selected]: isSelected
      })
    }, props, {
      style: {
        ...props.style,
        listStyleType: 'none' // Necessary to prevent list style applying on drag
      }
    }), value);
  };
  return /*#__PURE__*/React.createElement(reactMovable.List, {
    lockVertically: true,
    values: items,
    onChange: _ref4 => {
      let {
        oldIndex,
        newIndex
      } = _ref4;
      return setItems(reactMovable.arrayMove(items, oldIndex, newIndex));
    },
    renderList: renderList,
    renderItem: renderItem
  });
};

var css_248z$2 = ".index-module_tileList__jjJLy {\n    list-style: none;\n\n    display: flex;\n    flex-direction: column;\n\n    margin: var(--margin-level-3);\n    box-shadow: var(--shadow-level-1);\n    border-radius: var(--radii-level-1);\n    padding: 0;\n\n    overflow-y: auto;\n}\n\n.index-module_tileList__jjJLy > li:not(:first-child) {\n    border-top: .1rem solid var(--subtle-color);\n}\n";
var styles$2 = {"tileList":"index-module_tileList__jjJLy"};
styleInject(css_248z$2);

const TileList = _ref => {
  let {
    className,
    children
  } = _ref;
  return /*#__PURE__*/React.createElement("ul", {
    className: classNames(styles$2.tileList, className)
  }, React.Children.map(children, (child, index) => /*#__PURE__*/React.createElement("li", {
    key: index
  }, /*#__PURE__*/React.createElement(Tile, null, child))));
};

var css_248z$1 = ".index-module_nav__j8FB5 {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.index-module_nav__j8FB5 ol {\n    margin: 0;\n    padding: var(--padding-level-3);\n    display: flex;\n    list-style: none;\n}\n\n.index-module_horizontal__ut0Uk ol {\n    flex-direction: row;\n}\n\n.index-module_horizontal__ut0Uk ol > * + * {\n    border-left: 2px solid var(--brand-color-2);\n}\n\n.index-module_horizontal__ut0Uk ol > * {\n    padding: 0 var(--padding-level-5);\n}\n\n.index-module_horizontal__ut0Uk ol > *:first-child {\n    padding-left: 0;\n}\n\n.index-module_horizontal__ut0Uk ol > *:last-child {\n    padding-right: 0;\n}\n\n.index-module_vertical__GELTH ol {\n    flex-direction: column;\n    gap: var(--spacing-level-3);\n}\n\n.index-module_vertical__GELTH ol > * {\n    border-left: 2px solid var(--brand-color-2);\n    padding-left: var(--padding-level-5);\n}";
var styles$1 = {"nav":"index-module_nav__j8FB5","horizontal":"index-module_horizontal__ut0Uk","vertical":"index-module_vertical__GELTH"};
styleInject(css_248z$1);

const Navigation = _ref => {
  let {
    children,
    direction,
    extraClasses = {}
  } = _ref;
  return /*#__PURE__*/React.createElement("nav", {
    className: classNames(styles$1.nav, styles$1[direction], extraClasses.nav)
  }, /*#__PURE__*/React.createElement("ol", {
    className: classNames(extraClasses.list)
  }, React.Children.map(children, child => /*#__PURE__*/React.createElement("li", {
    className: classNames(extraClasses.child)
  }, child))));
};

var css_248z = ".index-module_widget-tile__RwTjD {\n    display: flex;\n    justify-content: space-between;\n    gap: var(--spacing-level-5);\n\n\n\n    font-size: var(--font-size-s);\n}\n\n.index-module_widget-tile__RwTjD > * {\n    font-size: var(--font-size-l);\n}\n\n.index-module_empty__frmQQ {\n    opacity: 65%;\n}";
var styles = {"widget-tile":"index-module_widget-tile__RwTjD","empty":"index-module_empty__frmQQ"};
styleInject(css_248z);

const WidgetTile = _ref => {
  let {
    className,
    widgetName,
    ...props
  } = _ref;
  const isEmpty = widgetName === undefined;
  return /*#__PURE__*/React.createElement(Tile, _extends({
    className: classNames(styles['widget-tile'], className, {
      [styles.empty]: isEmpty
    })
  }, props), /*#__PURE__*/React.createElement(Icon, {
    name: "drag_pan"
  }), widgetName || 'Empty', !isEmpty && /*#__PURE__*/React.createElement("div", {
    className: styles.widgetActions
  }, /*#__PURE__*/React.createElement(IconButton, {
    name: "settings"
  }), /*#__PURE__*/React.createElement(IconButton, {
    variant: "tertiary",
    name: "delete"
  })));
};

const WidgetSelector = _ref => {
  const widgets = ['Slide', 'Time', 'Weather', 'Grid'];
  return /*#__PURE__*/React.createElement(SortableList, null, widgets.map((widget, index) => /*#__PURE__*/React.createElement(WidgetTile, {
    key: index,
    widgetName: widget
  })));
};

exports.Button = Button;
exports.Card = Card;
exports.IconButton = IconButton;
exports.Input = Input;
exports.Label = Label;
exports.Link = Link;
exports.Navigation = Navigation;
exports.RadioGroup = RadioGroup;
exports.Select = Select;
exports.SlideToggle = SlideToggle;
exports.SortableList = SortableList;
exports.Tile = Tile;
exports.TileList = TileList;
exports.WidgetSelector = WidgetSelector;
//# sourceMappingURL=index.js.map
