import { insertData } from "../store/storeItem";
import { useDispatch } from "react-redux";
//useSelector : store의 상태값이 바뀐 경우 상태값을 다시 가져와 컴포넌트 렌더링

export default function NewItem() {
  const dispatch = useDispatch();

  const insertDataItem = function () {
    dispatch(insertData({ id: Math.random().toString(), itemTitle: "Untitled Question" }));
  };

  return (
    <span className=" material-icons btnAdd" onClick={insertDataItem}>
      add_circle_outline
    </span>
  );
}
