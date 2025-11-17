const songs = [
  { title: "Bohemian Rhapsody", artist: "Queen" },
  { title: "Smells Like Teen Spirit", artist: "Nirvana" },
  { title: "Imagine", artist: "John Lennon" },
  { title: "Hotel California", artist: "Eagles" },
  { title: "Billie Jean", artist: "Michael Jackson" },
  { title: "Hey Jude", artist: "The Beatles" },
  { title: "Wonderwall", artist: "Oasis" },
  { title: "Shape of You", artist: "Ed Sheeran" },
  { title: "Lose Yourself", artist: "Eminem" },
  { title: "Rolling in the Deep", artist: "Adele" },
  { title: "Stairway to Heaven", artist: "Led Zeppelin" },
  { title: "Blinding Lights", artist: "The Weeknd" },
  { title: "Africa", artist: "Toto" },
  { title: "Hallelujah", artist: "Leonard Cohen" },
  { title: "Sweet Child O' Mine", artist: "Guns N' Roses" },
];

document.addEventListener("DOMContentLoaded", () => {
  const showTableBtn = document.getElementById("showTableBtn");
  const songsTable = document.getElementById("songsTable");
  const songsBody = document.getElementById("songsBody");

  showTableBtn.addEventListener("click", () => {
    songsTable.style.display = songsTable.style.display === "none" ? "table" : "none";

    if (songsTable.style.display === "table") {
      songsBody.innerHTML = "";
      songs.forEach(song => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${song.title}</td><td>${song.artist}</td>`;
        songsBody.appendChild(row);
      });
    }
  });
});
