"use client";
import { useFormStatus } from "react-dom";

const SaveButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="bg-pink-500 text-white py-1.5 px-4 rounded-lg hover:bg-pink-600 transition duration-300"
      disabled={pending}
    >
      {pending ? "Saving..." : "Save"}
    </button>
  );
};

export default SaveButton;