$('.questions__item').on('click', function () {
   if ($(this).hasClass('questions__item--active')) {
      $(this).removeClass('questions__item--active');
   }
   else {
      $(this).addClass('questions__item--active');
   }

});