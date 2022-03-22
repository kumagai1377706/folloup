'use strict';
// please do not delete the 'use strict' line above

//ランダムに色を変えるボタンのイベントリスナ定義
document.getElementById('color-button').addEventListener('click', changeColor)

//追加したボタン用の関数定義のイベントリスナ定義
document.getElementById('nightmare').addEventListener('click', devilAvalanche)

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



//悪魔の雪崩を起こす　追加処理
const devilArray = [];//デビルアレーは超音波　ではない
/**
 * 悪魔の雪崩を起こす関数
 */
function devilAvalanche() {
  //雪崩の制御 Setinterval のコールバック関数　＝divに表示された、悪魔を移動させる
  const intervalIDdevil = window.setInterval(() => {
    devilArray.forEach((devil, index) => {
      if (devilArray.filter(element => element.y_vec == 0).length == devilArray.length) {
        window.clearInterval(intervalIDdevil);//雪崩を終了
        console.log("devil-finish");
        //alert('Why did you push it?');
        location.reload();
      }
      devil.x += devil.x_vec;
      devil.y += devil.y_vec;

      //画面端に行った時の跳ね返りの処理
      if (devil.y > document.documentElement.clientHeight + 200) {
        devil.y_vec *= -0.8;
        if (devil.y_vec < 0.2) {
          devil.y_vec = 0;
          devil.x_vec = 0;
        }
      } else if (devil.y < 0) {
        devil.y = 0;
        devil.y_vec *= -0.8;
      }
      if (devil.x > document.documentElement.clientWidth) {
        devil.x_vec *= -0.8;
      } else if (devil.x < 0) {
        devil.x = 0;
        devil.x_vec *= -0.8;
      }

      //移動の反映
      document.getElementById(`devil${index}`).style.top = `${devil.y}px`;
      document.getElementById(`devil${index}`).style.left = `${devil.x}px`;
    });
  }, 50);


  //場面の転換と、ボタンを画面画に配置する処理
  const objBody = document.getElementsByTagName("body")[0];//bodyを取得
  objBody.style.backgroundColor = "black";
  document.getElementById("color-button").style.left = `${2000}px`;
  document.getElementById("nightmare").style.left = `${2000}px`;

  //悪魔のオブジェクトを５００個ほど生成
  for (let i = 0; i < 500; i++) {
    //デビルアレーに　それぞれの位置情報、速度情報を格納する
    devilArray.push({
      x: Math.random() * document.documentElement.clientWidth,//画面幅を取得してランダムに
      y: Math.random() * 10,
      x_vec: Math.random() * 30 - 15,
      y_vec: Math.random() * 15 + 8,
    })
    
    //DOM操作のためのオブジェクトの生成
    const divdevil = document.createElement("div");
    divdevil.className = 'devil';
    divdevil.id = `devil${i}`;
    divdevil.style.top = `${devilArray[i].y}px`;
    divdevil.style.left = `${devilArray[i].x}px`;
    
    // 悪魔の中にも救いはある
    if (i % 50 === 0) {
      switch (i) {
        case 0:
          divdevil.textContent = '👼 Urara';
          break;
        case 50:
          divdevil.textContent = '👼 Eriko';
          break;
        case 100:
          divdevil.textContent = '👼 Tamaroh';
          break;
        case 150:
          divdevil.textContent = '👼 Tsubasa';
          break;
        case 200:
          divdevil.textContent = '👼 Mio';
          break;
        case 250:
          divdevil.textContent = '👼 Yusuke';
          break;
        default:
          divdevil.textContent = '👼';
          devilArray[i].y_vec += 20;
      }
      divdevil.style.width = "180px";
      devilArray[i].x_vec /= 2;
      devilArray[i].y_vec /= 3;
    } else {
      divdevil.textContent = '😈';
    }

    divdevil.style.zIndex = `${i}`
    objBody.append(divdevil);//bodyタグに追加
  }
}

