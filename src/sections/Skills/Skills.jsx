import styles from './SkillsStyles.module.css';
import checkMarkIcon from '../../assets/checkmark-dark.svg';
import checkMarkIcon2 from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon2} skill="HTML" />
        <SkillList src={checkMarkIcon2} skill="CSS" />
        <SkillList src={checkMarkIcon2} skill="Javascript" />
        <SkillList src={checkMarkIcon2} skill="C#" />
        <SkillList src={checkMarkIcon2} skill="Java" />
        <SkillList src={checkMarkIcon2} skill="R" />
        <SkillList src={checkMarkIcon2} skill="MySQL" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon2} skill="React" />
        <SkillList src={checkMarkIcon2} skill="NodeJS" />
        <SkillList src={checkMarkIcon2} skill="PHP" />
        <SkillList src={checkMarkIcon2} skill="SQLLite" />
        <SkillList src={checkMarkIcon2} skill="Oracle" />
      </div>
      <hr />
    </section>
  );
}

export default Skills;
