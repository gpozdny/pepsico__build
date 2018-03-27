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
    
    if($desc.get(0).files.length !== 0 && $presentation.get(0).files.length !== 0){
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgLy8gZmlsdGVyIGRyb3Bkb3duXHJcbiAgICBsZXQgJGRyb3Bkb3duID0gJCgnLmZpbHRlcl9fZHJvcGRvd24nKSxcclxuICAgICAgICAkZmlsdGVyID0gJCgnLmxpc3RfX2ZpbHRlcicpLFxyXG4gICAgICAgICRvdmVybGF5TWVudG9yID0gJCgnLm1lbnRvcl9fb3ZlcmxheScpLFxyXG4gICAgICAgICRmaWx0ZXJJY29uID0gJCgnLmxpc3RfX2ZpbHRlcicpO1xyXG5cclxuICAgICRmaWx0ZXIuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRvZ2dsZUZpbHRlcigpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJG92ZXJsYXlNZW50b3Iub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRvZ2dsZUZpbHRlcigpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gdG9nZ2xlRmlsdGVyKCkge1xyXG4gICAgICAgICRvdmVybGF5TWVudG9yLnRvZ2dsZUNsYXNzKCdzaG93bicpO1xyXG4gICAgICAgICRkcm9wZG93bi50b2dnbGVDbGFzcygnZmlsdGVyX19kcm9wZG93bi0tYWN0aXZlJyk7XHJcbiAgICAgICAgJGZpbHRlci50b2dnbGVDbGFzcygnbGlzdF9fZmlsdGVyLS1hY3RpdmUnKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gcG9wdXBzXHJcblxyXG4gICAgbGV0ICRwcm9maWxlSXRlbSA9ICQoJy5wcm9maWxlX19pdGVtJyksXHJcbiAgICAgICAgJGJyaWVmaW5nID0gJCgnI2JyaWVmaW5nJyksXHJcbiAgICAgICAgJHByZXNlbnRhdGlvbiA9ICQoJyNwcmVzZW50YXRpb24nKSxcclxuICAgICAgICAkZmluYWxzID0gJCgnI2ZpbmFscycpLFxyXG4gICAgICAgICRvdmVybGF5ID0gJCgnLnByb2ZpbGVfX21vZGFscy1vdmVybGF5JyksXHJcbiAgICAgICAgJG1vZGFsX2JyaWVmaW5nID0gJCgnLnByb2ZpbGVfX21vZGFscycpLFxyXG4gICAgICAgICRtb2RhbF9wcmVzZW50YXRpb24gPSAkKCcucHJvZmlsZV9fbW9kYWxzLXByZXNlbnRhdGlvbicpLFxyXG4gICAgICAgICRtb2RhbF9mYWlsID0gJCgnLnByb2ZpbGVfX21vZGFscy1mYWlsJyksXHJcbiAgICAgICAgJGNyb3NzID0gJCgnLnByb2ZpbGVfX21vZGFsLWNyb3NzJyksXHJcbiAgICAgICAgJHdyYXBwZXIgPSAkKCcud3JhcHBlcicpO1xyXG5cclxuICAgICRwcm9maWxlSXRlbS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJG92ZXJsYXkuYWRkQ2xhc3MoJ3Byb2ZpbGVfX21vZGFscy1vdmVybGF5LS1hY3RpdmUnKTtcclxuICAgICAgICAkd3JhcHBlci5hZGRDbGFzcygnYmx1cicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJGJyaWVmaW5nLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkbW9kYWxfYnJpZWZpbmcuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJHByZXNlbnRhdGlvbi5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJG1vZGFsX3ByZXNlbnRhdGlvbi5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyAkZmluYWxzLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgIC8vICAgICAkbW9kYWxfJGZpbmFscy5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICAkY3Jvc3Mub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJlbW92ZU1vZGFscygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlTW9kYWxzKCkge1xyXG4gICAgICAgICQoJ1tkYXRhLW1vZGFsXScpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgICAgICRvdmVybGF5LnJlbW92ZUNsYXNzKFwicHJvZmlsZV9fbW9kYWxzLW92ZXJsYXktLWFjdGl2ZVwiKTtcclxuICAgICAgICAkd3JhcHBlci5yZW1vdmVDbGFzcygnYmx1cicpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBXaGVuIHRoZSB1c2VyIGNsaWNrcyBhbnl3aGVyZSBvdXRzaWRlIG9mIHRoZSBtb2RhbCwgY2xvc2UgaXRcclxuICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbCcpO1xyXG4gICAgd2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09IG1vZGFsKSB7XHJcbiAgICAgICAgICAgIHJlbW92ZU1vZGFscygpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gc2hvd0ZhaWwoKSB7XHJcbiAgICAgICAgJG1vZGFsX2ZhaWwuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkKCcucHJvZmlsZV9faXRlbS0tZmFpbGVkJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5wcm9maWxlX19tb2RhbHMtcHJlc2VudGF0aW9uLCAucHJvZmlsZV9fbW9kYWxzJykuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICAgICAgc2hvd0ZhaWwoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGl0ZW1zJyBiYWNrZ3JvdW5kc1xyXG5cclxuICAgIGlmICgkYnJpZWZpbmcuaXMoJy5wcm9maWxlX19pdGVtLS1hY3RpdmUnKSkge1xyXG4gICAgICAgICRicmllZmluZy5hZGRDbGFzcygncHJvZmlsZV9faXRlbS1pY29uLS1pZGVhLXdoaXRlJylcclxuICAgIH1cclxuXHJcbiAgICBpZiAoJGZpbmFscy5pcygnLnByb2ZpbGVfX2l0ZW0tLWFjdGl2ZScpKSB7XHJcbiAgICAgICAgJGZpbmFscy5hZGRDbGFzcygncHJvZmlsZV9faXRlbS1pY29uLS1maW5hbHMtYWN0aXZlJylcclxuICAgIH0gZWxzZSBpZiAoJGZpbmFscy5pcygnLnByb2ZpbGVfX2l0ZW0tLXN1Y2Nlc3MnKSkge1xyXG4gICAgICAgICRmaW5hbHMuYWRkQ2xhc3MoJ3Byb2ZpbGVfX2l0ZW0taWNvbi0tZmluYWxzLXN1Y2Nlc3MnKVxyXG4gICAgfVxyXG5cclxuICAgIGlmICgkcHJlc2VudGF0aW9uLmlzKCcucHJvZmlsZV9faXRlbS0tYWN0aXZlJykpIHtcclxuICAgICAgICAkcHJlc2VudGF0aW9uLmFkZENsYXNzKCdwcm9maWxlX19pdGVtLWljb24tLXByZXNlbnRhdGlvbi1hY3RpdmUnKVxyXG4gICAgfSBlbHNlIGlmICgkcHJlc2VudGF0aW9uLmlzKCcucHJvZmlsZV9faXRlbS0tc3VjY2VzcycpKSB7XHJcbiAgICAgICAgJHByZXNlbnRhdGlvbi5hZGRDbGFzcygncHJvZmlsZV9faXRlbS1pY29uLS1wcmVzZW50YXRpb24tc3VjY2VzcycpXHJcbiAgICB9XHJcbiAgICAvLyBwYXJ0aWNpcGFudCBsaXN0IFxyXG5cclxuICAgIGxldCAkcGFydGljaXBhbnQgPSAkKCcucGFydGljaXBhbnQnKTtcclxuXHJcbiAgICAkcGFydGljaXBhbnQub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJwYXJ0aWNpcGFudC0tYWN0aXZlXCIpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoXCJwYXJ0aWNpcGFudC0tYWN0aXZlXCIpO1xyXG4gICAgfSlcclxuICAgIC8vIGpRdWVyeSBLbm9iXHJcblxyXG4gICAgbGV0ICRkaWFsID0gJChcIi5kaWFsXCIpO1xyXG5cclxuICAgICRkaWFsLmtub2Ioe1xyXG4gICAgICAgICdtaW4nOiAwLFxyXG4gICAgICAgICdtYXgnOiAxMCxcclxuICAgICAgICAncm90YXRpb24nOiBcImFudGljbG9ja3dpc2VcIixcclxuICAgICAgICAncmVsZWFzZSc6IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgICAgIGxldCBjb2xvcjtcclxuICAgICAgICAgICAgbGV0IGRhdGFIaWdoID0gJGRpYWwuZGF0YShcImhpZ2hcIik7XHJcbiAgICAgICAgICAgIGxldCBkYXRhTG93ID0gJGRpYWwuZGF0YShcImxvd1wiKTtcclxuICAgICAgICAgICAgaWYgKHYgPD0gZGF0YUxvdykge1xyXG4gICAgICAgICAgICAgICAgY29sb3IgPSAnI0U3MkUzNic7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodiA8IGRhdGFIaWdoKSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvciA9ICcjRjU5MTNCJztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yID0gJyMwMDk2MzknO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuJC50cmlnZ2VyKCdjb25maWd1cmUnLCB7XHJcbiAgICAgICAgICAgICAgICBcImZnQ29sb3JcIjogY29sb3IsXHJcbiAgICAgICAgICAgICAgICBcImlucHV0Q29sb3JcIjogY29sb3JcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvLyBicmllZiArIHByZXNlbnRhdGlvbiB3aWR0aCAhIGNydXRjaCAhXHJcbiAgICBsZXQgJHByb2plY3RzID0gJCgnLnBhcnRpY2lwYW50LWluZm9fX3JpZ2h0Jyk7XHJcblxyXG4gICAgaWYgKCRwcm9qZWN0cy5sZW5ndGggPT0gMSkge1xyXG4gICAgICAgICRwcm9qZWN0cy5jc3MoXCJ3aWR0aFwiLCBcIjUwJVwiKTtcclxuICAgIH0gZWxzZSAkcHJvamVjdHMuY3NzKFwid2lkdGhcIiwgXCIyNSVcIik7XHJcbn0pO1xyXG4vLyBwb3B1cHMgZmlsZXNcclxuXHJcbmxldCAkaW5wdXROYW1lID0gJCgnLnByb2ZpbGVfX2F0dGFjaG1lbnRzLWlucHV0JyksXHJcbiAgICAkdGhpcyA9ICQodGhpcyksXHJcbiAgICAkZG9jeFByZXNlbnRhdGlvbiA9ICQoJyNkb2N4UHJlc2VudGF0aW9uJyksXHJcbiAgICAkcHB0eCA9ICQoJyNwcHR4JyksXHJcbiAgICAkZG9jeCA9ICQoJyNkb2N4JyksXHJcbiAgICAkaW1hZ2UgPSAkKCcjaW1hZ2UnKSxcclxuICAgICRsYWJlbERvY3ggPSAkKCcjbGFiZWxEb2N4JyksXHJcbiAgICAkbGFiZWxJbWFnZSA9ICQoJyNsYWJlbEltYWdlJyksXHJcbiAgICAkbGFiZWxQcmVzZW50YXRpb24gPSAkKCcjbGFiZWxQcmVzZW50YXRpb24nKSxcclxuICAgICRsYWJlbERlc2MgPSAkKCcjbGFiZWxEZXNjJyksXHJcbiAgICAkYXR0Y2hCdG4gPSAkKCcucHJvZmlsZV9fYXR0YWNobWVudHMtYnRuJyk7XHJcblxyXG5cclxuZnVuY3Rpb24gY2hhbmdlRG9jeCgpIHtcclxuICAgICRkb2N4LnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcclxuICAgICRkb2N4LmFkZENsYXNzKCdzaG93Jyk7XHJcbiAgICAkbGFiZWxEb2N4LmFkZENsYXNzKCdoaWRkZW4nKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNoYW5nZUltYWdlKCkge1xyXG4gICAgJGltYWdlLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcclxuICAgICRpbWFnZS5hZGRDbGFzcygnc2hvdycpO1xyXG4gICAgJGxhYmVsSW1hZ2UuYWRkQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgLy8gJGF0dGNoQnRuLmFkZENsYXNzKCdidG4tLWFjdGl2ZScpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gY2hhbmdlRGVzYygpIHtcclxuICAgICRkb2N4UHJlc2VudGF0aW9uLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcclxuICAgICRkb2N4UHJlc2VudGF0aW9uLmFkZENsYXNzKCdzaG93Jyk7XHJcbiAgICAkbGFiZWxEZXNjLmFkZENsYXNzKCdoaWRkZW4nKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNoYW5nZVByZXNlbnRhdGlvbigpIHtcclxuICAgICRwcHR4LnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcclxuICAgICRwcHR4LmFkZENsYXNzKCdzaG93Jyk7XHJcbiAgICAkbGFiZWxQcmVzZW50YXRpb24uYWRkQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgLy8gJGF0dGNoQnRuLmFkZENsYXNzKCdidG4tLWFjdGl2ZScpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gcHJldmlld0ZpbGUoKSB7XHJcblxyXG4gICAgbGV0IHByZXZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW1hZ2UnKTtcclxuICAgIGxldCBmaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ltZ0lucHV0JykuZmlsZXNbMF07XHJcbiAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuXHJcbiAgICByZWFkZXIub25sb2FkZW5kID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHByZXZpZXcuc3JjID0gcmVhZGVyLnJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZmlsZSkge1xyXG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBwcmV2aWV3LnNyYyA9IFwiXCI7XHJcbiAgICB9XHJcbn07XHJcblxyXG4vLyBjaGVjayBmb3Jtc1xyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVQcm9qZWN0KCkge1xyXG4gICAgbGV0ICRkb2MgPSAkKCcjZG9jeElucHV0JyksXHJcbiAgICAgICAgJGltZyA9ICQoJyNpbWdJbnB1dCcpLFxyXG4gICAgICAgICRuYW1lID0gJCgnI3Byb2plY3ROYW1lJyksXHJcbiAgICAgICAgJGJ0biA9ICQoJyNzdWJtaXRQcm9qZWN0Jyk7XHJcblxyXG4gICAgaWYgKCRkb2MuZ2V0KDApLmZpbGVzLmxlbmd0aCAhPT0gMCAmJiAkaW1nLmdldCgwKS5maWxlcy5sZW5ndGggIT09IDAgJiYgJG5hbWUudmFsKCkubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgJGJ0bi5hZGRDbGFzcygnYnRuLS1hY3RpdmUnKTtcclxuICAgIH0gXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlUHJlc2VudCgpIHtcclxuICAgIGxldCAkZGVzYyA9ICQoJyNkZXNjSW5wdXQnKSxcclxuICAgICAgICAkcHJlc2VudGF0aW9uID0gJCgnI3ByZXNlbnRJbnB1dCcpLFxyXG4gICAgICAgICRidG5QcmVzZW50ID0gJCgnI3N1Ym1pdFByZXNlbnQnKTtcclxuICAgIFxyXG4gICAgaWYoJGRlc2MuZ2V0KDApLmZpbGVzLmxlbmd0aCAhPT0gMCAmJiAkcHJlc2VudGF0aW9uLmdldCgwKS5maWxlcy5sZW5ndGggIT09IDApe1xyXG4gICAgICAgICRidG5QcmVzZW50LmFkZENsYXNzKCdidG4tLWFjdGl2ZScpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0xlbmd0aCgpIHtcclxuICAgIGxldCAkY29tbWVudCA9ICQoJy5wYXJ0aWNpcGFudF9fYXNzZXNzbWVudC1pbnB1dCcpLFxyXG4gICAgICAgICRidG5NZW50b3IgPSAkKCcjYnRuTWVudG9yJyk7XHJcblxyXG4gICAgJGJ0bk1lbnRvci50b2dnbGVDbGFzcygnYnRuLS1hY3RpdmUnLCAkY29tbWVudC52YWwoKS5sZW5ndGggIT09IDApOyAvLyBwcmVmZXJhYmxlXHJcbn07XHJcblxyXG5mdW5jdGlvbiBjaGVja0Zvcm0oKSB7XHJcbiAgICBsZXQgJGJ0bkF1dGggPSAkKCcuZm9ybV9fYXV0aC1idG4nKSxcclxuICAgICAgICAkYXV0aElucHV0cyA9ICQoJy5mb3JtX19sb2dpbiwgLmZvcm1fX3Bhc3N3b3JkJyk7XHJcbiAgICAkYnRuQXV0aC50b2dnbGVDbGFzcygnYnRuLS13aGl0ZScsICRhdXRoSW5wdXRzLnZhbCgpLmxlbmd0aCAhPT0gMCk7IC8vIHByZWZlcmFibGVcclxufTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
