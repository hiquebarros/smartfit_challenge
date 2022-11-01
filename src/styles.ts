import styled from "styled-components"

export const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const AppText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 50px 15px;
    gap: 20px;
    h1{
        font-size: 40px;
        font-family: 'Gotham Black';
        text-transform: uppercase;
    }

    .after{
        width: 115px;
        height: 15px;
        background: var(--black);
    }

    p{
        font: 16px;
        font-family: "Gotham Book";
    }
    max-width: 1000px;
`