"use strict";

$(document).ready(function () {

    // filter dropdown
    let $dropdown = $('.filter__dropdown'),
        $filter = $('.list__filter'),
        $overlayMentor = $('.mentor__overlay'),
        $filterIcon = $('.list__filter');

    $filter.click(function () {
        toggleFilter();
    });

    $overlayMentor.on('click', function () {
        toggleFilter();
    });

    function toggleFilter() {
        $overlayMentor.toggleClass('shown');
        $dropdown.toggleClass("filter__dropdown--active");
        $filter.toggleClass("list__filter--active");
    }


    // popups

    let $profileItem = $('.profile__item'),
        $briefing = $('#briefing'),
        $presentation = $('#presentation'),
        $finals = $('#finals'),
        $overlay = $('.profile__modals-overlay'),
        $modal_briefing = $('.profile__modals'),
        $modal_presentation = $('.profile__modals-presentation'),
        $modal_fail = $('.profile__modals-fail'),
        $cross = $('.profile__modal-cross'),
        $wrapper = $('.wrapper');

    $profileItem.on('click', function () {
        $overlay.addClass('profile__modals-overlay--active');
        $wrapper.addClass('blur');
    });

    $briefing.on('click', function () {
        $modal_briefing.css("display", "block");
    });

    $presentation.on('click', function () {
        $modal_presentation.css("display", "block");
    });

    // $finals.on('click', function () {
    //     $modal_$finals.css("display", "block");
    // });

    $cross.on('click', function () {
        removeModals();
    });

    function removeModals() {
        $('[data-modal]').css("display", "none");
        $overlay.removeClass("profile__modals-overlay--active");
        $wrapper.removeClass('blur');
    };

    // When the user clicks anywhere outside of the modal, close it
    let modal = document.getElementById('modal');
    window.onclick = function (event) {
        if (event.target == modal) {
            removeModals();
        }
    };

    function showFail() {
        $modal_fail.css("display", "block");
    };

    $('.profile__item--failed').on('click', function () {
        showFail();
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
    // participant list 

    let $participant = $('.participant');

    $participant.on('click', function () {
        $(this).addClass("participant--active").siblings().removeClass("participant--active");
    })

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
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgLy8gZmlsdGVyIGRyb3Bkb3duXHJcbiAgICBsZXQgJGRyb3Bkb3duID0gJCgnLmZpbHRlcl9fZHJvcGRvd24nKSxcclxuICAgICAgICAkZmlsdGVyID0gJCgnLmxpc3RfX2ZpbHRlcicpLFxyXG4gICAgICAgICRvdmVybGF5TWVudG9yID0gJCgnLm1lbnRvcl9fb3ZlcmxheScpLFxyXG4gICAgICAgICRmaWx0ZXJJY29uID0gJCgnLmxpc3RfX2ZpbHRlcicpO1xyXG5cclxuICAgICRmaWx0ZXIuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRvZ2dsZUZpbHRlcigpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJG92ZXJsYXlNZW50b3Iub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRvZ2dsZUZpbHRlcigpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gdG9nZ2xlRmlsdGVyKCkge1xyXG4gICAgICAgICRvdmVybGF5TWVudG9yLnRvZ2dsZUNsYXNzKCdzaG93bicpO1xyXG4gICAgICAgICRkcm9wZG93bi50b2dnbGVDbGFzcyhcImZpbHRlcl9fZHJvcGRvd24tLWFjdGl2ZVwiKTtcclxuICAgICAgICAkZmlsdGVyLnRvZ2dsZUNsYXNzKFwibGlzdF9fZmlsdGVyLS1hY3RpdmVcIik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIHBvcHVwc1xyXG5cclxuICAgIGxldCAkcHJvZmlsZUl0ZW0gPSAkKCcucHJvZmlsZV9faXRlbScpLFxyXG4gICAgICAgICRicmllZmluZyA9ICQoJyNicmllZmluZycpLFxyXG4gICAgICAgICRwcmVzZW50YXRpb24gPSAkKCcjcHJlc2VudGF0aW9uJyksXHJcbiAgICAgICAgJGZpbmFscyA9ICQoJyNmaW5hbHMnKSxcclxuICAgICAgICAkb3ZlcmxheSA9ICQoJy5wcm9maWxlX19tb2RhbHMtb3ZlcmxheScpLFxyXG4gICAgICAgICRtb2RhbF9icmllZmluZyA9ICQoJy5wcm9maWxlX19tb2RhbHMnKSxcclxuICAgICAgICAkbW9kYWxfcHJlc2VudGF0aW9uID0gJCgnLnByb2ZpbGVfX21vZGFscy1wcmVzZW50YXRpb24nKSxcclxuICAgICAgICAkbW9kYWxfZmFpbCA9ICQoJy5wcm9maWxlX19tb2RhbHMtZmFpbCcpLFxyXG4gICAgICAgICRjcm9zcyA9ICQoJy5wcm9maWxlX19tb2RhbC1jcm9zcycpLFxyXG4gICAgICAgICR3cmFwcGVyID0gJCgnLndyYXBwZXInKTtcclxuXHJcbiAgICAkcHJvZmlsZUl0ZW0ub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRvdmVybGF5LmFkZENsYXNzKCdwcm9maWxlX19tb2RhbHMtb3ZlcmxheS0tYWN0aXZlJyk7XHJcbiAgICAgICAgJHdyYXBwZXIuYWRkQ2xhc3MoJ2JsdXInKTtcclxuICAgIH0pO1xyXG5cclxuICAgICRicmllZmluZy5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJG1vZGFsX2JyaWVmaW5nLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgIH0pO1xyXG5cclxuICAgICRwcmVzZW50YXRpb24ub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRtb2RhbF9wcmVzZW50YXRpb24uY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gJGZpbmFscy5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyAgICAgJG1vZGFsXyRmaW5hbHMuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgJGNyb3NzLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZW1vdmVNb2RhbHMoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZU1vZGFscygpIHtcclxuICAgICAgICAkKCdbZGF0YS1tb2RhbF0nKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAgICAgICAkb3ZlcmxheS5yZW1vdmVDbGFzcyhcInByb2ZpbGVfX21vZGFscy1vdmVybGF5LS1hY3RpdmVcIik7XHJcbiAgICAgICAgJHdyYXBwZXIucmVtb3ZlQ2xhc3MoJ2JsdXInKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gV2hlbiB0aGUgdXNlciBjbGlja3MgYW55d2hlcmUgb3V0c2lkZSBvZiB0aGUgbW9kYWwsIGNsb3NlIGl0XHJcbiAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwnKTtcclxuICAgIHdpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PSBtb2RhbCkge1xyXG4gICAgICAgICAgICByZW1vdmVNb2RhbHMoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIHNob3dGYWlsKCkge1xyXG4gICAgICAgICRtb2RhbF9mYWlsLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgIH07XHJcblxyXG4gICAgJCgnLnByb2ZpbGVfX2l0ZW0tLWZhaWxlZCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzaG93RmFpbCgpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIC8vIGl0ZW1zJyBiYWNrZ3JvdW5kc1xyXG5cclxuICAgIGlmICgkYnJpZWZpbmcuaXMoJy5wcm9maWxlX19pdGVtLS1hY3RpdmUnKSkge1xyXG4gICAgICAgICRicmllZmluZy5hZGRDbGFzcygncHJvZmlsZV9faXRlbS1pY29uLS1pZGVhLXdoaXRlJylcclxuICAgIH1cclxuXHJcbiAgICBpZiAoJGZpbmFscy5pcygnLnByb2ZpbGVfX2l0ZW0tLWFjdGl2ZScpKSB7XHJcbiAgICAgICAgJGZpbmFscy5hZGRDbGFzcygncHJvZmlsZV9faXRlbS1pY29uLS1maW5hbHMtYWN0aXZlJylcclxuICAgIH0gZWxzZSBpZiAoJGZpbmFscy5pcygnLnByb2ZpbGVfX2l0ZW0tLXN1Y2Nlc3MnKSkge1xyXG4gICAgICAgICRmaW5hbHMuYWRkQ2xhc3MoJ3Byb2ZpbGVfX2l0ZW0taWNvbi0tZmluYWxzLXN1Y2Nlc3MnKVxyXG4gICAgfVxyXG5cclxuICAgIGlmICgkcHJlc2VudGF0aW9uLmlzKCcucHJvZmlsZV9faXRlbS0tYWN0aXZlJykpIHtcclxuICAgICAgICAkcHJlc2VudGF0aW9uLmFkZENsYXNzKCdwcm9maWxlX19pdGVtLWljb24tLXByZXNlbnRhdGlvbi1hY3RpdmUnKVxyXG4gICAgfSBlbHNlIGlmICgkcHJlc2VudGF0aW9uLmlzKCcucHJvZmlsZV9faXRlbS0tc3VjY2VzcycpKSB7XHJcbiAgICAgICAgJHByZXNlbnRhdGlvbi5hZGRDbGFzcygncHJvZmlsZV9faXRlbS1pY29uLS1wcmVzZW50YXRpb24tc3VjY2VzcycpXHJcbiAgICB9XHJcbiAgICAvLyBwYXJ0aWNpcGFudCBsaXN0IFxyXG5cclxuICAgIGxldCAkcGFydGljaXBhbnQgPSAkKCcucGFydGljaXBhbnQnKTtcclxuXHJcbiAgICAkcGFydGljaXBhbnQub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJwYXJ0aWNpcGFudC0tYWN0aXZlXCIpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoXCJwYXJ0aWNpcGFudC0tYWN0aXZlXCIpO1xyXG4gICAgfSlcclxuXHJcbiAgICAvLyBqUXVlcnkgS25vYlxyXG5cclxuICAgIC8vICQoXCIuZGlhbFwiKS5rbm9iKHtcclxuICAgIC8vICAgICAnbWluJzogMCxcclxuICAgIC8vICAgICAnbWF4JzogMTAsXHJcbiAgICAvLyAgICAgJ3JvdGF0aW9uJzogXCJhbnRpY2xvY2t3aXNlXCJcclxuICAgIC8vIH0pO1xyXG4gICAgbGV0ICRkaWFsID0gJChcIi5kaWFsXCIpO1xyXG4gICAgJGRpYWwua25vYih7XHJcbiAgICAgICAgJ21pbic6IDAsXHJcbiAgICAgICAgJ21heCc6IDEwLFxyXG4gICAgICAgICdyb3RhdGlvbic6IFwiYW50aWNsb2Nrd2lzZVwiLFxyXG4gICAgICAgICdjaGFuZ2UnOiBmdW5jdGlvbiAodikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh2KTtcclxuICAgICAgICAgICAgbGV0IGNvbG9yO1xyXG4gICAgICAgICAgICBpZiAodiA8PSA0KSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvciA9ICcjRTcyRTM2JztcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh2IDw9IDcpIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yID0gJyNGNTkxM0InO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29sb3IgPSAnIzAwOTYzOSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJGRpYWwudHJpZ2dlcihcclxuICAgICAgICAgICAgICAgICdjb25maWd1cmUnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJmZ0NvbG9yXCI6IGNvbG9yXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG59KTtcclxuLy8gcG9wdXBzIGZpbGVzXHJcblxyXG5sZXQgJGlucHV0TmFtZSA9ICQoJy5wcm9maWxlX19hdHRhY2htZW50cy1pbnB1dCcpLFxyXG4gICAgJHRoaXMgPSAkKHRoaXMpLFxyXG4gICAgJGRvY3hQcmVzZW50YXRpb24gPSAkKCcjZG9jeFByZXNlbnRhdGlvbicpLFxyXG4gICAgJHBwdHggPSAkKCcjcHB0eCcpLFxyXG4gICAgJGRvY3ggPSAkKCcjZG9jeCcpLFxyXG4gICAgJGltYWdlID0gJCgnI2ltYWdlJyksXHJcbiAgICAkbGFiZWxEb2N4ID0gJCgnI2xhYmVsRG9jeCcpLFxyXG4gICAgJGxhYmVsSW1hZ2UgPSAkKCcjbGFiZWxJbWFnZScpLFxyXG4gICAgJGxhYmVsUHJlc2VudGF0aW9uID0gJCgnI2xhYmVsUHJlc2VudGF0aW9uJyksXHJcbiAgICAkbGFiZWxEZXNjID0gJCgnI2xhYmVsRGVzYycpLFxyXG4gICAgJGF0dGNoQnRuID0gJCgnLnByb2ZpbGVfX2F0dGFjaG1lbnRzLWJ0bicpO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZURvY3goKSB7XHJcbiAgICAkZG9jeC5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAkZG9jeC5hZGRDbGFzcygnc2hvdycpO1xyXG4gICAgJGxhYmVsRG9jeC5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VJbWFnZSgpIHtcclxuICAgICRpbWFnZS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAkaW1hZ2UuYWRkQ2xhc3MoJ3Nob3cnKTtcclxuICAgICRsYWJlbEltYWdlLmFkZENsYXNzKCdoaWRkZW4nKTtcclxuICAgICRhdHRjaEJ0bi5hZGRDbGFzcygnYnRuLS1hY3RpdmUnKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNoYW5nZURlc2MoKSB7XHJcbiAgICAkZG9jeFByZXNlbnRhdGlvbi5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAkZG9jeFByZXNlbnRhdGlvbi5hZGRDbGFzcygnc2hvdycpO1xyXG4gICAgJGxhYmVsRGVzYy5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VQcmVzZW50YXRpb24oKSB7XHJcbiAgICAkcHB0eC5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAkcHB0eC5hZGRDbGFzcygnc2hvdycpO1xyXG4gICAgJGxhYmVsUHJlc2VudGF0aW9uLmFkZENsYXNzKCdoaWRkZW4nKTtcclxuICAgICRhdHRjaEJ0bi5hZGRDbGFzcygnYnRuLS1hY3RpdmUnKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIHByZXZpZXdGaWxlKCkge1xyXG5cclxuICAgIGxldCBwcmV2aWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ltYWdlJyk7XHJcbiAgICBsZXQgZmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbWdJbnB1dCcpLmZpbGVzWzBdO1xyXG4gICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcblxyXG4gICAgcmVhZGVyLm9ubG9hZGVuZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBwcmV2aWV3LnNyYyA9IHJlYWRlci5yZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGZpbGUpIHtcclxuICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcHJldmlldy5zcmMgPSBcIlwiO1xyXG4gICAgfVxyXG59OyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
