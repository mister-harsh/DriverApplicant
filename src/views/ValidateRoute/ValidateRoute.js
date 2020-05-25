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
      }

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
    

    return (
        <Page className={clsx(classes.root, classes.routePage, { [classes.routebackground]: !allState.isLoading })} title="ReRoute">
            <Box className={classes.loader} component="div">
                {allState.isLoading && <CircularProgress size={80} className={classes.spinner} />}

               {allState.isNotValidPath && <Card className={classes.jobCard}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" variant='h5' component="h5" gutterBottom>
                        This job posting is not currently open to applicants.
                        </Typography>
                     
                    </CardContent>
                  
                </Card>}
            </Box>
        </Page>
    );
};

export default ValidateRoute;
