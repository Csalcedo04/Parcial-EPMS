import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

class Proyecto extends Component {
    render() {
        return ( 
          <div>
          <div class="row">
            <div class="col-sm-9">
              <h2 class="mt-3 ">Proyectos</h2>
              <hr></hr>
              <div class="container text-center">
                <div class="col-sm-1 ">
                  <a class="btn btn-success " href='#'>
                    <span class="bi bi-plus"></span><span class="bi bi-file-earmark-text"></span>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-sm-5">
              <div class="card mt-3 ">
                <div class="card-body">
                  
                  <h5 class="card-title ">Proyecto #1 <hr></hr></h5>
                  <p class="card-text"><p class="mt-4">Description...</p><strong>Date: **/**/****</strong><p>Scrum master: *******</p></p>
                  <a href="#" class="btn btn-dark">More...</a>
                </div>
              </div>
            </div>
            <div class="col-sm-5">
              <div class="card mt-3 ">
                <div class="card-body">
                  <h5 class="card-title">Proyecto #2<hr></hr></h5>
                  <p class="card-text"><p class="mt-4">Description...</p><strong>Date: **/**/****</strong><p>Scrum master: *******</p></p>
                  <a href="#" class="btn btn-dark">More...</a>
                </div>
              </div>
            </div>
            <div class="col-sm-5">
              <div class="card mt-3 ">
                <div class="card-body">
                  <h5 class="card-title">Proyecto #3<hr></hr></h5>
                  <p class="card-text"><p class="mt-4">Description...</p><strong>Date: **/**/****</strong><p>Scrum master: *******</p></p>
                  <a href="#" class="btn btn-dark">More...</a>
                </div>
              </div>
            </div>
            <div class="col-sm-5">
              <div class="card mt-3 ">
                <div class="card-body">
                  <h5 class="card-title">Proyecto #4<hr></hr></h5>
                  <p class="card-text"><p class="mt-4">Description...</p><strong>Date: **/**/****</strong><p>Scrum master: *******</p></p>
                  <a href="#" class="btn btn-dark">More...</a>
                </div>
              </div>
            </div>
            <div class="col-sm-5" >
              <div class="card mt-3 ">
                <div class="card-body">
                  <h5 class="card-title">Proyecto #5<hr></hr></h5>
                  <p class="card-text"><p class="mt-4">Description...</p> <strong>Date: **/**/****</strong><p>Scrum master: *******</p></p>
                  <a href="#" class="btn btn-dark">More...</a>
                </div>
              </div>
            </div>
            <div class="col-sm-5">
              <div class="card mt-3 ">
                <div class="card-body">
                  <h5 class="card-title">Proyecto #6<hr></hr></h5>
                  <p class="card-text"><p class="mt-4">Description...</p><strong>Date: **/**/****</strong><p>Scrum master: *******</p></p>
                  <a href="#" class="btn btn-dark">More...</a>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-5 p-4 bg-dark flex-shrink-0">
            <div class="row gy-4 gx-5">
              <div class="col-lg-4 col-md-6">
                <h5 class="nav-link text-white" >Contacto</h5>
    
                </div>
              <div class="col-lg-4 col-md-6"><h5 class="nav-link text-white">Soporte</h5></div>
              <div class="col-lg-4 col-md-6"><h5 class="nav-link text-white">Politicas</h5></div>
            </div>
          </div>
          </div>
            );
        }
    }
    
export default Proyecto;