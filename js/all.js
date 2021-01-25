let slides = document.querySelector('.slides'),
		slide = document.querySelectorAll('.slides li'),
		currentIdx = 0,
		slideCount = slide.length,
		slideWidth = 500,
		prevBtn = document.querySelector('.prev'),
		nextBtn = document.querySelector('.next');


		console.log(slideCount);
//ul의 넓이를 동적으로 바꾸기 위해서.
//ul의 넓이를 알아야 사진들이 컨테이너 밖으로 넘어가지 않고 한줄로 이어짐
slides.style.width = slideWidth * slideCount + 'px';


//ul 움직이는거
let moveSlide = (num) => {
	slides.style.left = -num * slideWidth + 'px';
	currentIdx = num; //사용자가 보고싶어하는 인덱스로 변경해줌
};

//열자마자 next버튼 누르면 currentIdx에 1을 더한걸 moveSlide에 넘겨줌

nextBtn.addEventListener('click', () => {
	if(currentIdx < slideCount - 1){
		moveSlide(currentIdx + 1);
	} else { //끝이라면
		moveSlide(0); //처음으로 가라
	}
});

prevBtn.addEventListener('click', () => {
	if(currentIdx > 0 ){
		moveSlide(currentIdx - 1);
	} else { //처음이면
		moveSlide(slideCount - 1); //마지막으로 가라
	}
});
