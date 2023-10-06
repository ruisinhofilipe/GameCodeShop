import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import GameForm from "./pages/newGame.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Home } from "./pages/home";
import { UserProfile } from "./pages/userProfile";
import Cart from "./pages/cart";
import Game from './pages/game';

function App() {
  // // Current location
  const location = useLocation();

  // Array that contains all the paths where I don't want to display the Header
    const pathsWithoutHeader = ["/login", "/register", "/cart", "/game"];

  // Check if the array contains the path
  const shouldDisplayHeader = !pathsWithoutHeader.includes(location.pathname);

  return (
    <div className="App">
      {shouldDisplayHeader ? <Header /> : null}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/new-game" element={<GameForm />}></Route>
        <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/user-profile" element={<UserProfile />}></Route>
          <Route path="/game" element={<Game />}></Route>
      </Routes>
      {/*<Footer></Footer>*/}
    </div>
  );
}

export default App;
