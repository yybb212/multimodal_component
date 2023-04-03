import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function CustomTable(props) {
  const { title, data, rowNum, colNum } = props;

 // data 배열을 2차원 배열로 변환
    const rows = [];
    for (let i = 0; i < rowNum; i++) {
    const cells = [];
    for (let j = 0; j < colNum; j++) {
        const index = i * colNum + j;
        const cellData = data[index];
        cells.push(cellData);
    }
    rows.push(cells);
    }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell colSpan={colNum}>{title}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow key={i}>
              {row.map((cell, j) => (
                <TableCell key={j}>{cell}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CustomTable;



