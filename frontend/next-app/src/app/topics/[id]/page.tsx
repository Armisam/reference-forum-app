"use client";

import CommentCard from "@/components/ui/cards/CommentCard";
import { useFakeDbContext } from "@/context/FakeDbContext";
import React from "react";

interface TopicPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function TopicDetailPage({ params }: TopicPageProps) {
  const actualParams = React.use(params);
  const topicId = parseInt(actualParams.id);

  const { fakeDbTopics } = useFakeDbContext();
  const topic = fakeDbTopics.find((topic) => topic.id === topicId);

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
