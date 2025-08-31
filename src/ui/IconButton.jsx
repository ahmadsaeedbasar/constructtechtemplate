/**
 * IconButton Component
 * A button component optimized for displaying icons
 * @param {ReactNode} children - The icon content
 * @param {Function} onClick - Click handler function
 * @param {boolean} disabled - Whether the button is disabled
 * @param {string} size - Size variant ('sm', 'md', 'lg')
 * @param {string} variant - Visual variant ('default', 'primary', 'secondary')
 * @param {Object} props - Additional props
 */
const IconButton = ({
  children,
  onClick,
  disabled = false,
  size = 'md',
  variant = 'default',
  className = '',
  ...props
}) => {
  const buttonClasses = `icon-button icon-button--${size} icon-button--${variant} ${className}`.trim();

  return (
    <button
      className={buttonClasses}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      aria-label={props['aria-label'] || 'Icon button'}
      {...props}
    >
      {children}
    </button>
  );
};

export default IconButton;
