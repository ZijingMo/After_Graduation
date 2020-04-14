// Billboard Top5(2010s)
// Zijing Mo
// April 2020

// Load HTML element
const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');

// Keyboard handler
let keyboardHandle = true;

// Songs' name
const songs = ['Closer', 'Girls Like You', 'Party Rock Anthem', 'Shape of You', 'Uptown Funk'];

// Keep track of song
let songIndex = 0;

// Change songs
const loadSong = (song) => {
  title.innerText = song;
  audio.src = `songs/${song}.mp3`;
  cover.src = `images/${song}.jpg`;
}

// Initially load song 
loadSong(songs[songIndex]);

// Play song
const playSong = () => {
  musicContainer.classList.add('play');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');

  audio.play();
}

// Pause song
const pauseSong = () => {
  musicContainer.classList.remove('play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');
  playBtn.querySelector('i.fas').classList.add('fa-play');

  audio.pause();
}

// Previous song
const prevSong = () => {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);

  playSong();
}

// Next song
const nextSong = () => {
  songIndex++;
  const songNum = songs.length - 1;

  if (songIndex > songNum) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);

  playSong();
}

// Update progress bar
const updateProgress = (e) => {
  const { duration, currentTime } = e.srcElement; // Destruct the object 'srcElement' to get the total time and time interval
  const progressChange = (currentTime / duration) * 100
  //console.log(progressChange);
  progress.style.width = `${progressChange}%`;
}

// Set progress bar
const setProgress = (e) => {
  const width = progressContainer.clientWidth;
  const clickAt = e.offsetX;
  const songDuration = audio.duration;

  audio.currentTime = (clickAt / width) * songDuration;
}



// Event listeners 
// Play the songs with mouse
playBtn.addEventListener('click', () => {
  let isPlaying = musicContainer.classList.contains('play');
  if(isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});



// Play the songs with keyboard
window.addEventListener('keydown', (e) => {

  switch (e.keyCode){
    case 32:
      if (keyboardHandle) {
        pauseSong();
        keyboardHandle = false;
      } else {
        playSong();
        keyboardHandle = true;
      }
      break;
    case 39:
      nextSong();
      break;
    case 37:
      prevSong();
      break;
  }
  return false;
}, false); 

// Change songs
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

// Songs updates
audio.addEventListener('timeupdate', updateProgress);

// Click on progress
progressContainer.addEventListener('click', setProgress);

// Song ends
audio.addEventListener('ended', nextSong);
