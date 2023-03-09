import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const mount = (HtmlElement) => {
  ReactDOM.render(
    <App/>,
    HtmlElement
  );
};

if(process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing_dev_root');
  if(devRoot) {
    mount(devRoot);
  }
}


export {mount};