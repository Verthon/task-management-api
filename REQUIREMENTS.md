!!! Definitely not final

# User Registration and Authentication

  ##  User Registration
        Given a new user wants to register,
        When they provide a unique email and a password,
        Then the system registers the user and encrypts the password for storage.

  ##  User Login
        Given a registered user wants to log in,
        When they provide their email and correct password,
        Then the system authenticates the user and grants access.

# Task Management

  ##  Create Task
        Given a logged-in user wants to add a new task,
        When they provide a task title and optionally a description and deadline,
        Then the system creates the task associated with the user.

  ##  View Tasks
        Given a logged-in user wants to view their tasks,
        When they navigate to their task list,
        Then the system displays all tasks created by the user.

  ##  Update Task
        Given a logged-in user selects a task to edit,
        When they update the title, description, deadline, or status and save,
        Then the system updates the task with the new information.

  ##  Delete Task
        Given a logged-in user selects a task to delete,
        When they confirm deletion,
        Then the system removes the task from their list.

  ##  Mark Task as Completed
        Given a logged-in user selects an incomplete task,
        When they mark the task as completed,
        Then the system updates the task status to completed.

# Task Organization

  ##  Categorize Task
        Given a logged-in user wants to organize tasks into projects,
        When they assign a task to a project,
        Then the system associates the task with the specified project.

  ##  Assign Priority to Task
        Given a logged-in user wants to prioritize a task,
        When they select a priority level (High, Medium, Low) for a task,
        Then the system updates the task with the selected priority.

# Search and Filtering

  ##  Search for Tasks
        Given a logged-in user wants to find a specific task,
        When they enter search criteria (title or description),
        Then the system displays tasks matching the criteria.

  ##  Filter Tasks
        Given a logged-in user wants to filter tasks,
        When they apply filter criteria (status, deadline, priority, or project),
        Then the system displays tasks that match the filter criteria.
