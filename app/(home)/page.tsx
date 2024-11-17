import Subject from "../../components/subject";
import styles from "../../styles/home.module.css";
import { API_URL } from "../constants";

export const metadata = {
  title: "Home",
};

async function getSubjects() {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(API_URL+"/lists");
  const json = await response.json();
  return json.results;
}

export default async function HomePage() {
  const lists = await getSubjects();
  return (
    <>
    <div className={styles.maintitle}>The New York Times Best Seller Explorer</div>
    <div className={styles.container}>
      {lists.map((item) => (
        <Subject
          key={item.list_name}
          title={item.list_name}
          id={item.list_name_encoded}
        />
      ))}
    </div>
    </>
  );
}

export const runtime = "edge";