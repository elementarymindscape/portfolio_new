import React from 'react';

function ProjectCard({ title, description, viewLive, isHosted, viewCode }) {
  return (
    <div className="p-4 mx-auto flex flex-col w-1/2 rounded-lg h-80 bg-theme1 items-center ">
      <h1 className="text-2xl font-bold text-white">{title}</h1>
      <h2 className="mt-4 text-center text-xl text-white">{description}</h2>
      <div className="flex mt-auto gap-x-6">
        {isHosted === true ? (
          <a
            href={viewLive}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-lg bg-purple text-white"
          >
            View live
          </a>
        ) : (
          ''
        )}
        <a
          href={viewCode}
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 rounded-lg bg-purple text-white"
        >
          Code
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
