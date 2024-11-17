import { API_URL } from "../../../constants";
import BookInfo from "../../../../components/book-info";
import styles from "../../../../styles/book-info.module.css";

interface IParams {
  params: { id: string };
}

interface IBookProps {
  title: string;
  author: string;
  book_image: string;
  book_image_width: string;
  book_image_height: string;
  amazon_product_url: string;
}


export async function generateMetadata({ params: { id } }: IParams) {
  return {
    title: id,
  };
}

export async function getBookList(id: string) {
  const response = await fetch(`${API_URL}/list?name=${id}`);
  const json = await response.json();
  return json.results;
}

export default async function BookListPage({ params: { id } }: IParams) {
  
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

export const runtime = "edge";