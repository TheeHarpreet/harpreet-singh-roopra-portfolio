import styles from './HeroStyles.module.css';
import heroImg from '../../assets/carton pic of me_converted.jpg';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="profile picture of harpreet singh roopra"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Hi, I'm Harpreet!
        </h1>
        <h2>Computer Science Student at LBU</h2>
        <span>
          <a
            href="https://www.linkedin.com/in/harpreet-roopra-937779254/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="Linkedin Icon" />
          </a>
          <a href="https://github.com/TheeHarpreet" target="_blank">
            <img src={githubIcon} alt="github Icon" />
          </a>
        </span>
        <p className={styles.description}>
          highly motivated student studying Computer Science at Leeds Beckett
          University My skillset encompasses HTML, CSS, JavaScript, PHP, C#,
          Python, and React. I am consistently on the lookout for fresh chances
          to expand my expertise not only in this field but other fields aswell.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
