import React, { useEffect, useRef } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import "./App.css";

function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.reveal'));

    els.forEach((el, i) => {
      el.dataset.order = i; 
      if (!el.dataset.dir) el.dataset.dir = 'up'; 
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (entry.isIntersecting) {
            const delay = Number(el.dataset.order || 0) * 80; 
            el.style.transitionDelay = `${delay}ms`;
            el.classList.add('reveal-visible');
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12 }
    );

    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

function Navbar() {
  return (
    <nav className="nav">
      <div className="logo">My Portfolio</div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

function Hero() {
  return (
    <header className="hero">
      <div className="hero-left reveal">
        <h4>Hi, I am</h4>
        <h1>Paojangam Kipgen</h1>
        <p className="sub">Engineer by trade, poet by impulse</p>
        <div className="hero-cta">
          <a className="btn primary" href="/resume.pdf" download>
  Download CV
</a>

          <a className="btn ghost" href="#about">Learn More</a>
        </div>
      </div>

      <div className="hero-right reveal">
        <div className="portrait-card">
          <div className="portrait-ring">
            <div className="portrait"></div>
          </div>
        </div>
      </div>
    </header>
  );
}

function About() {
  return (
    <section id="about" className="section about">
      <h2 className="section-title reveal">About</h2>
      <p className="about-text reveal">
        I’m a full-stack developer with a soft spot for elegance , the kind you find in a clean API or a well placed metaphor. When I’m not writing code, I’m usually writing diaries or poems, because sometimes logic isn’t enough to explain the world. I build not just to function, but to find meaning ,to prove, as Viktor Frankl wrote, that those who have a why to live can bear almost any how. And though the screens go dark and the servers rest, I still have promises to keep, and miles to go before I sleep.
      </p>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="section services">
      <h2 className="section-title reveal">What I do</h2>
      <div className="cards">
        <div className="card reveal">
          <div className="card-icon">✦</div>
          <h3>Frontend development</h3>
        </div>

        <div className="card featured reveal">
          <div className="pill">DEV</div>
          <h3>Full Stack development</h3>
        </div>

        <div className="card reveal">
          <div className="card-icon">⌘</div>
          <h3>System Design</h3>
        </div>
      </div>
    </section>
  );
}
function Projects() {
  const projectData = [
    {
      title: "PM Tool",
      image: "/project1.jpg",
      desc: "A project management tool that keeps everything organized without the headache. You can track tasks, set deadlines, and see what everyone’s working on—all in one place.",
      link: "https://github.com/Paojangam/Project-Management-Toolkit.git",
    },
    {
      title: "Minders",
      image: "/project2.jpg",
      desc: "An AI Mental Health app that helps users reflect and organize thoughts through sentiment detective journaling,mental exercise,chat system etc.",
      link: "https://minders-83rn.vercel.app/",
    },
    {
      title: "DriveSync",
      image: "/project3.jpg",
      desc: "DriveSync is an over-the-air (OTA) update system for electric vehicles that securely delivers and installs firmware and software updates remotely, ensuring seamless performance improvements without requiring physical service visits.",
      link: "https://github.com/AvinashxDubey/DriveSync.git",
    },
  ];

  return (
    <section id="projects" className="section projects">
      <h2 className="section-title reveal" data-dir="up">Projects i have done along the way</h2>

      <div className="project-cards">
        {projectData.map((p, i) => (
          <div className="project-card reveal" data-dir="up" key={i}>
            <div
              className="project-image"
              style={{ backgroundImage: `url(${p.image})` }}
            />
            <div className="project-content">
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn ghost project-btn"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


function Skills() {
  return (
    <section id="skills" className="section skills">
      <h2 className="section-title reveal">My Skills</h2>
      <div className="skill-box reveal">
        {[
          { p: "70%", label: "C++" },
          { p: "65%", label: "Javascript" },
          { p: "50%", label: "React" },
          { p: "50%", label: "Node" },
          { p: "50%", label: "Express" },
          { p: "60%", label: "Mongodb" },
          { p: "75%", label: "SQL" },
          { p: "55%", label: "System Design" },



        ].map((s, i) => (
          <div key={i} className="skill">
            <div className="percent">{s.p}</div>
            <div className="skill-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}



function Contact() {
  return (
    <section id="contact" className="section contact">
      <h2 className="section-title reveal">Hola at me</h2>

      <div className="contact-links reveal">
        <a
          href="https://www.linkedin.com/in/paojangam"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
        >
          <FaLinkedin />
          <span>LinkedIn</span>
        </a>

        <a
          href="https://github.com/Paojangam"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
        >
          <FaGithub />
          <span>GitHub</span>
        </a>

        <a
          href="https://leetcode.com/paojangam"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
        >
          <SiLeetcode />
          <span>LeetCode</span>
        </a>

        <p className="contact-text">📧 paojangam1234@gmail.com</p>
        <p className="contact-text">📞 +91 6009970161</p>
        
      </div>
    </section>
  );
}

export default function App() {
  useReveal();

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects /> 
        <Skills />
        <Contact />
      </main>
      <footer className="footer">
        © {new Date().getFullYear()} Oyindamola — Built with React + Vite
      </footer>
    </div>
  );
}
