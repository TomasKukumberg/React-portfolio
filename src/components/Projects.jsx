import React from 'react';
import ProjectItem from './ProjectItem';
import aoc from '../assets/aoc.png';
import realTimeImg from '../assets/real-time.png';
import polyImg from '../assets/poly-regres.png';
import snakeImg from '../assets/snake.png';

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 '>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
      <p className='text-center py-8'>Here are some of my projects from Github. You can check out the source code by hovering over each card and opening them.</p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem img={aoc} title='Advent of Code programming challenge' link='https://github.com/TomasKukumberg/Advent_Of_Code' />
        <ProjectItem img={realTimeImg} title='Navigation map with JS using EventSource API' link='https://github.com/TomasKukumberg/Real_Time_Graph' />
        <ProjectItem img={polyImg} title='Genetic algorithm to find a polynomial function' link='https://github.com/TomasKukumberg/Polynomial_Regression' />
        <ProjectItem img={snakeImg} title='Snake game in Terminal' link='https://github.com/TomasKukumberg/Snake_Game' />
      </div>
    </div>
  )
}

export default Projects;