import "./Onboarding.scss";
import { Form } from "./Form";
import { Header } from "./Header";
import { FormDataProvider } from "./stateManagement/FormDataContext";

export const Onboarding = () => {

  return (
    <FormDataProvider>
      <div className="OnBording" style={{marginTop:"64px"}}>
        <main>
          <div className="container px-0">
            <div className="signup-content d-flex">
              <section className="signup-img">
                {/* <img src="./assets/img/onboard.jpg" alt="" /> */}
              </section>
              <section className="signup-form pb-3">
                <Header />

                <Form />
              </section>
            </div>
          </div>
        </main>
      </div>
    </FormDataProvider>
  );
};
