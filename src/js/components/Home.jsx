import React from "react";
import MiComponente from './MiComponente.jsx';
import Card from './Card.jsx';
import SecondsCounter from './SecondsCounter.jsx';

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";




//create your first component
const Home = () => {
	return (
		

		<div className="text-center">
			{/* <SecondsCounter seconds={3434} /> */}
			
			
			{/* <SecondsCounter  num1={valor1} num2={valor2} num3={valor3} num4={valor4} num5={valor5} num6={valor6}/> */}


			{/* <Card imageUrl="https://picsum.photos/id/124/350/150" title="A nice image" />
			<MiComponente nombre="Abreu" edad={50} esProfesor={true} /> */}
		</div>
	);
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

	Home.render(
        <SecondsCounter digitOne={valor1} digitTwo={valor2} digitThree={valor3} digitFour={valor4} />
    );

  }, 1000);





export default Home;