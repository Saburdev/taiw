// import { BoxChange } from './components/BoxChange'
import { useState } from "react";
import { Form } from "./components/Form";
import { List } from "./components/List";

function App() {

    const[list,setList]=useState([]);

  return (
    <div className="App h-screen w-full  bg-sky-300 flex justify-center items-center 
    flex-col">
      <Form  list={list} setList={setList}/>
      <List list={list}/>
    </div>
  );
}

export default App;
