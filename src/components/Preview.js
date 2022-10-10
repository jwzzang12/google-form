export default function Preview() {
  const onClickAlert = () => {
    window.alert("Not available.");
  };
  return (
    <span className="material-icons" id="preview" onClick={onClickAlert}>
      visibility
    </span>
  );
}
