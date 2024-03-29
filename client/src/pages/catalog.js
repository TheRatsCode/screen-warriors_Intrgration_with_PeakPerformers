import React from "react";
import { CatalogPage, Tags, Results, Element } from "./catalogElements";

const query = [
    ["House 1", "Construction Group 1"],
    ["House 2", "Construction Group 2"],
    ["House 3", "Construction Group 3"],
    ["House 4", "Construction Group 4"],
    ["House 5", "Construction Group 5"]
]

const Elements = () => {
    let content = [];
    let num = query.length;
    for (let i = 0; i < num; i++) {
        content.push(
            <Element>
                <h1>{query[i][0]}</h1>
                <img src="https://www.bradley.edu/asset/img/bradleyHall.svg" alt="Alternative Text" />
                <p><a href="https://www.cat.com/en_US.html">{query[i][1]}</a></p>
            </Element>
        );
    }
    return content;
}

const Catalog = () => {
    return (
        <CatalogPage>
            <Tags>
                <h1>Tag 1</h1>
                <h1>Tag 2</h1>
            </Tags>
            <Results>
                {Elements()}
            </Results>
        </CatalogPage>
    );
};

export default Catalog;