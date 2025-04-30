 for (let i = 0; i < 20; i++) {
                let bubble = document.createElement("div");
                bubble.className = "bubble";
                bubble.style.left = Math.random() * 100 + "vw";
                bubble.style.animationDuration = Math.random() * 3 + 2 + "s";
                document.querySelector(".bubbles").appendChild(bubble);
            }
