"use client";

import { useState } from "react";
import { TextInput } from "@/components/ui/inputs/TextInput";
import { TextArea } from "@/components/ui/inputs/TextArea";
import { Button } from "@/components/ui/inputs/Button";
import { useFakeDbContext } from "@/context/FakeDbContext";

export default function NewTopicPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { addNewTopic } = useFakeDbContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addNewTopic({ title, description });
  };

  return (
    <>
      <h1 className="text-2xl font-semibold mb-4 text-center">
        Create a New Topic
      </h1>
      <div className="max-w-2xl mx-auto bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-md border border-zinc-200 dark:border-zinc-700">
        <form onSubmit={handleSubmit} className="space-y-4">
          <TextInput
            label="Title"
            value={title}
            onChange={setTitle}
            placeholder="e.g. How do I use Next.js?"
          />

          <TextArea
            label="Description"
            value={description}
            onChange={setDescription}
            placeholder="Explain your topic in more detail..."
          />

          <div className="pt-2">
            <Button type="submit">Create Topic</Button>
          </div>
        </form>
      </div>
    </>
  );
}
