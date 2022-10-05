export default function Item() {
  return (
    <div className="itemBox">
      <input type="text" id="itemTitle" placeholder="제목 없는 질문" />
      <select name="format" id="format">
        <option value="short">단답형</option>
        <option value="long">장문형</option>
        <option value="objectQ">객관식 질문</option>
        <option value="checkbox">체크박스</option>
        <option value="dropdown">드롭다운</option>
      </select>
      <input type="text" placeholder="단답형 텍스트" />
      <hr />
      <div className="menu">
        <span className=" material-icons" id="btnCopy">
          content_copy
        </span>
        <span class="material-icons-outlined" id="btnDelete">
          delete
        </span>
        <span className=" material-icons" id="btnRequired">
          필수
        </span>
        <span className=" material-icons" id="btnAdd">
          add_circle_outline
        </span>
      </div>
    </div>
  );
}
