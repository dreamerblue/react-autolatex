# react-autolatex

![](https://img.shields.io/npm/v/react-autolatex.svg?style=flat) ![](https://img.shields.io/npm/dm/react-autolatex.svg?style=flat) ![](https://img.shields.io/npm/types/react-autolatex.svg?style=flat) ![](https://img.shields.io/npm/l/react-autolatex.svg?style=flat)

Auto-render LaTeX in React.

Based on KaTeX. TypeScript declaration supported.

## Installation

```
npm install react-autolatex
```

## Usage

```
import 'katex/dist/katex.min.css';
import AutoLaTeX from 'react-autolatex';

<AutoLaTeX>{'LaTeX string or HTML rich text with LaTeX like $c = \\pm\\sqrt{a^2 + b^2}$'}</AutoLaTeX>
```

**Note**: You may need to handle XSS before passing string to AutoLaTeX.

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| children | string, required | '' | The string content to render |
| className | string | '' | Class name for the container to render LaTeX |
| style | React.CSSProperties | {} | Style for the container to render LaTeX |

## License

MIT
