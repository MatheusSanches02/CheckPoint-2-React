import './App.css';
import './assets/css/style.css';
import './assets/css/style.css'
import Corpo from './components/corpo/Corpo';
import Rodape from './components/rodape/Rodape'
import Cabecalho from './components/cabecalho/Cabecalho';

function App() {

  const listaSabores = ['Chocolate','Morango','Baunilha','Ameixa','Uva','Caramelo','Menta','Limão','Chocolate Branco', 'Açaí']

  const listaCoberturas = ['KitKat', 'Granulado', 'Chocolate ao Leite', 'Leite em Pó', 'Ovomaltine', 'Nutella', 'Caramelo', 'Morango', 'Leite Condesado', 'Doce de Leite']

  return (
    <div className="App">
      <Cabecalho/>
      <Corpo sorvetes = {listaSabores} coberturas = {listaCoberturas}/>
      <Rodape/>
    </div>
  );
}

export default App;
