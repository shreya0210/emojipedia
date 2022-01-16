import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map((props) => (
          <Entry
            key={props.id}
            emoji={props.emoji}
            name={props.name}
            meaning={props.meaning}
          />
        ))}
      </dl>
    </div>
  );
}

export default App;
