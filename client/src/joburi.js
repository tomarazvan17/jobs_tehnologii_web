import React, { Component } from 'react';
import './joburi.css';

class Joburi extends Component {
  constructor() {
    super();
    this.state = {
      customers: []
    };
  }

  componentDidMount() {
    fetch('/job')
      .then(res => res.json())
      .then(customers => this.setState({customers}));
  }

  aplicaJob(job){
    alert(`Ai aplicat cu succes! la ${job}`);
  }

  render() {
    const joburi = this.state.customers.map(job => 
      <tr key={job.id + Math.random()}>
           <td>{job.id}</td>
           <td>{job.titlu}</td>
           <td>{job.descriere}</td>
           <td><button onClick={()=> this.aplicaJob(job.titlu)}>Aplica</button></td>
      </tr>
    );
    let spanClas;
    if(joburi.length <5){
      spanClas = "blue";
    }else if(joburi.length >=5){
      spanClas = "pink";
    }


    return (
      <div>
        <h2>Aveti in total un numar de #<span className={spanClas}>{this.state.customers.length} </span> joburi. </h2>
        <table id="joburi">
          <tbody>
            <tr id="head">
              <th>#ID</th>
              <th>Titlu Job</th>
              <th>Descriere Job</th>
              <th>Aplicare Job</th>
            </tr>
            {joburi}           
          </tbody>

        </table>
      </div>
    );
  }
}

export default Joburi;