$('.navbar-section-nav-list__item-disabled').click(function () {
    var id = $(this).attr('data-tab'),
        content = $('.tab[data-tab="' + id + '"]');

    $('.navbar-section-nav-list__item-disabled.navbar-section-nav-list__item-active').removeClass('navbar-section-nav-list__item-active');
    $(this).addClass('navbar-section-nav-list__item-active');

    $('.tab.active').removeClass('active');
    content.addClass('active');
});

