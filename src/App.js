import React from 'react';
import {Header} from "./VIEW/Components/Header/Header";
import {Main} from "./VIEW/Components/Main/Main";

function App() {
  return (
    <React.Fragment >
      <Header />
      <div className="divider"></div>
      <Main />
      <footer className='footer'></footer>
    </React.Fragment>
  );
}

export default App;
