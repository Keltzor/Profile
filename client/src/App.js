import FullName from "./Component/Profile/FullName";
import Address from "./Component/Profile/Address";
import ProfilePhoto from "./Component/Profile/ProfilePhoto";
import "./App.css";

function App() {
  return (
    <div className="App">
      <FullName />
      <ProfilePhoto />
      <Address />
    </div>
  );
}

export default App;
