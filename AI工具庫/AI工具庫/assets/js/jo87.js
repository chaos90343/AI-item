// const links = document.querySelectorAll('.navbar-nav a');
// const targets = ['home-main', 'services', 'portfolio','EXarticle'];

// 頁面收合 
// for (const link of links) {
//   link.addEventListener('click', function() { //在選到的a標籤增加點擊事件  並觸發函式
//     // event.preventDefault(); //把連結事件移除

//     targets.forEach(target => {   //透過forEach迴圈 取出每個id
//       document.getElementById(target).classList.remove('show');  //把所有id 的.show 移除
//     });
    
//     const id = this.getAttribute('href');
//     document.querySelector(id).classList.add('show');// 增加 .show在點擊的按鈕對應的ID頁面的class上  點同一個a標籤後才不會合起
//   });
// }

// active轉移
// for (const link of links) {
//   link.addEventListener('click', () => { 
//     links.forEach(del => del.classList.remove('active'));
//     link.classList.add('active');
//   });
// }

// 小按鈕跳轉收合
// function moretool(id,id2,num){
//   document.querySelector(id).classList.remove('show');
//   document.querySelector(id2).classList.add('show');
//   document.querySelectorAll('.nav-link')[0].classList.remove('active');
//   document.querySelectorAll('.nav-link')[num].classList.add('active');
// }

// 跳轉使用案例
// function usecase(intextid){
//   document.querySelector('#services').classList.remove('show');
//   document.querySelector('#portfolio').classList.add('show');
//   document.querySelectorAll('.nav-link')[1].classList.remove('active');
//   document.querySelectorAll('.nav-link')[2].classList.add('active');
//   document.querySelector('.useEX').style.display = 'none';
//   document.querySelector(intextid).style.display = 'block';
// }

// 文章帶值開關
// function inart(intextid) {
//   document.querySelector('.useEX').style.display = 'none';
//   document.querySelector(intextid).style.display = 'block';
// }


// 點導覽列 將所有文章關閉 還原頁面
// document.querySelector('a[href="#portfolio"]').addEventListener('click', function() {
//   document.querySelector('.useEX').style.display = 'block';
//   document.querySelectorAll('.inarticle').forEach(function(el) {
//     el.style.display = 'none';
//   });
// });


// 關閉文章用
// document.querySelectorAll('.close-article').forEach(function(el) {
//   el.addEventListener('click', function() {
//     document.querySelector('.useEX').style.display = 'block';
//     document.querySelectorAll('.inarticle').forEach(function(el) {
//       el.style.display = 'none';
//     });
//   });
// });
