// src/components/Button.js
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
    type = 'button',
    className = '',
    onClick,
    children,
    disabled = false,
    size = 'md',
    variant = 'primary',
    icon = null,
    iconClass = ''
}) => {
    const sizeClass = size ? `btn-${size}` : '';
    const variantClass = variant ? `btn-${variant}` : '';

    return (
        <button
            type={type}
            className={`btn ${variantClass} ${sizeClass} ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {icon && <span className={`material-icons ${iconClass}`}>{icon}</span>}
            {children}
        </button>
    );
};

Button.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node,
    disabled: PropTypes.bool,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning']),
    icon: PropTypes.element,
};

export default Button;
