import "./MainLayout.scss";
import { Header } from "../Header/Header";
export const MainLayout = () => {
  return (
    <div >
      <Header />
      <div className="main-content">
        <div className="routing">
          <div className="layoutRouting" >
            Main
          </div>
        </div>
      </div>
    </div>
  );
};
