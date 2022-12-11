import React from 'react';
import GlobalStyle from './globalStyled';
import Produtos from './components/main';
import Header from './components/header';
import Footer from './components/footer';



function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Produtos/>
      <Footer/>

    </div>
  );
}

export default App;
