//import css from "./ContactForm.module.css";
import { Formik, Form, Field } from "formik";
//import { number } from "prop-types";
export default function ContactForm(onAdd) {
  const handleSubmit = (values, actions) => {
    onAdd(values);
    actions.resetForm();
  };

  // onAdd({
  //   name: e.target.elements.name.values,
  //   number: e.target.elements.number.values,
  // });
  return (
    <Formik initialValues={{ name: "", number: "" }} onSubmit={handleSubmit}>
      <Form>
        <div>
          <label>Name</label>
          <Field type="text" name="username" />
        </div>
        <div>
          <label>Number</label>
          <Field type="text" name="number" />
        </div>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
