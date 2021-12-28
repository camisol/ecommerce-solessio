

import NavBar from './components/NavBar/NavBar';
import Home from './components/Main/Home'
import ItemListContainer from './components/Main/ItemListContainer';
import ItemDetailContainer from './components/Main/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";




function App() {



  return (
    <BrowserRouter>
      <NavBar nombre={"THE FIT SHOP"} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categorias/:tipo" element={<ItemListContainer />} />
        <Route path="/carrito" element="" />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
