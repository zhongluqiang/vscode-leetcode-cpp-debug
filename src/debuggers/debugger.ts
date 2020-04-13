import * as vscode from "vscode"
import { StubFileHelper } from "../util/stubFileHelper"

export abstract class Debugger {
    public constructor(protected codeTemplate: string, protected stubFileHelper: StubFileHelper) { };
    // return [file path] to start debugging, [undefined] to give up debugging
    public abstract async init(solutionEditor: vscode.TextEditor): Promise<string | undefined>;
    // dispose after debugging
    public abstract async dispose(solutionEditor: vscode.TextEditor): Promise<void>;
}
