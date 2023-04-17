import styled from "@emotion/styled";

function Service() {
  return (
    <Container>
      <Title>🙏 Service</Title>
    </Container>
  );
}

export default Service;

const Container = styled.div`
  width: 250px;
  height: 80px;
  margin-bottom: 30px;
  padding: 10px;
  border-radius: 7px;
  background-color: #e9f3f7;
`;

const Title = styled.h2`
  font-weight: 600;
`;
