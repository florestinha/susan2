import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const SendButton = ({ onClick }) => (
  <div
    className="common__fonts__normal gardener-create-form__send-button"
    onClick={onClick}
  >
    <div className="gardener-create-form__send-button__text">
      Salvar
    </div>
  </div>
);

SendButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default SendButton;
