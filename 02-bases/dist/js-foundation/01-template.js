"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailTemplate = void 0;
exports.emailTemplate = `
    <div>
        <h1>Hi, {{name}}</h1>
        <p>Thank you for your order.</p>
        <p>Order ID: {{orderId}}</p>
    
    </div>

`;
// module.exports = { //Recomnedado exportar como objeto por que mas adelante podrian aparecer mas cosas
//     emailTemplate
// };
