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
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  InputLabel,
  Select,
  MenuItem
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    // paddingBottom: '10px'
  },
  inputBg: {
    backgroundColor: theme.palette.white
  },
  // Table Classes start

  tableHead: {
    backgroundColor: '#f4f6f8'
  },
  tableBorder: {
    border: '1px solid #ddd'
  },
  formControl: {
    verticalAlign: 'middle',
    width: '100%'
  },
  formControlInline: {
    verticalAlign: 'middle',
    width: '84%'
  },
  dateDropdown: {
    width: '85px'
  },
  inlineRadio: {
    flexDirection: 'row',
    verticalAlign: 'middle',
    marginLeft: '10px'
  },
  inlineSpan: {
    margin: '0 10px',
    padding: '15px 0'
  },
  dayPickContainer: {
    display: 'inline-flex'
  },
  fixedSelect: {
    width: '165px'
  },
  resetIcon:{
    display:'inline-flex',
    width:'30px',
    cursor:'pointer',
    marginLeft:'10px',
    verticalAlign:'middle',
    '& img':{
      width:'100%',
    },
  },
  textOptional:{
    marginTop:'15px'
  }
}));

const AccidentTable = props => {
  const { className, isReview, ...rest } = props;
  const [date, setDate] = React.useState('');
  const [radioValue, setRadioValue] = React.useState('female');
  const classes = useStyles();
  const [state, setState] = React.useState({
    stateVal: 'hello',
    natureOfAccident: '',
  });
  const handleDate2Change = event => {
    setDate(event.target.value);
  };

  const handleRadioChange = event => {
    setRadioValue(event.target.value);
  };

  const handleStateChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  console.log(state);
  

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <TableContainer>
        <Table
          size="small"
          className={clsx(classes.table, classes.tableBorder)}
          aria-label="simple table">
          <TableHead className={classes.tableHead}>
            <TableRow>
              <TableCell className={classes.tableBorder} align="center">
                Date
              </TableCell>
              <TableCell className={classes.tableBorder} align="center">
                Nature of Accident
              </TableCell>
              <TableCell className={classes.tableBorder} align="center">
                Number of Fatalities
              </TableCell>
              <TableCell className={classes.tableBorder} align="center">
                Number of Injuries
              </TableCell>
              <TableCell className={classes.tableBorder} align="center">
                Hazardous Materials Spill?
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell
                className={classes.tableBorder}
                component="th"
                align="center"
                scope="row">
                <Box className={classes.dayPickContainer} component="div">
                  <FormControl
                    variant="outlined"
                    className={clsx(
                      classes.formControl,
                      classes.inputBg,
                      classes.dateDropdown
                    )}>
                    <InputLabel id="demo-simple-select-outlined-label">
                      Month
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={date}
                      onChange={handleDate2Change}
                      label="Month">
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>{' '}
                  <span className={classes.inlineSpan}>/</span>
                  <FormControl
                    variant="outlined"
                    className={clsx(
                      classes.formControl,
                      classes.inputBg,
                      classes.dateDropdown
                    )}>
                    <InputLabel id="demo-simple-select-outlined-label">
                      Year
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={date}
                      onChange={handleDate2Change}
                      label="Year">
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </TableCell>
              <TableCell className={classes.tableBorder} align="center">


              <FormControl
                  variant="outlined"
                  className={clsx(classes.formControl, classes.inputBg)}>
                  <InputLabel id="natureOfAccident">
                    Select Nature of Accident
                  </InputLabel>
                  <Select
                    labelId="natureOfAccident"
                    id="natureOfAccident"
                    name="natureOfAccident"
                    value={state.natureOfAccident}
                    onChange={handleStateChange}
                    >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={'angleImpactCollision'}>Angle/Side-Impact Collision</MenuItem>
                    <MenuItem value={'animalCollision'}>Animal Collision</MenuItem>
                    <MenuItem value={'cyclist Collision'}>Cyclist Collision</MenuItem>
                    <MenuItem value={'headOnFrontImpactCollision'}>Head-On/Front-Impact Collision</MenuItem>
                    <MenuItem value={'motorcycleCollision'}>Motorcycle Collision</MenuItem>
                    <MenuItem value={'multiVehicleCollision'}>Multi-Vehicle Collision</MenuItem>
                    <MenuItem value={'pedestrianCollision'}>Pedestrian Collision</MenuItem>
                    <MenuItem value={'rearEndCollision'}>Rear-End Collision</MenuItem>
                    <MenuItem value={'rollover'}>Rollover</MenuItem>
                    <MenuItem value={'runOffCollision'}>Run-Off-Road Collision</MenuItem>
                    <MenuItem value={'sideSwipe'}>Side-Swipe</MenuItem>
                    <MenuItem value={'others'}>Others</MenuItem>
                  </Select>
                </FormControl>
                  
                   {state.natureOfAccident == 'others' && <FormControl
                      variant="outlined"
                      className={clsx(classes.formControl, classes.textOptional, classes.inputBg)}>
                     <TextField fullWidth={true} id="outlined-basic" name='' label="Accident Type" variant="outlined" />
                   </FormControl>}


                      {/* <Box className={classes.resetIcon}  component='span'>
                        <img src='./images/reset.svg' />
                      </Box> */}
              </TableCell>
              <TableCell className={classes.tableBorder} align="center">
                <FormControl
                  variant="outlined"
                  className={clsx(classes.formControl, classes.inputBg)}>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Select
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={date}
                    onChange={handleDate2Change}
                    label="Year">
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell className={classes.tableBorder} align="center">
              <FormControl
                  variant="outlined"
                  className={clsx(classes.formControl, classes.inputBg)}>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Select
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={date}
                    onChange={handleDate2Change}
                    label="Year">
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell className={classes.tableBorder} align="center">
                <FormControl
                  component="fieldset"
                  className={clsx(classes.inlineRadio, classes.radioField)}>
                  <RadioGroup
                    className={classes.inlineRadio}
                    aria-label="radio"
                    name="gender1"
                    value={radioValue}
                    onChange={handleRadioChange}>
                    <FormControlLabel
                      value="yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="no"
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
              </TableCell>
            </TableRow>
            
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

AccidentTable.propTypes = {
  className: PropTypes.string
};

AccidentTable.defaultProps = {};

export default AccidentTable;
