import Image from "next/image";

interface CardProps {
  cardClass?: string;
  cardAlign?: string;
  imgClass?: string;
  contentClass?: string;
  h2Class?: string;
  pClass?: string;
  item: {
    img: string;
    title: string;
    count: string | number;
  };
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <div className={props.cardClass}>
      <div className={props.cardAlign}>
        <Image
          src={props.item.img}
          alt={props.item.title}
          className={props.imgClass}
          width={200} // Set an appropriate width
          height={200} // Set an appropriate height
        />
      </div>
      <div className={props.contentClass}>
        <h2 className={props.h2Class}>{props.item.title}</h2>
        <p className={props.pClass}>{props.item.count}</p>
      </div>
    </div>
  );
};

export default Card;
