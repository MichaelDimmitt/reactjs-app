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



const Contact_row = ({a,b,c,}) => {
	return (<div>
		<li class={a}>
			<i class={b}></i>
			<a href={c}/>
		</li>
	</div>)
}
<div class="contact-container container-block">
  <ul class="list-unstyled contact-list">
    <Contact_row a='email' b='fa fa-envelope' c='mailto: volodymyr.pliuta@vladev.net">volodymyr.pliuta@vladev.net'/>
    <li class=""><i class=""></i><a href="</a></li>
    <li class="phone"><i class="fa fa-phone"></i><a href="tel:904 383 6783">904 383 6783</a></li>
    <li class="github"><i class="fa fa-github"></i><a href="https://github.com/americanman">GitHub</a></li>
    <li class="linkedin"><i class="fa fa-linkedin"></i><a href="https://www.linkedin.com/in/volodymyr-pliuta-40a888115" target="_blank">LinkedIn.com</a></li>
 </ul>
</div><!--//contact-container-

const Appo= (props) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to OpenHax</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
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
