import styled from "styled-components"

interface Props {
    open: boolean
    }

export const Container = styled.div<Props>`
    display: flex;
    flex-direction: column;
    justify-content: ${(props) => (props.open ? "space-between" : "flex-start")};
    align-items: center;
    text-align: center;
    width: 300px;
    min-height: 400px;
    background-color: var(--whitesmoke);
    border-radius: 4px;
    box-shadow: 0px 2px 5px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);

    .card-header{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        padding: 10px;
        height: 120px;
        text-align: left;
        h5{
            color: ${(props) => (props.open ? "var(--green)" : "var(--red)")};
            font-family: 'Gotham Black';
        }
        h2{
            font-size: 22px;
            font-family: 'Gotham Black';
            color: var(--dark-grey);
        }
        p{
            color: var(--light-grey);
            font-family: "Gotham Light";
        }
    }

    .card-icons{
        display: ${(props) => (props.open ? "flex" : "none")};
        img{
            max-width: 70px;
        }
    }
    .card-schedules{
        display: ${(props) => (props.open ? "flex" : "none")};
        flex-wrap: wrap;
        width: 100%;
        margin: 15px 0px;
    }
` 

export const CardSchedule = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 50%;
    margin-bottom: 5px;
    h3{
        font-family: "Gotham Black";
    }
    h5{
        font-family: "Gotham Book";
    }
`