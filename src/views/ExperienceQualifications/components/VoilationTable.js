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
  inlineCheckbox:{
      width:'170px',
      display: 'inline-flex',
      '&:last-child':{
         width:'200px',
      }
  },
  dayPickContainer: {
    display: 'inline-flex'
  },
  fixedSelect: {
    width: '165px'
  },
  tableCheckbox:{
      padding:'2px'
  }
}));

const VoilationTable = props => {
  const { className, isReview, ...rest } = props;
  const [date, setDate] = useState('');
  const [radioValue, setRadioValue] = useState('female');
  const [state, setState] = useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

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
                Date Convicted
              </TableCell>
              <TableCell className={classes.tableBorder} align="center">
                Violations (excluding parking)
              </TableCell>
              <TableCell className={classes.tableBorder} align="center">
                State Violation Occurred
              </TableCell>
              <TableCell className={classes.tableBorder} align="center">
                Penalty (select all that apply)
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
                <FormGroup  row>
                  <FormControlLabel
                    className={classes.inlineCheckbox}
                    control={
                      <Checkbox
                        className={classes.tableCheckbox}
                        checked={state.checkedB}
                        onChange={handleCheckboxChange}
                        name="checkedB"
                        color="secondary"
                      />
                    }
                    label="Fined"
                  />
                  <FormControlLabel
                  className={classes.inlineCheckbox}
                    control={
                      <Checkbox
className={classes.tableCheckbox}
                        checked={state.checkedB}
                        onChange={handleCheckboxChange}
                        name="checkedB"
                        color="secondary"
                      />
                    }
                    label="Imprisoned"
                  />
                  <FormControlLabel
                  className={classes.inlineCheckbox}
                    control={
                      <Checkbox
className={classes.tableCheckbox}
                        checked={state.checkedB}
                        onChange={handleCheckboxChange}
                        name="checkedB"
                        color="secondary"
                      />
                    }
                    label="License Points Assessed"
                  />
                </FormGroup>
                <FormGroup row >
                  <FormControlLabel
                  className={classes.inlineCheckbox}
                    control={
                      <Checkbox
className={classes.tableCheckbox}
                        checked={state.checkedB}
                        onChange={handleCheckboxChange}
                        name="checkedB"
                        color="secondary"
                      />
                    }
                    label="License Suspended"
                  />
                  <FormControlLabel
                  className={classes.inlineCheckbox}
                    control={
                      <Checkbox
className={classes.tableCheckbox}
                        checked={state.checkedB}
                        onChange={handleCheckboxChange}
                        name="checkedB"
                        color="secondary"
                      />
                    }
                    label="Ticketed"
                  />
                  <FormControlLabel
                  className={classes.inlineCheckbox}
                    control={
                      <Checkbox
className={classes.tableCheckbox}
                        checked={state.checkedB}
                        onChange={handleCheckboxChange}
                        name="checkedB"
                        color="secondary"
                      />
                    }
                    label="Traffic School"
                  />
                </FormGroup>
              </TableCell>
            </TableRow>
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
                <FormGroup  row>
                  <FormControlLabel
                    className={classes.inlineCheckbox}
                    control={
                      <Checkbox
className={classes.tableCheckbox}
                        checked={state.checkedB}
                        onChange={handleCheckboxChange}
                        name="checkedB"
                        color="secondary"
                      />
                    }
                    label="Fined"
                  />
                  <FormControlLabel
                  className={classes.inlineCheckbox}
                    control={
                      <Checkbox
className={classes.tableCheckbox}
                        checked={state.checkedB}
                        onChange={handleCheckboxChange}
                        name="checkedB"
                        color="secondary"
                      />
                    }
                    label="Imprisoned"
                  />
                  <FormControlLabel
                  className={classes.inlineCheckbox}
                    control={
                      <Checkbox
className={classes.tableCheckbox}
                        checked={state.checkedB}
                        onChange={handleCheckboxChange}
                        name="checkedB"
                        color="secondary"
                      />
                    }
                    label="License Points Assessed"
                  />
                </FormGroup>
                <FormGroup row >
                  <FormControlLabel
                  className={classes.inlineCheckbox}
                    control={
                      <Checkbox
className={classes.tableCheckbox}
                        checked={state.checkedB}
                        onChange={handleCheckboxChange}
                        name="checkedB"
                        color="secondary"
                      />
                    }
                    label="License Suspended"
                  />
                  <FormControlLabel
                  className={classes.inlineCheckbox}
                    control={
                      <Checkbox
className={classes.tableCheckbox}
                        checked={state.checkedB}
                        onChange={handleCheckboxChange}
                        name="checkedB"
                        color="secondary"
                      />
                    }
                    label="Ticketed"
                  />
                  <FormControlLabel
                  className={classes.inlineCheckbox}
                    control={
                      <Checkbox
className={classes.tableCheckbox}
                        checked={state.checkedB}
                        onChange={handleCheckboxChange}
                        name="checkedB"
                        color="secondary"
                      />
                    }
                    label="Traffic School"
                  />
                </FormGroup>
              </TableCell>
            </TableRow>
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
                <FormGroup  row>
                  <FormControlLabel
                    className={classes.inlineCheckbox}
                    control={
                      <Checkbox
className={classes.tableCheckbox}
                        checked={state.checkedB}
                        onChange={handleCheckboxChange}
                        name="checkedB"
                        color="secondary"
                      />
                    }
                    label="Fined"
                  />
                  <FormControlLabel
                  className={classes.inlineCheckbox}
                    control={
                      <Checkbox
className={classes.tableCheckbox}
                        checked={state.checkedB}
                        onChange={handleCheckboxChange}
                        name="checkedB"
                        color="secondary"
                      />
                    }
                    label="Imprisoned"
                  />
                  <FormControlLabel
                  className={classes.inlineCheckbox}
                    control={
                      <Checkbox
className={classes.tableCheckbox}
                        checked={state.checkedB}
                        onChange={handleCheckboxChange}
                        name="checkedB"
                        color="secondary"
                      />
                    }
                    label="License Points Assessed"
                  />
                </FormGroup>
                <FormGroup row >
                  <FormControlLabel
                  className={classes.inlineCheckbox}
                    control={
                      <Checkbox
className={classes.tableCheckbox}
                        checked={state.checkedB}
                        onChange={handleCheckboxChange}
                        name="checkedB"
                        color="secondary"
                      />
                    }
                    label="License Suspended"
                  />
                  <FormControlLabel
                  className={classes.inlineCheckbox}
                    control={
                      <Checkbox
className={classes.tableCheckbox}
                        checked={state.checkedB}
                        onChange={handleCheckboxChange}
                        name="checkedB"
                        color="secondary"
                      />
                    }
                    label="Ticketed"
                  />
                  <FormControlLabel
                  className={classes.inlineCheckbox}
                    control={
                      <Checkbox
className={classes.tableCheckbox}
                        checked={state.checkedB}
                        onChange={handleCheckboxChange}
                        name="checkedB"
                        color="secondary"
                      />
                    }
                    label="Traffic School"
                  />
                </FormGroup>
              </TableCell>
            </TableRow>
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
                <FormGroup  row>
                  <FormControlLabel
                    className={classes.inlineCheckbox}
                    control={
                      <Checkbox
className={classes.tableCheckbox}
                      
                        checked={state.checkedB}
                        onChange={handleCheckboxChange}
                        name="checkedB"
                        color="secondary"
                      />
                    }
                    label="Fined"
                  />
                  <FormControlLabel
                  className={classes.inlineCheckbox}
                    control={
                      <Checkbox
className={classes.tableCheckbox}
                        checked={state.checkedB}
                        onChange={handleCheckboxChange}
                        name="checkedB"
                        color="secondary"
                      />
                    }
                    label="Imprisoned"
                  />
                  <FormControlLabel
                  className={classes.inlineCheckbox}
                    control={
                      <Checkbox
className={classes.tableCheckbox}
                        checked={state.checkedB}
                        onChange={handleCheckboxChange}
                        name="checkedB"
                        color="secondary"
                      />
                    }
                    label="License Points Assessed"
                  />
                </FormGroup>
                <FormGroup row >
                  <FormControlLabel
                  className={classes.inlineCheckbox}
                    control={
                      <Checkbox
className={classes.tableCheckbox}
                        checked={state.checkedB}
                        onChange={handleCheckboxChange}
                        name="checkedB"
                        color="secondary"
                      />
                    }
                    label="License Suspended"
                  />
                  <FormControlLabel
                  className={classes.inlineCheckbox}
                    control={
                      <Checkbox
className={classes.tableCheckbox}
                        checked={state.checkedB}
                        onChange={handleCheckboxChange}
                        name="checkedB"
                        color="secondary"
                      />
                    }
                    label="Ticketed"
                  />
                  <FormControlLabel
                  className={classes.inlineCheckbox}
                    control={
                      <Checkbox
className={classes.tableCheckbox}
                        checked={state.checkedB}
                        onChange={handleCheckboxChange}
                        name="checkedB"
                        color="secondary"
                      />
                    }
                    label="Traffic School"
                  />
                </FormGroup>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

VoilationTable.propTypes = {
  className: PropTypes.string
};

VoilationTable.defaultProps = {};

export default VoilationTable;
