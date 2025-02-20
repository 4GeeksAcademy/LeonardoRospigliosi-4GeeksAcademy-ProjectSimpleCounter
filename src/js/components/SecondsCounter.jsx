import PropTypes from 'prop-types'





export default function SecondsCounter(props){
    return (
        <div className="bigCounter mt-5 d-inline-flex fs-2">
            <div className="div7 m-2 "><i className="fa-regular fa-clock"></i></div>
            <div className="div6 m-2 p-2">{props.num6 %10}</div>
            <div className="div5 m-2 p-2">{props.num5 %10}</div>
            <div className="div4 m-2 p-2">{props.num4 %10}</div>
            <div className="div3 m-2 p-2">{props.num3 %10}</div>
            <div className="div2 m-2 p-2">{props.num2 %10}</div>
            <div className="div1 m-2 p-2">{props.num1 %10}</div>
        </div>
    );
}

SecondsCounter.propTypes={
    num1:PropTypes.number,
    num2:PropTypes.number,
    num3:PropTypes.number,
    num4:PropTypes.number,
    num5:PropTypes.number,
    num6:PropTypes.number
};

let contador=0;
setInterval(() => {
    const valor1 = Math.floor(contador/1);
    const valor2 = Math.floor(contador/10);
    const valor3 = Math.floor(contador/100);
    const valor4 = Math.floor(contador/1000);
    const valor5 = Math.floor(contador/10000);
    const valor6 = Math.floor(contador/100000);
    contador = contador + 1
  }, 1000);

