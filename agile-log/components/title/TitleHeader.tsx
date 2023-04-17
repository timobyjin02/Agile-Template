import styled from "@emotion/styled";

interface ChildrenProps {
  children: React.ReactNode;
}
function TitleHeader({ children }: ChildrenProps) {
  return <Wrapper>{children}</Wrapper>;
}

export default TitleHeader;

const Wrapper = styled.div`
  width: 100%;
  padding: 2px 0;
  margin: 30px 0 15px 0;
  font-size: 20px;
  font-weight: 600;
  background-color: #f3eeee;
`;
