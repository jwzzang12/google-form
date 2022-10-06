import { useState } from "react";

export default function Item({ data }) {
  const [isLong, setIsLong] = useState(false);
  // function autoResize(e) {
  //   e.target.style.height = "auto";
  //   e.target.style.height = `${e.target.scrollHeight}px`;
  // }
  // onKeyDown={autoResize}

  return (
    <div className="itemBox">
      <div className="menuTop">
        <input type="text" className="itemTitle" placeholder="제목 없는 질문" />
        <select
          name="format"
          className="format"
          onChange={(e) => {
            setIsLong(!isLong);
          }}
        >
          <option value="short">단답형</option>
          <option value="long">장문형</option>
          <option value="objectQ">객관식 질문</option>
          <option value="checkbox">체크박스</option>
          <option value="dropdown">드롭다운</option>
        </select>
      </div>
      {!isLong ? (
        <input type="text" placeholder="단답형 텍스트" readOnly />
      ) : (
        <textarea name="" placeholder="장문형 텍스트" className="long"></textarea>
      )}
      <div className="answer"></div>
      <div className="menuBottom">
        <span className=" material-icons btnCopy">content_copy</span>
        <span className="material-icons-outlined btnDelete">delete</span>
        <span className=" material-icons btnRequired">필수</span>
      </div>
    </div>
  );
}
