import styled from "@emotion/styled";

function Profile() {
  return (
    <Container>
      <Title>💻 Profile</Title>
    </Container>
  );
}

export default Profile;

const Container = styled.div`
  width: 250px;
  height: 300px;
  margin-bottom: 30px;
  padding: 10px;
  border-radius: 7px;
  background-color: #f8ecdf;
`;

const Title = styled.h2`
  font-weight: 600;
`;
