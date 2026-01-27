const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");
const seekbar = document.getElementById("seekbar");
const current = document.getElementById("current");
const duration = document.getElementById("duration");

// 再生
playBtn.addEventListener("click", () => {
  audio.play();
});

// 一時停止
pauseBtn.addEventListener("click", () => {
  audio.pause();
});

// 読み込み完了時に曲の長さを表示
audio.addEventListener("loadedmetadata", () => {
  duration.textContent = formatTime(audio.duration);
});

// 再生位置更新
audio.addEventListener("timeupdate", () => {
  seekbar.value = (audio.currentTime / audio.duration) * 100;
  current.textContent = formatTime(audio.currentTime);
});

// シークバー操作
seekbar.addEventListener("input", () => {
  audio.currentTime = (seekbar.value / 100) * audio.duration;
});

// 時間表示フォーマット
function formatTime(sec) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}