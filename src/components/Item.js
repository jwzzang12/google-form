export default function Item() {
  return (
    <div className="itemBox">
      <div className="menuTop">
        <input type="text" className="itemTitle" placeholder="제목 없는 질문" />
        <select name="format" className="format">
          <option value="short">단답형</option>
          <option value="long">장문형</option>
          <option value="objectQ">객관식 질문</option>
          <option value="checkbox">체크박스</option>
          <option value="dropdown">드롭다운</option>
        </select>
      </div>
      <input type="text" placeholder="단답형 텍스트" className="example" />
      <div className="menuBottom">
        <span className=" material-icons btnCopy">content_copy</span>
        <span class="material-icons-outlined btnDelete">delete</span>
        <span className=" material-icons btnRequired">필수</span>
        <span className=" material-icons btnAdd">add_circle_outline</span>
      </div>
    </div>
  );
}
