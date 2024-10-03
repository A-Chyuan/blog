# Behind the Blog

## VS Code 編輯器

| Editor      | Fonts             | Extension                |
| ----------- | ----------------- | ------------------------ |
| [VS Code][] | [Cascadia Code][] | [中文 (繁體) 語言套件][] |
|             | [Noto Sans TC][]  | [Code Spell Checker][]   |
|             |                   | [#region folding][]      |

[VS Code]: https://code.visualstudio.com/docs
[Cascadia Code]: https://github.com/microsoft/cascadia-code
[Noto Sans TC]: https://fonts.google.com/noto/specimen/Noto+Sans+TC
[中文 (繁體) 語言套件]: https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-zh-hant
[Code Spell Checker]: https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker
[#region folding]: https://marketplace.visualstudio.com/items?itemName=maptz.regionfolder

### 設定編輯器字型

```json
// settings.json

{
    // 後三個字型為預設字型
    "editor.fontFamily": "'Cascadia Code', 'Noto Sans TC', Consolas, 'Courier New', monospace",
    // 啟用連字
    "editor.fontLigatures": true,
}
```

## 使用 Markdown 寫筆記

| Syntax       | Extension          |
| ------------ | ------------------ |
| [Markdown][] | [markdownlint][]   |
|              | [Markdown Table][] |

[Markdown]: https://markdown.tw/
[markdownlint]: https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint
[Markdown Table]: https://marketplace.visualstudio.com/items?itemName=TakumiI.markdowntable

其他好用的延伸模組（ 與 blog 無關 ）：

- [Markdown Preview Enhanced][]

[Markdown Preview Enhanced]: https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced

### 筆記加密工具

| Tools          |
| -------------- |
| [Encryption][] |

[Encryption]: /tools/des-encryption/des-encryption

## 使用 Docsify 將筆記轉換成 HTML

| Docs        |
| ----------- |
| [Docsify][] |

[Docsify]: https://docsify.js.org/#/

### Plugins

| Website Feature        | Article Writing                | Visualization                                         |
| ---------------------- | ------------------------------ | ----------------------------------------------------- |
| [Full Text Search][]   | [Docsify LaTeX With Mathjax][] | [Function Plot][]                                     |
| [Zoom Image][]         | [Docsify Pseudocode][]         | [Data Structure Visualizations][]                     |
| [Docsify Pagination][] | [Docsify Tabs][]               | [Graphviz][]、[Viz.js][]                              |
| [Docsify Copy Code][]  |                                | Kroki, Vega-Lite<br />PlantUML<br />Mermaid, WaveDrom |

[Full Text Search]: https://docsify.js.org/#/plugins?id=full-text-search
[Zoom Image]: https://docsify.js.org/#/plugins?id=zoom-image
[Docsify Pagination]: https://github.com/imyelo/docsify-pagination
[Docsify Copy Code]: https://github.com/jperasmus/docsify-copy-code

[Docsify LaTeX With Mathjax]: https://scruel.github.io/docsify-latex/#/?id=with-mathjax
[Docsify Pseudocode]: https://h-hg.github.io/docsify-pseudocode/#/
[Docsify Tabs]: https://jhildenbiddle.github.io/docsify-tabs/#/

[Function Plot]: https://mauriciopoppe.github.io/function-plot/
[Data Structure Visualizations]: https://www.cs.usfca.edu/~galles/visualization/source.html
[Graphviz]: https://graphviz.org/
[Viz.js]: https://viz-js.com/

### 常用 Docsify 指令

```bash
# http://localhost:3000
docsify serve docs
```

## Git

| Docs    | Extension              | Tutorial                   |
| ------- | ---------------------- | -------------------------- |
| [Git][] | [Git Extension Pack][] | [為你自己學 Git][]         |
|         |                        | [30 天精通 Git 版本控管][] |

[Git]: https://git-scm.com/book/zh-tw/v2
[Git Extension Pack]: https://marketplace.visualstudio.com/items?itemName=donjayamanne.git-extension-pack
[為你自己學 Git]: https://gitbook.tw/
[30 天精通 Git 版本控管]: https://github.com/doggy8088/Learn-Git-in-30-days/blob/master/zh-tw/README.md

### 常用 Git 指令

```git
git rebase -i --root

# 小心使用
git push -f
```

### 利用 GitHub Pages 來建立網站

<div class="stepper">

- Repository

- Settings

- Pages

- <div>

    `main` branch

  </div>
- <div>

    `/docs` folder

  </div>

</div>

### 關於 Git Commit Message

|                         Reference                         |
| :-------------------------------------------------------: |
|       [AngularJS Git Commit Message Conventions][]        |
| [Git Commit Message 這樣寫會更好，替專案引入規範與範例][] |
|          [Commitizen — 產生簡潔統一的 commit][]           |

[AngularJS Git Commit Message Conventions]: https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#heading=h.greljkmo14y0
[Git Commit Message 這樣寫會更好，替專案引入規範與範例]: https://wadehuanglearning.blogspot.com/2019/05/commit-commit-commit-why-what-commit.html
[Commitizen — 產生簡潔統一的 commit]: https://medium.com/@Hsu.Yang-Min/commitizen-%E7%94%A2%E7%94%9F%E7%B0%A1%E6%BD%94%E7%B5%B1%E4%B8%80%E7%9A%84-commit-3b49c40ec515

## 前端

### Sass

| Docs                 | Extension              |
| -------------------- | ---------------------- |
| [Sass][]             | [Live Sass Compiler][] |
| [Style Guide][] | [SCSS Formatter][]     |
| [Open Props][]       | [Sass (.sass only)][]  |

[Sass]: https://sass-lang.com/documentation/
[Style Guide]: https://sass-guidelin.es/
[Open Props]: https://open-props.style/

[Live Sass Compiler]: https://marketplace.visualstudio.com/items?itemName=glenn2223.live-sass
[SCSS Formatter]: https://marketplace.visualstudio.com/items?itemName=sibiraj-s.vscode-scss-formatter
[Sass (.sass only)]: https://marketplace.visualstudio.com/items?itemName=Syler.sass-indented

### Tutorial

| Tutorial                  |
| ------------------------- |
| [Learn Web Development][] |
| [W3Schools][]             |

[Learn Web Development]: https://web.dev/learn
[W3Schools]: https://www.w3schools.com/

## 設計資源

| Platform           | Description     |
| ------------------ | --------------- |
| [CodePen][]        | Front End       |
| [Dribbble][]       | Sharing Designs |
| [Unsplash][]       | Free Photos     |
| [ノグチデザイン][] | Color Palettes  |

[CodePen]: https://codepen.io/trending
[Dribbble]: https://dribbble.com/
[Unsplash]: https://unsplash.com/
[ノグチデザイン]: https://x.com/n_seitan
