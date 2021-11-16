import PropTypes from "prop-types";

const Form = (props) => {
  const {
    onSubmit: onFormSubmit,
    onChange: onFieldChange,
    form,
  } = props;

  return (
    <form className='form' onSubmit={(e) => {
      e.preventDefault();
      onFormSubmit(form);
    }}>
        <div className='form__field'>
          <label htmlFor='name' className='form__name'>New Note</label>
          <input
            className='form__input'
            name='name'
            onChange={onFieldChange}
            value={form.content}
            />
        </div>

      <button className='form__submit'>Add</button>
    </form>
  )
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  form: PropTypes.object.isRequired,
}

export default Form;