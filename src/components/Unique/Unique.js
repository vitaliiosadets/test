import React, { Component } from "react";

// масив який ми получаєм з бекенду :)
const givenArray = [2, 4, 6, 8, 12, 17, 17, 233, 212, 2, 1, 8, 233, 6];

class Unique extends Component {
    state = {
        uniqueArray: [],
        isLoading: true,
    };

    // так як ми получаєм заданий масив з бекенду, то треба обробляти його в componentDidMount,
    // Для того щоб добавити Лоадер. через Сеттаймаут я зробив імітацію получання даних з бекенду
    // Допоки дані не готові, буде ренедеритись Лоадер, коли дані готові, зарендериться унікальний масив.
    componentDidMount() {
        setTimeout(() => {
            this.setToStateUniqueArray(
                this.makeAnArrayWithUniqueValues(givenArray)
            );
            this.changeLoadingStatus(false);
        }, 1000);
    }

    // для управління Лоадером
    changeLoadingStatus = (value) => {
        this.setState({ isLoading: value });
    };

    //Тут відбувається фільтрація масиву, тобто пошук унікальних значень
    // Якщо приходе не масив, вискоче ерор
    // Далі я використав метод filter з indexOf для знаходження унікальних значень
    makeAnArrayWithUniqueValues = (array) => {
        if (!Array.isArray(array)) {
            console.error("This is not an array!");
        }

        const filteredArray = array.filter(
            (item, index, arr) => arr.indexOf(item) === index
        );
        // також можна зробити простішим способом через Set:
        // return [...new Set(array)]

        return filteredArray;
    };

    // тут ми получаєм аргументом функцію, та записуєм її в змінну.
    // добавляєм в стейт унікальний масив.
    setToStateUniqueArray = (makeAnArrayWithUniqueValuesFunction) => {
        const filteredUniqueArray = makeAnArrayWithUniqueValuesFunction;
        this.setState({ uniqueArray: filteredUniqueArray });
    };

    render() {
        const { uniqueArray, isLoading } = this.state;

        if (isLoading) {
            return <div>Loading...</div>;
        }
        return (
            <React.Fragment>
                <h2>Assignment 1</h2>
                <div>{uniqueArray.join(", ")}</div>
            </React.Fragment>
        );
    }
}

export default Unique;
