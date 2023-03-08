import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Banner from './pages/Banner';
import Cabecalho from './pages/Cabecalho';
import Marcas from './pages/Marcas';
import NovosProdutos from './pages/NovosProdutos';
import Parceiros from './pages/Parceiros';
import Produtos from './pages/Produtos';
import ProdutosRelacionados from './pages/ProdutosRelacionados';
import Rodape from './pages/Rodape';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Cabecalho />
    <Banner />
    <Produtos />
    <Parceiros />
    <ProdutosRelacionados />
    <Marcas />
    <NovosProdutos />
    <Rodape />
    
  </React.StrictMode>
);
