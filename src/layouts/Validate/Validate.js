import React, { Fragment, Suspense } from 'react';
import { renderRoutes } from 'react-router-config';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { LinearProgress } from '@material-ui/core';

// import { Topbar } from './components';
import { Topbar } from './components';
import {Footer} from 'components'

const useStyles = makeStyles(theme => ({
  content: {
    height: '100%',
    paddingTop: 56,
    [theme.breakpoints.up('sm')]: {
      paddingTop: 64
    }
  }
}));

const Validate = props => {
  const { route } = props;

  const classes = useStyles();

  return (
    <Fragment>
      <Topbar />
      <main className={classes.content}>
        <Suspense fallback={<LinearProgress />}>
          {renderRoutes(route.routes)}
        </Suspense>
      </main>
      <Footer/>
    </Fragment>
  );
};

Validate.propTypes = {
  route: PropTypes.object
};

export default Validate;
