/**
 * Card Component
 * A flexible card component with different variants
 * @param {ReactNode} children - The content to display inside the card
 * @param {string} variant - The card variant ('default' or 'elevated')
 * @param {Object} props - Additional props to pass to the card element
 */
const Card = ({ children, variant = 'default', className = '', ...props }) => {
  const cardClasses = `card card--${variant} ${className}`.trim();

  return (
    <div className={cardClasses} {...props}>
      {children}
    </div>
  );
};

export default Card;
