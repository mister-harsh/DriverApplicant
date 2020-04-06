import React from 'react';
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

import { Page } from 'components';
import gradients from 'utils/gradients';
import { LoginForm } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(6, 2)
  },
  subtitle2: {
    color: '#ffffffe6'
  },
  login: {
    background: 'url(/images/login-bg.jpg) no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'left center'
  },
  card: {
    width: theme.breakpoints.values.md,
    maxWidth: '100%',
    overflow: 'unset',
    display: 'flex',
    position: 'relative',
    backgroundColor: 'transparent',
    '& > *': {
      flexGrow: 1,
      flexBasis: '50%',
      width: '50%'
    }
  },
  content: {
    padding: '24px',
    backgroundColor: '#fff'
  },
  media: {
    position: 'relative',
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    padding: theme.spacing(3),
    color: theme.palette.white,
    display: 'flex',
    backgroundColor: '#0001197d',
    flexDirection: 'column',
    // justifyContent: 'flex-end',
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  mediaTitle: {
    marginBottom: '15px'
  },
  mediaButton:{
    position:'absolute',
    bottom:'20px',
    width:'max-content'
  },
  descPoints: {
    paddingLeft: '15px',
    marginTop: '15px'
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
    marginTop: theme.spacing(3)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  divider2:{
    margin: theme.spacing(1, 0),
    backgroundColor:'#b3b3b3'

  },
  person: {
    marginTop: theme.spacing(2),
    display: 'flex'
  },
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

const Login = () => {
  const classes = useStyles();

  return (
    <Page className={clsx(classes.root, classes.login)} title="Login">
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h3">
            Get Started!
          </Typography>
          <Typography variant="subtitle2">
            Please Sign in
          </Typography>
          <LoginForm className={classes.loginForm} />
          <Divider className={classes.divider} />
          <Link
            align="center"
            color="secondary"
            component={RouterLink}
            to="/auth/register"
            underline="always"
            variant="subtitle2">
            First Visit? Create Your Password
          </Link>
        </CardContent>
        <CardMedia className={classes.media} title="Cover">
          <Typography
            color="inherit"
            className={classes.mediaTitle}
            variant="h2"
            gutterBottom>
            Welcome!
          </Typography>

          <Typography
            color="inherit"
            variant="h4"
            >
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

          <Button className={classes.mediaButton} variant="contained" color="primary">
          View Full Job Description
          </Button>
        </CardMedia>
      </Card>
    </Page>
  );
};

export default Login;
