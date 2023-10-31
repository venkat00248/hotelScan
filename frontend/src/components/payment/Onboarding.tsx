import "./Payment.scss";
import { Form } from "./Form";
import { Header } from "./Header";
import { FormDataProvider } from "./stateManagement/FormDataContext";

export const Onboarding = () => {

  return (
    <FormDataProvider>
      <div>
        <main>
          <div className="container px-0">
            <div className="signup-content d-flex">
              <section className="signup-img">
                <img src="./assets/img/avatar-1.jpg" alt="" />
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
