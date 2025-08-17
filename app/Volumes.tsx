import Link from "next/link";
import { volumes } from "../lib/data";

export default function Volumes() {
  return (
    <ul>
      {volumes.map(({ slug, title }) => (
        <li key={slug}>
          <Link href={`/volumes/${slug}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
}
