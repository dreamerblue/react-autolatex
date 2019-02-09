import * as React from 'react';
import renderMathInElement from 'katex/dist/contrib/auto-render';
import { RenderMathInElementOptions } from './KatexAutoRenderTypings';
import isEqual from 'lodash.isequal';

export * from './KatexAutoRenderTypings';

export interface AutoLaTeXProps {
  children: string;
  options?: RenderMathInElementOptions;
  className?: string;
  style?: React.CSSProperties;
}

class AutoLaTeX extends React.Component<AutoLaTeXProps> {
  static defaultProps: AutoLaTeXProps = {
    children: '',
    options: {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "\\[", right: "\\]", display: true },
        { left: "$", right: "$", display: false },
        { left: "\\(", right: "\\)", display: false },
      ],
    },
    className: '',
    style: {},
  };

  constructor(props: AutoLaTeXProps) {
    super(props);
  }

  container: HTMLElement | null = null;

  renderLaTeX = () => {
    if (!this.container) {
      return;
    }
    renderMathInElement(
      this.container,
      this.props.options,
    );
  };

  componentDidMount(): void {
    this.renderLaTeX();
  }

  shouldComponentUpdate(nextProps: Readonly<AutoLaTeXProps>, nextState: Readonly<{}>, nextContext: any): boolean {
    return !isEqual(this.props, nextProps);
  }

  componentDidUpdate(prevProps: Readonly<AutoLaTeXProps>, prevState: Readonly<{}>, snapshot?: any): void {
    this.renderLaTeX();
  }

  render() {
    const { className, style } = this.props;
    return (
      <div className={className}
           style={style}
           ref={container => this.container = container}
           dangerouslySetInnerHTML={{ __html: this.props.children }}
      />
    );
  }
}

export default AutoLaTeX;
