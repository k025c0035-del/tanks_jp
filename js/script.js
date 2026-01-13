document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".tank-card");

  cards.forEach(card => {
    const videoSrc = card.getAttribute("data-video");
    const img = card.querySelector(".tank-image");
    const video = card.querySelector(".tank-video");

    // 動画ファイルが指定されていないカードはスキップ
    if (!videoSrc || !video) return;

    // 動画のパスをセット
    video.src = videoSrc;

    // ホバー時：画像を隠し、動画を表示して再生
    card.addEventListener("mouseenter", () => {
    //   img.style.display = "none"; <バグ
      video.style.display = "block";
      video.play();
    });

    // ホバー解除時：動画を停止し、画像に戻す
    card.addEventListener("mouseleave", () => {
      video.pause();
      video.currentTime = 0;
      video.style.display = "none";
      img.style.display = "block";
    });
  });
});