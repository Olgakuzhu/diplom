const  arrowLeft = document.getElementById("arrows_left"),
				arrowLine = document.getElementById("arrow_middle"),
				arrowRight = document.getElementById('arrows_right'),
				arrow_text_left = document.getElementById("arrow_text_left"),
				arrow_text_right = document.getElementById("arrow_text_right"),
				switchText = document.getElementById("switch_text"),
				input = document.getElementById("switch"),
				block1 = document.getElementById("block_1");


arrowLeft.addEventListener("mouseover", () => {
				if (arrowLine.classList.contains("activeRight") || arrow_text_right.style.opacity == "1") {
								arrowLine.classList.remove('activeRight');
								arrow_text_right.style.opacity = "0"
				}
								arrowLine.classList.add("activeLeft");
								arrow_text_left.style.opacity = "1";
});

arrowRight.addEventListener("mouseover", () => {
				if (arrowLine.classList.contains("activeLeft") || arrow_text_left.style.opacity == "1") {
								arrowLine.classList.remove("activeLeft")
								arrow_text_left.style.opacity = "0"
				}
								arrowLine.classList.add("activeRight");
								arrow_text_right.style.opacity = "1";
});