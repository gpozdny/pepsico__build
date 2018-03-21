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
        $finals = $('#finals'),
        $this = $(this),
        $overlay = $('.profile__modals-overlay'),
        $modal_briefing = $('.profile__modals'),
        $modal_presentation = $('.profile__modals-presentation'),
        $modal_fail = $('.profile__modals-fail'),
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


    // items' backgrounds

    if ($briefing.is('.profile__item--active')) {
        $briefing.addClass('profile__item-icon--idea-white')
    }

    if ($finals.is('.profile__item--active')) {
        $finals.addClass('profile__item-icon--finals-active')
    } else if ($finals.is('.profile__item--success')) {
        $finals.addClass('profile__item-icon--finals-success')
    }

    if ($presentation.is('.profile__item--active')) {
        $presentation.addClass('profile__item-icon--presentation-active')
    } else if ($presentation.is('.profile__item--success')) {
        $presentation.addClass('profile__item-icon--presentation-success')
    }

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
    $docxPresentation = $('#docxPresentation'),
    $pptx = $('#pptx'),
    $docx = $('#docx'),
    $image = $('#image'),
    $labelDocx = $('#labelDocx'),
    $labelImage = $('#labelImage'),
    $labelPresentation = $('#labelPresentation'),
    $labelDesc = $('#labelDesc'),
    $attchBtn = $('.profile__attachments-btn');


function changeDocx() {
    $docx.removeClass('hidden');
    $docx.addClass('show');
    $labelDocx.addClass('hidden');
};

function changeImage() {
    $image.removeClass('hidden');
    $image.addClass('show');
    $labelImage.addClass('hidden');
    $attchBtn.addClass('btn--active');
};

function changeDesc() {
    $docxPresentation.removeClass('hidden');
    $docxPresentation.addClass('show');
    $labelDesc.addClass('hidden');
};

function changePresentation() {
    $pptx.removeClass('hidden');
    $pptx.addClass('show');
    $labelPresentation.addClass('hidden');
    $attchBtn.addClass('btn--active');
};

function previewFile() {

    let preview = document.querySelector('#image');
    let file = document.querySelector('#imgInput').files[0];
    let reader = new FileReader();

    reader.onloadend = function () {
        preview.src = reader.result;
    }

    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.src = "";
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAvLyBmaWx0ZXIgZHJvcGRvd25cclxuICAgICQoJy5saXN0X19maWx0ZXInKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGxldCAkZHJvcGRvd24gPSAkKCcuZmlsdGVyX19kcm9wZG93bicpO1xyXG4gICAgICAgIGxldCAkZmlsdGVyID0gJCgnLmxpc3RfX2ZpbHRlcicpO1xyXG5cclxuICAgICAgICAkZHJvcGRvd24udG9nZ2xlQ2xhc3MoXCJmaWx0ZXJfX2Ryb3Bkb3duLS1hY3RpdmVcIik7XHJcbiAgICAgICAgJGZpbHRlci50b2dnbGVDbGFzcyhcImxpc3RfX2ZpbHRlci0tYWN0aXZlXCIpO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHBvcHVwc1xyXG5cclxuICAgIGxldCAkYnJpZWZpbmcgPSAkKCcjYnJpZWZpbmcnKSxcclxuICAgICAgICAkcHJlc2VudGF0aW9uID0gJCgnI3ByZXNlbnRhdGlvbicpLFxyXG4gICAgICAgICRmaW5hbHMgPSAkKCcjZmluYWxzJyksXHJcbiAgICAgICAgJHRoaXMgPSAkKHRoaXMpLFxyXG4gICAgICAgICRvdmVybGF5ID0gJCgnLnByb2ZpbGVfX21vZGFscy1vdmVybGF5JyksXHJcbiAgICAgICAgJG1vZGFsX2JyaWVmaW5nID0gJCgnLnByb2ZpbGVfX21vZGFscycpLFxyXG4gICAgICAgICRtb2RhbF9wcmVzZW50YXRpb24gPSAkKCcucHJvZmlsZV9fbW9kYWxzLXByZXNlbnRhdGlvbicpLFxyXG4gICAgICAgICRtb2RhbF9mYWlsID0gJCgnLnByb2ZpbGVfX21vZGFscy1mYWlsJyksXHJcbiAgICAgICAgJGNyb3NzID0gJCgnLnByb2ZpbGVfX21vZGFsLWNyb3NzJyksXHJcbiAgICAgICAgJHdyYXBwZXIgPSAkKCcud3JhcHBlcicpO1xyXG5cclxuICAgIC8vINCR0YDQuNGEXHJcbiAgICAkYnJpZWZpbmcuY2xpY2soZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAkb3ZlcmxheS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICAgICAgJG1vZGFsX2JyaWVmaW5nLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgICAgICAkd3JhcHBlci5hZGRDbGFzcygnYmx1cicpO1xyXG5cclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgLy8g0J/RgNC10LfQtdC90YLQsNGG0LjRj1xyXG4gICAgJHByZXNlbnRhdGlvbi5jbGljayhmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICRvdmVybGF5LmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgICAgICAkbW9kYWxfcHJlc2VudGF0aW9uLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgICAgICAkd3JhcHBlci5hZGRDbGFzcygnYmx1cicpO1xyXG5cclxuICAgIH0pO1xyXG4gICAgLy8gb3ZlcmxheSAmIGNyb3NzXHJcblxyXG4gICAgJG92ZXJsYXkuY2xpY2soZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAkKHRoaXMpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgICAgICRtb2RhbF9icmllZmluZy5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAgICAgICAkbW9kYWxfcHJlc2VudGF0aW9uLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgICAgICR3cmFwcGVyLnJlbW92ZUNsYXNzKCdibHVyJyk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgJGNyb3NzLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgJG92ZXJsYXkuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICAgICAgJG1vZGFsX2JyaWVmaW5nLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgICAgICRtb2RhbF9wcmVzZW50YXRpb24uY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICAgICAgJHdyYXBwZXIucmVtb3ZlQ2xhc3MoJ2JsdXInKTtcclxuXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgLy8gaXRlbXMnIGJhY2tncm91bmRzXHJcblxyXG4gICAgaWYgKCRicmllZmluZy5pcygnLnByb2ZpbGVfX2l0ZW0tLWFjdGl2ZScpKSB7XHJcbiAgICAgICAgJGJyaWVmaW5nLmFkZENsYXNzKCdwcm9maWxlX19pdGVtLWljb24tLWlkZWEtd2hpdGUnKVxyXG4gICAgfVxyXG5cclxuICAgIGlmICgkZmluYWxzLmlzKCcucHJvZmlsZV9faXRlbS0tYWN0aXZlJykpIHtcclxuICAgICAgICAkZmluYWxzLmFkZENsYXNzKCdwcm9maWxlX19pdGVtLWljb24tLWZpbmFscy1hY3RpdmUnKVxyXG4gICAgfSBlbHNlIGlmICgkZmluYWxzLmlzKCcucHJvZmlsZV9faXRlbS0tc3VjY2VzcycpKSB7XHJcbiAgICAgICAgJGZpbmFscy5hZGRDbGFzcygncHJvZmlsZV9faXRlbS1pY29uLS1maW5hbHMtc3VjY2VzcycpXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCRwcmVzZW50YXRpb24uaXMoJy5wcm9maWxlX19pdGVtLS1hY3RpdmUnKSkge1xyXG4gICAgICAgICRwcmVzZW50YXRpb24uYWRkQ2xhc3MoJ3Byb2ZpbGVfX2l0ZW0taWNvbi0tcHJlc2VudGF0aW9uLWFjdGl2ZScpXHJcbiAgICB9IGVsc2UgaWYgKCRwcmVzZW50YXRpb24uaXMoJy5wcm9maWxlX19pdGVtLS1zdWNjZXNzJykpIHtcclxuICAgICAgICAkcHJlc2VudGF0aW9uLmFkZENsYXNzKCdwcm9maWxlX19pdGVtLWljb24tLXByZXNlbnRhdGlvbi1zdWNjZXNzJylcclxuICAgIH1cclxuXHJcbiAgICAvLyBqUXVlcnkgS25vYlxyXG5cclxuICAgIC8vICQoXCIuZGlhbFwiKS5rbm9iKHtcclxuICAgIC8vICAgICAnbWluJzogMCxcclxuICAgIC8vICAgICAnbWF4JzogMTAsXHJcbiAgICAvLyAgICAgJ3JvdGF0aW9uJzogXCJhbnRpY2xvY2t3aXNlXCJcclxuICAgIC8vIH0pO1xyXG4gICAgbGV0ICRkaWFsID0gJChcIi5kaWFsXCIpO1xyXG4gICAgJGRpYWwua25vYih7XHJcbiAgICAgICAgJ21pbic6IDAsXHJcbiAgICAgICAgJ21heCc6IDEwLFxyXG4gICAgICAgICdyb3RhdGlvbic6IFwiYW50aWNsb2Nrd2lzZVwiLFxyXG4gICAgICAgICdjaGFuZ2UnOiBmdW5jdGlvbiAodikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh2KTtcclxuICAgICAgICAgICAgbGV0IGNvbG9yO1xyXG4gICAgICAgICAgICBpZiAodiA8PSA0KSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvciA9ICcjRTcyRTM2JztcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh2IDw9IDcpIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yID0gJyNGNTkxM0InO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29sb3IgPSAnIzAwOTYzOSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJGRpYWwudHJpZ2dlcihcclxuICAgICAgICAgICAgICAgICdjb25maWd1cmUnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJmZ0NvbG9yXCI6IGNvbG9yXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxufSk7XHJcbi8vIHBvcHVwcyBmaWxlc1xyXG5cclxubGV0ICRpbnB1dE5hbWUgPSAkKCcucHJvZmlsZV9fYXR0YWNobWVudHMtaW5wdXQnKSxcclxuICAgICR0aGlzID0gJCh0aGlzKSxcclxuICAgICRkb2N4UHJlc2VudGF0aW9uID0gJCgnI2RvY3hQcmVzZW50YXRpb24nKSxcclxuICAgICRwcHR4ID0gJCgnI3BwdHgnKSxcclxuICAgICRkb2N4ID0gJCgnI2RvY3gnKSxcclxuICAgICRpbWFnZSA9ICQoJyNpbWFnZScpLFxyXG4gICAgJGxhYmVsRG9jeCA9ICQoJyNsYWJlbERvY3gnKSxcclxuICAgICRsYWJlbEltYWdlID0gJCgnI2xhYmVsSW1hZ2UnKSxcclxuICAgICRsYWJlbFByZXNlbnRhdGlvbiA9ICQoJyNsYWJlbFByZXNlbnRhdGlvbicpLFxyXG4gICAgJGxhYmVsRGVzYyA9ICQoJyNsYWJlbERlc2MnKSxcclxuICAgICRhdHRjaEJ0biA9ICQoJy5wcm9maWxlX19hdHRhY2htZW50cy1idG4nKTtcclxuXHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VEb2N4KCkge1xyXG4gICAgJGRvY3gucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgJGRvY3guYWRkQ2xhc3MoJ3Nob3cnKTtcclxuICAgICRsYWJlbERvY3guYWRkQ2xhc3MoJ2hpZGRlbicpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gY2hhbmdlSW1hZ2UoKSB7XHJcbiAgICAkaW1hZ2UucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgJGltYWdlLmFkZENsYXNzKCdzaG93Jyk7XHJcbiAgICAkbGFiZWxJbWFnZS5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAkYXR0Y2hCdG4uYWRkQ2xhc3MoJ2J0bi0tYWN0aXZlJyk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VEZXNjKCkge1xyXG4gICAgJGRvY3hQcmVzZW50YXRpb24ucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgJGRvY3hQcmVzZW50YXRpb24uYWRkQ2xhc3MoJ3Nob3cnKTtcclxuICAgICRsYWJlbERlc2MuYWRkQ2xhc3MoJ2hpZGRlbicpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gY2hhbmdlUHJlc2VudGF0aW9uKCkge1xyXG4gICAgJHBwdHgucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgJHBwdHguYWRkQ2xhc3MoJ3Nob3cnKTtcclxuICAgICRsYWJlbFByZXNlbnRhdGlvbi5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAkYXR0Y2hCdG4uYWRkQ2xhc3MoJ2J0bi0tYWN0aXZlJyk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBwcmV2aWV3RmlsZSgpIHtcclxuXHJcbiAgICBsZXQgcHJldmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbWFnZScpO1xyXG4gICAgbGV0IGZpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW1nSW5wdXQnKS5maWxlc1swXTtcclxuICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG5cclxuICAgIHJlYWRlci5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcHJldmlldy5zcmMgPSByZWFkZXIucmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChmaWxlKSB7XHJcbiAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHByZXZpZXcuc3JjID0gXCJcIjtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
