import React, { Component } from "react";

//тут можна змінювати обєкт, та добавляти йому нові поля задля перевірки роботи програми
const someObj = {
    a: {
        b: {},
    },
};

class IsEmptyDeep extends Component {
    state = {
        isEmptyDeep: {},
        isLoading: true,
    };

    componentDidMount() {
        this.addResultOfCheckFunctionToState(someObj);
    }

    //добавлення результату в стейт
    addResultOfCheckFunctionToState = (obj) => {
        this.setState({ isEmptyDeep: obj });
    };

    // за допомогою рекурсії провіряю заданий обєкт
    checkWhetherObjectIsEmpty = (obj, recurse) => {
        if (Object.keys(obj).length === 0) {
            return true;
        } else {
            for (let i in obj) {
                if (
                    obj[i] === null ||
                    obj[i] === "" ||
                    obj[i] === undefined ||
                    isNaN(obj[i]) ||
                    obj[i].length === 0
                ) {
                    return true;
                } else if (recurse && typeof obj[i] === "object") {
                    this.checkWhetherObjectIsEmpty(obj[i], recurse);
                }
            }
        }
    };

    render() {
        return (
            <>
                <h2>Assignment 3</h2>
                <p>
                    You should try to manipulate with an object in isEmptyDeep
                    Component, because i dont know what kind of values i will
                    show on screen
                </p>
            </>
        );
    }
}

export default IsEmptyDeep;
