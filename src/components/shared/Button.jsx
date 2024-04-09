/* eslint-disable react/prop-types */

const Button = ({
  children,
  variant = "light",
  href,
  isExternal = false,
  size = "default",
}) => {
  const baseClasses =
    "w-full z-1 font-grotesk font-medium cursor-pointer sm:w-full text-lg border rounded-md shadow-one hover:shadow-inset transition ease-in-out duration-300";

  const sizeClasses = {
    default: "px-8 py-4",
    small: "px-4 py-2 text-sm",
  };

  const variantClasses = {
    light:
      "bg-gradient-to-r from-white to-gray-500 border-white text-black shadow-one",
    dark: "bg-gray-950 border-gray-700 hover:opacity-85",
    white: "bg-white py-3 text-black border-gray-500 hover:opacity-85",
    blurred:
      "bg-white/10 backdrop-blur-lg py-3 text-md text-white border border-gray-500 hover:opacity-85 px- cursor-pointer",
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]}`;

  if (href) {
    return (
      <a
        href={href}
        className={`inline-block text-center ${classes}`}
        target={isExternal ? "_blank" : "_self"}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return <button className={classes}>{children}</button>;
};

export default Button;
