import { Box, Typography, Button } from "@mui/material";
import "./administration.css";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import * as React from "react";
import ButtonAction from "../../components/buttonAction/ButtonAction";
import AccordionContainer from "../../components/accordion/Accordion";

const columns = [
  { id: "Numero", label: "Numero", minWidth: 170 },
  { id: "Tipo", label: "Tipo", minWidth: 170 },
  { id: "Titulo", label: "Titulo", minWidth: 100 },
  {
    id: "Fecha",
    label: "Fecha",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "Acciones",
    label: "Acciones",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
];

function createData(Numero, Tipo, Titulo, Fecha, Acciones) {
  return { Numero, Tipo, Titulo, Fecha, Acciones };
}

const rows = [
  createData(
    15,
    "Noticia",
    "Colaboracion con la municipalidad",
    "15/05/2023",
    <ButtonAction />
  ),
];

const Administration = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Box className="page-administration">
        <Typography
          variant="h1"
          color="initial"
          className="title-administration"
        >
          Administracion
        </Typography>
        <Box className="section-report">
          <Typography variant="h2" color="initial" className="title-reporte">
            Reporte
          </Typography>
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            {" "}
            {/* container reporte */}
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.code}
                        >
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === "number"
                                  ? column.format(value)
                                  : value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </Box>
        <Box className="section-accordion">
          <Typography variant="h2" color="initial" className="title-accordion">
            Ingresar nueva informacion
          </Typography>
          <AccordionContainer />
        </Box>
      </Box>
    </>
  );
};
export default Administration;
