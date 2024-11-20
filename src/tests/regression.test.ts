import { TaskManager } from "../TaskManager";

describe("TaskManager - Teste de regressão", () => {
    let taskManager: TaskManager;

    beforeEach(() => {
        taskManager = new TaskManager();
    });

    it("Não deve quebrar quando adicionarmos uma nova tarefa", () => {
        taskManager.addTask("Nova tarefa");
        taskManager.completeTask("Nova tarefa");

        // Verifica se a funcionalidade de adicionar continua funcionando corretamente
        const newTask = taskManager.addTask("Nova tarefa 2");
        expect(newTask.name).toBe("Nova tarefa 2");
        expect(newTask.completed).toBeFalsy();
    });
});