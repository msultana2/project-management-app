import noProjectImg from "../assets/no-projects.png";
import Button from "./Button.jsx";

export default function NoProjectSelected() {
  return (
    <div className="mt-2 text-center w-2/3">
      <img
        src={noProjectImg}
        alt="An empty task list"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-2xl font-bold text-stone-600 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-500 mb-4">
        Select a project or get started with a new one
      </p>
      <p className="mt-8">
        <Button>Create new project</Button>
      </p>
    </div>
  );
}
