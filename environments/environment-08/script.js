"use strict";

//øvelse 23

const songs = [
  {
    artist: "yehaw",
    title: "something",
    duration: "5:23",
  },
  {
    artist: "yehaw2",
    title: "something2",
    duration: "28",
  },
  {
    artist: "yehaw3",
    title: "something3",
    duration: "40",
  },
];

window.addEventListener("load", start);

function start() {
  console.log("hello");
  showSongs();
}

function showSongs() {
  document.querySelector("#songist").innerHTML = "";
  for (const song of songs) {
    const html = `<li>${song.artist}, ${song.title}, ${song.duration} <button>Upvote</button></li>
    `;
    document.querySelector("#songlist").insertAdjacentHTML("beforeend", html);
    document.querySelector("#songlist li:last-child button").addEventListener("click", upvoteClicked);
    const songId = songs.indexOf(song);
    function upvoteClicked() {
      if (songId !== 0) {
        songs.splice(songId, 1);
        songs.splice(songId - 1, 0, song);
        showSongs();
      }
    }
  }
}
