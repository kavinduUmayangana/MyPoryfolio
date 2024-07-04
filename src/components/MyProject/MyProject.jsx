import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import project2 from '../../assests/images/project1img.png'
import project3 from '../../assests/images/project3img.png'
import project4 from '../../assests/images/project4img.png'
import project5 from '../../assests/images/project5img.png'


import "swiper/css"
import "swiper/css/pagination"
import {Pagination, Autoplay} from 'swiper/modules'

const MyProject = () => {
  const projects=[
   
    {img:project2,
      name:" First my profile(using css and html) ",
      githubLink:'https://github.com/kavindu/Profile-Web.git',
      live_link:"https://kavindu.github.io/Profile-Web/"
    },
    {img:project3,
        name:"GAME-HANGMAN(improve the English vocabulary of children)",
        githubLink:'https://github.com/kavindu/GAME-HANGMAN.git',
        
    },
    {img:project4,
      name:"Employee Management System(ongoing)",
      githubLink:'https://github.com/kavindu/em-system.git',
      live_link:""
    },
    {img:project5,
        name:"E-commerce Backend(group project)",
        githubLink:'https://github.com/d.git',
       
    },
    
  ]
  return (
    <section className='px-3 py-10 text-white'>
      <br/><br/>
      <div className='text-center'>
        <h3 className='text-4xl font-semibold text-white'>My
          <span className='text-cyan-200'> Project</span>
        </h3>
        <p className='mt-2 text-2xl text-gray-600'>My works</p>
      </div>
      <br /><br />
      <div className='relative flex items-center max-w-6xl px-5 mx-auto '>
        <div className='w-full lg:w-3/3'>
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >  
          {
            projects.map((projects,i)=>(
              <SwiperSlide key={i}>
              <div className='w-full p-10 h-120 sm:h-100 sm:w-full md:h-100 lg:h-100 xl:h-106 bg-slate-400 rounded-2xl'>
                <img src={projects.img} alt='' className='object-cover w-full rounded-lg h-60 sm:h-100 sm:w-90 md:h-70 lg:h-60 xl:h-66' />
                <h3 className='my-4 text-lg'>{projects.name}</h3>
                <div className='flex gap-3'>
                  <a href={projects.githubLink} target='_blank' className='inline-block px-2 py-1 bg-gray-900 text-amber-200' rel="noreferrer">
                    Github
                  </a>
                  <a href={projects.live_link} target='_blank' className='inline-block px-2 py-1 bg-gray-900 text-amber-200' rel="noreferrer">
                    Live Demo
                  </a>
                </div>
              </div>
           </SwiperSlide>
            ))

          }
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default MyProject;

