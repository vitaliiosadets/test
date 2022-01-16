import React, { Component } from "react";

// Тут можна створювати нові масиви, або міняти наявні для перевірки роботи програми
const array1 = [1, 2, 2, 3, 4, 5, 32323, 22];
const array2 = [32323, 23, 2, 2, 2, 22, 45];
const array3 = [333, 33, 45, 45, 1];
const array4 = [22, 2112, 41];

class Intersection extends Component {
    state = {
        arrayOfInterSectionValues: [],
        isLoading: true,
    };

    componentDidMount() {
        setTimeout(() => {
            this.createUniqueValues();
            this.changeLoadingStatus(false);
        }, 2000);
    }

    //стек викиликів, можна зробити і краще :)
    createUniqueValues = () => {
        this.addToStateDuplicates(
            this.findDuplicatesInArray(
                this.makeOneArrayOutOfMultipleArrays(
                    this.makeUniqueValuesInArrays(
                        this.getArraysFromServer(array1, array2, array3)
                    )
                )
            )
        );
    };

    getArraysFromServer = (...rest) => {
        const arrayOfArrays = [];
        arrayOfArrays.push(...rest);
        return arrayOfArrays;
    };

    // для створення унікальних значень в масиві
    makeUniqueValuesInArrays = (array) => {
        const arrayOfArrays = array;
        let uniqueArray = [];
        for (let i = 0; i < arrayOfArrays.length; i++) {
            if (Array.isArray(arrayOfArrays[i])) {
                let result = this.filterAnArray(arrayOfArrays[i]);
                uniqueArray.push(result);
            } else {
                continue;
            }
        }
        return uniqueArray;
    };

    // для створення одного масива з всіх наданих масивів
    makeOneArrayOutOfMultipleArrays = (array) => {
        const arrayWithValues = array;
        const concatinatedArray = [].concat(...arrayWithValues);
        return concatinatedArray;
    };

    //знаходження дублікатів в масиві
    findDuplicatesInArray = (array) => {
        const filteredArray = array.filter(
            (item, index, arr) => arr.indexOf(item) !== index
        );
        return filteredArray;
    };

    // для фільтрації масива, щоб залишились тільки унікальні значення
    filterAnArray = (array) => {
        const filteredArray = array.filter(
            (item, index, arr) => arr.indexOf(item) === index
        );
        return filteredArray;
    };

    // добавлення до стейту дублікатів
    addToStateDuplicates = (array) => {
        this.setState({ arrayOfInterSectionValues: array });
    };

    // функція для зміни лоадера
    changeLoadingStatus = (value) => {
        this.setState({ isLoading: value });
    };

    render() {
        const { arrayOfInterSectionValues, isLoading } = this.state;

        if (isLoading) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <h2>Assignment 2</h2>
                <div>{arrayOfInterSectionValues.join(" | ")}</div>
            </div>
        );
    }
}

export default Intersection;
