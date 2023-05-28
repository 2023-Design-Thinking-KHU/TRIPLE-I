import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, ratio, stockprice, quantity, sum) {
  return { name, ratio, stockprice, quantity, sum };
}

const rows = [
  createData("네이버", 14.48, 213500, 10, 2135000),
  createData("삼성SDI", 21.57, 665000, 20, 13300000),
  createData("카카오", 23.79, 56600, 15, 849000),
  createData("LG", 27.96, 88400, 50, 4420000),
  createData("SK이노베이션", 12.2, 177100, 49, 8676900),
];

const subtotal = rows.reduce((total, row) => total + row.sum, 0);

// 수익률 계산 함수
function calculateReturn(initialValue, finalValue) {
    const returnPercentage = ((finalValue - initialValue) / initialValue) * 100;
    return returnPercentage.toFixed(2); // 소수점 2자리까지 반올림하여 반환
  }
// 위험도 대비 수익률 계산 함수
function calculateReturnRiskRatio(returnPercentage, riskIndicator) {
    const returnRiskRatio = returnPercentage / riskIndicator;
    return returnRiskRatio.toFixed(2); // 소수점 2자리까지 반올림하여 반환
  }
const SubtotalTable = () => (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="subtotal table">
        <TableBody>
          <StyledTableRow>
            <StyledTableCell colSpan={4} align="center">
              총 투자 금액:
            </StyledTableCell>
            <StyledTableCell align="center">{subtotal}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell colSpan={4} align="center">
              수익률
            </StyledTableCell>
            <StyledTableCell align="center">{calculateReturn()}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell colSpan={4} align="center">
              위험도
            </StyledTableCell>
            <StyledTableCell align="center">50%</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell colSpan={4} align="center">
              위험도 대비 수익률
            </StyledTableCell>
            <StyledTableCell align="center">
              {calculateReturnRiskRatio()}
            </StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
export default function Table2() {
  return (
    <React.Fragment>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 1200 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>투자종목</StyledTableCell>
            <StyledTableCell align="right">비중</StyledTableCell>
            <StyledTableCell align="right">주가</StyledTableCell>
            <StyledTableCell align="right">수량</StyledTableCell>
            <StyledTableCell align="right">총액</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.ratio}</StyledTableCell>
              <StyledTableCell align="right">{row.stockprice}</StyledTableCell>
              <StyledTableCell align="right">{row.quantity}</StyledTableCell>
              <StyledTableCell align="right">{row.sum}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    <div style={
    {marginTop:20}
    }>
    <SubtotalTable />
    </div>
    </TableContainer>
    </React.Fragment>
  );
}
