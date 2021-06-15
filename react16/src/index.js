import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function render(props) {
  const { container,cb } = props;
  ReactDOM.render(
    <React.StrictMode>
      <App cb={cb} />
    </React.StrictMode>,
    container ? container.querySelector('#root') : document.getElementById('root')
  );
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

// 生命周期函数

export async function bootstrap() {
  console.log('[react16] react app bootstraped');
}

export async function mount(props) {
  console.log('get props:', props);
  render(props);
}

export async function unmount(props) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'));
}

reportWebVitals();
