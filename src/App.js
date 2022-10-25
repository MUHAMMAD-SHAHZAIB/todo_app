import "./App.css";
import React, { useState } from "react";
import TodoLists from "./components/TodoLists";

function App() {
  //!--------it is signle state it store single item--------
  const [text, setText] = useState("");
  //!--------it all item store in array----------
  const [item, setItem] = useState([]);

  //!----------it is handel function it value show in input field--------
  const handel = e => {
    console.log(e.target.value);
    setText(e.target.value);
  };

  //! -------------submit function it work to add data in list form--------------
  const submit = () => {
    if (text === "") {
      alert("enter somthing");
    } else {
      setItem(preVal => {
        return [...preVal, text];
      });
      setText("");
    }
  };

  //! ----------for delete item function---------------------
  const RemoveItem = id => {
    console.log("deleted");
    setItem(oldItems => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>Todo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add Items"
            name="item"
            value={text}
            onChange={handel}
          />
          <button onClick={submit}>+</button>

          <ol>
            {item.map((val, index) => {
              return (
                <TodoLists
                  key={index}
                  id={index}
                  text={val}
                  onSelect={RemoveItem}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
