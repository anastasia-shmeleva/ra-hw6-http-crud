import PropTypes from "prop-types";

const Notes = (props) => {
  const {
    updateHandler
  } = props;

  return (
    <div className='notes__container'>
      <div className='notes__header'>
        <div className='notes__title'>Notes</div>
        <div className='notes__refresh' onClick={updateHandler}>&#128259;</div>
      </div>
      <div className='notes__body'>
        {props.children}
      </div>
    </div>
  )
}

Notes.propTypes = {
  updateHandler: PropTypes.func.isRequired,
}

export default Notes;