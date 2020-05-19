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
import Wizard2 from './Wizard2'

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
  },
  active: {
    '& $line': {
      borderColor: '#784af4',
    },
  },
  completed: {
    '& $line': {
      borderColor: '#784af4',
    },
  },
}));



// const StepTitle = () =>{

//   return(
//     <Typography
//     component="h6"
//     className={classes.inlineP}
//     variant="h6">
//     Personal Info
//   </Typography>
//   )

// }

// const tabStatusStyles = makeStyles({
//   root: {
    
//   },
//   active: {
//     backgroundImage:
//       'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
//     boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
//   },
//   completed: {
//     backgroundImage:
//       'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
//   },
// });


function getSteps() {
  return ['1. Personal Info', '2. EMPLOYMENT HISTORY', '3. EXPERIENCE & QUALIFICATIONS','5. REVIEW'];
}



// function ColorlibStepIcon(props) {
//   const classes = tabStatusStyles();
//   const { active, completed } = props;

//   const icons = {
//     1: <SettingsIcon />,
//     2: <GroupAddIcon />,
//     3: <VideoLabelIcon />,
//   };

//   return (
//     <div
//       className={clsx(classes.root, {
//         [classes.active]: active,
//         [classes.completed]: completed,
//       })}
//     >
//       {icons[String(props.icon)]}
//     </div>
//   );
// }


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && <Box p={3}>{children}</Box>}
    </Box>
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
  const steps = getSteps();

  const handleChange = (event, newValue) => {
    // alert(newValue);
    
    setTabValue(newValue);


    // const arry = [
    //   {name:'1. Personal Info', status:'active'},
    //   {name:'2. EMPLOYMENT HISTORY', status:''},
    //   {name:'3. EXPERIENCE & QUALIFICATIONS',status:''},
    //   {name:'5. REVIEW',status:''}
    // ];

  
    // for(var i=0;i<=newValue;i++){
  
    //   arry[]
  
    // }


  };

  const handleTabNext = (value) => {
    // alert(value,' invoked')
    setTabValue(value);
  }




  // console.log(arry);
  
 
  
  
  
  return (
    <Page className={classes.root} title="Wizard">
      <Header className={classes.header} />
      {/* <Wizard2/> */}

    <AppBar position="sticky">
        <Tabs
          classes={{ indicator: classes.indicator }}
          value={tabValue}
          onChange={handleChange}
          scrollButtons="on"
          aria-label="simple tabs example">
            {steps.map((label,i)=>{
              return <Tab
               classes={{ selected: classes.selected }}
               className={classes.tabItem}
               // disabled={tabValue == 0 || tabValue == 1 ? false : true}
               label={label}
               {...a11yProps(i)}
             />
            })}
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
