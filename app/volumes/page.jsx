import Link from "next/link";
import React from "react";

const Volumes = async () => {
  const res = await fetch("http://localhost:3000/api/volumes");
  const data = await res.json();
  // Should fetch data from my API
  return (
    <div>
      <ul>
        {data?.map((item) => (
          <li key={item.title}>
            {item.title}
            <Link href={`/volumes/${item.slug}/edit`} style={{ color: "blue" }}>
              {" "}
              Edit
            </Link>
            <Link href={`/volumes/${item.slug}/delete`} style={{ color: "blue" }}>
              {" "}
              Delete
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/volumes/add" style={{ color: "blue" }}>
        Add Volume
      </Link>
    </div>
  );
};

export default Volumes;