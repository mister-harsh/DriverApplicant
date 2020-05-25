/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import validate from 'validate.js';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { Button, TextField, FormHelperText, Link, Typography, CircularProgress  } from '@material-ui/core';
import { Formik } from 'formik';
import * as Yup from 'yup';
import useRouter from 'utils/useRouter';
// import { login } from 'actions';
import {loginAuthPost, commonErrorClose} from 'actions'
import ModalCustom from 'components/ModalCustom'; 


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
    marginTop: theme.spacing(1.2),
    width: '100%'
  },
  showPassword: {
    width:'100%',
    cursor:'pointer'
  },
  buttonWrapper: {
    position: 'relative',
  },
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -5,
    marginLeft: -12,
  },
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

  const authState  = useSelector(
    state => state.auth
  );



  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .required('Please enter the Email.'),
    password: Yup.string()
      // .min(8)
      // .max(16)
      .required('Please enter the Password.')
  });


  const handleSubmitt = async values => {
    await new Promise(resolve => setTimeout(resolve, 500));
    const data = {
      userName:values.email,
      password:values.password
    }

    dispatch(loginAuthPost(data));



    
    // alert(JSON.stringify(data));
    // router.history.push('/wizard');
    
  }

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword)
  }

  const handleCloseError = () => {
    dispatch(commonErrorClose());
  }
  

  console.log(authState.isLoggedIn);


  if(authState.isLoggedIn == true ){
    router.history.push('/wizard');
  }


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
             {authState.isLoggedIn == false && <Typography
            color="inherit"
            className={classes.errorText}
            align='center'
            variant="body1"
            gutterBottom>
            {authState.loginStatusMessage}
          </Typography>}

            

              <div className={classes.buttonWrapper}>
              <Button
                type="submit"
                className={classes.submitButton}
                variant="contained"
                color="primary"
                size="large"
                disabled={isSubmitting}>
                Sign in
              </Button>
        {isSubmitting && <CircularProgress size={24} className={classes.buttonProgress} />}
      </div>
            </form>
          );
        }}
      </Formik>

      <ModalCustom
        title="Error"
        open={authState.errorStatus}
        close={handleCloseError}
        // submitButton={}
        actions={false}
        backDrop={true}
        width="sm">

       <Typography
              color="inherit"
              variant="subtitle1"
              className={classes.createTitle}>
              {authState.errorMessage}
            </Typography>

           
          
      </ModalCustom>
    </React.Fragment>
  );
};

LoginForm.propTypes = {
  className: PropTypes.string
};

export default LoginForm;
