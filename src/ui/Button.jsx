import React from 'react';

const Button = ({ 
  children, 
  variant = "primary", 
  size = "md", 
  onClick, 
  disabled = false,
  type = "button",
  className = "",
  fullWidth = false, // Add fullWidth prop
  ...props 
}) => {
  // Base button classes
  const baseClass = "btn";
  
  // Variant classes
  const variantClass = `btn-${variant}`;
  
  // Size classes
  const sizeClass = `btn-${size}`;
  
  // Disabled class
  const disabledClass = disabled ? "btn-disabled" : "";
  
  // Full width class
  const fullWidthClass = fullWidth ? "btn-full" : "";
  
  // Combine all classes
  const combinedClass = `${baseClass} ${variantClass} ${sizeClass} ${disabledClass} ${fullWidthClass} ${className}`.trim();

  return (
    <button
      type={type}
      className={combinedClass}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      {...props} // This should now be safe since we've extracted all known props
    >
      {children}
    </button>
  );
};

export default Button;