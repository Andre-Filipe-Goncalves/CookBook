import React from 'react'
import './Home.css'
import { IconContext } from "react-icons";
import {
  DiJavascript,
  DiReact,
  DiGithubBadge,
  DiSass,
  DiTerminalBadge,
} from "react-icons/di";

export default function Home() {
  return (
    <div className="home">
      <div className="myphoto">
      <img src="https://res.cloudinary.com/dxzkpsxhf/image/upload/v1619251289/profile-pic_2_qmepo0.png" />
      <div className='logos'>
        <IconContext.Provider value={{ size: "4rem" }}>
          <DiJavascript />
          <DiReact />
          <DiGithubBadge />
          <DiSass />
        </IconContext.Provider>
      </div>
      </div>
      <div className="aboutme">
      <h1>Who Am I?</h1>
      <br/>
      <p>My name is André Filipe Gomes Gonçalves, and I'm a junior front-end web developer. I finished an intensive course at WildSchool, 
        focusing on JavaScript/React. I'm from Lisbon and I work as a business analyst at Accenture.</p>
      <br/><br/><br/>
      <div className="aboutme2">
      <h2>About Me</h2>
      <br/>
      <p> I like Boardgames, Bees and Formula 1, as it is pretty clearly shown by my projects themes. I like watching movies and TV shows. 
        I have an adopted cat and several adopted plants. 
        I used to be an airplane mechanic, but when the pandemic hit, the sector was severely affected, so I decided to change career.
       </p>
      </div>
      </div>
    </div>
  )
}
