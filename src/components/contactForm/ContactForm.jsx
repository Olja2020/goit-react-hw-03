//import css from "./ContactForm.module.css";
//import React from "react";
import useId from "react";
//import { nanoid } from "nanoid";
import { Formik, Form, Field } from "formik";
//import { number } from "prop-types";
export default function ContactForm({ onAdd }) {
  const fieldId = useId();
  const handleSubmit = (values, actions) => {
    onAdd(values);
    actions.resetForm();
  };
  //model.id = nanoid();
  // onAdd({
  // id: Date.now();
  //   name: e.target.elements.name.values,
  //   number: e.target.elements.number.values,
  // });
  return (
    <Formik initialValues={{ name: "", number: "" }} onSubmit={handleSubmit}>
      <Form>
        <div>
          <label htmlFor={`${fieldId}-username`}>Name</label>
          <Field type="text" name="username" id={`${fieldId}-username`} />
        </div>
        <div>
          <label htmlFor={`${fieldId}-number`}>Number</label>
          <Field type="text" name="number" id={`${fieldId}-number`} />
        </div>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
