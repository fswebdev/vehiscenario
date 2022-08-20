import React from 'react';
import Button from './Button';
import "../index.css";
const Addscenarios = ({ showForm, changeTextAndColor }) => {
  return (
      <header className="general">
          <Button onClick={showForm} color={changeTextAndColor ? '' : ''} text=     {changeTextAndColor ? 'Add Scenarios' : 'Add Scenarios'} />
        </header>
    )
}
export default Addscenarios;
