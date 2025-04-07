import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './button';

// Primary button with consistent styling
export const PrimaryButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof Button> & { href?: string }
>(({ className, children, href, ...props }, ref) => {
  const buttonClass = "bg-red-500 hover:bg-red-600 text-white " + (className || "");
  
  if (href) {
    return (
      <Button className={buttonClass} asChild {...props}>
        <Link to={href}>{children}</Link>
      </Button>
    );
  }
  
  return (
    <Button className={buttonClass} ref={ref} {...props}>
      {children}
    </Button>
  );
});
PrimaryButton.displayName = 'PrimaryButton';

// Secondary/Outline button with consistent styling
export const OutlineButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof Button> & { href?: string }
>(({ className, children, href, ...props }, ref) => {
  const buttonClass = "border-red-500 text-red-500 hover:bg-red-50 " + (className || "");
  
  if (href) {
    return (
      <Button variant="outline" className={buttonClass} asChild {...props}>
        <Link to={href}>{children}</Link>
      </Button>
    );
  }
  
  return (
    <Button variant="outline" className={buttonClass} ref={ref} {...props}>
      {children}
    </Button>
  );
});
OutlineButton.displayName = 'OutlineButton';

// Section title with consistent styling
export const SectionTitle: React.FC<{
  title: string;
  subtitle?: string;
  className?: string;
}> = ({ title, subtitle, className = "" }) => {
  return (
    <div className={`text-center max-w-2xl mx-auto mb-12 ${className}`}>
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      {subtitle && <p className="text-gray-600">{subtitle}</p>}
    </div>
  );
};

// Card component with consistent styling
export const Card: React.FC<{
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}> = ({ children, className = "", hover = true }) => {
  return (
    <div 
      className={`bg-white p-6 rounded-lg border shadow-sm ${hover ? 'hover:shadow-md transition-shadow' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

// Badge component with consistent styling
export const Badge: React.FC<{
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'success' | 'warning' | 'danger';
  className?: string;
}> = ({ children, variant = 'default', className = "" }) => {
  const variantClasses = {
    default: "bg-red-100 text-red-700",
    outline: "bg-transparent border border-red-500 text-red-500",
    success: "bg-green-100 text-green-700",
    warning: "bg-amber-100 text-amber-700",
    danger: "bg-red-100 text-red-700"
  };
  
  return (
    <span 
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

// Logo component with consistent styling
export const Logo: React.FC<{
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}> = ({ className = "", size = 'md' }) => {
  const sizeClasses = {
    sm: "text-lg gap-1.5",
    md: "text-xl gap-2",
    lg: "text-2xl gap-2"
  };
  
  const iconSizes = {
    sm: "h-5 w-5",
    md: "h-6 w-6",
    lg: "h-8 w-8"
  };
  
  return (
    <Link 
      to="/" 
      className={`flex items-center ${sizeClasses[size]} font-bold text-red-500 ${className}`}
    >
      <span className={`${iconSizes[size]} rounded-full bg-red-500 flex items-center justify-center text-white text-xs`}>LC</span>
      <span>LifeCraft</span>
    </Link>
  );
};
