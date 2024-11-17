import styles from "../../styles/about.module.css";
export const metadata = {
    title: "About us",
  };
  
  export default function AboutUs() {
    return (
      <div className={styles.container}>
        <h1>About us</h1>
        <h3>Welcome to the official explorer for The New York Tiems Best Seller list explorer.</h3>
        <h3>We hope you enjoy your stay!</h3>
      </div>
    );
  }
  
  export const runtime = "edge";