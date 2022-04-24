import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

class medios extends Component {
    render() {
        return ( 
            <div>
                <script src="https://sdk.mercadopago.com/js/v2"></script>
                <form action="/process_payment" method="post" id="paymentForm">

                    <h3>Medio de pago</h3>
                    <div> 
                        <select class="form-control" id="paymentMethod" name="paymentMethod">
                            <option>Seleccione un medio de pago</option>
                            <option value="--PaymentId--">--PaymentTypeName--</option>
                        </select>
                    </div>
                    <h3>Detalles del comprador</h3>
                    <div>
                        <div>
                            <label for="payerFirstName">Nombre</label>
                            <input id="payerFirstName" name="payerFirstName" type="text" value="Nome"></input>
                        </div>
                        <div>
                            <label for="payerLastName">Apellido</label>
                            <input id="payerLastName" name="payerLastName" type="text" value="Sobrenome"></input>
                        </div>
                        <div>
                            <label for="payerEmail">E-mail</label>
                            <input id="payerEmail" name="payerEmail" type="text" value="test@test.com"></input>
                        </div>
                        <div>
                            <label for="docType">Tipo de documento</label>
                            <select id="docType" name="docType" data-checkout="docType" type="text"></select>
                        </div>
                        <div>
                            <label for="docNumber">Número de documento</label>
                            <input id="docNumber" name="docNumber" data-checkout="docNumber" type="text"/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <input type="hidden" name="transactionAmount" id="transactionAmount" value="100" />
                            <input type="hidden" name="productDescription" id="productDescription" value="Nombre del Producto" />
                            <br></br>
                            <button type="submit">Pagar</button>
                            <br></br>
                            <div>
                        </div>
                    </div>
                    </div>
                </form>
            </div>
            );
        }
    }

export default medios;