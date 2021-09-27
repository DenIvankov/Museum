const left = document.getElementById("vlevo"),
    right = document.getElementById("vpravo"),
    rounds = document.querySelectorAll(".round"),
    videos1 = document.querySelectorAll(".video1"),
    videos2 = document.querySelectorAll(".video2"),
    videos3 = document.querySelectorAll(".video3");
let ind = 0;
const activeVideo = n => {
    console.log(n);
    for (round of rounds) {
        round.classList.remove('active2');
    }
    rounds[n].classList.add('active2');
    for (video of videos1) {
        video.classList.remove('active3');
    }
    videos1[n].classList.add('active3');
    for (video of videos2) {
        video.classList.remove('active3');
    }
    videos2[n].classList.add('active3');
    for (video of videos3) {
        video.classList.remove('active3');
    }
    videos3[n].classList.add('active3');

}
const nextslide2 = () => {
    if (ind == rounds.length - 1) {
        ind = 0;
        activeVideo(ind)
    } else {
        ind++;
        activeVideo(ind)
    }
}
const prewslide2 = () => {
    if (ind == 0) {
        ind = rounds.length - 1;
        activeVideo(ind)
    } else {
        ind--;
        activeVideo(ind)
    }
}
rounds.forEach((item, indexround) => {
    item.addEventListener('click', () => {
        ind = indexround;
        activeVideo(ind);
    })
})

right.addEventListener('click', nextslide2);
left.addEventListener('click', prewslide2);
console.log(rounds.length)