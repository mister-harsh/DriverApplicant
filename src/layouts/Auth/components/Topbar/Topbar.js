import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none'
  },
  name: {
    color: theme.palette.white
  },
  logoLink: {
    lineHeight:0
  }
}));

const Topbar = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
      color="primary"
    >
      <Toolbar>
        <RouterLink className={classes.logoLink} to="/">
          <img
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
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string
};

export default Topbar;
