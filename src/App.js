import { useState } from "react";
import "./styles.css";
// var username=prompt("your name please");
//emoji dictionary
const emojidictionary = {
  "| 📚js-books |": "ejs scope&closure",
  " | 🏰travel-suggestion |": "mandu  chittore,",
  " | 💻programming-lang| ": "c++ java js python"
};
var emojisweknow = Object.keys(emojidictionary);
export default function App() {
  const [meaning, setmeaning] = useState("");

  function emojiinputhandler(event) {
    var userinput = event.target.value;
    var meaning = emojidictionary[userinput];
    if (meaning === undefined) {
      meaning = "meaning not found";
    }
    setmeaning(meaning);
  }
  function emojiclickhandler(emoji) {
    var meaning = emojidictionary[emoji];
    setmeaning(meaning);
  }

  return (
    <div className="App">
      <h1 className="topheading">click the option to know suggestions</h1>
      {emojisweknow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiclickhandler(emoji)}
            style={{ fontSize: "1rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
            {""}
          </span>
        );
      })}
      <div className="suggestion">
        <h1>results are 📝</h1>
      </div>
      <div className="list"> {meaning}</div>
    </div>
  );
}
