import styled from "@emotion/styled";

function Contact() {
  return (
    <Container>
      <Title>📢 Contact</Title>
    </Container>
  );
}

export default Contact;

const Container = styled.div`
  width: 250px;
  height: 120px;
  padding: 10px;
  border-radius: 7px;
  background-color: #f6f3f8;
`;

const Title = styled.h2`
  font-weight: 600;
`;
