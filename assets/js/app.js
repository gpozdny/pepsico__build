"use strict";

$(document).ready(function () {

    // filter dropdown
    $('.list__filter').click(function () {

        let dropdown = $('.filter__dropdown');
        let filter = $('.list__filter');

        dropdown.toggleClass("filter__dropdown--active");
        filter.toggleClass("list__filter--active");

    });

    // popups

    let briefing = $('#briefing'),
        presentation = $('#presentation'),
        overlay = $('.profile__modals-overlay'),
        modal_briefing = $('.profile__modals'),
        modal_presentation = $('.profile__modals-presentation'),
        cross = $('.profile__modal-cross'),
        wrapper = $('.wrapper');

    // Бриф
    briefing.click(function () {

        overlay.css("display", "block");
        modal_briefing.css("display", "block");
        wrapper.addClass('blur');

    });



    // Презентация
    presentation.click(function () {

        overlay.css("display", "block");
        modal_presentation.css("display", "block");
        wrapper.addClass('blur');

    });
    // overlay & cross

    overlay.click(function () {

        $(this).css("display", "none");
        modal_briefing.css("display", "none");
        modal_presentation.css("display", "none");
        wrapper.removeClass('blur');

    });

    cross.click(function () {

        overlay.css("display", "none");
        modal_briefing.css("display", "none");
        modal_presentation.css("display", "none");
        wrapper.removeClass('blur');

    });
    // jQuery Knob

    // $(".dial").knob({
    //     'min': 0,
    //     'max': 10,
    //     'rotation': "anticlockwise"
    // });
    let $dial = $(".dial");
    $dial.knob({
        'min': 0,
        'max': 10,
        'rotation': "anticlockwise",
        'change': function (v) {
            console.log(v);
            let color;
            if (v <= 4) {
                color = '#E72E36';
            } else if (v <= 7) {
                color = '#F5913B';
            } else {
                color = '#009639';
            }
            $dial.trigger(
                'configure', {
                    "fgColor": color
                }
            );
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgLy8gZmlsdGVyIGRyb3Bkb3duXHJcbiAgICAkKCcubGlzdF9fZmlsdGVyJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBsZXQgZHJvcGRvd24gPSAkKCcuZmlsdGVyX19kcm9wZG93bicpO1xyXG4gICAgICAgIGxldCBmaWx0ZXIgPSAkKCcubGlzdF9fZmlsdGVyJyk7XHJcblxyXG4gICAgICAgIGRyb3Bkb3duLnRvZ2dsZUNsYXNzKFwiZmlsdGVyX19kcm9wZG93bi0tYWN0aXZlXCIpO1xyXG4gICAgICAgIGZpbHRlci50b2dnbGVDbGFzcyhcImxpc3RfX2ZpbHRlci0tYWN0aXZlXCIpO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHBvcHVwc1xyXG5cclxuICAgIGxldCBicmllZmluZyA9ICQoJyNicmllZmluZycpLFxyXG4gICAgICAgIHByZXNlbnRhdGlvbiA9ICQoJyNwcmVzZW50YXRpb24nKSxcclxuICAgICAgICBvdmVybGF5ID0gJCgnLnByb2ZpbGVfX21vZGFscy1vdmVybGF5JyksXHJcbiAgICAgICAgbW9kYWxfYnJpZWZpbmcgPSAkKCcucHJvZmlsZV9fbW9kYWxzJyksXHJcbiAgICAgICAgbW9kYWxfcHJlc2VudGF0aW9uID0gJCgnLnByb2ZpbGVfX21vZGFscy1wcmVzZW50YXRpb24nKSxcclxuICAgICAgICBjcm9zcyA9ICQoJy5wcm9maWxlX19tb2RhbC1jcm9zcycpLFxyXG4gICAgICAgIHdyYXBwZXIgPSAkKCcud3JhcHBlcicpO1xyXG5cclxuICAgIC8vINCR0YDQuNGEXHJcbiAgICBicmllZmluZy5jbGljayhmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIG92ZXJsYXkuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgICAgIG1vZGFsX2JyaWVmaW5nLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgICAgICB3cmFwcGVyLmFkZENsYXNzKCdibHVyJyk7XHJcblxyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAvLyDQn9GA0LXQt9C10L3RgtCw0YbQuNGPXHJcbiAgICBwcmVzZW50YXRpb24uY2xpY2soZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBvdmVybGF5LmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgICAgICBtb2RhbF9wcmVzZW50YXRpb24uY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgICAgIHdyYXBwZXIuYWRkQ2xhc3MoJ2JsdXInKTtcclxuXHJcbiAgICB9KTtcclxuICAgIC8vIG92ZXJsYXkgJiBjcm9zc1xyXG5cclxuICAgIG92ZXJsYXkuY2xpY2soZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAkKHRoaXMpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgICAgIG1vZGFsX2JyaWVmaW5nLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgICAgIG1vZGFsX3ByZXNlbnRhdGlvbi5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAgICAgICB3cmFwcGVyLnJlbW92ZUNsYXNzKCdibHVyJyk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgY3Jvc3MuY2xpY2soZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBvdmVybGF5LmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgICAgIG1vZGFsX2JyaWVmaW5nLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgICAgIG1vZGFsX3ByZXNlbnRhdGlvbi5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAgICAgICB3cmFwcGVyLnJlbW92ZUNsYXNzKCdibHVyJyk7XHJcblxyXG4gICAgfSk7XHJcbiAgICAvLyBqUXVlcnkgS25vYlxyXG5cclxuICAgIC8vICQoXCIuZGlhbFwiKS5rbm9iKHtcclxuICAgIC8vICAgICAnbWluJzogMCxcclxuICAgIC8vICAgICAnbWF4JzogMTAsXHJcbiAgICAvLyAgICAgJ3JvdGF0aW9uJzogXCJhbnRpY2xvY2t3aXNlXCJcclxuICAgIC8vIH0pO1xyXG4gICAgbGV0ICRkaWFsID0gJChcIi5kaWFsXCIpO1xyXG4gICAgJGRpYWwua25vYih7XHJcbiAgICAgICAgJ21pbic6IDAsXHJcbiAgICAgICAgJ21heCc6IDEwLFxyXG4gICAgICAgICdyb3RhdGlvbic6IFwiYW50aWNsb2Nrd2lzZVwiLFxyXG4gICAgICAgICdjaGFuZ2UnOiBmdW5jdGlvbiAodikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh2KTtcclxuICAgICAgICAgICAgbGV0IGNvbG9yO1xyXG4gICAgICAgICAgICBpZiAodiA8PSA0KSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvciA9ICcjRTcyRTM2JztcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh2IDw9IDcpIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yID0gJyNGNTkxM0InO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29sb3IgPSAnIzAwOTYzOSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJGRpYWwudHJpZ2dlcihcclxuICAgICAgICAgICAgICAgICdjb25maWd1cmUnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJmZ0NvbG9yXCI6IGNvbG9yXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
