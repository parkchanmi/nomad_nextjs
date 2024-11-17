import styles from "../styles/book-info.module.css";


interface IBookProps {
  title: string;
  author: string;
  book_image: string;
  book_image_width: string;
  book_image_height: string;
  amazon_product_url: string;
}

export default async function BookInfo({ title, author, book_image, book_image_width, book_image_height, amazon_product_url}: IBookProps) {
  return (
    <div className={styles.book}>
      <img
        src={book_image}
        className={styles.poster}
        alt={title}
      />
      <div className={styles.info}>
        <h1 className={styles.title}>{title}</h1>
        <p>{author}</p>
        <a className={styles.buy} href={amazon_product_url} target={"_blank"}>
          Buy
        </a>
      </div>
    </div>
  );
}