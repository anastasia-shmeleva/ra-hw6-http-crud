import PropTypes from "prop-types";

const Note = (props) => {
  const {
    text,
    id,
    deleteHandler
  } = props;

  return (
    <div className='note__wrapper'>
      <div className='note__body'>
        <span className='note__text'>{text}</span>
        <div className='note__delete' onClick={() => deleteHandler(id)}>x</div>
      </div>
    </div>
  )
}

Note.propTypes = {
  text: PropTypes.string.isRequired,
  deleteHandler: PropTypes.func.isRequired,
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
}

export default Note;