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
    $dial.on('change', function (v) {

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAvLyBmaWx0ZXIgZHJvcGRvd25cclxuICAgIGxldCAkZHJvcGRvd24gPSAkKCcuZmlsdGVyX19kcm9wZG93bicpLFxyXG4gICAgICAgICRmaWx0ZXIgPSAkKCcubGlzdF9fZmlsdGVyJyksXHJcbiAgICAgICAgJG92ZXJsYXlNZW50b3IgPSAkKCcubWVudG9yX19vdmVybGF5JyksXHJcbiAgICAgICAgJGZpbHRlckljb24gPSAkKCcubGlzdF9fZmlsdGVyJyk7XHJcblxyXG4gICAgJGZpbHRlci5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdG9nZ2xlRmlsdGVyKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkb3ZlcmxheU1lbnRvci5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdG9nZ2xlRmlsdGVyKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiB0b2dnbGVGaWx0ZXIoKSB7XHJcbiAgICAgICAgJG92ZXJsYXlNZW50b3IudG9nZ2xlQ2xhc3MoJ3Nob3duJyk7XHJcbiAgICAgICAgJGRyb3Bkb3duLnRvZ2dsZUNsYXNzKFwiZmlsdGVyX19kcm9wZG93bi0tYWN0aXZlXCIpO1xyXG4gICAgICAgICRmaWx0ZXIudG9nZ2xlQ2xhc3MoXCJsaXN0X19maWx0ZXItLWFjdGl2ZVwiKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gcG9wdXBzXHJcblxyXG4gICAgbGV0ICRwcm9maWxlSXRlbSA9ICQoJy5wcm9maWxlX19pdGVtJyksXHJcbiAgICAgICAgJGJyaWVmaW5nID0gJCgnI2JyaWVmaW5nJyksXHJcbiAgICAgICAgJHByZXNlbnRhdGlvbiA9ICQoJyNwcmVzZW50YXRpb24nKSxcclxuICAgICAgICAkZmluYWxzID0gJCgnI2ZpbmFscycpLFxyXG4gICAgICAgICRvdmVybGF5ID0gJCgnLnByb2ZpbGVfX21vZGFscy1vdmVybGF5JyksXHJcbiAgICAgICAgJG1vZGFsX2JyaWVmaW5nID0gJCgnLnByb2ZpbGVfX21vZGFscycpLFxyXG4gICAgICAgICRtb2RhbF9wcmVzZW50YXRpb24gPSAkKCcucHJvZmlsZV9fbW9kYWxzLXByZXNlbnRhdGlvbicpLFxyXG4gICAgICAgICRtb2RhbF9mYWlsID0gJCgnLnByb2ZpbGVfX21vZGFscy1mYWlsJyksXHJcbiAgICAgICAgJGNyb3NzID0gJCgnLnByb2ZpbGVfX21vZGFsLWNyb3NzJyksXHJcbiAgICAgICAgJHdyYXBwZXIgPSAkKCcud3JhcHBlcicpO1xyXG5cclxuICAgICRwcm9maWxlSXRlbS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJG92ZXJsYXkuYWRkQ2xhc3MoJ3Byb2ZpbGVfX21vZGFscy1vdmVybGF5LS1hY3RpdmUnKTtcclxuICAgICAgICAkd3JhcHBlci5hZGRDbGFzcygnYmx1cicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJGJyaWVmaW5nLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkbW9kYWxfYnJpZWZpbmcuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJHByZXNlbnRhdGlvbi5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJG1vZGFsX3ByZXNlbnRhdGlvbi5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyAkZmluYWxzLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgIC8vICAgICAkbW9kYWxfJGZpbmFscy5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICAkY3Jvc3Mub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJlbW92ZU1vZGFscygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlTW9kYWxzKCkge1xyXG4gICAgICAgICQoJ1tkYXRhLW1vZGFsXScpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgICAgICRvdmVybGF5LnJlbW92ZUNsYXNzKFwicHJvZmlsZV9fbW9kYWxzLW92ZXJsYXktLWFjdGl2ZVwiKTtcclxuICAgICAgICAkd3JhcHBlci5yZW1vdmVDbGFzcygnYmx1cicpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBXaGVuIHRoZSB1c2VyIGNsaWNrcyBhbnl3aGVyZSBvdXRzaWRlIG9mIHRoZSBtb2RhbCwgY2xvc2UgaXRcclxuICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbCcpO1xyXG4gICAgd2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09IG1vZGFsKSB7XHJcbiAgICAgICAgICAgIHJlbW92ZU1vZGFscygpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBzaG93RmFpbCgpIHtcclxuICAgICAgICAkbW9kYWxfZmFpbC5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICB9O1xyXG5cclxuICAgICQoJy5wcm9maWxlX19pdGVtLS1mYWlsZWQnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnLnByb2ZpbGVfX21vZGFscy1wcmVzZW50YXRpb24sIC5wcm9maWxlX19tb2RhbHMnKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAgICAgICBzaG93RmFpbCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gaXRlbXMnIGJhY2tncm91bmRzXHJcblxyXG4gICAgaWYgKCRicmllZmluZy5pcygnLnByb2ZpbGVfX2l0ZW0tLWFjdGl2ZScpKSB7XHJcbiAgICAgICAgJGJyaWVmaW5nLmFkZENsYXNzKCdwcm9maWxlX19pdGVtLWljb24tLWlkZWEtd2hpdGUnKVxyXG4gICAgfVxyXG5cclxuICAgIGlmICgkZmluYWxzLmlzKCcucHJvZmlsZV9faXRlbS0tYWN0aXZlJykpIHtcclxuICAgICAgICAkZmluYWxzLmFkZENsYXNzKCdwcm9maWxlX19pdGVtLWljb24tLWZpbmFscy1hY3RpdmUnKVxyXG4gICAgfSBlbHNlIGlmICgkZmluYWxzLmlzKCcucHJvZmlsZV9faXRlbS0tc3VjY2VzcycpKSB7XHJcbiAgICAgICAgJGZpbmFscy5hZGRDbGFzcygncHJvZmlsZV9faXRlbS1pY29uLS1maW5hbHMtc3VjY2VzcycpXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCRwcmVzZW50YXRpb24uaXMoJy5wcm9maWxlX19pdGVtLS1hY3RpdmUnKSkge1xyXG4gICAgICAgICRwcmVzZW50YXRpb24uYWRkQ2xhc3MoJ3Byb2ZpbGVfX2l0ZW0taWNvbi0tcHJlc2VudGF0aW9uLWFjdGl2ZScpXHJcbiAgICB9IGVsc2UgaWYgKCRwcmVzZW50YXRpb24uaXMoJy5wcm9maWxlX19pdGVtLS1zdWNjZXNzJykpIHtcclxuICAgICAgICAkcHJlc2VudGF0aW9uLmFkZENsYXNzKCdwcm9maWxlX19pdGVtLWljb24tLXByZXNlbnRhdGlvbi1zdWNjZXNzJylcclxuICAgIH1cclxuICAgIC8vIHBhcnRpY2lwYW50IGxpc3QgXHJcblxyXG4gICAgbGV0ICRwYXJ0aWNpcGFudCA9ICQoJy5wYXJ0aWNpcGFudCcpO1xyXG5cclxuICAgICRwYXJ0aWNpcGFudC5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcInBhcnRpY2lwYW50LS1hY3RpdmVcIikuc2libGluZ3MoKS5yZW1vdmVDbGFzcyhcInBhcnRpY2lwYW50LS1hY3RpdmVcIik7XHJcbiAgICB9KVxyXG4gICAgLy8galF1ZXJ5IEtub2JcclxuXHJcbiAgICBsZXQgJGRpYWwgPSAkKFwiLmRpYWxcIik7XHJcblxyXG5cclxuICAgICRkaWFsLmtub2Ioe1xyXG4gICAgICAgICdtaW4nOiAwLFxyXG4gICAgICAgICdtYXgnOiAxMCxcclxuICAgICAgICAncm90YXRpb24nOiBcImFudGljbG9ja3dpc2VcIixcclxuICAgICAgICAncmVsZWFzZSc6IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgICAgIGxldCBjb2xvcjtcclxuICAgICAgICAgICAgbGV0IGRhdGFIaWdoID0gJGRpYWwuZGF0YShcImhpZ2hcIik7XHJcbiAgICAgICAgICAgIGxldCBkYXRhTG93ID0gJGRpYWwuZGF0YShcImxvd1wiKTtcclxuICAgICAgICAgICAgaWYgKHYgPD0gZGF0YUxvdykge1xyXG4gICAgICAgICAgICAgICAgY29sb3IgPSAnI0U3MkUzNic7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodiA8IGRhdGFIaWdoKSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvciA9ICcjRjU5MTNCJztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yID0gJyMwMDk2MzknO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuJC50cmlnZ2VyKCdjb25maWd1cmUnLCB7XHJcbiAgICAgICAgICAgICAgICBcImZnQ29sb3JcIjogY29sb3IsXHJcbiAgICAgICAgICAgICAgICBcImlucHV0Q29sb3JcIjogY29sb3JcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAkZGlhbC5vbignY2hhbmdlJywgZnVuY3Rpb24gKHYpIHtcclxuXHJcbiAgICB9KTtcclxufSk7XHJcbi8vIHBvcHVwcyBmaWxlc1xyXG5cclxubGV0ICRpbnB1dE5hbWUgPSAkKCcucHJvZmlsZV9fYXR0YWNobWVudHMtaW5wdXQnKSxcclxuICAgICR0aGlzID0gJCh0aGlzKSxcclxuICAgICRkb2N4UHJlc2VudGF0aW9uID0gJCgnI2RvY3hQcmVzZW50YXRpb24nKSxcclxuICAgICRwcHR4ID0gJCgnI3BwdHgnKSxcclxuICAgICRkb2N4ID0gJCgnI2RvY3gnKSxcclxuICAgICRpbWFnZSA9ICQoJyNpbWFnZScpLFxyXG4gICAgJGxhYmVsRG9jeCA9ICQoJyNsYWJlbERvY3gnKSxcclxuICAgICRsYWJlbEltYWdlID0gJCgnI2xhYmVsSW1hZ2UnKSxcclxuICAgICRsYWJlbFByZXNlbnRhdGlvbiA9ICQoJyNsYWJlbFByZXNlbnRhdGlvbicpLFxyXG4gICAgJGxhYmVsRGVzYyA9ICQoJyNsYWJlbERlc2MnKSxcclxuICAgICRhdHRjaEJ0biA9ICQoJy5wcm9maWxlX19hdHRhY2htZW50cy1idG4nKTtcclxuXHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VEb2N4KCkge1xyXG4gICAgJGRvY3gucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgJGRvY3guYWRkQ2xhc3MoJ3Nob3cnKTtcclxuICAgICRsYWJlbERvY3guYWRkQ2xhc3MoJ2hpZGRlbicpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gY2hhbmdlSW1hZ2UoKSB7XHJcbiAgICAkaW1hZ2UucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgJGltYWdlLmFkZENsYXNzKCdzaG93Jyk7XHJcbiAgICAkbGFiZWxJbWFnZS5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAkYXR0Y2hCdG4uYWRkQ2xhc3MoJ2J0bi0tYWN0aXZlJyk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VEZXNjKCkge1xyXG4gICAgJGRvY3hQcmVzZW50YXRpb24ucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgJGRvY3hQcmVzZW50YXRpb24uYWRkQ2xhc3MoJ3Nob3cnKTtcclxuICAgICRsYWJlbERlc2MuYWRkQ2xhc3MoJ2hpZGRlbicpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gY2hhbmdlUHJlc2VudGF0aW9uKCkge1xyXG4gICAgJHBwdHgucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgJHBwdHguYWRkQ2xhc3MoJ3Nob3cnKTtcclxuICAgICRsYWJlbFByZXNlbnRhdGlvbi5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAkYXR0Y2hCdG4uYWRkQ2xhc3MoJ2J0bi0tYWN0aXZlJyk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBwcmV2aWV3RmlsZSgpIHtcclxuXHJcbiAgICBsZXQgcHJldmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbWFnZScpO1xyXG4gICAgbGV0IGZpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW1nSW5wdXQnKS5maWxlc1swXTtcclxuICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG5cclxuICAgIHJlYWRlci5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcHJldmlldy5zcmMgPSByZWFkZXIucmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChmaWxlKSB7XHJcbiAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHByZXZpZXcuc3JjID0gXCJcIjtcclxuICAgIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIGNoZWNrTGVuZ3RoKCkge1xyXG4gICAgbGV0ICRjb21tZW50ID0gJCgnLnBhcnRpY2lwYW50X19hc3Nlc3NtZW50LWlucHV0JyksXHJcbiAgICAgICAgJGJ0bk1lbnRvciA9ICQoJyNidG5NZW50b3InKTtcclxuICAgICRidG5NZW50b3IudG9nZ2xlQ2xhc3MoJ2J0bi0tYWN0aXZlJywgJGNvbW1lbnQudmFsKCkubGVuZ3RoICE9PSAwKTsgLy8gcHJlZmVyYWJsZVxyXG5cclxufTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
