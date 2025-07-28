const Button = ({
  children,
  className = "",
  variant = "default",
  size = "default",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  const variants = {
    default: "bg-emerald-600 text-white hover:bg-orange-700",
    outline: "border border-current bg-transparent hover:bg-orange-50",
    secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200",
  };
  const sizes = {
    default: "h-10 px-4 py-2",
    lg: "h-12 px-8 py-3 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const Card = ({ children, className = "", ...props }) => (
  <div
    className={`bg-white rounded-lg border border-slate-200 shadow-sm ${className}`}
    {...props}
  >
    {children}
  </div>
);

const CardHeader = ({ children, className = "", ...props }) => (
  <div className={`p-6 pb-0 ${className}`} {...props}>
    {children}
  </div>
);

const CardContent = ({ children, className = "", ...props }) => (
  <div className={`p-6 pt-0 ${className}`} {...props}>
    {children}
  </div>
);

const CardTitle = ({ children, className = "", ...props }) => (
  <h3
    className={`text-xl font-semibold leading-none tracking-tight ${className}`}
    {...props}
  >
    {children}
  </h3>
);

const CardDescription = ({ children, className = "", ...props }) => (
  <p className={`text-sm text-slate-600 ${className}`} {...props}>
    {children}
  </p>
);

const Badge = ({ children, className = "", variant = "default", ...props }) => {
  const variants = {
    default: "bg-emerald-100 text-emerald-800",
    secondary: "bg-slate-100 text-slate-800",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

const Input = ({ className = "", ...props }) => (
  <input
    className={`flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    {...props}
  />
);

const Textarea = ({ className = "", ...props }) => (
  <textarea
    className={`flex min-h-20 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    {...props}
  />
);

const Separator = ({ className = "", ...props }) => (
  <div className={`h-px bg-slate-200 ${className}`} {...props} />
);

export {
  Button,
  Card,
  CardTitle,
  CardContent,
  CardHeader,
  CardDescription,
  Badge,
  Input,
  Textarea,
  Separator,
};
