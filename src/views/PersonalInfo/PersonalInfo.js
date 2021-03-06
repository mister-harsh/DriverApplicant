import React, { useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Typography,
  Grid,
  Button,
  ButtonGroup,
  Divider,
  TextField,
  FormControl,
  InputLabel,
  Select,

} from '@material-ui/core';
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
  inputBg: {
    backgroundColor: theme.palette.white
  },
  heading: {
    marginBottom: '15px',
    fontWeight: '400'
  },
  heading2: {
    fontWeight: '400',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '15px'
    }
  },
  divider: {
    margin: theme.spacing(2.5, 0),
    backgroundColor: '#e3e3e3'
    // margin: '5px 0px',
  },
  formControl:{
    width:'100%',
    backgroundColor:theme.palette.white
  },
  gridRow: {
    marginBottom: '10px'
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
    marginRight: '15px',
    marginTop: '10px'
  },
  finishLater: {
    backgroundColor: theme.palette.yellow,
    color: theme.palette.white,
    marginTop: '10px'
  }
}));

const PersonalInfo = props => {
  const { className,handleClick, ...rest } = props;
  const [value, setValue] = React.useState(0);
  const [selectedDate, handleDateChange] = useState(new Date());
  const [state, setState] = React.useState({
    stateVal: '',
    name: 'hai',
  });
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

  const handleStateChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const personalInfoSchema = Yup.object().shape({
      lastName: Yup.string()
      .required('Please enter the last name.'),
      firstName: Yup.string()
      .required('Please enter the first name.'),
      middleName: Yup.string()
      .required('Please enter the middle name.'),
      socialSecurityNo: Yup.string()
      .required('Please enter the social security number.'),
      phoneNo: Yup.string()
      .required('Please enter the phone number.'),
      email: Yup.string()
      .email('Invalid email')
      .required('Please enter the email.'),
  });

  console.log(personalInfoSchema);
  

    const handleSubmitt = async values => {
    await new Promise(resolve => setTimeout(resolve, 500));

    handleClick(1)
    // dispatch(login(values));
    alert(JSON.stringify(values));
    // router.history.push('/');
    
  }

  return (
    <div {...rest} className={clsx(classes.root, className)}>
     {props.isReview == true ? '' : <Typography component="h4" className={classes.heading} variant="h4">
        DRIVER EMPLOYMENT APPLICATION
      </Typography>}


      <Formik
        initialValues={{
          lastName: '',
          firstName: '',
          middleName:'',
          socialSecurityNo:'',
          phoneNo:'',
          email:'',
          dob: new Date(),
        }}
        onSubmit={handleSubmitt}
        validationSchema={personalInfoSchema}>
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
                  label="First Name"
                  name="firstName"
                  type="text"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.firstName}
                  classes={{root: classes.inputBg}}
                  fullWidth={true}
                  helperText={
                    errors.firstName && touched.firstName ? errors.firstName : null
                  }
                  className={
                    errors.firstName && touched.firstName
                      ? 'text-input error'
                      : 'text-input'
                  }
                  fullWidth
                  variant="outlined"
                />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>

            <TextField
                  id="middleName"
                  label="Middle Name"
                  name="middleName"
                  type="text"
                  value={values.middleName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.middleName}
                  classes={{root: classes.inputBg}}
                  fullWidth={true}
                  helperText={
                    errors.middleName && touched.middleName ? errors.middleName : null
                  }
                  className={
                    errors.middleName && touched.middleName
                      ? 'text-input error'
                      : 'text-input'
                  }
                  fullWidth
                  variant="outlined"
                />

          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3} lg={3}>

           <TextField
                  id="socialSecurityNo"
                  label="Social Security Number"
                  name="socialSecurityNo"
                  type="text"
                  value={values.socialSecurityNo}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.socialSecurityNo}
                  classes={{root: classes.inputBg}}
                  fullWidth={true}
                  helperText={
                    errors.socialSecurityNo && touched.socialSecurityNo ? errors.socialSecurityNo : null
                  }
                  className={
                    errors.socialSecurityNo && touched.socialSecurityNo
                      ? 'text-input error'
                      : 'text-input'
                  }
                  fullWidth
                  variant="outlined"
                />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>

          <TextField
                  id="phoneNo"
                  label="Phone Number"
                  name="phoneNo"
                  type="text"
                  value={values.phoneNo}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.phoneNo}
                  classes={{root: classes.inputBg}}
                  fullWidth={true}
                  helperText={
                    errors.phoneNo && touched.phoneNo ? errors.phoneNo : null
                  }
                  className={
                    errors.phoneNo && touched.phoneNo
                      ? 'text-input error'
                      : 'text-input'
                  }
                  fullWidth
                  variant="outlined"
                />
            
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
          <TextField
                  id="email"
                  label="e-mail"
                  name="email"
                  type="text"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.email}
                  classes={{root: classes.inputBg}}
                  fullWidth={true}
                  helperText={
                    errors.email && touched.email ? errors.email : null
                  }
                  className={
                    errors.email && touched.email
                      ? 'text-input error'
                      : 'text-input'
                  }
                  fullWidth
                  variant="outlined"
                />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <DatePicker
             id="dob"
             label="Birth Date"
             name="dob"
             value={values.dob}
             onChange={date => handleChange(date)}
             onBlur={handleBlur}
             error={errors.dob}
              fullWidth={true}
              helperText={
                errors.dob && touched.dob ? errors.dob : null
              }
              className={
                errors.dob && touched.dob
                  ? 'text-input error'
                  : 'text-input'
              }
              inputVariant="outlined"
              
              format="MM/DD/YYYY"
              // placeholder="10/10/2018"
             
             
            />
          </Grid>
        </Grid>
        <Divider className={classes.divider} />

        <Typography component="h4" className={classes.heading2} variant="h4">
          Please provide residency history totaling 3 years.
        </Typography>

        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} sm={6} md={2} lg={2}>
            <TextField
              id="lastName"
              name="lastName"
              label="Current Street Address"
              type="text"
              fullWidth={true}
              variant="outlined"
              classes={{ root: classes.inputBg }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2} lg={2}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel htmlFor="outlined-age-native-simple">Country</InputLabel>
              <Select
                native
                value={state.stateVal}
                onChange={handleStateChange}
                label="Country"
                inputProps={{
                  name: 'state',
                  id: 'outlined-age-native-simple'
                }}>
                <option aria-label="None" value="" />
                <option value={10}>US</option>
                <option value={20}>India</option>
                <option value={30}>AU</option>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={2} lg={2}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel htmlFor="outlined-age-native-simple">State</InputLabel>
              <Select
                native
                value={state.stateVal}
                onChange={handleStateChange}
                label="State"
                inputProps={{
                  name: 'state',
                  id: 'outlined-age-native-simple'
                }}>
                <option aria-label="None" value="" />
                <option value={10}>Kansas</option>
                <option value={20}>Wisconsin</option>
                <option value={30}>Dallas</option>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={1} lg={1}>
            <TextField
              id="city"
              name="city"
              label="City"
              type="text"
              fullWidth={true}
              variant="outlined"
              classes={{ root: classes.inputBg }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={1} lg={1}>
            <TextField
              id="city"
              name="city"
              label="Zip"
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
                    views={["year", "month"]}
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
                    views={["year"]}
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
                    views={["year", "month"]}
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
                    views={["year"]}
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
       {props.isReview == true ? '' : 
       <React.Fragment>
       <Button
          className={classes.next}
          // onClick={}
          type="submit" 
          disabled={isSubmitting}
          variant="contained"
          color="secondary">
          Next
        </Button>
        <Button className={classes.finishLater} variant="contained">
          Stop &amp; Finish Later
        </Button>
        </React.Fragment>
        }
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
