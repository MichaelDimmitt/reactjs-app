import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css';
//const Footero = ({namedContent}) => {
const Footero= (props) => {
  return (
    <div>
      {props.namedContent}
    </div>
  )
}

const ContactRow = ({a,b,c,d}) => {
	return (<div>
		<li class={a}>
			<i class={b}></i>
			<a href={c}>{d}</a>
		</li>
	</div>)
}

const Appo= (props) => {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1 className='App-title'>Welcome to OpenHax</h1>
      </header>
      <p className='App-intro'>
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <div class='contact-container container-block'>
        <ul class='list-unstyled contact-list'>
          <ContactRow a='email' b='fa fa-envelope' c='mailto: volodymyr.pliuta@vladev.net' d='volodymyr.pliuta@vladev.net'/>
          <li class='phone'><i class='fa fa-phone'></i><a href='tel:904 383 6783'>904 383 6783</a></li>
          <li class='github'><i class='fa fa-github'></i><a href='https://github.com/americanman'>GitHub</a></li>
        </ul>
      </div>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <div>
        {/*<Headero/>*/}
        <Appo/>
        <Footero namedContent='test passed'/>
      </div>
    );
  }
}

export default App;
