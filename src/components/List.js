import Item from "./Item";

export default function List({ data }) {
  return (
    <ul id="list">
      {data.map((item, idx) => {
        return <Item data={item} key={item.id} />;
      })}
    </ul>
  );
}
