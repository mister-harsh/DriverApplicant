/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import validate from 'validate.js';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  TextField,
  FormHelperText,
  Link,
  Paper,
  Typography,
  Checkbox,
  Box
} from '@material-ui/core';
import { Formik } from 'formik';
import * as Yup from 'yup';
import useRouter from 'utils/useRouter';
import { registerAuthPost } from 'actions';

const useStyles = makeStyles(theme => ({
  root: {},
  fields: {
    margin: theme.spacing(-1),
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      flexGrow: 1,
      margin: theme.spacing(1)
    }
  },
  errorText:{
    color:'red',
    textAlign:'center',
    marginTop:'8px',
    marginBottom:'0'
  },
  submitButton: {
    marginTop: theme.spacing(2),
    width: '100%'
  },
  showPassword: {
    width: '100%',
    cursor: 'pointer'
  },
  clause: {
    backgroundColor: '#d9d9d9',
    padding: theme.spacing(2)
  },
  body2: {
    lineHeight: theme.spacing(2.5) + 'px'
  },
  agreeCheckbox:{
    padding: '0 10px 0 0'
  },
  signature:{
    cursor:'pointer',
    color: theme.palette.error.main
  },
}));

const CreatePasswordForm = props => {
  const { className,handleOpenSignature, ...rest } = props;

  const classes = useStyles();
  const router = useRouter();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [showConformPassword, setShowConformPassword] = useState(false);
  const [state, setState] = React.useState({
    isAgreed: false,
  });

  const regDetails  = useSelector(
    state => state.auth
  );


  const registerSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .required('Please enter the Email.'),
    password: Yup.string()
      .min(8)
      .max(16)
      .required('Please enter the Password.'),
    conformPassword: Yup.string()
      .required('Please conform the Password.')
      .when("password", {
        is: val => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("password")],
          "Both password need to be the same"
        )
    })
  });

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };
  const handleConformPasswordToggle = () => {
    setShowConformPassword(!showConformPassword);
  };


  // const handleStateChange = (event) => {
  //   const name = event.target.name;
  //   setState({
  //     ...state,
  //     [name]: event.target.value,
  //   });
  // };

  const handleCheckboxChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handleSubmitt =  values => {

    const data = {
      username:values.email,
      password:values.password
    }
    alert(JSON.stringify(values))

     dispatch(registerAuthPost(data));
    
  }

  if(regDetails.isRegistered){
    router.history.push('/wizard');
  }

  return (
    <React.Fragment>
      <Formik
        initialValues={{
          email: '',
          password: '',
          conformPassword:'',
        }}
        onSubmit={handleSubmitt}
        validationSchema={registerSchema}>
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
              <div className={classes.fields}>
                <TextField
                  id="email"
                  label="Email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.email}
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

                <TextField
                  id="password"
                  name="password"
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.password}
                  helperText={
                    errors.password && touched.password ? errors.password : null
                  }
                  className={
                    errors.password && touched.password
                      ? 'text-input error'
                      : 'text-input'
                  }
                  variant="outlined"
                />

                <Link
                  color="secondary"
                  underline="always"
                  variant="subtitle2"
                  className={classes.showPassword}
                  onClick={handlePasswordToggle}>
                  {showPassword ? 'Hide Password' : 'Show Password'}
                </Link>

                <TextField
                  id="conformPassword"
                  name="conformPassword"
                  label="Conform Password"
                  type={showConformPassword ? 'text' : 'password'}
                  value={values.conformPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.conformPassword}
                  helperText={
                    errors.password && touched.conformPassword ? errors.conformPassword : null
                  }
                  className={
                    errors.conformPassword && touched.conformPassword
                      ? 'text-input error'
                      : 'text-input'
                  }
                  variant="outlined"
                />

                <Link
                  color="secondary"
                  underline="always"
                  variant="subtitle2"
                  className={classes.showPassword}
                  onClick={handleConformPasswordToggle}>
                  {showConformPassword ? 'Hide Password' : 'Show Password'}
                </Link>

                <Paper className={classes.clause} elevation={3}>
                  <Typography
                    classes={{ body2: classes.body2 }}
                    color="inherit"
                    variant="subtitle1">
                    <Checkbox
                      className={classes.agreeCheckbox}
                      name='isAgreed'
                      checked={state.isAgreed}
                      onChange={handleCheckboxChange}
                      color="secondary"
                      inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                    Please check this box if you consent to providing an
                    electronic signature (rather than a handwritten signature)
                    and also consent to receiving electronic notifications per
                    the <Box component='span' className={classes.signature} onClick={handleOpenSignature}> electronic signature details</Box>, which I have read and
                    understand.
                  </Typography>
                </Paper>
              </div>

              {regDetails.isRegistered == false && <Typography
            color="inherit"
            className={classes.errorText}
            align='center'
            variant="body1"
            gutterBottom>
            {regDetails.registerStatusMessage}
          </Typography>}
            {state.isAgreed &&  <Button
                type="submit"
                className={classes.submitButton}
                variant="contained"
                color="primary"
                size="large"
                disabled={isSubmitting}>
                Save Credentials &amp; Sign in
              </Button>}
            </form>
          );
        }}
      </Formik>
    </React.Fragment>
  );
};

CreatePasswordForm.propTypes = {
  className: PropTypes.string
};

export default CreatePasswordForm;
