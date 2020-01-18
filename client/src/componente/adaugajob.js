import React, { Component } from "react";
import './adaugajob.css';

class AdaugaJob extends Component {
    constructor(){
        super();
    }
    
    checkTitlu(){
      let titlu = document.getElementById("titlu");
      let eroare = document.getElementById("eroareTitlu");
      if(titlu.value === ""){
        eroare.innerHTML += "Titlul trebuie sa contina ceva";
        alert("Titlul trebuie sa contina ceva.");
      }else if(titlu.value !== ""){
        eroare.innerHTML = "Titlul este valid";
        eroare.style.color = "green";
      }
    }
    checkDescriere(){
      let descriere = document.getElementById("descriere");
      let eroare = document.getElementById("eroareDescriere");
      if(descriere.value === ""){
        eroare.innerHTML += "Descriere incorecta";
        alert("Descrierea trebuie sa contina ceva.");
      }else if(descriere.value.length >0){
        eroare.innerHTML = "Descrierea este valida";
        eroare.style.color = "green";
      }
    }
   
    render() {
      return (
        <div>
          <form action="/job" method="POST">
            <div>
                <label htmlFor="titlu">Titlu</label>
                <input type="text" name="titlu" id="titlu" onBlur={this.checkTitlu}/>
                <br/>
                <label htmlFor="descriere" >Descriere</label>
                <input type="text" name="descriere" id="descriere" onBlur={this.checkDescriere}/>
                <button >Adauga job nou</button>
              </div>
              <div id="erori">
                <p id="eroareTitlu"></p>
                <p id="eroareDescriere"></p>
              </div>
          </form>
        </div>
      );
    }
  }
  
  export default AdaugaJob;