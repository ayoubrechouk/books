
export default function lmakla(props) {
    const itemlist = props.items;
    const categorie = props.categorie;

  const listElements = itemlist.map(item => 
    <li key={item.id}>{item.name}: &nbsp; 
    <b>{item.categorie}</b></li>
  );
  return (
    <div>
      <h3 className="list-Cat">{props.categorie}</h3>
      <ul className="List-list">
        {listElements}
      </ul>
    </div>
  );
}
