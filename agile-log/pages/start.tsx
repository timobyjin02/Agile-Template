import Layout from "@/components/Layout";
import { TOKEN, DATABASE_ID } from "../config";
import ProjectItems from "@/components/sprint/ProjectItems";
import styled from "@emotion/styled";
import TitleHeader from "@/components/title/TitleHeader";
import Profile from "@/components/side/Profile";
import Service from "@/components/side/Service";
import Contact from "@/components/side/Contact";

function Start({ projects }: any) {
  // console.log(projects);
  return (
    <Layout>
      <Title>공부한 것을 기록하는 공간</Title>
      <Container>
        <NotionDataContainer>
          <TitleHeader>🪃 Agile 애자일</TitleHeader>
          <Grid>
            {projects.results.map((aProject: any) => (
              <ProjectItems key={aProject.id} data={aProject} />
            ))}
          </Grid>
          <TitleHeader>📝 TIL (Today I Learned)</TitleHeader>
        </NotionDataContainer>
        <SideContainer>
          <Profile />
          <Service />
          <Contact />
        </SideContainer>
      </Container>
    </Layout>
  );
}

// 빌드 타임에 호출 -> 데이터를 가져온 후 화면에 렌더링
export async function getStaticProps() {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "content-type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({ page_size: 100 }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );

  const projects = await res.json();
  // console.log(projects);

  return {
    props: { projects }, // will be passed to the page component as props
  };
}

export default Start;

const Container = styled.div`
  display: flex;
  margin-left: 40px;
`;

const NotionDataContainer = styled.div`
  width: 900px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 0 5px;
  margin-bottom: 10px;
`;

const Title = styled.h1`
  margin-left: 40px;
  font-size: 20px;
  font-weight: bold;

  @media (min-width: 640px) {
    font-size: 6xl;
  }
`;

const Grid = styled.div`
  display: flex;
  /* display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 4rem;
  padding: 10px;
  margin: 6px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  } */
`;

const SideContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px 0 0 50px;
  margin-bottom: 10px;
`;
