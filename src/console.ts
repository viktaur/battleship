export function handleCommand(command: string): string {
    if (command === "hello") {
        return "User said hello";
    } else if (command === "goodbye") {
        return "Client told me goodbye";
    } else {
        return "Something else";
    }
}