import styled from "styled-components"

export const Container = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: solid 3px var(--whitesmoke);
    width: 100%;
    padding: 20px;
    max-width: 1000px;
    
    .container-top{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        gap: 5px;

        h5{
            color: var(--light-grey);
            font-family: "Gotham book";
        }

        img{
            max-width: 35px;
        }
    }

    .container-title{
        width: 100%;
        text-align: left;
        border-bottom: solid 1px var(--light-grey);
        padding: 10px;
        h3{
            color: var(--light-grey);
            font-family: "Gotham book";
            font-size: 22px;
        }
    }
    .container-inputs{
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    .container-results{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin: 20px 0;
        gap: 5px;
        font-family: 'Gotham Book';

        .input-box{
            display: flex;
            justify-content: flex-start;
            gap: 5px;
            width: 100%;
        }
        .result-box{
            display: flex;
            justify-content: flex-start;
            gap: 5px;
            width: 100%;
            h3{
                font-family: 'Gotham Bold';
            }
        }

        @media (min-width: 500px){
            flex-direction: row;
            .result-box{
                justify-content: flex-end;
            }
        }
    }
    .container-buttons{
        display: flex;
        justify-content: center;
        gap: 10px;
    }
    `


    
