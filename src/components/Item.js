import { useRef, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteData, modifyData, copyData } from "../store/storeItem";
import Option from "./Option ";

export default function Item({ data }) {
  const [isLong, setIsLong] = useState(false);
  const [isSelected, setIsSelected] = useState("short");
  const [isEdit, setIsEdit] = useState(false);
  const [isRequired, setIsRequired] = useState(false);
  const [localContents, setLocalContents] = useState(data.itemTitle);
  const toggleRequired = function () {
    setIsRequired(!isRequired);
  };
  const onClickValueHandler = (e) => {
    setIsSelected(e.target.value);
    if (e.target.value === "short") {
      setIsLong(false);
    } else if (e.target.value === "long") {
      setIsLong(true);
    }
  };
  // function autoResize(e) {
  //   e.target.style.height = "auto";
  //   e.target.style.height = `${e.target.scrollHeight}px`;
  // }
  // onKeyDown={autoResize}
  const dispatch = useDispatch();
  const itemBox = useRef();

  const clickOutside = (e) => {
    if (isEdit && !itemBox.current.contains(e.target)) setIsEdit(false);
  };
  useEffect(() => {
    window.addEventListener("click", clickOutside);
    dispatch(modifyData(data.id, localContents));
    return () => {
      window.removeEventListener("click", clickOutside);
    };
  }, [isEdit]);
  return (
    <div
      className="itemBox"
      ref={itemBox}
      onClick={() => {
        setIsEdit(true);
      }}
    >
      <div className="menuTop">
        <div className="itemTitleBox">
          {isEdit ? (
            <input
              type="text"
              className="itemTitle"
              placeholder="제목 없는 질문"
              value={localContents}
              onChange={(e) => {
                setLocalContents(e.target.value);
              }}
            ></input>
          ) : (
            data.itemTitle
          )}
        </div>
        {isEdit ? (
          <select name="format" className="format" onChange={onClickValueHandler} value={isSelected}>
            <option value="short">단답형</option>
            <option value="long">장문형</option>
            <option value="objectQ">객관식 질문</option>
            <option value="checkbox">체크박스</option>
            <option value="dropdown">드롭다운</option>
          </select>
        ) : (
          ""
        )}
      </div>
      <Option isLong={isLong} />
      {isEdit ? (
        <div className="menuBottom">
          <span
            className=" material-icons btnCopy"
            onClick={() => {
              dispatch(copyData(data.id + 1, data.itemTitle));
            }}
          >
            content_copy
          </span>
          <span
            className="material-icons-outlined btnDelete"
            onClick={() => {
              dispatch(deleteData(data.id));
            }}
          >
            delete
          </span>
          <span>
            <label className="btnRequired">
              필수
              <input type="checkbox" defaultChecked={isRequired} onClick={toggleRequired} />
            </label>
          </span>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
