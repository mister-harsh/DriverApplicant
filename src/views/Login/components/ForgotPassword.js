/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import validate from 'validate.js';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
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
import { login } from 'actions';

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
  const [showPassword, setShowPassword] = useState(false);

  const registerSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .required('Please enter the Email.'),
    password: Yup.string()
      .min(8)
      .max(16)
      .required('Please enter the Password.')
  });

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <React.Fragment>
      <Formik
        initialValues={{
          email: '',
        }}
        onSubmit={async values => {
          await new Promise(resolve => setTimeout(resolve, 500));
          // dispatch(createGraph(values));
          router.history.push('/');
          console.log(values);
        }}
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

              </div>
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
