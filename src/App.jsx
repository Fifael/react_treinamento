import Comp from "./components/basicos/Primeiro";
import ComParamentro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmentos";

export default (_) => (
  <div id="app">
    <h1>Fundamentos React (Arrow)</h1>
    <Fragmento />
    <ComParamentro titulo="Situação do Aluno" aluno="Pedro Silva" nota={9.3} />
    <Comp />
  </div>
);
