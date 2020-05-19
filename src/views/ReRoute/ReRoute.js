import React, { useState, useEffect } from 'react';
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

const ReRoute = (props) => {
    const classes = useStyles();
    const { match, history } = props;
    const { clientID, userID } = match.params;
    //   const [state, setState] = React.useState({
    //     showLoader:true,
    //     isPathInvalid:false, 
    //   });

    const [showLoader, setShowLoader] = useState(true);
    const [isPathInvalid, setIsPathInvalid] = useState(false);

    useEffect(() => {
        let mounted = true;

        if (mounted) {
            const clientName = clientID ? clientID : '';
            const userName = userID ? userID : ''
            console.log('clientID', clientID);
            console.log('userID', userID);



            if (clientName.split('').length > 0 && userName.split('').length > 0) {

                setTimeout(() => {
                    setShowLoader(false)
                    history.push('/auth/login')
                }, 3000)
            }
            if (clientID == undefined || userID == undefined) {
                // alert('coming in invalid')
                // setState(state=>({
                //     ...state,
                //     showLoader:false,
                //     isPathInvalid: true,
                //   })); 
                setTimeout(() => {
                    setShowLoader(false)
                    setIsPathInvalid(true)
                }, 3000)

            }

        }
        return () => {
            mounted = false;
        };
    }, []);

    //   const handleStateChange = (event) => {
    //     const name = event.target.name;
    //     setState({
    //       ...state,
    //       [name]: event.target.value,
    //     });
    //   };

    console.log('showLoader', showLoader);
    console.log('isPathInvalid', isPathInvalid);

    return (
        <Page className={clsx(classes.root, classes.routePage, { [classes.routebackground]: !showLoader })} title="ReRoute">
            <Box className={classes.loader} component="div">
                {showLoader && <CircularProgress size={80} className={classes.spinner} />}

               {isPathInvalid && <Card className={classes.jobCard}>
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

export default ReRoute;
