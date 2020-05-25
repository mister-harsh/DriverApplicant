import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Divider,
  Link,
  Avatar,
  Button,
  Box
} from '@material-ui/core';

import clsx from 'clsx';
import LockIcon from '@material-ui/icons/Lock';
import Grid from '@material-ui/core/Grid';
import { Page } from 'components';
import gradients from 'utils/gradients';
import { LoginForm, CreatePasswordForm, ForgotPassword } from './components';
import {getJobDetailsPost} from 'actions'
import ModalCustom from 'components/ModalCustom';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    // justifyContent: 'center',
    // paddingLeft:'50px',
    padding: theme.spacing(6, 10),
    [theme.breakpoints.down('xs')]: {
      alignItems: 'initial',
      padding: theme.spacing(2),
    }
  },
  white:{
    color:theme.palette.white
  },
  subtitle2: {
    color: '#ffffffe6'
  },
  typoColor: {
    color: '#555'
  },
  login: {
    background: 'url(/images/login-bg.jpg) no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: '50% 26%',
    [theme.breakpoints.down('sm')]: {
      backgroundPosition: '90% 26%',
    }
  },
  card: {
    // width: theme.breakpoints.values.md,
    maxWidth: '100%',
    overflow: 'unset',
    // display: 'flex',
    position: 'relative',
    backgroundColor: 'transparent',
    boxShadow: 'none',
    '& > *': {
      flexGrow: 1,
      flexBasis: '50%',
      width: '50%',
      [theme.breakpoints.down('xs')]: {
        flexBasis: '100%',
        width: '100%'
      }
    },
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column'
    }
  },
  content: {
    padding: '20px',
    paddingBottom: '15px !important',
    backgroundColor: '#fff',
    [theme.breakpoints.down('xs')]: {
      order: '2',
      padding: '10px 15px',
    }
  },
  media: {
    position: 'relative',
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    padding: theme.spacing(2.5),
    color: theme.palette.white,
    display: 'flex',
    paddingBottom: '70px',
    backgroundColor: '#0001197d',
    flexDirection: 'column',
    // justifyContent: 'flex-end',
    marginBottom: '15px',
    [theme.breakpoints.down('xs')]: {
      order: '1',
      padding: '5px 20px 15px 20px',
    }
  },
  mediaTitle: {
    marginBottom: '5px'
  },
  mediaButton: {
    position: 'absolute',
    bottom: '20px',
    width: 'max-content',
    [theme.breakpoints.down('xs')]: {
      position: 'static',
      marginTop:'5px'
    }
  },
  descPoints: {
    paddingLeft: '15px',
    marginTop: '8px'
  },
  icon: {
    backgroundImage: gradients.green,
    color: theme.palette.white,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1),
    position: 'absolute',
    top: -32,
    left: theme.spacing(3),
    height: 64,
    width: 64,
    fontSize: 32
  },
  loginForm: {
    marginTop: theme.spacing(2)
  },
  divider: {
    margin: '12px 0px 8px 0'
  },
  divider2: {
    margin: theme.spacing(1, 0),
    backgroundColor: '#b3b3b3'
  },
  person: {
    marginTop: theme.spacing(2),
    display: 'flex'
  },
  avatar: {
    marginRight: theme.spacing(2)
  },
  createTitle: {
    marginBottom: '15px'
  },
  firstLink: {
    cursor: 'pointer',
    marginRight:'15px'
  },
  returningApplicant: {
    color: theme.palette.yellow,
    textDecoration: 'underline'
  },
  forgetUl:{
    marginBottom:'20px'
  },
  ElectrinicSignature:{
    backgroundColor: '#6a80a0',
    color:'#fff',
    padding: '10px 24px',
    textAlign:'center',
  },
  ElectrinicSignatureDetails:{
    height:'360px',
    overflowY:'auto',
    padding:'15px',
    textAlign:'left'
  },
  closeSignatureBtn:{
  }
}));

const Login = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [openCreatePass, setOpenCreatePass] = useState(false);
  const [openForgotPass, setOpenForgotPass] = useState(false);
  const [electroicSignature, setElectroicSignature] = useState(false);


  useEffect(() => {
    let mounted = true;

    if (mounted) {

        const params = {
            ClientSuffix : 'kellertransportationllc',
            JobCode : 'neenahcdl'
        } 
        dispatch(getJobDetailsPost(params));

    }
    return () => {
        mounted = false;
    };
}, []);


  const jobDetails  = useSelector(
    state => state.auth.jobDetails
  );



  const handleOpenCreatePass = () => {
    setOpenCreatePass(true);
  };

  const handleCloseCreatePass = () => {
    setOpenCreatePass(!openCreatePass);
  };

  const handleOpenForgotPass =()=>{
    setOpenForgotPass(true)
  }

  const handleCloseForgotPass =() => {
    setOpenForgotPass(!openForgotPass)
  }

  const handleOpenSignature =() => {
    setElectroicSignature(true)
  }

  const handleCloseSignature =() => {
    setElectroicSignature(!electroicSignature)
  }

  const handleCloseError = () =>{

  }


console.log(jobDetails);

  return (
    <Page className={clsx(classes.root, classes.login)} title="Login">
      <Card className={classes.card}>
        <CardMedia className={classes.media} title="Cover">
          <Typography
            color="inherit"
            className={classes.mediaTitle}
            variant="h3"
            gutterBottom>
            {jobDetails.greeting}
          </Typography>

          <Typography color="inherit" variant="h5">
            {jobDetails.jobTitle}
          </Typography>
          <Divider className={classes.divider2} />

          <Typography
            className={classes.subtitle2}
            color="inherit"
            variant="subtitle2">
            {jobDetails.jobDescription}
          </Typography>

          {/* <ul className={classes.descPoints}>
            <li>
              {' '}
              <Typography
                className={classes.subtitle2}
                color="inherit"
                variant="subtitle2">
                Steady hours!
              </Typography>
            </li>
            <li>
              <Typography
                className={classes.subtitle2}
                color="inherit"
                variant="subtitle2">
                Straight, box or drywall box truck experience is a plus.
              </Typography>
            </li>
            <li>
              <Typography
                className={classes.subtitle2}
                color="inherit"
                variant="subtitle2">
                No dock work at terminals.
              </Typography>
            </li>
            <li>
              <Typography
                className={classes.subtitle2}
                color="inherit"
                variant="subtitle2">
                Sign on bonus!
              </Typography>
            </li>
          </ul> */}

          <Button
            className={classes.mediaButton}
            variant="contained"
            color="primary">
            View Full Job Description
          </Button>
        </CardMedia>

        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h4">
            Get Started!
          </Typography>
          <Typography
            className={classes.returningApplicant}
            variant="subtitle2">
            Returning Applicant
          </Typography>
          <LoginForm className={classes.loginForm} />
          <Divider className={classes.divider} />
          <Link
            align="center"
            color="secondary"
            onClick={handleOpenCreatePass}
            underline="always"
            className={classes.firstLink}
            variant="subtitle2">
            First Visit? Create Your Password
          </Link>

          <Link
            align="center"
            color="secondary"
            onClick={handleOpenForgotPass}
            underline="always"
            className={classes.firstLink}
            variant="subtitle2">
            Forgot Password?
          </Link>
        </CardContent>
      </Card>

      <ModalCustom
        title="Welcome New Applicant"
        open={openCreatePass}
        close={handleCloseCreatePass}
        actions={false}
        backDrop={true}
        width="md">
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6} md={6} lg={6}>

            {electroicSignature == false ? <Box component="div">
            <Typography color="inherit" variant="h4">
              Before you begin, you will need:
            </Typography>
            <ul className={classes.descPoints}>
              <li>
                {' '}
                <Typography
                  className={classes.typoColor}
                  color="inherit"
                  variant="subtitle1">
                  Residency history for prior 3 years
                </Typography>
              </li>
              <li>
                <Typography
                  className={classes.typoColor}
                  color="inherit"
                  variant="subtitle1">
                  Employment history - must provide 3 years
                </Typography>
              </li>
              <li>
                <Typography
                  className={classes.typoColor}
                  color="inherit"
                  variant="subtitle1">
                  Employment history - plus 7 years if applying for CDL position
                </Typography>
              </li>
              <li>
                <Typography
                  className={classes.typoColor}
                  color="inherit"
                  variant="subtitle1">
                  Driving Experience history
                </Typography>
              </li>
              <li>
                <Typography
                  className={classes.typoColor}
                  color="inherit"
                  variant="subtitle1">
                  Driver’s License Information (current license and license held
                  in another state within the prior 3 years)
                </Typography>
              </li>
            </ul>
            </Box> : <Box className={classes.ElectrinicSignature} component="div">
            <Typography
                 color="inherit"
                 variant="h4"
                 align='center'
                 className={classes.createTitle}>
                  Electronic Signature Details
                </Typography>
            <Divider className={classes.divider} />
            <Box className={classes.ElectrinicSignatureDetails} component="div">
            <Typography
                  className={classes.white}
                  color="inherit"
                  variant="subtitle1">
                    To sign a document electronically, fill out your name and last four digits of your [SSN or password] and click both the ["I Accept" button and the "Submit" button] appearing at the bottom of the document. NOTE: Your electronic signature will not be applied to the document until you correctly complete all of these steps.
                      </Typography>
                      <Typography
                  className={classes.white}
                  color="inherit"
                  variant="subtitle1">
                    If you want to make changes in information you provided, click "Back" button on your browser. If you do not agree to sign the document electronically, click the "I do not agree" button.
                      </Typography>
                      <Typography
                  className={classes.white}
                  color="inherit"
                  variant="subtitle1">
                    When you have completed a document that requires your electronic signature, you may use your browser to view, print, or download the document before you sign it and/or after you sign it. Once all of the documents have been completed and signed, you may also view, download or print the complete, signed documents by clicking the "Print" button that appears on your screen, or at a later time by logging in again using your candidate name and password.
                      </Typography>
                      <Typography
                  className={classes.white}
                  color="inherit"
                  variant="subtitle1">
                    Click here for the hardware/software requirements needed to access and retain the electronic records related to your application, including the documents you are asked to sign. You may also contact:
                      </Typography>
                      <Typography
                  className={classes.white}
                  color="inherit"
                  variant="subtitle1">
                    [ADD COMPANY INFORMATION] for a free copy of the documents you sign.  Proper identification will be required before such information is provided.
                      </Typography>
                      <Typography
                  className={classes.white}
                  color="inherit"
                  variant="subtitle1">
                   Once the signature process is completed, your electronic signature will be binding as if you had physically signed the document by hand. 
                      </Typography>
                      <Typography
                  className={classes.white}
                  color="inherit"
                  variant="subtitle1">
                   If at any point you would like to withdraw your consent for your electronic signature, or if you need to update information needed to contact you electronically, please contact _______ at _________.  Any withdrawal of consent will be effective as of the date it is received.

                      </Typography>
            
            </Box>
            <Divider className={classes.divider} />
            <Button
                type="submit"
                className={classes.closeSignatureBtn}
                variant="contained"
                color="default"
                size="large"
                align="center"
                // disabled={isSubmitting}
                onClick={handleCloseSignature}
                >
                Close
              </Button>

            </Box>}
          
            
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Typography
              color="inherit"
              variant="h4"
              className={classes.createTitle}>
              Create Your User Name &amp; Password
            </Typography>
            <CreatePasswordForm handleOpenSignature={()=>handleOpenSignature()} />
          </Grid>
        </Grid>
      </ModalCustom>


      <ModalCustom
        title="Forgot your Password?"
        open={openForgotPass}
        close={handleCloseForgotPass}
        // submitButton={}
        actions={false}
        backDrop={true}
        width="sm">

       <Typography
              color="inherit"
              variant="subtitle1"
              className={classes.createTitle}>
              Change your password in three easy steps. This will help you to secure password!
            </Typography>

            <ul className={clsx(classes.descPoints, classes.forgetUl)}>
              <li>
                {' '}
                <Typography
                  className={classes.typoColor}
                  color="inherit"
                  variant="subtitle1">
                  Enter your email address below.
                </Typography>
              </li>
              <li>
                <Typography
                  className={classes.typoColor}
                  color="inherit"
                  variant="subtitle1">
                  Our system will send you a temporary link.
                </Typography>
              </li>
              <li>
                <Typography
                  className={classes.typoColor}
                  color="inherit"
                  variant="subtitle1">
                  Use the link to reset your password. 
                </Typography>
              </li>
            
            </ul>
      <ForgotPassword />
          
      </ModalCustom>





    </Page>
  );
};

export default Login;
