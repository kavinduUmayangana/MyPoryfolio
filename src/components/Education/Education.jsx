import React from 'react'
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';

const Education = () => {
    const Education=[
        {   bgColor:"#0f8c3d",
            date:"2021-Present",
            header:"Bsc(Hons) Software Engineering",
            institution:"University of Kelaniya ",
            detail:"Major in Net-Centric Application Development, Data Science,Business Engineering",
        },
        {bgColor:"#0f8c3d",
            date:"2020",
            header:"GCE A/L-2020",
            institution:"C.W.W. Kannangara  Central Collage",
            detail:" Combine Mathematics :- A, Physics :- B, Chemistry :- B",
        },
        {bgColor:"#0f8c3d",
            date:"2016",
            header:"GCE O/L -2016",
            institution:"C.W.W. Kannangara  Central Collage",
            detail:"7As and 2Bs",
        },
        
    ];
  return (
    <section>
        <br/><br/><br/>
        <div className='text-center'>
            <h3 className='text-4xl font-semibold text-white '>My
                <span className='text-cyan-200'> Educational Achievement</span>
            </h3>
            <br/><br/>
        </div>
        <div>
            <VerticalTimeline>
                {
                    Education.map((Education,i)=>(
                        <VerticalTimelineElement key={i}
                       key={i}
              contentStyle={{ background: Education.bgColor, color: '#fff' }}
              contentArrowStyle={{ borderRight: `7px solid ${Education.bgColor}` }}
              iconStyle={{ background: 'brown', color: 'black' }}
              icon={<SchoolIcon />}
                            date={Education.date}
                            dateClassName='text-white text-3xl font-semibold'>
                                <h3 className='text-2xl  font-semibold '>
                                {Education.header}</h3>
                                <h4 className='text-lg font-semibold'>{Education.institution}</h4>
                                <p>{Education.detail}</p>
                        </VerticalTimelineElement>
                    ))
                }
            </VerticalTimeline>
        </div>
    </section>
  )
}

export default Education
