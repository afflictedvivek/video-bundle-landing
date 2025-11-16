export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const baseClasses = 'px-6 py-3 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white focus:ring-purple-500',
    secondary: 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 focus:ring-gray-500',
    outline: 'bg-transparent hover:bg-gray-800 text-white border-2 border-purple-500 hover:border-purple-400 focus:ring-purple-500'
  };

  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
