import * as React from "react";
import {hot} from "react-hot-loader/root";
import * as _ from "lodash";
import { GlobalStyle } from "../Styles/BaseStyle";
import * as home from "../Styles/Home";
import * as images from "../Styles/HomeImages";
import OfficeForSalePopup from "./OfficeForSalePopup";
import Swiper from "swiper";
import "swiper/css/swiper.min.css";

interface ISlideContent {
    subject: string;
    name: string;
    dsc: string;
}

interface IHomeProps {
}

interface IHomeState {
    showOfficeForSalePopup: boolean;
}

class Home extends React.Component<IHomeProps, IHomeState> {
    constructor(props: IHomeProps) {
        super(props);
        this.state = {
            showOfficeForSalePopup: false
        }
    }
    private activeClassName = "on";

    private wrapRef = React.createRef<HTMLDivElement>();
    private headerRef = React.createRef<HTMLDivElement>();
    private videoRef = React.createRef<HTMLVideoElement>();

    getSlideContent(): Array<ISlideContent> {
        const options: Array<ISlideContent> = [
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
    }

    componentDidMount(): void {
        const swiper = new Swiper('.swiper-container', {
            pagination: {
                el: '.swiper-pagination',
            },
        });
        document.addEventListener("scroll", this.handleScroll.bind(this));
        window.addEventListener("load", this.mainVisualResize.bind(this));
        window.addEventListener("resize", this.mainVisualResize.bind(this));
    }

    componentWillUnmount() {
        window.addEventListener("resize", this.mainVisualResize.bind(this));
    }

    handleScroll(): void {
        const currentTop = window.pageYOffset;
        const viewWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if (currentTop >= (this.headerRef.current.clientHeight)) {
            if (!this.headerRef.current.classList.contains(this.activeClassName)) {
                this.headerRef.current.classList.add(this.activeClassName);
            }
        } else if (this.headerRef.current.classList.contains(this.activeClassName)) {
            this.headerRef.current.classList.remove(this.activeClassName);
        }
        if (viewWidth < 1100) {
            this.headerRef.current.classList.remove(this.activeClassName);
        }
    }

    handleClick(): void {
        this.wrapRef.current.classList.add(this.activeClassName);
    }

    handleClose(): void {
        this.wrapRef.current.classList.remove(this.activeClassName);
    }

    handlePopupOpen(): void {
        this.setState({ showOfficeForSalePopup: true });
        this.wrapRef.current.classList.add("hidden");
    }

    handlePopupClose(): void {
        this.setState({ showOfficeForSalePopup: false });
        this.wrapRef.current.classList.remove("hidden");
    }

    mainVisualResize(): void {
        const video = this.videoRef.current;
        const viewWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        const viewHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        
        if (viewWidth > 800) {
            video.style.width = viewWidth + "px", video.style.height = Math.floor(viewWidth / 16 * 9) + "px";
            video.parentElement.style.height = Math.floor(viewWidth / 16 * 9) + "px";
        }
        if (viewWidth < 800) {
            this.headerRef.current.classList.remove(this.activeClassName);
            this.wrapRef.current.classList.add("mobile");
            video.setAttribute("playsinline", "true");
        } else {
            this.wrapRef.current.classList.remove(this.activeClassName);
            this.wrapRef.current.classList.remove("mobile");
        }
        if (viewWidth < 800) {
            video.style.height = Math.floor(viewHeight / 12 * 9) + "px";
            video.parentElement.style.height = Math.floor(viewHeight / 12 * 9) + "px";
        }
    }

    render(): JSX.Element {
        const viewWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        let options = this.getSlideContent();
        return (
            <home.Wrap onScroll={this.handleScroll.bind(this)} ref={this.wrapRef} className={viewWidth < 1100 ? "mobile" : "" }>
                <GlobalStyle />
                <home.Header ref={this.headerRef}>
                    <button className="btn_list" onClick={this.handleClick.bind(this)}></button>
                    <div className="dimmed"></div>
                    <home.HeaderInner className="side_menu">
                        <home.LogoArea>
                            <home.Logo>네모인</home.Logo>
                            <home.LogoText>부동산중개법인</home.LogoText>
                        </home.LogoArea>
                        <home.RightMenu className="right_menu">
                            <home.PhoneNumber>02-501-7662*</home.PhoneNumber>
                            <p className="information">월~금 9:30~18:00</p>
                            <home.BtnRed onClick={this.handlePopupOpen.bind(this)}>문의하기</home.BtnRed>
                            <button className="btn_close" onClick={this.handleClose.bind(this)}><span className="blind">레이어 닫기</span></button>
                        </home.RightMenu>
                    </home.HeaderInner>
                </home.Header>
                <home.Container>
                    <home.TopContent>
                        <div className="text_box">
                            <h1>
                                <home.H1Title width="720" height="133">
                                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" />
                                        <stop offset="100%" />
                                    </linearGradient>
                                    <text x="0" y="40%" fill="url(#grad1)">상업용 부동산 솔루션의 시작,</text>
                                    <text x="0" y="96%" fill="url(#grad1)">네모인과 함께하세요</text>
                                </home.H1Title>
                                <home.H1TitleMobile width="233" height="200">
                                    <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" />
                                        <stop offset="100%" />
                                    </linearGradient>
                                    <text x="0" y="21%" fill="url(#grad2)">상업용 부동산</text>
                                    <text x="0" y="47%" fill="url(#grad2)">솔루션의 시작,</text>
                                    <text x="0" y="74%" fill="url(#grad2)">네모인과 함께</text>
                                    <text x="0" y="100%" fill="url(#grad2)">하세요</text>
                                </home.H1TitleMobile>
                            </h1>
                            <p className="h1_dsc">고객사의 비즈니스 모델에 알맞는 매물을 중개해드립니다.<br />복잡한 상업용 부동산 거래에서 벗어나세요.</p>
                        </div>
                        <div className="video_area">
                            <video width="100%" height="100%" autoPlay loop muted ref={this.videoRef}>
                                <source src={images.video} type="video/mp4"></source>
                            </video>
                        </div>
                        <home.DesignFigure className="degignFigure">
                            <div className="pink"></div>
                            <div className="red"></div>
                            <div className="dash"></div>
                            <div className="blue"></div>
                            <div className="black"></div>
                        </home.DesignFigure>
                    </home.TopContent>
                    <home.Section>
                        <div className="img_box">
                            <img src={images.Pic1} />
                            <home.Pic1Top>
                                <div className="red"></div>
                                <div className="blue"></div>
                                <div className="dash"></div>
                            </home.Pic1Top>
                        </div>
                        <div className="text_box center">
                            <home.H2Title>복잡한 중개 과정에서 <br /><home.Point>자유로워지세요</home.Point></home.H2Title>
                            <home.H2Dsc>네모인은 고객의 니즈를 확인한 후 <br />고객께서 의사결정할 수 있도록 원스톱 서비스를 제공합니다.</home.H2Dsc>
                        </div>
                    </home.Section>
                    <home.Section className="change">
                        <div className="img_box">
                            <img src={images.Pic2} />
                            <home.Pic2Top>
                                <div className="red"></div>
                                <div className="blue"></div>
                                <div className="dash"></div>
                            </home.Pic2Top>
                        </div>
                        <div className="text_box center">
                            <home.H2Title className="text_pc"><home.Point>상업용 부동산에 특화</home.Point>된 <br />시스템을 경험하세요</home.H2Title>
                            <home.H2Title className="text_mobile">상업용 부동산에 <home.Point>특화된 시스템</home.Point>을 경험하세요</home.H2Title>
                            <home.H2Dsc>네모인은 매물 선정부터, 계약 완료까지의 모든 과정을 <br /> 다양한 경험을 통해 시스템화 시켰습니다. <br />네모인의 각 서비스에 따른 차별화된 시스템을 경험하세요.</home.H2Dsc>
                        </div>
                    </home.Section>
                    <home.Section>
                        <div className="img_box">
                            <img src={images.Pic3} />
                            <home.Pic3Top>
                                <div className="red"></div>
                                <div className="blue"></div>
                                <div className="dash"></div>
                            </home.Pic3Top>
                        </div>
                        <div className="text_box center">
                            <home.H2Title><home.Point>합리적인 가격</home.Point>으로 <br />중개 받아보세요</home.H2Title>
                            <home.H2Dsc>네모인은 고객들의 수익창출, 자산가치 증진을 목표로 <br />합리적인 가격으로 최상의 중개 서비스를 제공해드립니다.</home.H2Dsc>
                        </div>
                    </home.Section>
                    <home.NemoinGrowth>
                        <home.H2Title>네모인의 <home.Point>성장 가치</home.Point></home.H2Title>
                        <ul className="list_price">
                            <li className="work">
                                <strong className="title">함께 일합니다</strong>
                                <p className="dsc">고객 가치 실현의 목표를 향해<br /> 네모인은 고객과 함께 일하고 함께 나아갑니다.</p>
                            </li>
                            <li className="stature">
                                <strong className="title">항상 성장합니다</strong>
                                <p className="dsc">고객 비즈니스 성장을 지향하여 전문화된 서비스<br /> 제공을 위해 네모인도 지속적인 성장을 추구합니다.</p>
                            </li>
                            <li className="enjoy">
                                <strong className="title">즐거움은 나눕니다</strong>
                                <p className="dsc">네모인은 즐겁게 웃으며 일하고<br /> 고객들께 기분 좋은 서비스를 제공합니다.</p>
                            </li>
                        </ul>
                    </home.NemoinGrowth>
                    <home.SectionCalligraphy className="change">
                        <div className="img_box">
                            <img src={images.Img1} />
                        </div>
                        <div className="text_box">
                            <home.H2Title>상업용 부동산에서의 <home.Point>전문성</home.Point></home.H2Title>
                            <home.H2Dsc>다양한 상업용 부동산 중개 경험을 가진 전문 인력으로 전략적이고 체계적으로 거래를 진행합니다.</home.H2Dsc>
                            <ul className="list_sub">
                                <li>상업용 부동산 경험이 풍부한 인력 구성</li>
                                <li>전 과정에 걸친 원스톱 서비스</li>
                                <li>각 영역별 타겟 마케팅을 통한 전략적 업무 수행</li>
                            </ul>
                        </div>
                    </home.SectionCalligraphy>
                    <home.SectionCalligraphy>
                        <div className="img_box">
                            <img src={images.Img2} />
                        </div>
                        <div className="text_box">
                            <home.H2Title>부동산에 <home.Point>특화된 네트워크</home.Point></home.H2Title>
                            <home.H2Dsc>네모인은 부동산 영역에 특화된 다양한 업체와 많은 인적 네트워크로 정확하고 신속한 거래 경험을 제공합니다.</home.H2Dsc>
                            <ul className="list_sub">
                                <li>부동산 관련 전문 업체 (감정평가·건축·금융·회계 등)들과의 제휴를 통한 종합 서비스 제공</li>
                                <li>동종업계 부동산 업체와의 co-work를 통한 시너지 강화</li>
                            </ul>
                        </div>
                    </home.SectionCalligraphy>
                    <home.SectionCalligraphy className="change">
                        <div className="img_box">
                            <img src={images.Img3} />
                        </div>
                        <div className="text_box">
                            <home.H2Title>부동산 <home.Point>정보 시스템</home.Point> 활용</home.H2Title>
                            <home.H2Dsc>네모인은 다양한 DB와 거래정보를 통해 정량적인 정보 시스템을 활용한 최상의 거래를 제공합니다.</home.H2Dsc>
                            <ul className="list_sub">
                                <li>상업용 부동산 시세, 거래 정보, 실매물 정보 DB를 통해 정확한 컨설팅 서비스 제공</li>
                                <li>네모인 물건 정보 시스템을 활용하고 신속하고 체계적인 물건 정보 제공</li>
                            </ul>
                        </div>
                    </home.SectionCalligraphy>
                    <home.NemoinService>
                        <home.H2Title><home.Point>네모인의 서비스</home.Point></home.H2Title>
                        <home.H2Dsc>네모인은 부동산 중개 및 컨설팅, 투자 자문, 관리까지 종합 서비스를 제공합니다.</home.H2Dsc>
                        <ul className="list_service">
                            <li className="office">
                                <strong className="title">오피스 임대차</strong>
                                <p className="dsc">오피스 시장에서 다년간 축적한 데이터베이스와 <br />노하우를 통해 효율적인 오피스 임대 대행(LR),<br />임차 대행(TR) 서비스를 제공합니다.</p>
                            </li>
                            <li className="retail">
                                <strong className="title">리테일 서비스</strong>
                                <p className="dsc">상업시설 임대차, 자산 관리, 투자 자문에 이르기까지 리테일 자산에 대한 Total Solution을 제공합니다.</p>
                            </li>
                            <li className="purchase">
                                <strong className="title">매입/매각</strong>
                                <p className="dsc">부동산 자산 현황 분석에서 타당성 검토(Valuation),매매 계약 체결 지원 등 계약 진행 중에 고객이 최적의 의사 결정을 할 수 있도록  자문해드립니다.</p>
                            </li>
                            <li className="parcel_out">
                                <strong className="title">분양대행 서비스</strong>
                                <p className="dsc">성공적 분양 완료를 목표로 분양 계획 수립 및 적정 분양가 산정, 분양 대행을 통한 계약 체결까지 원스톱 분양 서비스를 제공합니다.</p>
                            </li>
                            <li className="assets">
                                <strong className="title">자산관리</strong>
                                <p className="dsc">안정적인 운영 관리와 체계적인 임대차 관리, 지속적인 건물 관리로 고객 자산 가치 극대화를 추구합니다.</p>
                            </li>
                            <li className="logistics">
                                <strong className="title">물류 부동산 서비스</strong>
                                <p className="dsc">최상의 입자, 최적의 조건의 물류센터 이전 임대차 컨설팅 및 물류 부동산의 최유효 이동을 통한 자산 가치 상승을 목표로 자문 서비스를 제공하고 있습니다.</p>
                            </li>
                            </ul>
                    </home.NemoinService>
                    <home.NemoinIntroduce>
                        <div className="swiper-container">
                            <div className="swiper-wrapper">
                                {_.map(options, (c, i: number) => {
                                    return <div key={i} className="swiper-slide">
                                        <div className="slide_inner">
                                            <div className="text_box">
                                                <home.H2Title>{c.subject}</home.H2Title>
                                                <strong className="name">{c.name}</strong>
                                                <p className="dsc">{c.dsc}</p>
                                            </div>
                                            <div className="img_box">
                                                <div className="img"></div>
                                            </div>
                                        </div>
                                    </div>
                                })}
                            </div>
                            <div className="swiper-pagination"></div>
                        </div>
                    </home.NemoinIntroduce>
                    <home.NemoinCustomer>
                        <home.H2Title>네모인에 의뢰해주신 <home.Point>고객사</home.Point></home.H2Title>
                        <ul className="list_customer">
                            <li><img src={images.zigbang} width="100%" /></li>
                            <li><img src={images.alpha} width="100%" /></li>
                            <li><img src={images.oneThird} width="100%" /></li>
                            <li><img src={images.hogangnono} width="100%" /></li>
                            <li><img src={images.fursys} width="100%" /></li>
                            <li><img src={images.actionpower} width="100%" /></li>
                            <li><img src={images.zoocoffee} width="100%" /></li>
                            <li><img src={images.oci} width="100%" /></li>
                            <li><img src={images.ghost} width="100%" /></li>
                            <li><img src={images.imt} width="100%" /></li>
                            <li><img src={images.supertree} width="100%" /></li>
                            <li><img src={images.petsbe} width="100%" /></li>
                            <li><img src={images.threepop} width="100%" /></li>
                            <li><img src={images.socialenterprise} width="100%" /></li>
                            <li><img src={images.wooricapital} width="100%" /></li>
                        </ul>
                    </home.NemoinCustomer>
                    <home.FooterBanner>
                        <p className="text">네모인 부동산 중개법인에서 <br />쉽고 간편한 부동산 거래를 경험하세요.</p>
                        <home.BtnRed onClick={this.handlePopupOpen.bind(this)}>문의하기</home.BtnRed>
                    </home.FooterBanner>
                </home.Container>
                <home.Footer>
                    <home.LogoArea>
                        <home.Logo >네모인</home.Logo>
                        <home.LogoText>부동산중개법인</home.LogoText>
                    </home.LogoArea>
                    <span className="office_infors">
                        <p className="customer"><span className="text">대표 : 정윤화</span>  <span className="text">TEL : 02-501-7662</span>   <span className="text">FAX : 02-6944-9338</span>   <span className="text">E-mail : yhjung@sugarhill.co.kr</span></p>
                        <address className="address">서울특별시 강남구 강남대로 408 YBM강남센터 11층</address>
                        <p className="copyright">Copyright © 네모인부동산중개법인. <span className="text">All rights reserved</span></p>
                    </span>
                </home.Footer>
                {this.state.showOfficeForSalePopup && <OfficeForSalePopup onClose={this.handlePopupClose.bind(this)} />}
            </home.Wrap>
        );
    }
}

export default hot(Home);