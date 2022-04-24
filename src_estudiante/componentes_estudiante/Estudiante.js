import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

class Estudiante extends Component {
    render() {
        return ( 
            <><nav id="navbar-example3" class="navbar navbar-light bg-light flex-column align-items-stretch p-3">
                <a class="navbar-brand" href="#">Indice</a>
                <nav class="nav nav-pills flex-column">
                    <a class="nav-link" href="#item-1">Titulo</a>
                    <nav class="nav nav-pills flex-column">
                        <a class="nav-link ms-3 my-1" href="#item-1-1">Integrantes</a>
                        <a class="nav-link ms-3 my-1" href="#item-1-2">Introduccion</a>
                    </nav>
                    <a class="nav-link" href="#item-2">Contexto</a>
                    <a class="nav-link" href="#item-3">Objetivos</a>
                    <nav class="nav nav-pills flex-column">
                        <a class="nav-link ms-3 my-1" href="#item-3-1">Recursos Implementados</a>
                        <a class="nav-link ms-3 my-1" href="#item-3-2">Informe de Avances</a>
                    </nav>
                </nav>
            </nav><div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-offset="0" tabindex="0">
                    <h4 id="item-1">Titulo</h4>
                    <p>Editar</p>
                    <h5 id="item-1-1">Integrantes</h5>
                    <p>...</p>
                    <p>Editar</p>
                    <p>...</p>
                    <h5 id="item-1-2">Introduccion</h5>
                    <p>...</p>
                    <p>...</p>
                    <p>Editar</p>
                    <p>...</p>
                    <p>...</p>
                    <h4 id="item-2">Contexto</h4>
                    <p>Editar</p>
                    <p>...</p>
                    <h4 id="item-3">Objetivos</h4>
                    <p>Editar</p>
                    <p>...</p>
                    <h5 id="item-3-1">Recursos Implementados</h5>
                    <p>...</p>
                    <p>Editar</p>
                    <p>...</p>
                    <p>...</p>
                    <h5 id="item-3-2">Informe de Avances</h5>
                    <p>Editar</p>
                    <p>...</p>
                </div></>
            );
        }
    }
    
    export default Estudiante;