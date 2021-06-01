import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import React from "react";

export default function VehicleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Marca</TableCell>
            <TableCell>Modelo</TableCell>
            <TableCell>Ano</TableCell>
            <TableCell>Valor</TableCell>
            <TableCell align="right">Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              Ford
            </TableCell>
            <TableCell>Ka Sedan</TableCell>
            <TableCell>2020</TableCell>
            <TableCell>R$ 20.000</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
