import GlobalStyle from "./theme/globalStyles"
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import Legend from './components/Legend';
import { AppText, AppWrapper, CardWrapper } from "./styles"
import useFetch from "./hooks/useFetch";
import Card from './components/Card';
import { useContext, useState } from "react"
import { FilterContext } from "./providers/contexts/filterContext";
import useFilter from "./hooks/useFilter";


function App() {

  const { shiftState, search } = useContext(FilterContext);
  const { data } = useFetch(
    "https://test-frontend-developer.s3.amazonaws.com/data/locations.json"
  );

  const { nonRepeatedMorningGyms, nonRepeatedAfternoonGyms, nonRepeatedNightGyms } = useFilter(data)


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
      {search ? (
        <CardWrapper>
          {shiftState === "manhã" ? (
            <>
              {nonRepeatedMorningGyms.map(item => {
                return <Card key={Math.random()} data={item} />
              })}
            </>
          ) : shiftState === "tarde" ? (
            <>
              {nonRepeatedAfternoonGyms.map(item => {
                return <Card key={Math.random()} data={item} />
              })}
            </>
          ) : (
            <>
              {nonRepeatedNightGyms.map(item => {
                return <Card key={Math.random()} data={item} />
              })}
            </>
          )}

        </CardWrapper>
      ) : (
        null
      )}

      <Footer />
    </AppWrapper>
  );
}

export default App;
