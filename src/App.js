import "./App.scss";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Recommended from "./components/Recommended/Recommended";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__page">
        <Sidebar />
        <Recommended />
      </div>
    </div>
  );
}

export default App;
