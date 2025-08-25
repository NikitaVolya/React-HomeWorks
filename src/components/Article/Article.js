import "./Article.css";


export default function Article({
  title,
  author,
  text,
  date,
  fontFamily = "Arial",
  fontColor = "#333",
  fontSize = "16px",
  background = "#f9f9f9",
  image,
  imagePosition = "left",
  titleAlign = "center"
}) {

  return (
    <article
      className="article"
      style={{
        background: background,
        fontFamily: fontFamily,
        color: fontColor,
        fontSize: fontSize,
      }}>
      <h2 className={`article-title align-${titleAlign}`}>{title}</h2>
      <p className="article-author">Автор: {author}</p>
      <p className="article-date">{date}</p>
      <div
        className={`article-content ${
          imagePosition === "right" ? "reverse" : ""
        }`}
      >
        {image && (
          <img src={image} alt={title} className="article-image" />
        )}
        <p className="article-text">{text}</p>
      </div>
    </article>
  );
}
