import React from "react";
import styled from "@emotion/styled";
import { TIL_DATABASE_ID, TOKEN } from "@/config";
import TileItems from "./TileItems";

function TilTable({ til }: any) {
  // console.log(til);
  return (
    <TableWrapper>
      <TableHeader>
        <TableRow>
          <TableHeading>Title</TableHeading>
          <TableHeading>Main Category</TableHeading>
          <TableHeading>Category</TableHeading>
          <TableHeading>Tags</TableHeading>
          <TableHeading>Created Time</TableHeading>
        </TableRow>
      </TableHeader>
      <TableBody>
        {til.results.map((aTil: any) => (
          <TileItems key={aTil.id} data={aTil} />
        ))}
      </TableBody>
    </TableWrapper>
  );
}

export default TilTable;

// Table Wrapper
const TableWrapper = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

// Table Row
const TableRow = styled.tr`
  &:nth-of-type(even) {
    background-color: #f2f2f2;
  }
`;

// Table Data
const TableData = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

// Table Heading
const TableHeading = styled.th`
  padding: 6px 0 6px 8px;
  text-align: left;
`;

// Table Header
const TableHeader = styled.thead``;

// Table Body
const TableBody = styled.tbody``;
