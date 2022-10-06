import { insertData } from "../store/storeItem";
import { useDispatch, useSelector } from "react-redux";

export default function NewItem() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  const insertDataItem = function () {
    dispatch(insertData({ id: count + 1 }));
  };

  return (
    <span className=" material-icons btnAdd" onClick={insertDataItem}>
      add_circle_outline
    </span>
  );
}
