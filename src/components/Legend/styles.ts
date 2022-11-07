import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: var(--whitesmoke);
gap: 5px;
margin: 25px 0px;
.container-title{
  h2{
    margin: 20px 0 5px 0px;
    font-family: "Gotham black";
    font-size: 18px;
  }
}
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  max-width: 1000px;
  @media (min-width: 500px){
    grid-template-columns: 1fr 1fr;
}
    @media (min-width: 1024px){
    grid-template-columns: 1fr 1fr 1fr 1fr;
}
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-basis: 100%;
  margin: 10px 0;

  .box-title{
    margin: 10px;
    font-family: "Gotham black";
  }

  .box-imgs{
    display: flex;
    flex-direction: row;
    gap: 10px;

    img{
        max-width: 80px;
    }
  }

  @media (min-width: 500px){

  }
`;
