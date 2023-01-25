import React from 'react'

export default function Container() {
  return (
    <div>
    <div className="section mx-5">
       
      <img src="../img.jpeg" className="img-el" alt="img" />
      
      <h1>Anuja Kotkar</h1>
      <h3>Frontend Developer</h3>
      <h6>anujak.website</h6>
      <div>
        <button className="btn1">Email</button>
        <button className="btn2">Linkedin</button>
      
      </div>
      <div className="about">
        <h2>About</h2>
        <p>
          I am Anuja kotkar. Currenty pursing 3rd year information technology
          engineering at I nternational Institute of information technology,
          pune. I have knowlege about html, css, javascript and bootstrap. currenty i am working on React js.
        </p>
      </div>
      <div className="intrest">
        <h2>Intresest</h2>
        <p>
          Hello, I have little bit knowlege of web development. and also intrested to explore more knowelgde about web devlopment.
          I like to watch shows and cricket.
        </p>
      </div>
      
      <div className="footer">
        <img src="../twitter.png" alt="twiter" className="media"/>
        <img src="../Facebook.png" alt="Facebook" className="media"/>
        <img src="../insta.jpeg" alt="Instagram" className="media"/>
        <img src="../git.png" alt="Github" className="media"/>
    </div>
    </div>
    </div>
    
    
  )
}
