import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

class Barraupo extends Component {
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
                    <a class="nav-link" aria-current="page" href="#">Propuestas De Proyecto</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Mensajes</a>
                  </li>
        
                  </ul>
                  <span class="navbar-text col-md-2" >
                    <ul class="nav navbar-nav navbar-right">
                      <div class="col-md-5">
                        <li><a href="#"><span class="bi bi-bell-fill nav-item"></span></a></li>
                        
                        </div>
                        <li><a hrer="#"><span class="bi bi-person-fill nav-item"></span>User</a></li>
                        
                        
                        <li> <a hrer="#"><span class="bi bi-box-arrow-right nav-item"></span>Log out</a> </li>
                        
                  </ul>
                  </span>
                </div>
                </div>
              </nav>
            </div>
          </form>
         );
    }
}

export default Barraupo;
