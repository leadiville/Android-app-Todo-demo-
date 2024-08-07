import uuid from "react-native-uuid";
const random = uuid.v4();

export type TodoArray = Array<{
  id: number[] | string;
  title: string;
  reminderDate: string;
  alert: string;
  completed: boolean;
  important: boolean;
}>;

export const allTodo: TodoArray = [
  {
    id: "1",
    title: "clean room",
    reminderDate: "Fri Aug 02 2024",
    alert: "TODAY",
    completed: false,
    important: false,
  },
  {
    id: "2",
    title: "from community",
    reminderDate: "Sun Aug 04 2024",
    alert: "TODAY",
    completed: false,
    important: false,
  },
  {
    id: "11",
    title: "meditate",
    reminderDate: "Wed July 31 2024",
    alert: "SOON",
    completed: false,
    important: false,
  },
  {
    id: "12",
    title: "dance practice",
    reminderDate: "",
    alert: "PAST",
    completed: false,
    important: false,
  },
  {
    id: "4",
    title: "plant a tree",
    reminderDate: "Thur Aug 01 2024",
    alert: "SOON",
    completed: false,
    important: false,
  },
  {
    id: "6",
    title: "cut my hair",
    reminderDate: "",
    alert: "",
    completed: false,
    important: false,
  },
  {
    id: "7",
    title: "buy a dog",
    reminderDate: "",
    alert: "PAST",
    completed: false,
    important: false,
  },
  {
    id: "3",
    title: "health",
    reminderDate: "",
    alert: "SOON",
    completed: false,
    important: false,
  },
  {
    id: "5",
    title: "buy a house",
    alert: "",
    reminderDate: "",
    completed: false,
    important: false,
  },
];

//time of the day category
export const timeOfTheDay = [
  {
    title: "Morning",
  },

  {
    title: "Afternoon",
  },
  {
    title: "Night",
  },
];

// {
//   id: '8',
//   title: "take my bath everyday",
// },
// {
//   id: '9',
//   title: "grow my backyard",
// },
// {
//   id: '10',
//   title: "take a walk",
// },
