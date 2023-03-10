import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, warning, success, danger, backgroundColor, size, label, ...props }) => {
  //const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  let mode;
  if(primary){
    mode = 'storybook-button--primary'
  } else if(success){
    mode = 'storybook-button--success'
  } else if(danger){
    mode = 'storybook-button--danger'
  } else if(warning){
    mode = 'storybook-button--warning'
  } else {
    mode = 'storybook-button--secondary'
  }
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  success: PropTypes.bool,
  danger: PropTypes.bool,
  warning: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  danger: false,
  warning: false,
  success: false,
  size: 'medium',
  onClick: undefined,
};
