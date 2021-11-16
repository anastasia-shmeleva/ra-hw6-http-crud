import PropTypes from "prop-types";
import { useRef } from 'react';

const Note = (props) => {
  const {
    text,
    id,
    deleteHandler
  } = props;

  const myRef = useRef(null);

  const onDelete = () => {
    const { id } = myRef.current.dataset;
    deleteHandler(id);
  }

  return (
    <div className='note__wrapper' ref={myRef} data-id={id}>
      <div className='note__body'>
        <span className='note__text'>{text}</span>
        <div className='note__delete' onClick={onDelete}>x</div>
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