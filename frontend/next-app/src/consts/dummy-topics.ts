import { Topic } from "@/types/topic";

export const dummyTopics: Topic[] = [
    {
        id: 0,
        title: "General Discussion",
        description: "Talk about anything and everything here.",
        comments: [
            {
                id: 1,
                author: "Alice",
                content: "Great topic!",
                date: new Date("2025-05-01T10:00:00"),
            },
            {
                id: 2,
                author: "Bob",
                content: "I learned a lot.",
                date: new Date("2025-05-02T12:30:00"),
            },
            {
                id: 3,
                author: "Charlie",
                content: "Interesting perspective.",
                date: new Date("2025-05-03T15:15:00"),
            },
        ],
    },
    {
        id: 1,
        title: "Tech Talk",
        description: "Discuss the latest in tech, software, and hardware.",
        comments: [
            {
                id: 1,
                author: "Alice",
                content: "Great topic!",
                date: new Date("2025-05-04T09:00:00"),
            },
            {
                id: 2,
                author: "Bob",
                content: "I learned a lot.",
                date: new Date("2025-05-05T13:45:00"),
            },
            {
                id: 3,
                author: "Charlie",
                content: "Interesting perspective.",
                date: new Date("2025-05-06T17:30:00"),
            },
        ],
    },
    {
        id: 2,
        title: "Help & Support",
        description: "Get help from the community or offer your support.",
        comments: [
            {
                id: 1,
                author: "Alice",
                content: "Great topic!",
                date: new Date("2025-05-07T08:20:00"),
            },
            {
                id: 2,
                author: "Bob",
                content: "I learned a lot.",
                date: new Date("2025-05-08T14:10:00"),
            },
            {
                id: 3,
                author: "Charlie",
                content: "Interesting perspective.",
                date: new Date("2025-05-09T19:40:00"),
            },
        ],
    },
];
