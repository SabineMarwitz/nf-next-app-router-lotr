"use client";
import { useParams } from "next/navigation";
import React from "react";

const DeleteVolumePage = () => {
  const { aslug } = useParams();

  const handleDelete = async () => {
    await fetch(`/api/volumes/${aslug}`, {
      method: "DELETE",
    });
  };

  return (
    <div>
      <p> Do you want to delete Note with slug #{aslug}?</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DeleteVolumePage;