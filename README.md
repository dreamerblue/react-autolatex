# react-autolatex

![](https://img.shields.io/npm/v/react-autolatex.svg?style=flat) ![](https://img.shields.io/npm/dm/react-autolatex.svg?style=flat) ![](https://img.shields.io/travis/com/dreamerblue/react-autolatex.svg?style=flat) ![](https://img.shields.io/codecov/c/github/dreamerblue/react-autolatex.svg?style=flat) ![](https://img.shields.io/npm/types/react-autolatex.svg?style=flat) ![](https://img.shields.io/npm/l/react-autolatex.svg?style=flat)

Auto-render LaTeX in React.

Based on KaTeX. TypeScript declaration supported.

## Installation

```
npm install react-autolatex
```

## Usage

Normal:

```javascript
import 'katex/dist/katex.min.css';
import AutoLaTeX from 'react-autolatex';

export default () => {
  return (
    <AutoLaTeX>{'LaTeX string or HTML rich text with LaTeX like $c = \\pm\\sqrt{a^2 + b^2}$'}</AutoLaTeX>    
  );
};
```

With TypeScript:

```typescript
import 'katex/dist/katex.min.css';
import AutoLaTeX, { RenderMathInElementOptions } from 'react-autolatex';

export default () => {
  const options: RenderMathInElementOptions = {
    delimiters: [
      { left: '$$', right: '$$', display: true },
      { left: '$', right: '$', display: false },
    ],
    errorCallback(msg: string, err: Error) {
      console.error('[Error]', msg, err);
    },
  };
  return (
    <AutoLaTeX options={options}>{'LaTeX string or HTML rich text with LaTeX like $c = \\pm\\sqrt{a^2 + b^2}$'}</AutoLaTeX>    
  );
};
```

**Note**: You may need to handle XSS before passing string to AutoLaTeX.

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| children | string, required | '' | The string content to render |
| options | RenderMathInElementOptions | **see below* | Render options ([doc](https://katex.org/docs/autorender.html)) |
| className | string | '' | Class name for the container to render LaTeX |
| style | React.CSSProperties | {} | Style for the container to render LaTeX |

options default:
```javascript
{
  delimiters: [
    { left: "$$", right: "$$", display: true },
    { left: "\\[", right: "\\]", display: true },
    { left: "$", right: "$", display: false },
    { left: "\\(", right: "\\)", display: false },
  ],
}
```

## License

MIT
