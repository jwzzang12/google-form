export default function Option({ isLong }) {
  console.log(isLong);
  return (
    <>
      {!isLong ? (
        <input type="text" placeholder="Short answer text" readOnly />
      ) : (
        <textarea placeholder="Long answer text" className="long" readOnly></textarea>
      )}
    </>
  );
}
