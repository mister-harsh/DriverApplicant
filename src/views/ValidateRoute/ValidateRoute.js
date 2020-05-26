import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
    Box,
    CircularProgress
} from '@material-ui/core';

import clsx from 'clsx';
import LockIcon from '@material-ui/icons/Lock';
import Grid from '@material-ui/core/Grid';
import { Page } from 'components';
import gradients from 'utils/gradients';
// import { LoginForm, CreatePasswordForm, ForgotPassword } from './components';
import ModalCustom from 'components/ModalCustom';
import {getJobDetailsPost} from 'actions'

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

    routebackground: {
        background: 'url(/images/login-bg.jpg) no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: '50% 26%',
        [theme.breakpoints.down('sm')]: {
            backgroundPosition: '90% 26%',
        }
    },
    loader: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    spinner: {
        textAlign: 'center'
    },
    title: {
        fontSize: 16,
      },
      jobCard:{
         height:'200px',
         display:'flex',
         alignItems:'center',
         padding:'0 16px',
         textAlign:'center',
      },
      card: {
        // width: theme.breakpoints.values.md,
        maxWidth: '100%',
        width:'75%',
        overflow: 'unset',
        // display: 'flex',
        position: 'relative',
        backgroundColor: 'transparent',
        boxShadow: 'none',
        '& > *': {
          flexGrow: 1,
          flexBasis: '85%',
          width: '85%',
          [theme.breakpoints.down('xs')]: {
            flexBasis: '100%',
            width: '100%'
          }
        },
        [theme.breakpoints.down('xs')]: {
          flexDirection: 'column'
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
      divider2: {
        margin: theme.spacing(1, 0),
        backgroundColor: '#b3b3b3'
      },
      subtitle2: {
        color: '#ffffffe6',
        marginBottom:'14px',
      },
      

}));

const ValidateRoute = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { match, history } = props;
    const { clientID, jobCode } = match.params;

    const clientName = clientID ? clientID : '';
    const userName = jobCode ? jobCode : ''

    useEffect(() => {
        let mounted = true;

        if (mounted) {

            const params = {
                ClientSuffix : clientID ? clientID : '',
                JobCode : jobCode ? jobCode : ''
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
      const allState  = useSelector(
        state => state.auth
      );

      if (clientName.split('').length > 0 && userName.split('').length > 0) {

        if(jobDetails.status){
            history.push('/auth/login')
        }
    }
            //     if (clientName == undefined || userName == undefined || jobDetails.companyName == null) { 
            //         setShowLoader(false)
            //         setIsPathInvalid(true)
            // }
    
            console.log("clientID", clientID);
            console.log('jobCode',jobCode);

    return (
        <Page className={clsx(classes.root, classes.routePage, { [classes.routebackground]: !allState.isLoading })} title="ReRoute">
           {allState.isLoading &&  <Box className={classes.loader} component="div">
                <CircularProgress size={80} className={classes.spinner} />
            </Box>}

        <Card className={classes.card}>
        {clientID == undefined && jobCode == undefined && allState.isLoading == false && allState.isNotValidPath && <CardMedia className={classes.media} title="Cover">
          <Typography
            color="inherit"
            className={classes.mediaTitle}
            variant="h3"
            gutterBottom>
            Welcome to Applicant Center.
          </Typography>

          {/* <Typography color="inherit" variant="h5">
            {jobDetails.jobTitle}
          </Typography> */}
          <Divider className={classes.divider2} />

          <Typography
            className={classes.subtitle2}
            color="inherit"
            variant="subtitle1">
           As the trucking industry continues to struggle with a growing shortage of drivers, J.J. Keller, Inc has developed a new tech-oriented recruitment solution to attract drivers.
          </Typography>
          <Typography
            className={classes.subtitle2}
            color="inherit"
            variant="subtitle1">
           CDL class A over-the-road drivers are probably the hardest drivers to find right now and there is a need to hire qualified drivers in quick time.
          </Typography>
          <Typography
            className={classes.subtitle2}
            color="inherit"
            variant="subtitle1">
            Applicant Center is a hiring solution for recruiting experienced and qualified CDL drivers. This is based on compliance related to cities or states, in hiring of professional drivers. In a nutshell, a Compliance based Hiring Applicant Center for drivers.
          </Typography>

        </CardMedia>}

        {clientID && jobCode == undefined && allState.isLoading == false && allState.isNotValidPath && <CardMedia className={classes.media} title="Cover">
          <Typography
            color="inherit"
            className={classes.mediaTitle}
            variant="h3"
            gutterBottom>
            Hello!
          </Typography>
          <Divider className={classes.divider2} />

          <Typography
            className={classes.subtitle2}
            color="inherit"
            variant="subtitle1">
           Something is not right. If you are looking for a job details, you will need to access it with a correct URL
          </Typography>

        </CardMedia>}
        {clientID && jobCode && allState.isLoading == false && allState.isNotValidPath && <CardMedia className={classes.media} title="Cover">
          <Typography
            color="inherit"
            className={classes.mediaTitle}
            variant="h3"
            gutterBottom>
            Hello!
          </Typography>
          <Divider className={classes.divider2} />

          <Typography
            className={classes.subtitle2}
            color="inherit"
            variant="subtitle1">
           This job posting is not currently open to applicants.
          </Typography>

        </CardMedia>}
        </Card>

 {/* {allState.isNotValidPath && <Card className={classes.jobCard}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" variant='h5' component="h5" gutterBottom>
                        This job posting is not currently open to applicants.
                        </Typography>
                     
                    </CardContent>
                  
                </Card>} */}

        </Page>
    );
};

export default ValidateRoute;
