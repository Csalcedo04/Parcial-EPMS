import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

class Barra extends Component {
    render() {
        return ( 
            <form>
                <h1>Mensajes</h1>
                <ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center">
    *Nombre*
    <span class="badge bg-primary rounded-pill">14</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    *Nombre*
    <span class="badge bg-primary rounded-pill">2</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    *Nombre*
    <span class="badge bg-primary rounded-pill">1</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    *Nombre*
    <span class="badge bg-primary rounded-pill"></span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    *Nombre*
    <span class="badge bg-primary rounded-pill">7</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    *Nombre*
    <span class="badge bg-primary rounded-pill">3</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    *Nombre*
    <span class="badge bg-primary rounded-pill">10</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    *Nombre*
    <span class="badge bg-primary rounded-pill">2</span>
  </li>
</ul>
            </form>
            );
        }
    }
    
    export default Barra;