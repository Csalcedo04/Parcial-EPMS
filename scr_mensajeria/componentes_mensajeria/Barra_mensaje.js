import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

class Barra extends Component {
    render() {
        return ( 
            <form>
                <div class="row">
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">EMPS</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Proyectos</a>
        </li>
        
      </ul>
      <span class="navbar-text" >
          <a  aria-current="page" type="button" href="#" class="bi bi-bell-fill"></a>
          <a  aria-current="page" type="button" href="#" class="bi bi-person-fill">User</a>
          <a  aria-current="page" type="button" href="#" class="bi bi-box-arrow-right"> Log out</a>
      </span>
    </div>
  </div>
</nav>
                    </div>
            </form>
         );
    }
}

export default Barra;