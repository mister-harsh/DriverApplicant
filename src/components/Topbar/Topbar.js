import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none',
    backgroundColor: theme.palette.darkBlue
  },
  name: {
    color: theme.palette.white
  },
  logoLink: {
    lineHeight:0
  },
  logoImg:{
    [theme.breakpoints.down('xs')]: {
      width: '130px',
      // padding: theme.spacing(2),
    }
  },
  heading:{
    margin: '0 auto',
    color: theme.palette.white,
    fontWeight: '300',
    [theme.breakpoints.down('xs')]: {
      fontSize: '20px',
     
    }
  }
}));

const Topbar = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
      // color="primary"
    >
      <Toolbar>
        <RouterLink className={classes.logoLink} to="/">
          <img
          className={classes.logoImg}
            alt="Logo"
            src="/images/logos/logo.gif"
          />

      {/* <Typography
        className={classes.name}
        variant="h2"
      >
        TF ReactKit
      </Typography> */}

        </RouterLink>

        <Typography
        className={classes.heading}
        variant="h2"
      >
        Applicant Center
      </Typography>
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string
};

export default Topbar;
