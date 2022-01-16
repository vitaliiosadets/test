import React, { Component } from "react";

import { ErrorMessage, Field, Form, Formik } from "formik";

import "./BasicLoginForm.scss";

const EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class BasicLoginForm extends Component {
    submitForm = (values) => {
        const { email, password } = values;
        console.log("SUBMIT", email, password);
    };

    //функція валідації полів
    validateForm = (values) => {
        const { email, password } = values;
        const errors = {};

        if (!email) {
            errors.email = "You should write at least few symbols";
        } else if (!EMAIL_REGEXP.test(email)) {
            errors.email = "Invalid Email";
        }

        if (!password) {
            errors.password = "You should write at least few symbols";
        } else if (password.length < 5) {
            errors.password = "You should write more than 5 symbols";
        }
        return errors;
    };

    render() {
        return (
            <div>
                <h2>Assignment 4</h2>
                <div className="wrapper">
                    <div className="form">
                        <span className="form__subtitle">Welcome!</span>
                        <h2 className="form__title">Join The Community</h2>
                        <Formik
                            initialValues={{
                                email: "",
                                password: "",
                            }}
                            onSubmit={this.submitForm}
                            validate={this.validateForm}
                        >
                            {(formikProps) => {
                                return (
                                    <Form>
                                        <div className="form__section">
                                            <div className="form__field">
                                                <label className="form__label">
                                                    E-mail or Username
                                                </label>
                                                <Field
                                                    className={`form__input ${
                                                        formikProps.errors
                                                            .email &&
                                                        formikProps.touched
                                                            .email
                                                            ? "form__input__invalid"
                                                            : !formikProps
                                                                  .errors
                                                                  .email &&
                                                              !formikProps
                                                                  .touched.email
                                                            ? "form__input"
                                                            : "form__input__success"
                                                    }`}
                                                    name="email"
                                                    type="text"
                                                    value={
                                                        formikProps.values.email
                                                    }
                                                    placeholder="e.g.: elonmusk@mars.com"
                                                />
                                            </div>
                                            <div className="form__field">
                                                <label className="form__label">
                                                    Password
                                                </label>
                                                <Field
                                                    className={`form__input 
													${
                                                        formikProps.errors
                                                            .password &&
                                                        formikProps.touched
                                                            .password
                                                            ? "form__input__invalid"
                                                            : !formikProps
                                                                  .errors
                                                                  .password &&
                                                              !formikProps
                                                                  .touched
                                                                  .password
                                                            ? "form__input"
                                                            : "form__input__success"
                                                    }`}
                                                    name="password"
                                                    type="password"
                                                    value={
                                                        formikProps.values
                                                            .password
                                                    }
                                                    placeholder="e.g.: X Æ A-12"
                                                />
                                            </div>
                                        </div>
                                        <div className="form__signup">
                                            <button
                                                className="form__button"
                                                type="submit"
                                            >
                                                Sign Up
                                            </button>
                                        </div>
                                    </Form>
                                );
                            }}
                        </Formik>
                        <div className="footer">
                            <p className="footer__text">
                                Already a member? &ensp;
                                <a href="#" className="footer__link">
                                    Login here &rarr;
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BasicLoginForm;
