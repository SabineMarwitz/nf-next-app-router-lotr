import { createVolume } from "@/app/volumes-actions";
import { redirect } from "next/navigation";

const AddVolume = () => {
    return (
        <div>
            <p>Add a new Volume</p>
            <form action={createVolume}>
                <input name="title" placeholder="New title" />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default AddVolume;