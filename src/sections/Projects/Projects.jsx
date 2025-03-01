import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/TheeHarpreet/performance-tracker-Project"
          h3="Performance Tracker Porject"
          p="Tracking the performance of employees"
        />
        <ProjectCard
          src={viberr}
          link="https://github.com/TheeHarpreet/performance-tracker-Project"
          h3="Performance Tracker Porject"
          p="Tracking the performance of employees"
        />
      </div>
    </section>
  );
}

export default Projects;
