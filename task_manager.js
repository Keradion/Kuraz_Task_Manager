import express from 'express';

const PORT = 1245; // App runs on this port
const app = express(); // Create an express app Instance
app.use(express.json());
let taskStore = []; // An array that stores all the available tasks


const getAllAvailableTasks = () => {
  /* @getAvailableTasks: function that returns all available tasks
   * @params: the function does not take any arguments 
   * @return allTasks from taskStore array or a custom message If no tasks are available
   */
  let allTasks = taskStore;

  if (taskStore.length == 0){
    allTasks = 'No Tasks Are Currently Available. Enjoy!';
  }
  return allTasks;
}

const createNewTask = (taskTitle) => {
  /* @createNewTask: - create a new task and store it in an array called taskStore 
   * @params: taskTtitle - title of the task
   * @return: task created
   */
  if (typeof(taskTitle) != "string") {
    return { error: 'Task Title Must be String'};
  }
  const taskId = taskStore.length + 1;
  const newTask = {id: taskId, title: taskTitle, completed: false}; 
  taskStore.push(newTask);
  return newTask;
}

const markTaskCompleted = (taskId) => {
  /* @markTaskCompleted: change task status to completed If the task with given id exists only
   * @params: taskId - Id of the task to be completed
   * @return: returns the task or custome message if no task with given id 
   */
 const task = taskStore.find(task => task.id == taskId);
 if (task){
  task.completed = true;
  return {"message": "Task updated as complete"}
 }
 else {
    return {error: `No Task Found With Given Id ${taskId}`};
 }
}

const deleteTaskById = (taskId) => {
  /* @deleteTaskById - delete a task given Id */
  let task = {};
  taskStore.map((task) => {
    if (task.id == taskId) {
        taskStore = taskStore.filter((task) => task.id != taskId);
    }
  })

  task = {message: `Task deleted successfully With Given Id ${taskId}`};
  return task
}

/* Returns all the available tasks in an array taskStore */
app.get('/api/tasks', (request, response) => {
  const tasks = getAllAvailableTasks();
  response.send(tasks) 
});

/* Add a new Task */
app.post('/api/tasks', (request, response) => {
  const taskTitle = request.body.title;
  const task = createNewTask(taskTitle);
  response.send(task);
});

/* Mark a task as completed given Task Id*/
app.put('/api/tasks/:id', (request, response) => {
  const taskId = (request.params.id);
  const result = markTaskCompleted(taskId);
  response.status = 200;
  response.send(result);
});

/* Delete a Task given Task Id */
app.delete('/api/tasks/:id', (request, response) => {
  const taskId = parseInt(request.params.id);
  const result = deleteTaskById(taskId);
  response.send(result)
});

app.listen(PORT, () => {
  console.log(`Kuraz Task Manager APP listening on Port ${PORT}`);
})