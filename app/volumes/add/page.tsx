"use client";
import React, { useState } from "react";

const AddVolume = () => {
    const [title, setTitle] = useState("");
    const handleAdd = async () => {
    await fetch("/api/volumes", {
        method: "POST",
        header: { "Content-Type": "application/json" },
        body: JSON.stringify({ title }),
    });
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