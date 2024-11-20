export interface Task{
    name: string;
    completed: boolean;
}

export class TaskManager{
    private tasks: Task[] = [];

    addTask(name: string): Task {
        const task: Task = { name, completed: false };
        this.tasks.push(task);
        return task;
    }

    removeTask(name: string): void{
        this.tasks = this.tasks.filter((task) => {
            task.name !== name;
        });
    }

    getTasks(): Task[]{
        return this.tasks;
    }

    completeTask(name: string): Task | undefined{
        const task = this.tasks.find((task) => task.name === name);

        if(task){
            task.completed = true;
        }

        return task;
    }
}