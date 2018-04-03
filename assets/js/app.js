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
        $placeholder = $('#placeholder'),
        $cross = $('.profile__modal-cross'),
        $btnNo = $('#btn-no'),
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
                $placeholder.css("display", "block");
                break;
            case 'final':
                $placeholder.css("display", "block");
                break;
        }

    });

    $cross.on('click', function () {
        removeModals();
    });

    $btnNo.on('click', function () {
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
    // $attchBtn.addClass('btn--active');
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
    // $attchBtn.addClass('btn--active');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIC8vIGZpbHRlciBkcm9wZG93blxyXG4gICAgbGV0ICRkcm9wZG93biA9ICQoJy5maWx0ZXJfX2Ryb3Bkb3duJyksXHJcbiAgICAgICAgJGZpbHRlciA9ICQoJy5saXN0X19maWx0ZXInKSxcclxuICAgICAgICAkb3ZlcmxheU1lbnRvciA9ICQoJy5tZW50b3JfX292ZXJsYXknKSxcclxuICAgICAgICAkZmlsdGVySWNvbiA9ICQoJy5saXN0X19maWx0ZXInKTtcclxuXHJcbiAgICAkZmlsdGVyLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0b2dnbGVGaWx0ZXIoKTtcclxuICAgIH0pO1xyXG5cclxuICAgICRvdmVybGF5TWVudG9yLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0b2dnbGVGaWx0ZXIoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIHRvZ2dsZUZpbHRlcigpIHtcclxuICAgICAgICAkb3ZlcmxheU1lbnRvci50b2dnbGVDbGFzcygnc2hvd24nKTtcclxuICAgICAgICAkZHJvcGRvd24udG9nZ2xlQ2xhc3MoJ2ZpbHRlcl9fZHJvcGRvd24tLWFjdGl2ZScpO1xyXG4gICAgICAgICRmaWx0ZXIudG9nZ2xlQ2xhc3MoJ2xpc3RfX2ZpbHRlci0tYWN0aXZlJyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIHBvcHVwc1xyXG5cclxuICAgIGxldCAkcHJvZmlsZUl0ZW0gPSAkKCcucHJvZmlsZV9faXRlbScpLFxyXG4gICAgICAgICRpbnRlcnZpZXcgPSAkKCcjaW50ZXJ2aWV3JyksXHJcbiAgICAgICAgJGJyaWVmaW5nID0gJCgnI2JyaWVmaW5nJyksXHJcbiAgICAgICAgJHByZXNlbnRhdGlvbiA9ICQoJyNwcmVzZW50YXRpb24nKSxcclxuICAgICAgICAkZmluYWxzID0gJCgnI2ZpbmFscycpLFxyXG4gICAgICAgICRvdmVybGF5ID0gJCgnLnByb2ZpbGVfX21vZGFscy1vdmVybGF5JyksXHJcbiAgICAgICAgJG1vZGFsX2JyaWVmaW5nID0gJCgnLnByb2ZpbGVfX21vZGFscycpLFxyXG4gICAgICAgICRtb2RhbF9wcmVzZW50YXRpb24gPSAkKCcucHJvZmlsZV9fbW9kYWxzLXByZXNlbnRhdGlvbicpLFxyXG4gICAgICAgICRtb2RhbF9mYWlsID0gJCgnLnByb2ZpbGVfX21vZGFscy1mYWlsJyksXHJcbiAgICAgICAgJG1vZGFsX2RlYWRsaW5lID0gJCgnLnByb2ZpbGVfX21vZGFscy1kZWFkbGluZScpLFxyXG4gICAgICAgICRwbGFjZWhvbGRlciA9ICQoJyNwbGFjZWhvbGRlcicpLFxyXG4gICAgICAgICRjcm9zcyA9ICQoJy5wcm9maWxlX19tb2RhbC1jcm9zcycpLFxyXG4gICAgICAgICRidG5ObyA9ICQoJyNidG4tbm8nKSxcclxuICAgICAgICAkd3JhcHBlciA9ICQoJy53cmFwcGVyJyk7XHJcblxyXG4gICAgLy8gJHByb2ZpbGVJdGVtLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgIC8vICAgICAkb3ZlcmxheS5hZGRDbGFzcygncHJvZmlsZV9fbW9kYWxzLW92ZXJsYXktLWFjdGl2ZScpO1xyXG4gICAgLy8gICAgICR3cmFwcGVyLmFkZENsYXNzKCdibHVyJyk7XHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICAvLyAkYnJpZWZpbmcub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gICAgICRtb2RhbF9icmllZmluZy5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICAvLyAkcHJlc2VudGF0aW9uLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgIC8vICAgICAkbW9kYWxfcHJlc2VudGF0aW9uLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgIC8vIH0pO1xyXG5cclxuICAgIC8vICRmaW5hbHMub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gICAgICRtb2RhbF8kZmluYWxzLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgIC8vIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGFkZEJsdXJyZWRPdmVybGF5KCkge1xyXG4gICAgICAgICRvdmVybGF5LmFkZENsYXNzKCdwcm9maWxlX19tb2RhbHMtb3ZlcmxheS0tYWN0aXZlJyk7XHJcbiAgICAgICAgJHdyYXBwZXIuYWRkQ2xhc3MoJ2JsdXInKTtcclxuICAgIH1cclxuXHJcbiAgICAkKCdbZGF0YS1tb2RhbF0nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0ICR0aGlzID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgJGRhdGFUeXBlID0gJHRoaXMuZGF0YSgnbW9kYWwnKTtcclxuXHJcbiAgICAgICAgcmVtb3ZlTW9kYWxzKCk7XHJcbiAgICAgICAgYWRkQmx1cnJlZE92ZXJsYXkoKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJGRhdGFUeXBlKTtcclxuXHJcbiAgICAgICAgc3dpdGNoICgkZGF0YVR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAnYWRkLWJyaWVmJzpcclxuICAgICAgICAgICAgICAgICRtb2RhbF9icmllZmluZy5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnYWRkLXByZXNlbnRhdGlvbic6XHJcbiAgICAgICAgICAgICAgICAkbW9kYWxfcHJlc2VudGF0aW9uLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdmYWlsJzpcclxuICAgICAgICAgICAgICAgICRtb2RhbF9mYWlsLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdkZWFkbGluZSc6XHJcbiAgICAgICAgICAgICAgICAkbW9kYWxfZGVhZGxpbmUuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxyXG4gICAgICAgICAgICAgICAgJHBsYWNlaG9sZGVyLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdmaW5hbCc6XHJcbiAgICAgICAgICAgICAgICAkcGxhY2Vob2xkZXIuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgICRjcm9zcy5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmVtb3ZlTW9kYWxzKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkYnRuTm8ub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJlbW92ZU1vZGFscygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlTW9kYWxzKCkge1xyXG4gICAgICAgICQoJ1tkYXRhLXBvcHVwXScpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgICAgICRvdmVybGF5LnJlbW92ZUNsYXNzKFwicHJvZmlsZV9fbW9kYWxzLW92ZXJsYXktLWFjdGl2ZVwiKTtcclxuICAgICAgICAkd3JhcHBlci5yZW1vdmVDbGFzcygnYmx1cicpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBXaGVuIHRoZSB1c2VyIGNsaWNrcyBhbnl3aGVyZSBvdXRzaWRlIG9mIHRoZSBtb2RhbCwgY2xvc2UgaXRcclxuICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbCcpO1xyXG4gICAgd2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09IG1vZGFsKSB7XHJcbiAgICAgICAgICAgIHJlbW92ZU1vZGFscygpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8gZnVuY3Rpb24gc2hvd0ZhaWwoKSB7XHJcbiAgICAvLyAgICAgJG1vZGFsX2ZhaWwuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgLy8gfTtcclxuXHJcbiAgICAvLyBmdW5jdGlvbiBzaG93RGVhZGxpbmUoKSB7XHJcbiAgICAvLyAgICAgJG1vZGFsX2RlYWRsaW5lLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyAkKCcucHJvZmlsZV9faXRlbS0tZmFpbCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgIC8vICAgICAkKCcucHJvZmlsZV9fbW9kYWxzLXByZXNlbnRhdGlvbiwgLnByb2ZpbGVfX21vZGFscycpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgLy8gICAgIHNob3dGYWlsKCk7XHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICAvLyAkKCcucHJvZmlsZV9faXRlbS0tZGVhZGxpbmUnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyAgICAgJCgnLnByb2ZpbGVfX21vZGFscy1wcmVzZW50YXRpb24sIC5wcm9maWxlX19tb2RhbHMnKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAgIC8vICAgICBzaG93RGVhZGxpbmUoKTtcclxuICAgIC8vIH0pO1xyXG5cclxuICAgIC8vIGl0ZW1zJyBiYWNrZ3JvdW5kc1xyXG4gICAgaWYgKCRpbnRlcnZpZXcuaXMoJy5wcm9maWxlX19pdGVtLS1kZXNjcmlwdGlvbicpKSB7XHJcbiAgICAgICAgJGludGVydmlldy5hZGRDbGFzcygncHJvZmlsZV9faXRlbS1pY29uLS1pbnRlcnZpZXctd2hpdGUnKVxyXG4gICAgfVxyXG5cclxuICAgIGlmICgkYnJpZWZpbmcuaXMoJy5wcm9maWxlX19pdGVtLS1kZXNjcmlwdGlvbicpKSB7XHJcbiAgICAgICAgJGJyaWVmaW5nLmFkZENsYXNzKCdwcm9maWxlX19pdGVtLWljb24tLWlkZWEtd2hpdGUnKVxyXG4gICAgfVxyXG5cclxuICAgIGlmICgkZmluYWxzLmlzKCcucHJvZmlsZV9faXRlbS0tZGVzY3JpcHRpb24nKSkge1xyXG4gICAgICAgICRmaW5hbHMuYWRkQ2xhc3MoJ3Byb2ZpbGVfX2l0ZW0taWNvbi0tZmluYWxzLWFjdGl2ZScpXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCRwcmVzZW50YXRpb24uaXMoJy5wcm9maWxlX19pdGVtLS1kZXNjcmlwdGlvbicpKSB7XHJcbiAgICAgICAgJHByZXNlbnRhdGlvbi5hZGRDbGFzcygncHJvZmlsZV9faXRlbS1pY29uLS1wcmVzZW50YXRpb24tYWN0aXZlJylcclxuICAgIH1cclxuXHJcbiAgICAvLyBwYXJ0aWNpcGFudCBsaXN0IFxyXG5cclxuICAgIGxldCAkcGFydGljaXBhbnQgPSAkKCcucGFydGljaXBhbnQnKTtcclxuXHJcbiAgICAkcGFydGljaXBhbnQub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJwYXJ0aWNpcGFudC0tYWN0aXZlXCIpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoXCJwYXJ0aWNpcGFudC0tYWN0aXZlXCIpO1xyXG4gICAgfSlcclxuICAgIC8vIGpRdWVyeSBLbm9iXHJcblxyXG4gICAgbGV0ICRkaWFsID0gJChcIi5kaWFsXCIpO1xyXG5cclxuICAgICRkaWFsLmtub2Ioe1xyXG4gICAgICAgICdtaW4nOiAwLFxyXG4gICAgICAgICdtYXgnOiAxMCxcclxuICAgICAgICAncm90YXRpb24nOiBcImFudGljbG9ja3dpc2VcIixcclxuICAgICAgICAncmVsZWFzZSc6IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgICAgIGxldCBjb2xvcjtcclxuICAgICAgICAgICAgbGV0IGRhdGFIaWdoID0gJGRpYWwuZGF0YShcImhpZ2hcIik7XHJcbiAgICAgICAgICAgIGxldCBkYXRhTG93ID0gJGRpYWwuZGF0YShcImxvd1wiKTtcclxuICAgICAgICAgICAgaWYgKHYgPD0gZGF0YUxvdykge1xyXG4gICAgICAgICAgICAgICAgY29sb3IgPSAnI0U3MkUzNic7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodiA8IGRhdGFIaWdoKSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvciA9ICcjRjU5MTNCJztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yID0gJyMwMDk2MzknO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuJC50cmlnZ2VyKCdjb25maWd1cmUnLCB7XHJcbiAgICAgICAgICAgICAgICBcImZnQ29sb3JcIjogY29sb3IsXHJcbiAgICAgICAgICAgICAgICBcImlucHV0Q29sb3JcIjogY29sb3JcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvLyBkaXNhYmxlIEVOVEVSIG9uIGlucHV0XHJcbiAgICAkZGlhbC5rZXlwcmVzcyhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmIChlLndoaWNoID09IDEzKSBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBicmllZiArIHByZXNlbnRhdGlvbiB3aWR0aCAhIGNydXRjaCAhXHJcbiAgICBsZXQgJHByb2plY3RzID0gJCgnLnBhcnRpY2lwYW50LWluZm9fX3JpZ2h0Jyk7XHJcblxyXG4gICAgaWYgKCRwcm9qZWN0cy5sZW5ndGggPT0gMSkge1xyXG4gICAgICAgICRwcm9qZWN0cy5jc3MoXCJ3aWR0aFwiLCBcIjUwJVwiKTtcclxuICAgIH0gZWxzZSAkcHJvamVjdHMuY3NzKFwid2lkdGhcIiwgXCIyNSVcIik7XHJcbn0pO1xyXG4vLyBwb3B1cHMgZmlsZXNcclxuXHJcbmxldCAkaW5wdXROYW1lID0gJCgnLnByb2ZpbGVfX2F0dGFjaG1lbnRzLWlucHV0JyksXHJcbiAgICAkdGhpcyA9ICQodGhpcyksXHJcbiAgICAkZG9jeFByZXNlbnRhdGlvbiA9ICQoJyNkb2N4UHJlc2VudGF0aW9uJyksXHJcbiAgICAkcHB0eCA9ICQoJyNwcHR4JyksXHJcbiAgICAkZG9jeCA9ICQoJyNkb2N4JyksXHJcbiAgICAkaW1hZ2UgPSAkKCcjaW1hZ2UnKSxcclxuICAgICRsYWJlbERvY3ggPSAkKCcjbGFiZWxEb2N4JyksXHJcbiAgICAkbGFiZWxJbWFnZSA9ICQoJyNsYWJlbEltYWdlJyksXHJcbiAgICAkbGFiZWxQcmVzZW50YXRpb24gPSAkKCcjbGFiZWxQcmVzZW50YXRpb24nKSxcclxuICAgICRsYWJlbERlc2MgPSAkKCcjbGFiZWxEZXNjJyksXHJcbiAgICAkYXR0Y2hCdG4gPSAkKCcucHJvZmlsZV9fYXR0YWNobWVudHMtYnRuJyk7XHJcblxyXG5cclxuZnVuY3Rpb24gY2hhbmdlRG9jeCgpIHtcclxuICAgICRkb2N4LnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcclxuICAgICRkb2N4LmFkZENsYXNzKCdzaG93Jyk7XHJcbiAgICAkbGFiZWxEb2N4LmFkZENsYXNzKCdoaWRkZW4nKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNoYW5nZUltYWdlKCkge1xyXG4gICAgJGltYWdlLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcclxuICAgICRpbWFnZS5hZGRDbGFzcygnc2hvdycpO1xyXG4gICAgJGxhYmVsSW1hZ2UuYWRkQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgLy8gJGF0dGNoQnRuLmFkZENsYXNzKCdidG4tLWFjdGl2ZScpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gY2hhbmdlRGVzYygpIHtcclxuICAgICRkb2N4UHJlc2VudGF0aW9uLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcclxuICAgICRkb2N4UHJlc2VudGF0aW9uLmFkZENsYXNzKCdzaG93Jyk7XHJcbiAgICAkbGFiZWxEZXNjLmFkZENsYXNzKCdoaWRkZW4nKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNoYW5nZVByZXNlbnRhdGlvbigpIHtcclxuICAgICRwcHR4LnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcclxuICAgICRwcHR4LmFkZENsYXNzKCdzaG93Jyk7XHJcbiAgICAkbGFiZWxQcmVzZW50YXRpb24uYWRkQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgLy8gJGF0dGNoQnRuLmFkZENsYXNzKCdidG4tLWFjdGl2ZScpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gcHJldmlld0ZpbGUoKSB7XHJcblxyXG4gICAgbGV0IHByZXZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW1hZ2UnKTtcclxuICAgIGxldCBmaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ltZ0lucHV0JykuZmlsZXNbMF07XHJcbiAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuXHJcbiAgICByZWFkZXIub25sb2FkZW5kID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHByZXZpZXcuc3JjID0gcmVhZGVyLnJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZmlsZSkge1xyXG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBwcmV2aWV3LnNyYyA9IFwiXCI7XHJcbiAgICB9XHJcbn07XHJcblxyXG4vLyBjaGVjayBmb3Jtc1xyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVQcm9qZWN0KCkge1xyXG4gICAgbGV0ICRkb2MgPSAkKCcjZG9jeElucHV0JyksXHJcbiAgICAgICAgJGltZyA9ICQoJyNpbWdJbnB1dCcpLFxyXG4gICAgICAgICRuYW1lID0gJCgnI3Byb2plY3ROYW1lJyksXHJcbiAgICAgICAgJGJ0biA9ICQoJyNzdWJtaXRQcm9qZWN0Jyk7XHJcblxyXG4gICAgaWYgKCRkb2MuZ2V0KDApLmZpbGVzLmxlbmd0aCAhPT0gMCAmJiAkaW1nLmdldCgwKS5maWxlcy5sZW5ndGggIT09IDAgJiYgJG5hbWUudmFsKCkubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgJGJ0bi5hZGRDbGFzcygnYnRuLS1hY3RpdmUnKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVQcmVzZW50KCkge1xyXG4gICAgbGV0ICRkZXNjID0gJCgnI2Rlc2NJbnB1dCcpLFxyXG4gICAgICAgICRwcmVzZW50YXRpb24gPSAkKCcjcHJlc2VudElucHV0JyksXHJcbiAgICAgICAgJGJ0blByZXNlbnQgPSAkKCcjc3VibWl0UHJlc2VudCcpO1xyXG5cclxuICAgIGlmICgkZGVzYy5nZXQoMCkuZmlsZXMubGVuZ3RoICE9PSAwICYmICRwcmVzZW50YXRpb24uZ2V0KDApLmZpbGVzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICRidG5QcmVzZW50LmFkZENsYXNzKCdidG4tLWFjdGl2ZScpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0xlbmd0aCgpIHtcclxuICAgIGxldCAkY29tbWVudCA9ICQoJy5wYXJ0aWNpcGFudF9fYXNzZXNzbWVudC1pbnB1dCcpLFxyXG4gICAgICAgICRidG5NZW50b3IgPSAkKCcjYnRuTWVudG9yJyk7XHJcblxyXG4gICAgJGJ0bk1lbnRvci50b2dnbGVDbGFzcygnYnRuLS1hY3RpdmUnLCAkY29tbWVudC52YWwoKS5sZW5ndGggIT09IDApOyAvLyBwcmVmZXJhYmxlXHJcbn07XHJcblxyXG5mdW5jdGlvbiBjaGVja0Zvcm0oKSB7XHJcbiAgICBsZXQgJGJ0bkF1dGggPSAkKCcuZm9ybV9fYXV0aC1idG4nKSxcclxuICAgICAgICAkYXV0aElucHV0cyA9ICQoJy5mb3JtX19sb2dpbiwgLmZvcm1fX3Bhc3N3b3JkJyk7XHJcbiAgICAkYnRuQXV0aC50b2dnbGVDbGFzcygnYnRuLS13aGl0ZScsICRhdXRoSW5wdXRzLnZhbCgpLmxlbmd0aCAhPT0gMCk7IC8vIHByZWZlcmFibGVcclxufTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
