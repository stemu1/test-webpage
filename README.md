# My First GitHub Test Page

A tiny webpage (HTML/CSS/JS) with a button and click counter, made to test that VS Code and GitHub are talking to each other properly.

## How to test the VS Code ↔ GitHub connection

1. **Unzip these files** into a new folder, e.g. `test-webpage`.
2. **Open the folder in VS Code**: `File > Open Folder...` and select it.
3. **Preview the page**: right-click `index.html` in the VS Code file explorer and choose `Open with Live Server` (install the free "Live Server" extension first if you don't have it), or just double-click `index.html` to open it in your browser. Click the button and confirm the counter goes up.
4. **Turn it into a git repository**:
   - Open the built-in terminal in VS Code (`Terminal > New Terminal`).
   - Run: `git init`
5. **Create a new empty repository on GitHub** (no README/license, so it stays empty) and copy its HTTPS URL.
6. **Connect and push**:
   ```
   git add .
   git commit -m "First test commit"
   git branch -M main
   git remote add origin <paste-your-repo-url-here>
   git push -u origin main
   ```
   Alternatively, use VS Code's built-in Source Control panel (the icon on the left sidebar that looks like a branch) — it lets you stage, commit, and push with clicks instead of typing commands.
7. **Check GitHub**: refresh your repository page in the browser — you should see `index.html`, `style.css`, and `script.js` there.

If that all works, your VS Code → GitHub link is set up correctly. From here you can edit any file, save, then repeat the commit/push steps (or use the Source Control panel) to push changes.
