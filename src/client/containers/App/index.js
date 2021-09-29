import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";

import {MDBContainer, MDBRow, MDBSelect} from "mdb-react-ui-kit";

const App = ({}) => {
    const [data, setData] = useState([]);

    /**
     * Runs generateNewData() now and in 2 second interval
     */
    useEffect(() => {
        setInterval(() => {
            generateNewData();
        }, 2000)

        generateNewData();
    }, []);

    /**
     * Return random number 0-19
     * @returns {number}
     */
    function getRandomSelectionIndex() {
        return Math.floor(Math.random() * 20);
    }

    /**
     * Updates state of data with new set of data for MDBSelect component.
     * Chooses selected option randomly.
     */
    function generateNewData() {
        console.group("New render");
        const newData = [];

        for(let i = 0; i < 20; i++) {
            newData.push({
                text: `Option ${i}`,
                value: i
            });
        }

        newData[getRandomSelectionIndex()].selected = true;
        console.info("New data for MDBSelect", newData);

        setData(newData);
    }

    return (
        <>
            {/** Shows in console how many renders have been occurred */}
            {console.count("Render")}

            <main className={"flex-shrink-0"}>
                <MDBContainer>
                    <MDBRow>
                        <h3>Selected value should be Option {data.find(data => data.selected)?.value}</h3>
                    </MDBRow>

                    <MDBRow>
                        <MDBSelect data={data} getSelectedValue={val => console.info("Data changed", val)} />
                    </MDBRow>

                </MDBContainer>
            </main>

            {console.groupEnd()}
        </>
    )
}

App.propTypes = {}

export default App;
