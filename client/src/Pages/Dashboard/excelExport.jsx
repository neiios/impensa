import React from "react";
import ReactExport from "react-export-excel";
import styled from "styled-components";
import { Button } from "../../components/Button";

export const ButtonContainer = styled.div`
  margin-left: auto;
  margin-right: 10px;
`;

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

function ExcelExport({ expenses }) {
  const data = expenses.slice(Math.max(expenses.length - expenses.length, 0));

  const camelCase = (str) => {
    return str.substring(0, 1).toUpperCase() + str.substring(1);
  };
  const filterColumns = (data) => {
    const columns = Object.keys(data[0]);
    const filterColsByKey = columns.filter(
      (c) => c !== "user_id" && c !== "expense_id"
    );
    return filterColsByKey; // OR return columns
  };

  return (
    <ButtonContainer>
      <ExcelFile
        filename="Impensa_Export_data"
        element={<Button variant="dark-green">Export .xlsx</Button>}
      >
        <ExcelSheet data={data} name="Impensa Expenses">
          {filterColumns(data).map((col) => {
            return <ExcelColumn label={camelCase(col)} value={col} />;
          })}
        </ExcelSheet>
      </ExcelFile>
    </ButtonContainer>
  );
}

export default ExcelExport;
