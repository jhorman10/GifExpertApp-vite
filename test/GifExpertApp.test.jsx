import { render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';
describe('Pruebas en <GifExpertApp />', () => {
  test('Debe renderizar los Gifs haciendo match con el snapshot', () => {
    //TODO
    const { container } = render(<GifExpertApp />);
    expect(container).toMatchSnapshot();
    screen.debug();
  });
});
