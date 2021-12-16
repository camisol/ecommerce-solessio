

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Main/ItemListContainer';
import ItemDetailContainer from './components/Main/ItemDetailContainer';




function App() {


  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos" />
      <ItemDetailContainer />
    </>
  );
}

export default App;
