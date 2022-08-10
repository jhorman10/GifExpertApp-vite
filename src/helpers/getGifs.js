export const getGifs = async (category) => {
  const urlBase = 'https://api.giphy.com/v1/gifs/search?';
  const API_KEY = 'z6mjQ6R5XCTz8q817QGm2r7immcVmfIE';
  const url = `${urlBase}api_key=${API_KEY}&q=${category}&limit=10`;
  const response = await fetch(url);
  const { data } = await response.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gifs;
};
