import React, { Component } from 'react';
import './App.css';
import './style.css';
import 'font-awesome/css/font-awesome.min.css';
import Appo from './Appo'

//const Footero = ({namedContent}) => {
const Footero= (props) => {
  return (
    <div>
      {props.namedContent}
    </div>
  )
}

// const Edu= (props) => {
//   return(
//     <div className='Edu'>
//     </div>
//   )
// }

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
