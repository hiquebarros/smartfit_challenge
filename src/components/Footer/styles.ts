import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--dark-grey);
    width: 100%;
    height: 80px;
    padding: 50px 0;
    gap: 10px;
    font-family: 'Gotham Book';
    
    img{
        max-width: 80px;
    }

    p{
        color: white;
    }
` 