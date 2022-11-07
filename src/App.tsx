import GlobalStyle from "./theme/globalStyles"
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import Legend from './components/Legend';
import { AppText, AppWrapper, CardWrapper, PaginationBox } from "./styles"
import Card from './components/Card';
import { useContext, useEffect, useState } from "react"
import { FilterContext } from "./providers/contexts/filterContext";
import ReactPaginate, { ReactPaginateProps } from "react-paginate";
import { Pagination } from "./components/Pagination";



function App() {

  const { filteredData } = useContext(FilterContext);

  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 6;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = filteredData.slice(pagesVisited, pagesVisited + usersPerPage)

  const pageCount = Math.ceil(filteredData.length / usersPerPage);

  const changePage = ({ selected }: { selected: number }) => {
    setPageNumber(selected);
  };


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
      <CardWrapper>
        {displayUsers && displayUsers.map(item => {
          return <Card key={item.id} data={item} />
        })}
      </CardWrapper>
      {filteredData.length > 1 ? (<PaginationBox>
        <Pagination changePage={changePage} pageCount={pageCount} />
      </PaginationBox>) : (null)}

      <Footer />
    </AppWrapper>
  );
}

export default App;
