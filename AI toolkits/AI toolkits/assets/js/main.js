const links = $('.navbar-nav a');
const targets = ['home-main', 'services', 'portfolio', 'EXarticle', 'about'];
// const targetnone = ['#services', '#portfolio','#EXarticle'];

// 頁面收合 
links.click(function () {
  $.each(targets, function () {
    $('#' + this).removeClass('show');
  });
  const id = $(this).attr('href');
  $(id).addClass('show');
});

//footer點擊用
function targettt(id) {
  $('.cardpage').hide().slice(0, 6).show()
  $.each(targets, function () {
    $('#' + this).removeClass('show');
    links.removeClass('active');
  });
  $(id).addClass('show')
  $(`a[href="${id}"]`).addClass('active');
};



// active轉移
links.click(function () {
  links.removeClass('active');
  $(this).addClass('active');
});



// 小按鈕跳轉收合
function moretool(id, id2, num) {
  $(id).removeClass('show');
  $(id2).addClass('show');
  $('.nav-link').eq(0).removeClass('active');
  $('.nav-link').eq(num).addClass('active');
  $('.cardpage').hide().slice(0, 6).show();
}



// 跳轉使用案例
function usecase(intextid) {
  $('#services').removeClass('show');
  $('#portfolio').addClass('show');
  $('.nav-link').eq(1).removeClass('active');
  $('.nav-link').eq(2).addClass('active');
  $('.useEX').hide(50);
  $('.inarticle').hide(50);
  $(intextid).show(200);
}



// 文章帶值開關
function inart(intextid) {
  $('#home-main').removeClass('show');
  $('#portfolio').addClass('show');
  $('.nav-link').eq(0).removeClass('active');
  $('.nav-link').eq(2).addClass('active');
  $('.useEX').fadeOut(50);
  $(intextid).fadeIn(1000);
}



// 點導覽列 將所有文章關閉 還原頁面
$('a[href="#portfolio"]').click(function () {
  $('.useEX').fadeIn(500);
  $('.inarticle').fadeOut(500);
});



// 關閉文章用
$('.close-article').click(function () {
  $('.useEX').show();
  $('.inarticle').hide();
});



//點下拉是選單 保持工具一覽是開啟
$('.dropdown-menu a').click(function () {
  $('#services').addClass('show');
})





//帳號判斷
function shake(event) {
  event.preventDefault();
  $('#loginModal').addClass('shake');
  setTimeout(() => {
    $('#loginModal').removeClass('shake');
  }, 1000);
};

//點登入時先隱藏錯誤
$('#login-btn').on('click', function () {
  $('#pwError').addClass('transparent-text');
  $('#emailError').addClass('transparent-text');
  setInterval(() => {
    $('#pwError').addClass('transparent-text')
    $('#emailError').addClass('transparent-text')
  }, 7000);
});


function handleClick() {
  if ($('#emailError').css('display') === 'none' && $('#pwError').css('display') === 'none') {
    const firstChar = $('#email').val().charAt(0);
    localStorage.setItem('firstChar', firstChar);
    alert('登入成功');
  } else {
    shake(event);
  }
}

function checkvau() {
  const emailRegex = /.*@.*/.test($('#email').val());
  const hasUpperCase = /[A-Z]/.test($('#password').val());
  const hasLowerCase = /[a-z]/.test($('#password').val());
  const hasNumber = /\d/.test($('#password').val());
  let hasError = false;
  $('#pwError').removeClass('transparent-text')
  $('#emailError').removeClass('transparent-text')



  if (!(hasUpperCase && hasLowerCase && hasNumber)) {
    $('#pwError').css('display', 'block');
    hasError = true;
  } else {
    $('#pwError').css('display', 'none');
  }

  if (!emailRegex) {
    $('#emailError').css('display', 'block');
    hasError = true;
  } else {
    $('#emailError').css('display', 'none');
  }

  if (hasError) {
    // 如果有錯誤，阻止表單提交，加上震動效果
    $('#loginBtn').on('click', shake);
  } else {
    $('#loginBtn').off('click', shake);
  }
}



//搜尋功能
$('#myInput').on('keyup', function () {
  const value = $(this).val();
  if (value === '') {
    $('.toolbar').show();
    $('.toolbar div.col-md-6 h5').each(function () {
      $(this).html($(this).text());
    });
  } else {
    $('.toolbar').hide();
    $('.toolbar div.col-md-6 h5').each(function () {
      const text = $(this).text().toLowerCase();
      if (text.includes(value)) {
        const highlightedText = text.replace(value, '<mark>' + value + '</mark>');
        $(this).html(highlightedText);
        $(this).closest('.toolbar').show();
      }
    })
  }
});
// const text = $(this).text().toLowerCase();
// if (text.includes(value)) {
//   const highlightedText = text.replace(value, '<mark>' + value + '</mark>');
//   $(this).html(highlightedText);
//   $(this).closest('.toolbar').show();
// }



//外部文章分頁
let total = 3; // 計算總頁數
let page = 1;
let perPage = 6; // 一頁幾篇

//點導覽列 開頭顯示6篇 active回第一頁
$('a[href="#EXarticle"]').click(function () {
  $('.cardpage').hide().slice(0, 6).show()
  $('.bootpag li').removeClass('active');
  $('.bootpag li').eq(2).addClass('active');
});
$(document).ready(function () {
  $('#pagination').bootpag({
    total: total, // 指定總頁數
    page: 1,      //初始頁面
    maxVisble: 5,   // 最多顯示頁數
    firstLastUse: true, // 是否顯示第一頁和最後一頁
    activeClass: 'active', // 當前頁碼的 class
    disabledClass: 'disabled', // 不可點擊頁碼的 class
    nextClass: 'next', // 下一頁的 class
    prevClass: 'prev', // 上一頁的 class
    lastClass: 'last', // 最後一頁的 class
    firstClass: 'first', // 第一頁的 class
  }).on('page', function (event, num) {
    // 分頁器的回調函數，num 為點擊的頁碼
    var start = (num - 1) * perPage;
    var end = start + perPage;
    $('.cardpage').hide().slice(start, end).show();
  });
});



function out() {
  alert('已登出')
}



