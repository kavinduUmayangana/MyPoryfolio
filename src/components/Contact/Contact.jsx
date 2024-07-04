import React from 'react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import HomeIcon from '@mui/icons-material/Home';

const Contact = () => {
    const myContactInfo=[
        {
            logo:<MailOutlineIcon/>,
            text:'kavinduumayanganauk@gmail.com'
        },
        {
            logo:<WhatsAppIcon/>,
            text:'(+94)742372317'
        },
        {
            logo:<HomeIcon/>,
            text:'Dodangoda, Kaluthara'
        },
    ]
  return (
    <section className='px-3 py-10 text-white'>
        <div className='mt-8 text-center'>
            <h3 className='text-4xl font-semibold '>
                Contact<span className=' text-neutral-100'> Me</span>
            </h3>
            <p className='mt-3 text-2xl text-violet-700'>Get in touch me</p>
            <div className='flex flex-col max-w-3xl gap-6 p-2 mx-auto
             mt-16 bg-gray-500 md:p-6 md:flex-row rounded-xl'>

                <div className='flex flex-col gap-7'>
                    {
                        myContactInfo.map((contact,i)=>(
                        <div key={i}className='flex items-center gap-4 w-fit'>
                            <div className='min-w-[3.5rem] text-3xl 
                            min-h-[3.5rem] flex items-center
                             justify-center text-white bg-black rounded-full'>
                                {contact.logo}
                            </div>
                            <p className='text-base '>{contact.text}</p>
                        </div>
                        ))
                    }
                </div>
                {/* <form className='flex flex-col flex-1 gap-5 '>
                    <input type='text' placeholder='Your Name'/>
                    <input type='Email' placeholder='Your Email Address'/>
                    <textarea placeholder='Your Message' rows={10}></textarea>
                    <button className='btn-primary w-fit'>Send Message</button>
                </form> */}

            </div>
        </div>
      
      
    </section>
  );
};

export default Contact;