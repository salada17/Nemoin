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
var _ = require("lodash");
var React = require("react");
var HtmlFormExtention;
(function (HtmlFormExtention) {
    "use strict";
    var FileBox = /** @class */ (function (_super) {
        __extends(FileBox, _super);
        function FileBox(props) {
            var _this = _super.call(this, props) || this;
            _this.uid = _.uniqueId("fileBox_");
            _this.inputFileRef = React.createRef();
            return _this;
        }
        FileBox.prototype.handleClick = function (e) {
            if (this.props.onClick) {
                this.props.onClick();
            }
        };
        FileBox.prototype.handleBlur = function (action, name, e) {
            if (this.props.onChange) {
                this.props.onChange();
            }
        };
        FileBox.prototype.handleChange = function (e) {
            e.stopPropagation();
            e.preventDefault();
            var files = e.target.files || e.originalEvent.dataTransfer.files;
            if (files && files.length > 0) {
                this.props.onSelectedFiles(files);
                this.inputFileRef.current.value = null;
            }
        };
        FileBox.prototype.render = function () {
            var className = "btn btn-default";
            if (this.props.className) {
                className += " " + this.props.className;
            }
            return React.createElement("div", { style: { display: "inline-block" } },
                React.createElement("input", { id: this.uid, type: "file", ref: this.inputFileRef, className: "form-control", multiple: this.props.multiple, accept: "image/jpeg,image/png", style: { display: "none" }, onClick: this.handleClick.bind(this), onChange: this.handleChange.bind(this), disabled: this.props.disabled }),
                React.createElement("label", { htmlFor: this.uid },
                    React.createElement("span", { className: className }, this.props.buttonText ? this.props.buttonText : "파일첨부")));
        };
        return FileBox;
    }(React.Component));
    HtmlFormExtention.FileBox = FileBox;
    var ValidationMessage = /** @class */ (function (_super) {
        __extends(ValidationMessage, _super);
        function ValidationMessage(props) {
            return _super.call(this, props) || this;
        }
        ValidationMessage.prototype.render = function () {
            return React.createElement("span", { "data-valmsg-for": this.props.name, "data-valmsg-replace": this.props.isIconMode ? "false" : "true" }, this.props.isIconMode && React.createElement("span", { className: "sg-alert" }));
        };
        return ValidationMessage;
    }(React.Component));
    HtmlFormExtention.ValidationMessage = ValidationMessage;
    var ValidationSummaryMessage = /** @class */ (function (_super) {
        __extends(ValidationSummaryMessage, _super);
        function ValidationSummaryMessage(props) {
            return _super.call(this, props) || this;
        }
        ValidationSummaryMessage.prototype.render = function () {
            return React.createElement("li", null, this.props.message);
        };
        return ValidationSummaryMessage;
    }(React.Component));
    var ValidationSummary = /** @class */ (function (_super) {
        __extends(ValidationSummary, _super);
        function ValidationSummary(props) {
            return _super.call(this, props) || this;
        }
        ValidationSummary.prototype.renderMessages = function () {
            var errorMessages = _.reduce(this.props.modelState, function (a, b) {
                return _.union(a, b);
            });
            return _.map(errorMessages, function (m, i) {
                return React.createElement(ValidationSummaryMessage, { message: m, key: i });
            });
        };
        ValidationSummary.prototype.render = function () {
            return React.createElement("div", { "data-valmsg-summary": "true" },
                React.createElement("ul", null, this.renderMessages()));
        };
        return ValidationSummary;
    }(React.Component));
    HtmlFormExtention.ValidationSummary = ValidationSummary;
    var ValidationSummaryV2 = /** @class */ (function (_super) {
        __extends(ValidationSummaryV2, _super);
        function ValidationSummaryV2(props) {
            return _super.call(this, props) || this;
        }
        ValidationSummaryV2.prototype.renderMessages = function () {
            var errorMessages = _.reduce(this.props.modelState, function (a, b) {
                return _.union(a, b);
            });
            return _.map(errorMessages, function (m, i) {
                return React.createElement(ValidationSummaryMessage, { message: m, key: i });
            });
        };
        ValidationSummaryV2.prototype.render = function () {
            var hasError = _.keys(this.props.modelState).length > 0;
            return hasError ? React.createElement("div", { "data-valmsg-summary": "false", className: "validation-summary-errors" },
                React.createElement("ul", null, this.renderMessages())) : null;
        };
        return ValidationSummaryV2;
    }(React.Component));
    HtmlFormExtention.ValidationSummaryV2 = ValidationSummaryV2;
    var ValidationMessageV2 = /** @class */ (function (_super) {
        __extends(ValidationMessageV2, _super);
        function ValidationMessageV2(props) {
            return _super.call(this, props) || this;
        }
        ValidationMessageV2.prototype.render = function () {
            var keys = _.keys(this.props.modelState);
            var message = "";
            var hasError = _.some(keys, function (key) {
                var hasKey = key.toLowerCase() === this.props.name.toLowerCase();
                if (hasKey) {
                    message = this.props.modelState[key][0];
                }
                return hasKey;
            }.bind(this));
            return hasError && React.createElement("span", { className: "field-validation-error" }, this.props.iconMode ? React.createElement("span", { className: "sg-alert", title: message }) : React.createElement("span", null, message));
        };
        return ValidationMessageV2;
    }(React.Component));
    HtmlFormExtention.ValidationMessageV2 = ValidationMessageV2;
    var SingleValidationFormMessage = /** @class */ (function (_super) {
        __extends(SingleValidationFormMessage, _super);
        function SingleValidationFormMessage(props) {
            return _super.call(this, props) || this;
        }
        SingleValidationFormMessage.prototype.render = function () {
            var keys = _.keys(this.props.modelState);
            var message = "";
            var hasError = _.some(keys, function (key) {
                var hasKey = key.toLowerCase() === this.props.name.toLowerCase();
                if (hasKey) {
                    message = this.props.modelState[key][0];
                }
                return hasKey;
            }.bind(this));
            return hasError && React.createElement("p", { className: this.props.className, dangerouslySetInnerHTML: { __html: message } });
        };
        return SingleValidationFormMessage;
    }(React.Component));
    HtmlFormExtention.SingleValidationFormMessage = SingleValidationFormMessage;
})(HtmlFormExtention = exports.HtmlFormExtention || (exports.HtmlFormExtention = {}));
//# sourceMappingURL=Extention.js.map