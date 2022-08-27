import React, { useEffect, useRef } from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArticleIcon from '@mui/icons-material/Article';
import { init } from 'ityped';

function Home() {
  const dynamicText = useRef();

  useEffect(() => {
    init(dynamicText.current, {
      showCursor: false,
      backDelay: 1500,
      strings: ['Vivek.', 'a Student.', 'a Developer.'],
    });
  }, []);

  return (
    <div className="h-full px-2 flex flex-col justify-center items-center">
      <h1
        style={{
          color: '#354f60',
          letterSpacing: '2px',
          textShadow:
            '2px 2px 8px rgb(120,120,120),  2px 2px 8px rgb(120,120,120)',
        }}
        className="text-6xl md:text-9xl font-varela font-bold"
      >
        Welcome
      </h1>
      <h1
        style={{ color: '#354f60' }}
        className="my-2 text-center font-varela text-5xl md:text-8xl"
      >
        I am{' '}
        <span
          className="font-bold"
          style={{ color: '#bc0ec4' }}
          ref={dynamicText}
        ></span>
      </h1>
      <h1
        style={{ color: '#354f60' }}
        className="text-center font-varela mt-2 text-md md:text-xl"
      >
        Engineering student pursuing B.Tech from Bhagwan Parshuram Institute of
        Technology in Computer Sciene.
      </h1>
      <h1
        style={{ color: '#354f60' }}
        className="text-center font-varela mt-2 text-md md:text-xl"
      >
        Experience in building websites with HTML,CSS, JavaScript and React.
        Enthusiastic and eager to contribute to team success through hard-work
        and knowledge. <br />
        Motivated to learn, grow and excel in the field of work I love =&#41;.
      </h1>
      <button className="mt-8 px-4 py-2 bg-theme1 text-theme1 rounded-md shadow-button">
        <ArticleIcon /> View Resume
      </button>
      <div className="flex items-center gap-x-4 mt-8">
        <LinkedInIcon style={{ color: '#bc0ec4' }} fontSize="large" />
        <GitHubIcon style={{ color: '#bc0ec4' }} fontSize="large" />
      </div>
    </div>
  );
}

export default Home;
