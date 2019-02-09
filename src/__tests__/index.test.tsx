import * as React from 'react';
import { shallow, mount } from 'enzyme';
import AutoLaTeX, { RenderMathInElementOptions } from '..';

describe('AutoLaTeX', () => {
  it('should render expressions with "$$" delimiter', () => {
    const tex = '$$\\frac{a}{b}$$';
    const wrapper = mount(<AutoLaTeX>{tex}</AutoLaTeX>);
    expect(wrapper.render()).toMatchSnapshot();
  });

  it('should render expressions with "\\[ \\]" delimiter', () => {
    const tex = '\\[\\frac{a}{b}\\]';
    const wrapper = mount(<AutoLaTeX>{tex}</AutoLaTeX>);
    expect(wrapper.render()).toMatchSnapshot();
  });

  it('should render expressions with "$" delimiter', () => {
    const tex = '$\\frac{a}{b}$';
    const wrapper = mount(<AutoLaTeX>{tex}</AutoLaTeX>);
    expect(wrapper.render()).toMatchSnapshot();
  });

  it('should render expressions with "\\( \\)" delimiter', () => {
    const tex = '\\(\\frac{a}{b}\\)';
    const wrapper = mount(<AutoLaTeX>{tex}</AutoLaTeX>);
    expect(wrapper.render()).toMatchSnapshot();
  });

  it('should render expressions with multi-delimiters', () => {
    const tex = 'multi delimiters: $$\\frac{a}{b}$$ \\[\\frac{a}{b}\\]  $\\frac{a}{b}$ \\(\\frac{a}{b}\\)';
    const wrapper = mount(<AutoLaTeX>{tex}</AutoLaTeX>);
    expect(wrapper.render()).toMatchSnapshot();
  });

  it('should render expressions with HTML rich text', () => {
    const tex = `<div>
        <p>exp1: $$\\frac{a}{b}$$</p>
        <div>
          <h3>exp2: \\[\\frac{a}{b}\\]</h3>
          <p>
            <span>exp3: </span>
            <span>$\\frac{a}{b}$</span>
          </p>
        </div>
      </div>`;
    const wrapper = mount(<AutoLaTeX>{tex}</AutoLaTeX>);
    expect(wrapper.render()).toMatchSnapshot();
  });

  it('should render expressions with option "delimiters"', () => {
    const tex = 'multi delimiters: $$\\frac{a}{b}$$ \\[\\frac{a}{b}\\]  $\\frac{a}{b}$ \\(\\frac{a}{b}\\)';
    const options: RenderMathInElementOptions = {
      delimiters: [
        { left: "$$", right: "$$", display: false },
        { left: "$", right: "$", display: false },
      ],
    };
    const wrapper = mount(<AutoLaTeX options={options}>{tex}</AutoLaTeX>);
    expect(wrapper.render()).toMatchSnapshot();
  });

  it('should render expressions with className', () => {
    const tex = '$\\frac{a}{b}$';
    const wrapper = shallow(<AutoLaTeX className="test-class">{tex}</AutoLaTeX>);
    expect(wrapper.hasClass('test-class')).toEqual(true);
  });

  it('should render expressions with style', () => {
    const tex = '$\\frac{a}{b}$';
    const wrapper = shallow(<AutoLaTeX style={{ backgroundColor: 'red' }}>{tex}</AutoLaTeX>);
    expect(wrapper.prop('style').backgroundColor).toBe('red');
  });
});
