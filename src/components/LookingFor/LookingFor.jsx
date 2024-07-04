import React from 'react'
import LookingImg from '../../assests/images/kavindu2.jpg'

const LookingFor = () => {
  return (
    <section className='px-3 py-10 text-white '>
      <br/><br/>
      <div className="text-center">
        <h3 className='text-4xl font-semibold'><span className='text-red-300 '>I</span> am looking</h3>
        <p className='mt-2 text-2xl text-gray-600 '> An Internship.</p>

      </div>
      <div className=' bg-gray-600 relative px-8 rounded-2xl py-5 max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center -z-10 '>
        <div>
          <h2 className='text-2xl font-semibold' >
            I am looking for software engineering internship
          </h2>
          <p className='max-w-lg mt-4 text-sm leading-6 text-justify lg:text-left text-gray-50'>
            I am a third year undergraduate student in Software Engineering at the University of Kelaniya. At this time I am looking for an internship program. A good internship program develops my strong interpersonal skills in a collaborative team environment in addition to my technical skills. I am committed to continuous learning and adaptation that aligns with the fast-paced nature of the software industry. I seek the opportunity to contribute to your organization's mission and further develop my skills while working with your talented team.
          </p>
          <button className='mt-10 btn-primary'>Say Hello</button>
        </div>
        <img src={LookingImg} alt='' className='lg:h-[20rem] h-80 lg:absolute bottom-0 right-2 object-cover'/>
      </div>


    </section>
  );
}

export default LookingFor 