import React from 'react';

function Navbar({ activeIndex, handleChange }) {
  return (
    <>
      <div className="bg-theme1 flex justify-center items-center gap-x-8 h-12">
        <button
          value={0}
          className={`flex justify-center items-center text-2xl font-bold font-varela ${
            activeIndex === 0 ? 'text-purple' : 'text-theme1'
          }`}
          onClick={(event) => handleChange(event, event.target.value)}
        >
          HOME
        </button>
        <button
          value={1}
          className={`flex justify-center items-center text-2xl font-bold font-varela ${
            activeIndex === 1 ? 'text-purple' : 'text-theme1'
          }`}
          onClick={(event) => handleChange(event, event.target.value)}
        >
          PROJECTS
        </button>
        <button
          value={2}
          className={`flex justify-center items-center text-2xl font-bold font-varela ${
            activeIndex === 2 ? 'text-purple' : 'text-theme1'
          }`}
          onClick={(event) => handleChange(event, event.target.value)}
        >
          CONTACT
        </button>
      </div>
    </>
  );
}

export default Navbar;
