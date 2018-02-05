import React from 'react'
import '../styles/contact.css'

const Contact = () => {
  return(
    <div className='contact' id='contact'>
      <div className='get-connected'>
        GET <span>CONNECTED</span>
      </div>
      <div className='info flex'>
        <a href='mailto:edgarsbarajas@me.com' className='flex details'>
          <img src='/photos/contact/icons/email.png' alt='email'/>
          <span>edgarsbarajas@me.com</span>
        </a>
        <a href='tel:+19255863672' className='flex details'>
          <img src='/photos/contact/icons/phone.png' alt='phone'/>
          <span>(925)586-3672</span>
        </a>
        <a href='https://github.com/edgarsbarajas' className='flex details'>
          <img src='/photos/contact/icons/github.png' alt='github'/>
          <span>edgarsbarajas</span>
        </a>
        <a href='https://www.linkedin.com/in/edgarsbarajas/' className='flex details'>
          <img src='/photos/contact/icons/linkedin.png' alt='linkedin'/>
          <span>/in/edgarsbarajas</span>
        </a>
        <a href='https://twitter.com/edgarsbarajas' className='flex details'>
          <img src='/photos/contact/icons/twitter.png' alt='twitter'/>
          <span>@edgarsbarajas</span>
        </a>
        <a href='https://www.instagram.com/stevenbones/' className='flex details'>
          <img src='/photos/contact/icons/instagram.png' alt='instagram'/>
          <span>@stevenbones</span>
        </a>
      </div>
    </div>
  )
}

export default Contact;
