import Link from "next/link";
import React from "react";
import { getVolumes } from "../volumes-actions";


const Volumes = async () => {
  // Should fetch data from my API
  const data = await getVolumes();
  return (
    <div>
      <ul>
        {data?.map((item) => (
          <li key={item.title}>
            {item.title}
            <Link href={`/volumes/${item.slug}/edit`} style={{ color: "red" }}>
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
      <Link href="/volumes/add" style={{ color: "green" }}>
        Add Volume
      </Link>
    </div>
  );
};

export default Volumes;