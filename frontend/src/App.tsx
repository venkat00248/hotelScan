import { MainLayout } from "./components/layouts/Main/MainLayout";
import "./App.scss";
import { HashRouter } from "react-router-dom";
function App() {
  return (
    <HashRouter>
    <div className="App" data-test-id="app-component">
      <MainLayout />
    </div>
    </HashRouter>
  );
}

export default App;