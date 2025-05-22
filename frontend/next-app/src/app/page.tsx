"use client";
import TopicCard from "@/components/ui/cards/TopicCard";
import { useFakeDbContext } from "@/context/FakeDbContext";

export default function HomePage() {
  const { fakeDbTopics } = useFakeDbContext();

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Topics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {fakeDbTopics.map((topic) => (
          <TopicCard
            key={topic.id}
            id={topic.id}
            title={topic.title}
            description={topic.description}
          />
        ))}
      </div>
    </section>
  );
}
