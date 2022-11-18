import AreasView from "./components/AreasView";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AreaView from "./components/AreaView";
import Nav from "./components/Nav";
import Login from "./components/Login";
import { useEffect, useState } from "react";
import HomePage from "./components/HomePage";

function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user && window.location.pathname !== "/login")
      window.location.pathname = "/login";

    setUser(user);
  }, []);
  return (
    <BrowserRouter>
      {user && <Nav user={user} />}
      <Routes>
        {user && (
          <>
            <Route path="/" element={<HomePage user={user} />} />
            <Route path="/areas" element={<AreasView user={user} />} />
            <Route path="/area/:id" element={<AreaView user={user} />} />
          </>
        )}
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
