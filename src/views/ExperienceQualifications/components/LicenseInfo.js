import React, { useState, Fragment } from 'react';
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
  FormGroup,
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
import months from 'constants/global'

const useStyles = makeStyles(theme => ({
  root: {
    paddingBottom: '10px'
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
  inlineCheckbox: {
    width: '170px',
    display: 'inline-flex',
    '&:last-child': {
      width: '200px',
    }
  },
  dayPickContainer: {
    display: 'inline-flex'
  },
  fixedSelect: {
    width: '165px'
  },
  tableCheckbox: {
    padding: '2px'
  }
}));

const LicenseInfo = props => {
  const { className, isReview, ...rest } = props;
  const [date, setDate] = useState('');
  const [radioValue, setRadioValue] = useState('female');
  const [state, setState] = useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });


  const vehicleClass = [
    'CDL - A',
    'CDL - B',
    'CDL - C',
    'CDL - Permit',
    'Non-CDL', 'Other'
  ]



  const classes = useStyles();

  const handleDate2Change = event => {
    setDate(event.target.value);
  };

  const handleRadioChange = event => {
    setRadioValue(event.target.value);
  };


  const handleCheckboxChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };



  console.log(months)

  return (
    <Fragment>
      <div {...rest} className={clsx(classes.root, className)}>
        <TableContainer>
          <Table
            size="small"
            className={clsx(classes.table, classes.tableBorder)}
            aria-label="simple table">
            <TableHead className={classes.tableHead}>
              <TableRow>
                <TableCell className={classes.tableBorder} align="center">
                  Current State of Residence
              </TableCell>
                <TableCell className={classes.tableBorder} align="center">
                  Current License Number
              </TableCell>
                <TableCell className={classes.tableBorder} align="center">
                  Class
              </TableCell>
                <TableCell className={classes.tableBorder} align="center">
                  Expiration Date
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
                    Minnesota
                </TableCell>

                <TableCell className={classes.tableBorder} align="center">
                  <FormControl
                    variant="outlined"
                    className={clsx(classes.formControl, classes.inputBg)}>

                    <TextField fullWidth={true} id="outlined-basic" label="Licence No." variant="outlined" />

                  </FormControl>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={props.isChecked}
                        onChange={props.handleCheckboxChange}
                        name="noLicence"
                        color="secondary"
                      />
                    }
                    label="No license in this state yet."
                  />

                </TableCell>
                <TableCell className={classes.tableBorder} align="center">
                  <FormControl
                    variant="outlined"
                    className={clsx(classes.formControl, classes.inputBg)}>
                    <InputLabel id="demo-simple-select-outlined-label">
                      Select Class
                  </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={props.selectedVehicleClass}
                      onChange={props.handleClassChange}
                      label="Year">
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {vehicleClass.map((vehicleClass, index) => {
                        return <MenuItem key={index} value={vehicleClass}>{vehicleClass}</MenuItem>
                      })}
                    </Select>
                  </FormControl>
                </TableCell>

                <TableCell className={classes.tableBorder} align="center">
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
                          <em>Select Month</em>
                        </MenuItem>
                        {months.map((month)=>{
                          return <MenuItem value={month.id}>{month.name}</MenuItem>
                        })}


                        {/* <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem> */}
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
                        Day
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

              </TableRow>


            </TableBody>
          </Table>
        </TableContainer>
      </div>


    </Fragment>
  );
};

LicenseInfo.propTypes = {
  className: PropTypes.string
};

LicenseInfo.defaultProps = {};

export default LicenseInfo;
