import ProjectItem from "./ProjectItem";
const ProjectList = ({ projects }) => {
  console.table(projects);
  return (
    <div>
      {projects.map((project, i) => (
        <ProjectItem key={`${i}-${project.id}`} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
