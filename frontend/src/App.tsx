import { MainLayout } from "./components/layouts/Main/MainLayout";
import "./App.scss";
import { HashRouter } from "react-router-dom";
import { FormDataProvider } from "./components/Items/stateManagement/FormDataContext";
function App() {
  return (
    <HashRouter>
      <FormDataProvider>
    <div className="App" data-test-id="app-component">
      <MainLayout />
    </div>
    </FormDataProvider>
    </HashRouter>
  );
}

export default App;