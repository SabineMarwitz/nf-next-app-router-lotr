"use client";
import { redirect } from "next/navigation";
import React, { useState } from "react";

const AddVolume = () => {
    const [title, setTitle] = useState("");
    const handleAdd = async () => {
    await fetch("/api/volumes", {
        method: "POST",
        header: { "Content-Type": "application/json" },
        body: JSON.stringify({ title }),
    });
    redirect('/volumes');
  };

    return (
        <div>
            <p>Add a new Volume</p>
            <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            />
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}

export default AddVolume;