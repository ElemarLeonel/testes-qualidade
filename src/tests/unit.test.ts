import { TaskManager } from "../TaskManager";

describe("Task Manager - Testes unitários", () => {
    let taskManager: TaskManager;

    beforeEach(() => {
        taskManager = new TaskManager();
    });

    test('should add a task', () => {
        const task = taskManager.addTask("Batata");

        expect(task.name).toBe("Batata");
        expect(task.completed).toBeFalsy;
    });

    test('should complete a task', () => {
        taskManager.addTask("Mamão");

        const task = taskManager.completeTask("Mamão");
        expect(task?.completed).toBeTruthy;
    });

    test('should remove a task', () => {
        taskManager.addTask("Macarrão");
        taskManager.removeTask("Macarrão");
        expect(taskManager.getTasks().length).toBe(0);
    });

    // Listar as tarefas (atividade para casa)
})