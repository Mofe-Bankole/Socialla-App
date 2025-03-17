import "./App.css";
import Newsfeed from "./Components/Newsfeed/Newsfeed";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import NewsfeedMain from "./Pages/NewsfeedMain";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StoriesMain from "./Pages/StoriesMain";
import GroupsMain from "./Pages/GroupsMain";
import SettingsMain from "./Pages/SettingsMain";
import AccountInfoMain from "./Pages/AccountInfoMain";
import BadgesMain from "./Pages/BadgesMain";
import ProfileMain from "./Pages/ProfileMain";
import SavedAddressMain from "./Pages/SavedAddressMain";
import ChangePasswordMain from "./Pages/ChangePasswordMain";
import SocialNetworkMain from "./Pages/SocialNetworkMain";
import NotificationMain from "./Pages/NotificationMain";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route excat path="/signup" element={<SignUp />} />
        <Route excat path="/login" element={<Login />} />
        <Route exact path="/" element={<NewsfeedMain />} />
        <Route exact path="/StoriesMain" element={<StoriesMain />} />
        <Route exact path="/GroupsMain" element={<GroupsMain />} />
        <Route exact path="/SettingsMain" element={<SettingsMain />} />
        <Route exact path="/AccountInfoMain" element={<AccountInfoMain />} />
        <Route exact path="/BadgesMain" element={<BadgesMain />} />
        <Route exact path="/ProfileMain" element={<ProfileMain />} />
        <Route exact path="/SavedAddressMain" element={<SavedAddressMain />} />
        <Route
          exact
          path="/ChangePasswordMain"
          element={<ChangePasswordMain />}
        />
        <Route
          exact
          path="/SocialNetworkMain"
          element={<SocialNetworkMain />}
        />
        <Route exact path="/NotificationMain" element={<NotificationMain />} />
      </Routes>
    </BrowserRouter>
  );
}
{
  /* <Navbar/>
     <Sidebar/>
     <Newsfeed/> */
}
export default App;
