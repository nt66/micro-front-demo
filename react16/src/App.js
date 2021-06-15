// import logo from './logo.svg';
import React from 'react';
import './App.css';

function App(props) {
  console.log('子应用执行中。。。')
  // 回调函数
  const childrenHandler = ()=>{
    const { cb } = props;
    cb&&cb('aaaaaa');
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title"> 子页面 </h1>
        <button onClick={childrenHandler}> 1.子应用传父应用</button>
      </header>
    </div>
  );
}

export default App;
