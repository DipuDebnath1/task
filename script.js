let scrollContainer = document.querySelector('.hero-service')
scrollContainer.addEventListener("wheel",(evt)=>{
    evt.preventDefault()
    scrollContainer.scrollLeft += evt.deltaY
})

//****carousel slide start here *** */ 
    let carouselItem = document.querySelectorAll(".carousel-item"),
	arrowLeft = document.querySelector("#arrow-left"),
	arrowRight = document.querySelector("#arrow-right")
    current = 0;

// Clear all images
function reset() {
	for (let i = 0; i < carouselItem.length; i++) {
		carouselItem[i].style.display = "none";
	}
}

function startSlide() {
	reset();
	carouselItem[0].style.display = "flex";
}

// Show previous
function slideLeft() {
	reset();
	carouselItem[current - 1].style.display = "flex";
	current--;
}

// Show next
function slideRight() {
	reset();
	carouselItem[current + 1].style.display = "flex";
	current++;
}

// Left arrow click
arrowLeft.addEventListener("click", function () {
	if (current === 0) {
		current = carouselItem.length;
	}
	slideLeft();
});

// Right arrow click
arrowRight.addEventListener("click", function () {
	if (current === carouselItem.length - 1) {
		current = -1;
	}
	slideRight();
});

startSlide();

