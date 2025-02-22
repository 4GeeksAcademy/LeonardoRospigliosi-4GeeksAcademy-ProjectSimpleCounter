import React from 'react';
import PropTypes from 'prop-types';

export default function SecondsCounter({ pSegundo }) {
  // Separar los segundos en digitos individuales
  const valor1 = Math.floor(pSegundo / 1) % 10;
  const valor2 = Math.floor(pSegundo / 10) % 10;
  const valor3 = Math.floor(pSegundo / 100) % 10;
  const valor4 = Math.floor(pSegundo / 1000) % 10;
  const valor5 = Math.floor(pSegundo / 10000) % 10;
  const valor6 = Math.floor(pSegundo / 100000) % 10;

  return (
    <div className="bigCounter mt-5 d-inline-flex fs-2">
      <div className="div7 m-2"><i className="fa-regular fa-clock"></i></div>
      <div className="div6 m-2 p-2">{valor6}</div>
      <div className="div5 m-2 p-2">{valor5}</div>
      <div className="div4 m-2 p-2">{valor4}</div>
      <div className="div3 m-2 p-2">{valor3}</div>
      <div className="div2 m-2 p-2">{valor2}</div>
      <div className="div1 m-2 p-2">{valor1}</div>
    </div>
  );
}

SecondsCounter.propTypes = {
    pSegundo: PropTypes.number.isRequired, // Asegura que parametro 'segundos' sea pasado como numero
};