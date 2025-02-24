function Card(props) {
  return (
    <>
      <div className={props.cardClass}>
        <div className={props.cardAlign}>
          <img
            src={props.item.img}
            alt={props.item.title}
            className={props.imgClass}
          />
        </div>
        <div className={props.contentClass}>
          <h2 className={props.h2Class}>{props.item.title}</h2>
          <p className={props.pClass}>{props.item.count}</p>
        </div>
      </div>
    </>
  );
}

export default Card;