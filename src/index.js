import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
function Test(){
  return <App/>;
}
ReactDom.render(<Test/>, document.getElementById('root'));