"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var lodash_1 = require("lodash");
var HtmlForm;
(function (HtmlForm) {
    "use strict";
    var Label = /** @class */ (function (_super) {
        __extends(Label, _super);
        function Label(props) {
            return _super.call(this, props) || this;
        }
        Label.prototype.render = function () {
            var className = "control-label";
            if (this.props.className) {
                className += " " + this.props.className;
            }
            return React.createElement("label", { className: className, title: this.props.title, htmlFor: this.props.htmlFor }, this.props.text);
        };
        return Label;
    }(React.Component));
    HtmlForm.Label = Label;
    var Hidden = /** @class */ (function (_super) {
        __extends(Hidden, _super);
        function Hidden(props) {
            return _super.call(this, props) || this;
        }
        Hidden.prototype.render = function () {
            return React.createElement("input", __assign({ type: "hidden", id: this.props.field.name, name: this.props.field.name, value: this.props.value ? this.props.value : "" }, this.props.field.validations));
        };
        return Hidden;
    }(React.Component));
    HtmlForm.Hidden = Hidden;
    ;
    var CheckBox = /** @class */ (function (_super) {
        __extends(CheckBox, _super);
        function CheckBox(props) {
            return _super.call(this, props) || this;
        }
        CheckBox.prototype.handleChange = function (action, name, e) {
            this.props.onChange(action, name, e);
        };
        CheckBox.prototype.render = function () {
            return React.createElement("label", null,
                React.createElement("input", { disabled: this.props.disabled, type: "checkbox", id: this.props.field.name, name: this.props.field.name, checked: this.props.checked, onChange: this.handleChange.bind(this, this.props.field.name), title: this.props.title }),
                this.props.field.labelName);
        };
        return CheckBox;
    }(React.Component));
    HtmlForm.CheckBox = CheckBox;
    var TextBox = /** @class */ (function (_super) {
        __extends(TextBox, _super);
        function TextBox(props) {
            return _super.call(this, props) || this;
        }
        TextBox.prototype.handleChange = function (action, name, e) {
            this.props.onChange(action, name, e);
        };
        TextBox.prototype.handleBlur = function (action, name, e) {
            if (this.props.onBlur) {
                this.props.onBlur();
            }
        };
        TextBox.prototype.handleKeyPress = function (e) {
            if (this.props.onKeyPress) {
                this.props.onKeyPress(e);
            }
        };
        TextBox.prototype.handleKeyUp = function (e) {
            if (this.props.onKeyUp) {
                this.props.onKeyUp(e);
            }
        };
        TextBox.prototype.handleKeyDown = function (e) {
            if (this.props.onKeyDown) {
                this.props.onKeyDown(e);
            }
        };
        TextBox.prototype.handleClick = function (e) {
            if (this.props.onClick) {
                this.props.onClick(e);
            }
        };
        TextBox.prototype.handleKeyFocus = function (e) {
            if (this.props.onFocus) {
                this.props.onFocus(e);
            }
        };
        TextBox.prototype.render = function () {
            var className = "form-control";
            if (this.props.className) {
                className += " " + this.props.className;
            }
            return React.createElement("input", __assign({ className: className, style: this.props.style, type: "text", id: this.props.field.name, name: this.props.field.name, value: this.props.value ? this.props.value : "", readOnly: this.props.readOnly, disabled: this.props.disabled, autoComplete: this.props.autoComplete, placeholder: this.props.placeholder, maxLength: this.props.maxLength }, this.props.field.validations, { onChange: this.handleChange.bind(this, this.props.field.name), onBlur: this.handleBlur.bind(this), onKeyPress: this.handleKeyPress.bind(this), onKeyUp: this.handleKeyUp.bind(this), onKeyDown: this.handleKeyDown.bind(this), onClick: this.handleClick.bind(this), onFocus: this.handleKeyFocus.bind(this), title: this.props.title }));
        };
        return TextBox;
    }(React.Component));
    HtmlForm.TextBox = TextBox;
    ;
    var TextBoxV2 = /** @class */ (function (_super) {
        __extends(TextBoxV2, _super);
        function TextBoxV2() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TextBoxV2.prototype.render = function () {
            return React.createElement("input", __assign({ className: this.props.className, style: this.props.style, type: "text", id: this.props.field.name, name: this.props.field.name, readOnly: this.props.readOnly, disabled: this.props.disabled, autoComplete: this.props.autoComplete, placeholder: this.props.placeholder, maxLength: this.props.maxLength }, this.props.field.validations, { onChange: this.handleChange.bind(this, this.props.field.name), onBlur: this.handleBlur.bind(this), onKeyPress: this.handleKeyPress.bind(this), onKeyUp: this.handleKeyUp.bind(this), onKeyDown: this.handleKeyDown.bind(this), onClick: this.handleClick.bind(this), onFocus: this.handleKeyFocus.bind(this), title: this.props.title }));
        };
        return TextBoxV2;
    }(TextBox));
    HtmlForm.TextBoxV2 = TextBoxV2;
    var Password = /** @class */ (function (_super) {
        __extends(Password, _super);
        function Password(props) {
            return _super.call(this, props) || this;
        }
        Password.prototype.handleChange = function (action, name, e) {
            this.props.onChange(action, name, e);
        };
        Password.prototype.handleBlur = function (action, name, e) {
            if (this.props.onBlur) {
                this.props.onBlur();
            }
        };
        Password.prototype.render = function () {
            var className = this.props.isExcludeBootstrap ? "" : "form-control";
            if (this.props.className) {
                className += " " + this.props.className;
            }
            return React.createElement("input", __assign({ className: className, type: this.props.type ? this.props.type : "password", id: this.props.field.name, name: this.props.field.name, value: this.props.value, autoComplete: this.props.autoComplete, maxLength: this.props.maxLength, placeholder: this.props.placeholder }, this.props.field.validations, { onChange: this.handleChange.bind(this, this.props.field.name), onBlur: this.handleBlur.bind(this), title: this.props.title, tabIndex: this.props.tabIndex }));
        };
        return Password;
    }(React.Component));
    HtmlForm.Password = Password;
    var TextArea = /** @class */ (function (_super) {
        __extends(TextArea, _super);
        function TextArea(props) {
            return _super.call(this, props) || this;
        }
        TextArea.prototype.handleChange = function (action, name, e) {
            this.props.onChange(action, name, e);
        };
        TextArea.prototype.handleBlur = function (action, name, e) {
            if (this.props.onBlur) {
                this.props.onBlur();
            }
        };
        TextArea.prototype.render = function () {
            var className = this.props.isExcludeBootstrap ? "" : "form-control";
            if (this.props.className) {
                className += " " + this.props.className;
            }
            return React.createElement("textarea", __assign({ className: className, rows: this.props.rows ? this.props.rows : 3, id: this.props.field.name, name: this.props.field.name, value: this.props.value === null ? "" : this.props.value, placeholder: this.props.placeholder, maxLength: this.props.maxLength, disabled: this.props.disabled }, this.props.field.validations, { style: this.props.style, onChange: this.handleChange.bind(this, this.props.field.name), onBlur: this.handleBlur.bind(this), title: this.props.title }));
        };
        return TextArea;
    }(React.Component));
    HtmlForm.TextArea = TextArea;
    var Select = /** @class */ (function (_super) {
        __extends(Select, _super);
        function Select(props) {
            return _super.call(this, props) || this;
        }
        Select.prototype.handleChange = function (action, name, e) {
            this.props.onChange(action, name, e);
        };
        Select.prototype.handleClick = function (e) {
            if (this.props.onClick) {
                this.props.onClick(e);
            }
        };
        Select.prototype.renderOptions = function () {
            return lodash_1.map(this.props.options, function (o, index) {
                return React.createElement("option", { key: index, value: o.value }, o.text);
            });
        };
        Select.prototype.render = function () {
            var className = "form-control";
            if (this.props.className) {
                className += " " + this.props.className;
            }
            return React.createElement("select", { className: className, id: this.props.field.name, name: this.props.field.name, style: this.props.style, value: this.props.value === null ? "" : this.props.value, disabled: this.props.disabled, onChange: this.handleChange.bind(this, this.props.field.name), onClick: this.handleClick.bind(this), title: this.props.title }, this.renderOptions());
        };
        return Select;
    }(React.Component));
    HtmlForm.Select = Select;
    var SelectV2 = /** @class */ (function (_super) {
        __extends(SelectV2, _super);
        function SelectV2() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SelectV2.prototype.render = function () {
            return React.createElement("select", { className: this.props.className, id: this.props.field.name, name: this.props.field.name, style: this.props.style, value: this.props.value === null ? "" : this.props.value, disabled: this.props.disabled, onChange: this.handleChange.bind(this, this.props.field.name), onClick: this.handleClick.bind(this), title: this.props.title }, this.renderOptions());
        };
        return SelectV2;
    }(Select));
    HtmlForm.SelectV2 = SelectV2;
    var RadioBox = /** @class */ (function (_super) {
        __extends(RadioBox, _super);
        function RadioBox(props) {
            return _super.call(this, props) || this;
        }
        RadioBox.prototype.handleClick = function (action, name, e) {
            if (this.props.onClick) {
                this.props.onClick(action, name, e);
            }
        };
        RadioBox.prototype.handleMouseLeave = function (action, name, e) {
            if (this.props.onMouseLeave) {
                this.props.onMouseLeave();
            }
        };
        RadioBox.prototype.render = function () {
            return React.createElement("span", __assign({ className: this.props.className, value: this.props.value ? this.props.value : "", onClick: this.handleClick.bind(this, this.props.field.name), onMouseLeave: this.handleMouseLeave.bind(this) }, this.props.field.validations));
        };
        return RadioBox;
    }(React.Component));
    HtmlForm.RadioBox = RadioBox;
})(HtmlForm = exports.HtmlForm || (exports.HtmlForm = {}));
//# sourceMappingURL=HtmlForm.js.map