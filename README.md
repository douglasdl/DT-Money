<p align="center">
    <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-ide">IDE</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licence">Licence</a>
</p>

<p align="center">
 <img src="https://img.shields.io/static/v1?label=PRs&message=welcome&color=49AA26&labelColor=000000" alt="PRs welcome!" />

  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000">
</p>

<br>
<p align="center">
    <a href="https://ignite-lab-2-kohl.vercel.app/">
        <img alt="dt money" src="https://douglasdl.github.io/images/dtMoney.png" width="100%">
    </a>
</p>

## 🚀 Technologies

This project was developped using the following technologies:
<p alight="center">
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img height="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript"></a>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img height="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="HTML5"></a>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img height="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="CSS3"></a>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="https://reactjs.org/"><img height="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React"></a>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="https://www.typescriptlang.org/"><img height="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="TypeScript"></a>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</p>

📚 Libraries
- [Google Fonts](https://fonts.google.com/)

🛠 Utilities

Deploy
- [Vercel](https://vercel.com)

## 📐 Project

This project...
Check the project online [here](https://dt-money-douglasdl.vercel.app/).
Components: Header, TransactionsTable and Summary.

## 🔖 Layout

The basic layout project can be accessed in [this link]() in your [Figma](https://figma.com) account.

## 💻 IDE
This project was done using [Visual Studio Code](https://code.visualstudio.com/) IDE.

### 🧩 VS Code Extensions

- [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer)
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode#:~:text=Prettier%20is%20an%20opinionated%20code,account%2C%20wrapping%20code%20when%20necessary.)
- [PostCSS Language Support](https://marketplace.visualstudio.com/items?itemName=csstools.postcss)

### ⚙ VS Code Configuration

-   CRTL + SHIFT + P
    -   settings.json

```javascript
{
    /* Define o tema do VS Code */
    "workbench.colorTheme": "Dracula",
    /*"workbench.colorTheme": "Omini", */
    "workbench.iconTheme": "material-icon-theme",

    /* Configura tamanho e família da fonte */
    "editor.fontSize": 18,
    "editor.lineHeight": 24,
    "editor.fontFamily": "Fira Code, Menlo, Monaco, 'Courier New', monospace",
    "editor.fontLigatures": true,
    "editor.wordWrap": "on",
    "workbench.editor.tabSizing": "shrink",
    "explorer.compactFolders": false,

    /* Aplica linhas verticais para lembrar quabra de linha em códigos muito grandes */
    "editor.rulers": [80, 120],
    "editor.formatOnSave": false,
    "editor.minimap.enabled": false,

    "window.zoomLevel": -1,
    "explorer.confirmDelete": false,
    "terminal.integrated.shell.osx": "/bin/zsh",
    "tabnine.experimentalAutoImports": true,
    "python.languageServer": "Pylance",
    "explorer.confirmDragAndDrop": false,
    "editor.accessibilitySupport": "off",

    /* Formatter */
    "prettier.tabWidth": 4,
    "prettier.semi": false,
    "prettier.singleQuote": true,
    "prettier.trailingComma": "none",
    "prettier.arrowParens": "avoid",
    "prettier.endOfLine": "auto",
    "editor.tabSize": 4,
    "editor.formatOnSave": true,

    "liveServer.settings.donotShowInfoMsg": true,
    "liveServer.settings.doNotVerifyTags": true,

    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },

    "[html]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },

    "workbench.editorAssociations": {
        "*.ipynb": "jupyter.notebook.ipynb"
    },
    "[typescriptreact]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[typescript]": {
        "editor.defaultFormatter": "vscode.typescript-language-features"
    }

    /*"eslint.packageManager": "yarn", */
    /*"eslint.autoFixOnSave": true, */
}
```

# DT-Money
DT Money


- [Create React App](https://reactjs.org/docs/create-a-new-react-app.html)

```sh
yarn create react-app dtmoney --template typescript
```

- [Figma Layout](https://www.figma.com/file/ZPX1qSueZ1cR1jWt4RhEFj/dtmoney-Ignite)


- [Styled Components](https://styled-components.com/)

```sh
yarn add styled-components
```

```sh
yarn add @types/styled-components -D
```

- [Google Fonts](https://fonts.google.com/specimen/Poppins)

## Backend APIs (for testing)

- [JSON Server](https://github.com/typicode/json-server)
- [Mirage JS](https://miragejs.com/)
```sh
yarn add miragejs
```
- [MSW](https://mswjs.io/) Mock Service Worker.


## HTTP Client

[Axios](https://axios-http.com/docs/intro)

```sh
yarn add axios
```

## React Modal library

- [React Modal](https://github.com/reactjs/react-modal)

```sh
yarn add react-modal
```

```sh
yarn add @types/react-modal -D
```

## Border color

[Polished](https://polished.js.org/)

```sh
yarn add polished
```


## 📝 Licence

This project is under the MIT license. See the file [LICENSE](LICENSE.md) for more details.

---

Done with ♥ by [Douglas Dias Leal](mailto:douglasdiasleal87@gmail.com)
