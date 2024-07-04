 import React from 'react';
import aboutImg from '../../assests/images/my photo.jpg';
import cvPDF from '../../assests/My CV/Kavindu Umayangana.pdf';

const ProfileDetails = () => {
  const info =[
    {text:"Years experience", count:"01"},
    {text:"Completed Projects", count:"05"},
  ];

  return (
    <section className='px-2 py-10 text-white '>
      <div className='mt-8 text-center'>
        <h3 className='text-4xl font-semibold'>
          About <span className=' text-neutral-300'>Me</span>
        </h3>
        <p className='my-3 text-lg text-gray-300 '>My introduction</p><br/>
        <div className='flex flex-col-reverse items-center max-w-6xl gap-12
         px-10 mx-auto md:flex-row md:gap-6'>
          
          <div className='px-10'>
            <div className='my-3 text-zinc-400'>
              <p className='px-8 mx-auto text-xl leading-7 text-justify '>
              As a passionate and talented software engineering student, I am eager to learn and adapt to new challenges. Collaboration is my forte, and I thrive in team environments, valuing diverse perspectives. My academic journey has equipped me with a strong foundation in software engineering principles, which I continually apply to real-world scenarios through internships and personal projects. I aspire to make positive contributions to both the industry and society. 
              <br/>Thank you for visiting my portfolio.
              </p>
              <div className='flex items-center mt-10 gap-7'>
                {info.map((content)=>(
                  <div  className='w-9/12' key={content.text}>
                    <h3 className='text-2xl font-semibold text-white md:text-4xl'>
                    {content.count}<span>+</span>{" "}</h3>
                    <span className='text-xl text-slate-400 md:text-base'>
                    {content.text}</span>
                  </div>
                ))}
              </div>
              <div>
                  <br/>
                  <a href={cvPDF} download>
                    <button className='btn-primary'>Download My CV</button>
                  </a>             
              </div>   
            </div>
          </div>

          <div className='flex items-center justify-center flex-1 mt-6 md:mt-0'>
            <div className='relative w-11/12 h-full max-w-sm md:w-60 lg:w-96 sm:w-10/12 -z-10 aboutImg'>
              <img src={aboutImg} alt='' className='object-cover w-full bg-cyan-600 rounded-3xl'/>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
export default ProfileDetails;

