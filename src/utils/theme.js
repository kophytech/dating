import React from 'react';
import {Platform, Dimensions} from 'react-native';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';

// import AntIcon from 'react-native-vector-icons/AntDesign';
// import FontistoIcon from 'react-native-vector-icons/Fontisto';
// import MatComIcon from 'react-native-vector-icons/MaterialCommunityIcons';
// import IonIcon from 'react-native-vector-icons/Ionicons';
// import FeatherIcon from 'react-native-vector-icons/Feather';
// import MatIcons from 'react-native-vector-icons/MaterialIcons';

//CONSTANTS USED IN APP
export const PLATFORM = Platform.OS;
export const WP = widthPercentageToDP;
export const HP = heightPercentageToDP;
export const MOBILE_WIDTH = Dimensions.get('window').width;
export const MOBILE_HEIGHT = Dimensions.get('window').height;
export const RADIUS = 3;
export const SPACING = 12;
export const SPINNER_SIZE = 32;
export const BUTTON_HEIGHT = 5;
export const INPUT_HEIGHT = 6;
export const SCREEN_ICON_SIZE = 6;
export const HOME_TAB_ICON_SIZE = 6;
export const TAB_ICON_SIZE = 6;
export const NAIRA_SYSMBOL = '$';

export const IMAGE_BODY = {
  forgot: require('../asset/image/forgot.png'),
  reset: require('../asset/image/reset.png'),
  splash: require('../asset/image/splash1.jpg'),
  main: require('../asset/image/chat.png'),
  upload: require('../asset/image/upload.png'),
};

export const COLOR = {
  BgColor: '#5080FA',
  green: '#2EB66E',
  whiteColor: '#ffffff',
  primary: '#F88255',
  primaryOrange: '#E3562A',
  offWhite: '#E5E5E5',
  offBlack: '#78746D',
  borderColor: 'gray',
  blackColor: '#000000',
  lightGrey: '#BEBAB3',
  deepBlue: '#2E3A59',
  headerBlack: '#3C3A36',
  setup2: '#E3DDDD',
  offblue: '#F3F8FF',
  Blue2: '#2D9CDB',
  inputbackColor: '#F3F3F3',
  grey: '#708097',
  brown: '#50555C',
  line: '#E1E4E8',
  secondaryWhite: '#f4f4f4',
  purple: '#763568',
  red: '#ff0e0e',
  pink: '#2EB66E',
};

//FONT SIZES USED IN APP
export const FONT_SIZES = {
  h1: 28,
  h2: 22,
  h3: 18,
  info_1: 16,
  info_2: 14,
};

//FONT SIZES USED IN APP
export const TEXT_SIZES = {
  h1: 7,
  h2: 6,
  h3: 5,
  info_1: 4,
  info_2: 3.5,
};

export const SPACING_PERCENT = 5;

// export const ONBOARD_DATA = [
//   {
//     intro_image: IMAGE.intro_1,
//     title: `Customizable Approvals`,
//     subTitle: `Build and deploy customized approval flows with our ${'\n'} intuitive interface and gain full visibility into actual spend, not just forecasted spend.`,
//     nextBtn: 'Next',
//     skipbtn: 'Skip',
//   },
//   {
//     intro_image: IMAGE.intro_2,
//     title: 'Vendor and catalog management',
//     subTitle: `Work smarter with your vendors. Conduct vendor  ${'\n'} performance analysis and manage preferred items in a  catalog for easier purchasing.`,
//     nextBtn: 'Next',
//     skipbtn: 'Skip',
//   },
//   {
//     intro_image: IMAGE.intro_3,
//     title: `Easy- to - use mobile app`,
//     subTitle: `Working on the go? Speed up purchasing requests and approvals with our user-friendly, full-function Procuring Mobile App for iOS and Android.`,
//     nextBtn: 'Next',
//     skipbtn: 'Skip',
//   },
//   {
//     intro_image: IMAGE.intro_4,
//     title: 'Purchasing workflows',
//     subTitle: `Track and analyze every stage of your purchasing journey. Easily request purchases, notify approvers, build purchase orders, receive items, and reconcile payments within the Procuring Platform.`,
//     nextBtn: 'Let’s Explore',
//   },
// ];
