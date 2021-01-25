//back-to-top

let btn = document.querySelector('#back-top'),
			docElement = document.documentElement, //문서 자체
			offSet, //끝까지 스크롤하지 않고 offset만큼 덜 하더라도 버튼이 나오게끔
			scrollPos, //스크롤양 얼만큼 올라갔는지
			docHeight;

			//문서 높이 계산하기
			docHeight = Math.max(docElement.offsetHeight, docElement.scrollHeight);
			
			if(docHeight != 'undefined'){ //docHeight의 값이 있으면
				offset = docHeight / 4; //끝까지 스크롤이 되지 않고 조금 못미치게 스크롤이 되더라도 원하는 일을 시키기 위해
			}

			//스크롤 이벤트 추가
			window.addEventListener('scroll', () => {
				//윈도우에 스크롤이 생기면 할일
				scrollPos = docElement.scrollTop; //실시간으로 스크롤 양 찍힘
				console.log(scrollPos);

				//스크롤 양이 offset보다 많으면 클래스 이름을 visible로 변경
				btn.className = (scrollPos > offset) ? 'visible' : '';
			});

			//버튼을 누르면 #(빈링크)로 올라가지 않고 스크롤양으로 0으로 만들어서 올라가게 하기
			btn.addEventListener('click', (ev) => {
				//a링크의 속성을 막기
				ev.preventDefault();
				//docElement.scrollTop = 0; //스크롤양을 0으로 바꾸면 위로 올라감..
				//근데 확 올라가서 천천히 올라가는걸 보여주기 위해 함수로 작성

				scrollToTop();
			});

			//스크롤양을 조금씩 빼다가 0이 되면 멈추게 함
			const scrollToTop = (() => {
				//일정시간마다 할 일
				const scrollInterval = setInterval( () => {
					if(scrollPos != 0) { //윈도우 스크롤이 0이 아닐 때
						window.scrollBy(0,-55); //window의 스크롤양을 빼는법
					} else {
						clearInterval(scrollInterval); //스크롤이 0이면 setInterval 멈춰야됨
					}
				}, 15); //0.0015s = 15ms
			});


//toggle-button
const toggle = document.querySelector('#toggle');
const menu = document.querySelector('.myMenu');

toggle.addEventListener('click', () => {
		menu.classList.toggle('active');
});