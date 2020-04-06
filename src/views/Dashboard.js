import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import { Page } from 'components';
import {
  Header,
  Overview,
  BarChart,
  DoughnutChart,
  UserActivity,
  TableWithSort
} from 'containers/DashboardAnalytics';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  container: {
    '& > *': {
      height: '100%'
    }
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Analytics Dashboard"
    >
      <Header />
      <Grid
        className={classes.container}
        container
        spacing={3}
      >
        <Grid
          item
          xs={12}
        >
          <Overview />
        </Grid>
        <Grid
          item
          lg={8}
          xl={9}
          xs={12}
        >
          <BarChart />
        </Grid>
        <Grid
          item
          lg={4}
          xl={3}
          xs={12}
        >
          <DoughnutChart />
        </Grid>
        <Grid
          item
          lg={8}
          xs={12}
        >
          <TableWithSort />
        </Grid>
        <Grid
          item
          lg={4}
          xs={12}
        >
          <UserActivity />
        </Grid>
        
      </Grid>
    </Page>
  );
};

export default Dashboard;
