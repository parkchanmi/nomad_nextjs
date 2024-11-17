import styles from "../styles/book-info.module.css";
import BookInfo from "./book-info";
import { API_URL } from "../app/constants";


export async function getBookList (id:string){
    const response = await fetch(`${API_URL}/list?name=${id}`);
    const json = await response.json();
    return json.results;
  };

export default async function BookList({ id }: { id: string }) {
  const booklist = await getBookList(id);
  return (
    <>
    <div className={styles.maintitle}>{booklist.list_name}</div>
    <div className={styles.container}>
      {booklist?.books.map((book) => (
          <BookInfo key={book.title} title={book.title} author={book.author}
          book_image={book.book_image} book_image_height={book.book_image_height}
            book_image_width={book.book_image_width} amazon_product_url={book.amazon_product_url}/>
      ))}
    </div>
    </>
  );
}