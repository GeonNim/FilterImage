//Create button element

const btns = ['all', 'bag', 'shoe', 'watch', 'camera', 'headphone'];
const btnsWrapper = document.querySelector('.filter-btns');

btns.map(function (btn) {
  const modifiedChar = btn.charAt(0).toUpperCase() + btn.slice(1);
  // str.charAt(): 문자열의 첫 번째 글자만 반환 (*괄호 안 인덱스 번호에 따라 달라짐)
  // str.toUpperCase(): 문자열을 대문자로 변환
  // str.toLowerCase(): 문자열을 소문자로 변환
  // str.slice(): 문자열의 해당 인덱스부터 끝까지 반환

  const btnElement = `
  <button class="filter-btn" data-filter="${btn}">${modifiedChar}</button>
  `;
  btnsWrapper.insertAdjacentHTML('beforeend', btnElement);
});

const imgs = [
  'bag-1.jpg',
  'camera-1.jpg',
  'camera-2.jpg',
  'headphone-1.jpg',
  'headphone-2.jpg',
  'shoe-1.jpg',
  'shoe-2.jpg',
  'watch-1.jpg',
];
const imgsWrapper = document.querySelector('.filter-images');
imgs.map(function (img) {
  // console.log(img.split('-')[0]);
  console.log(img.indexOf('/'));
  const imgElement = `
     <div class="filter-image" data-filter="${img.split('-')[0]}">
        <span><img src="images/${img}" alt="" /></span>
     </div>
  `;
  // console.log(imgElement);
  imgsWrapper.insertAdjacentHTML('beforeend', imgElement);
});
