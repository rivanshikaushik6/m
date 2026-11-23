
function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("floating-heart");

    heart.innerHTML = "♡";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration =
        (Math.random() * 3 + 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
}

setInterval(createHeart, 500);

// Open the surprise section

const surpriseBtn = document.getElementById("surpriseBtn");

const welcomePage = document.querySelector(".welcome-container");

const giftSection = document.getElementById("giftSection");

surpriseBtn.addEventListener("click", function() {

    welcomePage.classList.add("hidden");

    giftSection.classList.remove("hidden");

});

// Open the gift box

const giftBox = document.getElementById("giftBox");

const giftMessage = document.getElementById("giftMessage");

giftBox.addEventListener("click", function() {

    giftBox.innerHTML = "🎉";

    giftMessage.classList.remove("hidden");

    document.querySelector(".gift-hint").classList.add("hidden");

});

// Move to Reasons section

const continueBtn = document.getElementById("continueBtn");

const reasonsSection = document.getElementById("reasonsSection");

continueBtn.addEventListener("click", function() {

    giftSection.classList.add("hidden");

    reasonsSection.classList.remove("hidden");

});

// Display romantic messages

const reasonCards = document.querySelectorAll(".reason-card");

const reasonMessage = document.getElementById("reasonMessage");

reasonCards.forEach(function(card) {

    card.addEventListener("click", function() {

        const message = card.dataset.message;

        reasonMessage.textContent = message;

        reasonMessage.classList.remove("hidden");

    });

});

// Move to Our Little Story

const storyBtn = document.getElementById("storyBtn");

const storySection = document.getElementById("storySection");

storyBtn.addEventListener("click", function() {

    reasonsSection.classList.add("hidden");

    storySection.classList.remove("hidden");

});
// Move to Final Birthday Message
const finalBtn = document.getElementById("finalBtn");
const finalSection = document.getElementById("finalSection");

finalBtn.addEventListener("click", function() {

    storySection.classList.add("hidden");

    finalSection.classList.remove("hidden");

});