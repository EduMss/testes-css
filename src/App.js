import './App.css';
import Loading from './loanding/index.tsx';
import Inicial from './Inicial/index.tsx';
import LoadingSkeleton from './LoadingSkeleton/index.tsx';
import LoadingSpinner from './LoadingSpinner/index.tsx';
import LoadingSpinner2 from './LoadingSpinner2/index.tsx';
import ItemMove from './ItemMove/index.tsx';
import BoxGirando from './BoxGirando/index.tsx';
import MenuAnimado from './Menu Animado/index.tsx';
import Login from './Login1/index.tsx';
import DragAndDrop from './DragAndDrop/inde.tsx';

import { BrowserRouter, Route, Routes } from "react-router-dom"; //npm i react-router-dom

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
          <Routes>
              <Route path="/" element={<Inicial/>} />
              <Route path="/loading" element={<Loading/>} />
              <Route path="/MenuAnimado" element={<MenuAnimado/>} />
              <Route path="/loading-skeleton" element={<LoadingSkeleton/>} />
              <Route path="/loading-spinner" element={<LoadingSpinner/>} />
              <Route path="/loading-spinner2" element={<LoadingSpinner2/>} />
              <Route path="/ItemMove" element={<ItemMove/>} />
              <Route path="/BoxGirando" element={<BoxGirando/>} />
              <Route path="/Login1" element={<Login/>} />
              <Route path="/DragAndDrop" element={<DragAndDrop/>} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
