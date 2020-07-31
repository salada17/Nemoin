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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var View;
(function (View) {
    "use strict";
    var FormViewBase = /** @class */ (function (_super) {
        __extends(FormViewBase, _super);
        function FormViewBase(props) {
            return _super.call(this, props) || this;
        }
        FormViewBase.prototype.handleChangedFields = function (fieldsUpdateAction, action, e) {
            fieldsUpdateAction(this.state, e);
            if (action) {
                action(this.state, e);
            }
            this.setState(this.state, this.onChangedState && this.onChangedState.bind(this));
        };
        FormViewBase.prototype.handleChangedField = function (name, value, action, e) {
            //const state: TState = this.state;
            var state = this.state;
            var keys = name.split(".");
            if (keys.length === 1) {
                state[keys[0]] = value;
            }
            else if (keys.length === 2) {
                state[keys[0]][keys[1]] = value;
            }
            else if (keys.length === 3) {
                state[keys[0]][keys[1]][keys[2]] = value;
            }
            if (action) {
                action(state, e);
            }
            this.setState(state, this.onChangedState && this.onChangedState.bind(this));
        };
        FormViewBase.prototype.handleChangedValueField = function (name, e) {
            this.handleChangedField(name, e.target.value, null, e);
        };
        FormViewBase.prototype.handleChangedCheckField = function (name, e) {
            this.handleChangedField(name, e.target.checked, null, e);
        };
        FormViewBase.prototype.handleChangedValueFieldCustom = function (action, name, e) {
            this.handleChangedField(name, e.target.value, action, e);
        };
        FormViewBase.prototype.handleChangedCheckFieldCustom = function (action, name, e) {
            this.handleChangedField(name, e.target.checked, action, e);
        };
        FormViewBase.prototype.handleChangedFormField = function (name, value, action, e) {
            var state = this.state;
            var keys = name.split(".");
            if (keys.length === 1) {
                state.form[keys[0]] = value;
            }
            else if (keys.length === 2) {
                state.form[keys[0]][keys[1]] = value;
            }
            else if (keys.length === 3) {
                state.form[keys[0]][keys[1]][keys[2]] = value;
            }
            if (action) {
                action(state, e);
            }
            this.setState(state, this.onChangedState && this.onChangedState.bind(this));
        };
        FormViewBase.prototype.handleChangedFormValueField = function (name, e) {
            this.handleChangedFormField(name, e.target.value, null, e);
        };
        FormViewBase.prototype.handleChangedFormCheckField = function (name, e) {
            this.handleChangedFormField(name, e.target.checked, null, e);
        };
        FormViewBase.prototype.handleChangedFormValueFieldCustom = function (action, name, e) {
            this.handleChangedFormField(name, e.target.value, action, e);
        };
        FormViewBase.prototype.handleChangedFormCheckFieldCustom = function (action, name, e) {
            this.handleChangedFormField(name, e.target.checked, action, e);
        };
        return FormViewBase;
    }(React.Component));
    View.FormViewBase = FormViewBase;
})(View = exports.View || (exports.View = {}));
//# sourceMappingURL=FormViewBase.js.map