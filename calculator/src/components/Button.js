import React from 'react';
import PropTypes from 'prop-types';

const Button = () => {
    return <button>9 {this.props.name}</button>;
};

Button.propTypes = {
    name: PropTypes.string
};

export default Button;
