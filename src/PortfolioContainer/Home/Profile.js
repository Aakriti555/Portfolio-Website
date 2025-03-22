import React from 'react';
import Typical from 'react-typical'

export default function Profile() {
  return (
    <div className='profile-container'>
      <div className='profile-parent'> 
        
          <div className='colz'>
            <div className='colz-icon'>

            <a href='https://www.facebook.com/profile.php?id=100076480744147'>
              <i className='fa fa-facebook-square'></i>
            </a>
            <a href='linkedin.com/in/aakriti-banjara-2b5b66240'>
              <i className='fa fa-linkedin-square'></i>
            </a>
            <a href='https://joyfuldev.itch.io/'>
              <i className='fa fa-gamepad'></i> {/* Use a relevant icon or a custom one for itch.io */}
            </a>
            <a href='https://github.com/Aakriti555?tab=projects'>
              <i className='fa fa-github'></i>
            </a>
            </div>
            {/* yesko baki xa hai link haru milauna */}
          </div>
          <div className='profile-details'>
            <span className='Primary-text'>
              {" "}
              Hello, I'm <span className='highlighted-text'>Aakriti Banjara</span>
            </span>
        </div>
        <div className='profile-details-role'>
          <span className='primary-text'>
            {" "}
            <h1>
            {" "}
            <Typical 
            loop = {Infinity}
            steps={[
                  "Ethusiastic Dev 🦾",
                  1000,
                  "Full Stack Developer 💻",
                  1000,
                  "Machine learning 🔗",
                  1000,
                  "AI ⚒🔧 ",
                  1000,
                  "Game Development 🎮🕹🎲 ",
                  1000,
                  "Deep Learning 👇📖",
                  1000,
                  "Neural Network 🧬📎 ",
                  1000,

            ]}
            />
            </h1>
            <span className='profile-role-tagline'>
            "Pioneering the Future of Tech and AI 🌟🤖"  
            </span>
          </span>
        </div>
        <div className='profile-options'>
          <button className='btn primary-btn'>
            {""}
            Hire Me 
            {""}
          </button>
          <a href='personal data\Aakriti-Banjara-CV.pdf' download={'Aakriti_Banjara-CV.pdf'}>
            <button className='btn highlighted-btn'>Get Cv</button>
          </a>
        </div>
      </div>
      <div className='profile-picture'>
        <div className='profile-picture-background'>

        </div>
      </div>
    </div>
  );
}
