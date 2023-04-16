import Layout from "@/components/Layout";
import { TOKEN, DATABASE_ID } from "../config";

function Start({ projects }: any) {
  // console.log(projectNames);
  return (
    <Layout>
      총 프로젝트 : {projects.results.length}
      {projects.results.map((aProject: any) => (
        <h1 key={aProject.id}>
          {aProject.properties.Title.title[0].plain_text}
        </h1>
      ))}
    </Layout>
  );
}

export default Start;

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
  console.log(projects);

  const projectNames = projects.results.map(
    (aProject: any) => aProject.properties.Title.title[0].plain_text
  );

  console.log(`projectNames: ${projectNames}`);

  return {
    props: { projects }, // will be passed to the page component as props
  };
}
