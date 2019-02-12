

//画像情報のオブジェクトを格納した配列
const picArray = [
{src: './images/pic_1.jpg', title: 'picture 1'},
{src: './images/pic_2.jpg', title: 'picture 2'},
{src: './images/pic_3.jpg', title: 'picture 3'},
{src: './images/pic_4.jpg', title: 'picture 4'},
{src: './images/pic_5.jpg', title: 'picture 5'},
{src: './images/pic_6.jpg', title: 'picture 6'}
];

//スライドショーが再生中かどうかを記録しておくためのグローバル変数
let playingID = 0;

//写真配列の要素を保持するためのグローバル変数
let picCount = 0;

//写真を切り替える関数
//関数名「changePicture」
let changePicture = () => {
  for(;;){
    //０以上、写真配列の要素数-1以下のランダムな自然数を取得
    var random = Math.floor(Math.random() * picArray.length);
    //保持していた写真配列の要素数と生成したランダムの値が異なった場合、無限ループを抜ける。
    if(picCount !== random){
      document.getElementById('pics').src = picArray[random].src;
      document.getElementById('pic-title').innerHTML = picArray[random].title;
      break;
    }
  }
  picCount = random;
};

// ボタンを押してスライドショーを再生・停止する関数
//関数名「playSlidedeshow」
let playSlidedeshow = () => {
  if(playingID === 0){
    document.getElementById('playButton').innerHTML = "STOP";
    playingID = setInterval(changePicture, 2000);
  }else{
    document.getElementById('playButton').innerHTML = "PLAY";
    clearInterval(playingID);
    playingID = 0;
  }
};

