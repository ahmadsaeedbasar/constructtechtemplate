/**
 * LoadingSpinner Component
 * A loading spinner with different sizes
 * @param {string} size - Size variant ('sm', 'md', 'lg')
 * @param {string} color - Color of the spinner
 */
const LoadingSpinner = ({ size = 'md', color = 'primary', className = '' }) => {
  const spinnerClasses = `loading-spinner loading-spinner--${size} loading-spinner--${color} ${className}`.trim();

  return <div className={spinnerClasses} role="status" aria-label="Loading"></div>;
};

export default LoadingSpinner;
