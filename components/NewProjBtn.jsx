import { useState } from "react";
import { Plus } from "lucide-react";
import { createProject } from "@/actions/createProject";
import { redirect } from "next/navigation";

const NewProjBtn = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");
   
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    const result = await createProject(data);
    console.log("Project Data:", result);

    setLoading(false);
    setIsOpen(false);
    redirect(`/projects/${result.projectKey}/instructions`);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex justify-between items-center w-[160px] rounded-xl bg-black text-white hover:bg-black px-5 py-2"
      >
        <Plus className="w-4 h-4 mr-3" />
        <span>New Project</span>
      </button>

      {isOpen && (
        <div className="w-screen fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md w-96 shadow-lg">
            <h2 className="text-lg font-semibold">New Project</h2>
            <p className="text-sm text-gray-600">Create a new project to get started</p>
            <form className="flex flex-col gap-4 mt-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium">Name</label>
                <input id="name" name="name" placeholder="Project Name" className="w-full p-2 border rounded-md" required />
              </div>
              <div>
                <label htmlFor="url" className="block text-sm font-medium">URL</label>
                <input id="url" name="url" placeholder="https://example.com" className="w-full p-2 border rounded-md" required />
              </div>
              <div>
                <label htmlFor="description" className="block text-sm font-medium">Description</label>
                <textarea id="description" name="description" placeholder="Description (optional)" className="w-full p-2 border rounded-md"></textarea>
              </div>
              <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Submit</button>
            </form>
            <button
              onClick={() => setIsOpen(false)}
              className="mt-4 text-sm text-gray-600 hover:underline block text-center"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default NewProjBtn;
