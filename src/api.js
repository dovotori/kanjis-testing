export default async ({ kanji, grade }) => {
  const baseUrl = "https://kanjialive-api.p.rapidapi.com/api/public";
  let url = null;
  if (grade) {
    url = new URL(`${baseUrl}/search/advanced/`);
    url.searchParams.append("grade", grade);
  } else {
    url = new URL(`${baseUrl}/kanji/${kanji}`);
  }

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-rapidapi-key": "d8de0e5858mshd2e5849dad22bf1p103352jsn666cc034f1d0",
      "x-rapidapi-host": "kanjialive-api.p.rapidapi.com",
      useQueryString: true
    }
  });

  return response.json();
};
