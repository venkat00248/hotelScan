import { MainLayout } from "./components/layouts/Main/MainLayout";
import "./App.scss";
function App() {
  return (
    <div className="App" data-test-id="app-component">
      <MainLayout />
    </div>
  );
}

export default App;