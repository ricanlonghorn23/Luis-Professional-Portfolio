import './Portfolio.css';
import Project from './Project';

const projects = [
  { title: 'Task Manager Project', image: 'src/assets/images/task-manager-project.jpg', liveLink: ' https://ricanlonghorn23.github.io/Project-Task-Manager-Board/', repoLink: 'https://github.com/ricanlonghorn23/Project-Task-Manager-Board.git' },
  { title: 'Luis Weather Dahsboard', image: 'src/assets/images/weather.jpg', liveLink: 'https://ricanlonghorn23.github.io/Luis-Weather-Dashboard/', repoLink: 'https://github.com/ricanlonghorn23/Luis-Weather-Dashboard.git' },
  { title: 'Sports Chat Application', image: 'src/assets/images/sportschatapp.jpg', liveLink: 'https://sports-chat-application-qs3r.onrender.com', repoLink: 'https://github.com/Sora0216/Sports-Chat-Application' },
  { title: 'Texas Travel Planner', image: 'src/assets/images/TTP.jpg', liveLink: 'https://sd8295642.github.io/Texas-Travel-Planner/', repoLink: ' https://github.com/sd8295642/Texas-Travel-Planner' },
  { title: 'Note Taker', image: 'src/assets/images/notetaker.jpg', liveLink: 'https://note-taker-zytq.onrender.com', repoLink: 'https://github.com/ricanlonghorn23/Note-Taker.git' },
  { title: 'Top Level Marketing', image: 'src/assets/images/module-one-challenge.jpg', liveLink: 'https://ricanlonghorn23.github.io/Top-Level-Marketing-Agency/', repoLink: 'https://github.com/ricanlonghorn23/Top-Level-Marketing-Agency.git' },
  { title: 'Luis Personal Blog', image: 'src/assets/images/blog.jpg', liveLink: 'https://ricanlonghorn23.github.io/Luis-Personal-Blog/', repoLink: 'https://github.com/ricanlonghorn23/Luis-Personal-Blog.git' },
  { title: 'CSS Profile', image: 'src/assets/images/mod2.jpg', liveLink: 'https://ricanlonghorn23.github.io/module-two-challenge/', repoLink: 'https://github.com/ricanlonghorn23/module-two-challenge.git' },
];

const Portfolio = () => {
  return (
    <section className="projects">
      <h2>Portfolio</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
