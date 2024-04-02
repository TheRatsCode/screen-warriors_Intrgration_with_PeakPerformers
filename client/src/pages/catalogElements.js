import styled from "styled-components";

export const CatalogPage = styled.div`
    display: grid;
    grid-template-areas:
        "t r";
    justify-content: start;
`;

export const Tags = styled.div`
    height: 100%; /* Full-height: remove this if you want "auto" height */
    width: 300px;
    overflow-x: hidden; /* Disable horizontal scroll */
    padding: 0px 10px;
    grid-area: t;
`;

export const Results = styled.div`
    overflow: auto;
    padding: 10px;
    grid-area: r;
`;

export const Element = styled.div`
    width: 480px;
    float: left;
    margin: 10px;
    border: 2px solid black;
`;



///LOGAN ADDED

export const CatalogButton = styled.button`
#colorButton {
    padding: 10px 20px;
    background-color: #007bff;
    color: #ffffff;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    font-size: 16px;
}
`;

/*
export const CatalogButton = styled.button`

    padding: 10px 20px;
    background-color: #007bff;
    color: #ffffff;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    font-size: 16px;
`;
*/