export default function Card({ children, className = '', ...props }) {
  return (
    <div 
      className={`bg-gray-900 border border-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
