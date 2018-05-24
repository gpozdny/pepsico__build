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

    // analytics

    // cities
    var ctx = $("#cities");

    var citiesChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ["Москва", "Санкт-Петербург", "Ростов-на-Дону", "Воронеж", "Прочее"],
            datasets: [{
                label: '# of Votes',
                data: [13, 19, 3, 5, 2],
                backgroundColor: [
                    '#004C97',
                    '#0085CA',
                    '#00AAE2',
                    '#3CBEE9',
                    '#C4C9CD'
                ],
                borderWidth: 0
            }]
        },
        options: {
            cutoutPercentage: 75,
            tooltips: {
                backgroundColor: '#FFF',
                bodyFontColor: '#00aae2',
                bodyFontSize: 12,
                bodyFontFamily: 'Gotham-bold',
                borderColor: 'rgba(0, 0, 0, 0.2)',
                borderWidth: 1,
                displayColors: false
            },
            legend: {
                responsive: true,
                display: true,
                position: 'right',
                labels: {
                    fontColor: '#2b2b2b',
                    fontSize: 12,
                    // fontFamily: 'Gotham Book',
                    padding: 10,
                    usePointStyle: true
                }
            }
        }
    });
    // universities
    var ctx2 = $("#univer");

    var univerDoughnutChart = new Chart(ctx2, {
        type: 'doughnut',
        data: {
            labels: ["МГУ", "МГИМО", "СПбГУ", "ЮФО", "Прочие"],
            datasets: [{
                label: '# of Votes',
                data: [13, 19, 3, 5, 2],
                backgroundColor: [
                    '#004C97',
                    '#0085CA',
                    '#00AAE2',
                    '#3CBEE9',
                    '#C4C9CD'
                ],
                borderWidth: 0
            }]
        },
        options: {
            cutoutPercentage: 75,
            tooltips: {
                backgroundColor: '#FFF',
                bodyFontColor: '#00aae2',
                bodyFontSize: 12,
                bodyFontFamily: 'Gotham-bold',
                borderColor: 'rgba(0, 0, 0, 0.2)',
                borderWidth: 1,
                displayColors: false
            },
            legend: {
                responsive: true,
                display: true,
                position: 'right',
                labels: {
                    fontColor: '#2b2b2b',
                    fontSize: 12,
                    // fontFamily: 'Gotham Book',
                    padding: 10,
                    usePointStyle: true
                }
            }
        }
    });
    // branches 

    var ctx3 = $("#branches");

    var branchesChart = new Chart(ctx3, {
        type: 'doughnut',
        data: {
            labels: ["Маркетинг", "Менеджмент", "Интернет-маркетинг", "SММ", "Прочие"],
            datasets: [{
                label: '# of Votes',
                data: [13, 19, 3, 5, 2],
                backgroundColor: [
                    '#004C97',
                    '#0085CA',
                    '#00AAE2',
                    '#3CBEE9',
                    '#C4C9CD'
                ],
                borderWidth: 0
            }]
        },
        options: {
            cutoutPercentage: 75,
            tooltips: {
                backgroundColor: '#FFF',
                bodyFontColor: '#00aae2',
                bodyFontSize: 12,
                bodyFontFamily: 'Gotham-bold',
                borderColor: 'rgba(0, 0, 0, 0.2)',
                borderWidth: 1,
                displayColors: false
            },
            legend: {
                responsive: true,
                display: true,
                position: 'right',
                labels: {
                    fontColor: '#2b2b2b',
                    fontSize: 12,
                    padding: 10,
                    usePointStyle: true
                }
            }
        }
    });
    // main-stream

    var ctx4 = $("#main-stream");

    var mainChart = new Chart(ctx4, {
        type: 'doughnut',
        data: {
            labels: ["Иследования и разработки",
                "Коммерциализация инноваций",
                "Интернет-маркетинг",
                "Коммерческий отдел (Мск)", "Коммерческий отдел (Спб)",
                "Коммерческий отдел (РнД)",
                "Маркетинг",
                "Планирование цепей поставок",
                "Управление мастер-данными",
                "Финансы",
                "R&D"
            ],
            datasets: [{
                label: '# of Votes',
                data: [13, 19, 3, 5, 2, 4, 6, 8, 9, 9, 5],
                backgroundColor: [
                    '#004C97',
                    '#0085CA',
                    '#00AAE2',
                    '#3CBEE9',
                    '#EF6530',
                    '#F5913B',
                    '#009639',
                    '#78BE20',
                    '#FFCC3D',
                    '#E72E36',
                    '#C4C9CD'
                ],
                borderWidth: 0
            }]
        },
        options: {
            cutoutPercentage: 75,
            tooltips: {
                backgroundColor: '#FFF',
                bodyFontColor: '#00aae2',
                bodyFontSize: 12,
                bodyFontFamily: 'Gotham-bold',
                borderColor: 'rgba(0, 0, 0, 0.2)',
                borderWidth: 1,
                displayColors: false
            },
            legend: {
                responsive: true,
                display: true,
                position: 'right',
                labels: {
                    fontColor: '#2b2b2b',
                    fontSize: 12,
                    padding: 10,
                    usePointStyle: true
                }
            }
        }
    });

    //secondary stream

    var ctx5 = $("#secondary-stream");

    var secondaryChart = new Chart(ctx5, {
        type: 'doughnut',
        data: {
            labels: ["Иследования и разработки",
                "Коммерциализация инноваций",
                "Интернет-маркетинг",
                "Коммерческий отдел (Мск)", "Коммерческий отдел (Спб)",
                "Коммерческий отдел (РнД)",
                "Маркетинг",
                "Планирование цепей поставок",
                "Управление мастер-данными",
                "Финансы",
                "R&D"
            ],
            datasets: [{
                label: '# of Votes',
                data: [13, 19, 3, 5, 2, 4, 6, 8, 9, 9, 5],
                backgroundColor: [
                    '#004C97',
                    '#0085CA',
                    '#00AAE2',
                    '#3CBEE9',
                    '#EF6530',
                    '#F5913B',
                    '#009639',
                    '#78BE20',
                    '#FFCC3D',
                    '#E72E36',
                    '#C4C9CD'
                ],
                borderWidth: 0
            }]
        },
        options: {
            cutoutPercentage: 75,
            tooltips: {
                backgroundColor: '#FFF',
                bodyFontColor: '#00aae2',
                bodyFontSize: 12,
                bodyFontFamily: 'Gotham-bold',
                borderColor: 'rgba(0, 0, 0, 0.2)',
                borderWidth: 1,
                displayColors: false
            },
            legend: {
                responsive: true,
                display: true,
                position: 'right',
                labels: {
                    fontColor: '#2b2b2b',
                    fontSize: 12,
                    padding: 10,
                    usePointStyle: true
                }
            }
        }
    });
});
// popups files

let $inputName = $('.profile__attachments-input'),
    $imgInput = $('#imgInput'),
    $docxInput = $('#docxInput'),
    $descInput = $('#descInput'),
    $presentInput = $('#presentInput'),
    $docxPresentation = $('#docxPresentation'),
    $pptx = $('#pptx'),
    $docx = $('#docx'),
    $image = $('#imageWrap'),
    $labelDocx = $('#labelDocx'),
    $labelImage = $('#labelImage'),
    $labelPresentation = $('#labelPresentation'),
    $labelDesc = $('#labelDesc'),
    $attchBtn = $('.profile__attachments-btn');

// delete attachments

$('[data-close]').on('click', function () {
    let $this = $(this),
        $dataType = $this.data('close');

    console.log($dataType);
    switch ($dataType) {
        case 'docx':
            deleteDocx();
            validateProject();
            break;
        case 'img':
            deleteImg();
            validateProject();
            break;
        case 'description':
            deleteDescription();
            validatePresent();
            break;
        case 'presentation':
            deletePresentation();
            validatePresent();
            break;
    }

});

function deleteDocx() {
    $docxInput.wrap('<form>').closest('form').get(0).reset();
    $docxInput.unwrap();
    $docx.removeClass('show');
    $docx.addClass('hidden');
    $labelDocx.removeClass('hidden');
    $labelDocx.addClass('show');
};

function deleteImg() {
    $imgInput.wrap('<form>').closest('form').get(0).reset();
    $imgInput.unwrap();
    $image.removeClass('show');
    $image.addClass('hidden');
    $labelImage.removeClass('hidden');
    $labelImage.addClass('show');
};

function deleteDescription() {
    $descInput.wrap('<form>').closest('form').get(0).reset();
    $descInput.unwrap();
    $docxPresentation.removeClass('show');
    $docxPresentation.addClass('hidden');
    $labelDesc.removeClass('hidden');
    $labelDesc.addClass('show');
};

function deletePresentation() {
    $imgInput.wrap('<form>').closest('form').get(0).reset();
    $imgInput.unwrap();
    $pptx.removeClass('show');
    $pptx.addClass('hidden');
    $labelPresentation.removeClass('hidden');
    $labelPresentation.addClass('show');
};

function changeDocx() {
    $docx.removeClass('hidden');
    $docx.addClass('show');
    $labelDocx.removeClass('show');
    $labelDocx.addClass('hidden');
};

function changeImage() {
    $image.removeClass('hidden');
    $image.addClass('show');
    $labelImage.removeClass('show');
    $labelImage.addClass('hidden');
};

function changeDesc() {
    $docxPresentation.removeClass('hidden');
    $docxPresentation.addClass('show');
    $labelDesc.removeClass('show');
    $labelDesc.addClass('hidden');
};

function changePresentation() {
    $pptx.removeClass('hidden');
    $pptx.addClass('show');
    $labelPresentation.removeClass('show');
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
    } else $btn.removeClass('btn--active');
};

function validatePresent() {
    let $desc = $('#descInput'),
        $presentation = $('#presentInput'),
        $btnPresent = $('#submitPresent');

    if ($desc.get(0).files.length !== 0 && $presentation.get(0).files.length !== 0) {
        $btnPresent.addClass('btn--active');
    } else $btnPresent.removeClass('btn--active');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAvLyBmaWx0ZXIgZHJvcGRvd25cclxuICAgIGxldCAkZHJvcGRvd24gPSAkKCcuZmlsdGVyX19kcm9wZG93bicpLFxyXG4gICAgICAgICRmaWx0ZXIgPSAkKCcubGlzdF9fZmlsdGVyJyksXHJcbiAgICAgICAgJG92ZXJsYXlNZW50b3IgPSAkKCcubWVudG9yX19vdmVybGF5JyksXHJcbiAgICAgICAgJGZpbHRlckljb24gPSAkKCcubGlzdF9fZmlsdGVyJyk7XHJcblxyXG4gICAgJGZpbHRlci5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdG9nZ2xlRmlsdGVyKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkb3ZlcmxheU1lbnRvci5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdG9nZ2xlRmlsdGVyKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiB0b2dnbGVGaWx0ZXIoKSB7XHJcbiAgICAgICAgJG92ZXJsYXlNZW50b3IudG9nZ2xlQ2xhc3MoJ3Nob3duJyk7XHJcbiAgICAgICAgJGRyb3Bkb3duLnRvZ2dsZUNsYXNzKCdmaWx0ZXJfX2Ryb3Bkb3duLS1hY3RpdmUnKTtcclxuICAgICAgICAkZmlsdGVyLnRvZ2dsZUNsYXNzKCdsaXN0X19maWx0ZXItLWFjdGl2ZScpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBwb3B1cHNcclxuXHJcbiAgICBsZXQgJHByb2ZpbGVJdGVtID0gJCgnLnByb2ZpbGVfX2l0ZW0nKSxcclxuICAgICAgICAkaW50ZXJ2aWV3ID0gJCgnI2ludGVydmlldycpLFxyXG4gICAgICAgICRicmllZmluZyA9ICQoJyNicmllZmluZycpLFxyXG4gICAgICAgICRwcmVzZW50YXRpb24gPSAkKCcjcHJlc2VudGF0aW9uJyksXHJcbiAgICAgICAgJGZpbmFscyA9ICQoJyNmaW5hbHMnKSxcclxuICAgICAgICAkb3ZlcmxheSA9ICQoJy5wcm9maWxlX19tb2RhbHMtb3ZlcmxheScpLFxyXG4gICAgICAgICRtb2RhbF9icmllZmluZyA9ICQoJy5wcm9maWxlX19tb2RhbHMnKSxcclxuICAgICAgICAkbW9kYWxfcHJlc2VudGF0aW9uID0gJCgnLnByb2ZpbGVfX21vZGFscy1wcmVzZW50YXRpb24nKSxcclxuICAgICAgICAkbW9kYWxfZmFpbCA9ICQoJy5wcm9maWxlX19tb2RhbHMtZmFpbCcpLFxyXG4gICAgICAgICRtb2RhbF9kZWFkbGluZSA9ICQoJy5wcm9maWxlX19tb2RhbHMtZGVhZGxpbmUnKSxcclxuICAgICAgICAkbW9kYWxfZmluYWxzID0gJCgnI2ZpbmFsc01vZGFsJyksXHJcbiAgICAgICAgJG1vZGFsX3N1Y2Nlc3MgPSAkKCcjc3VjY2Vzc01vZGFsJyksXHJcbiAgICAgICAgJHBsYWNlaG9sZGVyID0gJCgnI3BsYWNlaG9sZGVyJyksXHJcbiAgICAgICAgJGNyb3NzID0gJCgnLnByb2ZpbGVfX21vZGFsLWNyb3NzJyksXHJcbiAgICAgICAgJGJ0bkNsb3NlID0gJCgnLmJ0bi1jbG9zZScpLFxyXG4gICAgICAgICR3cmFwcGVyID0gJCgnLndyYXBwZXInKTtcclxuXHJcbiAgICBmdW5jdGlvbiBhZGRCbHVycmVkT3ZlcmxheSgpIHtcclxuICAgICAgICAkb3ZlcmxheS5hZGRDbGFzcygncHJvZmlsZV9fbW9kYWxzLW92ZXJsYXktLWFjdGl2ZScpO1xyXG4gICAgICAgICR3cmFwcGVyLmFkZENsYXNzKCdibHVyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgJCgnW2RhdGEtbW9kYWxdJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCAkdGhpcyA9ICQodGhpcyksXHJcbiAgICAgICAgICAgICRkYXRhVHlwZSA9ICR0aGlzLmRhdGEoJ21vZGFsJyk7XHJcblxyXG4gICAgICAgIHJlbW92ZU1vZGFscygpO1xyXG4gICAgICAgIGFkZEJsdXJyZWRPdmVybGF5KCk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCRkYXRhVHlwZSk7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoJGRhdGFUeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2FkZC1icmllZic6XHJcbiAgICAgICAgICAgICAgICAkbW9kYWxfYnJpZWZpbmcuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2FkZC1wcmVzZW50YXRpb24nOlxyXG4gICAgICAgICAgICAgICAgJG1vZGFsX3ByZXNlbnRhdGlvbi5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnZmFpbCc6XHJcbiAgICAgICAgICAgICAgICAkbW9kYWxfZmFpbC5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnZGVhZGxpbmUnOlxyXG4gICAgICAgICAgICAgICAgJG1vZGFsX2RlYWRsaW5lLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdzdWNjZXNzJzpcclxuICAgICAgICAgICAgICAgICRtb2RhbF9zdWNjZXNzLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdmaW5hbCc6XHJcbiAgICAgICAgICAgICAgICAkbW9kYWxfZmluYWxzLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAkY3Jvc3Mub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJlbW92ZU1vZGFscygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJGJ0bkNsb3NlLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZW1vdmVNb2RhbHMoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZU1vZGFscygpIHtcclxuICAgICAgICAkKCdbZGF0YS1wb3B1cF0nKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAgICAgICAkb3ZlcmxheS5yZW1vdmVDbGFzcyhcInByb2ZpbGVfX21vZGFscy1vdmVybGF5LS1hY3RpdmVcIik7XHJcbiAgICAgICAgJHdyYXBwZXIucmVtb3ZlQ2xhc3MoJ2JsdXInKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gV2hlbiB0aGUgdXNlciBjbGlja3MgYW55d2hlcmUgb3V0c2lkZSBvZiB0aGUgbW9kYWwsIGNsb3NlIGl0XHJcbiAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwnKTtcclxuICAgIHdpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PSBtb2RhbCkge1xyXG4gICAgICAgICAgICByZW1vdmVNb2RhbHMoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGl0ZW1zJyBiYWNrZ3JvdW5kc1xyXG4gICAgaWYgKCRpbnRlcnZpZXcuaXMoJy5wcm9maWxlX19pdGVtLS1kZXNjcmlwdGlvbicpKSB7XHJcbiAgICAgICAgJGludGVydmlldy5hZGRDbGFzcygncHJvZmlsZV9faXRlbS1pY29uLS1pbnRlcnZpZXctd2hpdGUnKVxyXG4gICAgfVxyXG5cclxuICAgIGlmICgkYnJpZWZpbmcuaXMoJy5wcm9maWxlX19pdGVtLS1kZXNjcmlwdGlvbicpKSB7XHJcbiAgICAgICAgJGJyaWVmaW5nLmFkZENsYXNzKCdwcm9maWxlX19pdGVtLWljb24tLWlkZWEtd2hpdGUnKVxyXG4gICAgfVxyXG5cclxuICAgIGlmICgkZmluYWxzLmlzKCcucHJvZmlsZV9faXRlbS0tZGVzY3JpcHRpb24nKSkge1xyXG4gICAgICAgICRmaW5hbHMuYWRkQ2xhc3MoJ3Byb2ZpbGVfX2l0ZW0taWNvbi0tZmluYWxzLWFjdGl2ZScpXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCRwcmVzZW50YXRpb24uaXMoJy5wcm9maWxlX19pdGVtLS1kZXNjcmlwdGlvbicpKSB7XHJcbiAgICAgICAgJHByZXNlbnRhdGlvbi5hZGRDbGFzcygncHJvZmlsZV9faXRlbS1pY29uLS1wcmVzZW50YXRpb24tYWN0aXZlJylcclxuICAgIH1cclxuXHJcbiAgICAvLyBwYXJ0aWNpcGFudCBsaXN0IFxyXG5cclxuICAgIGxldCAkcGFydGljaXBhbnQgPSAkKCcucGFydGljaXBhbnQnKTtcclxuXHJcbiAgICAkcGFydGljaXBhbnQub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJwYXJ0aWNpcGFudC0tYWN0aXZlXCIpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoXCJwYXJ0aWNpcGFudC0tYWN0aXZlXCIpO1xyXG4gICAgfSlcclxuICAgIC8vIGpRdWVyeSBLbm9iXHJcblxyXG4gICAgbGV0ICRkaWFsID0gJChcIi5kaWFsXCIpO1xyXG5cclxuICAgICRkaWFsLmtub2Ioe1xyXG4gICAgICAgICdtaW4nOiAwLFxyXG4gICAgICAgICdtYXgnOiAxMCxcclxuICAgICAgICAncm90YXRpb24nOiBcImFudGljbG9ja3dpc2VcIixcclxuICAgICAgICAncmVsZWFzZSc6IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgICAgIGxldCBjb2xvcjtcclxuICAgICAgICAgICAgbGV0IGRhdGFIaWdoID0gJGRpYWwuZGF0YShcImhpZ2hcIik7XHJcbiAgICAgICAgICAgIGxldCBkYXRhTG93ID0gJGRpYWwuZGF0YShcImxvd1wiKTtcclxuICAgICAgICAgICAgaWYgKHYgPD0gZGF0YUxvdykge1xyXG4gICAgICAgICAgICAgICAgY29sb3IgPSAnI0U3MkUzNic7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodiA8IGRhdGFIaWdoKSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvciA9ICcjRjU5MTNCJztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yID0gJyMwMDk2MzknO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuJC50cmlnZ2VyKCdjb25maWd1cmUnLCB7XHJcbiAgICAgICAgICAgICAgICBcImZnQ29sb3JcIjogY29sb3IsXHJcbiAgICAgICAgICAgICAgICBcImlucHV0Q29sb3JcIjogY29sb3JcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvLyBkaXNhYmxlIEVOVEVSIG9uIGlucHV0XHJcbiAgICAkZGlhbC5rZXlwcmVzcyhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmIChlLndoaWNoID09IDEzKSBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBicmllZiArIHByZXNlbnRhdGlvbiB3aWR0aCAhIGNydXRjaCAhXHJcbiAgICBsZXQgJHByb2plY3RzID0gJCgnLnBhcnRpY2lwYW50LWluZm9fX3JpZ2h0Jyk7XHJcblxyXG4gICAgaWYgKCRwcm9qZWN0cy5sZW5ndGggPT0gMSkge1xyXG4gICAgICAgICRwcm9qZWN0cy5jc3MoXCJ3aWR0aFwiLCBcIjUwJVwiKTtcclxuICAgIH0gZWxzZSAkcHJvamVjdHMuY3NzKFwid2lkdGhcIiwgXCIyNSVcIik7XHJcblxyXG4gICAgLy8gYW5hbHl0aWNzXHJcblxyXG4gICAgLy8gY2l0aWVzXHJcbiAgICB2YXIgY3R4ID0gJChcIiNjaXRpZXNcIik7XHJcblxyXG4gICAgdmFyIGNpdGllc0NoYXJ0ID0gbmV3IENoYXJ0KGN0eCwge1xyXG4gICAgICAgIHR5cGU6ICdkb3VnaG51dCcsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBsYWJlbHM6IFtcItCc0L7RgdC60LLQsFwiLCBcItCh0LDQvdC60YIt0J/QtdGC0LXRgNCx0YPRgNCzXCIsIFwi0KDQvtGB0YLQvtCyLdC90LAt0JTQvtC90YNcIiwgXCLQktC+0YDQvtC90LXQtlwiLCBcItCf0YDQvtGH0LXQtVwiXSxcclxuICAgICAgICAgICAgZGF0YXNldHM6IFt7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogJyMgb2YgVm90ZXMnLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogWzEzLCAxOSwgMywgNSwgMl0sXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcclxuICAgICAgICAgICAgICAgICAgICAnIzAwNEM5NycsXHJcbiAgICAgICAgICAgICAgICAgICAgJyMwMDg1Q0EnLFxyXG4gICAgICAgICAgICAgICAgICAgICcjMDBBQUUyJyxcclxuICAgICAgICAgICAgICAgICAgICAnIzNDQkVFOScsXHJcbiAgICAgICAgICAgICAgICAgICAgJyNDNEM5Q0QnXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDBcclxuICAgICAgICAgICAgfV1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgY3V0b3V0UGVyY2VudGFnZTogNzUsXHJcbiAgICAgICAgICAgIHRvb2x0aXBzOiB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRkZGJyxcclxuICAgICAgICAgICAgICAgIGJvZHlGb250Q29sb3I6ICcjMDBhYWUyJyxcclxuICAgICAgICAgICAgICAgIGJvZHlGb250U2l6ZTogMTIsXHJcbiAgICAgICAgICAgICAgICBib2R5Rm9udEZhbWlseTogJ0dvdGhhbS1ib2xkJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjIpJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheUNvbG9yczogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmlnaHQnLFxyXG4gICAgICAgICAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udENvbG9yOiAnIzJiMmIyYicsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDEyLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZvbnRGYW1pbHk6ICdHb3RoYW0gQm9vaycsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlUG9pbnRTdHlsZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvLyB1bml2ZXJzaXRpZXNcclxuICAgIHZhciBjdHgyID0gJChcIiN1bml2ZXJcIik7XHJcblxyXG4gICAgdmFyIHVuaXZlckRvdWdobnV0Q2hhcnQgPSBuZXcgQ2hhcnQoY3R4Miwge1xyXG4gICAgICAgIHR5cGU6ICdkb3VnaG51dCcsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBsYWJlbHM6IFtcItCc0JPQo1wiLCBcItCc0JPQmNCc0J5cIiwgXCLQodCf0LHQk9CjXCIsIFwi0K7QpNCeXCIsIFwi0J/RgNC+0YfQuNC1XCJdLFxyXG4gICAgICAgICAgICBkYXRhc2V0czogW3tcclxuICAgICAgICAgICAgICAgIGxhYmVsOiAnIyBvZiBWb3RlcycsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBbMTMsIDE5LCAzLCA1LCAyXSxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogW1xyXG4gICAgICAgICAgICAgICAgICAgICcjMDA0Qzk3JyxcclxuICAgICAgICAgICAgICAgICAgICAnIzAwODVDQScsXHJcbiAgICAgICAgICAgICAgICAgICAgJyMwMEFBRTInLFxyXG4gICAgICAgICAgICAgICAgICAgICcjM0NCRUU5JyxcclxuICAgICAgICAgICAgICAgICAgICAnI0M0QzlDRCdcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMFxyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICBjdXRvdXRQZXJjZW50YWdlOiA3NSxcclxuICAgICAgICAgICAgdG9vbHRpcHM6IHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGRkYnLFxyXG4gICAgICAgICAgICAgICAgYm9keUZvbnRDb2xvcjogJyMwMGFhZTInLFxyXG4gICAgICAgICAgICAgICAgYm9keUZvbnRTaXplOiAxMixcclxuICAgICAgICAgICAgICAgIGJvZHlGb250RmFtaWx5OiAnR290aGFtLWJvbGQnLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuMiknLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5Q29sb3JzOiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyaWdodCcsXHJcbiAgICAgICAgICAgICAgICBsYWJlbHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBmb250Q29sb3I6ICcjMmIyYjJiJyxcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZm9udEZhbWlseTogJ0dvdGhhbSBCb29rJyxcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICB1c2VQb2ludFN0eWxlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vIGJyYW5jaGVzIFxyXG5cclxuICAgIHZhciBjdHgzID0gJChcIiNicmFuY2hlc1wiKTtcclxuXHJcbiAgICB2YXIgYnJhbmNoZXNDaGFydCA9IG5ldyBDaGFydChjdHgzLCB7XHJcbiAgICAgICAgdHlwZTogJ2RvdWdobnV0JyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGxhYmVsczogW1wi0JzQsNGA0LrQtdGC0LjQvdCzXCIsIFwi0JzQtdC90LXQtNC20LzQtdC90YJcIiwgXCLQmNC90YLQtdGA0L3QtdGCLdC80LDRgNC60LXRgtC40L3Qs1wiLCBcIlPQnNCcXCIsIFwi0J/RgNC+0YfQuNC1XCJdLFxyXG4gICAgICAgICAgICBkYXRhc2V0czogW3tcclxuICAgICAgICAgICAgICAgIGxhYmVsOiAnIyBvZiBWb3RlcycsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBbMTMsIDE5LCAzLCA1LCAyXSxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogW1xyXG4gICAgICAgICAgICAgICAgICAgICcjMDA0Qzk3JyxcclxuICAgICAgICAgICAgICAgICAgICAnIzAwODVDQScsXHJcbiAgICAgICAgICAgICAgICAgICAgJyMwMEFBRTInLFxyXG4gICAgICAgICAgICAgICAgICAgICcjM0NCRUU5JyxcclxuICAgICAgICAgICAgICAgICAgICAnI0M0QzlDRCdcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMFxyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICBjdXRvdXRQZXJjZW50YWdlOiA3NSxcclxuICAgICAgICAgICAgdG9vbHRpcHM6IHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGRkYnLFxyXG4gICAgICAgICAgICAgICAgYm9keUZvbnRDb2xvcjogJyMwMGFhZTInLFxyXG4gICAgICAgICAgICAgICAgYm9keUZvbnRTaXplOiAxMixcclxuICAgICAgICAgICAgICAgIGJvZHlGb250RmFtaWx5OiAnR290aGFtLWJvbGQnLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuMiknLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5Q29sb3JzOiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyaWdodCcsXHJcbiAgICAgICAgICAgICAgICBsYWJlbHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBmb250Q29sb3I6ICcjMmIyYjJiJyxcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTIsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlUG9pbnRTdHlsZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvLyBtYWluLXN0cmVhbVxyXG5cclxuICAgIHZhciBjdHg0ID0gJChcIiNtYWluLXN0cmVhbVwiKTtcclxuXHJcbiAgICB2YXIgbWFpbkNoYXJ0ID0gbmV3IENoYXJ0KGN0eDQsIHtcclxuICAgICAgICB0eXBlOiAnZG91Z2hudXQnLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgbGFiZWxzOiBbXCLQmNGB0LvQtdC00L7QstCw0L3QuNGPINC4INGA0LDQt9GA0LDQsdC+0YLQutC4XCIsXHJcbiAgICAgICAgICAgICAgICBcItCa0L7QvNC80LXRgNGG0LjQsNC70LjQt9Cw0YbQuNGPINC40L3QvdC+0LLQsNGG0LjQuVwiLFxyXG4gICAgICAgICAgICAgICAgXCLQmNC90YLQtdGA0L3QtdGCLdC80LDRgNC60LXRgtC40L3Qs1wiLFxyXG4gICAgICAgICAgICAgICAgXCLQmtC+0LzQvNC10YDRh9C10YHQutC40Lkg0L7RgtC00LXQuyAo0JzRgdC6KVwiLCBcItCa0L7QvNC80LXRgNGH0LXRgdC60LjQuSDQvtGC0LTQtdC7ICjQodC/0LEpXCIsXHJcbiAgICAgICAgICAgICAgICBcItCa0L7QvNC80LXRgNGH0LXRgdC60LjQuSDQvtGC0LTQtdC7ICjQoNC90JQpXCIsXHJcbiAgICAgICAgICAgICAgICBcItCc0LDRgNC60LXRgtC40L3Qs1wiLFxyXG4gICAgICAgICAgICAgICAgXCLQn9C70LDQvdC40YDQvtCy0LDQvdC40LUg0YbQtdC/0LXQuSDQv9C+0YHRgtCw0LLQvtC6XCIsXHJcbiAgICAgICAgICAgICAgICBcItCj0L/RgNCw0LLQu9C10L3QuNC1INC80LDRgdGC0LXRgC3QtNCw0L3QvdGL0LzQuFwiLFxyXG4gICAgICAgICAgICAgICAgXCLQpNC40L3QsNC90YHRi1wiLFxyXG4gICAgICAgICAgICAgICAgXCJSJkRcIlxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBkYXRhc2V0czogW3tcclxuICAgICAgICAgICAgICAgIGxhYmVsOiAnIyBvZiBWb3RlcycsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBbMTMsIDE5LCAzLCA1LCAyLCA0LCA2LCA4LCA5LCA5LCA1XSxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogW1xyXG4gICAgICAgICAgICAgICAgICAgICcjMDA0Qzk3JyxcclxuICAgICAgICAgICAgICAgICAgICAnIzAwODVDQScsXHJcbiAgICAgICAgICAgICAgICAgICAgJyMwMEFBRTInLFxyXG4gICAgICAgICAgICAgICAgICAgICcjM0NCRUU5JyxcclxuICAgICAgICAgICAgICAgICAgICAnI0VGNjUzMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJyNGNTkxM0InLFxyXG4gICAgICAgICAgICAgICAgICAgICcjMDA5NjM5JyxcclxuICAgICAgICAgICAgICAgICAgICAnIzc4QkUyMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJyNGRkNDM0QnLFxyXG4gICAgICAgICAgICAgICAgICAgICcjRTcyRTM2JyxcclxuICAgICAgICAgICAgICAgICAgICAnI0M0QzlDRCdcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMFxyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICBjdXRvdXRQZXJjZW50YWdlOiA3NSxcclxuICAgICAgICAgICAgdG9vbHRpcHM6IHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGRkYnLFxyXG4gICAgICAgICAgICAgICAgYm9keUZvbnRDb2xvcjogJyMwMGFhZTInLFxyXG4gICAgICAgICAgICAgICAgYm9keUZvbnRTaXplOiAxMixcclxuICAgICAgICAgICAgICAgIGJvZHlGb250RmFtaWx5OiAnR290aGFtLWJvbGQnLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuMiknLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5Q29sb3JzOiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyaWdodCcsXHJcbiAgICAgICAgICAgICAgICBsYWJlbHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBmb250Q29sb3I6ICcjMmIyYjJiJyxcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTIsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlUG9pbnRTdHlsZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy9zZWNvbmRhcnkgc3RyZWFtXHJcblxyXG4gICAgdmFyIGN0eDUgPSAkKFwiI3NlY29uZGFyeS1zdHJlYW1cIik7XHJcblxyXG4gICAgdmFyIHNlY29uZGFyeUNoYXJ0ID0gbmV3IENoYXJ0KGN0eDUsIHtcclxuICAgICAgICB0eXBlOiAnZG91Z2hudXQnLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgbGFiZWxzOiBbXCLQmNGB0LvQtdC00L7QstCw0L3QuNGPINC4INGA0LDQt9GA0LDQsdC+0YLQutC4XCIsXHJcbiAgICAgICAgICAgICAgICBcItCa0L7QvNC80LXRgNGG0LjQsNC70LjQt9Cw0YbQuNGPINC40L3QvdC+0LLQsNGG0LjQuVwiLFxyXG4gICAgICAgICAgICAgICAgXCLQmNC90YLQtdGA0L3QtdGCLdC80LDRgNC60LXRgtC40L3Qs1wiLFxyXG4gICAgICAgICAgICAgICAgXCLQmtC+0LzQvNC10YDRh9C10YHQutC40Lkg0L7RgtC00LXQuyAo0JzRgdC6KVwiLCBcItCa0L7QvNC80LXRgNGH0LXRgdC60LjQuSDQvtGC0LTQtdC7ICjQodC/0LEpXCIsXHJcbiAgICAgICAgICAgICAgICBcItCa0L7QvNC80LXRgNGH0LXRgdC60LjQuSDQvtGC0LTQtdC7ICjQoNC90JQpXCIsXHJcbiAgICAgICAgICAgICAgICBcItCc0LDRgNC60LXRgtC40L3Qs1wiLFxyXG4gICAgICAgICAgICAgICAgXCLQn9C70LDQvdC40YDQvtCy0LDQvdC40LUg0YbQtdC/0LXQuSDQv9C+0YHRgtCw0LLQvtC6XCIsXHJcbiAgICAgICAgICAgICAgICBcItCj0L/RgNCw0LLQu9C10L3QuNC1INC80LDRgdGC0LXRgC3QtNCw0L3QvdGL0LzQuFwiLFxyXG4gICAgICAgICAgICAgICAgXCLQpNC40L3QsNC90YHRi1wiLFxyXG4gICAgICAgICAgICAgICAgXCJSJkRcIlxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBkYXRhc2V0czogW3tcclxuICAgICAgICAgICAgICAgIGxhYmVsOiAnIyBvZiBWb3RlcycsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBbMTMsIDE5LCAzLCA1LCAyLCA0LCA2LCA4LCA5LCA5LCA1XSxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogW1xyXG4gICAgICAgICAgICAgICAgICAgICcjMDA0Qzk3JyxcclxuICAgICAgICAgICAgICAgICAgICAnIzAwODVDQScsXHJcbiAgICAgICAgICAgICAgICAgICAgJyMwMEFBRTInLFxyXG4gICAgICAgICAgICAgICAgICAgICcjM0NCRUU5JyxcclxuICAgICAgICAgICAgICAgICAgICAnI0VGNjUzMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJyNGNTkxM0InLFxyXG4gICAgICAgICAgICAgICAgICAgICcjMDA5NjM5JyxcclxuICAgICAgICAgICAgICAgICAgICAnIzc4QkUyMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJyNGRkNDM0QnLFxyXG4gICAgICAgICAgICAgICAgICAgICcjRTcyRTM2JyxcclxuICAgICAgICAgICAgICAgICAgICAnI0M0QzlDRCdcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMFxyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICBjdXRvdXRQZXJjZW50YWdlOiA3NSxcclxuICAgICAgICAgICAgdG9vbHRpcHM6IHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGRkYnLFxyXG4gICAgICAgICAgICAgICAgYm9keUZvbnRDb2xvcjogJyMwMGFhZTInLFxyXG4gICAgICAgICAgICAgICAgYm9keUZvbnRTaXplOiAxMixcclxuICAgICAgICAgICAgICAgIGJvZHlGb250RmFtaWx5OiAnR290aGFtLWJvbGQnLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuMiknLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5Q29sb3JzOiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyaWdodCcsXHJcbiAgICAgICAgICAgICAgICBsYWJlbHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBmb250Q29sb3I6ICcjMmIyYjJiJyxcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTIsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlUG9pbnRTdHlsZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG4vLyBwb3B1cHMgZmlsZXNcclxuXHJcbmxldCAkaW5wdXROYW1lID0gJCgnLnByb2ZpbGVfX2F0dGFjaG1lbnRzLWlucHV0JyksXHJcbiAgICAkaW1nSW5wdXQgPSAkKCcjaW1nSW5wdXQnKSxcclxuICAgICRkb2N4SW5wdXQgPSAkKCcjZG9jeElucHV0JyksXHJcbiAgICAkZGVzY0lucHV0ID0gJCgnI2Rlc2NJbnB1dCcpLFxyXG4gICAgJHByZXNlbnRJbnB1dCA9ICQoJyNwcmVzZW50SW5wdXQnKSxcclxuICAgICRkb2N4UHJlc2VudGF0aW9uID0gJCgnI2RvY3hQcmVzZW50YXRpb24nKSxcclxuICAgICRwcHR4ID0gJCgnI3BwdHgnKSxcclxuICAgICRkb2N4ID0gJCgnI2RvY3gnKSxcclxuICAgICRpbWFnZSA9ICQoJyNpbWFnZVdyYXAnKSxcclxuICAgICRsYWJlbERvY3ggPSAkKCcjbGFiZWxEb2N4JyksXHJcbiAgICAkbGFiZWxJbWFnZSA9ICQoJyNsYWJlbEltYWdlJyksXHJcbiAgICAkbGFiZWxQcmVzZW50YXRpb24gPSAkKCcjbGFiZWxQcmVzZW50YXRpb24nKSxcclxuICAgICRsYWJlbERlc2MgPSAkKCcjbGFiZWxEZXNjJyksXHJcbiAgICAkYXR0Y2hCdG4gPSAkKCcucHJvZmlsZV9fYXR0YWNobWVudHMtYnRuJyk7XHJcblxyXG4vLyBkZWxldGUgYXR0YWNobWVudHNcclxuXHJcbiQoJ1tkYXRhLWNsb3NlXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCAkdGhpcyA9ICQodGhpcyksXHJcbiAgICAgICAgJGRhdGFUeXBlID0gJHRoaXMuZGF0YSgnY2xvc2UnKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZygkZGF0YVR5cGUpO1xyXG4gICAgc3dpdGNoICgkZGF0YVR5cGUpIHtcclxuICAgICAgICBjYXNlICdkb2N4JzpcclxuICAgICAgICAgICAgZGVsZXRlRG9jeCgpO1xyXG4gICAgICAgICAgICB2YWxpZGF0ZVByb2plY3QoKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnaW1nJzpcclxuICAgICAgICAgICAgZGVsZXRlSW1nKCk7XHJcbiAgICAgICAgICAgIHZhbGlkYXRlUHJvamVjdCgpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdkZXNjcmlwdGlvbic6XHJcbiAgICAgICAgICAgIGRlbGV0ZURlc2NyaXB0aW9uKCk7XHJcbiAgICAgICAgICAgIHZhbGlkYXRlUHJlc2VudCgpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdwcmVzZW50YXRpb24nOlxyXG4gICAgICAgICAgICBkZWxldGVQcmVzZW50YXRpb24oKTtcclxuICAgICAgICAgICAgdmFsaWRhdGVQcmVzZW50KCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxufSk7XHJcblxyXG5mdW5jdGlvbiBkZWxldGVEb2N4KCkge1xyXG4gICAgJGRvY3hJbnB1dC53cmFwKCc8Zm9ybT4nKS5jbG9zZXN0KCdmb3JtJykuZ2V0KDApLnJlc2V0KCk7XHJcbiAgICAkZG9jeElucHV0LnVud3JhcCgpO1xyXG4gICAgJGRvY3gucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcclxuICAgICRkb2N4LmFkZENsYXNzKCdoaWRkZW4nKTtcclxuICAgICRsYWJlbERvY3gucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgJGxhYmVsRG9jeC5hZGRDbGFzcygnc2hvdycpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gZGVsZXRlSW1nKCkge1xyXG4gICAgJGltZ0lucHV0LndyYXAoJzxmb3JtPicpLmNsb3Nlc3QoJ2Zvcm0nKS5nZXQoMCkucmVzZXQoKTtcclxuICAgICRpbWdJbnB1dC51bndyYXAoKTtcclxuICAgICRpbWFnZS5yZW1vdmVDbGFzcygnc2hvdycpO1xyXG4gICAgJGltYWdlLmFkZENsYXNzKCdoaWRkZW4nKTtcclxuICAgICRsYWJlbEltYWdlLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcclxuICAgICRsYWJlbEltYWdlLmFkZENsYXNzKCdzaG93Jyk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBkZWxldGVEZXNjcmlwdGlvbigpIHtcclxuICAgICRkZXNjSW5wdXQud3JhcCgnPGZvcm0+JykuY2xvc2VzdCgnZm9ybScpLmdldCgwKS5yZXNldCgpO1xyXG4gICAgJGRlc2NJbnB1dC51bndyYXAoKTtcclxuICAgICRkb2N4UHJlc2VudGF0aW9uLnJlbW92ZUNsYXNzKCdzaG93Jyk7XHJcbiAgICAkZG9jeFByZXNlbnRhdGlvbi5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAkbGFiZWxEZXNjLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcclxuICAgICRsYWJlbERlc2MuYWRkQ2xhc3MoJ3Nob3cnKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZVByZXNlbnRhdGlvbigpIHtcclxuICAgICRpbWdJbnB1dC53cmFwKCc8Zm9ybT4nKS5jbG9zZXN0KCdmb3JtJykuZ2V0KDApLnJlc2V0KCk7XHJcbiAgICAkaW1nSW5wdXQudW53cmFwKCk7XHJcbiAgICAkcHB0eC5yZW1vdmVDbGFzcygnc2hvdycpO1xyXG4gICAgJHBwdHguYWRkQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgJGxhYmVsUHJlc2VudGF0aW9uLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcclxuICAgICRsYWJlbFByZXNlbnRhdGlvbi5hZGRDbGFzcygnc2hvdycpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gY2hhbmdlRG9jeCgpIHtcclxuICAgICRkb2N4LnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcclxuICAgICRkb2N4LmFkZENsYXNzKCdzaG93Jyk7XHJcbiAgICAkbGFiZWxEb2N4LnJlbW92ZUNsYXNzKCdzaG93Jyk7XHJcbiAgICAkbGFiZWxEb2N4LmFkZENsYXNzKCdoaWRkZW4nKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNoYW5nZUltYWdlKCkge1xyXG4gICAgJGltYWdlLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcclxuICAgICRpbWFnZS5hZGRDbGFzcygnc2hvdycpO1xyXG4gICAgJGxhYmVsSW1hZ2UucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcclxuICAgICRsYWJlbEltYWdlLmFkZENsYXNzKCdoaWRkZW4nKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNoYW5nZURlc2MoKSB7XHJcbiAgICAkZG9jeFByZXNlbnRhdGlvbi5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAkZG9jeFByZXNlbnRhdGlvbi5hZGRDbGFzcygnc2hvdycpO1xyXG4gICAgJGxhYmVsRGVzYy5yZW1vdmVDbGFzcygnc2hvdycpO1xyXG4gICAgJGxhYmVsRGVzYy5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VQcmVzZW50YXRpb24oKSB7XHJcbiAgICAkcHB0eC5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAkcHB0eC5hZGRDbGFzcygnc2hvdycpO1xyXG4gICAgJGxhYmVsUHJlc2VudGF0aW9uLnJlbW92ZUNsYXNzKCdzaG93Jyk7XHJcbiAgICAkbGFiZWxQcmVzZW50YXRpb24uYWRkQ2xhc3MoJ2hpZGRlbicpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gcHJldmlld0ZpbGUoKSB7XHJcblxyXG4gICAgbGV0IHByZXZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW1hZ2UnKTtcclxuICAgIGxldCBmaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ltZ0lucHV0JykuZmlsZXNbMF07XHJcbiAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuXHJcbiAgICByZWFkZXIub25sb2FkZW5kID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHByZXZpZXcuc3JjID0gcmVhZGVyLnJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZmlsZSkge1xyXG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBwcmV2aWV3LnNyYyA9IFwiXCI7XHJcbiAgICB9XHJcbn07XHJcblxyXG4vLyBjaGVjayBmb3Jtc1xyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVQcm9qZWN0KCkge1xyXG4gICAgbGV0ICRkb2MgPSAkKCcjZG9jeElucHV0JyksXHJcbiAgICAgICAgJGltZyA9ICQoJyNpbWdJbnB1dCcpLFxyXG4gICAgICAgICRuYW1lID0gJCgnI3Byb2plY3ROYW1lJyksXHJcbiAgICAgICAgJGJ0biA9ICQoJyNzdWJtaXRQcm9qZWN0Jyk7XHJcblxyXG4gICAgaWYgKCRkb2MuZ2V0KDApLmZpbGVzLmxlbmd0aCAhPT0gMCAmJiAkaW1nLmdldCgwKS5maWxlcy5sZW5ndGggIT09IDAgJiYgJG5hbWUudmFsKCkubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgJGJ0bi5hZGRDbGFzcygnYnRuLS1hY3RpdmUnKTtcclxuICAgIH0gZWxzZSAkYnRuLnJlbW92ZUNsYXNzKCdidG4tLWFjdGl2ZScpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVQcmVzZW50KCkge1xyXG4gICAgbGV0ICRkZXNjID0gJCgnI2Rlc2NJbnB1dCcpLFxyXG4gICAgICAgICRwcmVzZW50YXRpb24gPSAkKCcjcHJlc2VudElucHV0JyksXHJcbiAgICAgICAgJGJ0blByZXNlbnQgPSAkKCcjc3VibWl0UHJlc2VudCcpO1xyXG5cclxuICAgIGlmICgkZGVzYy5nZXQoMCkuZmlsZXMubGVuZ3RoICE9PSAwICYmICRwcmVzZW50YXRpb24uZ2V0KDApLmZpbGVzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICRidG5QcmVzZW50LmFkZENsYXNzKCdidG4tLWFjdGl2ZScpO1xyXG4gICAgfSBlbHNlICRidG5QcmVzZW50LnJlbW92ZUNsYXNzKCdidG4tLWFjdGl2ZScpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gY2hlY2tMZW5ndGgoKSB7XHJcbiAgICBsZXQgJGNvbW1lbnQgPSAkKCcucGFydGljaXBhbnRfX2Fzc2Vzc21lbnQtaW5wdXQnKSxcclxuICAgICAgICAkYnRuTWVudG9yID0gJCgnI2J0bk1lbnRvcicpO1xyXG5cclxuICAgICRidG5NZW50b3IudG9nZ2xlQ2xhc3MoJ2J0bi0tYWN0aXZlJywgJGNvbW1lbnQudmFsKCkubGVuZ3RoICE9PSAwKTsgLy8gcHJlZmVyYWJsZVxyXG59O1xyXG5cclxuZnVuY3Rpb24gY2hlY2tGb3JtKCkge1xyXG4gICAgbGV0ICRidG5BdXRoID0gJCgnLmZvcm1fX2F1dGgtYnRuJyksXHJcbiAgICAgICAgJGF1dGhJbnB1dHMgPSAkKCcuZm9ybV9fbG9naW4sIC5mb3JtX19wYXNzd29yZCcpO1xyXG4gICAgJGJ0bkF1dGgudG9nZ2xlQ2xhc3MoJ2J0bi0td2hpdGUnLCAkYXV0aElucHV0cy52YWwoKS5sZW5ndGggIT09IDApOyAvLyBwcmVmZXJhYmxlXHJcbn07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
