// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} classNameName="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} classNameName="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div classNameName="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p classNameName="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
       <main className="main-content">
    {/* <!-- First Section AKA Hero Section --> */}
    <section className="col-span-1">
      <div className="hero-section">
        
        <img src="./assets/mobile-hero-image.png" alt="smiling man with glasses " className="hero-img" />
        <div className="hero-content ">
          <div className="hero-text-container show-mobile-only">
            <p className="hero-text-name">John Doe</p>
            <p className="hero-text-position">Software Engineer</p>
          </div>
          <div className="hero-btn-container show-mobile-only">
            <button className="btn btn-blue">Share Link</button>
            <button className="btn btn-outline">Projects</button>
          </div>
        </div>
      </div>
      {/* <!-- Personal Info Section --> */}
      <div className="personal-info-section gen-pad">
        <div className="sub-info-container">
          <b className="sub-info-label">Male</b>
          <span className="sub-info-title">Gender</span>
        </div>
        <div className="sub-info-container">
          <b className="sub-info-label">Rivers</b>
          <span className="sub-info-title">State of residence</span>
        </div>
        <div className="sub-info-container">
          <b className="sub-info-label">Intermediate</b>
          <span className="sub-info-title">Experience Level</span>
        </div>

        <div className="contacts-container">
          <h5 className="section-titles">Contacts</h5>
          <div className="contacts-wrapper">
            <a href="mailto:johndoe@gmail.com">johndoe@gmail.com</a>
            <a href="tel:+2348101234567">+234 810 1234 567</a>
          </div>
        </div>

        {/* <!-- Socials Section --> */}
        <div className="socials-section">
          <h5 className="section-titles">Socials</h5>
          <div className="socials-icons">
            <img src="./assets/icons8-linked-in-48.png" alt="" className="" />
            <img src="./assets/icons8-twitterx-50.png" alt="" className="" />
            <img src="./assets/icons8-instagram-48.png" alt="" className="" />
            <img src="./assets/icons8-facebook-48.png" alt="" className="" />
          </div>
          <div className="contact-btn-wrapper">
            <button className="btn btn-outline">Contact Me now</button>
          </div>
        </div>
      </div>
    </section>
    <div className="">
      {/* <!-- Only show this section on desktop --> */}
      <div className="col-span-2 show-desktop-only gen-pad">

        <div className="hidden">
          <p className="hero-text-name">John Doe</p>
          <p className="hero-text-position">Software Engineer</p>
        </div>
        <div className="hero-btn-container">
          <button className="btn btn-blue">Share Link</button>
          <button className="btn btn-outline">Projects</button>
        </div>
      </div>

      {/* <!-- Second Section --> */}
      <section className="gen-pad col-span-2 second-section">
        <h4 className="second-section-title section-titles">What I Offer</h4>
        <p className="second-section-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          suscipit repellendus modi ea dicta unde in consectetur asperiores
          consequatur animi, fugit iure eum, nisi distinctio officia, nesciunt
          molestias? Doloribus laudantium nisi amet pariatur praesentium vitae
          fugiat aut, ducimus natus, beatae commodi, mollitia explicabo
          reiciendis numquam exercitationem? At cum fugiat nesciunt similique
          accusantium totam expedita, corrupti deserunt. Itaque minus, veniam
          placeat impedit illum, fugit eaque deleniti blanditiis doloribus
          aliquid voluptate tenetur neque accusamus aliquam quis ullam odio
          mollitia facilis nobis!
        </p>
      </section>
      {/* <!-- Third Section  --> */}
      <section className="third-section gen-pad col-span-2">
        <h4 className="section-titles">Skill Sets</h4>
        <div className="skill-wrapper">
          <button type="button" className="btn btn-outline">Angular</button>
          <button type="button" className="btn btn-outline">UI Design</button>
          <button type="button" className="btn btn-outline">
            Java Development
          </button>
          <button type="button" className="btn btn-outline">
            Java Development
          </button>
          <button type="button" className="btn btn-outline">React JS</button>
          <button type="button" className="btn btn-outline">HTML</button>
          <button type="button" className="btn btn-outline">CSS</button>
          <button type="button" className="btn btn-outline">Management</button>
          <button type="button" className="btn btn-outline">UX Design</button>
          <button type="button" className="btn btn-outline">Python</button>
          <button type="button" className="btn btn-outline">Vue JS</button>
          <button type="button" className="btn btn-outline">C#</button>
        </div>
      </section>
      {/* <!-- Fourth Section --> */}
      <section className="gen-pad fourth-section col-span-2">
        <h4 className="section-titles">Certification</h4>
        <div className="cert-item-wrapper">
          <p className="sub-info-label">React</p>
          <p className="sub-info-title">myReactCertificate.com</p>
          
        </div>
        <div className="cert-item-wrapper">
          <p className="sub-info-label">Angular</p>
          <p className="sub-info-title">myAngularCertificate.com</p>
         
        </div>
        <div className="cert-item-wrapper">
          <p className="sub-info-label">Vue</p>
          <p className="sub-info-title">myVueCertificate.com</p>
        
        </div>
      </section>
      {/* <!-- Fifth Section --> */}
      <section className="gen-pad fourth-section col-span-2">
        <h4 className="section-titles">Experience</h4>
        <div className="experience-container">
          <div className="experience-wrapper">
            <div className="">
              <img src="./assets/icons8-linked-in-48.png" alt="" />
            </div>
            <div className="">
              <p className="sub-info-label">Software Engineer</p>
              <p className="sub-info-title">Cad Consulting Ltd</p>
            </div>
          </div>
          <div className="experience-wrapper">
            <div className="">
              <img src="./assets/icons8-linked-in-48.png" alt="" />
            </div>
            <div className="">
              <p className="sub-info-label">Design Supervisor</p>
              <p className="sub-info-title">Cad Consulting Ltd</p>
            </div>
          </div>
          {/* <!-- Experience --> */}
          <div className="experience-wrapper">
            <div className="">
              <img src="./assets/icons8-linked-in-48.png" alt="" />
            </div>
            <div className="">
              <p className="sub-info-label">Communication Manager</p>
              <p className="sub-info-title">Cad Consulting Ltd</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
  {/* <!-- Footer --> */}
  <footer className="">
    <p className="">@copyright 2024</p>
  </footer>
    </>
  )
}

export default App
