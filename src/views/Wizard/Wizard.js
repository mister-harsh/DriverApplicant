import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Grid,
  AppBar,
  Tabs,
  Tab,
  Typography,
  Box,
  Divider,
  TextField,
  Button
} from '@material-ui/core';
import { DatePicker } from '@material-ui/pickers';

import PropTypes from 'prop-types';
import { Page } from 'components';

import { Header } from './components';
import { PersonalInfo, EmploymentHistory, ExperienceQualifications, Review, Disclosures } from 'views';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
    // backgroundColor: theme.palette.background.paper
    // paddingTop: theme.spacing(3)
  },
  container: {
    '& > *': {
      height: '100%'
    }
  },
  header: {
    padding: '16px 24px 0px 24px'
  },
  tabItem: {
    maxWidth: '230px',
    minWidth: '230px',
    fontWeight: '400',
    fontSize: '15px',
    lineHeight: '22px'
  },
  selected: {
    color: theme.palette.yellow,
    '&:after':{
      content:'',
    },
  },
  indicator: {
    backgroundColor: theme.palette.yellow,
    height: '3px'
  }
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

const Wizard = () => {
  const classes = useStyles();
  const [tabValue, setTabValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    // console.log(newValue);
    
    setTabValue(newValue);
  };

  const handleTabNext = (value) => {
    // alert(value,' invoked')
    setTabValue(value);
  }

  
  
  
  return (
    <Page className={classes.root} title="Wizard">
      <Header className={classes.header} />
      <AppBar position="sticky">
        <Tabs
          classes={{ indicator: classes.indicator }}
          value={tabValue}
          onChange={handleChange}
          scrollButtons="on"
          aria-label="simple tabs example">
          <Tab
            classes={{ selected: classes.selected }}
            className={classes.tabItem}
            // disabled={tabValue == 0 || tabValue == 1 ? false : true}
            label="1. PERSONAL INFO "
            // disableRipple={true}
            // disableFocusRipple={true}
            {...a11yProps(0)}
          />
          <Tab
            classes={{ selected: classes.selected }}
            className={classes.tabItem}
            // disabled={tabValue == 1 || tabValue == 2 ? false : true}
            label="2. EMPLOYMENT HISTORY "
            {...a11yProps(1)}
          />
          <Tab
            classes={{ selected: classes.selected }}
            className={classes.tabItem}
            // disabled={tabValue == 2 ? false : true}
            label="3. EXPERIENCE &amp; QUALIFICATIONS"
            {...a11yProps(2)}
          />
          <Tab
            classes={{ selected: classes.selected }}
            className={classes.tabItem}
            // disabled={tabValue == 2 ? false : true}
            label="4. DISCLOSURES"
            {...a11yProps(3)}
          />
          <Tab
            classes={{ selected: classes.selected }}
            className={classes.tabItem}
            // disabled={tabValue == 2 ? false : true}
            label="5. REVIEW"
            {...a11yProps(4)}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={tabValue} index={0}>
        <PersonalInfo handleClick={handleTabNext} />
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        <EmploymentHistory handleClick={handleTabNext} />
      </TabPanel>
      <TabPanel value={tabValue} index={2}>
        <ExperienceQualifications handleClick={handleTabNext} />
      </TabPanel>
      <TabPanel value={tabValue} index={3}>
        <Disclosures handleClick={handleTabNext} />
      </TabPanel>
      <TabPanel value={tabValue}  index={4}>
      <Review handleClick={handleTabNext} />
      </TabPanel>
    </Page>
  );
};

export default Wizard;
