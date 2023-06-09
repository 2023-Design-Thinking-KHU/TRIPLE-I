import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch,useSelector } from "react-redux";

export default function Table2() {
const amount=useSelector(state => state.amount);
const allocation=useSelector(state => state.allocation);
const cleanedWeights=useSelector(state => state.cleanedWeights);
const leftoverFunds=useSelector(state => state.leftoverFunds);
const sharpIndex=useSelector(state => state.sharpIndex);
const volatility=useSelector(state => state.volatility);
const expectedReturn=useSelector(state => state.expectedReturn);

const filteredWeights = {};
for (const [key, value] of Object.entries(cleanedWeights)) {
  if (typeof value === 'number' && !isNaN(value) && value !== 0) {
    filteredWeights[key] = value;
  }
}
const filteredallocation = {};
for (const [key, value] of Object.entries(allocation)) {
  if (
    typeof value === 'number' &&
    !isNaN(value) &&
    value !== 0 &&
    filteredWeights[key]
  ) {
    filteredallocation[key] = value;
  }
}

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  border: "3px solid black",
  borderRadius: theme.shape.borderRadius,
  marginBottom: theme.spacing(2),
  fontWeight: "bold",
  "& .MuiTableCell-root:last-child": {
    borderRight: "3px solid black",
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,

  },
}));

const StyledTableCell1 = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    borderRight: "3px solid black",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    borderRight: "3px solid black",
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
  },
}));

function createData(name, ratio, stockprice, quantity, sum) {
  return { name, ratio, stockprice, quantity, sum };
}
const stockPriceFallback = "N/A";

const rows = Object.entries(filteredallocation).map(([key, value]) => {
  return createData(
    key,
    filteredWeights[key],
    stockPriceFallback,
    value,
    stockPriceFallback,
  );
});


const SubtotalTable = () => (
    <StyledTableContainer component={Paper} >
      <Table sx={{ minWidth: 500}} aria-label="subtotal table">
        <TableBody>
          <StyledTableRow>
            <StyledTableCell1 style={{fontSize:20}}colSpan={4} align="center">
              총 투자 금액
            </StyledTableCell1>
            <StyledTableCell1 style={{fontSize:20}} align="center">{amount}원</StyledTableCell1>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell1 style={{fontSize:20}} colSpan={4} align="center">
              예상 수익률
            </StyledTableCell1>
            <StyledTableCell1 style={{fontSize:20}} align="center">{expectedReturn}</StyledTableCell1>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell1 style={{fontSize:20}} colSpan={4} align="center">
              연간 변동성
            </StyledTableCell1>
            <StyledTableCell1 style={{fontSize:20}} align="center">{volatility}</StyledTableCell1>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell1 style={{fontSize:20}} colSpan={4} align="center">
              잔금
            </StyledTableCell1>
            <StyledTableCell1 style={{fontSize:20}} align="center">
              {Math.floor(leftoverFunds)}원
            </StyledTableCell1>
          </StyledTableRow>
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
  return (
    <React.Fragment>
      <div style={{ display: "flex", flexDirection: "column" }}>
      <SubtotalTable />
    <TableContainer component={Paper}>
      <Table sx={{ marginTop:5,minWidth: 500 }} aria-label="customized table">
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
    </TableContainer>
    </div>
    </React.Fragment>
  );
}
