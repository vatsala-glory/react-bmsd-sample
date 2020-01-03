import React, { Component } from "react";
import Counter from "./containers/Counter";
import { Header } from "./containers/Header/header";
import { Footer } from "./containers/Footer/footer";
import { Form } from "./containers/Home/form";
import { Result } from "./containers/Home/result";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <section>

        </section>
        <main className="bose-main row scrollable">
          <Form />
          <Result />
         
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
