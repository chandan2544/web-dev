import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import ProjectCard from '../../common/ProjectCard';
import ums from '../../assets/ums.png';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/chandan2544/Banking-Mangement-System"
          h3="Banking App"
          p="ATM Console based Application"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/chandan2544/projects/blob/main/HotelManagementSystem.java"
          h3="Hotel Management System"
    
        />
        <ProjectCard
          src={ums}
          link="https://github.com/chandan2544/frontendOfUserMangementSystem"
          h3="Full-Stack User Management System"
          p="to manage the users details "
        />
      </div>
    </section>
  );
}

export default Projects;
