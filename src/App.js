import logo from './logo.svg';
import './App.css';
import Componentc from './components/Componentc.js';
import Componentf from './components/Componentf.js';
import Hello from './components/Hello.js';
import C20241111 from './components/C20241111.js';
import Router from './components/Router.js';
import C20241114a from './components/C20241114a.js';

function App() {

  const tempName= "test1"; 
  const tempObj = {
    name : "name1"
    , number : 101
  };

  return (
    <>
      <Router />
      {/* <Hello name="hahaha" /> */}
      {/* <C20241111 name={tempName} obj={tempObj}/> */}
      {/*  */}
      {/*  */}
      {/* <C20241114a name="parameter!"/> */}
    </>
  );
}

export default App;
