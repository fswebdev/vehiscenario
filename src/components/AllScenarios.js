import React from 'react';
import Button from './Button';
import "../index.css";
const Allscenarios = ({ showForm, changeTextAndColor }) => {
  return (
      <header className="general">
          <Button onClick={showForm}  text={changeTextAndColor ? 'All Scenarios' : 'All Scenarios'} />
        </header>
    )
}
export default Allscenarios;
