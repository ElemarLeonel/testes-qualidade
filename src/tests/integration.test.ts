import { TaskManager } from "../TaskManager";

// Descreve o conjunto ou suíte de testes
describe('Task Manager - Testes de Integração', () => {
    let taskManager: TaskManager;

    beforeEach(() => {
        taskManager = new TaskManager();
    });

    // Descreve o teste em si
    test("Deve adicionar e remover uma tarefa", () => {
        taskManager.addTask("Aprendendo Typescript");
        taskManager.removeTask("Aprendendo Typescript");
        // Validar se não tem tarefa dentro do taskManager

        // expect é o que a gente utilizar para buscar um resultado
        // toBe (ou qualquer matcher) é o que a gente valida a nossa "expectativa".
        expect(taskManager.getTasks().length).toBe(0);
    });

    it("Deve adicionar e completar a tarefa", () => {
        taskManager.addTask("Comer abacaxi");
        taskManager.completeTask("Comer abacaxi");

        const tasks = taskManager.getTasks();
        // Verificam se a tarefa adicionada está finalizada
        expect(tasks[0].completed).toBeTruthy;
    });   
});