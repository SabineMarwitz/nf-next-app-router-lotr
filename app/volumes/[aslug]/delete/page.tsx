import { deleteVolume } from "@/app/volumes-actions";

  const DeleteVolumePage = async ({ params }) => {
    const { aslug } = await params;
    
    return (
      <div>
        <p> Do you want to delete Volume with slug #{aslug}?</p>
        <form action={deleteVolume.bind(null, aslug)}>
          <button type="submit">Delete</button>
        </form>
      </div>
  );
};

export default DeleteVolumePage;