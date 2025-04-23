
  const divs1 = gsap.utils.toArray(".small_div");

  divs1.forEach(div => {
    div.addEventListener("mouseenter", () => {
      divs.forEach(d => {
        if (d === div) {
          gsap.to(d, { flexGrow: 2.6, duration: 0.5, ease: "power2.out" });
        } else {
          gsap.to(d, { flexGrow: 1, duration: 0.5, ease: "power2.out" });
        }
      });
    });

    div.addEventListener("mouseleave", () => {
      divs1.forEach(d => {
        gsap.to(d, { flexGrow: 1, duration: 0.5, ease: "power2.out" });
      });
    });
  });

// opacity
const divs = document.querySelectorAll('.small_div');
const body = document.body;
const bgColors = ['#101821', '#9f7c66', '#135270', '#866230', '#1b0507'];

divs.forEach((div, index) => {
    div.addEventListener('mouseenter', () => {
        document.querySelectorAll('.about').forEach(about => {
            gsap.to(about, { opacity: 0, duration: 0.3 });
        });

        // Show the current hovered "about"
        const about = div.querySelector('.about');
        gsap.to(about, { opacity: 1, duration: 0.3 });

        // Change background color of the page
        gsap.to(body, { backgroundColor: bgColors[index % bgColors.length], duration: 0.5 });
    });

    div.addEventListener('mouseleave', () => {
        const about = div.querySelector('.about');
        gsap.to(about, { opacity: 0, duration: 0.3 });

        // Optional: Reset background
        gsap.to(body, { backgroundColor: '#202231', duration: 0.5 });
    });
});