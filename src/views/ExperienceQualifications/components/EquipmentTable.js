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
    //   paddingBottom:'10px'
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
  formControl:{
    verticalAlign:'middle',
    width:'100%'
  },
  dateDropdown:{
    width:'85px'
  },
  inlineSpan:{
    margin:'0 10px',
    padding: '15px 0',
  },
  dayPickContainer:{
    display: "inline-flex"
  },
  fixedSelect:{
    width:'165px'
  }
}));

const EquipmentTable = props => {
  const { className, isReview, ...rest } = props;
  const [date, setDate] = React.useState('');

  const classes = useStyles();



  const handleDate2Change = event => {
    setDate(event.target.value);
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
                <TableCell className={classes.tableBorder} align="left">
                  Equipment Class
                </TableCell>
                <TableCell className={classes.tableBorder} align="center">
                  Equipment Type (select all that apply)
                </TableCell>
                <TableCell className={classes.tableBorder} align="center">
                  Dates
                </TableCell>
                <TableCell className={classes.tableBorder} align="center">
                  Approx Number of Miles
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell
                  className={classes.tableBorder}
                  component="th"
                  align="left"
                  scope="row">
                  Straight Truck
                </TableCell>
                <TableCell className={classes.tableBorder} align="center">
                  <ButtonGroup
                  className={classes.inputBg}
                    size="large"
                    color="primary"
                    aria-label="large outlined primary button group">
                    <Button>Dump</Button>
                    <Button>Flat</Button>
                    <Button>Three</Button>
                    <Button>Reefer</Button>
                    <Button>Tank</Button>
                    <Button>Van</Button>
                  </ButtonGroup>
                </TableCell>
                <TableCell className={classes.tableBorder} align="center">
                  <Box className={classes.dayPickContainer} component="div">
                    <span className={classes.inlineSpan}>From</span>
                    <FormControl
                      variant="outlined"
                      className={clsx(classes.formControl, classes.inputBg,  classes.dateDropdown)}>
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
                      className={clsx(classes.formControl, classes.inputBg,  classes.dateDropdown)}>
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
                    <span className={classes.inlineSpan}>to</span>

                    <FormControl
                      variant="outlined"
                      className={clsx(classes.formControl, classes.inputBg,  classes.dateDropdown)}>
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
                      className={clsx(classes.formControl, classes.inputBg,  classes.dateDropdown)}>
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
                      className={clsx(classes.formControl, classes.inputBg, classes.fixedSelect,)}>
                      <InputLabel id="demo-simple-select-outlined-label">
                        Select Range
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
              </TableRow>
              <TableRow>
                <TableCell
                  className={classes.tableBorder}
                  component="th"
                  align="left"
                  scope="row">
                  Tractor &amp; Semi-Trailer
                </TableCell>
                <TableCell className={classes.tableBorder} align="center">
                  <ButtonGroup
                  className={classes.inputBg}
                    size="large"
                    color="primary"
                    aria-label="large outlined primary button group">
                    <Button>Dump</Button>
                    <Button>Flat</Button>
                    <Button>Three</Button>
                    <Button>Reefer</Button>
                    <Button>Tank</Button>
                    <Button>Van</Button>
                  </ButtonGroup>
                </TableCell>
                <TableCell className={classes.tableBorder} align="center">
                  <Box className={classes.dayPickContainer} component="div">
                    <span className={classes.inlineSpan}>From</span>
                    <FormControl
                      variant="outlined"
                      className={clsx(classes.formControl, classes.inputBg,  classes.dateDropdown)}>
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
                      className={clsx(classes.formControl, classes.inputBg,  classes.dateDropdown)}>
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
                    <span className={classes.inlineSpan}>to</span>

                    <FormControl
                      variant="outlined"
                      className={clsx(classes.formControl, classes.inputBg,  classes.dateDropdown)}>
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
                      className={clsx(classes.formControl, classes.inputBg,  classes.dateDropdown)}>
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
                      className={clsx(classes.formControl, classes.inputBg, classes.fixedSelect,)}>
                      <InputLabel id="demo-simple-select-outlined-label">
                        Select Range
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
              </TableRow>
              <TableRow>
                <TableCell
                  className={classes.tableBorder}
                  component="th"
                  align="left"
                  scope="row">
                  Tractor - Two Trailers
                </TableCell>
                <TableCell className={classes.tableBorder} align="center">
                  <ButtonGroup
                  className={classes.inputBg}
                    size="large"
                    color="primary"
                    aria-label="large outlined primary button group">
                    <Button>Dump</Button>
                    <Button>Flat</Button>
                    <Button>Three</Button>
                    <Button>Reefer</Button>
                    <Button>Tank</Button>
                    <Button>Van</Button>
                  </ButtonGroup>
                </TableCell>
                <TableCell className={classes.tableBorder} align="center">
                  <Box className={classes.dayPickContainer} component="div">
                    <span className={classes.inlineSpan}>From</span>
                    <FormControl
                      variant="outlined"
                      className={clsx(classes.formControl, classes.inputBg,  classes.dateDropdown)}>
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
                      className={clsx(classes.formControl, classes.inputBg,  classes.dateDropdown)}>
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
                    <span className={classes.inlineSpan}>to</span>

                    <FormControl
                      variant="outlined"
                      className={clsx(classes.formControl, classes.inputBg,  classes.dateDropdown)}>
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
                      className={clsx(classes.formControl, classes.inputBg,  classes.dateDropdown)}>
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
                      className={clsx(classes.formControl, classes.inputBg, classes.fixedSelect,)}>
                      <InputLabel id="demo-simple-select-outlined-label">
                        Select Range
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
              </TableRow>
              <TableRow>
                <TableCell
                  className={classes.tableBorder}
                  component="th"
                  align="left"
                  scope="row">
                  Tractor - Three Trailers
                </TableCell>
                <TableCell className={classes.tableBorder} align="center">
                  <ButtonGroup
                  className={classes.inputBg}
                    size="large"
                    color="primary"
                    aria-label="large outlined primary button group">
                    <Button>Dump</Button>
                    <Button>Flat</Button>
                    <Button>Three</Button>
                    <Button>Reefer</Button>
                    <Button>Tank</Button>
                    <Button>Van</Button>
                  </ButtonGroup>
                </TableCell>
                <TableCell className={classes.tableBorder} align="center">
                  <Box className={classes.dayPickContainer} component="div">
                    <span className={classes.inlineSpan}>From</span>
                    <FormControl
                      variant="outlined"
                      className={clsx(classes.formControl, classes.inputBg,  classes.dateDropdown)}>
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
                      className={clsx(classes.formControl, classes.inputBg,  classes.dateDropdown)}>
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
                    <span className={classes.inlineSpan}>to</span>

                    <FormControl
                      variant="outlined"
                      className={clsx(classes.formControl, classes.inputBg,  classes.dateDropdown)}>
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
                      className={clsx(classes.formControl, classes.inputBg,  classes.dateDropdown)}>
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
                      className={clsx(classes.formControl, classes.inputBg, classes.fixedSelect,)}>
                      <InputLabel id="demo-simple-select-outlined-label">
                        Select Range
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
              </TableRow>
              <TableRow>
                <TableCell
                  className={classes.tableBorder}
                  component="th"
                  align="left"
                  scope="row">
                  Motorcoach - School Bus: 9 – 15 passengers
                </TableCell>
                <TableCell className={classes.tableBorder} align="center">
                  
                </TableCell>
                <TableCell className={classes.tableBorder} align="center">
                  <Box className={classes.dayPickContainer} component="div">
                    <span className={classes.inlineSpan}>From</span>
                    <FormControl
                      variant="outlined"
                      className={clsx(classes.formControl, classes.inputBg,  classes.dateDropdown)}>
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
                      className={clsx(classes.formControl, classes.inputBg,  classes.dateDropdown)}>
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
                    <span className={classes.inlineSpan}>to</span>

                    <FormControl
                      variant="outlined"
                      className={clsx(classes.formControl, classes.inputBg,  classes.dateDropdown)}>
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
                      className={clsx(classes.formControl, classes.inputBg,  classes.dateDropdown)}>
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
                      className={clsx(classes.formControl, classes.inputBg, classes.fixedSelect,)}>
                      <InputLabel id="demo-simple-select-outlined-label">
                        Select Range
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
              </TableRow>
              <TableRow>
                <TableCell
                  className={classes.tableBorder}
                  component="th"
                  align="left"
                  scope="row">
                  Motorcoach - School Bus: 16 + passengers
                </TableCell>
                <TableCell className={classes.tableBorder} align="center">
                  
                </TableCell>
                <TableCell className={classes.tableBorder} align="center">
                  <Box className={classes.dayPickContainer} component="div">
                    <span className={classes.inlineSpan}>From</span>
                    <FormControl
                      variant="outlined"
                      className={clsx(classes.formControl, classes.inputBg,  classes.dateDropdown)}>
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
                      className={clsx(classes.formControl, classes.inputBg,  classes.dateDropdown)}>
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
                    <span className={classes.inlineSpan}>to</span>

                    <FormControl
                      variant="outlined"
                      className={clsx(classes.formControl, classes.inputBg,  classes.dateDropdown)}>
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
                      className={clsx(classes.formControl, classes.inputBg,  classes.dateDropdown)}>
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
                      className={clsx(classes.formControl, classes.inputBg, classes.fixedSelect,)}>
                      <InputLabel id="demo-simple-select-outlined-label">
                        Select Range
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
              </TableRow>


              <TableRow>
                <TableCell
                  className={classes.tableBorder}
                  component="th"
                  align="left"
                  scope="row">

                    <FormControl
                      variant="outlined"
                      className={clsx(classes.formControl, classes.inputBg)}>
                
                    <TextField fullWidth={true} id="outlined-basic" label="Others" variant="outlined" />

                    </FormControl>
                </TableCell>
                <TableCell className={classes.tableBorder} align="center">
                  
                </TableCell>
                <TableCell className={classes.tableBorder} align="center">
                  <Box className={classes.dayPickContainer} component="div">
                    <span className={classes.inlineSpan}>From</span>
                    <FormControl
                      variant="outlined"
                      className={clsx(classes.formControl, classes.inputBg,  classes.dateDropdown)}>
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
                      className={clsx(classes.formControl, classes.inputBg,  classes.dateDropdown)}>
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
                    <span className={classes.inlineSpan}>to</span>

                    <FormControl
                      variant="outlined"
                      className={clsx(classes.formControl, classes.inputBg,  classes.dateDropdown)}>
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
                      className={clsx(classes.formControl, classes.inputBg,  classes.dateDropdown)}>
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
                      className={clsx(classes.formControl, classes.inputBg, classes.fixedSelect,)}>
                      <InputLabel id="demo-simple-select-outlined-label">
                        Select Range
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
              </TableRow>


            </TableBody>
          </Table>
        </TableContainer>

      
    </div>
  );
};

EquipmentTable.propTypes = {
  className: PropTypes.string
};

EquipmentTable.defaultProps = {};

export default EquipmentTable;
