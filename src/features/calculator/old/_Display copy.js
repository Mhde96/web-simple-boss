const Display = ({ input, currentNumber, operator }) => {
  return (
    <div className="display">
      <div className="sum" dangerouslySetInnerHTML={{ __html: input }} />
      <div className="total">
        {operator && currentNumber === "0" ? operator : currentNumber}
      </div>
    </div>
  );
};

export default Display;
