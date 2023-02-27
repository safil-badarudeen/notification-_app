import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Card from "./components/card/Card";
import {posts} from "./data";

function App() {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState("");
 
  return (
    <div className="container">
      {user ? (
        <>
          <div style={{ display: "grid" }}>
            <Navbar />
            <div style={{marginLeft:"250px"}}>
            {posts.map((item) => (
              <Card key={item.id} post={item} />
            ))}
            </div>
            
          </div>

          <span className="username">{user}</span>
        </>
      ) : (
        <div className="login">
          <input
            type="text"
            placeholder="text"
            onChange={(e) => setUserName(e.target.value)}
          />
          <button onClick={() => setUser(userName)}>Login</button>
        </div>
      )}
    </div>
  );
}

export default App;
