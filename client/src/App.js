import React from 'react';
import './App.css';

import Article from './components/Article';

function App() {
  return (
    <div style={{backgroundImage: 'url(' + require('./images/background.jpg') + ')'}}>
      <header> INFORM </header>


       <div class="container">
          <div class="row">
            <div class="col-sm">
               <Article/>
            </div>
            <div class="col-sm">
               <p> testing testing 123 </p>
            </div>
          </div>
       </div>
    </div>
  );
}

export default App;
