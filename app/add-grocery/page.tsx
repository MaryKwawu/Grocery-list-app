"use client";
import { useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";
import { ImageUpload } from "./components/ImageUpload";

function AddGrocery() {
    const [newTaskValue, setNewTaskvalue] = useState<string>("");
    const [newGrocery, setNewGrocery] = useState<string>("");
    const [newDescription, setNewDescription] = useState<string>("");
    const [newImage, setNewImage] = useState<string>("");
    const navigation = useRouter();

    const handleSubmitnewGrocery: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        await fetch("/grocery", {
            method: "POST",
            body: JSON.stringify({
                text: newTaskValue,
            }),
            cache: "no-cache",
        });
        setNewTaskvalue("");

        navigation.push("/");
    };

    return (
        <div className="w-1/3 mx-auto pt-10">
            <h3 className="font-bold text-lg text-center mb-10">Add new grocery</h3>
            <form onSubmit={handleSubmitnewGrocery} className="space-y-5">
                <div className="flex items-start gap-5">
                    <ImageUpload value={newImage} onImageChange={setNewImage} />
                    <div className="space-y-5">
                        <input
                            value={newTaskValue}
                            onChange={(e) => setNewTaskvalue(e.target.value)}
                            type="text"
                            placeholder="Name"
                            className="input input-bordered  w-full"
                        />

                        <textarea
                            name="description"
                            id=""
                            className="input input-bordered w-full"
                            placeholder="description "
                        ></textarea>
                        <button className="btn btn-primary">submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AddGrocery;
