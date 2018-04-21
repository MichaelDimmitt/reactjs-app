import React, { Component } from 'react';
import logo from '../logo.svg';
import 'font-awesome/css/font-awesome.min.css';

const ContactRow = ({a,b,c,d}) => {
  return (
    <div>
		  <li class={a}>
		  	<i class={b}></i>
		  	<a href={c}>{d}</a>
		  </li>
    </div>
  )
}

const ContactContainer = (props) => {
  return (
    <div class='contact-container container-block'>
      <ul class='list-unstyled contact-list'>
        <ContactRow a='email' b='fa fa-envelope' c='mailto: volodymyr.pliuta@vladev.net' d='volodymyr.pliuta@vladev.net'/>
        <ContactRow  a='phone' b='fa fa-phone' c='tel:904 383 6783' d='904 383 6783'/>
        <ContactRow a='github' b='fa fa-github' c='https://github.com/americanman' d='GitHub'/>
        <ContactRow a='linkedin' b='fa fa-linkedin' c='https://www.linkedin.com/in/volodymyr-pliuta-40a888115' d='LinkedIn'/>
      </ul>
    </div>
  )
}

class Appo extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to OpenHax</h1>
        </header>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ContactContainer/>
      </div>
    )
  }
}

export default Appo;
