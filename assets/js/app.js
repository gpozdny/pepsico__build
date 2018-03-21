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
        $modal_fail.css("display", "none");
        $wrapper.removeClass('blur');

    });

    $cross.click(function () {

        $overlay.css("display", "none");
        $modal_briefing.css("display", "none");
        $modal_presentation.css("display", "none");
        $modal_fail.css("display", "none");
        $wrapper.removeClass('blur');

    });

    function showFail(){
        $overlay.css("display", "block");
        $modal_fail.css("display", "block");
        $wrapper.addClass('blur');
    };

    if($finals.is('.profile__item--failed')){
        $finals.on('click', function(){
            showFail();
        })
    };

    if($presentation.is('.profile__item--failed')){
        $presentation.on('click', function(){
            showFail();
        })
    };

    if($briefing.is('.profile__item--failed')){
        $briefing.on('click', function(){
            showFail();
        })
    };

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIC8vIGZpbHRlciBkcm9wZG93blxyXG4gICAgJCgnLmxpc3RfX2ZpbHRlcicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgbGV0ICRkcm9wZG93biA9ICQoJy5maWx0ZXJfX2Ryb3Bkb3duJyk7XHJcbiAgICAgICAgbGV0ICRmaWx0ZXIgPSAkKCcubGlzdF9fZmlsdGVyJyk7XHJcblxyXG4gICAgICAgICRkcm9wZG93bi50b2dnbGVDbGFzcyhcImZpbHRlcl9fZHJvcGRvd24tLWFjdGl2ZVwiKTtcclxuICAgICAgICAkZmlsdGVyLnRvZ2dsZUNsYXNzKFwibGlzdF9fZmlsdGVyLS1hY3RpdmVcIik7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gcG9wdXBzXHJcblxyXG4gICAgbGV0ICRicmllZmluZyA9ICQoJyNicmllZmluZycpLFxyXG4gICAgICAgICRwcmVzZW50YXRpb24gPSAkKCcjcHJlc2VudGF0aW9uJyksXHJcbiAgICAgICAgJGZpbmFscyA9ICQoJyNmaW5hbHMnKSxcclxuICAgICAgICAkdGhpcyA9ICQodGhpcyksXHJcbiAgICAgICAgJG92ZXJsYXkgPSAkKCcucHJvZmlsZV9fbW9kYWxzLW92ZXJsYXknKSxcclxuICAgICAgICAkbW9kYWxfYnJpZWZpbmcgPSAkKCcucHJvZmlsZV9fbW9kYWxzJyksXHJcbiAgICAgICAgJG1vZGFsX3ByZXNlbnRhdGlvbiA9ICQoJy5wcm9maWxlX19tb2RhbHMtcHJlc2VudGF0aW9uJyksXHJcbiAgICAgICAgJG1vZGFsX2ZhaWwgPSAkKCcucHJvZmlsZV9fbW9kYWxzLWZhaWwnKSxcclxuICAgICAgICAkY3Jvc3MgPSAkKCcucHJvZmlsZV9fbW9kYWwtY3Jvc3MnKSxcclxuICAgICAgICAkd3JhcHBlciA9ICQoJy53cmFwcGVyJyk7XHJcblxyXG4gICAgLy8g0JHRgNC40YRcclxuICAgICRicmllZmluZy5jbGljayhmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICRvdmVybGF5LmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgICAgICAkbW9kYWxfYnJpZWZpbmcuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgICAgICR3cmFwcGVyLmFkZENsYXNzKCdibHVyJyk7XHJcblxyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAvLyDQn9GA0LXQt9C10L3RgtCw0YbQuNGPXHJcbiAgICAkcHJlc2VudGF0aW9uLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgJG92ZXJsYXkuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgICAgICRtb2RhbF9wcmVzZW50YXRpb24uY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgICAgICR3cmFwcGVyLmFkZENsYXNzKCdibHVyJyk7XHJcblxyXG4gICAgfSk7XHJcbiAgICAvLyBvdmVybGF5ICYgY3Jvc3NcclxuXHJcbiAgICAkb3ZlcmxheS5jbGljayhmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICQodGhpcykuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICAgICAgJG1vZGFsX2JyaWVmaW5nLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgICAgICRtb2RhbF9wcmVzZW50YXRpb24uY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICAgICAgJG1vZGFsX2ZhaWwuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICAgICAgJHdyYXBwZXIucmVtb3ZlQ2xhc3MoJ2JsdXInKTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAkY3Jvc3MuY2xpY2soZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAkb3ZlcmxheS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAgICAgICAkbW9kYWxfYnJpZWZpbmcuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICAgICAgJG1vZGFsX3ByZXNlbnRhdGlvbi5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAgICAgICAkbW9kYWxfZmFpbC5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAgICAgICAkd3JhcHBlci5yZW1vdmVDbGFzcygnYmx1cicpO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNob3dGYWlsKCl7XHJcbiAgICAgICAgJG92ZXJsYXkuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgICAgICRtb2RhbF9mYWlsLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgICAgICAkd3JhcHBlci5hZGRDbGFzcygnYmx1cicpO1xyXG4gICAgfTtcclxuXHJcbiAgICBpZigkZmluYWxzLmlzKCcucHJvZmlsZV9faXRlbS0tZmFpbGVkJykpe1xyXG4gICAgICAgICRmaW5hbHMub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgc2hvd0ZhaWwoKTtcclxuICAgICAgICB9KVxyXG4gICAgfTtcclxuXHJcbiAgICBpZigkcHJlc2VudGF0aW9uLmlzKCcucHJvZmlsZV9faXRlbS0tZmFpbGVkJykpe1xyXG4gICAgICAgICRwcmVzZW50YXRpb24ub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgc2hvd0ZhaWwoKTtcclxuICAgICAgICB9KVxyXG4gICAgfTtcclxuXHJcbiAgICBpZigkYnJpZWZpbmcuaXMoJy5wcm9maWxlX19pdGVtLS1mYWlsZWQnKSl7XHJcbiAgICAgICAgJGJyaWVmaW5nLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHNob3dGYWlsKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH07XHJcblxyXG4gICAgLy8gaXRlbXMnIGJhY2tncm91bmRzXHJcblxyXG4gICAgaWYgKCRicmllZmluZy5pcygnLnByb2ZpbGVfX2l0ZW0tLWFjdGl2ZScpKSB7XHJcbiAgICAgICAgJGJyaWVmaW5nLmFkZENsYXNzKCdwcm9maWxlX19pdGVtLWljb24tLWlkZWEtd2hpdGUnKVxyXG4gICAgfVxyXG5cclxuICAgIGlmICgkZmluYWxzLmlzKCcucHJvZmlsZV9faXRlbS0tYWN0aXZlJykpIHtcclxuICAgICAgICAkZmluYWxzLmFkZENsYXNzKCdwcm9maWxlX19pdGVtLWljb24tLWZpbmFscy1hY3RpdmUnKVxyXG4gICAgfSBlbHNlIGlmICgkZmluYWxzLmlzKCcucHJvZmlsZV9faXRlbS0tc3VjY2VzcycpKSB7XHJcbiAgICAgICAgJGZpbmFscy5hZGRDbGFzcygncHJvZmlsZV9faXRlbS1pY29uLS1maW5hbHMtc3VjY2VzcycpXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCRwcmVzZW50YXRpb24uaXMoJy5wcm9maWxlX19pdGVtLS1hY3RpdmUnKSkge1xyXG4gICAgICAgICRwcmVzZW50YXRpb24uYWRkQ2xhc3MoJ3Byb2ZpbGVfX2l0ZW0taWNvbi0tcHJlc2VudGF0aW9uLWFjdGl2ZScpXHJcbiAgICB9IGVsc2UgaWYgKCRwcmVzZW50YXRpb24uaXMoJy5wcm9maWxlX19pdGVtLS1zdWNjZXNzJykpIHtcclxuICAgICAgICAkcHJlc2VudGF0aW9uLmFkZENsYXNzKCdwcm9maWxlX19pdGVtLWljb24tLXByZXNlbnRhdGlvbi1zdWNjZXNzJylcclxuICAgIH1cclxuXHJcbiAgICAvLyBqUXVlcnkgS25vYlxyXG5cclxuICAgIC8vICQoXCIuZGlhbFwiKS5rbm9iKHtcclxuICAgIC8vICAgICAnbWluJzogMCxcclxuICAgIC8vICAgICAnbWF4JzogMTAsXHJcbiAgICAvLyAgICAgJ3JvdGF0aW9uJzogXCJhbnRpY2xvY2t3aXNlXCJcclxuICAgIC8vIH0pO1xyXG4gICAgbGV0ICRkaWFsID0gJChcIi5kaWFsXCIpO1xyXG4gICAgJGRpYWwua25vYih7XHJcbiAgICAgICAgJ21pbic6IDAsXHJcbiAgICAgICAgJ21heCc6IDEwLFxyXG4gICAgICAgICdyb3RhdGlvbic6IFwiYW50aWNsb2Nrd2lzZVwiLFxyXG4gICAgICAgICdjaGFuZ2UnOiBmdW5jdGlvbiAodikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh2KTtcclxuICAgICAgICAgICAgbGV0IGNvbG9yO1xyXG4gICAgICAgICAgICBpZiAodiA8PSA0KSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvciA9ICcjRTcyRTM2JztcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh2IDw9IDcpIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yID0gJyNGNTkxM0InO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29sb3IgPSAnIzAwOTYzOSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJGRpYWwudHJpZ2dlcihcclxuICAgICAgICAgICAgICAgICdjb25maWd1cmUnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJmZ0NvbG9yXCI6IGNvbG9yXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxufSk7XHJcbi8vIHBvcHVwcyBmaWxlc1xyXG5cclxubGV0ICRpbnB1dE5hbWUgPSAkKCcucHJvZmlsZV9fYXR0YWNobWVudHMtaW5wdXQnKSxcclxuICAgICR0aGlzID0gJCh0aGlzKSxcclxuICAgICRkb2N4UHJlc2VudGF0aW9uID0gJCgnI2RvY3hQcmVzZW50YXRpb24nKSxcclxuICAgICRwcHR4ID0gJCgnI3BwdHgnKSxcclxuICAgICRkb2N4ID0gJCgnI2RvY3gnKSxcclxuICAgICRpbWFnZSA9ICQoJyNpbWFnZScpLFxyXG4gICAgJGxhYmVsRG9jeCA9ICQoJyNsYWJlbERvY3gnKSxcclxuICAgICRsYWJlbEltYWdlID0gJCgnI2xhYmVsSW1hZ2UnKSxcclxuICAgICRsYWJlbFByZXNlbnRhdGlvbiA9ICQoJyNsYWJlbFByZXNlbnRhdGlvbicpLFxyXG4gICAgJGxhYmVsRGVzYyA9ICQoJyNsYWJlbERlc2MnKSxcclxuICAgICRhdHRjaEJ0biA9ICQoJy5wcm9maWxlX19hdHRhY2htZW50cy1idG4nKTtcclxuXHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VEb2N4KCkge1xyXG4gICAgJGRvY3gucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgJGRvY3guYWRkQ2xhc3MoJ3Nob3cnKTtcclxuICAgICRsYWJlbERvY3guYWRkQ2xhc3MoJ2hpZGRlbicpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gY2hhbmdlSW1hZ2UoKSB7XHJcbiAgICAkaW1hZ2UucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgJGltYWdlLmFkZENsYXNzKCdzaG93Jyk7XHJcbiAgICAkbGFiZWxJbWFnZS5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAkYXR0Y2hCdG4uYWRkQ2xhc3MoJ2J0bi0tYWN0aXZlJyk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VEZXNjKCkge1xyXG4gICAgJGRvY3hQcmVzZW50YXRpb24ucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgJGRvY3hQcmVzZW50YXRpb24uYWRkQ2xhc3MoJ3Nob3cnKTtcclxuICAgICRsYWJlbERlc2MuYWRkQ2xhc3MoJ2hpZGRlbicpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gY2hhbmdlUHJlc2VudGF0aW9uKCkge1xyXG4gICAgJHBwdHgucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgJHBwdHguYWRkQ2xhc3MoJ3Nob3cnKTtcclxuICAgICRsYWJlbFByZXNlbnRhdGlvbi5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAkYXR0Y2hCdG4uYWRkQ2xhc3MoJ2J0bi0tYWN0aXZlJyk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBwcmV2aWV3RmlsZSgpIHtcclxuXHJcbiAgICBsZXQgcHJldmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbWFnZScpO1xyXG4gICAgbGV0IGZpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW1nSW5wdXQnKS5maWxlc1swXTtcclxuICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG5cclxuICAgIHJlYWRlci5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcHJldmlldy5zcmMgPSByZWFkZXIucmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChmaWxlKSB7XHJcbiAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHByZXZpZXcuc3JjID0gXCJcIjtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
