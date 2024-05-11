import css from "./ContactForm.module.css";
import { useId } from "react";
//import React from "react";

import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
// const SignupSchema = Yup.object().shape({
//   firstName: Yup.string()
//     .min(2, "Too Short!")
//     .max(50, "Too Long!")
//     .required("Required"),
//   lastName: Yup.string()
//     .min(2, "Too Short!")
//     .max(50, "Too Long!")
//     .required("Required"),
//   email: Yup.string().email("Invalid email").required("Required"),
// });
const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "min 3 letter")
    .max(50, "max 50 letter")
    .required("required field"),
  number: Yup.string()
    .min(3, "min 3 number")
    .max(50, "max 50 number")
    .required("required field"),
});
export default function ContactForm({ onAdd }) {
  const fieldId = useId();
  const handleSubmit = (values, actions) => {
    onAdd(values);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={UserSchema}
    >
      <Form>
        <div>
          <label htmlFor={`${fieldId}-username`}>Name</label>
          <Field type="text" name="name" id={`${fieldId}-username`} />
          <ErrorMessage name="name" component="span" className={css.error} />
        </div>
        <div>
          <label htmlFor={`${fieldId}-number`}>Number</label>
          <Field type="text" name="number" id={`${fieldId}-number`} />
          <ErrorMessage name="number" component="span" className={css.error} />
        </div>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
