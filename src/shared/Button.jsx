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
    iconClass = '',
    iconPlacement = 'left',
}) => {
    const sizeClass = size ? `btn-${size}` : '';
    const variantClass = variant ? `btn-${variant}` : '';
    // const iconPlacements = icon ? iconPlacement : 'left';

    return (
        <button
            type={type}
            className={`btn ${variantClass} ${sizeClass} ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {(icon && iconPlacement === 'left') && <span className={`material-icons ${iconClass}`}>{icon}</span>}
            {children}
            {(icon && iconPlacement === 'right') && <span className={`material-icons ${iconClass}`}>{icon}</span>}
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
    iconPlacement: PropTypes.oneOf(['left', 'right']),
};

export default Button;
