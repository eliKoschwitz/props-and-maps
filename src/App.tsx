import React from 'react';
import './App.css';
import GreetingMe from "./GreetingMe";

function App() {
    const greeting1Props = {
        name: "Elias",
        age: 30
    }

    const greeting2Props = {
        name: "Manu",
        age: 30
    }

    const nameArray : string[] = ["Elias","Nessy","Tyson","Fabian"];

    const nameMap = [
        {id: "1", name: "Elias", age: 28},
        {id: "2", name: "Raphaela", age: 37}
    ]

    //const ausgabe = nameMap.map(huhu => {return GreetingMe(huhu.name, huhu.age)});

  return (
      <div>
        <GreetingMe {...greeting1Props}/>
          <GreetingMe {...greeting2Props}/>

          {nameMap.map(huhu => {return <GreetingMe { ...huhu }/>  })}

          {nameMap.map(huhu => {return <GreetingMe  name = {huhu.name} age = {huhu.age}/>  })}

      </div>
  );
}

export default App;

/*
    <div>
        <GreetingMe/>
    </div>
*/