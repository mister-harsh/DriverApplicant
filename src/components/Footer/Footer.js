import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { BottomNavigation, Typography, Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none',
    position:'fixed',
    bottom:'0',
    left:'0',
    width:'100%',
    backgroundColor:'#000',
    padding:'3px 20px'
  },
  name: {

  },
  logoLink: {
    lineHeight: 0
  },
  heading: {
    margin: '0 auto',
    color: theme.palette.white
  },
  leftText:{
    color:'#fff',
    padding: '8px 0',
  },
  rightText:{
    color:'#fff',
    display:'inline-block',
    verticalAlign:'middle',
    marginRight:'10px',
    [theme.breakpoints.down('xs')]: {
      fontSize:'12px',
    }
  },
  right: {
    textAlign:'right',
  },
  chat:{
    display:'inline-block',
    verticalAlign:'middle',
    width:'40px',
    [theme.breakpoints.down('xs')]: {
      width:'25px',
    }
  },
  copy:{
    [theme.breakpoints.down('xs')]: {
      display:'none'
    }
  },
}));

const Footer = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <footer
      {...rest}
      className={clsx(classes.root, className)}
      color="primary">
      <Grid container spacing={6}>
        <Grid className={classes.copy} item xs={12} sm={6} md={6} lg={6}>
          <Typography className={classes.leftText} variant="body1">
            Copyright 2020 J. J. Keller &amp; Associates, Inc. All rights
            reserved.
          </Typography>
        </Grid>
        <Grid item className={classes.right} xs={12} sm={6} md={6} lg={6}>
          <Typography className={classes.rightText} variant="body1">
            Powered by J. J. Keller &amp; Associates
          </Typography>

          <img
            alt="Chat"
            className={classes.chat}
            src="/images/chat.png"
          />
        </Grid>
      </Grid>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string
};

export default Footer;
