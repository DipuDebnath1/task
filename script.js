let scrollContainer = document.querySelector('.hero-service')
scrollContainer.addEventListener("wheel",(evt)=>{
    evt.preventDefault()
    scrollContainer.scrollLeft += evt.deltaY
	console.log(evt);

})

let clientReview = document.querySelector('.client-review')
clientReview.addEventListener("wheel",(evt)=>{
    evt.preventDefault()
    clientReview.scrollLeft += evt.deltaY
})

//****carousel slide start here *** */ 
    let carouselItem = document.querySelectorAll(".carousel-item"),
	arrowLeft = document.querySelector("#arrow-left"),
	arrowRight = document.querySelector("#arrow-right"),
	slidersID = document.querySelectorAll('.handleSliderID'),
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

// slider bottom handle buttons 
const slideLeftbtn =()=>{
	if (current === 0) {
		current = carouselItem.length;
	}
	slideLeft();
}
const slideRightbtn =()=>{
	if (current === carouselItem.length - 1) {
		current = -1;
	}
	slideRight();
}


function resetSliderBtn () {
	for (let i = 0; i < slidersID.length; i++) {
		slidersID[i].classList.remove(".slider-buttons-active")
		console.log(i);
	}
}
const handleSliderID = (id) =>{
	reset();
	// resetSliderBtn ();
	carouselItem[id].style.display = "flex";
	current=id;
	for (let i = 0; i < slidersID.length; i++) {	
		slidersID[id].classList.add("slider-buttons-active")
		if (i !==id) {
			console.log(i);
			slidersID[id].classList.remove("slider-buttons-active")
		}		
	}
	// for (let i = 0; i < slidersID.length; i++) {	
	// 	if (i !==id) {
	// 		slidersID[id].classList.remove("slider-buttons-active")
	// 	}		
	// }
}

startSlide();

