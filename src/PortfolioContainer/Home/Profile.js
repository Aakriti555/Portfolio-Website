import React from 'react';
import Typical from 'react-typical'

export default function Profile() {
  return (
    <div className='profile-container'>
      <div className='profile-parent'> 
        
          <div className='colz'>
            {/* yesko baki xa hai link haru milauna */}
            <a href='https://www.facebook.com'> 
              <i className='fa fa-facebook-square'></i> 
            </a>
            <a href='https://plus.google.com'>
              <i className='fa fa-google-plus-square'></i>
            </a>
            <a href='https://www.instagram.com'>
              <i className='fa fa-instagram'></i>
            </a>
            <a href='https://www.youtube.com'>
              <i className='fa fa-youtube-square'></i>
            </a>
            <a href='https://www.twitter.com'>
              <i className='fa fa-twitter'></i>
            </a>
          </div>
          <div className='profile-details'>
            <span className='Primary-text'>
              {" "}
              Hello, I'M <span className='highlighted-text'>Aakriti Banjara</span>
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
          </span>
        </div>
      </div>
    </div>
  );
}
