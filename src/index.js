import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from "./Header"
import SortEmail from "./SortEmail";
import SortAge from './SortAge';

ReactDOM.render(<div><div className = "allPage"><Header /><SortEmail /> <SortAge /> </div><div className='listOfPeople'><App /></div></div> , document.getElementById('root'));


