"use strict";

$(document).ready(function () {

    // filter dropdown
    $('.list__filter').click(function () {

        let $dropdown = $('.filter__dropdown');
        let $filter = $('.list__filter');

        $dropdown.toggleClass("filter__dropdown--active");
        $filter.toggleClass("list__filter--active");

    });

    // popups

    let $briefing = $('#briefing'),
        $presentation = $('#presentation'),
        $overlay = $('.profile__modals-overlay'),
        $modal_briefing = $('.profile__modals'),
        $modal_presentation = $('.profile__modals-presentation'),
        $cross = $('.profile__modal-cross'),
        $wrapper = $('.wrapper');

    // Бриф
    $briefing.click(function () {

        $overlay.css("display", "block");
        $modal_briefing.css("display", "block");
        $wrapper.addClass('blur');

    });



    // Презентация
    $presentation.click(function () {

        $overlay.css("display", "block");
        $modal_presentation.css("display", "block");
        $wrapper.addClass('blur');

    });
    // overlay & cross

    $overlay.click(function () {

        $(this).css("display", "none");
        $modal_briefing.css("display", "none");
        $modal_presentation.css("display", "none");
        $wrapper.removeClass('blur');

    });

    $cross.click(function () {

        $overlay.css("display", "none");
        $modal_briefing.css("display", "none");
        $modal_presentation.css("display", "none");
        $wrapper.removeClass('blur');

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
// popups files

let $inputName = $('.profile__attachments-input'),
    $this = $(this),
    $docx = $('#docx'),
    $image = $('#image'),
    $labelDocx = $('#labelDocx'),
    $labelImage = $('#labelImage'),
    $attchBtn = $('.profile__attachments-btn');


function changeDocx() {
    $docx.removeClass('hidden');
    $docx.addClass('show');
    $labelDocx.addClass('hidden');
}

function changeImage() {
    $image.removeClass('hidden');
    $image.addClass('show');
    $labelImage.addClass('hidden');
    $attchBtn.addClass('btn--active');
}


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgLy8gZmlsdGVyIGRyb3Bkb3duXHJcbiAgICAkKCcubGlzdF9fZmlsdGVyJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBsZXQgJGRyb3Bkb3duID0gJCgnLmZpbHRlcl9fZHJvcGRvd24nKTtcclxuICAgICAgICBsZXQgJGZpbHRlciA9ICQoJy5saXN0X19maWx0ZXInKTtcclxuXHJcbiAgICAgICAgJGRyb3Bkb3duLnRvZ2dsZUNsYXNzKFwiZmlsdGVyX19kcm9wZG93bi0tYWN0aXZlXCIpO1xyXG4gICAgICAgICRmaWx0ZXIudG9nZ2xlQ2xhc3MoXCJsaXN0X19maWx0ZXItLWFjdGl2ZVwiKTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBwb3B1cHNcclxuXHJcbiAgICBsZXQgJGJyaWVmaW5nID0gJCgnI2JyaWVmaW5nJyksXHJcbiAgICAgICAgJHByZXNlbnRhdGlvbiA9ICQoJyNwcmVzZW50YXRpb24nKSxcclxuICAgICAgICAkb3ZlcmxheSA9ICQoJy5wcm9maWxlX19tb2RhbHMtb3ZlcmxheScpLFxyXG4gICAgICAgICRtb2RhbF9icmllZmluZyA9ICQoJy5wcm9maWxlX19tb2RhbHMnKSxcclxuICAgICAgICAkbW9kYWxfcHJlc2VudGF0aW9uID0gJCgnLnByb2ZpbGVfX21vZGFscy1wcmVzZW50YXRpb24nKSxcclxuICAgICAgICAkY3Jvc3MgPSAkKCcucHJvZmlsZV9fbW9kYWwtY3Jvc3MnKSxcclxuICAgICAgICAkd3JhcHBlciA9ICQoJy53cmFwcGVyJyk7XHJcblxyXG4gICAgLy8g0JHRgNC40YRcclxuICAgICRicmllZmluZy5jbGljayhmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICRvdmVybGF5LmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgICAgICAkbW9kYWxfYnJpZWZpbmcuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgICAgICR3cmFwcGVyLmFkZENsYXNzKCdibHVyJyk7XHJcblxyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAvLyDQn9GA0LXQt9C10L3RgtCw0YbQuNGPXHJcbiAgICAkcHJlc2VudGF0aW9uLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgJG92ZXJsYXkuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgICAgICRtb2RhbF9wcmVzZW50YXRpb24uY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgICAgICR3cmFwcGVyLmFkZENsYXNzKCdibHVyJyk7XHJcblxyXG4gICAgfSk7XHJcbiAgICAvLyBvdmVybGF5ICYgY3Jvc3NcclxuXHJcbiAgICAkb3ZlcmxheS5jbGljayhmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICQodGhpcykuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICAgICAgJG1vZGFsX2JyaWVmaW5nLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgICAgICRtb2RhbF9wcmVzZW50YXRpb24uY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICAgICAgJHdyYXBwZXIucmVtb3ZlQ2xhc3MoJ2JsdXInKTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAkY3Jvc3MuY2xpY2soZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAkb3ZlcmxheS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAgICAgICAkbW9kYWxfYnJpZWZpbmcuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICAgICAgJG1vZGFsX3ByZXNlbnRhdGlvbi5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAgICAgICAkd3JhcHBlci5yZW1vdmVDbGFzcygnYmx1cicpO1xyXG5cclxuICAgIH0pO1xyXG4gICAgLy8galF1ZXJ5IEtub2JcclxuXHJcbiAgICAvLyAkKFwiLmRpYWxcIikua25vYih7XHJcbiAgICAvLyAgICAgJ21pbic6IDAsXHJcbiAgICAvLyAgICAgJ21heCc6IDEwLFxyXG4gICAgLy8gICAgICdyb3RhdGlvbic6IFwiYW50aWNsb2Nrd2lzZVwiXHJcbiAgICAvLyB9KTtcclxuICAgIGxldCAkZGlhbCA9ICQoXCIuZGlhbFwiKTtcclxuICAgICRkaWFsLmtub2Ioe1xyXG4gICAgICAgICdtaW4nOiAwLFxyXG4gICAgICAgICdtYXgnOiAxMCxcclxuICAgICAgICAncm90YXRpb24nOiBcImFudGljbG9ja3dpc2VcIixcclxuICAgICAgICAnY2hhbmdlJzogZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codik7XHJcbiAgICAgICAgICAgIGxldCBjb2xvcjtcclxuICAgICAgICAgICAgaWYgKHYgPD0gNCkge1xyXG4gICAgICAgICAgICAgICAgY29sb3IgPSAnI0U3MkUzNic7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodiA8PSA3KSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvciA9ICcjRjU5MTNCJztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yID0gJyMwMDk2MzknO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICRkaWFsLnRyaWdnZXIoXHJcbiAgICAgICAgICAgICAgICAnY29uZmlndXJlJywge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZmdDb2xvclwiOiBjb2xvclxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbn0pO1xyXG4vLyBwb3B1cHMgZmlsZXNcclxuXHJcbmxldCAkaW5wdXROYW1lID0gJCgnLnByb2ZpbGVfX2F0dGFjaG1lbnRzLWlucHV0JyksXHJcbiAgICAkdGhpcyA9ICQodGhpcyksXHJcbiAgICAkZG9jeCA9ICQoJyNkb2N4JyksXHJcbiAgICAkaW1hZ2UgPSAkKCcjaW1hZ2UnKSxcclxuICAgICRsYWJlbERvY3ggPSAkKCcjbGFiZWxEb2N4JyksXHJcbiAgICAkbGFiZWxJbWFnZSA9ICQoJyNsYWJlbEltYWdlJyksXHJcbiAgICAkYXR0Y2hCdG4gPSAkKCcucHJvZmlsZV9fYXR0YWNobWVudHMtYnRuJyk7XHJcblxyXG5cclxuZnVuY3Rpb24gY2hhbmdlRG9jeCgpIHtcclxuICAgICRkb2N4LnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcclxuICAgICRkb2N4LmFkZENsYXNzKCdzaG93Jyk7XHJcbiAgICAkbGFiZWxEb2N4LmFkZENsYXNzKCdoaWRkZW4nKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hhbmdlSW1hZ2UoKSB7XHJcbiAgICAkaW1hZ2UucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgJGltYWdlLmFkZENsYXNzKCdzaG93Jyk7XHJcbiAgICAkbGFiZWxJbWFnZS5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAkYXR0Y2hCdG4uYWRkQ2xhc3MoJ2J0bi0tYWN0aXZlJyk7XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
