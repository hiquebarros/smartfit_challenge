import React from 'react';
import GlobalStyle from "./theme/globalStyles"
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import Legend from './components/Legend';
import { AppText, AppWrapper } from "./styles"

function App() {
  return (
    <AppWrapper>
      <GlobalStyle />
      <Header />
      <AppText>
        <div>
          <h1>Reabertura</h1><h1>Smart Fit</h1>
        </div>
        <div className='after'>d</div>
        <p>O horário de funcionamento das nossas unidades está seguindo os decretos de cada município. Por isso, confira aqui se a sua unidade está aberta e as medidas de segurança que estamos seguindo.</p>
      </AppText>
      <Form />
      <Legend />
      <Footer />
    </AppWrapper>
  );
}

export default App;
