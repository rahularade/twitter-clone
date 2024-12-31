import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Login/Signup";
import Feed from "./pages/Feed/Feed";
import Explore from "./pages/Explore/Explore";
import Notification from "./pages/Notification/Notification";
import Messages from "./pages/Messages/Messages";
import Bookmarks from "./pages/Bookmarks/Bookmarks";
import Lists from "./pages/Lists/Lists";
import Profile from "./pages/Profile/Profile";
import More from "./pages/More/More";
import { Userauthcontextprovider } from "./context/Userauthcontext";

function App() {
  return (
    <div className="App">
      <Userauthcontextprovider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route index element={<Feed />} />
            </Route>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Home />}>
              <Route path="feed" element={<Feed />} />
              <Route path="explore" element={<Explore />} />
              <Route path="notification" element={<Notification />} />
              <Route path="messages" element={<Messages />} />
              <Route path="bookmarks" element={<Bookmarks />} />
              <Route path="lists" element={<Lists />} />
              <Route path="profile" element={<Profile />} />
              <Route path="more" element={<More />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Userauthcontextprovider>
    </div>
  );
}

export default App;
