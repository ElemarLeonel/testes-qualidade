export function sum(a: number, b: number) {
    return a + b;
}

export function subtract(a: number, b: number){
    return a - b;
}

export function multiplication(a: number, b: number){
    return a * b;
}

export function division(a: number, b: number){
    return a / b;
}

export function restDivision(a: number, b: number){
    return a % b
}

export function operation(a: number, operation: string, b: number){
    if(operation === "+"){
        return a + b;
    }

    if(operation === "-"){
        return a - b;
    }

    if(operation === "*"){
        return a * b;
    }

    if(operation === "/"){
        return a / b;
    }

    if(operation === "%"){
        return a % b;
    }

    return null;
}