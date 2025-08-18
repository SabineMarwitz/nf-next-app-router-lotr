"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditVolume() {
  const { aslug } = useParams();
  const [title, setTitle] = useState("");

  // Code to fetch Note by ID
  const fetchVolume = async (aslug) => {
    const res = await fetch(`/api/volumes/${aslug}`);
    const data = await res.json();
    setTitle(data.title);
  };

  useEffect(() => {
    fetchVolume(aslug);
  }, []);

  const handleEdit = async () => {
    await fetch(`/api/volumes/${aslug}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ aslug, title }),
    });
  };

  return (
    <div>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
}