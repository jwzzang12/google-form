import { insertData } from "../store/storeItem";
import { useDispatch, useSelector } from "react-redux";
//useSelector : store의 상태값이 바뀐 경우 상태값을 다시 가져와 컴포넌트 렌더링

export default function NewItem() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  const insertDataItem = function () {
    dispatch(insertData({ id: count + 1, itemTitle: "제목 없는 질문" }));
  };

  return (
    <span className=" material-icons btnAdd" onClick={insertDataItem}>
      add_circle_outline
    </span>
  );
}
