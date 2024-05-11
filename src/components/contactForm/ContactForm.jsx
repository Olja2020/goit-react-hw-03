//import css from "./ContactForm.module.css";
import { useId } from "react";

import { Formik, Form, Field } from "formik";

export default function ContactForm({ onAdd }) {
  const fieldId = useId();
  const handleSubmit = (values, actions) => {
    onAdd(values);
    actions.resetForm();
  };
  return (
    <Formik initialValues={{ name: "", number: "" }} onSubmit={handleSubmit}>
      <Form>
        <div>
          <label htmlFor={`${fieldId}-username`}>Name</label>
          <Field type="text" name="name" id={`${fieldId}-username`} />
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
