import React from 'react';

const Project = ({link, image}) => {
  return (
    <div className='basis-1/3 grow shrink-0'>
      <a href={link}>
        <Image src={image} className='rounded-2xl object-cover' layout='responsive' width={'160%'} height={'90%'} />
      </a>
    </div>
  );
};

export default Project;
