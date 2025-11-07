export interface QAItem {
  id: number;
  question: string;
  answer: string;
}

const data: QAItem[] = [
  {
    id: 1,
    question: "What is React?",
    answer: "A JavaScript library for building user interfaces.",
  },
  {
    id: 2,
    question: "What is a hook in React?",
    answer: "A function that lets you use state and lifecycle features in components.",
  },
  {
    id: 3,
    question: "What is TypeScript?",
    answer: "A superset of JavaScript that adds static typing.",
  },
  {
    id: 4,
    question: "What is JSX?",
    answer: "A syntax extension that lets you write HTML inside JavaScript.",
  },
  {
    id: 5,
    question: "What is a component?",
    answer: "A reusable piece of UI in a React application.",
  },
];

export default data;
