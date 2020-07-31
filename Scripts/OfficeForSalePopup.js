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
var root_1 = require("react-hot-loader/root");
var _ = require("lodash");
var home = require("../Styles/Home");
var office = require("../Styles/OfficeForSalePopup");
var Index_1 = require("./Validation/Index");
var Validator = require("validatorjs");
var axios_1 = require("axios");
var qs = require("querystring");
var OfficeForSalePopup = /** @class */ (function (_super) {
    __extends(OfficeForSalePopup, _super);
    function OfficeForSalePopup(props) {
        var _this = _super.call(this, props) || this;
        _this.officeCategories = ["사무실 임대", "사무실 구하기"];
        _this.state = {
            form: {
                Name: null,
                PhoneNumber: null,
                Address: null,
                Size: null,
                Category: _this.officeCategories[0]
            },
            isInProgress: false,
            modelState: {},
            agreePrivacyPolicy: false,
            agreeThirdPartyPolicy: false
        };
        return _this;
    }
    OfficeForSalePopup.prototype.handleAgreePrivacyPolicy = function () {
        this.setState({ agreePrivacyPolicy: !this.state.agreePrivacyPolicy });
    };
    OfficeForSalePopup.prototype.handleAgreeThirdPartyPolicy = function () {
        this.setState({ agreeThirdPartyPolicy: !this.state.agreeThirdPartyPolicy });
    };
    OfficeForSalePopup.prototype.validate = function () {
        var rules = {
            Name: ["required", "regex:/([ㄱ-ㅎ가-힣A-Za-z])/gi"],
            PhoneNumber: ["required", "regex:/[0-9]/gi"],
            Address: "required",
            Size: ["required"],
        };
        var errorMessages = {
            "required.Name": "이름을 입력하세요.",
            "regex.Name": "문자를 입력하세요",
            "required.PhoneNumber": "휴대폰 번호를 입력하세요.",
            "regex.PhoneNumber": "숫자를 입력하세요",
            "required.Address": "위치를 입력하세요.",
            "required.Size": "면적을 입력하세요."
        };
        var data = _.clone(this.state.form);
        var validation = new Validator(data, rules, errorMessages);
        var isValid = validation.passes();
        var state = this.state;
        state.modelState = validation.errors.all();
        this.setState(state);
        return isValid;
    };
    OfficeForSalePopup.prototype.handleBlur = function () {
        this.validate();
    };
    OfficeForSalePopup.prototype.handleClick = function (e) {
        var _this = this;
        e.preventDefault();
        var state = this.state;
        var isValid = this.validate();
        var agreePolicy = this.state.agreePrivacyPolicy && this.state.agreeThirdPartyPolicy;
        if (agreePolicy && isValid && this.state.isInProgress === false) {
            state.isInProgress = true;
            this.setState(state, function () {
                axios_1.default.post("https://www.nemoapp.kr/api/article-for-sale/office", qs.stringify(_this.state.form)).then(function (result) {
                    state.isInProgress = false;
                    _this.setState(state, function () {
                        alert("문의 접수가 완료되었습니다. 담당자가 내용 확인 후 빠르게 회신드리겠습니다.");
                        _this.props.onClose();
                    });
                })
                    .catch(function (error) {
                    state.modelState = error.response.data;
                    state.isInProgress = false;
                    _this.setState(state);
                });
            });
        }
    };
    OfficeForSalePopup.prototype.render = function () {
        var _this = this;
        return React.createElement(office.PopupWrap, null,
            React.createElement("div", { className: "popup_container" },
                React.createElement(office.Popup, { className: "popup_article_report" },
                    React.createElement("h2", { className: "popup_h2_title" }, "\uC0AC\uBB34\uC2E4 \uB9E4\uBB3C \uBB38\uC758"),
                    React.createElement("p", { className: "title_dsc" }, "\uB124\uBAA8 \uB2F4\uB2F9 \uB9E4\uB2C8\uC800\uAC00 \uD655\uC778\uD558\uACE0 \uBC29\uBB38\uD558\uC5EC \uAF3C\uAF3C\uD558\uACE0 \uD655\uC2E4\uD558\uAC8C \uCCB4\uD06C\uD574\uB4DC\uB9BD\uB2C8\uB2E4."),
                    React.createElement("div", { className: "popup_content" },
                        React.createElement("h3", { className: "popup_h3_title" }, "\uC774\uB984"),
                        React.createElement("div", { className: "input_box certification_btn" },
                            React.createElement("div", { className: "input_text" },
                                React.createElement(Index_1.HtmlForm.TextBoxV2, { field: { name: "Name", validations: [] }, placeholder: "\uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694.", onBlur: this.handleBlur.bind(this), onChange: _super.prototype.handleChangedFormValueField.bind(this) })),
                            React.createElement(Index_1.HtmlFormExtention.SingleValidationFormMessage, { className: "error_text", name: "Name", modelState: this.state.modelState })),
                        React.createElement("h3", { className: "popup_h3_title" }, "\uC5F0\uB77D\uCC98"),
                        React.createElement("div", { className: "input_box certification_btn" },
                            React.createElement("div", { className: "input_text" },
                                React.createElement(Index_1.HtmlForm.TextBoxV2, { field: { name: "PhoneNumber", validations: [] }, placeholder: "\uC5F0\uB77D\uCC98\uB97C \uC785\uB825\uD558\uC138\uC694.", onBlur: this.handleBlur.bind(this), onChange: _super.prototype.handleChangedFormValueField.bind(this) })),
                            React.createElement(Index_1.HtmlFormExtention.SingleValidationFormMessage, { className: "error_text", name: "PhoneNumber", modelState: this.state.modelState })),
                        React.createElement("h3", { className: "popup_h3_title" }, "\uBB38\uC758"),
                        React.createElement("ul", { className: "choice_list_tab" }, _.map(this.officeCategories, function (c, index) {
                            return React.createElement("li", { key: index, className: _this.state.form.Category === c ? " on" : "", onClick: _super.prototype.handleChangedFormField.bind(_this, "Category", c, null) },
                                React.createElement("a", { href: "#" }, c));
                        })),
                        React.createElement("h3", { className: "popup_h3_title" }, "\uC704\uCE58"),
                        React.createElement("div", { className: "input_box certification_btn" },
                            React.createElement("div", { className: "input_text" },
                                React.createElement(Index_1.HtmlForm.TextBoxV2, { field: { name: "Address", validations: [] }, placeholder: "ex) \uC11C\uC6B8\uC2DC \uAC15\uB0A8\uAD6C \uC5ED\uC0BC\uB3D9", onBlur: this.handleBlur.bind(this), onChange: _super.prototype.handleChangedFormValueField.bind(this) })),
                            React.createElement(Index_1.HtmlFormExtention.SingleValidationFormMessage, { className: "error_text", name: "Address", modelState: this.state.modelState })),
                        React.createElement("h3", { className: "popup_h3_title" }, "\uBA74\uC801"),
                        React.createElement("div", { className: "input_box certification_btn" },
                            React.createElement("div", { className: "input_text" },
                                React.createElement(Index_1.HtmlForm.TextBoxV2, { field: { name: "Size", validations: [] }, placeholder: "ex) 120\uD3C9", onBlur: this.handleBlur.bind(this), onChange: _super.prototype.handleChangedFormValueField.bind(this) })),
                            React.createElement(Index_1.HtmlFormExtention.SingleValidationFormMessage, { className: "error_text", name: "Size", modelState: this.state.modelState })),
                        React.createElement("div", { className: "agree_area" },
                            React.createElement("div", { className: "agree_row" },
                                React.createElement("p", { className: "agree_text " + (this.state.agreePrivacyPolicy ? "on" : ""), onClick: this.handleAgreePrivacyPolicy.bind(this, !this.state.agreePrivacyPolicy) }, "\uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1 \uBC0F \uC774\uC6A9 \uB3D9\uC758 (\uD544\uC218)"),
                                React.createElement("a", { href: "https://cdn.nemoapp.kr/policy/articleForSalePrivacyPolicy.html?v=637265867537291488", className: "link_terms", target: "_blank" }, "\uC57D\uAD00\uBCF4\uAE30")),
                            React.createElement("div", { className: "agree_row" },
                                React.createElement("p", { className: "agree_text " + (this.state.agreeThirdPartyPolicy ? "on" : ""), onClick: this.handleAgreeThirdPartyPolicy.bind(this, !this.state.agreeThirdPartyPolicy) }, "\uAC1C\uC778\uC815\uBCF4 \uC81C 3\uC790 \uC81C\uACF5 \uB3D9\uC758 (\uD544\uC218)"),
                                React.createElement("a", { href: "https://cdn.nemoapp.kr/policy/articleForSaleThirdPartyPolicy.html?v=637265867537291488", className: "link_terms", target: "_blank" }, "\uC57D\uAD00\uBCF4\uAE30")))),
                    React.createElement("div", { className: "btn_area" },
                        React.createElement(home.BtnRed, { disabled: !this.state.agreePrivacyPolicy || !this.state.agreeThirdPartyPolicy, onClick: this.handleClick.bind(this) }, "\uBB38\uC758\uD558\uAE30")),
                    React.createElement("button", { type: "button", className: "btn_close", onClick: this.props.onClose },
                        React.createElement("span", { className: "blind" }, "\uD31D\uC5C5\uCC3D \uB2EB\uAE30")))));
    };
    return OfficeForSalePopup;
}(Index_1.View.FormViewBase));
exports.default = root_1.hot(OfficeForSalePopup);
//# sourceMappingURL=OfficeForSalePopup.js.map