import React from 'react';
import PropTypes from 'prop-types';

const Display = () => {
    return (
        <div>
            <div>{this.props.value}</div>
        </div>
    );
};

Display.propTypes = {
    value: PropTypes.string
};

export default Display;
