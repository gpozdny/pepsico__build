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
        $dropdown.toggleClass('filter__dropdown--active');
        $filter.toggleClass('list__filter--active');
    }


    // popups

    let $profileItem = $('.profile__item'),
        $interview = $('#interview'),
        $briefing = $('#briefing'),
        $presentation = $('#presentation'),
        $finals = $('#finals'),
        $overlay = $('.profile__modals-overlay'),
        $modal_briefing = $('.profile__modals'),
        $modal_presentation = $('.profile__modals-presentation'),
        $modal_fail = $('.profile__modals-fail'),
        $modal_deadline = $('.profile__modals-deadline'),
        $modal_finals = $('#finalsModal'),
        $modal_success = $('#successModal'),
        $placeholder = $('#placeholder'),
        $cross = $('.profile__modal-cross'),
        $btnClose = $('.btn-close'),
        $wrapper = $('.wrapper');

    // $profileItem.on('click', function () {
    //     $overlay.addClass('profile__modals-overlay--active');
    //     $wrapper.addClass('blur');
    // });

    // $briefing.on('click', function () {
    //     $modal_briefing.css("display", "block");
    // });

    // $presentation.on('click', function () {
    //     $modal_presentation.css("display", "block");
    // });

    // $finals.on('click', function () {
    //     $modal_$finals.css("display", "block");
    // });

    function addBlurredOverlay() {
        $overlay.addClass('profile__modals-overlay--active');
        $wrapper.addClass('blur');
    }

    $('[data-modal]').on('click', function () {
        let $this = $(this),
            $dataType = $this.data('modal');

        removeModals();
        addBlurredOverlay();

        console.log($dataType);

        switch ($dataType) {
            case 'add-brief':
                $modal_briefing.css("display", "block");
                break;
            case 'add-presentation':
                $modal_presentation.css("display", "block");
                break;
            case 'fail':
                $modal_fail.css("display", "block");
                break;
            case 'deadline':
                $modal_deadline.css("display", "block");
                break;
            case 'success':
                $modal_success.css("display", "block");
                break;
            case 'final':
                $modal_finals.css("display", "block");
                break;
        }

    });

    $cross.on('click', function () {
        removeModals();
    });

    $btnClose.on('click', function () {
        removeModals();
    });

    function removeModals() {
        $('[data-popup]').css("display", "none");
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

    // function showFail() {
    //     $modal_fail.css("display", "block");
    // };

    // function showDeadline() {
    //     $modal_deadline.css("display", "block");
    // }

    // $('.profile__item--fail').on('click', function () {
    //     $('.profile__modals-presentation, .profile__modals').css("display", "none");
    //     showFail();
    // });

    // $('.profile__item--deadline').on('click', function () {
    //     $('.profile__modals-presentation, .profile__modals').css("display", "none");
    //     showDeadline();
    // });

    // items' backgrounds
    if ($interview.is('.profile__item--description')) {
        $interview.addClass('profile__item-icon--interview-white')
    }

    if ($briefing.is('.profile__item--description')) {
        $briefing.addClass('profile__item-icon--idea-white')
    }

    if ($finals.is('.profile__item--description')) {
        $finals.addClass('profile__item-icon--finals-active')
    }

    if ($presentation.is('.profile__item--description')) {
        $presentation.addClass('profile__item-icon--presentation-active')
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
    // disable ENTER on input
    $dial.keypress(function (e) {
        if (e.which == 13) e.preventDefault();
    });

    // brief + presentation width ! crutch !
    let $projects = $('.participant-info__right');

    if ($projects.length == 1) {
        $projects.css("width", "50%");
    } else $projects.css("width", "25%");
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

// check forms

function validateProject() {
    let $doc = $('#docxInput'),
        $img = $('#imgInput'),
        $name = $('#projectName'),
        $btn = $('#submitProject');

    if ($doc.get(0).files.length !== 0 && $img.get(0).files.length !== 0 && $name.val().length !== 0) {
        $btn.addClass('btn--active');
    }
}

function validatePresent() {
    let $desc = $('#descInput'),
        $presentation = $('#presentInput'),
        $btnPresent = $('#submitPresent');

    if ($desc.get(0).files.length !== 0 && $presentation.get(0).files.length !== 0) {
        $btnPresent.addClass('btn--active');
    }
}

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIC8vIGZpbHRlciBkcm9wZG93blxyXG4gICAgbGV0ICRkcm9wZG93biA9ICQoJy5maWx0ZXJfX2Ryb3Bkb3duJyksXHJcbiAgICAgICAgJGZpbHRlciA9ICQoJy5saXN0X19maWx0ZXInKSxcclxuICAgICAgICAkb3ZlcmxheU1lbnRvciA9ICQoJy5tZW50b3JfX292ZXJsYXknKSxcclxuICAgICAgICAkZmlsdGVySWNvbiA9ICQoJy5saXN0X19maWx0ZXInKTtcclxuXHJcbiAgICAkZmlsdGVyLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0b2dnbGVGaWx0ZXIoKTtcclxuICAgIH0pO1xyXG5cclxuICAgICRvdmVybGF5TWVudG9yLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0b2dnbGVGaWx0ZXIoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIHRvZ2dsZUZpbHRlcigpIHtcclxuICAgICAgICAkb3ZlcmxheU1lbnRvci50b2dnbGVDbGFzcygnc2hvd24nKTtcclxuICAgICAgICAkZHJvcGRvd24udG9nZ2xlQ2xhc3MoJ2ZpbHRlcl9fZHJvcGRvd24tLWFjdGl2ZScpO1xyXG4gICAgICAgICRmaWx0ZXIudG9nZ2xlQ2xhc3MoJ2xpc3RfX2ZpbHRlci0tYWN0aXZlJyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIHBvcHVwc1xyXG5cclxuICAgIGxldCAkcHJvZmlsZUl0ZW0gPSAkKCcucHJvZmlsZV9faXRlbScpLFxyXG4gICAgICAgICRpbnRlcnZpZXcgPSAkKCcjaW50ZXJ2aWV3JyksXHJcbiAgICAgICAgJGJyaWVmaW5nID0gJCgnI2JyaWVmaW5nJyksXHJcbiAgICAgICAgJHByZXNlbnRhdGlvbiA9ICQoJyNwcmVzZW50YXRpb24nKSxcclxuICAgICAgICAkZmluYWxzID0gJCgnI2ZpbmFscycpLFxyXG4gICAgICAgICRvdmVybGF5ID0gJCgnLnByb2ZpbGVfX21vZGFscy1vdmVybGF5JyksXHJcbiAgICAgICAgJG1vZGFsX2JyaWVmaW5nID0gJCgnLnByb2ZpbGVfX21vZGFscycpLFxyXG4gICAgICAgICRtb2RhbF9wcmVzZW50YXRpb24gPSAkKCcucHJvZmlsZV9fbW9kYWxzLXByZXNlbnRhdGlvbicpLFxyXG4gICAgICAgICRtb2RhbF9mYWlsID0gJCgnLnByb2ZpbGVfX21vZGFscy1mYWlsJyksXHJcbiAgICAgICAgJG1vZGFsX2RlYWRsaW5lID0gJCgnLnByb2ZpbGVfX21vZGFscy1kZWFkbGluZScpLFxyXG4gICAgICAgICRtb2RhbF9maW5hbHMgPSAkKCcjZmluYWxzTW9kYWwnKSxcclxuICAgICAgICAkbW9kYWxfc3VjY2VzcyA9ICQoJyNzdWNjZXNzTW9kYWwnKSxcclxuICAgICAgICAkcGxhY2Vob2xkZXIgPSAkKCcjcGxhY2Vob2xkZXInKSxcclxuICAgICAgICAkY3Jvc3MgPSAkKCcucHJvZmlsZV9fbW9kYWwtY3Jvc3MnKSxcclxuICAgICAgICAkYnRuQ2xvc2UgPSAkKCcuYnRuLWNsb3NlJyksXHJcbiAgICAgICAgJHdyYXBwZXIgPSAkKCcud3JhcHBlcicpO1xyXG5cclxuICAgIC8vICRwcm9maWxlSXRlbS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyAgICAgJG92ZXJsYXkuYWRkQ2xhc3MoJ3Byb2ZpbGVfX21vZGFscy1vdmVybGF5LS1hY3RpdmUnKTtcclxuICAgIC8vICAgICAkd3JhcHBlci5hZGRDbGFzcygnYmx1cicpO1xyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgLy8gJGJyaWVmaW5nLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgIC8vICAgICAkbW9kYWxfYnJpZWZpbmcuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgLy8gJHByZXNlbnRhdGlvbi5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyAgICAgJG1vZGFsX3ByZXNlbnRhdGlvbi5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICAvLyAkZmluYWxzLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgIC8vICAgICAkbW9kYWxfJGZpbmFscy5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBhZGRCbHVycmVkT3ZlcmxheSgpIHtcclxuICAgICAgICAkb3ZlcmxheS5hZGRDbGFzcygncHJvZmlsZV9fbW9kYWxzLW92ZXJsYXktLWFjdGl2ZScpO1xyXG4gICAgICAgICR3cmFwcGVyLmFkZENsYXNzKCdibHVyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgJCgnW2RhdGEtbW9kYWxdJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCAkdGhpcyA9ICQodGhpcyksXHJcbiAgICAgICAgICAgICRkYXRhVHlwZSA9ICR0aGlzLmRhdGEoJ21vZGFsJyk7XHJcblxyXG4gICAgICAgIHJlbW92ZU1vZGFscygpO1xyXG4gICAgICAgIGFkZEJsdXJyZWRPdmVybGF5KCk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCRkYXRhVHlwZSk7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoJGRhdGFUeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2FkZC1icmllZic6XHJcbiAgICAgICAgICAgICAgICAkbW9kYWxfYnJpZWZpbmcuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2FkZC1wcmVzZW50YXRpb24nOlxyXG4gICAgICAgICAgICAgICAgJG1vZGFsX3ByZXNlbnRhdGlvbi5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnZmFpbCc6XHJcbiAgICAgICAgICAgICAgICAkbW9kYWxfZmFpbC5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnZGVhZGxpbmUnOlxyXG4gICAgICAgICAgICAgICAgJG1vZGFsX2RlYWRsaW5lLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdzdWNjZXNzJzpcclxuICAgICAgICAgICAgICAgICRtb2RhbF9zdWNjZXNzLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdmaW5hbCc6XHJcbiAgICAgICAgICAgICAgICAkbW9kYWxfZmluYWxzLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAkY3Jvc3Mub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJlbW92ZU1vZGFscygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJGJ0bkNsb3NlLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZW1vdmVNb2RhbHMoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZU1vZGFscygpIHtcclxuICAgICAgICAkKCdbZGF0YS1wb3B1cF0nKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAgICAgICAkb3ZlcmxheS5yZW1vdmVDbGFzcyhcInByb2ZpbGVfX21vZGFscy1vdmVybGF5LS1hY3RpdmVcIik7XHJcbiAgICAgICAgJHdyYXBwZXIucmVtb3ZlQ2xhc3MoJ2JsdXInKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gV2hlbiB0aGUgdXNlciBjbGlja3MgYW55d2hlcmUgb3V0c2lkZSBvZiB0aGUgbW9kYWwsIGNsb3NlIGl0XHJcbiAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwnKTtcclxuICAgIHdpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PSBtb2RhbCkge1xyXG4gICAgICAgICAgICByZW1vdmVNb2RhbHMoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGZ1bmN0aW9uIHNob3dGYWlsKCkge1xyXG4gICAgLy8gICAgICRtb2RhbF9mYWlsLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgIC8vIH07XHJcblxyXG4gICAgLy8gZnVuY3Rpb24gc2hvd0RlYWRsaW5lKCkge1xyXG4gICAgLy8gICAgICRtb2RhbF9kZWFkbGluZS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gJCgnLnByb2ZpbGVfX2l0ZW0tLWZhaWwnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyAgICAgJCgnLnByb2ZpbGVfX21vZGFscy1wcmVzZW50YXRpb24sIC5wcm9maWxlX19tb2RhbHMnKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAgIC8vICAgICBzaG93RmFpbCgpO1xyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgLy8gJCgnLnByb2ZpbGVfX2l0ZW0tLWRlYWRsaW5lJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gICAgICQoJy5wcm9maWxlX19tb2RhbHMtcHJlc2VudGF0aW9uLCAucHJvZmlsZV9fbW9kYWxzJykuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICAvLyAgICAgc2hvd0RlYWRsaW5lKCk7XHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICAvLyBpdGVtcycgYmFja2dyb3VuZHNcclxuICAgIGlmICgkaW50ZXJ2aWV3LmlzKCcucHJvZmlsZV9faXRlbS0tZGVzY3JpcHRpb24nKSkge1xyXG4gICAgICAgICRpbnRlcnZpZXcuYWRkQ2xhc3MoJ3Byb2ZpbGVfX2l0ZW0taWNvbi0taW50ZXJ2aWV3LXdoaXRlJylcclxuICAgIH1cclxuXHJcbiAgICBpZiAoJGJyaWVmaW5nLmlzKCcucHJvZmlsZV9faXRlbS0tZGVzY3JpcHRpb24nKSkge1xyXG4gICAgICAgICRicmllZmluZy5hZGRDbGFzcygncHJvZmlsZV9faXRlbS1pY29uLS1pZGVhLXdoaXRlJylcclxuICAgIH1cclxuXHJcbiAgICBpZiAoJGZpbmFscy5pcygnLnByb2ZpbGVfX2l0ZW0tLWRlc2NyaXB0aW9uJykpIHtcclxuICAgICAgICAkZmluYWxzLmFkZENsYXNzKCdwcm9maWxlX19pdGVtLWljb24tLWZpbmFscy1hY3RpdmUnKVxyXG4gICAgfVxyXG5cclxuICAgIGlmICgkcHJlc2VudGF0aW9uLmlzKCcucHJvZmlsZV9faXRlbS0tZGVzY3JpcHRpb24nKSkge1xyXG4gICAgICAgICRwcmVzZW50YXRpb24uYWRkQ2xhc3MoJ3Byb2ZpbGVfX2l0ZW0taWNvbi0tcHJlc2VudGF0aW9uLWFjdGl2ZScpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gcGFydGljaXBhbnQgbGlzdCBcclxuXHJcbiAgICBsZXQgJHBhcnRpY2lwYW50ID0gJCgnLnBhcnRpY2lwYW50Jyk7XHJcblxyXG4gICAgJHBhcnRpY2lwYW50Lm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwicGFydGljaXBhbnQtLWFjdGl2ZVwiKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKFwicGFydGljaXBhbnQtLWFjdGl2ZVwiKTtcclxuICAgIH0pXHJcbiAgICAvLyBqUXVlcnkgS25vYlxyXG5cclxuICAgIGxldCAkZGlhbCA9ICQoXCIuZGlhbFwiKTtcclxuXHJcbiAgICAkZGlhbC5rbm9iKHtcclxuICAgICAgICAnbWluJzogMCxcclxuICAgICAgICAnbWF4JzogMTAsXHJcbiAgICAgICAgJ3JvdGF0aW9uJzogXCJhbnRpY2xvY2t3aXNlXCIsXHJcbiAgICAgICAgJ3JlbGVhc2UnOiBmdW5jdGlvbiAodikge1xyXG4gICAgICAgICAgICBsZXQgY29sb3I7XHJcbiAgICAgICAgICAgIGxldCBkYXRhSGlnaCA9ICRkaWFsLmRhdGEoXCJoaWdoXCIpO1xyXG4gICAgICAgICAgICBsZXQgZGF0YUxvdyA9ICRkaWFsLmRhdGEoXCJsb3dcIik7XHJcbiAgICAgICAgICAgIGlmICh2IDw9IGRhdGFMb3cpIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yID0gJyNFNzJFMzYnO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHYgPCBkYXRhSGlnaCkge1xyXG4gICAgICAgICAgICAgICAgY29sb3IgPSAnI0Y1OTEzQic7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvciA9ICcjMDA5NjM5JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLiQudHJpZ2dlcignY29uZmlndXJlJywge1xyXG4gICAgICAgICAgICAgICAgXCJmZ0NvbG9yXCI6IGNvbG9yLFxyXG4gICAgICAgICAgICAgICAgXCJpbnB1dENvbG9yXCI6IGNvbG9yXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy8gZGlzYWJsZSBFTlRFUiBvbiBpbnB1dFxyXG4gICAgJGRpYWwua2V5cHJlc3MoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAoZS53aGljaCA9PSAxMykgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gYnJpZWYgKyBwcmVzZW50YXRpb24gd2lkdGggISBjcnV0Y2ggIVxyXG4gICAgbGV0ICRwcm9qZWN0cyA9ICQoJy5wYXJ0aWNpcGFudC1pbmZvX19yaWdodCcpO1xyXG5cclxuICAgIGlmICgkcHJvamVjdHMubGVuZ3RoID09IDEpIHtcclxuICAgICAgICAkcHJvamVjdHMuY3NzKFwid2lkdGhcIiwgXCI1MCVcIik7XHJcbiAgICB9IGVsc2UgJHByb2plY3RzLmNzcyhcIndpZHRoXCIsIFwiMjUlXCIpO1xyXG59KTtcclxuLy8gcG9wdXBzIGZpbGVzXHJcblxyXG5sZXQgJGlucHV0TmFtZSA9ICQoJy5wcm9maWxlX19hdHRhY2htZW50cy1pbnB1dCcpLFxyXG4gICAgJHRoaXMgPSAkKHRoaXMpLFxyXG4gICAgJGRvY3hQcmVzZW50YXRpb24gPSAkKCcjZG9jeFByZXNlbnRhdGlvbicpLFxyXG4gICAgJHBwdHggPSAkKCcjcHB0eCcpLFxyXG4gICAgJGRvY3ggPSAkKCcjZG9jeCcpLFxyXG4gICAgJGltYWdlID0gJCgnI2ltYWdlJyksXHJcbiAgICAkbGFiZWxEb2N4ID0gJCgnI2xhYmVsRG9jeCcpLFxyXG4gICAgJGxhYmVsSW1hZ2UgPSAkKCcjbGFiZWxJbWFnZScpLFxyXG4gICAgJGxhYmVsUHJlc2VudGF0aW9uID0gJCgnI2xhYmVsUHJlc2VudGF0aW9uJyksXHJcbiAgICAkbGFiZWxEZXNjID0gJCgnI2xhYmVsRGVzYycpLFxyXG4gICAgJGF0dGNoQnRuID0gJCgnLnByb2ZpbGVfX2F0dGFjaG1lbnRzLWJ0bicpO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZURvY3goKSB7XHJcbiAgICAkZG9jeC5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAkZG9jeC5hZGRDbGFzcygnc2hvdycpO1xyXG4gICAgJGxhYmVsRG9jeC5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VJbWFnZSgpIHtcclxuICAgICRpbWFnZS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAkaW1hZ2UuYWRkQ2xhc3MoJ3Nob3cnKTtcclxuICAgICRsYWJlbEltYWdlLmFkZENsYXNzKCdoaWRkZW4nKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNoYW5nZURlc2MoKSB7XHJcbiAgICAkZG9jeFByZXNlbnRhdGlvbi5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAkZG9jeFByZXNlbnRhdGlvbi5hZGRDbGFzcygnc2hvdycpO1xyXG4gICAgJGxhYmVsRGVzYy5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VQcmVzZW50YXRpb24oKSB7XHJcbiAgICAkcHB0eC5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAkcHB0eC5hZGRDbGFzcygnc2hvdycpO1xyXG4gICAgJGxhYmVsUHJlc2VudGF0aW9uLmFkZENsYXNzKCdoaWRkZW4nKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIHByZXZpZXdGaWxlKCkge1xyXG5cclxuICAgIGxldCBwcmV2aWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ltYWdlJyk7XHJcbiAgICBsZXQgZmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbWdJbnB1dCcpLmZpbGVzWzBdO1xyXG4gICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcblxyXG4gICAgcmVhZGVyLm9ubG9hZGVuZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBwcmV2aWV3LnNyYyA9IHJlYWRlci5yZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGZpbGUpIHtcclxuICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcHJldmlldy5zcmMgPSBcIlwiO1xyXG4gICAgfVxyXG59O1xyXG5cclxuLy8gY2hlY2sgZm9ybXNcclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlUHJvamVjdCgpIHtcclxuICAgIGxldCAkZG9jID0gJCgnI2RvY3hJbnB1dCcpLFxyXG4gICAgICAgICRpbWcgPSAkKCcjaW1nSW5wdXQnKSxcclxuICAgICAgICAkbmFtZSA9ICQoJyNwcm9qZWN0TmFtZScpLFxyXG4gICAgICAgICRidG4gPSAkKCcjc3VibWl0UHJvamVjdCcpO1xyXG5cclxuICAgIGlmICgkZG9jLmdldCgwKS5maWxlcy5sZW5ndGggIT09IDAgJiYgJGltZy5nZXQoMCkuZmlsZXMubGVuZ3RoICE9PSAwICYmICRuYW1lLnZhbCgpLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICRidG4uYWRkQ2xhc3MoJ2J0bi0tYWN0aXZlJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlUHJlc2VudCgpIHtcclxuICAgIGxldCAkZGVzYyA9ICQoJyNkZXNjSW5wdXQnKSxcclxuICAgICAgICAkcHJlc2VudGF0aW9uID0gJCgnI3ByZXNlbnRJbnB1dCcpLFxyXG4gICAgICAgICRidG5QcmVzZW50ID0gJCgnI3N1Ym1pdFByZXNlbnQnKTtcclxuXHJcbiAgICBpZiAoJGRlc2MuZ2V0KDApLmZpbGVzLmxlbmd0aCAhPT0gMCAmJiAkcHJlc2VudGF0aW9uLmdldCgwKS5maWxlcy5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAkYnRuUHJlc2VudC5hZGRDbGFzcygnYnRuLS1hY3RpdmUnKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tMZW5ndGgoKSB7XHJcbiAgICBsZXQgJGNvbW1lbnQgPSAkKCcucGFydGljaXBhbnRfX2Fzc2Vzc21lbnQtaW5wdXQnKSxcclxuICAgICAgICAkYnRuTWVudG9yID0gJCgnI2J0bk1lbnRvcicpO1xyXG5cclxuICAgICRidG5NZW50b3IudG9nZ2xlQ2xhc3MoJ2J0bi0tYWN0aXZlJywgJGNvbW1lbnQudmFsKCkubGVuZ3RoICE9PSAwKTsgLy8gcHJlZmVyYWJsZVxyXG59O1xyXG5cclxuZnVuY3Rpb24gY2hlY2tGb3JtKCkge1xyXG4gICAgbGV0ICRidG5BdXRoID0gJCgnLmZvcm1fX2F1dGgtYnRuJyksXHJcbiAgICAgICAgJGF1dGhJbnB1dHMgPSAkKCcuZm9ybV9fbG9naW4sIC5mb3JtX19wYXNzd29yZCcpO1xyXG4gICAgJGJ0bkF1dGgudG9nZ2xlQ2xhc3MoJ2J0bi0td2hpdGUnLCAkYXV0aElucHV0cy52YWwoKS5sZW5ndGggIT09IDApOyAvLyBwcmVmZXJhYmxlXHJcbn07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
