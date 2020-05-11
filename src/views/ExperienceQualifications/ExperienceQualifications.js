import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Box,
  Typography,
  Grid,
  Button,
  ButtonGroup,
  Divider,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  InputLabel,
  Select,
  MenuItem
} from '@material-ui/core';
import { DatePicker } from '@material-ui/pickers';
// import {
//     Grid,
//     AppBar,
//     Tabs,
//     Tab,
//     Typography,
//     Box,
//     Divider,
//     TextField,
//     Button
//   } from '@material-ui/core';
//   import { DatePicker } from '@material-ui/pickers';
import {
  EquipmentTable,
  AccidentTable,
  VoilationTable,
  LicenseInfo
} from './components';

const useStyles = makeStyles(theme => ({
  root: {},
  fullWidth: {
    marginLeft: '-24px',
    marginRight: '-24px',
    paddingLeft: '24px !important',
    paddingRight: '24px !important'
  },
  inputBg: {
    backgroundColor: theme.palette.white
  },
  backTextColor: {
    color: theme.palette.black
  },
  container: {
    padding: theme.spacing(2, 0)
  },
  heading: {
    marginBottom: '15px',
    fontWeight: '500'
  },
  heading2: {
    fontWeight: '700',
    marginBottom: '15px',
    fontSize: '19px'
  },
  unorderedList: {
    padding: theme.spacing(1, 2)
  },
  divider: {
    // margin: theme.spacing(1, 0),
    backgroundColor: '#e3e3e3',
    marginLeft: '-24px',
    marginRight: '-24px',
    paddingLeft: '24px !important',
    paddingRight: '24px !important'
  },
  dividerTwo: {
    backgroundColor: '#afafaf',
    marginLeft: '-24px',
    marginRight: '-24px',
    paddingLeft: '24px !important',
    paddingRight: '24px !important'
  },

  inlineP: {
    display: 'inline-flex'
  },
  inlineRadio: {
    flexDirection: 'row',
    verticalAlign: 'middle',
    marginLeft: '10px'
  },
  next: {
    marginRight: '15px',
    marginTop: '10px'
  },
  finishLater: {
    backgroundColor: theme.palette.yellow,
    color: theme.palette.white,
    marginTop: '10px'
  },
  // Table Classes start

  tableHead: {
    backgroundColor: '#f4f6f8'
  },
  tableBorder: {
    border: '1px solid #ddd'
  },
  formControl: {
    verticalAlign: 'middle',
    width: '100%'
  },
  dateDropdown: {
    width: '85px'
  },
  inlineSpan: {
    margin: '0 10px',
    padding: '15px 0'
  },
  dayPickContainer: {
    display: 'inline-flex'
  },
  fixedSelect: {
    width: '165px'
  },
  greyBG: {
    backgroundColor: '#e1e2dd'
  },
  appCertification:{
    padding:'0'
  },
  signature: {
    backgroundColor: theme.palette.error.light,
    marginTop:'15px'
  }
}));

const ExperienceQualifications = props => {
  const { className, isReview, ...rest } = props;
  const [value, setValue] = React.useState(0);
  const [date, setDate] = React.useState('');
  const [selectedDate, handleDateChange] = useState(new Date());
  const classes = useStyles();

  const [radioValue, setRadioValue] = React.useState('female');

  const handleRadioChange = event => {
    setRadioValue(event.target.value);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleDate2Change = event => {
    setDate(event.target.value);
  };

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      {isReview == true ? (
        ''
      ) : (
        <Typography component="h4" className={classes.heading} variant="h4">
          EXPERIENCE &amp; QUALIFICATIONS
        </Typography>
      )}

      <Divider className={classes.divider} />

      <Box className={classes.container} component="div">
        <Typography
          component="p"
          className={classes.inlineP}
          variant="subtitle1">
          Driving experience in the last 3 years?
        </Typography>
        <FormControl
          component="fieldset"
          className={clsx(classes.inlineRadio, classes.radioField)}>
          <RadioGroup
            className={classes.inlineRadio}
            aria-label="radio"
            name="gender1"
            value={radioValue}
            onChange={handleRadioChange}>
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
      </Box>

      {/* <Divider className={classes.dividerTwo} /> */}

      <form>
        {/* <CurrentEmployer/>
        <PreviousEmployer /> */}

        <EquipmentTable />

        {/* <Divider className={classes.divider} /> */}

        <Box className={classes.container} component="div">
          <Typography
            component="p"
            className={classes.inlineP}
            variant="subtitle1">
            In the last 3 years, have you been in an Accident?
          </Typography>
          <FormControl
            component="fieldset"
            className={clsx(classes.inlineRadio, classes.radioField)}>
            <RadioGroup
              className={classes.inlineRadio}
              aria-label="radio"
              name="gender1"
              value={radioValue}
              onChange={handleRadioChange}>
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Box>

        <AccidentTable />

        <Box className={classes.container} component="div">
          <Typography
            component="p"
            className={classes.inlineP}
            variant="subtitle1">
            In the last 3 years, have you had any traffic convictions and/or
            forfeitures ?
          </Typography>
          <FormControl
            component="fieldset"
            className={clsx(classes.inlineRadio, classes.radioField)}>
            <RadioGroup
              className={classes.inlineRadio}
              aria-label="radio"
              name="gender1"
              value={radioValue}
              onChange={handleRadioChange}>
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Box>
        <VoilationTable />

        <Box className={classes.container} component="div">
          <Typography
            component="h4"
            className={classes.heading2}
            color="secondary"
            variant="h4">
            Current License Information
          </Typography>
          <Typography
            component="p"
            // className={classes.heading}
            variant="subtitle1">
            Section 383.21 FMCSR states: No person who operates a commercial
            motor vehicle shall at any time have more than one driver’s license.
            I certify that I do not have more than one motor vehicle license,
            the information for which is listed below.
          </Typography>
        </Box>

        <LicenseInfo />

        <Box className={classes.container} component="div">
          <Typography
            component="p"
            className={classes.inlineP}
            variant="subtitle1">
            A. Have you ever been denied a license, permit, or privilege to
            operate a motor vehicle?
          </Typography>
          <FormControl
            component="fieldset"
            className={clsx(classes.inlineRadio, classes.radioField)}>
            <RadioGroup
              className={classes.inlineRadio}
              aria-label="radio"
              name="gender1"
              value={radioValue}
              onChange={handleRadioChange}>
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Box>
        <Box
          className={clsx(classes.container, classes.greyBG, classes.fullWidth)}
          component="div">
          <Typography
            component="p"
            className={classes.inlineP}
            variant="subtitle1">
            B. Has any license, permit or privilege ever been suspended or
            revoked?
          </Typography>
          <FormControl
            component="fieldset"
            className={clsx(classes.inlineRadio, classes.radioField)}>
            <RadioGroup
              className={classes.inlineRadio}
              aria-label="radio"
              name="gender1"
              value={radioValue}
              onChange={handleRadioChange}>
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Box>

        <Box className={classes.container} component="div">
          <Typography
            component="p"
            className={classes.backTextColor}
            variant="h5">
            I understand that information I provide regarding current and/or
            previous employers may be used, and those employer(s) will be
            contacted, for the purpose of investigating my safety performance
            history as required by 49 CFR 391.23 (d) and (e). I understand that
            I have the right to:
          </Typography>

          <ul className={classes.unorderedList}>
            <li>
              <Typography
                component="p"
                // className={classes.heading}
                variant="subtitle1">
                Review information provided by current previous employers;
              </Typography>
            </li>
            <li>
              <Typography
                component="p"
                // className={classes.heading}
                variant="subtitle1">
                Have errors in the information corrected by previous employers
                and for those previous employers to re-send the corrected
                information to the prospective employer; and
              </Typography>
            </li>
            <li>
              <Typography
                component="p"
                // className={classes.heading}
                variant="subtitle1">
                Have a rebuttal statement attached to the alleged erroneous
                information if the previous employer(s) and I cannot agree on
                the accuracy of the information.
              </Typography>
            </li>
          </ul>
        </Box>

        <Box className={clsx(classes.container, classes.appCertification) } component="div">
          <Typography
            component="h4"
            className={classes.heading2}
            color="secondary"
            variant="h4">
            Applicant Certification
          </Typography>
          <Typography
            component="p"
            // className={classes.heading}
            variant="subtitle1">
            This certifies that this application was completed by me, and that
            all entries on it and information in it are true and complete to the
            best of my knowledge.
          </Typography>

          <Button
            className={classes.signature}
            variant="contained"
            color="secondary">
            Electronic Signature
          </Button>
        </Box>

        <Divider className={classes.divider} />

        {isReview == true ? (
          ''
        ) : (
          <React.Fragment>
            <Button className={classes.finishLater} variant="contained">
              Stop &amp; Finish Later
            </Button>
          </React.Fragment>
        )}
      </form>
    </div>
  );
};

ExperienceQualifications.propTypes = {
  className: PropTypes.string
};

ExperienceQualifications.defaultProps = {};

export default ExperienceQualifications;
