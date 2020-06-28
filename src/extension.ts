// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "helloworld" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('stubgenerator.stubGenerator', () => { 
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Attemping to insert text');

		var pos1 = new vscode.Position(1,1);
		var pos2 = new vscode.Position(10,1);

		var myTextEditor = vscode.window.activeTextEditor;
		
		


		//var myTextEdit = new vscode.TextEdit(new vscode.Range(pos1, pos2), 'inserted text?');
		myTextEditor?.insertSnippet(new vscode.SnippetString("inserted text"), pos1);
		
		


		// current editor
		// const editor = vscode.window.activeTextEditor;

		// // check if there is no selection
		
		// 	if (editor?.selection.isEmpty) {
		// 		// the Position object gives you the line and character where the cursor is
		// 		const position = editor.selection.active;
				
		// 	  }
		
	});

	let generateClass = vscode.commands.registerCommand('stubgenerator.generateClass', () => { 
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
			
			
			

		
	});

	context.subscriptions.push(disposable);
	context.subscriptions.push(generateClass);
}

// this method is called when your extension is deactivated
export function deactivate() {
}
