import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img className="avatar" src="profile_image.jpg" alt="Profile Pcture" />
  );
}

function Intro() {
  return (
    <div>
      <h1>Wakabi Brian</h1>
      <p>
        Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook (and eat), or to
        just enjoy the Portuguese sun at the beach.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <ul className="skill-list">
      <Skill name="HTML + CSS" emoji="💪" bg_color="blue" />
      <Skill name="JavaScript" emoji="💪" bg_color="red" />
      <Skill name="Web Design" emoji="💪" bg_color="orange" />
      <Skill name="Git and Github" emoji="👍" bg_color="orangered" />
      <Skill name="React" emoji="💪" bg_color="yellow" />
      <Skill name="Svelte" emoji="👶" bg_color="pink" />
    </ul>
  );
}

function Skill(props) {
  return (
    <li className="skill" style={{ backgroundColor: props.bg_color }}>
      {props.name} {props.emoji}
    </li>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
