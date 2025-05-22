interface TextInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function TextInput({
  label,
  value,
  onChange,
  placeholder,
}: TextInputProps) {
  return (
    <div>
      <label className="block mb-1 text-sm font-medium text-zinc-700 dark:text-zinc-300">
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-600 rounded-xl bg-zinc-100 dark:bg-zinc-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder={placeholder}
      />
    </div>
  );
}
