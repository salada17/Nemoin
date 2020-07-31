import styled from "styled-components";
import * as image from "./HomeImages";
import { theme } from "./DefineColor";

export const Container = styled.article`
    section {
        max-width: 1100px;
        margin: 140px auto 0;
        text-align: center;
    }
    @media all and (max-width:1200px){
        section{
            margin-top: 100px;
            padding:0 44px;
        }
    }
    @media all and (max-width:800px){
        section{
            margin-top:70px;
        }
    }
`;

/* layout */
export const Wrap = styled.article`
    overflow:hidden;
    position:relative;
    min-width:320px;
    padding-top: 78px;
    word-break:keep-all;

    .information,.btn_list{
        display:none;
    }
    &.mobile{
         .btn_list{
            display:block;
            position:absolute;
            top:50%;
            right:18px;
            margin-top: -17px;
            width: 32px;
            height: 33px;
            background: url(${image.BtnList}) no-repeat 0 0 / contain;
        }
    }
    &.on{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        .btn_list{
            display:none;
        }
        .dimmed{
            position:fixed;
            top:0;
            left:0;
            right:0;
            bottom:0;
            background-color:${theme.color_black_000000};
            opacity:0.6;
        }
        .side_menu{
            display:block;
            position:fixed;
            top:0;
            left:52px;
            right:0;
            bottom:0;
            padding:14px 20px;
            background-color:${theme.color_white_ffffff};
            a{
                margin-left:0;
            }
        }
        .right_menu{
            display:block;
            position:static;
            text-align:center;
            span{
                display:block;
                padding-top: 65px;
                + .information{
                    display:block;
                    padding:3px 0 43px;
                    font-weight: normal;
                    font-size: 13px;
                }
            }
            button{
                width:100%;
            }

            .btn_close{
                position:absolute;
                top:14px;
                right:18px;
                width: 28px;
                height: 28px;
                background: url(${image.BtnClose}) no-repeat 0 0 / contain;
            }
        }
    }
    &.hidden{
        overflow:hidden;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
    }
`;

export const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 78px;
    padding: 19px 0;
    background: ${theme.color_white_ffffff};
    z-index: 2;
    &.on{
        border-bottom:1px solid ${theme.color_black_eeeeee};
    }
    @media all and (max-width:800px){
        padding:14px 0;
        height:59px;
        a{
            margin-left:20px;
        }
        .right_menu{
            right:21px;
        }
    }
`;

export const HeaderInner = styled.div`
    position: relative;
    max-width: 1600px;
    margin: 0 auto;
`;

export const RightMenu = styled.div`
    position: absolute;
    top: 0;
    right: 26px;
    font-weight: bold;
    font-size: 16px;
    color: ${theme.color_red_fe2c54};

    @media all and (max-width: 800px) {
        display:none;
    }
`;
export const PhoneNumber = styled.span`
    position: relative;
    display: inline-block;
    margin: 8px 20px 0px;
    line-height: 28px;
    font-weight: bold;
    font-size: 16px;
    color: ${theme.color_red_fe2c54};
    ::before {
        content: '';
        display: inline-block;
        width: 28px;
        height: 28px;
        vertical-align: top;
        background: url(${image.ImgPhone}) no-repeat 0 0 / contain;
    }
`;

export const H1Title = styled.svg`
    font-size: 60px;
    stop:nth-child(1) {
        stop-color:${theme.color_black_212529};
    }

    stop:nth-child(2) {
        stop-color: ${theme.color_red_fe2c54};
    }

    @media all and (max-width: 1200px) {
        font-size:50px;
    }
    @media all and (max-width: 800px) {
        display:none;
    }
`;

export const H1TitleMobile = styled.svg`
    width:300px;
    height:267px;
    font-size: 50px;
    stop:nth-child(1) {
        stop-color:${theme.color_black_212529};
    }

    stop:nth-child(2) {
        stop-color: ${theme.color_red_fe2c54};
    }
    @media all and (min-width: 800px) {
        display:none;
    }
    @media all and (max-width: 500px) {
        width:auto;
        height:auto;
        font-size:40px;
    }
`;

export const Footer = styled.footer`
    clear:both;
    max-width: 1600px;
    margin: 0 auto;
    height: 219px;
    padding-top: 60px;

     .office_infors {
        float:right;
        margin-right: 23.15%;
        vertical-align: top;
        font-size: 13px;
        .customer{
            white-space: pre-wrap;
        }
        .text{
            display:inline-block;
        }
    }
    .address{
        margin-top:7px;
    }
    .copyright {
        margin-top:20px;
        color: ${theme.color_black_808991};
    }
    @media all and (max-width:1200px){
        .office_infors {
            margin-right:26px;
        }
        
    }
    @media all and (max-width:800px){
        padding-top:40px;
        height:auto;
        a{
            float:none;
        }
        .office_infors {
            display:block;
            float:none;
            margin: 30px 26px;
            .customer{
                white-space:normal;
            }
        }
    }
    
    @media all and (max-width:500px){
        .customer{
            margin-top:-5px;
        }
        .text{
            display:block !important;
            margin-top:5px;
        }
        .copyright{
            margin:34px 0 56px;
        }
    }
`;
//* layout */

/* ui */
export const H2Title = styled.h2`
    font-size: 40px;
    &.text_mobile{
        display:none;
    }
    @media all and (max-width:1200px){
        line-height: 1.31;
        font-size:32px;
    }
    @media all and (max-width:800px){
        margin: 7px 0 0 0;
        &.text_mobile{
            display:block;
        }
        &.text_pc{
            display:none;
        }
    }
`;

export const H2Dsc = styled.p`
    margin-top: 23px;
    font-size: 18px;
`;

export const Point = styled.span`
    position: relative;
    display: inline-block;
    font-weight: bold;

    &:after {
        content: '';
        position: absolute;
        left: -4px;
        right: -4px;
        bottom: 5px;
        height: 14px;
        background-color:${theme.color_white_ffe3e9};
        z-index: -1;
    }
    
    @media all and (max-width:1200px){
        &:after{
            bottom:0;
        }
    }
`;

export const DesignFigure = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    bottom: 0;
    width:100%;

    div {
        position: absolute;
        transform: skew(-32deg)
    }
    div:nth-child(2){
        margin-left:0 !important;
    }
    .pink {
        background: ${theme.color_white_ffeef1};
    }

    .blue {
        background: ${theme.color_blue_aad3ff};
    }

    .red {
        background: ${theme.color_red_f52a51};
    }

    .dash {
        width: 6px;
        height: 100px;
        background: ${theme.color_black_212529};

        &:before {
            content: '';
            position: absolute;
            top: 0;
            left: 12px;
            width: 6px;
            height: 100px;
            background: ${theme.color_black_212529};
        }

        &:after {
            content: '';
            position: absolute;
            top: 0;
            left: 24px;
            width: 6px;
            height: 100px;
            background: ${theme.color_black_212529};
        }
    }

    .black {
        background: ${theme.color_black_1f2327};
    }
`;

export const LogoArea = styled.a`
    float: left;
    margin-left: 26px;
    vertical-align: top;
    font-weight: bold;
    font-size: 10px;
    color: ${theme.color_red_fe2c54};
`;

export const Logo = styled.span`
    overflow: hidden;
    display: inline-block;
    width: 110px;
    height: 32px;
    vertical-align: top;
    background: url(${image.ImgLogo}) no-repeat 0 0 / contain;
    text-indent: -999px;
`;

export const LogoText = styled.span`
    display: inline-block;
    margin-top: 2px;
    vertical-align: top;
`;

export const BtnRed = styled.button`
    display: inline-block;
    padding: 0 24px;
    height: 44px;
    border-radius: 5px;
    background-color:${theme.color_red_fe2c54};
    text-align: center;
    line-height: 38px;
    font-weight: bold;
    font-size: 15px;
    color: ${theme.color_white_ffffff};

    &:hover {
        background-color: ${theme.color_red_d01639};
    }
    
    &:disabled {
        background-color: ${theme.color_black_e0e0e0};
    }
`;

export const TopContent = styled.section`
    position: relative;
    max-width: none !important;
    margin-top: 108px;
    margin-bottom: 154px;

    .text_box {    
        position: relative;
        max-width: 1100px;
        margin: 0 auto;
        text-align: left;
        height: 375px;
        z-index: 1;

        .h1_dsc {
            margin-top: 27px;
            max-width:100%;
            font-size: 18px;
        }
    }
    .video_area{
        overflow: hidden;
        position:relative;
        video{
            position:absolute;
            top:50%;
            left:50%;
            width: 1920px;
            height: 1080px;
            transform: translate(-50%, -50%);
        }
    }
    .degignFigure{
        top:-20px;
        width: 343px;
        margin-left: 20.4%;
        mix-blend-mode: color-burn;

        .pink {
            top: 0;
            left: 142px;
            width: 41px;
            height: 52px;
        }

        .blue {
            top: 255px;
            left: 20px;
            width: 105px;
            height: 102px;
        }

        .red {
            top: 93px;
            left: 159px;
            width: 78px;
            height: 238px;
        }

        .dash {
            top: 167px;
            left: -2px;
            transform: skew(-36deg);
        }

        .black {
            top: 330px;
            left: 121px;
            width: 41px;
            height: 136px;
        }
        .blue,.red{    
            mix-blend-mode: multiply;
        }
    }
    @media all and (max-width:1200px){
        .degignFigure{
            right: 0;
            left: auto;
            margin-left:0;
        }
        .video_area{
            margin:0 -44px;
        }
    }

    @media all and (max-width:800px){
        overflow:hidden;
        .text_box{
            margin-bottom: 102px;
        }
        .degignFigure{
            top:25px;
            right:-50px;
            .dash{
                height:70px;
                &:before,&:after{
                    height:70px;
                }
            }
        }
    }

    @media all and (max-width:500px){
        .h1_dsc{
            margin-right:65%%;
        }
        .degignFigure{
            top:55px;
            right:-130px;
            transform:scale(0.7);
        }
    }
`;

export const NemoinGrowth = styled.section`
    h2{
        text-align:center;
    }
        .list_price {
            margin-top: 60px;
            display: flex;
            justify-content: space-between;

            li {
                position: relative;
                padding-top: 170px;
                vertical-align: top;

                &:before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 50%;
                    margin-left: -80px;
                    width: 161px;
                    height: 161px;
                }

                &:nth-child(1):before {
                    background: url(${image.Kit1}) no-repeat 0 0 / contain;
                }

                &:nth-child(2):before {
                    width: 160px;
                    background: url(${image.Kit2}) no-repeat 0 0 / contain;
                }

                &:nth-child(3):before {
                    background: url(${image.Kit3}) no-repeat 0 0 / contain;
                }

                .title {
                    font-size: 20px;
                }

                .dsc {
                    margin-top: 17px;
                    font-size: 16px;
                    color: ${theme.color_black_808991};
                }
            }
        }
    @media all and (max-width:800px){
        .list_price{
            display:block;
            margin-top:20px;
        }
    }
`;

export const Pic1Top = styled(DesignFigure)`
    left: 0;
    margin-left:0 !important;
    .blue {
        top: -44px;
        left:-20px;
        width:40px;
        height:90px;
        z-index:-1;
    }
    .red {
        bottom:-50px;
        right:-30px;
        width:40px;
        height:142px;
        z-index:-1;
    }
    .dash {
        bottom: 18px;
        right: -12px;
    }
    @media (max-width: 800px){
        .blue{
            width: 30px;
            height: 56px;
            top: -25px;
            left: -15px;
        }
    
        .red {
            width: 25px;
            height: 63px;
            bottom: -20px;
            right: -15px;
        }
        .dash {
            width:3px;
            height: 52px;
            bottom: 5px;
            right: -1px;
            &:before, &:after{
                width:3px;
                height: 52px;
            }
            &:before{
                left:6px;
            }
            &:after{
                left:12px;
            }
        }
    }
`;
export const Pic2Top = styled(DesignFigure)`
    left: 0;    
    margin-left:0 !important;
    .blue {
        bottom: 130px;
        right:-25px;
        width:35px;
        height:44px;
        transform: skew(-35deg);
        mix-blend-mode: multiply;
    }
    .red {
        bottom:51px;
        right:-20px;
        width:45px;
        height:95px;    
        transform: skew(-35deg);
    }
    .dash {
        top:20px;
        left:-18px;
        transform: skew(-30deg);
    }
    @media (max-width: 800px){
        .blue{
            width: 20px;
            height: 33px;
            bottom: 65px;
            right: -15px;
        }
    
        .red {
            width: 25px;
            height: 63px;
            bottom: 25px;
            right: -15px;
        }
        .dash {
            width:3px;
            height: 52px;
            bottom: 5px;
            right: -1px;
            &:before, &:after{
                width:3px;
                height: 52px;
            }
            &:before{
                left:6px;
            }
            &:after{
                left:12px;
            }
        }
    }
`;

export const Pic3Top = styled(DesignFigure)`
    left: 0;
    margin-left:0 !important;
    .blue {
        bottom -30px;
        right:-20px;
        width:40px;
        height:89px;
        z-index:-1;
    }
    .red {
        top: -35px;
        left:-20px;
        width:52px;
        height:90px;
    }
    .dash {
        top: 0;
        left:-20px;
    }
    @media (max-width: 800px){
        .blue{
            width: 30px;
            height: 56px;
            bottom: -21px;
            right: -15px;
        }
    
        .red {
            width: 25px;
            height:43px;
            top: -20px;
            left: -15px;
        }
        .dash {
            width:3px;
            height: 52px;
            top: -3px;
            left: -10px;
            &:before, &:after{
                width:3px;
                height: 52px;
            }
            &:before{
                left:6px;
            }
            &:after{
                left:12px;
            }
        }
    }
`;

export const Section = styled.section`
    position:relative;
    display: flex;
    align-items:center;
    justify-content: space-between;
    .img_box {
        position:relative;
        max-width: 45%;

        img {
            max-width: 100%;
            max-height: 590px;
        }
    }

    .text_box {
        position:relative;
        max-width: 45%;
        text-align:left;
        .list_sub {
            li {
                position: relative;
                margin-top: 17px;
                padding-left: 30px;
                font-size: 16px;

                &:before {
                    content: '';
                    position: absolute;
                    top: 2px;
                    left: 0;
                    width: 20px;
                    height: 21px;
                    background: url(${image.IcoCheck}) no-repeat 0 0 / contain;
                }
            }
        }
    }
    div:nth-child(2) {
        margin-left: 140px;
    }
    &.change{
        flex-flow: row-reverse wrap;
        .text_box{
            margin-left: 0;
        }
    }
    @media all and (max-width:1200px){
        padding:0 44px;
        div:nth-child(2) {
            margin-left: 7%;
        }
    }
    @media all and (max-width:800px){
        display:block;
        .img_box{
            margin: 0 auto;
            max-width:272px;
        }
        .text_box{
            margin: 0 auto;
            padding-top: 23px;
            max-width: 100%;
            &.center{
                text-align:center;
            }
        }
        div:nth-child(2) {
            margin-left: 0;
        }
        &.change{
            flex-flow: row wrap;
        }
    }

    @media all and (max-width:500px){
        .text_box{
            &.center{
                text-align:left;
            }
            br{
                display:none;
            }
        }
    }
`;

export const NemoinService = styled.section`
    .list_service {
        margin-top: 2px;
        display: flex;
        flex-flow: wrap;
        justify-content:space-around;

        li {
            position: relative;
            flex-basis: 33.3%;
            max-width:350px;
            margin-top: 52px;
            padding-top: 67px;

            .title {
                font-size: 20px;
            }

            .dsc {
                margin-top: 17px;
                font-size: 16px;
                color: ${theme.color_black_808991};
            }

            &:before {
                content: '';
                position: absolute;
                top: 0;
                left: 50%;
                margin-left: -28px;
                width: 57px;
                height: 56px;
            }

            &.office:before {
                background: url(${image.IcoService1}) no-repeat 0 0 / contain;
            }

            &.retail:before {
                background: url(${image.IcoService2}) no-repeat 0 0 / contain;
            }

            &.purchase:before {
                background: url(${image.IcoService3}) no-repeat 0 0 / contain;
            }

            &.parcel_out{
                .dsc{
                    max-width:300px;
                }
                &:before {
                    background: url(${image.IcoService4}) no-repeat 0 0 / contain;
                }
            }
            &.assets{
                .dsc{
                    max-width:300px;
                }
                &:before {
                    background: url(${image.IcoService5}) no-repeat 0 0 / contain;
                }
            }
            &.logistics:before {
                background: url(${image.IcoService6}) no-repeat 0 0 / contain;
            }
        }
    }

    @media all and (max-width:1200px){
        .list_service {
            li{
                height:215px;
            }
        }
    }
    @media all and (max-width:800px){
        .list_service {
            li{
                margin-top:50px;
                flex-basis: 100%;
                height:auto;
                br {
                    display:none;
                }
            }
        }
    }
`;

export const NemoinCustomer = styled.section`
     max-width:1200px !important;
    .list_customer {
        margin: 14px auto 0;
        text-align:left;

        li {
            display:inline-block;
            width: 16.66%;
            height: 84px; 
            margin-top: 28px;
            text-align:center;
            vertical-align: top;
            img{
                display:inline-block;
                max-width: 140px;
                min-width: 140px;
            }
        }
    }
    @media all and (max-width:800px){
        .list_customer {
            margin:17px auto 0;
            li {
                width: 50%;
                height: 61px;
                margin-top: 10px;  
                img{
                    max-width: 112px;
                    min-width: 112px;                    
                }
            }
        }
    }
`;

export const SectionCalligraphy = styled(Section)`
    .img_box {
        img {
            max-height: 380px;
        }
    }
`;

export const NemoinIntroduce = styled.section`
    max-width: none !important;
    height: 425px;
    background-color: ${theme.color_white_f6f6f6};

    .swiper-container {
        height: 100%;

       .slide_inner {
            display:flex;
            max-width: 1100px;
            height: 425px;
            margin: 0 auto;
            justify-content:center;
            align-items:center;
            background: url(${image.Bottom}) no-repeat;
            background-position:calc(100% - 47px)  0;
            background-size:contain;
            > div{
                flex-basis:50%;
            }
        }

        .swiper-pagination {
            .swiper-pagination-bullet {
                width: 42px;
                height: 3px;
                border-radius: 0;
                background-color: rgba(255, 255, 255, 0.4);
                opacity: 1;

                &.swiper-pagination-bullet-active {
                    background-color: ${theme.color_red_ec284e};
                }
            }
        }
    }

    .text_box {
        margin-left: 124px;
        text-align: left;

        h2 {
            max-width: 287px;
            line-height: 1.38;
            text-indent: -22px;
        }
        .name{
            display:block;
            margin-top: 28px;
        }
        .dsc{
            margin-top:2px;
            font-size:16px;
        }
    }

    .img_box {
        margin-top: 22px;
        margin-right: 154px;

        .img {    
            display: inline-block;
            width: 332px;
            height: 402px;
            vertical-align: bottom;
        }
    }

    .swiper-slide {
        cursor: pointer;
        &: nth-child(1) {
            .img {
                background: url(${image.Agent1}) no-repeat 0 0 / contain;
            }
        }

        &: nth-child(2) {
            .img {
                background: url(${image.Agent2}) no-repeat 0 0 / contain;
            }
        }

        &: nth-child(3) {
            .img {
                background: url(${image.Agent3}) no-repeat 0 0 / contain;
            }
        }

        &: nth-child(4) {
            .img {
                background: url(${image.Agent4}) no-repeat 0 0 / contain;
            }
        }
    }
    @media all and (max-width:1200px){
        .swiper-container{
            margin: 0 -44px;
        }
    }
    @media all and (max-width:800px){
        height: 620px;
        .swiper-container .slide_inner{
            display: block;
            height: 100%;
            background-size: auto 315px;
            background-position: 50% 100%;
        }
        .text_box{
            display: flex;
            flex-wrap: wrap;
            flex-flow: column;
            align-items: center;
            justify-content: center;
            margin: 0 auto;
            padding: 0 44px;
            height: 50%;
            h2{
                max-width: none;
                text-indent:-17px;
            }
            .name{
                margin-top:21px;
                + p {
                    margin-top:3px;
                }
            }

        }
        .img_box{
            margin: 0 auto;
            height: 50%;
            .img{
                height:309px;
            }
        }
    }
    @media all and (max-width:500px){
        .text_box{
            align-items: baseline;
            h2{
               max-width: 287px;
            }
        }
    }
`;

export const FooterBanner = styled.section`
    max-width: none !important;
    display: flex;
    align-items: center;
    flex-flow: column;
    justify-content: center;
    height: 424px;
    background: url(${image.BgFooterBanner}) no-repeat 50% 50% / cover;

    .text {
        padding-bottom: 30px;
        font-weight: bold;
        font-size: 40px;
        color: ${theme.color_white_ffffff};
    }
    button{
        height:52px;
        line-height:48px;
    }
    @media all and (max-width:800px){
        height: 360px;
        .text{
            line-height: 1.31;
            font-size: 32px;
        }
    }

    @media all and (max-width:500px){
        br{
            display:none;
        }
    }
`;

