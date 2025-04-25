import { useState } from 'react'
import './App.css'
// import LogoSection from './LogoSection'

const App = () => {
  return (
    <>
    <nav>
      <div className='navsection'>
        <a href="">Works</a>
        <a href="">Blogs</a>
        <a href="">contact</a>
      </div>
    </nav>

    {/* intro post */}
    <section className='intropost'>
      <div className='image'>
        <img src="img1.png" alt="profile" />
      </div>   
      <div className='text'>
        <h1>          
          Hi,<br />I'm Chinenye, <br />An Intern at TTT.
        </h1>
        <p>here is a little write up about myself 
          <br />oh chimmmm <br />
          trust me i do not even know what to write here but i'll be fine
        </p>
      </div> 
      <a href="" className='btn'>download resume</a>
    </section>


    {/* recent post */}
    <section className='recentpost'>
      <div className='recentheader'>
        recent post
          <a className='viewall' href="">view all</a>
      </div>
      <div className='recentcontainer'>
        <div className='card'>
        <h3>
          My first project to build a portfolio
        </h3>
        <p>
          23rd April 2025 | TTT Interns 
        </p>
        <p>
          here i built my 1st project using CSS, HTML and JavaScript
        </p>
      </div>
      <div className='card'>
        <h3>
          another imagination project
        </h3>
        <p>
          4th june 2008 | LinkedIn Message 
        </p>
        <p>
          random words
          <br />jkkhbgvfcdcgfbjnm,jihgutyfrdcfgvhb
        </p>
      </div>
      </div>
      
    </section>
    {/* featured works  */}
    <section className='featuredwork'>
      <h2>
        featured works
      </h2>
      <div className='workcontainer'>
        <div className='workcard'>
          <img src="img2.png" alt="dashboard" />
          <h3>Designing Dashboards</h3>
            <p>Dashboard | 2020</p>
            <p>Brief description about dashboard design.</p>
        </div>
        <div className="workcard">
            <img src="img3.png" alt="Vibrant Portraits" />
            <h3>Vibrant Portraits of 2020</h3>
            <p>Illustration | 2020</p>
            <p>Bright and colorful artworks done in 2020.</p>
          </div>
          <div className="workcard">
            <img src="img4.png" alt="Malayalam Type" />
            <h3>36 Days of Malayalam type</h3>
            <p>Typography | 2020</p>
            <p>Exploration of Malayalam characters in type design.</p>
          </div>
      </div>
    </section>
    {/* social media handles  */}
    <section>
    <footer className="footer">
        <div className="social-icons">
            <img className='twitterimg' src="group.svg" alt="twitter" />
          <img className='facebookimg' src="fb.svg" alt="twitter" />
          <img className='instagramimg' src="insta.svg" alt="twitter" />
          <img className='linkedinimg' src="Linkedin.svg" alt="twitter" />
        </div>
        <p>&copy; 2025 Chinenye. All rights reserved.</p>
      </footer>
    </section>
    </>
  )
}

export default App;