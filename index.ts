import axios from "axios";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get("https://jsonplaceholder.typicode.com/todos/1").then((response) => {
  const data = response.data as Todo;
  logTodo(data.id, data.title, data.completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(
    `Id is ${id}
Title is ${title}
Finished is ${completed}
`
  );
};
