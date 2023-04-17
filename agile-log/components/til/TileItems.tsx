import styled from "@emotion/styled";

function TileItems({ data }: any) {
  const title = data.properties.Title.title[0].plain_text;
  const mainCategory = data.properties["Main Category"].select.name;
  const category = data.properties.Category.select.name;
  const tags = data.properties.Tags.multi_select[0].name;
  const created_time = data.properties["Created Time"].created_time;

  const date = new Date(created_time);
  const formatted_date = date.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return (
    <TableRow>
      <TableData>{title}</TableData>
      <TableData>{mainCategory}</TableData>
      <TableData>{category}</TableData>
      <TableData>{tags}</TableData>
      <TableData>{formatted_date}</TableData>
    </TableRow>
  );
}

export default TileItems;

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
