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

    $(".dial").knob({
        'min': 0,
        'max': 10,
        'rotation': "anticlockwise",
        'change' : function (v) {
            console.log(v);
         }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIC8vIGZpbHRlciBkcm9wZG93blxyXG4gICAgJCgnLmxpc3RfX2ZpbHRlcicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgbGV0IGRyb3Bkb3duID0gJCgnLmZpbHRlcl9fZHJvcGRvd24nKTtcclxuICAgICAgICBsZXQgZmlsdGVyID0gJCgnLmxpc3RfX2ZpbHRlcicpO1xyXG5cclxuICAgICAgICBkcm9wZG93bi50b2dnbGVDbGFzcyhcImZpbHRlcl9fZHJvcGRvd24tLWFjdGl2ZVwiKTtcclxuICAgICAgICBmaWx0ZXIudG9nZ2xlQ2xhc3MoXCJsaXN0X19maWx0ZXItLWFjdGl2ZVwiKTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBwb3B1cHNcclxuXHJcbiAgICBsZXQgYnJpZWZpbmcgPSAkKCcjYnJpZWZpbmcnKSxcclxuICAgICAgICBwcmVzZW50YXRpb24gPSAkKCcjcHJlc2VudGF0aW9uJyksXHJcbiAgICAgICAgb3ZlcmxheSA9ICQoJy5wcm9maWxlX19tb2RhbHMtb3ZlcmxheScpLFxyXG4gICAgICAgIG1vZGFsX2JyaWVmaW5nID0gJCgnLnByb2ZpbGVfX21vZGFscycpLFxyXG4gICAgICAgIG1vZGFsX3ByZXNlbnRhdGlvbiA9ICQoJy5wcm9maWxlX19tb2RhbHMtcHJlc2VudGF0aW9uJyksXHJcbiAgICAgICAgY3Jvc3MgPSAkKCcucHJvZmlsZV9fbW9kYWwtY3Jvc3MnKSxcclxuICAgICAgICB3cmFwcGVyID0gJCgnLndyYXBwZXInKTtcclxuXHJcbiAgICAvLyDQkdGA0LjRhFxyXG4gICAgYnJpZWZpbmcuY2xpY2soZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBvdmVybGF5LmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgICAgICBtb2RhbF9icmllZmluZy5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICAgICAgd3JhcHBlci5hZGRDbGFzcygnYmx1cicpO1xyXG5cclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgLy8g0J/RgNC10LfQtdC90YLQsNGG0LjRj1xyXG4gICAgcHJlc2VudGF0aW9uLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgb3ZlcmxheS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICAgICAgbW9kYWxfcHJlc2VudGF0aW9uLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgICAgICB3cmFwcGVyLmFkZENsYXNzKCdibHVyJyk7XHJcblxyXG4gICAgfSk7XHJcbiAgICAvLyBvdmVybGF5ICYgY3Jvc3NcclxuXHJcbiAgICBvdmVybGF5LmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgJCh0aGlzKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAgICAgICBtb2RhbF9icmllZmluZy5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAgICAgICBtb2RhbF9wcmVzZW50YXRpb24uY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICAgICAgd3JhcHBlci5yZW1vdmVDbGFzcygnYmx1cicpO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIGNyb3NzLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgb3ZlcmxheS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAgICAgICBtb2RhbF9icmllZmluZy5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAgICAgICBtb2RhbF9wcmVzZW50YXRpb24uY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICAgICAgd3JhcHBlci5yZW1vdmVDbGFzcygnYmx1cicpO1xyXG5cclxuICAgIH0pO1xyXG4gICAgLy8galF1ZXJ5IEtub2JcclxuXHJcbiAgICAkKFwiLmRpYWxcIikua25vYih7XHJcbiAgICAgICAgJ21pbic6IDAsXHJcbiAgICAgICAgJ21heCc6IDEwLFxyXG4gICAgICAgICdyb3RhdGlvbic6IFwiYW50aWNsb2Nrd2lzZVwiLFxyXG4gICAgICAgICdjaGFuZ2UnIDogZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codik7XHJcbiAgICAgICAgIH1cclxuICAgIH0pO1xyXG59KTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
