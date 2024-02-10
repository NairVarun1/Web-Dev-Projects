import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createCard(count) {
  return (
    <Entry
      key={count.id}
      emoji={count.emoji}
      name={count.name}
      description={count.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createCard)}</dl>
    </div>
  );
}

export default App;
