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
var BaseStyle_1 = require("../Styles/BaseStyle");
var home = require("../Styles/Home");
var images = require("../Styles/HomeImages");
var OfficeForSalePopup_1 = require("./OfficeForSalePopup");
var swiper_1 = require("swiper");
require("swiper/css/swiper.min.css");
var Home = /** @class */ (function (_super) {
    __extends(Home, _super);
    function Home(props) {
        var _this = _super.call(this, props) || this;
        _this.activeClassName = "on";
        _this.wrapRef = React.createRef();
        _this.headerRef = React.createRef();
        _this.videoRef = React.createRef();
        _this.state = {
            showOfficeForSalePopup: false
        };
        return _this;
    }
    Home.prototype.getSlideContent = function () {
        var options = [
            {
                subject: "“고객사의 니즈에 적합한 매물을 중개합니다.”",
                name: "정윤화",
                dsc: "네모인 부동산중개법인 대표"
            },
            {
                subject: "“고객사의 니즈에 적합한 매물을 중개합니다.”",
                name: "정윤화",
                dsc: "네모인 부동산중개법인 대표"
            },
            {
                subject: "“고객사의 니즈에 적합한 매물을 중개합니다.”",
                name: "정윤화",
                dsc: "네모인 부동산중개법인 대표"
            },
            {
                subject: "“고객사의 니즈에 적합한 매물을 중개합니다.”",
                name: "정윤화",
                dsc: "네모인 부동산중개법인 대표"
            }
        ];
        return options;
    };
    Home.prototype.componentDidMount = function () {
        var swiper = new swiper_1.default('.swiper-container', {
            pagination: {
                el: '.swiper-pagination',
            },
        });
        document.addEventListener("scroll", this.handleScroll.bind(this));
        window.addEventListener("load", this.mainVisualResize.bind(this));
        window.addEventListener("resize", this.mainVisualResize.bind(this));
    };
    Home.prototype.componentWillUnmount = function () {
        window.addEventListener("resize", this.mainVisualResize.bind(this));
    };
    Home.prototype.handleScroll = function () {
        var currentTop = window.pageYOffset;
        var viewWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if (currentTop >= (this.headerRef.current.clientHeight)) {
            if (!this.headerRef.current.classList.contains(this.activeClassName)) {
                this.headerRef.current.classList.add(this.activeClassName);
            }
        }
        else if (this.headerRef.current.classList.contains(this.activeClassName)) {
            this.headerRef.current.classList.remove(this.activeClassName);
        }
        if (viewWidth < 1100) {
            this.headerRef.current.classList.remove(this.activeClassName);
        }
    };
    Home.prototype.handleClick = function () {
        this.wrapRef.current.classList.add(this.activeClassName);
    };
    Home.prototype.handleClose = function () {
        this.wrapRef.current.classList.remove(this.activeClassName);
    };
    Home.prototype.handlePopupOpen = function () {
        this.setState({ showOfficeForSalePopup: true });
        this.wrapRef.current.classList.add("hidden");
    };
    Home.prototype.handlePopupClose = function () {
        this.setState({ showOfficeForSalePopup: false });
        this.wrapRef.current.classList.remove("hidden");
    };
    Home.prototype.mainVisualResize = function () {
        var video = this.videoRef.current;
        var viewWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        var viewHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        if (viewWidth > 800) {
            video.style.width = viewWidth + "px", video.style.height = Math.floor(viewWidth / 16 * 9) + "px";
            video.parentElement.style.height = Math.floor(viewWidth / 16 * 9) + "px";
        }
        if (viewWidth < 800) {
            this.headerRef.current.classList.remove(this.activeClassName);
            this.wrapRef.current.classList.add("mobile");
            video.setAttribute("playsinline", "true");
        }
        else {
            this.wrapRef.current.classList.remove(this.activeClassName);
            this.wrapRef.current.classList.remove("mobile");
        }
        if (viewWidth < 800) {
            video.style.height = Math.floor(viewHeight / 12 * 9) + "px";
            video.parentElement.style.height = Math.floor(viewHeight / 12 * 9) + "px";
        }
    };
    Home.prototype.render = function () {
        var viewWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        var options = this.getSlideContent();
        return (React.createElement(home.Wrap, { onScroll: this.handleScroll.bind(this), ref: this.wrapRef, className: viewWidth < 1100 ? "mobile" : "" },
            React.createElement(BaseStyle_1.GlobalStyle, null),
            React.createElement(home.Header, { ref: this.headerRef },
                React.createElement("button", { className: "btn_list", onClick: this.handleClick.bind(this) }),
                React.createElement("div", { className: "dimmed" }),
                React.createElement(home.HeaderInner, { className: "side_menu" },
                    React.createElement(home.LogoArea, null,
                        React.createElement(home.Logo, null, "\uB124\uBAA8\uC778"),
                        React.createElement(home.LogoText, null, "\uBD80\uB3D9\uC0B0\uC911\uAC1C\uBC95\uC778")),
                    React.createElement(home.RightMenu, { className: "right_menu" },
                        React.createElement(home.PhoneNumber, null, "02-501-7662*"),
                        React.createElement("p", { className: "information" }, "\uC6D4~\uAE08 9:30~18:00"),
                        React.createElement(home.BtnRed, { onClick: this.handlePopupOpen.bind(this) }, "\uBB38\uC758\uD558\uAE30"),
                        React.createElement("button", { className: "btn_close", onClick: this.handleClose.bind(this) },
                            React.createElement("span", { className: "blind" }, "\uB808\uC774\uC5B4 \uB2EB\uAE30"))))),
            React.createElement(home.Container, null,
                React.createElement(home.TopContent, null,
                    React.createElement("div", { className: "text_box" },
                        React.createElement("h1", null,
                            React.createElement(home.H1Title, { width: "720", height: "133" },
                                React.createElement("linearGradient", { id: "grad1", x1: "0%", y1: "0%", x2: "100%", y2: "0%" },
                                    React.createElement("stop", { offset: "0%" }),
                                    React.createElement("stop", { offset: "100%" })),
                                React.createElement("text", { x: "0", y: "40%", fill: "url(#grad1)" }, "\uC0C1\uC5C5\uC6A9 \uBD80\uB3D9\uC0B0 \uC194\uB8E8\uC158\uC758 \uC2DC\uC791,"),
                                React.createElement("text", { x: "0", y: "96%", fill: "url(#grad1)" }, "\uB124\uBAA8\uC778\uACFC \uD568\uAED8\uD558\uC138\uC694")),
                            React.createElement(home.H1TitleMobile, { width: "233", height: "200" },
                                React.createElement("linearGradient", { id: "grad2", x1: "0%", y1: "0%", x2: "100%", y2: "0%" },
                                    React.createElement("stop", { offset: "0%" }),
                                    React.createElement("stop", { offset: "100%" })),
                                React.createElement("text", { x: "0", y: "21%", fill: "url(#grad2)" }, "\uC0C1\uC5C5\uC6A9 \uBD80\uB3D9\uC0B0"),
                                React.createElement("text", { x: "0", y: "47%", fill: "url(#grad2)" }, "\uC194\uB8E8\uC158\uC758 \uC2DC\uC791,"),
                                React.createElement("text", { x: "0", y: "74%", fill: "url(#grad2)" }, "\uB124\uBAA8\uC778\uACFC \uD568\uAED8"),
                                React.createElement("text", { x: "0", y: "100%", fill: "url(#grad2)" }, "\uD558\uC138\uC694"))),
                        React.createElement("p", { className: "h1_dsc" },
                            "\uACE0\uAC1D\uC0AC\uC758 \uBE44\uC988\uB2C8\uC2A4 \uBAA8\uB378\uC5D0 \uC54C\uB9DE\uB294 \uB9E4\uBB3C\uC744 \uC911\uAC1C\uD574\uB4DC\uB9BD\uB2C8\uB2E4.",
                            React.createElement("br", null),
                            "\uBCF5\uC7A1\uD55C \uC0C1\uC5C5\uC6A9 \uBD80\uB3D9\uC0B0 \uAC70\uB798\uC5D0\uC11C \uBC97\uC5B4\uB098\uC138\uC694.")),
                    React.createElement("div", { className: "video_area" },
                        React.createElement("video", { width: "100%", height: "100%", autoPlay: true, loop: true, muted: true, ref: this.videoRef },
                            React.createElement("source", { src: images.video, type: "video/mp4" }))),
                    React.createElement(home.DesignFigure, { className: "degignFigure" },
                        React.createElement("div", { className: "pink" }),
                        React.createElement("div", { className: "red" }),
                        React.createElement("div", { className: "dash" }),
                        React.createElement("div", { className: "blue" }),
                        React.createElement("div", { className: "black" }))),
                React.createElement(home.Section, null,
                    React.createElement("div", { className: "img_box" },
                        React.createElement("img", { src: images.Pic1 }),
                        React.createElement(home.Pic1Top, null,
                            React.createElement("div", { className: "red" }),
                            React.createElement("div", { className: "blue" }),
                            React.createElement("div", { className: "dash" }))),
                    React.createElement("div", { className: "text_box center" },
                        React.createElement(home.H2Title, null,
                            "\uBCF5\uC7A1\uD55C \uC911\uAC1C \uACFC\uC815\uC5D0\uC11C ",
                            React.createElement("br", null),
                            React.createElement(home.Point, null, "\uC790\uC720\uB85C\uC6CC\uC9C0\uC138\uC694")),
                        React.createElement(home.H2Dsc, null,
                            "\uB124\uBAA8\uC778\uC740 \uACE0\uAC1D\uC758 \uB2C8\uC988\uB97C \uD655\uC778\uD55C \uD6C4 ",
                            React.createElement("br", null),
                            "\uACE0\uAC1D\uAED8\uC11C \uC758\uC0AC\uACB0\uC815\uD560 \uC218 \uC788\uB3C4\uB85D \uC6D0\uC2A4\uD1B1 \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4."))),
                React.createElement(home.Section, { className: "change" },
                    React.createElement("div", { className: "img_box" },
                        React.createElement("img", { src: images.Pic2 }),
                        React.createElement(home.Pic2Top, null,
                            React.createElement("div", { className: "red" }),
                            React.createElement("div", { className: "blue" }),
                            React.createElement("div", { className: "dash" }))),
                    React.createElement("div", { className: "text_box center" },
                        React.createElement(home.H2Title, { className: "text_pc" },
                            React.createElement(home.Point, null, "\uC0C1\uC5C5\uC6A9 \uBD80\uB3D9\uC0B0\uC5D0 \uD2B9\uD654"),
                            "\uB41C ",
                            React.createElement("br", null),
                            "\uC2DC\uC2A4\uD15C\uC744 \uACBD\uD5D8\uD558\uC138\uC694"),
                        React.createElement(home.H2Title, { className: "text_mobile" },
                            "\uC0C1\uC5C5\uC6A9 \uBD80\uB3D9\uC0B0\uC5D0 ",
                            React.createElement(home.Point, null, "\uD2B9\uD654\uB41C \uC2DC\uC2A4\uD15C"),
                            "\uC744 \uACBD\uD5D8\uD558\uC138\uC694"),
                        React.createElement(home.H2Dsc, null,
                            "\uB124\uBAA8\uC778\uC740 \uB9E4\uBB3C \uC120\uC815\uBD80\uD130, \uACC4\uC57D \uC644\uB8CC\uAE4C\uC9C0\uC758 \uBAA8\uB4E0 \uACFC\uC815\uC744 ",
                            React.createElement("br", null),
                            " \uB2E4\uC591\uD55C \uACBD\uD5D8\uC744 \uD1B5\uD574 \uC2DC\uC2A4\uD15C\uD654 \uC2DC\uCF30\uC2B5\uB2C8\uB2E4. ",
                            React.createElement("br", null),
                            "\uB124\uBAA8\uC778\uC758 \uAC01 \uC11C\uBE44\uC2A4\uC5D0 \uB530\uB978 \uCC28\uBCC4\uD654\uB41C \uC2DC\uC2A4\uD15C\uC744 \uACBD\uD5D8\uD558\uC138\uC694."))),
                React.createElement(home.Section, null,
                    React.createElement("div", { className: "img_box" },
                        React.createElement("img", { src: images.Pic3 }),
                        React.createElement(home.Pic3Top, null,
                            React.createElement("div", { className: "red" }),
                            React.createElement("div", { className: "blue" }),
                            React.createElement("div", { className: "dash" }))),
                    React.createElement("div", { className: "text_box center" },
                        React.createElement(home.H2Title, null,
                            React.createElement(home.Point, null, "\uD569\uB9AC\uC801\uC778 \uAC00\uACA9"),
                            "\uC73C\uB85C ",
                            React.createElement("br", null),
                            "\uC911\uAC1C \uBC1B\uC544\uBCF4\uC138\uC694"),
                        React.createElement(home.H2Dsc, null,
                            "\uB124\uBAA8\uC778\uC740 \uACE0\uAC1D\uB4E4\uC758 \uC218\uC775\uCC3D\uCD9C, \uC790\uC0B0\uAC00\uCE58 \uC99D\uC9C4\uC744 \uBAA9\uD45C\uB85C ",
                            React.createElement("br", null),
                            "\uD569\uB9AC\uC801\uC778 \uAC00\uACA9\uC73C\uB85C \uCD5C\uC0C1\uC758 \uC911\uAC1C \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uD574\uB4DC\uB9BD\uB2C8\uB2E4."))),
                React.createElement(home.NemoinGrowth, null,
                    React.createElement(home.H2Title, null,
                        "\uB124\uBAA8\uC778\uC758 ",
                        React.createElement(home.Point, null, "\uC131\uC7A5 \uAC00\uCE58")),
                    React.createElement("ul", { className: "list_price" },
                        React.createElement("li", { className: "work" },
                            React.createElement("strong", { className: "title" }, "\uD568\uAED8 \uC77C\uD569\uB2C8\uB2E4"),
                            React.createElement("p", { className: "dsc" },
                                "\uACE0\uAC1D \uAC00\uCE58 \uC2E4\uD604\uC758 \uBAA9\uD45C\uB97C \uD5A5\uD574",
                                React.createElement("br", null),
                                " \uB124\uBAA8\uC778\uC740 \uACE0\uAC1D\uACFC \uD568\uAED8 \uC77C\uD558\uACE0 \uD568\uAED8 \uB098\uC544\uAC11\uB2C8\uB2E4.")),
                        React.createElement("li", { className: "stature" },
                            React.createElement("strong", { className: "title" }, "\uD56D\uC0C1 \uC131\uC7A5\uD569\uB2C8\uB2E4"),
                            React.createElement("p", { className: "dsc" },
                                "\uACE0\uAC1D \uBE44\uC988\uB2C8\uC2A4 \uC131\uC7A5\uC744 \uC9C0\uD5A5\uD558\uC5EC \uC804\uBB38\uD654\uB41C \uC11C\uBE44\uC2A4",
                                React.createElement("br", null),
                                " \uC81C\uACF5\uC744 \uC704\uD574 \uB124\uBAA8\uC778\uB3C4 \uC9C0\uC18D\uC801\uC778 \uC131\uC7A5\uC744 \uCD94\uAD6C\uD569\uB2C8\uB2E4.")),
                        React.createElement("li", { className: "enjoy" },
                            React.createElement("strong", { className: "title" }, "\uC990\uAC70\uC6C0\uC740 \uB098\uB215\uB2C8\uB2E4"),
                            React.createElement("p", { className: "dsc" },
                                "\uB124\uBAA8\uC778\uC740 \uC990\uAC81\uAC8C \uC6C3\uC73C\uBA70 \uC77C\uD558\uACE0",
                                React.createElement("br", null),
                                " \uACE0\uAC1D\uB4E4\uAED8 \uAE30\uBD84 \uC88B\uC740 \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4.")))),
                React.createElement(home.SectionCalligraphy, { className: "change" },
                    React.createElement("div", { className: "img_box" },
                        React.createElement("img", { src: images.Img1 })),
                    React.createElement("div", { className: "text_box" },
                        React.createElement(home.H2Title, null,
                            "\uC0C1\uC5C5\uC6A9 \uBD80\uB3D9\uC0B0\uC5D0\uC11C\uC758 ",
                            React.createElement(home.Point, null, "\uC804\uBB38\uC131")),
                        React.createElement(home.H2Dsc, null, "\uB2E4\uC591\uD55C \uC0C1\uC5C5\uC6A9 \uBD80\uB3D9\uC0B0 \uC911\uAC1C \uACBD\uD5D8\uC744 \uAC00\uC9C4 \uC804\uBB38 \uC778\uB825\uC73C\uB85C \uC804\uB7B5\uC801\uC774\uACE0 \uCCB4\uACC4\uC801\uC73C\uB85C \uAC70\uB798\uB97C \uC9C4\uD589\uD569\uB2C8\uB2E4."),
                        React.createElement("ul", { className: "list_sub" },
                            React.createElement("li", null, "\uC0C1\uC5C5\uC6A9 \uBD80\uB3D9\uC0B0 \uACBD\uD5D8\uC774 \uD48D\uBD80\uD55C \uC778\uB825 \uAD6C\uC131"),
                            React.createElement("li", null, "\uC804 \uACFC\uC815\uC5D0 \uAC78\uCE5C \uC6D0\uC2A4\uD1B1 \uC11C\uBE44\uC2A4"),
                            React.createElement("li", null, "\uAC01 \uC601\uC5ED\uBCC4 \uD0C0\uAC9F \uB9C8\uCF00\uD305\uC744 \uD1B5\uD55C \uC804\uB7B5\uC801 \uC5C5\uBB34 \uC218\uD589")))),
                React.createElement(home.SectionCalligraphy, null,
                    React.createElement("div", { className: "img_box" },
                        React.createElement("img", { src: images.Img2 })),
                    React.createElement("div", { className: "text_box" },
                        React.createElement(home.H2Title, null,
                            "\uBD80\uB3D9\uC0B0\uC5D0 ",
                            React.createElement(home.Point, null, "\uD2B9\uD654\uB41C \uB124\uD2B8\uC6CC\uD06C")),
                        React.createElement(home.H2Dsc, null, "\uB124\uBAA8\uC778\uC740 \uBD80\uB3D9\uC0B0 \uC601\uC5ED\uC5D0 \uD2B9\uD654\uB41C \uB2E4\uC591\uD55C \uC5C5\uCCB4\uC640 \uB9CE\uC740 \uC778\uC801 \uB124\uD2B8\uC6CC\uD06C\uB85C \uC815\uD655\uD558\uACE0 \uC2E0\uC18D\uD55C \uAC70\uB798 \uACBD\uD5D8\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4."),
                        React.createElement("ul", { className: "list_sub" },
                            React.createElement("li", null, "\uBD80\uB3D9\uC0B0 \uAD00\uB828 \uC804\uBB38 \uC5C5\uCCB4 (\uAC10\uC815\uD3C9\uAC00\u00B7\uAC74\uCD95\u00B7\uAE08\uC735\u00B7\uD68C\uACC4 \uB4F1)\uB4E4\uACFC\uC758 \uC81C\uD734\uB97C \uD1B5\uD55C \uC885\uD569 \uC11C\uBE44\uC2A4 \uC81C\uACF5"),
                            React.createElement("li", null, "\uB3D9\uC885\uC5C5\uACC4 \uBD80\uB3D9\uC0B0 \uC5C5\uCCB4\uC640\uC758 co-work\uB97C \uD1B5\uD55C \uC2DC\uB108\uC9C0 \uAC15\uD654")))),
                React.createElement(home.SectionCalligraphy, { className: "change" },
                    React.createElement("div", { className: "img_box" },
                        React.createElement("img", { src: images.Img3 })),
                    React.createElement("div", { className: "text_box" },
                        React.createElement(home.H2Title, null,
                            "\uBD80\uB3D9\uC0B0 ",
                            React.createElement(home.Point, null, "\uC815\uBCF4 \uC2DC\uC2A4\uD15C"),
                            " \uD65C\uC6A9"),
                        React.createElement(home.H2Dsc, null, "\uB124\uBAA8\uC778\uC740 \uB2E4\uC591\uD55C DB\uC640 \uAC70\uB798\uC815\uBCF4\uB97C \uD1B5\uD574 \uC815\uB7C9\uC801\uC778 \uC815\uBCF4 \uC2DC\uC2A4\uD15C\uC744 \uD65C\uC6A9\uD55C \uCD5C\uC0C1\uC758 \uAC70\uB798\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4."),
                        React.createElement("ul", { className: "list_sub" },
                            React.createElement("li", null, "\uC0C1\uC5C5\uC6A9 \uBD80\uB3D9\uC0B0 \uC2DC\uC138, \uAC70\uB798 \uC815\uBCF4, \uC2E4\uB9E4\uBB3C \uC815\uBCF4 DB\uB97C \uD1B5\uD574 \uC815\uD655\uD55C \uCEE8\uC124\uD305 \uC11C\uBE44\uC2A4 \uC81C\uACF5"),
                            React.createElement("li", null, "\uB124\uBAA8\uC778 \uBB3C\uAC74 \uC815\uBCF4 \uC2DC\uC2A4\uD15C\uC744 \uD65C\uC6A9\uD558\uACE0 \uC2E0\uC18D\uD558\uACE0 \uCCB4\uACC4\uC801\uC778 \uBB3C\uAC74 \uC815\uBCF4 \uC81C\uACF5")))),
                React.createElement(home.NemoinService, null,
                    React.createElement(home.H2Title, null,
                        React.createElement(home.Point, null, "\uB124\uBAA8\uC778\uC758 \uC11C\uBE44\uC2A4")),
                    React.createElement(home.H2Dsc, null, "\uB124\uBAA8\uC778\uC740 \uBD80\uB3D9\uC0B0 \uC911\uAC1C \uBC0F \uCEE8\uC124\uD305, \uD22C\uC790 \uC790\uBB38, \uAD00\uB9AC\uAE4C\uC9C0 \uC885\uD569 \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4."),
                    React.createElement("ul", { className: "list_service" },
                        React.createElement("li", { className: "office" },
                            React.createElement("strong", { className: "title" }, "\uC624\uD53C\uC2A4 \uC784\uB300\uCC28"),
                            React.createElement("p", { className: "dsc" },
                                "\uC624\uD53C\uC2A4 \uC2DC\uC7A5\uC5D0\uC11C \uB2E4\uB144\uAC04 \uCD95\uC801\uD55C \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uC640 ",
                                React.createElement("br", null),
                                "\uB178\uD558\uC6B0\uB97C \uD1B5\uD574 \uD6A8\uC728\uC801\uC778 \uC624\uD53C\uC2A4 \uC784\uB300 \uB300\uD589(LR),",
                                React.createElement("br", null),
                                "\uC784\uCC28 \uB300\uD589(TR) \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4.")),
                        React.createElement("li", { className: "retail" },
                            React.createElement("strong", { className: "title" }, "\uB9AC\uD14C\uC77C \uC11C\uBE44\uC2A4"),
                            React.createElement("p", { className: "dsc" }, "\uC0C1\uC5C5\uC2DC\uC124 \uC784\uB300\uCC28, \uC790\uC0B0 \uAD00\uB9AC, \uD22C\uC790 \uC790\uBB38\uC5D0 \uC774\uB974\uAE30\uAE4C\uC9C0 \uB9AC\uD14C\uC77C \uC790\uC0B0\uC5D0 \uB300\uD55C Total Solution\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4.")),
                        React.createElement("li", { className: "purchase" },
                            React.createElement("strong", { className: "title" }, "\uB9E4\uC785/\uB9E4\uAC01"),
                            React.createElement("p", { className: "dsc" }, "\uBD80\uB3D9\uC0B0 \uC790\uC0B0 \uD604\uD669 \uBD84\uC11D\uC5D0\uC11C \uD0C0\uB2F9\uC131 \uAC80\uD1A0(Valuation),\uB9E4\uB9E4 \uACC4\uC57D \uCCB4\uACB0 \uC9C0\uC6D0 \uB4F1 \uACC4\uC57D \uC9C4\uD589 \uC911\uC5D0 \uACE0\uAC1D\uC774 \uCD5C\uC801\uC758 \uC758\uC0AC \uACB0\uC815\uC744 \uD560 \uC218 \uC788\uB3C4\uB85D  \uC790\uBB38\uD574\uB4DC\uB9BD\uB2C8\uB2E4.")),
                        React.createElement("li", { className: "parcel_out" },
                            React.createElement("strong", { className: "title" }, "\uBD84\uC591\uB300\uD589 \uC11C\uBE44\uC2A4"),
                            React.createElement("p", { className: "dsc" }, "\uC131\uACF5\uC801 \uBD84\uC591 \uC644\uB8CC\uB97C \uBAA9\uD45C\uB85C \uBD84\uC591 \uACC4\uD68D \uC218\uB9BD \uBC0F \uC801\uC815 \uBD84\uC591\uAC00 \uC0B0\uC815, \uBD84\uC591 \uB300\uD589\uC744 \uD1B5\uD55C \uACC4\uC57D \uCCB4\uACB0\uAE4C\uC9C0 \uC6D0\uC2A4\uD1B1 \uBD84\uC591 \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4.")),
                        React.createElement("li", { className: "assets" },
                            React.createElement("strong", { className: "title" }, "\uC790\uC0B0\uAD00\uB9AC"),
                            React.createElement("p", { className: "dsc" }, "\uC548\uC815\uC801\uC778 \uC6B4\uC601 \uAD00\uB9AC\uC640 \uCCB4\uACC4\uC801\uC778 \uC784\uB300\uCC28 \uAD00\uB9AC, \uC9C0\uC18D\uC801\uC778 \uAC74\uBB3C \uAD00\uB9AC\uB85C \uACE0\uAC1D \uC790\uC0B0 \uAC00\uCE58 \uADF9\uB300\uD654\uB97C \uCD94\uAD6C\uD569\uB2C8\uB2E4.")),
                        React.createElement("li", { className: "logistics" },
                            React.createElement("strong", { className: "title" }, "\uBB3C\uB958 \uBD80\uB3D9\uC0B0 \uC11C\uBE44\uC2A4"),
                            React.createElement("p", { className: "dsc" }, "\uCD5C\uC0C1\uC758 \uC785\uC790, \uCD5C\uC801\uC758 \uC870\uAC74\uC758 \uBB3C\uB958\uC13C\uD130 \uC774\uC804 \uC784\uB300\uCC28 \uCEE8\uC124\uD305 \uBC0F \uBB3C\uB958 \uBD80\uB3D9\uC0B0\uC758 \uCD5C\uC720\uD6A8 \uC774\uB3D9\uC744 \uD1B5\uD55C \uC790\uC0B0 \uAC00\uCE58 \uC0C1\uC2B9\uC744 \uBAA9\uD45C\uB85C \uC790\uBB38 \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.")))),
                React.createElement(home.NemoinIntroduce, null,
                    React.createElement("div", { className: "swiper-container" },
                        React.createElement("div", { className: "swiper-wrapper" }, _.map(options, function (c, i) {
                            return React.createElement("div", { key: i, className: "swiper-slide" },
                                React.createElement("div", { className: "slide_inner" },
                                    React.createElement("div", { className: "text_box" },
                                        React.createElement(home.H2Title, null, c.subject),
                                        React.createElement("strong", { className: "name" }, c.name),
                                        React.createElement("p", { className: "dsc" }, c.dsc)),
                                    React.createElement("div", { className: "img_box" },
                                        React.createElement("div", { className: "img" }))));
                        })),
                        React.createElement("div", { className: "swiper-pagination" }))),
                React.createElement(home.NemoinCustomer, null,
                    React.createElement(home.H2Title, null,
                        "\uB124\uBAA8\uC778\uC5D0 \uC758\uB8B0\uD574\uC8FC\uC2E0 ",
                        React.createElement(home.Point, null, "\uACE0\uAC1D\uC0AC")),
                    React.createElement("ul", { className: "list_customer" },
                        React.createElement("li", null,
                            React.createElement("img", { src: images.zigbang, width: "100%" })),
                        React.createElement("li", null,
                            React.createElement("img", { src: images.alpha, width: "100%" })),
                        React.createElement("li", null,
                            React.createElement("img", { src: images.oneThird, width: "100%" })),
                        React.createElement("li", null,
                            React.createElement("img", { src: images.hogangnono, width: "100%" })),
                        React.createElement("li", null,
                            React.createElement("img", { src: images.fursys, width: "100%" })),
                        React.createElement("li", null,
                            React.createElement("img", { src: images.actionpower, width: "100%" })),
                        React.createElement("li", null,
                            React.createElement("img", { src: images.zoocoffee, width: "100%" })),
                        React.createElement("li", null,
                            React.createElement("img", { src: images.oci, width: "100%" })),
                        React.createElement("li", null,
                            React.createElement("img", { src: images.ghost, width: "100%" })),
                        React.createElement("li", null,
                            React.createElement("img", { src: images.imt, width: "100%" })),
                        React.createElement("li", null,
                            React.createElement("img", { src: images.supertree, width: "100%" })),
                        React.createElement("li", null,
                            React.createElement("img", { src: images.petsbe, width: "100%" })),
                        React.createElement("li", null,
                            React.createElement("img", { src: images.threepop, width: "100%" })),
                        React.createElement("li", null,
                            React.createElement("img", { src: images.socialenterprise, width: "100%" })),
                        React.createElement("li", null,
                            React.createElement("img", { src: images.wooricapital, width: "100%" })))),
                React.createElement(home.FooterBanner, null,
                    React.createElement("p", { className: "text" },
                        "\uB124\uBAA8\uC778 \uBD80\uB3D9\uC0B0 \uC911\uAC1C\uBC95\uC778\uC5D0\uC11C ",
                        React.createElement("br", null),
                        "\uC27D\uACE0 \uAC04\uD3B8\uD55C \uBD80\uB3D9\uC0B0 \uAC70\uB798\uB97C \uACBD\uD5D8\uD558\uC138\uC694."),
                    React.createElement(home.BtnRed, { onClick: this.handlePopupOpen.bind(this) }, "\uBB38\uC758\uD558\uAE30"))),
            React.createElement(home.Footer, null,
                React.createElement(home.LogoArea, null,
                    React.createElement(home.Logo, null, "\uB124\uBAA8\uC778"),
                    React.createElement(home.LogoText, null, "\uBD80\uB3D9\uC0B0\uC911\uAC1C\uBC95\uC778")),
                React.createElement("span", { className: "office_infors" },
                    React.createElement("p", { className: "customer" },
                        React.createElement("span", { className: "text" }, "\uB300\uD45C : \uC815\uC724\uD654"),
                        "  ",
                        React.createElement("span", { className: "text" }, "TEL : 02-501-7662"),
                        "   ",
                        React.createElement("span", { className: "text" }, "FAX : 02-6944-9338"),
                        "   ",
                        React.createElement("span", { className: "text" }, "E-mail : yhjung@sugarhill.co.kr")),
                    React.createElement("address", { className: "address" }, "\uC11C\uC6B8\uD2B9\uBCC4\uC2DC \uAC15\uB0A8\uAD6C \uAC15\uB0A8\uB300\uB85C 408 YBM\uAC15\uB0A8\uC13C\uD130 11\uCE35"),
                    React.createElement("p", { className: "copyright" },
                        "Copyright \u00A9 \uB124\uBAA8\uC778\uBD80\uB3D9\uC0B0\uC911\uAC1C\uBC95\uC778. ",
                        React.createElement("span", { className: "text" }, "All rights reserved")))),
            this.state.showOfficeForSalePopup && React.createElement(OfficeForSalePopup_1.default, { onClose: this.handlePopupClose.bind(this) })));
    };
    return Home;
}(React.Component));
exports.default = root_1.hot(Home);
//# sourceMappingURL=Home.js.map