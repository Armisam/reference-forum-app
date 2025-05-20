import TopicCard from "@/components/TopicCard";
import { topics } from "@/consts/dummy-topics";

export default function HomePage() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Topics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic) => (
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
