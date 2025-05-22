interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
}

export function Button({ children, type = "button", onClick }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-xl transition-colors duration-200 cursor-pointer"
    >
      {children}
    </button>
  );
}
