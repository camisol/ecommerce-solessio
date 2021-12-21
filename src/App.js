

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Main/ItemListContainer';
//import ItemDetailContainer from './components/Main/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";




function App() {



  return (
    <BrowserRouter>
      <NavBar nombre={"THE FIT SHOP"} />
      <Routes>
        <Route path="/" element="" />
        <Route path="/todos" element={<ItemListContainer greeting="Bienvenidos" />} />
        <Route path="/categorias/:tipo" element={<ItemListContainer greeting="Bienvenidos" />} />
        <Route path="/carrito" element="" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
