import { getVolume, updateVolume } from "@/app/volumes-actions";

export default async function EditVolume({params}) {
  const { aslug } = await params;
  const volume = await getVolume( aslug );

  return (
    <div>
      <form action={updateVolume.bind(null, volume.slug)}>
        <input name="title" defaultValue={volume.title} />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
