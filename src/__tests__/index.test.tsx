import * as React from 'react';
import { shallow, mount } from 'enzyme';
import AutoLaTeX from '..';

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
    const options = {
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

  it('should update component if props change', () => {
    const tex = '$\\frac{a}{b}$';
    const wrapper = mount(<AutoLaTeX>{tex}</AutoLaTeX>);
    const html = wrapper.html();
    wrapper.setProps({ children: tex + '_changed' });
    expect(wrapper.html()).not.toEqual(html);
  });

  it('should not update component if props does not change', () => {
    const tex = '$\\frac{a}{b}$';
    const props = {
      children: tex,
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
    const wrapper = shallow(<AutoLaTeX {...props} />);
    const nextProps = JSON.parse(JSON.stringify(props));
    // @ts-ignore
    expect(wrapper.instance().shouldComponentUpdate(nextProps, {}, undefined)).toEqual(false);
  });
});
