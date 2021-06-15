// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "gecs" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	context.subscriptions.push(
		vscode.commands.registerCommand('gecs.helloWorld', () => {
			// The code you place here will be executed every time your command is executed
			const panel = vscode.window.createWebviewPanel(
				'toolbox',
				'Toolbox',
				vscode.ViewColumn.Two,
				{}
			);
			// Display a message box to the user
			vscode.window.showInformationMessage('Hello World from GECS! Let\'s do this!! :)');
		})
	);
}

// this method is called when your extension is deactivated
export function deactivate() {}
