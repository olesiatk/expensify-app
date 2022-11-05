import React from 'react'
import ReactShallowRenderer from 'react-test-renderer/shallow'
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage'

test('should render Header correctly', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<ExpenseDashboardPage/>);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
})