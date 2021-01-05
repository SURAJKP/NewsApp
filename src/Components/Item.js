import './Item.css';

function Item(props) {
  return (
    <li className="item">
      {props.item.urlToImage &&
        <img className="image"
          alt=""
          src={props.item.urlToImage}
          width="20%"
          height="20%"
        />
      }

      <h2 className="title">
        <a href={props.item.url}>{props.item.title}</a>
      </h2>

      <p className="description">
        {props.item.description}
      </p>

      <div className="publishedAt">
        <span>{props.item.publishedAt}</span>

        <span className="author">
          {props.item.author}
        </span>
      </div>
    </li>
  );
}

export default Item;
