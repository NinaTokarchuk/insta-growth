let current = 0;
let countOfCards = 2;

function slide_(current) {
    document.querySelector('.testimonials-carousel .first-card img').src = cards_[current].img;
    document.querySelector('.testimonials-carousel .first-card h5').innerText = cards_[current].heading;
    document.querySelector('.testimonials-carousel .first-card span').innerText = cards_[current].span;
    document.querySelector('.testimonials-carousel .first-card p').innerText = cards_[current].paragraph;
}

function forward_() {
    current = ++current > countOfCards - 1 ? 0 : current;
    slide_(current);
}
function backward_() {
    current = --current < 0 ? countOfCards - 1 : current;
    slide_(current);
}

const cards_ = [
    {
        img: 'img/alice-morris.png',
        heading: 'Alice Morris',
        span: "Fitness Coach",
        paragraph: "I started working with InstaGrow approximately two months ago. Since then my audience has raised 2 times! Only specific people have been targeted exactly how it should be. No fakes, no strange profiles. Only high-quality leads."
    },
    {
        img: 'img/tom-bricks.png',
        heading: 'Tom Bricks',
        span: "Business Owner",
        paragraph: "I have long wanted to start promoting my Instagram account but I hardly have time for this. On Instagram, it is important to make posts and stories every day. Therefore, I have decided to try InstaGrow services and am already pleased with the results."
    },
]

document.querySelector('.testimonials-carousel .arrow-right').addEventListener('click', forward_);
document.querySelector('.testimonials-carousel .arrow-left').addEventListener('click', backward_);