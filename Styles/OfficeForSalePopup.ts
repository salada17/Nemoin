import styled from "styled-components";
import * as image from "./HomeImages";
import { theme } from "./DefineColor";

export const PopupWrap = styled.article`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:${theme.color_black_rgba4};
    z-index: 1000;

    .popup_container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 100%;
        overflow-y: auto;
    }

    @media all and (max-height: 800px){
        .popup_container{
            display:block;
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            .popup_article_report{
                width:100%;
                
            }
        }
    }
`;

export const Popup = styled.section`
    position: relative;
    background-color: ${theme.color_white_ffffff};
    -moz-box-shadow: 0 0 8px 0 rgba(0,0,0,0.2);
    -webkit-box-shadow: 0 0 8px 0 rgba(0,0,0,0.2);
    box-shadow: 0 0 8px 0 rgba(0,0,0,0.2);

    .btn_close {
        position: absolute;
        top: 0;
        right: 0;
        width: 48px;
        height: 48px;
        background: ${image.BtnClose} no-repeat 50% 50%;
        background-size: 20px 20px;
        cursor: pointer;
    }

    &.popup_article_report {
        padding: 20px;
        width: 460px;
        border-radius: 10px;

        .popup_h2_title {
            font-weight: bold;
            font-size: 20px;
        }

        .title_dsc {
            margin-top: 3px;
            font-size: 13px;
            color: ${theme.color_black_808991};
        }

        .popup_h3_title {
            margin-top: 20px;
            font-weight: bold;
            font-size: 16px;
        }

        .popup_content {
            margin-top: 20px;
            border-top: 1px solid ${theme.color_black_f5f7f7};

            .choice_list_tab {
                margin-top: 10px;
                border-radius: 7px;
                border: solid 1px #e2e7ed;

                &:after {
                    content: '';
                    display: block;
                    clear: both;
                }

                li {
                    float: left;
                    width: 50%;
                    padding: 11px 0 12px;
                    text-align: center;

                    &.on {
                        position: relative;
                        margin: -1px 0;
                        border: 1px solid ${theme.color_red_fe2c54};
                        -moz-border-radius: 7px;
                        -webkit-border-radius: 7px;
                        border-radius: 7px;

                        a {
                            display: block;
                            color: ${theme.color_red_fe2c54};
                        }
                    }

                    a {
                        color: ${theme.color_black_808991};
                    }
                }

                &.li3 li {
                    width: 33.33%;
                }

                &.li4 li {
                    width: 25%;
                }

                &.li5 li {
                    width: 20%;
                }
            }

            .textarea_box {
                position: relative;
                margin-top: 13px;
                min-height: 170px;
                padding: 13px 15px 30px;
                border-radius: 7px;
                border: solid 1px ${theme.color_black_edf0f4};

                textarea {
                    width: 100%;
                }

                .limit_text {
                    position: absolute;
                    right: 10px;
                    bottom: 13px;
                    font-size: 12px;
                    color: ${theme.color_black_b8bfc4};
                }
            }

            .input_box {
                position: relative;
                margin-top: 10px;

                .input_text {
                    position: relative;
                    padding: 10px;
                    height: 44px;
                    border-radius: 7px;
                    border: solid 1px ${theme.color_black_e2e7ed};

                    input:disabled {
                        color: ${theme.color_black_rgba2};
                    }
                }

                .error_text {
                    margin-top: 3px;
                    font-size: 12px;
                    color: ${theme.color_orange_eb3024};
                }
                &.certification_btn {
                    margin-top: 15px;
                }
            }

            .agree_area {
                position: relative;
                margin: 15px 0 26px;
                padding-bottom: 23px;
                border-bottom: 1px solid ${theme.color_black_f5f7f7};

                .agree_row {
                    position: relative;
                    margin-bottom: 5px;

                    &:last-child {
                        margin-bottom: 0;
                    }
                }

                .agree_text {
                    padding-right: 50px;
                    cursor: pointer;

                    &:before {
                        content: '';
                        display: inline-block;
                        width: 16px;
                        height: 16px;
                        margin-right: 5px;
                        vertical-align: -2px;
                        background: url("${image.IcoCheckHidden}") no-repeat 0 0;
                        background-size: contain;
                    }

                    &.on {
                        &:before {
                            background: url("${image.IcoCheckActive}") no-repeat 0 0;
                            background-size: contain;
                        }
                    }
                }

                .link_terms {
                    position: absolute;
                    right: 0;
                    top: 1px;
                    font-size: 12px;
                    color: #9ea7ad;

                    &:after {
                        content: '';
                        display: block;
                        margin-top: -1px;
                        height: 1px;
                        background-color: ${theme.color_black_e8e8e8};
                    }
                }
            }
        }

        .btn_area {
            margin-top: 26px;
            text-align: right;

            button {
                display: inline-block;
                width: 120px;
                height: 40px;
                border-radius: 7px;
            }

            .btn_gray {
                background-color:${theme.color_black_f5f7f7};
            }

            .btn_red {
                margin-left: 8px;
                background-color: ${theme.color_red_fe2c54};
                color: ${theme.color_white_ffffff};

                &:disabled {
                    cursor: not-allowed;
                    background-color: ${theme.color_black_e0e0e0};
                }
            }
        }

        .btn_close {
            position: absolute;
            top: 0;
            right: 0;
            width: 50px;
            height: 50px;
            background: url("${image.BtnClose}") no-repeat 50% 50%;
            background-size: 20px 20px;
        }

        .content_text {
            margin: 20px 0;
        }

        .content_text + .btn_area {
            border-top: none;
        }
    }
`;