//bgPlacement tells the location of the background text. (top-left, top-right, bot-left, bot-right)
export const Section = ({
  children,
  bgText,
  bgPlacement = 'top-left',
  section,
  bgColor,
  color,
}) => {
  const bgTextElement = bgText ? (
    <span className={`bg-text ${bgPlacement}`}>
      <span className={`letter-${color}`}>{bgText.slice(0, 1)}</span>
      {bgText.slice(1)}
    </span>
  ) : null;

  return (
    <div className={`section ${section} ${bgColor}`}>
      {bgTextElement}

      {children}
    </div>
  );
};
