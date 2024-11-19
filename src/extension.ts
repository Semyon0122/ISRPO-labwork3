import * as vscode from 'vscode';
const open = require('opn');


export function activate(context: vscode.ExtensionContext) {
    const disposable = vscode.commands.registerCommand('extension.searchInBrowser', () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('Нет открытого редактора!');
            return;
        }

        const selection = editor.selection;
        const selectedText = editor.document.getText(selection);

        if (!selectedText) {
            vscode.window.showErrorMessage('Текст не выделен!');
            return;
        }

        const searchQuery = encodeURIComponent(selectedText);
        const searchUrl = `https://www.google.com/search?q=${searchQuery}`;

        open(searchUrl);
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}