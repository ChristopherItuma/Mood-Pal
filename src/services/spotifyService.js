const CLIENT_ID = "a485142b2d41430a9f4c1d736783ee50";
const CLIENT_SECRET = "159b463d73b54e578bebde001accd442";

const getSpotifyToken = async () => {
  const authString = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${authString}`,
    },
    body: "grant_type=client_credentials",
  });

  const data = await response.json();
  return data.access_token;
};

export const searchPlaylistsByMood = async (mood) => {
  const token = await getSpotifyToken();
  const url = `https://api.spotify.com/v1/search?q=${encodeURIComponent(
    mood
  )}&type=playlist&limit=20`;

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    console.error("Failed to search playlists:", response.statusText);
    return [];
  }

  const data = await response.json();
  return data.playlists ? data.playlists.items : [];
};
