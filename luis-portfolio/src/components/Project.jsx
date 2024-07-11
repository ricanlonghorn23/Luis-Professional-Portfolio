const Project = ({ title, image, liveLink, repoLink }) => {
  return (
    <div className="project">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <a href={liveLink} target="_blank" rel="noopener noreferrer">
        Click here to view my website!
      </a>
      <a href={repoLink} target="_blank" rel="noopener noreferrer">
        Click here for my repository!
      </a>
    </div>
  );
};

export default Project;
