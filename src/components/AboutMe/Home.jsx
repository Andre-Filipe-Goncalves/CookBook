import React from 'react'
import './Home.css'

export default function Home() {
  return (
    <div className="home">
      <div className="aboutme">
      <h1>Who Am I?</h1>
      <br/>
      <p>My name is André Filipe Gomes Gonçalves, and i'm a junior front-end web developer. I finished an intensive course at WildSchool, focusing on JavaScript/React. I'm from Lisbon and i'm a business analyst at Accenture.</p>
      <br/><br/><br/>
      <h1>About Me</h1>
      <br/>
      <p> I like Boardgames, Bees and Formula 1 as it is pretty clearly shown by my projects themes. I like watching movies and TV shows. 
        I have an adopted cat and several adopted plants. In the times we live it helps bringing green living things inside our homes. 
        I used to be an airplane mechanic, but when the pandemic came, the sector was severely affected, so i decided to change career.
       </p>
      </div>
      <div className="myphoto">
      <img src="https://res.cloudinary.com/dxzkpsxhf/image/upload/v1619031384/profile-pic_1_wmuvhb.png" />
      </div>
    </div>
  )
}
