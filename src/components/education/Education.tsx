import { useState } from "react";
import { education, learning, skills } from "./data";
// import './education.css'
const Education = () => {
    const [activeTab, setActiveTab] = useState('knowledge')

    const handleClick = (tabName) => {
        setActiveTab(tabName)
    }


  return (
    <div>
      <section id="education">
        <h1>Education</h1>
        {education.map((edu) => {
          return (
            <div key={edu.id}>
              <p>{edu.when}</p>
              <p>{edu.name}</p>
              <p>{edu.location}</p>
              <p>{edu.school}</p>
            </div>
          );
        })}
      </section>
      <section id="skills">
        <div className="headers">
        <h2 onClick={() => handleClick('knowledge')}>Knowledge</h2>
        <h2 onClick={() => handleClick('learning')}>Learning</h2>
        </div>
        <ul>
          {
            activeTab === 'knowledge' ? (
                skills.map((data) => (
                    <li className="skill-list" key={data.id}><img width={'24px'} alt={data.skill} src={data.icon} />{data.skill}</li>
                ))
            ): (
                learning.map((data) => (
                    <li className="skill-list" key={data.id}><img width={'24px'} alt={data.skill} src={data.icon}/>{data.skill}</li>
                ))
            )
          }
        </ul>
      </section>
    </div>
  );
};
export default Education;
