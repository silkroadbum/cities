import { ICommand } from "./commands/command.interface.js";

type CommandCollection = Record<string, ICommand>;

export class CLIAppication {
  private commands: CommandCollection = {};

  public registerCommand(commandList: ICommand[]): void {
    commandList.forEach((command) => {
      if (Object.hasOwn(this.commands, command.getName())) {
        throw new Error(`Command ${command.getName()} is already registered`);
      }
      this.commands[command.getName()] = command;
    });
  }
}
