const btnScroll = document.querySelector(".top-page");
console.log(btnScroll);
if (btnScroll) {
    btnScroll.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    })
}

//récupération des barres
const allProgressBar = document.querySelectorAll(".progress-bar");
console.log(allProgressBar);

//function : qu'est ce que je fais quand les barres sont visibles
function handleIntersection(progressesBar, viewscreen) {
    progressesBar.forEach(function(progressBar) {
        if (progressBar.isIntersecting) {
            var bar = progressBar.target;
            var targetWidth = bar.getAttribute("data-width");

            bar.style.width = targetWidth;
            viewscreen.unobserve(bar);
        }
    });
}

//A partir de quand je veux que mon "observer" s'active
var viewscreen = new IntersectionObserver(handleIntersection, {
    threshold: 0.3
});

//surveille chaque barre
allProgressBar.forEach(function(bar) {
    viewscreen.observe(bar);
});