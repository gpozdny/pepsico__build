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

    // $(".dial").knob({
    //     'min': 0,
    //     'max': 10,
    //     'rotation': "anticlockwise"
    // });
    let $dial = $(".dial");

    $dial.on('change', function () {
        if ($(this).val() <= 4) {
            $(this).css('color', '#E72E36');
        } else if ($(this).val() <= 7) {
            $(this).css('color', '#F5913B');
        } else {
            $(this).css('color', '#009639');
        }
    });

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

function checkLength() {
    let $comment = $('.participant__assessment-input'),
        $btnMentor = $('#btnMentor');
        $btnMentor.toggleClass('btn--active', $comment.val().length !== 0); // preferable
    
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIC8vIGZpbHRlciBkcm9wZG93blxyXG4gICAgbGV0ICRkcm9wZG93biA9ICQoJy5maWx0ZXJfX2Ryb3Bkb3duJyksXHJcbiAgICAgICAgJGZpbHRlciA9ICQoJy5saXN0X19maWx0ZXInKSxcclxuICAgICAgICAkb3ZlcmxheU1lbnRvciA9ICQoJy5tZW50b3JfX292ZXJsYXknKSxcclxuICAgICAgICAkZmlsdGVySWNvbiA9ICQoJy5saXN0X19maWx0ZXInKTtcclxuXHJcbiAgICAkZmlsdGVyLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0b2dnbGVGaWx0ZXIoKTtcclxuICAgIH0pO1xyXG5cclxuICAgICRvdmVybGF5TWVudG9yLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0b2dnbGVGaWx0ZXIoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIHRvZ2dsZUZpbHRlcigpIHtcclxuICAgICAgICAkb3ZlcmxheU1lbnRvci50b2dnbGVDbGFzcygnc2hvd24nKTtcclxuICAgICAgICAkZHJvcGRvd24udG9nZ2xlQ2xhc3MoXCJmaWx0ZXJfX2Ryb3Bkb3duLS1hY3RpdmVcIik7XHJcbiAgICAgICAgJGZpbHRlci50b2dnbGVDbGFzcyhcImxpc3RfX2ZpbHRlci0tYWN0aXZlXCIpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBwb3B1cHNcclxuXHJcbiAgICBsZXQgJHByb2ZpbGVJdGVtID0gJCgnLnByb2ZpbGVfX2l0ZW0nKSxcclxuICAgICAgICAkYnJpZWZpbmcgPSAkKCcjYnJpZWZpbmcnKSxcclxuICAgICAgICAkcHJlc2VudGF0aW9uID0gJCgnI3ByZXNlbnRhdGlvbicpLFxyXG4gICAgICAgICRmaW5hbHMgPSAkKCcjZmluYWxzJyksXHJcbiAgICAgICAgJG92ZXJsYXkgPSAkKCcucHJvZmlsZV9fbW9kYWxzLW92ZXJsYXknKSxcclxuICAgICAgICAkbW9kYWxfYnJpZWZpbmcgPSAkKCcucHJvZmlsZV9fbW9kYWxzJyksXHJcbiAgICAgICAgJG1vZGFsX3ByZXNlbnRhdGlvbiA9ICQoJy5wcm9maWxlX19tb2RhbHMtcHJlc2VudGF0aW9uJyksXHJcbiAgICAgICAgJG1vZGFsX2ZhaWwgPSAkKCcucHJvZmlsZV9fbW9kYWxzLWZhaWwnKSxcclxuICAgICAgICAkY3Jvc3MgPSAkKCcucHJvZmlsZV9fbW9kYWwtY3Jvc3MnKSxcclxuICAgICAgICAkd3JhcHBlciA9ICQoJy53cmFwcGVyJyk7XHJcblxyXG4gICAgJHByb2ZpbGVJdGVtLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkb3ZlcmxheS5hZGRDbGFzcygncHJvZmlsZV9fbW9kYWxzLW92ZXJsYXktLWFjdGl2ZScpO1xyXG4gICAgICAgICR3cmFwcGVyLmFkZENsYXNzKCdibHVyJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkYnJpZWZpbmcub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRtb2RhbF9icmllZmluZy5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkcHJlc2VudGF0aW9uLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkbW9kYWxfcHJlc2VudGF0aW9uLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vICRmaW5hbHMub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gICAgICRtb2RhbF8kZmluYWxzLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgIC8vIH0pO1xyXG5cclxuICAgICRjcm9zcy5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmVtb3ZlTW9kYWxzKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmVNb2RhbHMoKSB7XHJcbiAgICAgICAgJCgnW2RhdGEtbW9kYWxdJykuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICAgICAgJG92ZXJsYXkucmVtb3ZlQ2xhc3MoXCJwcm9maWxlX19tb2RhbHMtb3ZlcmxheS0tYWN0aXZlXCIpO1xyXG4gICAgICAgICR3cmFwcGVyLnJlbW92ZUNsYXNzKCdibHVyJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFdoZW4gdGhlIHVzZXIgY2xpY2tzIGFueXdoZXJlIG91dHNpZGUgb2YgdGhlIG1vZGFsLCBjbG9zZSBpdFxyXG4gICAgbGV0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsJyk7XHJcbiAgICB3aW5kb3cub25jbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGlmIChldmVudC50YXJnZXQgPT0gbW9kYWwpIHtcclxuICAgICAgICAgICAgcmVtb3ZlTW9kYWxzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIHNob3dGYWlsKCkge1xyXG4gICAgICAgICRtb2RhbF9mYWlsLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgIH07XHJcblxyXG4gICAgJCgnLnByb2ZpbGVfX2l0ZW0tLWZhaWxlZCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcucHJvZmlsZV9fbW9kYWxzLXByZXNlbnRhdGlvbiwgLnByb2ZpbGVfX21vZGFscycpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgICAgIHNob3dGYWlsKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBpdGVtcycgYmFja2dyb3VuZHNcclxuXHJcbiAgICBpZiAoJGJyaWVmaW5nLmlzKCcucHJvZmlsZV9faXRlbS0tYWN0aXZlJykpIHtcclxuICAgICAgICAkYnJpZWZpbmcuYWRkQ2xhc3MoJ3Byb2ZpbGVfX2l0ZW0taWNvbi0taWRlYS13aGl0ZScpXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCRmaW5hbHMuaXMoJy5wcm9maWxlX19pdGVtLS1hY3RpdmUnKSkge1xyXG4gICAgICAgICRmaW5hbHMuYWRkQ2xhc3MoJ3Byb2ZpbGVfX2l0ZW0taWNvbi0tZmluYWxzLWFjdGl2ZScpXHJcbiAgICB9IGVsc2UgaWYgKCRmaW5hbHMuaXMoJy5wcm9maWxlX19pdGVtLS1zdWNjZXNzJykpIHtcclxuICAgICAgICAkZmluYWxzLmFkZENsYXNzKCdwcm9maWxlX19pdGVtLWljb24tLWZpbmFscy1zdWNjZXNzJylcclxuICAgIH1cclxuXHJcbiAgICBpZiAoJHByZXNlbnRhdGlvbi5pcygnLnByb2ZpbGVfX2l0ZW0tLWFjdGl2ZScpKSB7XHJcbiAgICAgICAgJHByZXNlbnRhdGlvbi5hZGRDbGFzcygncHJvZmlsZV9faXRlbS1pY29uLS1wcmVzZW50YXRpb24tYWN0aXZlJylcclxuICAgIH0gZWxzZSBpZiAoJHByZXNlbnRhdGlvbi5pcygnLnByb2ZpbGVfX2l0ZW0tLXN1Y2Nlc3MnKSkge1xyXG4gICAgICAgICRwcmVzZW50YXRpb24uYWRkQ2xhc3MoJ3Byb2ZpbGVfX2l0ZW0taWNvbi0tcHJlc2VudGF0aW9uLXN1Y2Nlc3MnKVxyXG4gICAgfVxyXG4gICAgLy8gcGFydGljaXBhbnQgbGlzdCBcclxuXHJcbiAgICBsZXQgJHBhcnRpY2lwYW50ID0gJCgnLnBhcnRpY2lwYW50Jyk7XHJcblxyXG4gICAgJHBhcnRpY2lwYW50Lm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwicGFydGljaXBhbnQtLWFjdGl2ZVwiKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKFwicGFydGljaXBhbnQtLWFjdGl2ZVwiKTtcclxuICAgIH0pXHJcbiAgICAvLyBqUXVlcnkgS25vYlxyXG5cclxuICAgIC8vICQoXCIuZGlhbFwiKS5rbm9iKHtcclxuICAgIC8vICAgICAnbWluJzogMCxcclxuICAgIC8vICAgICAnbWF4JzogMTAsXHJcbiAgICAvLyAgICAgJ3JvdGF0aW9uJzogXCJhbnRpY2xvY2t3aXNlXCJcclxuICAgIC8vIH0pO1xyXG4gICAgbGV0ICRkaWFsID0gJChcIi5kaWFsXCIpO1xyXG5cclxuICAgICRkaWFsLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCQodGhpcykudmFsKCkgPD0gNCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmNzcygnY29sb3InLCAnI0U3MkUzNicpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoJCh0aGlzKS52YWwoKSA8PSA3KSB7XHJcbiAgICAgICAgICAgICQodGhpcykuY3NzKCdjb2xvcicsICcjRjU5MTNCJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ2NvbG9yJywgJyMwMDk2MzknKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkZGlhbC5rbm9iKHtcclxuICAgICAgICAnbWluJzogMCxcclxuICAgICAgICAnbWF4JzogMTAsXHJcbiAgICAgICAgJ3JvdGF0aW9uJzogXCJhbnRpY2xvY2t3aXNlXCIsXHJcbiAgICAgICAgJ2NoYW5nZSc6IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHYpO1xyXG4gICAgICAgICAgICBsZXQgY29sb3I7XHJcbiAgICAgICAgICAgIGlmICh2IDw9IDQpIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yID0gJyNFNzJFMzYnO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHYgPD0gNykge1xyXG4gICAgICAgICAgICAgICAgY29sb3IgPSAnI0Y1OTEzQic7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvciA9ICcjMDA5NjM5JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkZGlhbC50cmlnZ2VyKFxyXG4gICAgICAgICAgICAgICAgJ2NvbmZpZ3VyZScsIHtcclxuICAgICAgICAgICAgICAgICAgICBcImZnQ29sb3JcIjogY29sb3JcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH0pO1xyXG59KTtcclxuLy8gcG9wdXBzIGZpbGVzXHJcblxyXG5sZXQgJGlucHV0TmFtZSA9ICQoJy5wcm9maWxlX19hdHRhY2htZW50cy1pbnB1dCcpLFxyXG4gICAgJHRoaXMgPSAkKHRoaXMpLFxyXG4gICAgJGRvY3hQcmVzZW50YXRpb24gPSAkKCcjZG9jeFByZXNlbnRhdGlvbicpLFxyXG4gICAgJHBwdHggPSAkKCcjcHB0eCcpLFxyXG4gICAgJGRvY3ggPSAkKCcjZG9jeCcpLFxyXG4gICAgJGltYWdlID0gJCgnI2ltYWdlJyksXHJcbiAgICAkbGFiZWxEb2N4ID0gJCgnI2xhYmVsRG9jeCcpLFxyXG4gICAgJGxhYmVsSW1hZ2UgPSAkKCcjbGFiZWxJbWFnZScpLFxyXG4gICAgJGxhYmVsUHJlc2VudGF0aW9uID0gJCgnI2xhYmVsUHJlc2VudGF0aW9uJyksXHJcbiAgICAkbGFiZWxEZXNjID0gJCgnI2xhYmVsRGVzYycpLFxyXG4gICAgJGF0dGNoQnRuID0gJCgnLnByb2ZpbGVfX2F0dGFjaG1lbnRzLWJ0bicpO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZURvY3goKSB7XHJcbiAgICAkZG9jeC5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAkZG9jeC5hZGRDbGFzcygnc2hvdycpO1xyXG4gICAgJGxhYmVsRG9jeC5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VJbWFnZSgpIHtcclxuICAgICRpbWFnZS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAkaW1hZ2UuYWRkQ2xhc3MoJ3Nob3cnKTtcclxuICAgICRsYWJlbEltYWdlLmFkZENsYXNzKCdoaWRkZW4nKTtcclxuICAgICRhdHRjaEJ0bi5hZGRDbGFzcygnYnRuLS1hY3RpdmUnKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNoYW5nZURlc2MoKSB7XHJcbiAgICAkZG9jeFByZXNlbnRhdGlvbi5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAkZG9jeFByZXNlbnRhdGlvbi5hZGRDbGFzcygnc2hvdycpO1xyXG4gICAgJGxhYmVsRGVzYy5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VQcmVzZW50YXRpb24oKSB7XHJcbiAgICAkcHB0eC5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAkcHB0eC5hZGRDbGFzcygnc2hvdycpO1xyXG4gICAgJGxhYmVsUHJlc2VudGF0aW9uLmFkZENsYXNzKCdoaWRkZW4nKTtcclxuICAgICRhdHRjaEJ0bi5hZGRDbGFzcygnYnRuLS1hY3RpdmUnKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIHByZXZpZXdGaWxlKCkge1xyXG5cclxuICAgIGxldCBwcmV2aWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ltYWdlJyk7XHJcbiAgICBsZXQgZmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbWdJbnB1dCcpLmZpbGVzWzBdO1xyXG4gICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcblxyXG4gICAgcmVhZGVyLm9ubG9hZGVuZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBwcmV2aWV3LnNyYyA9IHJlYWRlci5yZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGZpbGUpIHtcclxuICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcHJldmlldy5zcmMgPSBcIlwiO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gY2hlY2tMZW5ndGgoKSB7XHJcbiAgICBsZXQgJGNvbW1lbnQgPSAkKCcucGFydGljaXBhbnRfX2Fzc2Vzc21lbnQtaW5wdXQnKSxcclxuICAgICAgICAkYnRuTWVudG9yID0gJCgnI2J0bk1lbnRvcicpO1xyXG4gICAgICAgICRidG5NZW50b3IudG9nZ2xlQ2xhc3MoJ2J0bi0tYWN0aXZlJywgJGNvbW1lbnQudmFsKCkubGVuZ3RoICE9PSAwKTsgLy8gcHJlZmVyYWJsZVxyXG4gICAgXHJcbn07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
