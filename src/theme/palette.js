import { colors } from '@material-ui/core';

const white = '#FFFFFF';
const black = '#000000';
const darkBlue = '#0d3859'
const yellow = '#f3ba00';

export default {
  black,
  white,
  yellow,
  darkBlue,
  primary: {
    contrastText: white,
    dark: '#12568f',
    main: darkBlue,
    light: '#12568f'
  },
  secondary: {
    contrastText: white,
    // danger:'#f00',
    // success:'#49C417',
    dark: '#12568f',
    main: '#428BCA',
    light: '#428BCA'
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400]
  },
  success:{
    contrastText: white,
    dark: colors.green[900],
    main: colors.green[600],
    light: colors.green[400]
  },
  text: {
    primary: '#333333',
    secondary: colors.blueGrey[600],
    link: colors.blue[600]
  },
  link: colors.blue[800],
  icon: colors.blueGrey[600],
  background: {
    default: '#F4F6F8',
    paper: white
  },
  divider: colors.grey[200]
};
