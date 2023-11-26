import React from "react";
import NavBar from "./components/NavBar"
import Card from "./components/Card"
import data from "./data";
import "./style.css"


function App() {
  const cards = data.map(item => {
    return (
      <Card 
        key={item.id}
        item={item}
      />
    )
  }
  )
  return (
    <div className="App">
      <NavBar />
      <section>
        {cards}

      </section>
    </div>
  );
}

export default App;
