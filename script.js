

const testimonials = [

    {
        name: "Gaythri S",
        role: "UI/UX Designer",
        initials: "GS",
        rating: 5,
        review:
            "The frontend feels clean, responsive and thoughtfully structured. The attention to small visual details makes the overall experience feel polished."
    },

    {
        name: "Vinoth Kumar",
        role: "Frontend Developer",
        initials: "VK",
        rating: 5,
        review:
            "I really liked how the design was transformed into a functional website. The responsive behaviour works smoothly across desktop, tablet and mobile."
    },

    {
        name: "Rani",
        role: "Product Designer",
        initials: "R",
        rating: 4,
        review:
            "The interface is simple to understand and visually balanced. The interactions add personality while still keeping the user experience clear."
    },

    {
        name: "Pavithra",
        role: "Web Developer",
        initials: "P",
        rating: 5,
        review:
            "The HTML, CSS and JavaScript implementation is well organised. I especially liked the attention given to responsive layouts and interactive elements."
    },

    {
        name: "Tamil Selvi",
        role: "Creative Designer",
        initials: "TS",
        rating: 5,
        review:
            "The final website brings the original design to life beautifully. The responsive layout and subtle animations make the experience feel complete and professional."
    }

];


const review =
    document.getElementById("review");

const name =
    document.getElementById("name");

const role =
    document.getElementById("role");

const avatar =
    document.getElementById("avatar");

const rating =
    document.getElementById("rating");

const currentNumber =
    document.getElementById("currentNumber");

const dotsContainer =
    document.getElementById("dots");

const card =
    document.getElementById("testimonialCard");

const previousButton =
    document.getElementById("prevButton");

const nextButton =
    document.getElementById("nextButton");

let currentIndex = 0;


function createDots() {

    dotsContainer.innerHTML = "";

    testimonials.forEach((testimonial, index) => {

        const dot =
            document.createElement("button");

        dot.classList.add("dot");

        dot.setAttribute(
            "aria-label",
            `Show testimonial ${index + 1}`
        );

        dot.addEventListener(
            "click",
            () => {

                currentIndex = index;

                showTestimonial();

                resetTimer();

            }
        );

        dotsContainer.appendChild(dot);

    });

}

function createStars(number) {

    rating.innerHTML = "";

    for (let i = 1; i <= 5; i++) {

        const star =
            document.createElement("i");

        if (i <= number) {

            star.className =
                "fa-solid fa-star";

        } else {

            star.className =
                "fa-regular fa-star";

        }

        rating.appendChild(star);

    }

}

function updateDots() {

    const dots =
        document.querySelectorAll(".dot");

    dots.forEach((dot, index) => {

        dot.classList.toggle(
            "active",
            index === currentIndex
        );

    });

}

function showTestimonial() {

    const item =
        testimonials[currentIndex];


    card.classList.remove("animate");

    void card.offsetWidth;

    card.classList.add("animate");


    review.textContent =
        `“${item.review}”`;

    name.textContent =
        item.name;

    role.textContent =
        item.role;

    avatar.textContent =
        item.initials;

    createStars(item.rating);

    currentNumber.textContent =
        String(currentIndex + 1).padStart(2, "0");

    updateDots();

}

function nextTestimonial() {

    currentIndex++;

    if (currentIndex >= testimonials.length) {

        currentIndex = 0;

    }

    showTestimonial();

    resetTimer();

}

function previousTestimonial() {

    currentIndex--;

    if (currentIndex < 0) {

        currentIndex =
            testimonials.length - 1;

    }

    showTestimonial();

    resetTimer();

}

nextButton.addEventListener(
    "click",
    nextTestimonial
);


previousButton.addEventListener(
    "click",
    previousTestimonial
);

let autoSlide =
    setInterval(
        nextTestimonial,
        5000
    );

function resetTimer() {

    clearInterval(autoSlide);

    autoSlide =
        setInterval(
            nextTestimonial,
            5000
        );

}

card.addEventListener(
    "mouseenter",
    () => {

        clearInterval(autoSlide);

    }
);


card.addEventListener(
    "mouseleave",
    () => {

        resetTimer();

    }
);

createDots();

showTestimonial();