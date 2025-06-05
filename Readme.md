# Kuraz Task Manager API

A simple Express.js API to manage a task list (create, list, update, delete, and mark tasks as complete).

## **API Endpoints**

### 1. **List All Tasks**

* **Endpoint:** `GET /api/tasks`
* **Description:** Returns all tasks in the system.

**cURL Example:**

```bash
curl http://localhost:1245/api/tasks
```

---

### 2. **Create a New Task**

* **Endpoint:** `POST /api/tasks`
* **Description:** Creates a new task with a title (required).
* **Request Body:** JSON, e.g. `{ "title": "Buy groceries" }`

**cURL Example (Windows CMD):**

```bash
curl -X POST http://localhost:1245/api/tasks -H "Content-Type: application/json" -d "{\"title\":\"Buy groceries\"}"
```

**cURL Example (Linux, Git Bash, Mac):**

```bash
curl -X POST http://localhost:1245/api/tasks -H "Content-Type: application/json" -d '{"title":"Buy groceries"}'
```

---

### 3. **Mark a Task as Completed**

* **Endpoint:** `PUT /api/tasks/:id`
* **Description:** Marks the task with the specified id as completed.

**cURL Example:**

```bash
curl -X PUT http://localhost:1245/api/tasks/1
```

---

### 4. **Delete a Task**

* **Endpoint:** `DELETE /api/tasks/:id`
* **Description:** Deletes the task with the specified id.

**cURL Example:**

```bash
curl -X DELETE http://localhost:1245/api/tasks/1
```

---

## **Error Handling**

* If you try to update or delete a non-existent task, you’ll get a error with an error message:

  ```json
  { "error": "No Task Found With Given Id 123" }
  ```

---

## **How to Run**

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the server:

   ```bash
   npm start
   ```

   or

   ```bash
   node task_manager.js
   ```

---

## **Example Task JSON**

{
  "id": 1,
  "title": "Buy groceries",
  "completed": false
}
