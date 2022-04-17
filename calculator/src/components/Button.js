import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
    render() {
        return <button>{this.props.name}</button>;
    }
}

Button.propTypes = {
    name: PropTypes.string
};

export default Button;