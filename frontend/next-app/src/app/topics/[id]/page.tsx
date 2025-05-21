import CommentCard from "@/components/CommentCard";
import { topics } from "@/consts/dummy-topics";

interface TopicPageProps {
  params: {
    id: string; // Important: from URL, it's a string
  };
}

export default function TopicDetailPage({ params }: TopicPageProps) {
  const topicId = parseInt(params.id);
  const topic = topics.find((topic) => topic.id === topicId);

  if (!topic) {
    return <p>Topic not found.</p>;
  }

  return (
    <section>
      <h2 className="text-2xl font-bold mb-2">{topic.title}</h2>
      <p className="text-zinc-600 dark:text-zinc-300 mb-6">
        {topic.description}
      </p>

      <h3 className="text-xl font-semibold mb-4">Comments</h3>
      <div className="space-y-4">
        {topic.comments.length > 0 ? (
          topic.comments.map((comment) => (
            <CommentCard
              key={comment.id}
              author={comment.author}
              content={comment.content}
              date={comment.date}
            />
          ))
        ) : (
          <p>No comments yet.</p>
        )}
      </div>
    </section>
  );
}
