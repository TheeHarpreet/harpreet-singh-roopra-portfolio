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
          link="https://github.com/TheeHarpreet/Criminal-Record-Management-System"
          h3="Criminal Record Management System"
          p="Efficient Crime Data Management and Analysis"
        />
        <ProjectCard
          src={viberr}
          link="https://github.com/TheeHarpreet/Smart-Door-Security-System"
          h3="Smart Door Security System"
          p="IoT-based Smart Security System"
        />
        <ProjectCard
          src={viberr}
          link="https://github.com/TheeHarpreet/Smart-Security-App"
          h3="Smart Security App"
          p="Mobile App to complement the Smart Door Security System"
        />
      </div>
    </section>
  );
}

export default Projects;
