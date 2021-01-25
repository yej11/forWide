const links = document.querySelectorAll('.container a');


//a태그 안에 걸려있는 이미지 주소들을 img에 받음 
for(const link of links) {
	const img = new Image();
	img.src = link.dataset.bg;
}