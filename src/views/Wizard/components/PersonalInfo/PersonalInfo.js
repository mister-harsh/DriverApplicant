import React, { useState,useEffect   } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Typography, Grid, Button, ButtonGroup, Divider,TextField } from '@material-ui/core';
import { DatePicker } from '@material-ui/pickers';
import { Formik } from 'formik';
import * as Yup from 'yup';
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
  inputBg:{
      backgroundColor: theme.palette.white
  },
  heading: {
    marginBottom: '15px',
    fontWeight:'400'
  },
  heading2: {
    fontWeight:'400',
    [theme.breakpoints.down('xs')]: {
        marginBottom: '15px',
      }
  },
  divider: {
    margin: theme.spacing(2.5, 0),
    backgroundColor: '#e3e3e3'
    // margin: '5px 0px',
  },
  gridRow:{
    marginBottom:theme.spacing(2)
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
  next: {
    marginRight:'15px',
    marginTop:'10px'
  },
  finishLater: {
    backgroundColor: theme.palette.yellow,
    color: theme.palette.white,
    marginTop:'10px'
  },

}));

const PersonalInfo = props => {
  const { className, ...rest } = props;
  const [value, setValue] = React.useState(0);
  const [selectedDate, handleDateChange] = useState(new Date());
  const classes = useStyles();


  useEffect(() => {
    let mounted = true;

    if (mounted) {
      // alert('ComponentDidMount')
    }

    return () => {
      mounted = false;
    };
  }, []);



  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  const loginSchema = Yup.object().shape({
    lastName: Yup.string()
      .required('Please enter the last name.'),
    // password: Yup.string()
    //   .min(8)
    //   .max(16)
    //   .required('Please enter the Password.')
  });

    const handleSubmitt = async values => {
    await new Promise(resolve => setTimeout(resolve, 500));
    // dispatch(login(values));
    alert(JSON.stringify(values));
    // router.history.push('/');
    
  }



  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Typography component="h4" className={classes.heading} variant="h4">
          DRIVER EMPLOYMENT APPLICATION
        </Typography>


        <Formik
        initialValues={{
          lastName: '',
          firstName: '',
          middlename:'',
          socialNo:'',
          phoneNo:'',
          email:'',
          dob:'',

        }}
        onSubmit={handleSubmitt}
        validationSchema={loginSchema}>
        {props => {
          const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset
          } = props;
          return (
            <form
              className={clsx(classes.root, className)}
              onSubmit={handleSubmit}>
             


             <Grid container spacing={3} className={classes.gridRow}>
            <Grid item xs={12} sm={6} md={3} lg={3}>

            <TextField
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  type="text"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.lastName}
                  classes={{root: classes.inputBg}}
                  fullWidth={true}
                  helperText={
                    errors.lastName && touched.lastName ? errors.lastName : null
                  }
                  className={
                    errors.lastName && touched.lastName
                      ? 'text-input error'
                      : 'text-input'
                  }
                  fullWidth
                  variant="outlined"
                />
              
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <TextField
                id="firstName"
                name="firstName"
                label="First Name"
                type="text"
                fullWidth={true}
                variant="outlined"
                classes={{root: classes.inputBg}}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <TextField
                id="middleName"
                name="middleName"
                label="Middle Name"
                type="text"
                fullWidth={true}
                variant="outlined"
                classes={{root: classes.inputBg}}
              />
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <TextField
                id="socialNumber"
                name="socialNumber"
                label="Social Security Number"
                type="text"
                fullWidth={true}
                variant="outlined"
                classes={{root: classes.inputBg}}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <TextField
                id="phoneNumber"
                name="phoneNumber"
                label="Phone Number"
                type="text"
                fullWidth={true}
                variant="outlined"
                classes={{root: classes.inputBg}}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <TextField
                id="emailId"
                name="emailId"
                label="e-mail"
                type="text"
                fullWidth={true}
                variant="outlined"
                classes={{root: classes.inputBg}}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <DatePicker
                fullWidth={true}
                inputVariant="outlined"
                label="Birth Date"
                format="MM/DD/YYYY"
                placeholder="10/10/2018"
                value={selectedDate}
                onChange={date => handleDateChange(date)}
              />
            </Grid>
          </Grid>
          <Divider className={classes.divider} />

          <Typography component="h4" className={classes.heading2} variant="h4">
            Please provide residency history totaling 3 years.
          </Typography>

          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <TextField
                id="lastName"
                name="lastName"
                label="Current Street Address"
                type="text"
                fullWidth={true}
                variant="outlined"
                classes={{root: classes.inputBg}}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={2} lg={2}>
              <TextField
                id="firstName"
                name="firstName"
                label="State"
                type="text"
                fullWidth={true}
                variant="outlined"
                classes={{root: classes.inputBg}}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={2} lg={2}>
              <TextField
                id="city"
                name="city"
                label="City"
                type="text"
                fullWidth={true}
                variant="outlined"
                classes={{root: classes.inputBg}}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={1} lg={1}>
              <TextField
                id="city"
                name="city"
                label="City"
                type="text"
                fullWidth={true}
                variant="outlined"
                classes={{root: classes.inputBg}}
              />
            </Grid>

            <Grid
              className={classes.residenceConatiner}
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}>
              <Typography
                component="h6"
                className={classes.residenceHeading}
                variant="h6">
                Residence
              </Typography>
              <div className={classes.residenceBody}>
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
                  <Grid item xs={12} sm={6} md={3} lg={2}>
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
                  <Grid item xs={12} sm={6} md={3} lg={2}>
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
              </div>
            </Grid>
          </Grid>
          <Button type="submit" disabled={isSubmitting} className={classes.next}  variant="contained" color="secondary">
            Next
          </Button>
          <Button className={classes.finishLater} variant="contained" >
            Stop &amp; Finish Later
          </Button>

            </form>
          );
        }}
      </Formik>














        <form>
          
        </form>
    </div>
  );
};

PersonalInfo.propTypes = {
  className: PropTypes.string
};

PersonalInfo.defaultProps = {};

export default PersonalInfo;
