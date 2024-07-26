import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';


const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5)} className="sm:w-[360px] w-full">
      <a href={source_code_link}><Tilt options={{ max: 45, scale: 1, speed: 450 }} className='bg-tertiary p-5 rounded-2xl transition-all duration-300 hover:bg-gradient-to-b hover:from-blue-400 hover:via-blue-500 hover:to-purple-600'>
        <div className='relative w-full h-[230px]'>
          <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl' />

        </div>
        <div className='mt-5'>
          <h3 className='text-white text-[24px] font-bold'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt></a>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I'm Doing Now</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-3 text-light text-[17px] max-w-3xl leading-[30px]'>
          I'm not really sure what to write here yet but here're some cool projects
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
}

export default SectionWrapper(Works);
