import Linkbtn from "../btn/link-ps";
const Lista = (props) => {
  return (
    <ul id="sublista" className="p-0">
      {props.items?.map((item,i) => (
        <li key={`sublist-${i}`} className="list-group-item my-4">
          {item.icon ? <i className="pr-3">{item.icon}</i> : ""}

          {item.url ? (
            <Linkbtn url={item.url} class={item.class}>
              {item.text}
            </Linkbtn>
          ) : (
            item.text
          )}
        </li>
      ))}
    </ul>
  );
};
export default Lista;
