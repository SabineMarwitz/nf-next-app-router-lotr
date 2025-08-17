"use client"

import { useRouter } from "next/navigation";
import { volumes } from "../lib/data";
  
export default function Button() {
  const router = useRouter();

  function handleClick() {
    const volume = volumes[Math.floor(Math.random() * volumes.length)];
    router.push(`/volumes/${volume.slug}`);
  }

  return (
    <button onClick={handleClick}>
      Click me to go to a random volume
    </button>
  );
}