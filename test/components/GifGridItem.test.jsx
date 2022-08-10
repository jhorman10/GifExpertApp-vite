import { render, screen } from '@testing-library/react';
import { GifGridItem } from '../../src/components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {
  const title = 'Saitama';
  const url = 'https://media1.giphy.com/media/l0Hl6qQ7zQQQQQQQ/giphy.gif';

  test('Debe hacer match con el snapshot', () => {
    const { container } = render(<GifGridItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test('Debe mostrar la imagen con el URl y el ALT indicado', () => {
    render(<GifGridItem title={title} url={url} />);
    const { alt, src } = screen.getByRole('img');
    expect(alt).toBe(title);
    expect(src).toBe(url);
  });

  test('Debe mostrar el título en el componente', () => {
    render(<GifGridItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
