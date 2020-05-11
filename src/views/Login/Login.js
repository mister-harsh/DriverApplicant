import React, { useState } from 'react';
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
  Button
} from '@material-ui/core';

import clsx from 'clsx';
import LockIcon from '@material-ui/icons/Lock';
import Grid from '@material-ui/core/Grid';
import { Page } from 'components';
import gradients from 'utils/gradients';
import { LoginForm, CreatePasswordForm } from './components';

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
    cursor: 'pointer'
  },
  returningApplicant: {
    color: theme.palette.yellow,
    textDecoration: 'underline'
  }
}));

const Login = () => {
  const classes = useStyles();

  const [openCreatePass, setOpenCreatePass] = useState(false);

  const handleOpenCreatePass = () => {
    setOpenCreatePass(true);
  };

  const handleCloseCreatePass = () => {
    setOpenCreatePass(!openCreatePass);
  };

  return (
    <Page className={clsx(classes.root, classes.login)} title="Login">
      <Card className={classes.card}>
        <CardMedia className={classes.media} title="Cover">
          <Typography
            color="inherit"
            className={classes.mediaTitle}
            variant="h3"
            gutterBottom>
            Welcome!
          </Typography>

          <Typography color="inherit" variant="h5">
            Local CDL Truck Driver – Home Daily
          </Typography>
          <Divider className={classes.divider2} />

          <Typography
            className={classes.subtitle2}
            color="inherit"
            variant="subtitle2">
            ABC Safety has immediate openings for drivers. Drivers will stay
            within a 100 mile radius and enjoy working for a family owned
            business.
          </Typography>

          <ul className={classes.descPoints}>
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
          </ul>

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
          <Grid item xs={12} sm={6} md={7} lg={7}>
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
          </Grid>
          <Grid item xs={12} sm={6} md={5} lg={5}>
            <Typography
              color="inherit"
              variant="h4"
              className={classes.createTitle}>
              Create Your User Name &amp; Password
            </Typography>
            <CreatePasswordForm />
          </Grid>
        </Grid>
      </ModalCustom>
    </Page>
  );
};

export default Login;
