// import { render, screen } from '@testing-library/react';
import App,{avgNum}from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('should return the avg of nums', () => {

  expect(avgNum(10,20,30,40)).toBe(25)
})
