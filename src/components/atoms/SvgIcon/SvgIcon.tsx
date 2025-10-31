import { cloneElement, ReactElement } from 'react';
import {
    FontAwesomeIcon,
    FontAwesomeIconProps
} from '@fortawesome/react-fontawesome';
import { cx, VariantProps } from 'class-variance-authority';

// NOTE: Do not import and use the fontawesome-svg-core `library`.
// It will cause a runtime error in Sitecore Experience Editor.
// that prevents placeholders from being rendered.
import { config, IconProp } from '@fortawesome/fontawesome-svg-core';

// Styles
import { svgIconCVA } from './styles';

// Types
import { Expand } from '@/types';

// Icons
import {
    faFacebook,
    faInstagram,
    faLinkedin,
    faLinkedinIn,
    faTwitter,
    faXTwitter,
    faYoutube
} from '@awesome.me/kit-6f3f1f8c8b/icons/classic/brands';

import {
    faAmericanSignLanguageInterpreting,
    faAngleDoubleLeft,
    faAngleDoubleRight,
    faArrowUpRightFromSquare,
    faAsterisk,
    faBooksMedical,
    faCalendarPlus,
    faChild,
    faCircle,
    faCircle1,
    faCircle2,
    faCircle3,
    faCircle4,
    faCircle5,
    faCircleInfo,
    faCircleMinus,
    faCirclePlay,
    faCirclePlus,
    faClock,
    faClose,
    faCommentAlt,
    faDumpster,
    faFilePdf,
    faFilm,
    faFlask,
    faHandHoldingMedical,
    faIndustryAlt,
    faInfoCircle,
    faLightbulbOn,
    faLocationCrosshairs,
    faMagnifyingGlass,
    faMapMarkerAlt,
    faMinus,
    faMobileAndroid,
    faPiggyBank,
    faPlus,
    faPrint,
    faRecycle,
    faSeedling,
    faShoePrints,
    faSliders,
    faSmokingBan,
    faSquarePlus,
    faStethoscope,
    faUserMdChat,
    faVideo,
    faWeight,
    faXmark
} from '@awesome.me/kit-6f3f1f8c8b/icons/classic/regular';

import {
    faAngleDown,
    faAngleLeft,
    faAnglesLeft,
    faAnglesRight,
    faAppleWhole,
    faArrowRight,
    faArrowRightLong,
    faArrowsLeftRight,
    faArrowUp,
    faBars,
    faBarsSort,
    faBlog,
    faBook,
    faBullhorn,
    faCalendar,
    faCalendarStar,
    faCars,
    faCaretDown,
    faCarSide,
    faCertificate,
    faChalkboardUser,
    faChartUser,
    faCheck,
    faCheckSquare,
    faChevronDoubleLeft,
    faChevronDoubleRight,
    faChevronDown,
    faChevronLeft,
    faChevronRight,
    faChevronUp,
    faCircleCheck,
    faCircleExclamation,
    faCircleInfo as faCircleInfoSolid,
    faCircleXmark,
    faClipboardMedical,
    faCloud,
    faCloudDownload,
    faCloudUpload,
    faCog,
    faComment,
    faComments,
    faCopy,
    faCube,
    faDownload,
    faEdit,
    faEllipsisH,
    faEllipsisV,
    faEnvelope,
    faExclamation,
    faExclamationCircle,
    faGift,
    faHandHeart,
    faHandHoldingHeart,
    faHandHoldingMedical as faHandHoldingMedicalSolid,
    faHandsUsd,
    faHandsHoldingHeart,
    faHeart,
    faHeartPulse,
    faHouse,
    faHouseMedical,
    faLocationDot,
    faPhone,
    faPiggyBank as faPiggyBankSolid,
    faPills,
    faShieldCheck,
    faShieldHeart,
    faShieldKeyhole,
    faShieldPlus,
    faShieldVirus,
    faSyringe,
    faUser,
    faUserDoctor,
    faViruses,
    faWeightHanging,
    faWifi,
    faWrench
} from '@awesome.me/kit-6f3f1f8c8b/icons/classic/solid';

import {
    faChevronLeft as faChevronLeftSharp,
    faChevronRight as faChevronRightSharp,
    faCircle1 as faCircle1Sharp,
    faCircle2 as faCircle2Sharp,
    faCircle3 as faCircle3Sharp,
    faCircle4 as faCircle4Sharp,
    faCircle5 as faCircle5Sharp,
    faPause,
    faPlay
} from '@awesome.me/kit-6f3f1f8c8b/icons/sharp/solid';

import {
    faCalendarCheck,
    faCalendarDays
} from '@awesome.me/kit-6f3f1f8c8b/icons/classic/light';

import {
    faAppleWhole as faAppleWholeThin,
    faBook as faBookThin,
    faBullhorn as faBullhornThin,
    faCalendar as faCalendarThin,
    faCalendarStar as faCalendarStarThin,
    faCars as faCarsThin,
    faCarSide as faCarSideThin,
    faChartUser as faChartUserThin,
    faCircle1 as faCircle1Thin,
    faCircle2 as faCircle2Thin,
    faCircle3 as faCircle3Thin,
    faCircle4 as faCircle4Thin,
    faCircle5 as faCircle5Thin,
    faCircleCheck as faCircleCheckThin,
    faClipboardMedical as faClipboardMedicalThin,
    faClock as faClockThin,
    faGift as faGiftThin,
    faHandHeart as faHandHeartThin,
    faHandsUsd as faHandsUsdThin,
    faHandHoldingHeart as faHandHoldingHeartThin,
    faHandsHoldingHeart as faHandsHoldingHeartThin,
    faHeartPulse as faHeartPulseThin,
    faHospitals as faHospitalsThin,
    faHospitalUser as faHospitalUserThin,
    faHouse as faHouseThin,
    faHouseMedical as faHouseMedicalThin,
    faLocationDot as faLocationDotThin,
    faMobileButton,
    faPhone as faPhoneThin,
    faPiggyBank as faPiggyBankThin,
    faPills as faPillsThin,
    faRecycle as faRecycleThin,
    faSeedling as faSeedlingThin,
    faShieldCheck as faShieldCheckThin,
    faShieldHeart as faShieldHeartThin,
    faShieldKeyhole as faShieldKeyholeThin,
    faShieldPlus as faShieldPlusThin,
    faShieldVirus as faShieldVirusThin,
    faSyringe as faSyringeThin,
    faUser as faUserThin,
    faUserDoctor as faUserDoctorThin,
    faUsersLine as faUsersLineThin,
    faViruses as faVirusesThin,
    faWeightHanging as faWeightHangingThin,
    faWifi as faWifiThin
} from '@awesome.me/kit-6f3f1f8c8b/icons/classic/thin';

import {
    faColorectalSolid,
    faContactThin,
    faKneeSolid,
    faMapAlabama,
    faMapGeorgia,
    faMapIllinois,
    faMapNorthcarolina,
    faMapSouthcarolina,
    faMapWisconsin,
    faSpineSolid,
    faStreetViewSolid,
    faUserPatientThin,
    faUserVisitorThin
} from '@awesome.me/kit-6f3f1f8c8b/icons/kit/custom';

import {
    faAddressCard,
    faAmericanSignLanguageInterpreting as faAmericanSignLanguageInterpretingDuotone,
    faAppleWhole as faAppleWholeDuotone,
    faAward,
    faBadgeCheck,
    faBook as faBookDuotone,
    faBooksMedical as faBooksMedicalDuotone,
    faBrain,
    faBullhorn as faBullhornDuotone,
    faCalendar as faCalendarDuotone,
    faCalendarStar as faCalendarStarDuotone,
    faCars as faCarsDuotone,
    faCarSide as faCarSideDuotone,
    faChartUser as faChartUserDuotone,
    faCheck as faCheckDuotone,
    faChevronLeft as faChevronLeftDuotone,
    faChild as faChildDuotone,
    faCircle1 as faCircle1Duotone,
    faCircle2 as faCircle2Duotone,
    faCircle3 as faCircle3Duotone,
    faCircle4 as faCircle4Duotone,
    faCircle5 as faCircle5Duotone,
    faCircleCheck as faCircleCheckDuotone,
    faClipboardListCheck,
    faClipboardMedical as faClipboardMedicalDuotone,
    faClock as faClockDuotone,
    faCommentsAlt as faCommentsAltDuotone,
    faCommentsQuestionCheck,
    faDumpster as faDumpsterDuotone,
    faFamily,
    faFileInvoiceDollar,
    faFilePlus,
    faFilesMedical,
    faGift as faGiftDuotone,
    faHandHeart as faHandHeartDuotone,
    faHandsUsd as faHandsUsdDuotone,
    faHandHoldingHeart as faHandHoldingHeartDuotone,
    faHandHoldingMedical as faHandHoldingMedicalDuotone,
    faHandsHoldingHeart as faHandsHoldingHeartDuotone,
    faHeartCircleCheck,
    faHeartPulse as faHeartPulseDuotone,
    faHospitals as faHospitalsDuotone,
    faHospitalUser,
    faHouse as faHouseDuotone,
    faHouseMedical as faHouseMedicalDuotone,
    faHouseMedicalCircleCheck,
    faIndustryAlt as faIndustryAltDuotone,
    faInfoCircle as faInfoCircleDuotone,
    faLaptopMedical as faLaptopMedicalDuotone,
    faLaptopMedical,
    faLaptopMobile,
    faLightbulbOn as faLightbulbOnDuotone,
    faLungs,
    faMapMarkerAlt as faMapMarkerAltDuotone,
    faMessages,
    faMobileAndroid as faMobileAndroidDuotone,
    faPeopleGroup,
    faPhone as faPhoneDuotone,
    faPiggyBank as faPiggyBankDuotone,
    faPills as faPillsDuotone,
    faRecycle as faRecycleDuotone,
    faRibbon as faRibbonDuotone,
    faSearch as faSearchDuotone,
    faSeedling as faSeedlingDuotone,
    faShieldCheck as faShieldCheckDuotone,
    faShieldHeart as faShieldHeartDuotone,
    faShieldKeyhole as faShieldKeyholeDuotone,
    faShieldPlus as faShieldPlusDuotone,
    faShieldVirus as faShieldVirusDuotone,
    faShoePrints as faShoePrintsDuotone,
    faSmokingBan as faSmokingBanDuotone,
    faSquareH,
    faStomach,
    faStreetView as faStreetViewDuotone,
    faSyringe as faSyringeDuotone,
    faUser as faUserDuotone,
    faUserCheck,
    faUserDoctor as faUserDoctorDuotone,
    faUserHeadset,
    faUserMdChat as faUserMdChatDuotone,
    faUsersLine,
    faVideo as faVideoDuotone,
    faViruses as faVirusesDuotone,
    faWeight as faWeightDuotone,
    faWeightHanging as faWeightHangingDuotone,
    faWeightScale,
    faWifi as faWifiDuotone
} from '@awesome.me/kit-6f3f1f8c8b/icons/duotone/solid';

import {
    LaptopPhysician,
    MobilePhysician,
    UserDoctorMessageDuotone,
    ColorectalDuotone,
    KneeDuotone,
    SpineDuotone
} from '@/components/atoms/SvgIcon/custom';

// SvgIconType is explicitly defined because type inference is not working properly.
// Using something like `keyof typeof fontAwesomeIconList` will result in a build error.
// > Internal Error: Unable to follow symbol for "IconDefinition"
export type SvgIconType =
    | 'addressCardDuotone'
    | 'americanSignLanguageInterpreting'
    | 'AmericanSignLanguageInterpretingDuotone'
    | 'angleDoubleLeft'
    | 'angleDoubleRight'
    | 'angleDown'
    | 'angleLeft'
    | 'anglesLeft'
    | 'anglesRight'
    | 'appleWhole'
    | 'appleWholeDuotone'
    | 'appleWholeThin'
    | 'arrowRight'
    | 'arrowRightLong'
    | 'arrowsLeftRight'
    | 'arrowUp'
    | 'arrowUpRightFromSquare'
    | 'asterisk'
    | 'awardDuotone'
    | 'badgeCheckDuotone'
    | 'bars'
    | 'barsSort'
    | 'blog'
    | 'book'
    | 'bookDuotone'
    | 'booksMedical'
    | 'booksMedicalDuotone'
    | 'bookThin'
    | 'brainDuotone'
    | 'bullhorn'
    | 'bullhornDuotone'
    | 'bullhornThin'
    | 'calendar'
    | 'calendarCheckLight'
    | 'calendarDaysLight'
    | 'calendarDuotone'
    | 'calendarPlus'
    | 'calendarStar'
    | 'calendarStarDuotone'
    | 'calendarStarThin'
    | 'calendarThin'
    | 'caretDown'
    | 'cars'
    | 'carsDuotone'
    | 'carSide'
    | 'carSideDuotone'
    | 'carSideThin'
    | 'carsThin'
    | 'certificate'
    | 'chalkboardUser'
    | 'chartUser'
    | 'chartUserDuotone'
    | 'chartUserThin'
    | 'check'
    | 'checkDuotone'
    | 'checkSquare'
    | 'chevronDoubleLeft'
    | 'chevronDoubleRight'
    | 'chevronDown'
    | 'chevronLeft'
    | 'chevronLeftDuotone'
    | 'chevronLeftSharp'
    | 'chevronRight'
    | 'chevronRightSharp'
    | 'chevronUp'
    | 'child'
    | 'childDuotone'
    | 'circle'
    | 'circle1'
    | 'circle1Duotone'
    | 'circle1Sharp'
    | 'circle1Thin'
    | 'circle2'
    | 'circle2Duotone'
    | 'circle2Sharp'
    | 'circle2Thin'
    | 'circle3'
    | 'circle3Duotone'
    | 'circle3Sharp'
    | 'circle3Thin'
    | 'circle4'
    | 'circle4Duotone'
    | 'circle4Sharp'
    | 'circle4Thin'
    | 'circle5'
    | 'circle5Duotone'
    | 'circle5Sharp'
    | 'circle5Thin'
    | 'circleCheck'
    | 'circleExclamation'
    | 'circleInfo'
    | 'circleInfoSolid'
    | 'circleMinus'
    | 'circlePlay'
    | 'circlePlus'
    | 'circleXmark'
    | 'clipboardListCheckDuotone'
    | 'clipboardMedical'
    | 'clipboardMedicalDuotone'
    | 'clipboardMedicalThin'
    | 'clock'
    | 'clockDuotone'
    | 'close'
    | 'cloud'
    | 'cloudDownload'
    | 'cloudUpload'
    | 'cog'
    | 'colorectalSolid'
    | 'comment'
    | 'commentAlt'
    | 'comments'
    | 'commentsAltDuotone'
    | 'commentsQuestionCheckDuotone'
    | 'contactThin'
    | 'copy'
    | 'cube'
    | 'download'
    | 'dumpster'
    | 'dumpsterDuotone'
    | 'edit'
    | 'ellipsisH'
    | 'ellipsisV'
    | 'envelope'
    | 'exclamation'
    | 'exclamationCircle'
    | 'facebook'
    | 'familyDuotone'
    | 'fileInvoiceDollarDuotone'
    | 'filePdf'
    | 'filePlusDuotone'
    | 'filesMedicalDuotone'
    | 'film'
    | 'flask'
    | 'gift'
    | 'giftDuotone'
    | 'giftThin'
    | 'handHeart'
    | 'handHeartDuotone'
    | 'handHeartThin'
    | 'handHoldingHeart'
    | 'handHoldingHeartDuotone'
    | 'handHoldingHeartThin'
    | 'handHoldingMedical'
    | 'handHoldingMedicalDuotone'
    | 'handHoldingMedicalSolid'
    | 'handsHoldingDollar'
    | 'handsHoldingDollarDuotone'
    | 'handsHoldingDollarThin'
    | 'handsHoldingHeart'
    | 'handsHoldingHeartDuotone'
    | 'handsHoldingHeartThin'
    | 'heart'
    | 'heartCircleCheckDuotone'
    | 'heartPulse'
    | 'heartPulseDuotone'
    | 'heartPulseThin'
    | 'hospitalsDuotone'
    | 'hospitalsThin'
    | 'hospitalUserDuotone'
    | 'hospitalUserThin'
    | 'house'
    | 'houseDuotone'
    | 'houseMedical'
    | 'houseMedicalCircleCheckDuotone'
    | 'houseMedicalDuotone'
    | 'houseMedicalThin'
    | 'houseThin'
    | 'industryAlt'
    | 'industryAltDuotone'
    | 'infoCircle'
    | 'infoCircleDuotone'
    | 'instagram'
    | 'kneeSolid'
    | 'laptopMedialDuotone'
    | 'laptopMedicalDuotone'
    | 'laptopMobileDuotone'
    | 'lightbulbOn'
    | 'lightbulbOnDuotone'
    | 'linkedin'
    | 'linkedinIn'
    | 'locationCrosshairs'
    | 'locationDot'
    | 'locationDotThin'
    | 'lungsDuotone'
    | 'magnifyingGlass'
    | 'mapAlabama'
    | 'mapGeorgia'
    | 'mapIllinois'
    | 'mapMarkerAlt'
    | 'mapMarkerAltDuotone'
    | 'mapNorthcarolina'
    | 'mapSouthcarolina'
    | 'mapWisconsin'
    | 'messagesDuotone'
    | 'minus'
    | 'mobileAndroid'
    | 'mobileAndroidDuotone'
    | 'mobileButtonThin'
    | 'pause'
    | 'peopleGroup'
    | 'phone'
    | 'phoneDuotone'
    | 'phoneThin'
    | 'piggyBank'
    | 'piggyBankDuotone'
    | 'piggyBankSolid'
    | 'piggyBankThin'
    | 'pills'
    | 'pillsDuotone'
    | 'pillsThin'
    | 'play'
    | 'plus'
    | 'print'
    | 'recycle'
    | 'recycleDuotone'
    | 'recycleThin'
    | 'ribbonDuotone'
    | 'searchDuotone'
    | 'seedling'
    | 'seedlingDuotone'
    | 'seedlingThin'
    | 'shieldCheck'
    | 'shieldCheckDuotone'
    | 'shieldCheckThin'
    | 'shieldHeart'
    | 'shieldHeartDuotone'
    | 'shieldHeartThin'
    | 'shieldKeyhole'
    | 'shieldKeyholeDuotone'
    | 'shieldKeyholeThin'
    | 'shieldPlus'
    | 'shieldPlusDuotone'
    | 'shieldPlusThin'
    | 'shieldVirus'
    | 'shieldVirusDuotone'
    | 'shieldVirusThin'
    | 'shoePrints'
    | 'shoePrintsDuotone'
    | 'sliders'
    | 'smokingBan'
    | 'smokingBanDuotone'
    | 'spineSolid'
    | 'squareHDuotone'
    | 'squarePlus'
    | 'stethoscope'
    | 'stomachDuotone'
    | 'streetViewDuotone'
    | 'streetViewSolid'
    | 'syringe'
    | 'syringeDuotone'
    | 'syringeThin'
    | 'twitter'
    | 'user'
    | 'userCheckDuotone'
    | 'userDoctor'
    | 'userDoctorDuotone'
    | 'userDoctorThin'
    | 'userDuotone'
    | 'userHeadsetDuotone'
    | 'userMdChat'
    | 'userMdChatDuotone'
    | 'userPatientThin'
    | 'usersLineDuotone'
    | 'usersLineThin'
    | 'userThin'
    | 'userVisitorThin'
    | 'video'
    | 'videoDuotone'
    | 'viruses'
    | 'virusesDuotone'
    | 'virusesThin'
    | 'weight'
    | 'weightDuotone'
    | 'weightHanging'
    | 'weightHangingDuotone'
    | 'weightHangingThin'
    | 'weightScaleDuotone'
    | 'wifi'
    | 'wifiDuotone'
    | 'wifiThin'
    | 'wrench'
    | 'xmark'
    | 'xTwitter'
    | 'youtube';

type CustomSVGIconType =
    | 'colorectalDuotone'
    | 'kneeDuotone'
    | 'laptopPhysician'
    | 'mobilePhysician'
    | 'spineDuotone'
    | 'userDoctorMessageDuotone';

const fontAwesomeIconList = {
    addressCardDuotone: faAddressCard,
    americanSignLanguageInterpreting: faAmericanSignLanguageInterpreting,
    AmericanSignLanguageInterpretingDuotone:
        faAmericanSignLanguageInterpretingDuotone,
    angleDoubleLeft: faAngleDoubleLeft,
    angleDoubleRight: faAngleDoubleRight,
    angleDown: faAngleDown,
    angleLeft: faAngleLeft,
    anglesLeft: faAnglesLeft,
    anglesRight: faAnglesRight,
    appleWhole: faAppleWhole,
    appleWholeDuotone: faAppleWholeDuotone,
    appleWholeThin: faAppleWholeThin,
    arrowRight: faArrowRight,
    arrowRightLong: faArrowRightLong,
    arrowsLeftRight: faArrowsLeftRight,
    arrowUp: faArrowUp,
    arrowUpRightFromSquare: faArrowUpRightFromSquare,
    asterisk: faAsterisk,
    awardDuotone: faAward,
    badgeCheckDuotone: faBadgeCheck,
    bars: faBars,
    barsSort: faBarsSort,
    blog: faBlog,
    book: faBook,
    bookDuotone: faBookDuotone,
    booksMedical: faBooksMedical,
    booksMedicalDuotone: faBooksMedicalDuotone,
    bookThin: faBookThin,
    brainDuotone: faBrain,
    bullhorn: faBullhorn,
    bullhornDuotone: faBullhornDuotone,
    bullhornThin: faBullhornThin,
    calendar: faCalendar,
    calendarCheckLight: faCalendarCheck,
    calendarDaysLight: faCalendarDays,
    calendarDuotone: faCalendarDuotone,
    calendarPlus: faCalendarPlus,
    calendarStar: faCalendarStar,
    calendarStarDuotone: faCalendarStarDuotone,
    calendarStarThin: faCalendarStarThin,
    calendarThin: faCalendarThin,
    caretDown: faCaretDown,
    cars: faCars,
    carsDuotone: faCarsDuotone,
    carSide: faCarSide,
    carSideDuotone: faCarSideDuotone,
    carSideThin: faCarSideThin,
    carsThin: faCarsThin,
    certificate: faCertificate,
    chalkboardUser: faChalkboardUser,
    chartUser: faChartUser,
    chartUserDuotone: faChartUserDuotone,
    chartUserThin: faChartUserThin,
    check: faCheck,
    checkDuotone: faCheckDuotone,
    checkSquare: faCheckSquare,
    chevronDoubleLeft: faChevronDoubleLeft,
    chevronDoubleRight: faChevronDoubleRight,
    chevronDown: faChevronDown,
    chevronLeft: faChevronLeft,
    chevronLeftDuotone: faChevronLeftDuotone,
    chevronLeftSharp: faChevronLeftSharp,
    chevronRight: faChevronRight,
    chevronRightSharp: faChevronRightSharp,
    chevronUp: faChevronUp,
    child: faChild,
    childDuotone: faChildDuotone,
    circle: faCircle,
    circle1: faCircle1,
    circle1Duotone: faCircle1Duotone,
    circle1Sharp: faCircle1Sharp,
    circle1Thin: faCircle1Thin,
    circle2: faCircle2,
    circle2Duotone: faCircle2Duotone,
    circle2Sharp: faCircle2Sharp,
    circle2Thin: faCircle2Thin,
    circle3: faCircle3,
    circle3Duotone: faCircle3Duotone,
    circle3Sharp: faCircle3Sharp,
    circle3Thin: faCircle3Thin,
    circle4: faCircle4,
    circle4Duotone: faCircle4Duotone,
    circle4Sharp: faCircle4Sharp,
    circle4Thin: faCircle4Thin,
    circle5: faCircle5,
    circle5Duotone: faCircle5Duotone,
    circle5Sharp: faCircle5Sharp,
    circle5Thin: faCircle5Thin,
    circleCheck: faCircleCheck,
    circleCheckDuotone: faCircleCheckDuotone,
    circleCheckThin: faCircleCheckThin,
    circleExclamation: faCircleExclamation,
    circleInfo: faCircleInfo,
    circleInfoSolid: faCircleInfoSolid,
    circleMinus: faCircleMinus,
    circlePlay: faCirclePlay,
    circlePlus: faCirclePlus,
    circleXmark: faCircleXmark,
    clipboardListCheckDuotone: faClipboardListCheck,
    clipboardMedical: faClipboardMedical,
    clipboardMedicalDuotone: faClipboardMedicalDuotone,
    clipboardMedicalThin: faClipboardMedicalThin,
    clock: faClock,
    clockDuotone: faClockDuotone,
    clockThin: faClockThin,
    close: faClose,
    cloud: faCloud,
    cloudDownload: faCloudDownload,
    cloudUpload: faCloudUpload,
    cog: faCog,
    colorectalSolid: faColorectalSolid,
    comment: faComment,
    commentAlt: faCommentAlt,
    comments: faComments,
    commentsAltDuotone: faCommentsAltDuotone,
    commentsQuestionCheckDuotone: faCommentsQuestionCheck,
    contactThin: faContactThin,
    copy: faCopy,
    cube: faCube,
    download: faDownload,
    dumpster: faDumpster,
    dumpsterDuotone: faDumpsterDuotone,
    edit: faEdit,
    ellipsisH: faEllipsisH,
    ellipsisV: faEllipsisV,
    envelope: faEnvelope,
    exclamation: faExclamation,
    exclamationCircle: faExclamationCircle,
    facebook: faFacebook,
    familyDuotone: faFamily,
    fileInvoiceDollarDuotone: faFileInvoiceDollar,
    filePdf: faFilePdf,
    filePlusDuotone: faFilePlus,
    filesMedicalDuotone: faFilesMedical,
    film: faFilm,
    flask: faFlask,
    gift: faGift,
    giftDuotone: faGiftDuotone,
    giftThin: faGiftThin,
    handHeart: faHandHeart,
    handHeartDuotone: faHandHeartDuotone,
    handHeartThin: faHandHeartThin,
    handHoldingHeart: faHandHoldingHeart,
    handHoldingHeartDuotone: faHandHoldingHeartDuotone,
    handHoldingHeartThin: faHandHoldingHeartThin,
    handHoldingMedical: faHandHoldingMedical,
    handHoldingMedicalDuotone: faHandHoldingMedicalDuotone,
    handHoldingMedicalSolid: faHandHoldingMedicalSolid,
    handsHoldingDollar: faHandsUsd,
    handsHoldingDollarDuotone: faHandsUsdDuotone,
    handsHoldingDollarThin: faHandsUsdThin,
    handsHoldingHeart: faHandsHoldingHeart,
    handsHoldingHeartDuotone: faHandsHoldingHeartDuotone,
    handsHoldingHeartThin: faHandsHoldingHeartThin,
    heart: faHeart,
    heartCircleCheckDuotone: faHeartCircleCheck,
    heartPulse: faHeartPulse,
    heartPulseDuotone: faHeartPulseDuotone,
    heartPulseThin: faHeartPulseThin,
    hospitalsDuotone: faHospitalsDuotone,
    hospitalsThin: faHospitalsThin,
    hospitalUserDuotone: faHospitalUser,
    hospitalUserThin: faHospitalUserThin,
    house: faHouse,
    houseDuotone: faHouseDuotone,
    houseMedical: faHouseMedical,
    houseMedicalCircleCheckDuotone: faHouseMedicalCircleCheck,
    houseMedicalDuotone: faHouseMedicalDuotone,
    houseMedicalThin: faHouseMedicalThin,
    houseThin: faHouseThin,
    industryAlt: faIndustryAlt,
    industryAltDuotone: faIndustryAltDuotone,
    infoCircle: faInfoCircle,
    infoCircleDuotone: faInfoCircleDuotone,
    instagram: faInstagram,
    kneeSolid: faKneeSolid,
    laptopMedialDuotone: faLaptopMedical,
    laptopMedicalDuotone: faLaptopMedicalDuotone,
    laptopMobileDuotone: faLaptopMobile,
    lightbulbOn: faLightbulbOn,
    lightbulbOnDuotone: faLightbulbOnDuotone,
    linkedin: faLinkedin,
    linkedinIn: faLinkedinIn,
    locationCrosshairs: faLocationCrosshairs,
    locationDot: faLocationDot,
    locationDotThin: faLocationDotThin,
    lungsDuotone: faLungs,
    magnifyingGlass: faMagnifyingGlass,
    mapAlabama: faMapAlabama,
    mapGeorgia: faMapGeorgia,
    mapIllinois: faMapIllinois,
    mapMarkerAlt: faMapMarkerAlt,
    mapMarkerAltDuotone: faMapMarkerAltDuotone,
    mapNorthcarolina: faMapNorthcarolina,
    mapSouthcarolina: faMapSouthcarolina,
    mapWisconsin: faMapWisconsin,
    messagesDuotone: faMessages,
    minus: faMinus,
    mobileAndroid: faMobileAndroid,
    mobileAndroidDuotone: faMobileAndroidDuotone,
    mobileButtonThin: faMobileButton,
    pause: faPause,
    peopleGroup: faPeopleGroup,
    phone: faPhone,
    phoneDuotone: faPhoneDuotone,
    phoneThin: faPhoneThin,
    piggyBank: faPiggyBank,
    piggyBankDuotone: faPiggyBankDuotone,
    piggyBankSolid: faPiggyBankSolid,
    piggyBankThin: faPiggyBankThin,
    pills: faPills,
    pillsDuotone: faPillsDuotone,
    pillsThin: faPillsThin,
    play: faPlay,
    plus: faPlus,
    print: faPrint,
    recycle: faRecycle,
    recycleDuotone: faRecycleDuotone,
    recycleThin: faRecycleThin,
    ribbonDuotone: faRibbonDuotone,
    searchDuotone: faSearchDuotone,
    seedling: faSeedling,
    seedlingDuotone: faSeedlingDuotone,
    seedlingThin: faSeedlingThin,
    shieldCheck: faShieldCheck,
    shieldCheckDuotone: faShieldCheckDuotone,
    shieldCheckThin: faShieldCheckThin,
    shieldHeart: faShieldHeart,
    shieldHeartDuotone: faShieldHeartDuotone,
    shieldHeartThin: faShieldHeartThin,
    shieldKeyhole: faShieldKeyhole,
    shieldKeyholeDuotone: faShieldKeyholeDuotone,
    shieldKeyholeThin: faShieldKeyholeThin,
    shieldPlus: faShieldPlus,
    shieldPlusDuotone: faShieldPlusDuotone,
    shieldPlusThin: faShieldPlusThin,
    shieldVirus: faShieldVirus,
    shieldVirusDuotone: faShieldVirusDuotone,
    shieldVirusThin: faShieldVirusThin,
    shoePrints: faShoePrints,
    shoePrintsDuotone: faShoePrintsDuotone,
    sliders: faSliders,
    smokingBan: faSmokingBan,
    smokingBanDuotone: faSmokingBanDuotone,
    spineSolid: faSpineSolid,
    squareHDuotone: faSquareH,
    squarePlus: faSquarePlus,
    stethoscope: faStethoscope,
    stomachDuotone: faStomach,
    streetViewDuotone: faStreetViewDuotone,
    streetViewSolid: faStreetViewSolid,
    syringe: faSyringe,
    syringeDuotone: faSyringeDuotone,
    syringeThin: faSyringeThin,
    twitter: faTwitter,
    user: faUser,
    userCheckDuotone: faUserCheck,
    userDoctor: faUserDoctor,
    userDoctorDuotone: faUserDoctorDuotone,
    userDoctorThin: faUserDoctorThin,
    userDuotone: faUserDuotone,
    userHeadsetDuotone: faUserHeadset,
    userMdChat: faUserMdChat,
    userMdChatDuotone: faUserMdChatDuotone,
    userPatientThin: faUserPatientThin,
    usersLineDuotone: faUsersLine,
    usersLineThin: faUsersLineThin,
    userThin: faUserThin,
    userVisitorThin: faUserVisitorThin,
    video: faVideo,
    videoDuotone: faVideoDuotone,
    viruses: faViruses,
    virusesDuotone: faVirusesDuotone,
    virusesThin: faVirusesThin,
    weight: faWeight,
    weightDuotone: faWeightDuotone,
    weightHanging: faWeightHanging,
    weightHangingDuotone: faWeightHangingDuotone,
    weightHangingThin: faWeightHangingThin,
    weightScaleDuotone: faWeightScale,
    wifi: faWifi,
    wifiDuotone: faWifiDuotone,
    wifiThin: faWifiThin,
    wrench: faWrench,
    xmark: faXmark,
    xTwitter: faXTwitter,
    youtube: faYoutube
};

const customKitIcons: Record<CustomSVGIconType, ReactElement> = {
    laptopPhysician: <LaptopPhysician />,
    mobilePhysician: <MobilePhysician />,
    userDoctorMessageDuotone: <UserDoctorMessageDuotone />,
    colorectalDuotone: <ColorectalDuotone />,
    kneeDuotone: <KneeDuotone />,
    spineDuotone: <SpineDuotone />
};

export const allFontAwesomeIcons = Object.keys({
    ...fontAwesomeIconList,
    ...customKitIcons
}).sort() as SvgIconType[];

// Types
type SvgIconProps = Omit<FontAwesomeIconProps, 'icon'> & {
    icon: SvgIconType | CustomSVGIconType;
} & Expand<VariantProps<typeof svgIconCVA>>;

// Don't include the CSS.
config.autoAddCss = false;

export const SvgIcon = (props: SvgIconProps) => {
    const { className, icon, color, style = {}, ...rest } = props;

    // Remove the `width` style coming from the imported SVG (while still allowing it to be overridden by a parent component).
    // This allows the SVG to be scaled in the CSS without using !important.
    if (!style.height) {
        style.height = '';
    }
    if (!style.width) {
        style.width = '';
    }

    // First check to see if the icon is a custom icon.
    // Custom Duotone icons are not supported by FontAwesome yet, so we have to make our own.
    if (icon in customKitIcons) {
        return cloneElement(customKitIcons[icon as CustomSVGIconType], {
            'aria-hidden': 'true',
            'data-testid': 'svg-icon',
            className: cx(svgIconCVA({ color }), className),
            style,
            ...rest
        });
    }

    if (icon in fontAwesomeIconList) {
        return (
            <FontAwesomeIcon
                className={cx(svgIconCVA({ color }), className)}
                data-testid='svg-icon'
                icon={fontAwesomeIconList[icon as SvgIconType] as IconProp}
                style={style}
                {...rest}
            />
        );
    }

    console.warn(`The icon "${icon}" is not imported.`);
    return null;
};
