import React from "react";
import './EditTextForm.css';

function EditTextForm({ changeDescription, handleInputChange, discardDescriptionChanges, descriptionInput, id }) {

  return (
    <form className="edit-text-form">
      <textarea
        className='edit-text-textarea'
        placeholder="type updated description"
        value={descriptionInput}
        onChange={(e) => handleInputChange(e.target.value)}
      />
      <button
        type="submit"
        className="btn btn-change"
        onClick={(e) => changeDescription(e,descriptionInput, id)}
      >
      Change description
      </button>
      <button
        className="btn btn-discard"
        onClick={(e) => discardDescriptionChanges(e)}>Discard changes</button>
    </form>
  );
}

export default EditTextForm;
