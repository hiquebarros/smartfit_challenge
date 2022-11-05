import styled from "styled-components"

interface Props {
  styleType: string
  }

export const Container = styled.button<Props>`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 5px 10px;
    border: ${(props) => (props.styleType === "1" ? "none" : "solid 1px var(--light-grey)")};
    border-radius: 4px;
    text-transform: uppercase;
    width: 100%;
    background-color: ${(props) => (props.styleType === "1" ? "var(--yellow)" : "white")};
    font-family: "Gotham Black";

` 