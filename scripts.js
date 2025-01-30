
document.addEventListener("DOMContentLoaded", function() {
    // Initialize Vanta Waves background
    if (window.VANTA) {
        window.VANTA.WAVES({
            el: ".container", // Apply Vanta Waves to the entire container
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x0 // Black color for waves
        });
    }
    

    // Custom smooth scroll function
    function smoothScrollTo(target, duration) {
        const targetElement = document.querySelector(target);
        const targetPosition = targetElement.getBoundingClientRect().top;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = 1000;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        // Easing function for smooth scroll
        function easeInOutQuad(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    }

    // Smooth scroll to the "About Us" section on arrow click
    const arrow = document.querySelector(".arrow");
    arrow.addEventListener("click", function () {
        smoothScrollTo("#about", 1000); // Adjust duration (in milliseconds) for scroll speed
    });

    // Detect when the "About Us" section is in view
    const aboutSection = document.getElementById("about");
    const aboutTitle = document.getElementById("about-title");
    const aboutParagraph = document.getElementById("about-paragraph");
    const visionTitle = document.getElementById("vision-title");
    const visionParagraph = document.getElementById("vision-paragraph");
    const missionTitle = document.getElementById("mission-title");
    const missionPoint1 = document.getElementById("mission-point-1");
    const missionPoint2 = document.getElementById("mission-point-2");
    const missionPoint3 = document.getElementById("mission-point-3");

    const aboutObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Trigger typing animation for the "About Us" title
                aboutTitle.style.animation = "typing 2.5s steps(8, end) forwards, blink 0.75s step-end infinite";
                aboutTitle.style.width = "8ch"; // "About Us" has 8 characters

                // Add an event listener to stop the blinking cursor after the typing animation ends
                aboutTitle.addEventListener("animationend", () => {
                    aboutTitle.style.animation = "stop-blink 0.1s forwards";
                });

                // Trigger fade-in animation for the paragraph
                setTimeout(() => {
                    aboutParagraph.style.opacity = "1";
                }, 2500); // Delay fade-in to match typing duration

                // Trigger typing animation for the "Vision" title
                setTimeout(() => {
                    visionTitle.style.animation = "typing 2s steps(6, end) forwards, blink 0.75s step-end infinite";
                    visionTitle.style.width = "6ch"; // "Vision" has 6 characters

                    // Add an event listener to stop the blinking cursor after the typing animation ends
                    visionTitle.addEventListener("animationend", () => {
                        visionTitle.style.animation = "stop-blink 0.1s forwards";
                    });

                    // Trigger fade-in animation for the vision paragraph
                    setTimeout(() => {
                        visionParagraph.style.opacity = "1";
                    }, 2000); // Delay fade-in to match typing duration
                }, 3000); // Delay the "Vision" section animations

                // Trigger typing animation for the "Mission" title
                setTimeout(() => {
                    missionTitle.style.animation = "typing 2s steps(7, end) forwards, blink 0.75s step-end infinite";
                    missionTitle.style.width = "7ch"; // "Mission" has 7 characters

                    // Add an event listener to stop the blinking cursor after the typing animation ends
                    missionTitle.addEventListener("animationend", () => {
                        missionTitle.style.animation = "stop-blink 0.1s forwards";
                    });

                    // Trigger fade-in animation for the mission points
                    setTimeout(() => {
                        missionPoint1.style.opacity = "1";
                        missionPoint2.style.opacity = "1";
                        missionPoint3.style.opacity = "1";
                    }, 2000); // Delay fade-in to match typing duration
                }, 6000); // Delay the "Mission" section animations
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the section is visible

    aboutObserver.observe(aboutSection);
});
