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

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
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
    maxWidth: '260px',
    minWidth: '230px',
    fontWeight:'400',
    fontSize:'15px',
    lineHeight:'22px',
    // '&:first-child':{
    //     maxWidth: '260px',
    // },
  },
  heading: {
    marginBottom: '15px',
    fontWeight:'400'
  },
  heading2: {
    fontWeight:'400',
    [theme.breakpoints.down('xs')]: {
        marginBottom: '15px',
      }
  },
  divider: {
    margin: theme.spacing(2.5, 0),
    backgroundColor: '#e3e3e3'
    // margin: '5px 0px',
  },
  residenceBody: {
    border: '1px solid #ddd',
    borderRadius: '3px',
    padding: theme.spacing(2)
  },
  residenceConatiner: {
    position: 'relative'
  },

  residenceHeading: {
    position: 'absolute',
    top: '-11px',
    color: '#818181'
  },
  next: {
    marginRight:'15px',
    marginTop:'10px'
  },
  finishLater: {
    backgroundColor: theme.palette.yellow,
    color: theme.palette.white,
    marginTop:'10px'
  },
  indicator:{
    backgroundColor: theme.palette.yellow,
    height:'3px'
  },
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
  const [value, setValue] = React.useState(0);
  const [selectedDate, handleDateChange] = useState(new Date());

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Page className={classes.root} title="Wizard">
      <Header className={classes.header} />
      <AppBar position="static">
        <Tabs
        classes={{indicator: classes.indicator}}
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example">
          <Tab className={classes.tabItem} label="1. PERSONAL INFO " {...a11yProps(0)} />
          <Tab className={classes.tabItem} label="2. EMPLOYMENT HISTORY " {...a11yProps(1)} />
          <Tab className={classes.tabItem} label="3. EXPERIENCE &amp; QUALIFICATIONS" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Typography component="h4" className={classes.heading} variant="h4">
          DRIVER EMPLOYMENT APPLICATION
        </Typography>
        <form>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <TextField
                id="lastName"
                name="lastName"
                label="Last Name"
                type="text"
                fullWidth={true}
                variant="outlined"
                //   value={values.password}
                //   onChange={handleChange}
                //   onBlur={handleBlur}
                //   error={errors.password}
                //   helperText={
                //     errors.password && touched.password ? errors.password : null
                //   }
                //   className={
                //     errors.password && touched.password
                //       ? 'text-input error'
                //       : 'text-input'
                //   }
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <TextField
                id="firstName"
                name="firstName"
                label="First Name"
                type="text"
                fullWidth={true}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <TextField
                id="middleName"
                name="middleName"
                label="Middle Name"
                type="text"
                fullWidth={true}
                variant="outlined"
              />
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <TextField
                id="socialNumber"
                name="socialNumber"
                label="Social Security Number"
                type="text"
                fullWidth={true}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <TextField
                id="phoneNumber"
                name="phoneNumber"
                label="Phone Number"
                type="text"
                fullWidth={true}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <TextField
                id="emailId"
                name="emailId"
                label="e-mail"
                type="text"
                fullWidth={true}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <DatePicker
                fullWidth={true}
                inputVariant="outlined"
                label="Birth Date"
                format="MM/DD/YYYY"
                placeholder="10/10/2018"
                value={selectedDate}
                onChange={date => handleDateChange(date)}
              />
            </Grid>
          </Grid>
          <Divider className={classes.divider} />

          <Typography component="h4" className={classes.heading2} variant="h4">
            Please provide residency history totaling 3 years.
          </Typography>

          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <TextField
                id="lastName"
                name="lastName"
                label="Current Street Address"
                type="text"
                fullWidth={true}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={2} lg={2}>
              <TextField
                id="firstName"
                name="firstName"
                label="State"
                type="text"
                fullWidth={true}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={2} lg={2}>
              <TextField
                id="city"
                name="city"
                label="City"
                type="text"
                fullWidth={true}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={1} lg={1}>
              <TextField
                id="city"
                name="city"
                label="City"
                type="text"
                fullWidth={true}
                variant="outlined"
              />
            </Grid>

            <Grid
              className={classes.residenceConatiner}
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}>
              <Typography
                component="h6"
                className={classes.residenceHeading}
                variant="h6">
                Residence
              </Typography>
              <div className={classes.residenceBody}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} md={3} lg={3}>
                    <DatePicker
                      clearable
                      views={['month']}
                      fullWidth={true}
                      inputVariant="outlined"
                      label="Month"
                      // format="YYYY"
                      placeholder="Month"
                      value={selectedDate}
                      onChange={date => handleDateChange(date)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={3} lg={2}>
                    <DatePicker
                      clearable
                      views={['year']}
                      fullWidth={true}
                      inputVariant="outlined"
                      label="Year"
                      // format="YYYY"
                      placeholder="Year"
                      value={selectedDate}
                      onChange={date => handleDateChange(date)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={3} lg={3}>
                    <DatePicker
                      clearable
                      views={['month']}
                      fullWidth={true}
                      inputVariant="outlined"
                      label="Month"
                      // format="YYYY"
                      placeholder="Month"
                      value={selectedDate}
                      onChange={date => handleDateChange(date)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={3} lg={2}>
                    <DatePicker
                      clearable
                      views={['year']}
                      fullWidth={true}
                      inputVariant="outlined"
                      label="Year"
                      // format="YYYY"
                      placeholder="Year"
                      value={selectedDate}
                      onChange={date => handleDateChange(date)}
                    />
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
          <Button className={classes.next} variant="contained" color="secondary">
            Next
          </Button>
          <Button className={classes.finishLater} variant="contained" >
            Stop &amp; Finish Later
          </Button>
        </form>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Page>
  );
};

export default Wizard;
