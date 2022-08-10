import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Pruebas en useFetchGifs.test', () => {
  const category = 'One Punch';
  test('debe regresar el estado inicial', () => {
    const { result } = renderHook(() => useFetchGifs(category));
    const { images, isLoading } = result.current;

    expect(images).toEqual([]);
    expect(images.length).toEqual(0);
    expect(isLoading).toBeTruthy();
  });

  test('debe retornar un arreglo de imagenes e isloading en false', async () => {
    const { result } = renderHook(() => useFetchGifs(category));

    await waitFor(() => {
      expect(result.current.isLoading).toBeFalsy();
      expect(result.current.images.length).toBeGreaterThan(0);
    });

    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
