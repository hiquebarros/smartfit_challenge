import styled from "styled-components";

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const AppText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px 15px;
  gap: 20px;
  h1 {
    font-size: 40px;
    font-family: "Gotham Black";
    text-transform: uppercase;
  }

  .after {
    width: 115px;
    height: 15px;
    background: var(--black);
  }

  p {
    font: 16px;
    font-family: "Gotham Book";
    line-height: 22px;
  }
  max-width: 1000px;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
  width: 100%;
  gap: 10px;
  margin-bottom: 50px;

  @media (min-width: 768px) {
    gap: 50px;
  }
`;

export const PaginationBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1000px;
  margin: 0 0 20px 0px;

  .paginationUl {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    padding: 0 10%;
    @media (min-width: 1024px){
        padding: 0 0;
    }
  }
  .previousBttn,
  .nextBttn {
    font-family: "Gotham black";
    cursor: pointer;
  }
  .paginationActive {
    font-family: "Gotham bold";
    text-decoration: underline;
  }
  .paginationPages {
    cursor: pointer;
  }
`;
