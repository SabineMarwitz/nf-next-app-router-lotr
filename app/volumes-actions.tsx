"use server";

import slugify from "slugify";
import { volumes } from "./lib/data";
import { redirect } from "next/navigation";

export async function createVolume(formData) {
  const title = formData.get("title");
  const slug = slugify(title);
  volumes.push({ slug, title });
  // redirect after creating
  redirect("/volumes");
}

export async function getVolume(aslug: string) {
  console.log(
    aslug,
    volumes.find((volume) => volume.slug === aslug)
  );
  return volumes.find((volume) => volume.slug === aslug);
}

export async function getVolumes() {
  return volumes;
}

export async function deleteVolume(aslug: string) {
  const index = volumes.findIndex((n) => n.slug === aslug);
  if (index > -1) volumes.splice(index, 1);
  // redirect after deleting
  redirect("/volumes");
}

export async function updateVolume(aslug: string, formData) {
  const title = formData.get("title");
  const volume = volumes.find((n) => n.slug === aslug);
  if (volume) volume.title = title;
  // redirect after updating
  redirect("/volumes");
}