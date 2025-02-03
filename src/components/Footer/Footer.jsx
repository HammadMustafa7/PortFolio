import React from 'react'

function Footer() {
  return (
    <div className='relative font-saira flex justify-between md:flex-row flex-col border-t border-white items-center px-14 py-3 bg-black'> 
        <div className='shadow text-white '>
            &copy; <a href="/">Mahmood Ahmad</a> 2025
        </div>
        <div className='shadow text-white '>
           Made By: <a className='hover:text-blue-500' href="https://www.linkedin.com/in/hammad-mustafa-3769a6316/" target='_blank' noreferrer noopener>Hammad Mustafa</a>
        </div>
    </div>
  )
}

export default Footer