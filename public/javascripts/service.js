$(window).load(function() {
    $(".circle")
      .first()
      .addClass("active");
    $("#bg .slide")
      .first()
      .addClass("active");
    $("#image .img")
      .first()
      .addClass("active");
    $(".quote")
      .first()
      .addClass("active");
  
    var animate = setInterval(function() {
      var $this = $(".circle"),
        currentActiveBubble = $("#nav-cirlces").find(".active"),
        position = $("#nav-cirlces")
          .children()
          .index(currentActiveBubble),
        num = $(".circle").length;
  
      if (position < num - 1) {
        $(".active")
          .removeClass("active")
          .next()
          .addClass("active");
      } else {
        $(".circle")
          .removeClass("active")
          .first()
          .addClass("active");
        $("#bg .slide")
          .removeClass("active")
          .first()
          .addClass("active");
        $("#image .img")
          .removeClass("active")
          .first()
          .addClass("active");
        $(".quote")
          .removeClass("active")
          .first()
          .addClass("active");
      }
      position++;
    }, 4500);
  
    $(".circle").click(function() {
      clearInterval(animate);
  
      var $this = $(this),
        $siblings = $this.parent().children(),
        position = $siblings.index($this);
  
      $(".circle")
        .removeClass("active")
        .eq(position)
        .addClass("active");
      $("#bg .slide")
        .removeClass("active")
        .eq(position)
        .addClass("active");
      $("#image .img")
        .removeClass("active")
        .eq(position)
        .addClass("active");
      $(".quote")
        .removeClass("active")
        .eq(position)
        .addClass("active");
    });
  
    $("#rightBtn , #leftBtn").click(function() {
      clearInterval(animate);
  
      var $this = $(this),
        currentActiveBubble = $("#nav-cirlces").find(".active"),
        position = $("#nav-cirlces")
          .children()
          .index(currentActiveBubble),
        num = $(".circle").length;
  
      if ($this.hasClass("next")) {
        if (position < num - 1) {
          $(".active")
            .removeClass("active")
            .next()
            .addClass("active");
        } else {
          $(".circle")
            .removeClass("active")
            .first()
            .addClass("active");
          $("#bg .slide")
            .removeClass("active")
            .first()
            .addClass("active");
          $("#image .img")
            .removeClass("active")
            .first()
            .addClass("active");
          $(".quote")
            .removeClass("active")
            .first()
            .addClass("active");
        }
      } else {
        if (position === 0) {
          $(".circle")
            .removeClass("active")
            .last()
            .addClass("active");
          $("#bg .slide")
            .removeClass("active")
            .last()
            .addClass("active");
          $("#image .img")
            .removeClass("active")
            .last()
            .addClass("active");
          $(".quote")
            .removeClass("active")
            .last()
            .addClass("active");
        } else {
          $(".active")
            .removeClass("active")
            .prev()
            .addClass("active");
        }
      }
    });
  });
  




  document.addEventListener('DOMContentLoaded', function() {
    const showMoreBtn = document.getElementById('showMore');
    const showLessBtn = document.getElementById('showLess');
    const hiddenFaqItems = document.querySelectorAll('.faq-item-hide'); // Seleciona as perguntas ocultas

    // Mostrar mais perguntas
    showMoreBtn.addEventListener('click', function() {
        hiddenFaqItems.forEach(item => {
            item.style.display = 'block'; // Altera para 'block' para exibir
        });
        showMoreBtn.style.display = 'none'; // Esconde o botão "Ver mais"
        showLessBtn.style.display = 'inline'; // Mostra o botão "Ver menos"
    });

    // Esconder as perguntas
    showLessBtn.addEventListener('click', function() {
        hiddenFaqItems.forEach(item => {
            item.style.display = 'none'; // Esconde novamente
        });
        showLessBtn.style.display = 'none'; // Esconde o botão "Ver menos"
        showMoreBtn.style.display = 'inline'; // Mostra o botão "Ver mais"
    });
});

