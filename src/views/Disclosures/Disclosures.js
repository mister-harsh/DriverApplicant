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
  }
}));

const Disclosures = props => {
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

    {props.isReview == true ? '' : 
      
       <Typography component="h4" className={classes.heading} variant="h4">
        DISCLOSURES
      </Typography>
        }

     
      <Divider className={classes.divider} />

    

      <Box className={classes.container} component="div">
        <Typography
          component="p"
          className={classes.inlineP}
          variant="subtitle1">
          All the fields will be shown here.
        </Typography>
        
      </Box>

      <Divider className={classes.dividerTwo} />

      <form>
        {/* <CurrentEmployer/>
        <PreviousEmployer /> */}

    {props.isReview == true ? '' : 
       <React.Fragment>
       <Button className={classes.next} onClick={() => props.handleClick(4)} variant="contained" color="secondary">
          Next
        </Button>
        <Button className={classes.finishLater} variant="contained">
          Stop &amp; Finish Later
        </Button>
        </React.Fragment>
        }
      </form>
    </div>
  );
};

Disclosures.propTypes = {
  className: PropTypes.string
};

Disclosures.defaultProps = {};

export default Disclosures;
