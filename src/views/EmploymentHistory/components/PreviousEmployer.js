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
  Checkbox
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
const useStyles = makeStyles(theme => ({
  root: {},
  inputBg: {
    backgroundColor: theme.palette.white
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
    fontStyle: 'italic',
    fontSize: '19px'
  },
  divider: {
    // margin: theme.spacing(1, 0),
    backgroundColor: '#e3e3e3'
    // margin: '5px 0px',
  },
  dividerTwo: {
    backgroundColor: '#afafaf'
  },
  dividerThree: {
    backgroundColor: theme.palette.secondary.main
    // marginTop: theme.spacing(2.5)
  },
  dangerText: {
    color: theme.palette.error.light,
    marginTop: '5px'
  },
  inlineP: {
    display: 'inline-flex'
  },
  inlineRadio: {
    flexDirection: 'row',
    verticalAlign: 'middle',
    marginLeft: '10px'
  },
  multiTextRadio: {
    marginLeft: theme.spacing(2),
    verticalAlign: 'text-top'
  },
  gridRow: {
    marginBottom: theme.spacing(2)
  },
  gridPadding: {
    padding: theme.spacing(2.5, 0, 1.2, 0)
  },
  addJobContainer:{
      textAlign:'center'
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
  unorderedList: {
    padding: theme.spacing(1, 2)
  },
  residenceBody: {
    border: '1px solid #ddd',
    borderRadius: '3px',
    padding: theme.spacing(2)
  },
  residenceConatiner: {
    position: 'relative'
  },

  residenceHeading: {
    position: 'absolute',
    top: '-11px',
    color: '#818181'
  },
  prevEmp:{
      borderTop:'1px solid #ddd'
  }
}));

const PreviousEmployer = props => {
  const { className, ...rest } = props;
  const [value, setValue] = React.useState(0);
  const [selectedDate, handleDateChange] = useState(new Date());
  const classes = useStyles();

  const [radioValue, setRadioValue] = React.useState('female');

  const handleRadioChange = event => {
    setRadioValue(event.target.value);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <React.Fragment>
          <Box className={classes.prevEmp} component="div">
        <Box className={classes.container} component="div">
          <Typography
            component="h4"
            className={classes.heading2}
            color="secondary"
            variant="h4">
            Employee 2
          </Typography>
          <Grid container spacing={3} className={classes.gridRow}>
            <Grid item xs={12} sm={6} md={3} lg={3}>
                <TextField
                    id="EmpName"
                    name="EmpName"
                    label="Employer Name / Truck Driving School"
                    type="text"
                    fullWidth={true}
                    variant="outlined"
                    classes={{ root: classes.inputBg }}
                //   value={values.password}
                //   onChange={handleChange}
                //   onBlur={handleBlur}
                //   error={errors.password}
                //   helperText={
                //     errors.password && touched.password ? errors.password : null
                //   }
                //   className={
                //     errors.password && touched.password
                //       ? 'text-input error'
                //       : 'text-input'
                //   }
              />
            </Grid>
            <Grid item xs={12} sm={6} md={2} lg={2}>
              <TextField
                id="empPhoneNumber"
                name="empPhoneNumber"
                label="Phone Number"
                type="text"
                fullWidth={true}
                variant="outlined"
                classes={{ root: classes.inputBg }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={2} lg={2}>
              <TextField
                id="empAddress"
                name="empAddress"
                label="Address"
                type="text"
                fullWidth={true}
                variant="outlined"
                classes={{ root: classes.inputBg }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={2} lg={2}>
              <TextField
                id="empCity"
                name="empCity"
                label="City"
                type="text"
                fullWidth={true}
                variant="outlined"
                classes={{ root: classes.inputBg }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={1} lg={1}>
              <TextField
                id="empState"
                name="empState"
                label="State"
                type="text"
                fullWidth={true}
                variant="outlined"
                classes={{ root: classes.inputBg }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={1} lg={1}>
              <TextField
                id="empCountry"
                name="empCountry"
                label="Country"
                type="text"
                fullWidth={true}
                variant="outlined"
                classes={{ root: classes.inputBg }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={1} lg={1}>
              <TextField
                id="empZip"
                name="empZip"
                label="Zip"
                type="text"
                fullWidth={true}
                variant="outlined"
                classes={{ root: classes.inputBg }}
              />
            </Grid>
          </Grid>

          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <TextField
                id="position"
                name="position"
                label="Position Held"
                type="text"
                fullWidth={true}
                variant="outlined"
                classes={{ root: classes.inputBg }}
              />
            </Grid>

            <Grid
              className={classes.residenceConatiner}
              item
              xs={12}
              sm={12}
              md={5}
              lg={5}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                  <DatePicker
                    clearable
                    views={['month']}
                    fullWidth={true}
                    inputVariant="outlined"
                    label="Month"
                    // format="YYYY"
                    placeholder="Month"
                    value={selectedDate}
                    onChange={date => handleDateChange(date)}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                  <DatePicker
                    clearable
                    views={['year']}
                    fullWidth={true}
                    inputVariant="outlined"
                    label="Year"
                    // format="YYYY"
                    placeholder="Year"
                    value={selectedDate}
                    onChange={date => handleDateChange(date)}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                  <DatePicker
                    clearable
                    views={['month']}
                    fullWidth={true}
                    inputVariant="outlined"
                    label="Month"
                    // format="YYYY"
                    placeholder="Month"
                    value={selectedDate}
                    onChange={date => handleDateChange(date)}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                  <DatePicker
                    clearable
                    views={['year']}
                    fullWidth={true}
                    inputVariant="outlined"
                    label="Year"
                    // format="YYYY"
                    placeholder="Year"
                    value={selectedDate}
                    onChange={date => handleDateChange(date)}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6} md={2} lg={2}>
              <TextField
                id="empStatus"
                name="empStatus"
                label="Employment Status"
                type="text"
                fullWidth={true}
                variant="outlined"
                classes={{ root: classes.inputBg }}
              />
            </Grid>
          </Grid>
        </Box>
        <Divider className={classes.dividerThree} />

        <Box className={classes.container} component="div">
          <div>
            <Typography
              component="p"
              className={classes.inlineP}
              variant="subtitle1">
              > Were you subject to the FMCSRs while employed:
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
          </div>

          <div>
            <Typography
              component="p"
              className={classes.inlineP}
              variant="subtitle1">
              > Was your job designated as a safety-sensitive function in any
              DOT-regulated
              <br /> mode subject to the drug and alcohol testing requirements
              of 49 CFR Part 40:
            </Typography>
            <FormControl
              component="fieldset"
              className={clsx(classes.inlineRadio, classes.multiTextRadio)}>
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
          </div>
          <Typography
            component="p"
            className={classes.dangerText}
            variant="subtitle1">
            If you held a regulated position with PHMSA, FRA, FTA, FAA or U. S.
            Coast Guard, select YES on the above question.
          </Typography>

          <Grid
            className={classes.gridPadding}
            container
            spacing={3}
            alignItems="center">
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <Typography
                component="p"
                className={classes.inlineP}
                variant="subtitle1">
                > Or account for period of previous 3 years if not employed.
              </Typography>
            </Grid>

            <Grid
              className={classes.residenceConatiner}
              item
              xs={12}
              sm={12}
              md={5}
              lg={5}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                  <DatePicker
                    clearable
                    views={['month']}
                    fullWidth={true}
                    inputVariant="outlined"
                    label="Month"
                    // format="YYYY"
                    placeholder="Month"
                    value={selectedDate}
                    onChange={date => handleDateChange(date)}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                  <DatePicker
                    clearable
                    views={['year']}
                    fullWidth={true}
                    inputVariant="outlined"
                    label="Year"
                    // format="YYYY"
                    placeholder="Year"
                    value={selectedDate}
                    onChange={date => handleDateChange(date)}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                  <DatePicker
                    clearable
                    views={['month']}
                    fullWidth={true}
                    inputVariant="outlined"
                    label="Month"
                    // format="YYYY"
                    placeholder="Month"
                    value={selectedDate}
                    onChange={date => handleDateChange(date)}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                  <DatePicker
                    clearable
                    views={['year']}
                    fullWidth={true}
                    inputVariant="outlined"
                    label="Year"
                    // format="YYYY"
                    placeholder="Year"
                    value={selectedDate}
                    onChange={date => handleDateChange(date)}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <TextField
                id="empStatus"
                name="empStatus"
                label="Employment Status"
                type="text"
                fullWidth={true}
                variant="outlined"
                classes={{ root: classes.inputBg }}
              />
            </Grid>
          </Grid>
        </Box>
        <Divider className={classes.divider} />
        </Box>
    </React.Fragment>
  );
};

PreviousEmployer.propTypes = {
  className: PropTypes.string
};

PreviousEmployer.defaultProps = {};

export default PreviousEmployer;
