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
  Checkbox
} from '@material-ui/core';
import { Formik } from 'formik';
import * as Yup from 'yup';
import useRouter from 'utils/useRouter';
import { forgetPasswordAuthPost } from 'actions';

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
  submitButton: {
    marginTop: theme.spacing(2),
    width: '100%'
  },
  errorText:{
    color:'red',
    textAlign:'center',
    marginTop:'8px',
    marginBottom:'0'
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

const ForgotPassword = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const router = useRouter();
  const dispatch = useDispatch();

  const forgetState  = useSelector(
    state => state.auth
  );


  const forgetPasswordSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .required('Please enter the Email.'),
  });


  const handleSubmitt = (values) =>{


    const data ={
      Username: values.email
    }

          dispatch(forgetPasswordAuthPost(data));
          // router.history.push('/');
  }

  console.log(forgetState.forgetPassStatusMessage);
  

  return (
    <React.Fragment>
      <Formik
        initialValues={{
          email: '',
        }}
        onSubmit={handleSubmitt}
        validationSchema={forgetPasswordSchema}>
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

              </div>

            {forgetState.isLinkSent == false && <Typography
            color="inherit"
            className={classes.errorText}
            align='center'
            variant="body1"
            gutterBottom>
            {forgetState.forgetPassStatusMessage}
           </Typography>}
              <Button
                type="submit"
                className={classes.submitButton}
                variant="contained"
                color="secondary"
                size="medium"
                disabled={isSubmitting}>
                Send Reset Link
              </Button>
            </form>
          );
        }}
      </Formik>
    </React.Fragment>
  );
};

ForgotPassword.propTypes = {
  className: PropTypes.string
};

export default ForgotPassword;
