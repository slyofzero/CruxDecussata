/* eslint-disable react/prop-types */
const Section = ({ className, id, customPaddings, children }) => {
  return (
    <div
      id={id}
      className={`
      relative 
      ${customPaddings || "py-20 lg:py-24 xl:py-28"} 
      ${className || ""}`}
    >
      {children}
    </div>
  );
};

export default Section;
