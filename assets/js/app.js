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
        $('.profile__modals-presentation, .profile__modals').css("display", "none");
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

    let $dial = $(".dial");

    $dial.knob({
        'min': 0,
        'max': 10,
        'rotation': "anticlockwise",
        'release': function (v) {
            let color;
            let dataHigh = $dial.data("high");
            let dataLow = $dial.data("low");
            if (v <= dataLow) {
                color = '#E72E36';
            } else if (v < dataHigh) {
                color = '#F5913B';
            } else {
                color = '#009639';
            }
            this.$.trigger('configure', {
                "fgColor": color,
                "inputColor": color
            });
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

function checkLength() {
    let $comment = $('.participant__assessment-input'),
        $btnMentor = $('#btnMentor');

    $btnMentor.toggleClass('btn--active', $comment.val().length !== 0); // preferable
};

function checkForm() {
    let $btnAuth = $('.form__auth-btn'),
        $authInputs = $('.form__login, .form__password');
    $btnAuth.toggleClass('btn--white', $authInputs.val().length !== 0); // preferable
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAvLyBmaWx0ZXIgZHJvcGRvd25cclxuICAgIGxldCAkZHJvcGRvd24gPSAkKCcuZmlsdGVyX19kcm9wZG93bicpLFxyXG4gICAgICAgICRmaWx0ZXIgPSAkKCcubGlzdF9fZmlsdGVyJyksXHJcbiAgICAgICAgJG92ZXJsYXlNZW50b3IgPSAkKCcubWVudG9yX19vdmVybGF5JyksXHJcbiAgICAgICAgJGZpbHRlckljb24gPSAkKCcubGlzdF9fZmlsdGVyJyk7XHJcblxyXG4gICAgJGZpbHRlci5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdG9nZ2xlRmlsdGVyKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkb3ZlcmxheU1lbnRvci5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdG9nZ2xlRmlsdGVyKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiB0b2dnbGVGaWx0ZXIoKSB7XHJcbiAgICAgICAgJG92ZXJsYXlNZW50b3IudG9nZ2xlQ2xhc3MoJ3Nob3duJyk7XHJcbiAgICAgICAgJGRyb3Bkb3duLnRvZ2dsZUNsYXNzKFwiZmlsdGVyX19kcm9wZG93bi0tYWN0aXZlXCIpO1xyXG4gICAgICAgICRmaWx0ZXIudG9nZ2xlQ2xhc3MoXCJsaXN0X19maWx0ZXItLWFjdGl2ZVwiKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gcG9wdXBzXHJcblxyXG4gICAgbGV0ICRwcm9maWxlSXRlbSA9ICQoJy5wcm9maWxlX19pdGVtJyksXHJcbiAgICAgICAgJGJyaWVmaW5nID0gJCgnI2JyaWVmaW5nJyksXHJcbiAgICAgICAgJHByZXNlbnRhdGlvbiA9ICQoJyNwcmVzZW50YXRpb24nKSxcclxuICAgICAgICAkZmluYWxzID0gJCgnI2ZpbmFscycpLFxyXG4gICAgICAgICRvdmVybGF5ID0gJCgnLnByb2ZpbGVfX21vZGFscy1vdmVybGF5JyksXHJcbiAgICAgICAgJG1vZGFsX2JyaWVmaW5nID0gJCgnLnByb2ZpbGVfX21vZGFscycpLFxyXG4gICAgICAgICRtb2RhbF9wcmVzZW50YXRpb24gPSAkKCcucHJvZmlsZV9fbW9kYWxzLXByZXNlbnRhdGlvbicpLFxyXG4gICAgICAgICRtb2RhbF9mYWlsID0gJCgnLnByb2ZpbGVfX21vZGFscy1mYWlsJyksXHJcbiAgICAgICAgJGNyb3NzID0gJCgnLnByb2ZpbGVfX21vZGFsLWNyb3NzJyksXHJcbiAgICAgICAgJHdyYXBwZXIgPSAkKCcud3JhcHBlcicpO1xyXG5cclxuICAgICRwcm9maWxlSXRlbS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJG92ZXJsYXkuYWRkQ2xhc3MoJ3Byb2ZpbGVfX21vZGFscy1vdmVybGF5LS1hY3RpdmUnKTtcclxuICAgICAgICAkd3JhcHBlci5hZGRDbGFzcygnYmx1cicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJGJyaWVmaW5nLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkbW9kYWxfYnJpZWZpbmcuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJHByZXNlbnRhdGlvbi5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJG1vZGFsX3ByZXNlbnRhdGlvbi5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyAkZmluYWxzLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgIC8vICAgICAkbW9kYWxfJGZpbmFscy5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICAkY3Jvc3Mub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJlbW92ZU1vZGFscygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlTW9kYWxzKCkge1xyXG4gICAgICAgICQoJ1tkYXRhLW1vZGFsXScpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgICAgICRvdmVybGF5LnJlbW92ZUNsYXNzKFwicHJvZmlsZV9fbW9kYWxzLW92ZXJsYXktLWFjdGl2ZVwiKTtcclxuICAgICAgICAkd3JhcHBlci5yZW1vdmVDbGFzcygnYmx1cicpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBXaGVuIHRoZSB1c2VyIGNsaWNrcyBhbnl3aGVyZSBvdXRzaWRlIG9mIHRoZSBtb2RhbCwgY2xvc2UgaXRcclxuICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbCcpO1xyXG4gICAgd2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09IG1vZGFsKSB7XHJcbiAgICAgICAgICAgIHJlbW92ZU1vZGFscygpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIHNob3dGYWlsKCkge1xyXG4gICAgICAgICRtb2RhbF9mYWlsLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgIH07XHJcblxyXG4gICAgJCgnLnByb2ZpbGVfX2l0ZW0tLWZhaWxlZCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcucHJvZmlsZV9fbW9kYWxzLXByZXNlbnRhdGlvbiwgLnByb2ZpbGVfX21vZGFscycpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgICAgIHNob3dGYWlsKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBpdGVtcycgYmFja2dyb3VuZHNcclxuXHJcbiAgICBpZiAoJGJyaWVmaW5nLmlzKCcucHJvZmlsZV9faXRlbS0tYWN0aXZlJykpIHtcclxuICAgICAgICAkYnJpZWZpbmcuYWRkQ2xhc3MoJ3Byb2ZpbGVfX2l0ZW0taWNvbi0taWRlYS13aGl0ZScpXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCRmaW5hbHMuaXMoJy5wcm9maWxlX19pdGVtLS1hY3RpdmUnKSkge1xyXG4gICAgICAgICRmaW5hbHMuYWRkQ2xhc3MoJ3Byb2ZpbGVfX2l0ZW0taWNvbi0tZmluYWxzLWFjdGl2ZScpXHJcbiAgICB9IGVsc2UgaWYgKCRmaW5hbHMuaXMoJy5wcm9maWxlX19pdGVtLS1zdWNjZXNzJykpIHtcclxuICAgICAgICAkZmluYWxzLmFkZENsYXNzKCdwcm9maWxlX19pdGVtLWljb24tLWZpbmFscy1zdWNjZXNzJylcclxuICAgIH1cclxuXHJcbiAgICBpZiAoJHByZXNlbnRhdGlvbi5pcygnLnByb2ZpbGVfX2l0ZW0tLWFjdGl2ZScpKSB7XHJcbiAgICAgICAgJHByZXNlbnRhdGlvbi5hZGRDbGFzcygncHJvZmlsZV9faXRlbS1pY29uLS1wcmVzZW50YXRpb24tYWN0aXZlJylcclxuICAgIH0gZWxzZSBpZiAoJHByZXNlbnRhdGlvbi5pcygnLnByb2ZpbGVfX2l0ZW0tLXN1Y2Nlc3MnKSkge1xyXG4gICAgICAgICRwcmVzZW50YXRpb24uYWRkQ2xhc3MoJ3Byb2ZpbGVfX2l0ZW0taWNvbi0tcHJlc2VudGF0aW9uLXN1Y2Nlc3MnKVxyXG4gICAgfVxyXG4gICAgLy8gcGFydGljaXBhbnQgbGlzdCBcclxuXHJcbiAgICBsZXQgJHBhcnRpY2lwYW50ID0gJCgnLnBhcnRpY2lwYW50Jyk7XHJcblxyXG4gICAgJHBhcnRpY2lwYW50Lm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwicGFydGljaXBhbnQtLWFjdGl2ZVwiKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKFwicGFydGljaXBhbnQtLWFjdGl2ZVwiKTtcclxuICAgIH0pXHJcbiAgICAvLyBqUXVlcnkgS25vYlxyXG5cclxuICAgIGxldCAkZGlhbCA9ICQoXCIuZGlhbFwiKTtcclxuXHJcbiAgICAkZGlhbC5rbm9iKHtcclxuICAgICAgICAnbWluJzogMCxcclxuICAgICAgICAnbWF4JzogMTAsXHJcbiAgICAgICAgJ3JvdGF0aW9uJzogXCJhbnRpY2xvY2t3aXNlXCIsXHJcbiAgICAgICAgJ3JlbGVhc2UnOiBmdW5jdGlvbiAodikge1xyXG4gICAgICAgICAgICBsZXQgY29sb3I7XHJcbiAgICAgICAgICAgIGxldCBkYXRhSGlnaCA9ICRkaWFsLmRhdGEoXCJoaWdoXCIpO1xyXG4gICAgICAgICAgICBsZXQgZGF0YUxvdyA9ICRkaWFsLmRhdGEoXCJsb3dcIik7XHJcbiAgICAgICAgICAgIGlmICh2IDw9IGRhdGFMb3cpIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yID0gJyNFNzJFMzYnO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHYgPCBkYXRhSGlnaCkge1xyXG4gICAgICAgICAgICAgICAgY29sb3IgPSAnI0Y1OTEzQic7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvciA9ICcjMDA5NjM5JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLiQudHJpZ2dlcignY29uZmlndXJlJywge1xyXG4gICAgICAgICAgICAgICAgXCJmZ0NvbG9yXCI6IGNvbG9yLFxyXG4gICAgICAgICAgICAgICAgXCJpbnB1dENvbG9yXCI6IGNvbG9yXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuLy8gcG9wdXBzIGZpbGVzXHJcblxyXG5sZXQgJGlucHV0TmFtZSA9ICQoJy5wcm9maWxlX19hdHRhY2htZW50cy1pbnB1dCcpLFxyXG4gICAgJHRoaXMgPSAkKHRoaXMpLFxyXG4gICAgJGRvY3hQcmVzZW50YXRpb24gPSAkKCcjZG9jeFByZXNlbnRhdGlvbicpLFxyXG4gICAgJHBwdHggPSAkKCcjcHB0eCcpLFxyXG4gICAgJGRvY3ggPSAkKCcjZG9jeCcpLFxyXG4gICAgJGltYWdlID0gJCgnI2ltYWdlJyksXHJcbiAgICAkbGFiZWxEb2N4ID0gJCgnI2xhYmVsRG9jeCcpLFxyXG4gICAgJGxhYmVsSW1hZ2UgPSAkKCcjbGFiZWxJbWFnZScpLFxyXG4gICAgJGxhYmVsUHJlc2VudGF0aW9uID0gJCgnI2xhYmVsUHJlc2VudGF0aW9uJyksXHJcbiAgICAkbGFiZWxEZXNjID0gJCgnI2xhYmVsRGVzYycpLFxyXG4gICAgJGF0dGNoQnRuID0gJCgnLnByb2ZpbGVfX2F0dGFjaG1lbnRzLWJ0bicpO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZURvY3goKSB7XHJcbiAgICAkZG9jeC5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAkZG9jeC5hZGRDbGFzcygnc2hvdycpO1xyXG4gICAgJGxhYmVsRG9jeC5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VJbWFnZSgpIHtcclxuICAgICRpbWFnZS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAkaW1hZ2UuYWRkQ2xhc3MoJ3Nob3cnKTtcclxuICAgICRsYWJlbEltYWdlLmFkZENsYXNzKCdoaWRkZW4nKTtcclxuICAgICRhdHRjaEJ0bi5hZGRDbGFzcygnYnRuLS1hY3RpdmUnKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNoYW5nZURlc2MoKSB7XHJcbiAgICAkZG9jeFByZXNlbnRhdGlvbi5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAkZG9jeFByZXNlbnRhdGlvbi5hZGRDbGFzcygnc2hvdycpO1xyXG4gICAgJGxhYmVsRGVzYy5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VQcmVzZW50YXRpb24oKSB7XHJcbiAgICAkcHB0eC5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAkcHB0eC5hZGRDbGFzcygnc2hvdycpO1xyXG4gICAgJGxhYmVsUHJlc2VudGF0aW9uLmFkZENsYXNzKCdoaWRkZW4nKTtcclxuICAgICRhdHRjaEJ0bi5hZGRDbGFzcygnYnRuLS1hY3RpdmUnKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIHByZXZpZXdGaWxlKCkge1xyXG5cclxuICAgIGxldCBwcmV2aWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ltYWdlJyk7XHJcbiAgICBsZXQgZmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbWdJbnB1dCcpLmZpbGVzWzBdO1xyXG4gICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcblxyXG4gICAgcmVhZGVyLm9ubG9hZGVuZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBwcmV2aWV3LnNyYyA9IHJlYWRlci5yZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGZpbGUpIHtcclxuICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcHJldmlldy5zcmMgPSBcIlwiO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gY2hlY2tMZW5ndGgoKSB7XHJcbiAgICBsZXQgJGNvbW1lbnQgPSAkKCcucGFydGljaXBhbnRfX2Fzc2Vzc21lbnQtaW5wdXQnKSxcclxuICAgICAgICAkYnRuTWVudG9yID0gJCgnI2J0bk1lbnRvcicpO1xyXG5cclxuICAgICRidG5NZW50b3IudG9nZ2xlQ2xhc3MoJ2J0bi0tYWN0aXZlJywgJGNvbW1lbnQudmFsKCkubGVuZ3RoICE9PSAwKTsgLy8gcHJlZmVyYWJsZVxyXG59O1xyXG5cclxuZnVuY3Rpb24gY2hlY2tGb3JtKCkge1xyXG4gICAgbGV0ICRidG5BdXRoID0gJCgnLmZvcm1fX2F1dGgtYnRuJyksXHJcbiAgICAgICAgJGF1dGhJbnB1dHMgPSAkKCcuZm9ybV9fbG9naW4sIC5mb3JtX19wYXNzd29yZCcpO1xyXG4gICAgJGJ0bkF1dGgudG9nZ2xlQ2xhc3MoJ2J0bi0td2hpdGUnLCAkYXV0aElucHV0cy52YWwoKS5sZW5ndGggIT09IDApOyAvLyBwcmVmZXJhYmxlXHJcbn07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
