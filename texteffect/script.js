const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const headings = document.querySelectorAll("h1");

headings.forEach(h1 => {
    h1.addEventListener("mouseenter", () => {
        let original = h1.innerText;
        let itr = 0;

        // animation
        let interval = setInterval(() => {

            let str = original.split("").map((char, idx) => {
                if (idx < itr) return char;
                return characters[Math.floor(Math.random() * characters.length)];
            }).join("");

            h1.innerText = str;

            itr += 0.5; // reveal 1 character per frame

            if (itr > original.length) {
                clearInterval(interval);
                h1.innerText = original; // final clean text
            }

        }, 100); // speed
    });
});
