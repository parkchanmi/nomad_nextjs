"use client";

import Link from "next/link";
import styles from "../styles/subject.module.css";
import { useRouter } from "next/navigation";

interface ISubjectProps {
  title: string;
  id: string;
}

export default function Subject({ title, id}: ISubjectProps) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/list/${id}`);
  };
  return (
    <div className={styles.subject} onClick={onClick}>
      <Link prefetch href={`/list/${id}`}>
        {title}&nbsp;&rarr;
      </Link>
    </div>
  );
}