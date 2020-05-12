import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import { Typography, Grid, Button, ButtonGroup, Divider } from '@material-ui/core';
import { DatePicker } from '@material-ui/pickers';
import CalendarTodayIcon from '@material-ui/icons/CalendarTodayOutlined';

const useStyles = makeStyles(theme => ({
  root: {},
  dates: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  calendarTodayIcon: {
    marginRight: theme.spacing(1)
  },
  divider: {
    margin: theme.spacing(2, 0),
    backgroundColor:'#dfdfdf',
    margin: '5px 0px',
  },
  userName: {
    color:'#54678C'
  },
}));

const Header = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Grid
        container
        justify="space-between"
        spacing={3}
      >
        <Grid
          item
          lg={12}
          xs={12}
        >
          <Typography
          className={classes.userName}
            component="h3"
            align="center"
            color="primary"
            gutterBottom
            variant="h3"
          >
            Welcome: Pete Clawhammer
          </Typography>
        </Grid>
      </Grid>
      {/* <Typography
            component="h1"
            gutterBottom
            variant="h3"
          >
            Company Information 
          </Typography>
          <Divider className={classes.divider} />

      <Grid
        container
        justify="space-between"
        spacing={3}
      >
        <Grid
          item
          lg={4}
          md={4}
          sm={4}
          xs={12}
        >
          <Typography
            component="h6"
            gutterBottom
            variant="subtitle1"
          >
            Company Name: ABC Safety Industries, Inc.
          </Typography>

        </Grid>
        <Grid
          item
          lg={4}
          md={4}
          sm={4}
          xs={12}
        >
          <Typography
            component="h6"
            gutterBottom
            variant="subtitle1"
          >
            Location/Region/District/Branch: Midwest
          </Typography>
        </Grid>
        <Grid
          item
          lg={4}
          md={4}
          sm={4}
          xs={12}
        >
          <Typography
            component="h6"
            gutterBottom
            variant="subtitle1"
          >
            Address: 125 Main St., Cleveland, OH, 44129
          </Typography>
        </Grid>
      </Grid> */}
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

Header.defaultProps = {};

export default Header;
