'use strict';
// please do not delete the 'use strict' line above

//ランダムに色を変えるボタンのイベントリスナ定義
document.getElementById('color-button').addEventListener('click', changeColor)

//追加したボタン用の関数定義のイベントリスナ定義
document.getElementById('nightmare').addEventListener(
  "mousemove",

  function () {
      const item = document.getElementById("nightmare")
      item.style.left = event.clientX + 20 + "px";
      item.style.top = event.clientY  + 20 + "px";
  }, false);

/**
 * 背景の色をランダムに変える関数
 * 
 */
function changeColor() {
  console.log('test Button clicked!'); // feel free to change/delete this line
  const R = Math.floor(Math.random() * 256);
  const G = Math.floor(Math.random() * 256);
  const B = Math.floor(Math.random() * 256);

  console.log(`"rgb(${R},${G},${B})"`);
  //bodyタグのスタイル　背景色を　ランダムな色で設定する
  document.getElementsByTagName("body")[0].style.backgroundColor = `rgb(${R},${G},${B})`
}
/*



*/
