import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  const classes =
    "w-full px-3 py-2 rounded-md border border-stone-300 bg-stone-100 text-stone-700 focus:outline-none focus:border-stone-500 focus:bg-white";
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-semibold text-stone-600">{label}</label>
      {textarea ? (
        <textarea ref={ref} className={classes} {...props} />
      ) : (
        <input ref={ref} className={classes} {...props} />
      )}
    </p>
  );
});

export default Input;
