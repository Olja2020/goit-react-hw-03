import css from "./Contact.module.css";

const Contact = ({ data: { name, number, id }, onDelete }) => {
  return (
    <div className={css.container}>
      <p className={css.name}>{name}</p>
      <p className={css.number}>{number}</p>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};
export default Contact;
