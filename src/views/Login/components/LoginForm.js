/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import validate from 'validate.js';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { Button, TextField, FormHelperText, Link } from '@material-ui/core';
import { Formik } from 'formik';
import * as Yup from 'yup';
import useRouter from 'utils/useRouter';
// import { login } from 'actions';

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
    width:'100%',
    cursor:'pointer'
  }
}));

const LoginForm = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const router = useRouter();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false)


  useEffect(() => {
    let mounted = true;

    if (mounted) {
      // alert('ComponentDidMount')
    }

    return () => {
      mounted = false;
    };
  }, []);


  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .required('Please enter the Email.'),
    password: Yup.string()
      .min(8)
      .max(16)
      .required('Please enter the Password.')
  });


  const credentials = useSelector(
    state => state.session.credentials
  );

  const handleSubmitt = async values => {
    await new Promise(resolve => setTimeout(resolve, 500));
    // dispatch(login(values));
    alert(JSON.stringify(values));
    router.history.push('/');
    
  }

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword)
  }
  
console.log(credentials);

  return (
    <React.Fragment>
      <Formik
        initialValues={{
          email: '',
          password: ''
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
                  onClick={handlePasswordToggle}
                >
                    
                  {showPassword ? 'Hide Password' : 'Show Password'}
                </Link>
              </div>
              <Button
                type="submit"
                className={classes.submitButton}
                variant="contained"
                color="primary"
                size="large"
                disabled={isSubmitting}>
                Sign in
              </Button>
            </form>
          );
        }}
      </Formik>
    </React.Fragment>
  );
};

LoginForm.propTypes = {
  className: PropTypes.string
};

export default LoginForm;
