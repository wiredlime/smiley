import React, { useState } from "react";
const allItems = [
  { id: "beaming", value: "ð", isSmile: true },
  { id: "grinning", value: "ð", isSmile: true },
  { id: "squinting", value: "ðĪŠ", isSmile: true },
  { id: "winking", value: "ð", isSmile: true },
  { id: "sad", value: "ðĨ", isSmile: false },
];
function Smiley() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [items, setItems] = useState(allItems);

  const handleLogIn = () => {
    setisLoggedIn(true);
  };
  const handleLogOut = () => {
    setisLoggedIn(false);
  };
  const removeItem = (itemId) => {
    setItems(items.filter((item) => item.id !== itemId));
  };
  return (
    <div>
      <h2>Smiley Project</h2>
      <div className="loginControl">
        {isLoggedIn ? (
          <button onClick={handleLogOut}>Log Out</button>
        ) : (
          <button onClick={handleLogIn}>Log In</button>
        )}
      </div>
      <div>
        {isLoggedIn && (
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                <button onClick={() => removeItem(item.id)}>remove</button>
                <label htmlFor={`${item.id}-input`}>
                  {item.value}
                  {item.id}
                </label>
                <input
                  id={`${item.id}-input`}
                  type="text"
                  defaultValue={item.id}
                ></input>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Smiley;
//{String(isLoggedIn)}
// show value of state variable isLoggedIn in string
