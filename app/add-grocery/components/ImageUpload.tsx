"use client";

import { useRef } from "react";

interface ImageUploadProps {
    value?: string;
    onImageChange: (image: string) => void;
}

export function ImageUpload({ value, onImageChange }: ImageUploadProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    const placeholderUrl =
        "https://ui-avatars.com/api/?name=Image+Upload&background=random&bold=true";

    function onImageClick() {
        inputRef.current?.click();
    }

    function onFileChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (!file) {
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            onImageChange(e.target?.result as string);
        };
        reader.readAsDataURL(file);
    }

    return (
        <div className="w-64 flex">
            <img
                alt="image-upload"
                className="w-32 h-32 rounded-full object-contain cursor-pointer border border-blue-300"
                src={value || placeholderUrl}
                onClick={onImageClick}
            />
            <input
                ref={inputRef}
                className="hidden"
                type="file"
                accept="image/*"
                onChange={onFileChange}
            />
        </div>
    );
}
