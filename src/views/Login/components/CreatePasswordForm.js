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
  Checkbox,
  Box
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

const CreatePasswordForm = props => {
  const { className,handleOpenSignature, ...rest } = props;

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
          password: ''
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

                <Paper className={classes.clause} elevation={3}>
                  <Typography
                    classes={{ body2: classes.body2 }}
                    color="inherit"
                    variant="subtitle1">
                    <Checkbox
                      className={classes.agreeCheckbox}
                      color="primary"
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
              {/* <Button
                type="submit"
                className={classes.submitButton}
                variant="contained"
                color="primary"
                size="large"
                disabled={isSubmitting}>
                Sign in
              </Button> */}
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
