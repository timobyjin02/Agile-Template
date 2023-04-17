import Image from "next/image";
import styled from "@emotion/styled";

interface Props {
  data: {
    cover: {
      file: {
        url: string;
      };
    };
    properties: {
      태그: {
        multi_select: {
          id: string;
          name: string;
        }[];
      };
    };
  };
}

function ProjectItems({ data }: Props) {
  const imgSrc = data.cover.file.url;
  const tags = data.properties.태그.multi_select;

  return (
    <ProjectCard>
      <ProjectImage src={imgSrc} alt="cover image" />
      <div className="p-4 flex flex-col">
        <ProjectTags>
          {tags.map(aTag => (
            <Tag key={aTag.id}>{aTag.name}</Tag>
          ))}
        </ProjectTags>
      </div>
    </ProjectCard>
  );
}

export default ProjectItems;

const ProjectCard = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  margin-right: 2rem;
  border: 1px solid #d1d5db;
  border-radius: 0.75rem;
  transition: all 300ms ease;
  transform-origin: center;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }

  &:last-of-type {
    margin-right: 0;
  }

  @media (prefers-color-scheme: dark) {
    border-color: rgba(209, 213, 219, 0.5);
    box-shadow: 0 10px 15px -3px rgba(156, 163, 175, 0.3),
      0 4px 6px -2px rgba(156, 163, 175, 0.2);
    &:hover {
      box-shadow: 0 10px 15px -3px rgba(156, 163, 175, 0.4),
        0 4px 6px -2px rgba(156, 163, 175, 0.3);
    }
  }
`;

const ProjectImage = styled.img`
  border-top-left-radius: 0.75rem;
  border-top-right-radius: 0.75rem;
`;

const ProjectTags = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Tag = styled.h1`
  padding: 0.2rem 0.6rem;
  border-radius: 0.25rem;
  background-color: #e5f3ff;
  @media (prefers-color-scheme: dark) {
    background-color: #1f2d3d;
  }
`;
