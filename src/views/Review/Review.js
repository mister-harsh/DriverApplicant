import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Box,
  Typography,
  Grid,
  Button,
  ButtonGroup,
  Divider,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Checkbox
} from '@material-ui/core';
import { DatePicker } from '@material-ui/pickers';
// import {
//     Grid,
//     AppBar,
//     Tabs,
//     Tab,
//     Typography,
//     Box,
//     Divider,
//     TextField,
//     Button
//   } from '@material-ui/core';
//   import { DatePicker } from '@material-ui/pickers';
// import {PreviousEmployer, CurrentEmployer} from './components'

import { PersonalInfo, EmploymentHistory, ExperienceQualifications, Disclosures } from 'views';


const useStyles = makeStyles(theme => ({
  root: {},
  inputBg: {
    backgroundColor: theme.palette.white
  },
  container: {
    padding: theme.spacing(2, 0)
  },
  heading: {
    marginBottom: '15px',
    fontWeight: '500'
  },
  heading2: {
    fontWeight: '700',
    marginBottom: '15px',
    fontStyle: 'italic',
    fontSize: '19px'
  },
  divider: {
    // margin: theme.spacing(1, 0),
    backgroundColor: '#e3e3e3'
    // margin: '5px 0px',
  },
  dividerTwo: {
    backgroundColor: '#afafaf'
  },
  dividerThree: {
    backgroundColor: theme.palette.secondary.main
    // marginTop: theme.spacing(2.5)
  },
  dangerText: {
    color: theme.palette.error.light,
    marginTop: '5px'
  },
  inlineP: {
    display: 'inline-flex'
  },
  inlineRadio: {
    flexDirection: 'row',
    verticalAlign: 'middle',
    marginLeft: '10px'
  },
  multiTextRadio: {
    marginLeft: theme.spacing(2),
    verticalAlign: 'text-top'
  },
  gridRow: {
    marginBottom: theme.spacing(2)
  },
  gridPadding: {
    padding: theme.spacing(2.5, 0, 1.2, 0)
  },
  addJobContainer:{
      textAlign:'center'
  },
  next: {
    marginRight: '15px',
    marginTop: '10px'
  },
  finishLater: {
    backgroundColor: theme.palette.yellow,
    color: theme.palette.white,
    marginTop: '10px'
  },
  unorderedList: {
    padding: theme.spacing(1, 2)
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
  frameContainer:{
      border:'1px solid #ddd',
      marginBottom:'25px'
  },
  frame:{
    // height:'200px',
    // overflowX:'hidden',
    // overflowY:'auto',
    position:'relative',
    padding:'25px',
    // border:'1px solid #ddd'
  },
//   overlay:{
//     content: '',
//     width: '100%',
//     height: '100%',
//     top: '0',
//     left: '0',
//     bottom: '0',
//     position: 'absolute',
//     backgroundColor: '#9e9e9e5e',
//     zIndex: '9999999',
//     },
    editBtn:{
        color: 'blue',
    marginLeft: '12px',
    fontSize: '14px',
    textDecoration: 'underline',
    cursor: 'pointer',
    },
    reviewHead:{
        backgroundColor:'#dcdcdc',
        padding:'1px 10px'
    }
}));

const Review = props => {
  const { className, ...rest } = props;
  const [value, setValue] = React.useState(0);
  const [selectedDate, handleDateChange] = useState(new Date());
  const classes = useStyles();

  const [radioValue, setRadioValue] = React.useState('female');

  const handleRadioChange = event => {
    setRadioValue(event.target.value);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Typography component="h4" className={classes.heading} variant="h4">
        APPLICATION REVIEW
      </Typography>
      <Divider className={classes.divider} />

      <form>
        {/* <CurrentEmployer/>
        <PreviousEmployer /> */}

    <Box className={classes.frameContainer} component="div">
        <div className={classes.reviewHead}>
        <Typography component="h5" className={classes.heading} variant="h5" style={{marginTop:'15px'}}>
            PERSONAL INFO
            <span onClick={() => props.handleClick(0)} className={classes.editBtn}>Edit</span>
        </Typography>
        </div>
        <Box className={classes.frame} component="div">
        <PersonalInfo isReview={true}/>

        {/* <div className={classes.overlay}></div> */}
        </Box>
    </Box>

    <Box className={classes.frameContainer} component="div">
        <div className={classes.reviewHead}>
        <Typography component="h5" className={classes.heading} variant="h5" style={{marginTop:'15px'}}>
             EMPLOYMENT HISTORY
            <span onClick={() => props.handleClick(1)} className={classes.editBtn}>Edit</span>
        </Typography>
        </div>
        <Box className={classes.frame} component="div">
        <EmploymentHistory isReview={true}/>

        {/* <div className={classes.overlay}></div> */}
        </Box>
    </Box>

    <Box className={classes.frameContainer} component="div">
        <div className={classes.reviewHead}>
        <Typography component="h5" className={classes.heading} variant="h5" style={{marginTop:'15px'}}>
        EXPERIENCE &amp; QUALIFICATIONS
            <span onClick={() => props.handleClick(2)} className={classes.editBtn}>Edit</span>
        </Typography>
        </div>
        <Box className={classes.frame} component="div">
        <ExperienceQualifications isReview={true}/>

        {/* <div className={classes.overlay}></div> */}
        </Box>
    </Box>

    <Box className={classes.frameContainer} component="div">
        <div className={classes.reviewHead}>
        <Typography component="h5" className={classes.heading} variant="h5" style={{marginTop:'15px'}}>
        DISCLOSURES
        <span onClick={() => props.handleClick(3)} className={classes.editBtn}>Edit</span>
        </Typography>
        </div>
        <Box className={classes.frame} component="div">
        <Disclosures isReview={true}/>

        {/* <div className={classes.overlay}></div> */}
        </Box>
    </Box>


        
        <Button className={classes.next} variant="contained" color="secondary">
          Submit your Applcation
        </Button> 
        {/* <Button className={classes.finishLater} variant="contained">
          Stop &amp; Finish Later
        </Button> */}
      </form>
    </div>
  );
};

Review.propTypes = {
  className: PropTypes.string
};

Review.defaultProps = {};

export default Review;
