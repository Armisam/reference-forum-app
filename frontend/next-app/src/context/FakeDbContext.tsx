"use client";
import { dummyTopics } from "@/consts/dummy-topics";
import { Topic } from "@/types/topic";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";

type FakeDbContextType = {
  fakeDbTopics: Topic[];
  addNewTopic: (formData: { title: string; description: string }) => void;
};

const FakeDbContext = createContext<FakeDbContextType | undefined>(undefined);

export const FakeDbProvider = ({ children }: { children: ReactNode }) => {
  const [fakeDbTopics, setFakeDbTopics] = useState<Topic[]>(dummyTopics);

  const addNewTopic = useCallback(
    (formData: { title: string; description: string }) => {
      const lastId =
        fakeDbTopics.length > 0 ? fakeDbTopics[fakeDbTopics.length - 1].id : 0;

      const newTopic: Topic = {
        id: lastId + 1,
        title: formData.title,
        description: formData.description,
        comments: [],
      };

      setFakeDbTopics((prevTopics) => [...prevTopics, newTopic]);
    },
    [fakeDbTopics]
  );

  return (
    <FakeDbContext.Provider
      value={{
        fakeDbTopics,
        addNewTopic,
      }}
    >
      {children}
    </FakeDbContext.Provider>
  );
};

export const useFakeDbContext = () => {
  const context = useContext(FakeDbContext);
  if (!context)
    throw new Error("useFakeDbContext must be used within a TopicProvider");
  return context;
};
