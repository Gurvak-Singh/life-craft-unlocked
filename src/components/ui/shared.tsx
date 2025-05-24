import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './button';

// Primary button with consistent styling - Teal background with white text per sitemap.md
export const PrimaryButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof Button> & { href?: string }
>(({ className, children, href, ...props }, ref) => {
  const buttonClass = "bg-gradient-to-r from-lifecraft-500 to-lifecraft-600 hover:from-lifecraft-600 hover:to-lifecraft-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 " + (className || "");

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

// Secondary/Outline button with consistent styling - Teal border and text per sitemap.md
export const OutlineButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof Button> & { href?: string }
>(({ className, children, href, ...props }, ref) => {
  const buttonClass = "border-2 border-lifecraft-500 text-lifecraft-600 hover:bg-lifecraft-500 hover:text-white transition-all duration-300 " + (className || "");

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

// Section title with consistent styling - Uniform font size, weight, and spacing per sitemap.md
export const SectionTitle: React.FC<{
  title: string;
  subtitle?: string;
  className?: string;
  gradient?: boolean;
}> = ({ title, subtitle, className = "", gradient = false }) => {
  return (
    <div className={`text-center max-w-3xl mx-auto mb-16 ${className}`}>
      <h2 className={`text-4xl md:text-5xl font-bold mb-8 leading-[1.1] pb-2 ${gradient
        ? 'bg-gradient-to-r from-lifecraft-600 via-lifecraft-700 to-lifecraft-accent-600 bg-clip-text text-transparent'
        : 'text-gray-900'
        }`}>
        {title}
      </h2>
      {subtitle && <p className="text-xl text-gray-600 leading-relaxed">{subtitle}</p>}
    </div>
  );
};

// Card component with consistent styling - White background with teal accents per sitemap.md
export const Card: React.FC<{
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}> = ({ children, className = "", hover = true }) => {
  return (
    <div
      className={`bg-white p-8 rounded-xl border-0 shadow-lg ${hover ? 'hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

// Badge component with consistent styling - Teal as primary color per sitemap.md
export const Badge: React.FC<{
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'success' | 'warning' | 'danger' | 'gradient';
  className?: string;
}> = ({ children, variant = 'default', className = "" }) => {
  const variantClasses = {
    default: "bg-lifecraft-100 text-lifecraft-700 border-lifecraft-200",
    outline: "bg-transparent border-2 border-lifecraft-500 text-lifecraft-600",
    success: "bg-green-100 text-green-700 border-green-200",
    warning: "bg-amber-100 text-amber-700 border-amber-200",
    danger: "bg-red-100 text-red-700 border-red-200",
    gradient: "bg-gradient-to-r from-lifecraft-500 to-lifecraft-accent-500 text-white border-0"
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold border ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

// Logo component with consistent styling - Teal as main color per sitemap.md
export const Logo: React.FC<{
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}> = ({ className = "", size = 'md' }) => {
  const sizeClasses = {
    sm: "text-lg gap-2",
    md: "text-xl gap-2",
    lg: "text-2xl gap-3"
  };

  const iconSizes = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-10 h-10"
  };

  return (
    <Link
      to="/"
      className={`flex items-center ${sizeClasses[size]} font-bold hover:opacity-90 transition-opacity duration-300 group ${className}`}
    >
      <div className={`${iconSizes[size]} bg-gradient-to-r from-lifecraft-500 to-lifecraft-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
        <span className="text-white font-bold text-lg">L</span>
      </div>
      <span className="bg-gradient-to-r from-lifecraft-600 to-lifecraft-accent-600 bg-clip-text text-transparent">
        LifeCraft
      </span>
    </Link>
  );
};

// Metric/Stats component with consistent styling - Icon + number format per sitemap.md
export const MetricCard: React.FC<{
  icon: React.ElementType;
  number: string;
  label: string;
  className?: string;
}> = ({ icon: Icon, number, label, className = "" }) => {
  return (
    <div className={`text-center group ${className}`}>
      <div className="w-16 h-16 bg-gradient-to-r from-lifecraft-100 to-lifecraft-50 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-lifecraft-200/50 group-hover:scale-110 transition-transform duration-300 shadow-lg">
        <Icon className="w-8 h-8 text-lifecraft-600" />
      </div>
      <div className="text-3xl md:text-4xl font-bold text-lifecraft-600 mb-2 leading-none">
        {number}
      </div>
      <div className="text-gray-600 font-medium text-sm leading-tight">{label}</div>
    </div>
  );
};

// CTA Button component with consistent placement and styling per sitemap.md
export const CTAButton: React.FC<{
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ElementType;
  className?: string;
}> = ({ children, href, onClick, variant = 'primary', size = 'lg', icon: Icon, className = "" }) => {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const baseClass = `font-semibold transition-all duration-300 ${sizeClasses[size]} ${className}`;

  if (variant === 'primary') {
    const primaryClass = `${baseClass} bg-gradient-to-r from-lifecraft-500 to-lifecraft-600 hover:from-lifecraft-600 hover:to-lifecraft-700 text-white shadow-lg hover:shadow-xl`;

    if (href) {
      return (
        <Button className={primaryClass} asChild>
          <Link to={href}>
            {Icon && <Icon className="mr-2 w-5 h-5" />}
            {children}
          </Link>
        </Button>
      );
    }

    return (
      <Button className={primaryClass} onClick={onClick}>
        {Icon && <Icon className="mr-2 w-5 h-5" />}
        {children}
      </Button>
    );
  }

  // Outline variant
  const outlineClass = `${baseClass} border-2 border-lifecraft-500 text-lifecraft-600 hover:bg-lifecraft-500 hover:text-white`;

  if (href) {
    return (
      <Button variant="outline" className={outlineClass} asChild>
        <Link to={href}>
          {Icon && <Icon className="mr-2 w-5 h-5" />}
          {children}
        </Link>
      </Button>
    );
  }

  return (
    <Button variant="outline" className={outlineClass} onClick={onClick}>
      {Icon && <Icon className="mr-2 w-5 h-5" />}
      {children}
    </Button>
  );
};
