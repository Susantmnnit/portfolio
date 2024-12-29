// pages/index.js
'use client';

import Head from 'next/head';
import Image from 'next/image';
import styles from'./styles/Home.module.css';
import { Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useState, useEffect } from 'react';


export default function Home() {
   const [progress, setProgress] = useState(0);

  const skillData = [
    { name: 'React', target: 80 },
    { name: 'JavaScript', target:70 },
    { name: 'Data Structures',target: 60 },
    { name: 'HTML/CSS', target:75 },
    { name: 'TypeScript', target:50 },
    { name: 'SQL',target: 65 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress((prevProgress) => prevProgress + 1);
      } else {
        clearInterval(interval);
      }
    }, 20); // Adjust animation speed here

    return () => clearInterval(interval);
  }, []);
  const images = [
    "/images/add1.png",
    "/images/add2.png",
    "/images/add3.png",
    "/images/add4.png",
    "/images/add5.png",
    "/images/add6.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Mohd Shahid Iqbal Portfolio</title>
        <meta name="description" content="Portfolio website of Mohd Shahid Iqbal" />
      </Head>

      {/* Navbar */}
      <header className={styles.navbar}>
        <nav >
          <ul className={styles.navLinks}>
            <li><a href="#home"> &lt; Mohd / &gt; </a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#skills">Skills</a></li>
          </ul>
        </nav>
        <div id='home' className={styles.socialIcons}>
          <div className={styles.social}>
            <div style={{margin:'2px'}}>
              <p style={{fontSize: '6.02781696rem'}} className={styles.text}>Mohd Shahid Iqbal</p>
              <span className={styles.text}>Passionate about changing the world with technology.</span>
            </div>
            <div style={{margin:'5px'}}>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <GitHubIcon style={{width:'50px'}}/>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FacebookIcon style={{width:'50px'}}/>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <InstagramIcon style={{width:'50px'}}/>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon style={{width:'50px'}}/>
              </a>
            </div>
            <div style={{ margin: '5px' }}>
              <a href="#about">
                <Button style={{border: '1px solid white',color:'white',margin:'10px'}} >more about me</Button>
              </a>
              
            </div>
          </div>
          </div>
      </header>

      {/* Home Section */}
      <section id="about" className={styles.home}>
        <div className={styles.profile}>
          <div className={styles.profin1}>
            <Image style={{borderRadius:'50%'}}
              src="/images/shahid.png"
              alt="Profile picture"
              width={375}
              height={375}
              priority 
            />
          </div>
          <div className={styles.profin2}>
            <h2 style={{fontSize:'50px'}}>About Me</h2>
            <p style={{fontSize:'1.25rem',fontWeight:'300',textAlign:'center',color:'#857f7f'}}>My name is Mohd Shahid Iqbal. I’m a post-graduate of 2020 from Jamia hamdard University at New Delhi with a degree in Masters of Computer Application . I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering. In my free time I like working on open source projects.</p>
            <a href="https://drive.google.com/file/d/1Q206K8NM-IdCMdhal5scUSEm5ZIzZakg/view?usp=drive_link">
              
            </a>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className={styles.about}>
        <div className={styles.experienceContainer}>
          <h2 className="" style={{ fontSize: '50px', padding: '10px' }}>Experiences</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px',height:'90vh' }}>
            <div className={styles.content}>
              <Image 
                src="/images/simpana.29df043cb3d1404ca0a0.png" 
                alt="Simpana" 
                width={300} 
                height={300} 
              />
              <p className="">React Developer<br />Aug 2020 – May 2022</p>
            </div>
            <div className={styles.content}>
              <Image 
                src="/images/vendify.90d7e8652cac810bca08.png" 
                alt="Vendify" 
                width={300} 
                height={300} 
              />
              <p className="">Senior Software Engineer<br />May 2022 – March 2023</p>
            </div>
            <div className={styles.content}>
              <Image 
                src="/images/paceTrader.fb4d1afab3c59033ee4c.png" 
                alt="PaceTrader" 
                width={300} 
                height={300} 
              />
              <p className={styles.text}>React Developer<br />March 2023 – Present</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section id="projects" className={styles.experience}>
        <div className={styles.excperiencediv}>
          <h2 style={{ fontSize: '50px', padding: '10px' }}>Recent Projects</h2>
          <div className={styles.div1}>
            <div className={styles.div2}>
              <div className={styles.div3}>
                <div className={styles.div4}>
                  <h2>myportfolio</h2>
                  <p></p>
                  <div className={styles.customgrid}>
                    <a href="" className={styles.linktag}>
                      <GitHubIcon />
                      <span>Clone Project</span>
                    </a>
                    <a href="" className={styles.linktag1}>
                      <GitHubIcon />
                      <span>Repo</span>
                    </a>
                  </div>
                  <hr />
                  <div className={styles.lang}>
                    Languages:
                    <a href="" className={styles.linktag2}>
                      <span>JavaScript: 51.5 %</span>
                    </a>
                    <a href="" className={styles.linktag2}>
                      <span>SCSS: 45.3 %</span>
                    </a>
                    <a href="" className={styles.linktag2}>
                      <span>HTML: 3 %</span>
                    </a>
                  </div>
                  <p className={styles.text1}>
                    <a href="">
                      <GitHubIcon />
                      <span>Stars</span>
                    </a>
                    <small className={styles.smll}>
                      Updated on January 17, 2024
                    </small>
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.div2}>
              <div className={styles.div3}>
                <div className={styles.div4}>
                  <h2>create-react-app-lambda</h2>
                  <p></p>
                  <div className={styles.customgrid}>
                    <a href="" className={styles.linktag}>
                      <GitHubIcon />
                      <span>Clone Project</span>
                    </a>
                    <a href="" className={styles.linktag1}>
                      <GitHubIcon />
                      <span>Repo</span>
                    </a>
                  </div>
                  <hr />
                  <div className={styles.lang}>
                    Languages:
                    <span style={{marginLeft:'7px',color:'#a2a3a6'}}>code yet to be deployed.</span>
                  </div>
                  <p className={styles.text1}>
                    <a href="">
                      <GitHubIcon />
                      <span>Stars</span>
                    </a>
                    <small className={styles.smll}>
                      Updated on December 7, 2023
                    </small>
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.div2}>
              <div className={styles.div3}>
                <div className={styles.div4}>
                  <h2>Task-Management</h2>
                  <p>It is a task management system where all user can track their own tasks with the status of in-progress, pending and completed</p>
                  <div className={styles.customgrid}>
                    <a href="" className={styles.linktag}>
                      <GitHubIcon />
                      <span>Clone Project</span>
                    </a>
                    <a href="" className={styles.linktag1}>
                      <GitHubIcon />
                      <span>Repo</span>
                    </a>
                  </div>
                  <hr />
                  <div className={styles.lang}>
                    Languages:
                    <a href="" className={styles.linktag2}>
                      <span>JavaScript: 78.8 %</span>
                    </a>
                    <a href="" className={styles.linktag2}>
                      <span>CSS: 19 %</span>
                    </a>
                    <a href="" className={styles.linktag2}>
                      <span>HTML: 2.1 %</span>
                    </a>
                  </div>
                  <p className={styles.text1}>
                    <a href="">
                      <GitHubIcon />
                      <span>Stars</span>
                    </a>
                    <small className={styles.smll}>
                      Updated on February 5, 2023
                    </small>
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.div2}>
              <div className={styles.div3}>
                <div className={styles.div4}>
                  <h5>Mohd-shahid-iqbal</h5>
                  <p>Config files for my GitHub profile.</p>
                  <div className={styles.customgrid}>
                    <a href="" className={styles.linktag}>
                      <GitHubIcon />
                      <span>Clone Project</span>
                    </a>
                    <a href="" className={styles.linktag1}>
                      <GitHubIcon />
                      <span>Repo</span>
                    </a>
                  </div>
                  <hr />
                  <div className={styles.lang}>
                    Languages:
                    <span style={{marginLeft:'7px',color:'#a2a3a6'}}>code yet to be deployed.</span>
                  </div>
                  <p className={styles.text1}>
                    <a href="">
                      <GitHubIcon />
                      <span>Stars</span>
                    </a>
                    <small className={styles.smll}>
                      Updated on October 27, 2021
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="leadership" className={styles.projects}>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
          <h2 className="" style={{ fontSize: '50px', padding: '10px' }}>Leadership</h2>
          <div className={styles.cardname}>
            <div className={styles.projectCard}>
              <p>As a React developer with leadership experience, I bring technical expertise, project management skills,
                and strong communication abilities to the table. I have a proven track record of building large-scale applications,
                optimizing code for performance, and implementing best practices. Additionally,
                I have experience leading teams and projects, creating and maintaining project plans, managing timelines and budgets,
                and ensuring timely delivery of high-quality work. I excel at communicating effectively with team members, stakeholders,
                and clients, both verbally and in writing, and am a skilled listener who can provide clear and constructive feedback.
                I am also passionate about mentoring and training other developers to help them develop their skills and achieve their goals.
                With my ability to solve complex technical problems and think creatively, I am always up-to-date with the latest developments in React and related technologies,
                and am able to innovate and inspire a positive, collaborative work environment.</p>
            </div>
            <div className={styles.projectCard}>
              <div className={styles.slider}>
                <div className={styles.sliderInner} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                  {images.map((src, index) => (
                    <div key={index} className={styles.sliderItem}>
                      <img src={src} alt={`Slide ${index + 1}`} className={styles.sliderImage} />
                    </div>
                  ))}
                </div>
                {/* Navigation buttons */}
                <button className={styles.prevButton} onClick={handlePrev}>❮</button>
                <button className={styles.nextButton} onClick={handleNext}>❯</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="skills" className="about-me-section">
        <div className="flex flex-col items-center my-20 mx-auto py-10">
          <h2 className="text-5xl font-sans font-thin mb-8" style={{ fontSize: '50px', padding: '10px' }}>Skills</h2>
          <div className="flex gap-10 flex-row justify-center w-3/4">
            <div className='w-2/4'>
              <h3 className="text-xl text-center font-sans font-thin mb-4">Technical Skills</h3>
              {skillData.slice(0, 3).map((skill) => (
                <div key={skill.name} className="mb-2">
                  <span className="mr-2 text-2xl font-sans font-thin">{skill.name}</span>
                  <div className="w-full h-4 bg-gray-200 rounded-full relative overflow-hidden">
                    <div
                      className="bg-blue-500 h-4 w-full rounded-full absolute top-0 left-0 transition-all duration-1000 ease-in-out"
                      style={{ width: `${Math.min(progress, skill.target)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className='w-2/4'>
              <h3 className="text-xl text-center font-sans font-thin mb-4" >Soft Skills</h3>
              {skillData.slice(3).map((skill) => (
                <div key={skill.name} className="mb-2">
                  <span className="mr-2 text-2xl font-sans font-thin">{skill.name}</span>
                  <div className="w-full h-4 bg-gray-200 rounded-full relative overflow-hidden">
                    <div
                      className="bg-blue-500 h-4 rounded-full absolute top-0 left-0 transition-all duration-1000 ease-in-out"
                      style={{ width: `${Math.min(progress, skill.target)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <footer style={{ backgroundColor: 'rgb(245, 245, 245)', padding: '20px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 className="display-4 pb-3" style={{ fontSize: '50px', padding: '10px' }} >Get In Touch</h2>
          <p className="lead pb-3">
            I'm currently looking for full-time React Developer/Frontend Developer opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at{' '}
            <a className="text-decoration-none" href="mailto:khansaif59@gmail.com">khansaif59@gmail.com</a>.
          </p>
          <div>
            <i className="fas fa-code" style={{ fontSize: '24px' }}></i> with{' '}
            <i className="fas fa-heart" style={{ fontSize: '24px', color: 'red' }}></i> by{' '}
            <a rel="noopener" href="https://github.com/Mohd-shahid-iqbal/myportfolio.git" aria-label="My GitHub">
              <span className="badge bg-dark">Mohd Shahid Iqbal</span>
            </a>{' '}
            using <i className="fab fa-react" style={{ fontSize: '24px' }}></i>
          </div>
          <p style={{ marginTop: '10px' }}>
            <small>&copy; 2024 All rights reserved.</small>
          </p>
        </div>
      </footer>
    </div>
  );
}
