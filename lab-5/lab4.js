import React, { useState } from "react";
import "./App.css";

function App() {
  const [song, setSong] = useState("");

  const [songs, setSongs] = useState([
    {
      id: 1,
      name: "Perfect",
      artist: "Ed Sheeran",
      liked: false,
      playing: false,
    },
    {
      id: 2,
      name: "Until I Found You",
      artist: "Stephen Sanchez",
      liked: false,
      playing: false,
    },
  ]);

  const [currentSong, setCurrentSong] = useState(null);

  // Add Song
  const addSong = () => {
    if (song.trim() === "") {
      alert("Please enter a song name");
      return;
    }

    const newSong = {
      id: Date.now(),
      name: song,
      artist: "My Playlist",
      liked: false,
      playing: false,
    };

    setSongs([...songs, newSong]);
    setSong("");
  };

  // Play / Pause
  const playSong = (id) => {
    setSongs(
      songs.map((item) =>
        item.id === id
          ? { ...item, playing: !item.playing }
          : { ...item, playing: false }
      )
    );

    const selected = songs.find((item) => item.id === id);
    setCurrentSong(selected);
  };

  // Like Song
  const likeSong = (id) => {
    setSongs(
      songs.map((item) =>
        item.id === id
          ? { ...item, liked: !item.liked }
          : item
      )
    );
  };

  // Delete Song
  const deleteSong = (id) => {
    setSongs(
      songs.filter((item) => item.id !== id)
    );

    if (currentSong && currentSong.id === id) {
      setCurrentSong(null);
    }
  };

  return (
    <div className="app">

      {/* Header */}

      <header className="header">

        <h1>🎵 My Music</h1>

        <p>Build your own playlist</p>

      </header>


      {/* Main */}

      <main className="container">

        {/* Currently Playing */}

        <div className="now-playing">

          <h2>Now Playing</h2>

          {currentSong ? (
            <div>
              <h3>{currentSong.name}</h3>
              <p>{currentSong.artist}</p>
            </div>
          ) : (
            <p>Select a song to start</p>
          )}

        </div>


        {/* Add Song */}

        <div className="add-section">

          <input
            type="text"
            placeholder="Enter song name..."
            value={song}
            onChange={(e) =>
              setSong(e.target.value)
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addSong();
              }
            }}
          />

          <button onClick={addSong}>
            + Add Song
          </button>

        </div>


        {/* Playlist */}

        <div className="playlist-header">

          <h2>My Playlist</h2>

          <span>
            {songs.length} Songs
          </span>

        </div>


        <div className="songs">

          {songs.map((item) => (

            <div
              className={
                item.playing
                  ? "song active"
                  : "song"
              }
              key={item.id}
            >

              <div className="song-info">

                <div className="album">
                  🎵
                </div>

                <div>
                  <h3>{item.name}</h3>
                  <p>{item.artist}</p>
                </div>

              </div>


              <div className="actions">

                <button
                  className="play"
                  onClick={() =>
                    playSong(item.id)
                  }
                >
                  {item.playing ? "⏸" : "▶"}
                </button>

                <button
                  className="like"
                  onClick={() =>
                    likeSong(item.id)
                  }
                >
                  {item.liked ? "❤️" : "♡"}
                </button>

                <button
                  className="delete"
                  onClick={() =>
                    deleteSong(item.id)
                  }
                >
                  🗑
                </button>

              </div>

            </div>

          ))}

        </div>

      </main>


      {/* Footer */}

      <footer>

        <p>
          Interactive Music Playlist
        </p>

        <p>
          Built by chinchu with❤️
        </p>

      </footer>

    </div>
  );
}

export default App;