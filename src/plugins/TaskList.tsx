import {
  Plugin,
  PluginHost,
  Template,
  TemplatePlaceholder,
} from "@devexpress/dx-react-core";
import React, { useState } from "react";

const ENTER_KEY = 13;

export const Tasks = () => {
  const [tasks, setTasks] = useState([
    { title: "call mom", done: false },
    { title: "send letters to partners", done: false },
    { title: "buy milk", done: true },
    { title: "rent a car", done: false },
  ]);

  const completeTask: (index: number) => void = (index) => {
    const newTasks = tasks.slice();
    newTasks[index] = { ...newTasks[index], done: true };
    setTasks(newTasks);
  };

  const createTask = (title: string) => {
    setTasks([...tasks, { title, done: false }]);
  };

  return (
    <TaskList tasks={tasks}>
      <NewTaskForm onCreate={createTask} />
      <TaskCompletion onComplete={completeTask} />
    </TaskList>
  );
};

const TaskList: React.FC<{ tasks: any[] }> = ({ children, ...restProps }) => (
  <PluginHost>
    <TaskListCore {...restProps} />
    {children}
  </PluginHost>
);

const TaskListCore: React.FC<{ tasks: any[] }> = ({ tasks }) => (
  <Plugin>
    <Template name="root">
      <TemplatePlaceholder name="header" />
      <ul>
        {tasks.map((task, index) => (
          <TemplatePlaceholder
            key={index}
            name="task"
            params={{ index, ...task }}
          />
        ))}
      </ul>
    </Template>
    <Template name="task">
      {({ title, done }: { title: string; done: boolean }) => (
        <li style={{ textDecoration: done ? "line-through" : "" }}>{title}</li>
      )}
    </Template>
  </Plugin>
);

const NewTaskForm = React.memo<{ onCreate: (v: any) => void }>(
  ({ onCreate }) => (
    <Plugin>
      <Template name="header">
        <input
          onKeyUp={(e: any) => {
            const { value } = e.target;
            if (e.keyCode === ENTER_KEY && value) {
              e.target.value = "";
              onCreate(value);
            }
          }}
        />
      </Template>
    </Plugin>
  )
);

const TaskCompletion = React.memo<{ onComplete: (number: number) => void }>(
  ({ onComplete }) => (
    <Plugin>
      <Template name="task">
        {({
          index,
          title,
          done,
        }: {
          index: number;
          title: string;
          done: boolean;
        }) =>
          done ? (
            <TemplatePlaceholder />
          ) : (
            <li>
              {title}{" "}
              <button type="button" onClick={() => onComplete(index)}>
                Complete
              </button>
            </li>
          )
        }
      </Template>
    </Plugin>
  )
);
