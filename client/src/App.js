import React,  {Component} from 'react';
import Joburi from './joburi';
import AdaugaJob from './componente/adaugajob';

class App extends Component{

  render(){
      return(
          <div>
            <AdaugaJob/>
            <Joburi nume="Toma R"/>

          </div>
      );
  }
}


export default App;
