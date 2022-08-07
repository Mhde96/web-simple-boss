const Display = ({ input, currentNumber, operator }) => {
  return (
    <div className="display">
      <div className="sum" dangerouslySetInnerHTML={{ __html: input }} />
      <div className="total">{currentNumber}</div>
    </div>
  );
};

export default Display;
