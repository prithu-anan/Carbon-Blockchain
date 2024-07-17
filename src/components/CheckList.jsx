import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(standard, veryPoor, poor, average, good, veryGood) {
  return { standard, veryPoor, poor, average, good, veryGood };
}

const initialRows = [
  createData('Environmental Compliance', false, false, false, false, false),
  createData('Carbon Emission', false, false, false, false, false),
  createData('Natural Gas Consumption', false, false, false, false, false),
  createData('E-Waste Amount', false, false, false, false, false),
  createData('Pollution Index', false, false, false, false, false),
];

export default function CheckList() {
    // State to store checkbox values for each row
  const [rows, setRows] = React.useState(initialRows);

  // Handler functions to update checkbox values
  const handleCheckboxChange = (rowIndex, checkboxType) => {
    setRows(prevRows =>
      prevRows.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...row,
            veryPoor: checkboxType === 'veryPoor',
            poor: checkboxType === 'poor',
            average: checkboxType === 'average',
            good: checkboxType === 'good',
            veryGood: checkboxType === 'veryGood',
          };
        }
        return row;
      })
    );
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Compliance Standard</StyledTableCell>
            <StyledTableCell align="right">Very Poor (1)</StyledTableCell>
            <StyledTableCell align="right">Poor (2)</StyledTableCell>
            <StyledTableCell align="right">Average (3)</StyledTableCell>
            <StyledTableCell align="right">Good (4)</StyledTableCell>
            <StyledTableCell align="right">Very Good (5)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, rowIndex) => (
            <StyledTableRow key={row.standard}>
              <StyledTableCell component="th" scope="row">
                {row.standard}
              </StyledTableCell>
              <StyledTableCell align="right">
                <Checkbox 
                    checked={row.veryPoor} 
                    onChange={() => handleCheckboxChange(rowIndex, 'veryPoor')}
                />
                </StyledTableCell>
                <StyledTableCell align="right">
                <Checkbox 
                    checked={row.poor}
                    onChange={() => handleCheckboxChange(rowIndex, 'poor')}    
                />
                </StyledTableCell>
                <StyledTableCell align="right">
                <Checkbox 
                    checked={row.average}
                    onChange={() => handleCheckboxChange(rowIndex, 'average')}    
                />
                </StyledTableCell>
                <StyledTableCell align="right">
                <Checkbox 
                    checked={row.good}
                    onChange={() => handleCheckboxChange(rowIndex, 'good')}
                />
                </StyledTableCell>
                <StyledTableCell align="right">
                <Checkbox 
                    checked={row.veryGood}
                    onChange={() => handleCheckboxChange(rowIndex, 'veryGood')}
                />
                </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
