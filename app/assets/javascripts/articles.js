$(function(){


  function buildArticle(article){   
    var html = `<div class="article-box">
                  <div class="article-box__post-time">
                    ${article.date}
                  </div>
                  <div class="article-box__main-content">
                    <p>${article.content}</p>
                  </div>
                  <div class="article-box__menu">
                    編集するなら更新してね！
                  </div>
                </div>`
    return html
  }

  $("#new_article").on("submit", function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr("action");
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: "json",
      processData: false,
      contentType: false
    })
    .done(function(article){
      var html = buildArticle(article);
      $(".main-view").append(html);
      $('.submit-btn').prop( 'disabled', false);
      $("#new_article")[0].reset();
      $('.main-view').animate({scrollTop: $('.main-view')[0].scrollHeight});
    })
    .fail(function(){
      $('.submit-btn').prop( 'disabled', false);
      alert("さてはログインしてない？");
    })
  })
});