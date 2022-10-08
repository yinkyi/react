import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './hooks/use-http';
function App() {
  console.log("apprending");
   const [tasks, setTasks] = useState([]);
   const transformTask = (taskobj)=>{
      const loadedTasks = [];

      for (const taskKey in taskobj) {
        loadedTasks.push({ id: taskKey, text: taskobj[taskKey].text });
      }

      setTasks(loadedTasks);
   }
   const {isLoading,error,sendRequest:fetchTasks} =  useHttp();

  

  useEffect(() => {
    fetchTasks({url:'https://react-http-a9465-default-rtdb.firebaseio.com/tasks.json'},transformTask);
  }, []);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
