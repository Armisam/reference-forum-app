import Link from "next/link";

interface TopicCardProps {
  id: number;
  title: string;
  description: string;
}

export default function TopicCard({ id, title, description }: TopicCardProps) {
  return (
    <Link href={`/topics/${id}`} className="block">
      <div className="rounded-2xl border border-zinc-200 dark:border-zinc-700 p-4 shadow-sm hover:shadow-md transition bg-white dark:bg-zinc-800">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-300">
          {description}
        </p>
      </div>
    </Link>
  );
}
