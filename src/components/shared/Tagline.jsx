const TagLine = ({ className, children }) => {
  return (
    <div className={`tagline flex items-center w-full mx-auto ${className || ""}`}>
      <div className="text-n-3">{children}</div>
    </div>
  );
};

export default TagLine;
