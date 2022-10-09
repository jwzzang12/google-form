export default function Option({ isLong }) {
  console.log(isLong);
  return (
    <>
      {!isLong ? (
        <input type="text" placeholder="단답형 텍스트" readOnly />
      ) : (
        <textarea placeholder="장문형 텍스트" className="long" readOnly></textarea>
      )}
    </>
  );
}
