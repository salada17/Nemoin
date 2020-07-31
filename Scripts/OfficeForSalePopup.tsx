import * as React from "react";
import { hot } from "react-hot-loader/root";
import * as _ from "lodash";
import * as home from "../Styles/Home";
import * as office from "../Styles/OfficeForSalePopup";
import { View, HtmlForm, HtmlFormExtention } from "./Validation/Index";
import * as Validator from "validatorjs";
import axios from 'axios';
import * as qs from "querystring";

interface IOfficeForSalePopupProps extends View.IViewBaseProps {
    onClose(): void;
}

interface IOfficeForSalePopupState extends View.IViewBaseState {
    form: any;
    agreePrivacyPolicy: boolean;
    agreeThirdPartyPolicy: boolean;
    isInProgress: boolean;
    modelState: any;
}

class OfficeForSalePopup extends View.FormViewBase<IOfficeForSalePopupProps, IOfficeForSalePopupState> {
    constructor(props: IOfficeForSalePopupProps) {
        super(props);

        this.state = {
            form: {
                Name: null,
                PhoneNumber: null,
                Address: null,
                Size: null,
                Category: this.officeCategories[0]
            },
            isInProgress: false,
            modelState: {},
            agreePrivacyPolicy: false,
            agreeThirdPartyPolicy: false
        };
    }

    private officeCategories = ["사무실 임대", "사무실 구하기"];

    handleAgreePrivacyPolicy(): void {
        this.setState({ agreePrivacyPolicy: !this.state.agreePrivacyPolicy });
    }

    handleAgreeThirdPartyPolicy(): void {
        this.setState({ agreeThirdPartyPolicy: !this.state.agreeThirdPartyPolicy });
    }

    validate(): boolean {
        const rules = {
            Name: ["required", "regex:/([ㄱ-ㅎ가-힣A-Za-z])/gi"],
            PhoneNumber: ["required", "regex:/[0-9]/gi"],
            Address: "required",
            Size: ["required"],
        };
        const errorMessages = {
            "required.Name": "이름을 입력하세요.",
            "regex.Name": "문자를 입력하세요",
            "required.PhoneNumber": "휴대폰 번호를 입력하세요.",
            "regex.PhoneNumber": "숫자를 입력하세요",
            "required.Address": "위치를 입력하세요.",
            "required.Size": "면적을 입력하세요."
        }

        const data: boolean | any = _.clone(this.state.form);
        const validation = new Validator(data, rules, errorMessages);
        let isValid: any = validation.passes();

        const state: IOfficeForSalePopupState = this.state;
        state.modelState = validation.errors.all();
        this.setState(state);

        return isValid;
    }

    handleBlur(): void {
        this.validate();
    }

    handleClick(e: Event): void {
        e.preventDefault();

        const state: IOfficeForSalePopupState = this.state;
        const isValid = this.validate();
        const agreePolicy = this.state.agreePrivacyPolicy && this.state.agreeThirdPartyPolicy;
        if (agreePolicy && isValid && this.state.isInProgress === false) {
            state.isInProgress = true;
            this.setState(state, () => {
                axios.post("https://www.nemoapp.kr/api/article-for-sale/office", qs.stringify(this.state.form)).then(
                    (result: any): void => {
                        state.isInProgress = false;
                        this.setState(state, () => {
                            alert("문의 접수가 완료되었습니다. 담당자가 내용 확인 후 빠르게 회신드리겠습니다.");
                            this.props.onClose();
                        });
                    })
                    .catch(
                        (error: any): void => {
                            state.modelState = error.response.data;
                            state.isInProgress = false;
                            this.setState(state);
                        }
                    );
            });
        }
    }

    render(): JSX.Element {
        return <office.PopupWrap>
            <div className="popup_container">
                <office.Popup className="popup_article_report">
                    <h2 className="popup_h2_title">사무실 매물 문의</h2>
                    <p className="title_dsc">네모 담당 매니저가 확인하고 방문하여 꼼꼼하고 확실하게 체크해드립니다.</p>
                    <div className="popup_content">
                        <h3 className="popup_h3_title">이름</h3>
                        <div className="input_box certification_btn">
                            <div className="input_text">
                                <HtmlForm.TextBoxV2
                                    field={{ name: "Name", validations: [] }}
                                    placeholder="이름을 입력하세요."
                                    onBlur={this.handleBlur.bind(this)}
                                    onChange={super.handleChangedFormValueField.bind(this)}
                                />
                            </div>
                            <HtmlFormExtention.SingleValidationFormMessage className="error_text" name="Name" modelState={this.state.modelState} />
                        </div>
                        <h3 className="popup_h3_title">연락처</h3>
                        <div className="input_box certification_btn">
                            <div className="input_text">
                                <HtmlForm.TextBoxV2
                                    field={{ name: "PhoneNumber", validations: [] }}
                                    placeholder="연락처를 입력하세요."
                                    onBlur={this.handleBlur.bind(this)}
                                    onChange={super.handleChangedFormValueField.bind(this)}
                                />
                            </div>
                            <HtmlFormExtention.SingleValidationFormMessage className="error_text" name="PhoneNumber" modelState={this.state.modelState} />
                        </div>
                        <h3 className="popup_h3_title">문의</h3>
                        <ul className="choice_list_tab">
                            {_.map(this.officeCategories, (c, index) => {
                                return <li key={index} className={this.state.form.Category === c ? " on" : ""} onClick={super.handleChangedFormField.bind(this, "Category", c, null)}>
                                    <a href="#">{c}</a>
                                </li>;
                            })}
                        </ul>
                        <h3 className="popup_h3_title">위치</h3>
                        <div className="input_box certification_btn">
                            <div className="input_text">
                                <HtmlForm.TextBoxV2
                                    field={{ name: "Address", validations: [] }}
                                    placeholder="ex) 서울시 강남구 역삼동"
                                    onBlur={this.handleBlur.bind(this)}
                                    onChange={super.handleChangedFormValueField.bind(this)}
                                />
                            </div>
                            <HtmlFormExtention.SingleValidationFormMessage className="error_text" name="Address" modelState={this.state.modelState} />
                        </div>
                        <h3 className="popup_h3_title">면적</h3>
                        <div className="input_box certification_btn">
                            <div className="input_text">
                                <HtmlForm.TextBoxV2
                                    field={{ name: "Size", validations: [] }}
                                    placeholder="ex) 120평"
                                    onBlur={this.handleBlur.bind(this)}
                                    onChange={super.handleChangedFormValueField.bind(this)}
                                />
                            </div>
                            <HtmlFormExtention.SingleValidationFormMessage className="error_text" name="Size" modelState={this.state.modelState} />
                        </div>
                        <div className="agree_area">
                            <div className="agree_row">
                                <p className={`agree_text ${this.state.agreePrivacyPolicy ? "on" : ""}`} onClick={this.handleAgreePrivacyPolicy.bind(this, !this.state.agreePrivacyPolicy)}>개인정보 수집 및 이용 동의 (필수)</p>
                                <a href="https://cdn.nemoapp.kr/policy/articleForSalePrivacyPolicy.html?v=637265867537291488" className="link_terms" target="_blank">약관보기</a>
                            </div>
                            <div className="agree_row">
                                <p className={`agree_text ${this.state.agreeThirdPartyPolicy ? "on" : ""}`} onClick={this.handleAgreeThirdPartyPolicy.bind(this, !this.state.agreeThirdPartyPolicy)}>개인정보 제 3자 제공 동의 (필수)</p>
                                <a href="https://cdn.nemoapp.kr/policy/articleForSaleThirdPartyPolicy.html?v=637265867537291488" className="link_terms" target="_blank">약관보기</a>
                            </div>
                        </div>
                    </div>
                    <div className="btn_area">
                        <home.BtnRed disabled={!this.state.agreePrivacyPolicy || !this.state.agreeThirdPartyPolicy} onClick={this.handleClick.bind(this)}>문의하기</home.BtnRed>
                    </div>
                    <button type="button" className="btn_close" onClick={this.props.onClose}><span className="blind">팝업창 닫기</span></button>
                </office.Popup>
            </div>
        </office.PopupWrap>;
    }
}

export default hot(OfficeForSalePopup);