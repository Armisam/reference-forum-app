interface CommentCardProps {
  author: string;
  content: string;
  date: Date;
}

export default function CommentCard({
  author,
  content,
  date,
}: CommentCardProps) {
  return (
    <div className="rounded-xl border border-zinc-200 dark:border-zinc-700 p-4 bg-zinc-50 dark:bg-zinc-900">
      <div className="flex justify-between items-center mb-1">
        <p className="font-semibold text-zinc-800 dark:text-zinc-100">
          {author}
        </p>
        <span className="text-xs text-zinc-500">
          {new Date(date).toLocaleDateString(undefined, {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </span>
      </div>
      <p className="text-sm text-zinc-600 dark:text-zinc-300">{content}</p>
    </div>
  );
}
