import React, { useState } from 'react';
import GlobalStyle from './globalStyled';
import Produtos from './components/main';
import Header from './components/header';
import Footer from './components/footer';
import BuyPage from "./components/BuyPage";



function App() {
  const [page,setPage]= useState(1)
  return (
    <div>
      <GlobalStyle />
      <Header page={page}
      setPage={setPage} />
      {
        page===1? <Produtos setPage={setPage} />: <BuyPage setPage={setPage} />
      }
      <Footer/>

    </div>
  );
}

export default App;
