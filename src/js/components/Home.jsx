import React, { useState, useEffect } from "react";
import SecondsCounter from './SecondsCounter.jsx';

const Home = () => {
  const [segundo, setSegundo] = useState(0); // Segundo Inicial

  useEffect(() => {
    const timer = setInterval(() => {
      setSegundo(contador => contador + 1); // Incremento segundo +1
    }, 1000);
  
    return () => {
      clearInterval(timer); // Limpia el intervalo cuando el componente se desmonta
    };
  }, []); // Se ejecuta solo una vez cuando el componente se monta


  return (
    <div className="text-center">
      <SecondsCounter pSegundo={segundo} />
			{/* <Card imageUrl="https://picsum.photos/id/124/350/150" title="A nice image" />
			<MiComponente nombre="Abreu" edad={50} esProfesor={true} /> */}
    </div>
  );
};

export default Home;