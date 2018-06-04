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

////////


function getData() {
    let dateFrom = $(".js-range-from").val(),
        dateTo = $(".js-range-to").val(),
        userSelection = $(".js-user-selection").val(),
        mentorSelection = $(".js-mentor-selection").val(),
        streamSelection = $(".js-stream-selection").val();

    if(!dateFrom || !dateTo) {
        return;
    }

    $.ajax({
        type: 'GET',
        url: 'assets/json/params.json',
        data: {
            dateFrom: dateFrom,
            dateTo: dateTo,
            userSelection: userSelection,
            mentorSelection: mentorSelection,
            streamSelection: streamSelection
        },
        dataType: 'json',
        success: function (data) {
            ;(function renderData() {
                for (let key in data) {
                    console.info(data);
                    for (let keyInner in data[key]) {
                        let obj = data[key][keyInner];
                        let $container = $(`[data-chart="${keyInner}"]`);
                        $('.js-rate', $container).text(obj.percentage + '%');

                        $('.js-chart', $container).css("height", obj.percentage + '%')
                            .addClass(changedata(obj.percentage));
                        $('.js-passed', $container).text(obj.passed);
                        $('.js-odds', $container).text(obj.odds);
                        $('.js-number', $container).text(obj.number);
                    }
                }
            })(data);

            function changedata(percentage){
                if(percentage < 90 && percentage >= 75){
                    return "blue75";
                } else if(percentage < 75 && percentage >= 50){
                    return "blue50";
                } else if(percentage < 50 && percentage >= 35){
                    return "blue35";
                } else if(percentage >= 90 && percentage <= 100){
                    return "blue100";
                }
            }
        }
    });

}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgLy8gZmlsdGVyIGRyb3Bkb3duXHJcbiAgICBsZXQgJGRyb3Bkb3duID0gJCgnLmZpbHRlcl9fZHJvcGRvd24nKSxcclxuICAgICAgICAkZmlsdGVyID0gJCgnLmxpc3RfX2ZpbHRlcicpLFxyXG4gICAgICAgICRvdmVybGF5TWVudG9yID0gJCgnLm1lbnRvcl9fb3ZlcmxheScpLFxyXG4gICAgICAgICRmaWx0ZXJJY29uID0gJCgnLmxpc3RfX2ZpbHRlcicpO1xyXG5cclxuICAgICRmaWx0ZXIuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRvZ2dsZUZpbHRlcigpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJG92ZXJsYXlNZW50b3Iub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRvZ2dsZUZpbHRlcigpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gdG9nZ2xlRmlsdGVyKCkge1xyXG4gICAgICAgICRvdmVybGF5TWVudG9yLnRvZ2dsZUNsYXNzKCdzaG93bicpO1xyXG4gICAgICAgICRkcm9wZG93bi50b2dnbGVDbGFzcygnZmlsdGVyX19kcm9wZG93bi0tYWN0aXZlJyk7XHJcbiAgICAgICAgJGZpbHRlci50b2dnbGVDbGFzcygnbGlzdF9fZmlsdGVyLS1hY3RpdmUnKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gcG9wdXBzXHJcblxyXG4gICAgbGV0ICRwcm9maWxlSXRlbSA9ICQoJy5wcm9maWxlX19pdGVtJyksXHJcbiAgICAgICAgJGludGVydmlldyA9ICQoJyNpbnRlcnZpZXcnKSxcclxuICAgICAgICAkYnJpZWZpbmcgPSAkKCcjYnJpZWZpbmcnKSxcclxuICAgICAgICAkcHJlc2VudGF0aW9uID0gJCgnI3ByZXNlbnRhdGlvbicpLFxyXG4gICAgICAgICRmaW5hbHMgPSAkKCcjZmluYWxzJyksXHJcbiAgICAgICAgJG92ZXJsYXkgPSAkKCcucHJvZmlsZV9fbW9kYWxzLW92ZXJsYXknKSxcclxuICAgICAgICAkbW9kYWxfYnJpZWZpbmcgPSAkKCcucHJvZmlsZV9fbW9kYWxzJyksXHJcbiAgICAgICAgJG1vZGFsX3ByZXNlbnRhdGlvbiA9ICQoJy5wcm9maWxlX19tb2RhbHMtcHJlc2VudGF0aW9uJyksXHJcbiAgICAgICAgJG1vZGFsX2ZhaWwgPSAkKCcucHJvZmlsZV9fbW9kYWxzLWZhaWwnKSxcclxuICAgICAgICAkbW9kYWxfZGVhZGxpbmUgPSAkKCcucHJvZmlsZV9fbW9kYWxzLWRlYWRsaW5lJyksXHJcbiAgICAgICAgJG1vZGFsX2ZpbmFscyA9ICQoJyNmaW5hbHNNb2RhbCcpLFxyXG4gICAgICAgICRtb2RhbF9zdWNjZXNzID0gJCgnI3N1Y2Nlc3NNb2RhbCcpLFxyXG4gICAgICAgICRwbGFjZWhvbGRlciA9ICQoJyNwbGFjZWhvbGRlcicpLFxyXG4gICAgICAgICRjcm9zcyA9ICQoJy5wcm9maWxlX19tb2RhbC1jcm9zcycpLFxyXG4gICAgICAgICRidG5DbG9zZSA9ICQoJy5idG4tY2xvc2UnKSxcclxuICAgICAgICAkd3JhcHBlciA9ICQoJy53cmFwcGVyJyk7XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkQmx1cnJlZE92ZXJsYXkoKSB7XHJcbiAgICAgICAgJG92ZXJsYXkuYWRkQ2xhc3MoJ3Byb2ZpbGVfX21vZGFscy1vdmVybGF5LS1hY3RpdmUnKTtcclxuICAgICAgICAkd3JhcHBlci5hZGRDbGFzcygnYmx1cicpO1xyXG4gICAgfVxyXG5cclxuICAgICQoJ1tkYXRhLW1vZGFsXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgJHRoaXMgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICAkZGF0YVR5cGUgPSAkdGhpcy5kYXRhKCdtb2RhbCcpO1xyXG5cclxuICAgICAgICByZW1vdmVNb2RhbHMoKTtcclxuICAgICAgICBhZGRCbHVycmVkT3ZlcmxheSgpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygkZGF0YVR5cGUpO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKCRkYXRhVHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlICdhZGQtYnJpZWYnOlxyXG4gICAgICAgICAgICAgICAgJG1vZGFsX2JyaWVmaW5nLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdhZGQtcHJlc2VudGF0aW9uJzpcclxuICAgICAgICAgICAgICAgICRtb2RhbF9wcmVzZW50YXRpb24uY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2ZhaWwnOlxyXG4gICAgICAgICAgICAgICAgJG1vZGFsX2ZhaWwuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2RlYWRsaW5lJzpcclxuICAgICAgICAgICAgICAgICRtb2RhbF9kZWFkbGluZS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnc3VjY2Vzcyc6XHJcbiAgICAgICAgICAgICAgICAkbW9kYWxfc3VjY2Vzcy5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnZmluYWwnOlxyXG4gICAgICAgICAgICAgICAgJG1vZGFsX2ZpbmFscy5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgJGNyb3NzLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZW1vdmVNb2RhbHMoKTtcclxuICAgIH0pO1xyXG5cclxuICAgICRidG5DbG9zZS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmVtb3ZlTW9kYWxzKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmVNb2RhbHMoKSB7XHJcbiAgICAgICAgJCgnW2RhdGEtcG9wdXBdJykuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICAgICAgJG92ZXJsYXkucmVtb3ZlQ2xhc3MoXCJwcm9maWxlX19tb2RhbHMtb3ZlcmxheS0tYWN0aXZlXCIpO1xyXG4gICAgICAgICR3cmFwcGVyLnJlbW92ZUNsYXNzKCdibHVyJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFdoZW4gdGhlIHVzZXIgY2xpY2tzIGFueXdoZXJlIG91dHNpZGUgb2YgdGhlIG1vZGFsLCBjbG9zZSBpdFxyXG4gICAgbGV0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsJyk7XHJcbiAgICB3aW5kb3cub25jbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGlmIChldmVudC50YXJnZXQgPT0gbW9kYWwpIHtcclxuICAgICAgICAgICAgcmVtb3ZlTW9kYWxzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBpdGVtcycgYmFja2dyb3VuZHNcclxuICAgIGlmICgkaW50ZXJ2aWV3LmlzKCcucHJvZmlsZV9faXRlbS0tZGVzY3JpcHRpb24nKSkge1xyXG4gICAgICAgICRpbnRlcnZpZXcuYWRkQ2xhc3MoJ3Byb2ZpbGVfX2l0ZW0taWNvbi0taW50ZXJ2aWV3LXdoaXRlJylcclxuICAgIH1cclxuXHJcbiAgICBpZiAoJGJyaWVmaW5nLmlzKCcucHJvZmlsZV9faXRlbS0tZGVzY3JpcHRpb24nKSkge1xyXG4gICAgICAgICRicmllZmluZy5hZGRDbGFzcygncHJvZmlsZV9faXRlbS1pY29uLS1pZGVhLXdoaXRlJylcclxuICAgIH1cclxuXHJcbiAgICBpZiAoJGZpbmFscy5pcygnLnByb2ZpbGVfX2l0ZW0tLWRlc2NyaXB0aW9uJykpIHtcclxuICAgICAgICAkZmluYWxzLmFkZENsYXNzKCdwcm9maWxlX19pdGVtLWljb24tLWZpbmFscy1hY3RpdmUnKVxyXG4gICAgfVxyXG5cclxuICAgIGlmICgkcHJlc2VudGF0aW9uLmlzKCcucHJvZmlsZV9faXRlbS0tZGVzY3JpcHRpb24nKSkge1xyXG4gICAgICAgICRwcmVzZW50YXRpb24uYWRkQ2xhc3MoJ3Byb2ZpbGVfX2l0ZW0taWNvbi0tcHJlc2VudGF0aW9uLWFjdGl2ZScpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gcGFydGljaXBhbnQgbGlzdCBcclxuXHJcbiAgICBsZXQgJHBhcnRpY2lwYW50ID0gJCgnLnBhcnRpY2lwYW50Jyk7XHJcblxyXG4gICAgJHBhcnRpY2lwYW50Lm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwicGFydGljaXBhbnQtLWFjdGl2ZVwiKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKFwicGFydGljaXBhbnQtLWFjdGl2ZVwiKTtcclxuICAgIH0pXHJcbiAgICAvLyBqUXVlcnkgS25vYlxyXG5cclxuICAgIGxldCAkZGlhbCA9ICQoXCIuZGlhbFwiKTtcclxuXHJcbiAgICAkZGlhbC5rbm9iKHtcclxuICAgICAgICAnbWluJzogMCxcclxuICAgICAgICAnbWF4JzogMTAsXHJcbiAgICAgICAgJ3JvdGF0aW9uJzogXCJhbnRpY2xvY2t3aXNlXCIsXHJcbiAgICAgICAgJ3JlbGVhc2UnOiBmdW5jdGlvbiAodikge1xyXG4gICAgICAgICAgICBsZXQgY29sb3I7XHJcbiAgICAgICAgICAgIGxldCBkYXRhSGlnaCA9ICRkaWFsLmRhdGEoXCJoaWdoXCIpO1xyXG4gICAgICAgICAgICBsZXQgZGF0YUxvdyA9ICRkaWFsLmRhdGEoXCJsb3dcIik7XHJcbiAgICAgICAgICAgIGlmICh2IDw9IGRhdGFMb3cpIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yID0gJyNFNzJFMzYnO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHYgPCBkYXRhSGlnaCkge1xyXG4gICAgICAgICAgICAgICAgY29sb3IgPSAnI0Y1OTEzQic7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvciA9ICcjMDA5NjM5JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLiQudHJpZ2dlcignY29uZmlndXJlJywge1xyXG4gICAgICAgICAgICAgICAgXCJmZ0NvbG9yXCI6IGNvbG9yLFxyXG4gICAgICAgICAgICAgICAgXCJpbnB1dENvbG9yXCI6IGNvbG9yXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy8gZGlzYWJsZSBFTlRFUiBvbiBpbnB1dFxyXG4gICAgJGRpYWwua2V5cHJlc3MoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAoZS53aGljaCA9PSAxMykgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gYnJpZWYgKyBwcmVzZW50YXRpb24gd2lkdGggISBjcnV0Y2ggIVxyXG4gICAgbGV0ICRwcm9qZWN0cyA9ICQoJy5wYXJ0aWNpcGFudC1pbmZvX19yaWdodCcpO1xyXG5cclxuICAgIGlmICgkcHJvamVjdHMubGVuZ3RoID09IDEpIHtcclxuICAgICAgICAkcHJvamVjdHMuY3NzKFwid2lkdGhcIiwgXCI1MCVcIik7XHJcbiAgICB9IGVsc2UgJHByb2plY3RzLmNzcyhcIndpZHRoXCIsIFwiMjUlXCIpO1xyXG5cclxuICAgIC8vIGFuYWx5dGljc1xyXG5cclxuICAgIC8vIGNpdGllc1xyXG4gICAgdmFyIGN0eCA9ICQoXCIjY2l0aWVzXCIpO1xyXG5cclxuICAgIHZhciBjaXRpZXNDaGFydCA9IG5ldyBDaGFydChjdHgsIHtcclxuICAgICAgICB0eXBlOiAnZG91Z2hudXQnLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgbGFiZWxzOiBbXCLQnNC+0YHQutCy0LBcIiwgXCLQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQs1wiLCBcItCg0L7RgdGC0L7Qsi3QvdCwLdCU0L7QvdGDXCIsIFwi0JLQvtGA0L7QvdC10LZcIiwgXCLQn9GA0L7Rh9C10LVcIl0sXHJcbiAgICAgICAgICAgIGRhdGFzZXRzOiBbe1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6ICcjIG9mIFZvdGVzJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IFsxMywgMTksIDMsIDUsIDJdLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgJyMwMDRDOTcnLFxyXG4gICAgICAgICAgICAgICAgICAgICcjMDA4NUNBJyxcclxuICAgICAgICAgICAgICAgICAgICAnIzAwQUFFMicsXHJcbiAgICAgICAgICAgICAgICAgICAgJyMzQ0JFRTknLFxyXG4gICAgICAgICAgICAgICAgICAgICcjQzRDOUNEJ1xyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAwXHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgIGN1dG91dFBlcmNlbnRhZ2U6IDc1LFxyXG4gICAgICAgICAgICB0b29sdGlwczoge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0ZGRicsXHJcbiAgICAgICAgICAgICAgICBib2R5Rm9udENvbG9yOiAnIzAwYWFlMicsXHJcbiAgICAgICAgICAgICAgICBib2R5Rm9udFNpemU6IDEyLFxyXG4gICAgICAgICAgICAgICAgYm9keUZvbnRGYW1pbHk6ICdHb3RoYW0tYm9sZCcsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC4yKScsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMSxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlDb2xvcnM6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgICAgIGxhYmVsczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRDb2xvcjogJyMyYjJiMmInLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxMixcclxuICAgICAgICAgICAgICAgICAgICAvLyBmb250RmFtaWx5OiAnR290aGFtIEJvb2snLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZVBvaW50U3R5bGU6IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy8gdW5pdmVyc2l0aWVzXHJcbiAgICB2YXIgY3R4MiA9ICQoXCIjdW5pdmVyXCIpO1xyXG5cclxuICAgIHZhciB1bml2ZXJEb3VnaG51dENoYXJ0ID0gbmV3IENoYXJ0KGN0eDIsIHtcclxuICAgICAgICB0eXBlOiAnZG91Z2hudXQnLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgbGFiZWxzOiBbXCLQnNCT0KNcIiwgXCLQnNCT0JjQnNCeXCIsIFwi0KHQn9Cx0JPQo1wiLCBcItCu0KTQnlwiLCBcItCf0YDQvtGH0LjQtVwiXSxcclxuICAgICAgICAgICAgZGF0YXNldHM6IFt7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogJyMgb2YgVm90ZXMnLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogWzEzLCAxOSwgMywgNSwgMl0sXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcclxuICAgICAgICAgICAgICAgICAgICAnIzAwNEM5NycsXHJcbiAgICAgICAgICAgICAgICAgICAgJyMwMDg1Q0EnLFxyXG4gICAgICAgICAgICAgICAgICAgICcjMDBBQUUyJyxcclxuICAgICAgICAgICAgICAgICAgICAnIzNDQkVFOScsXHJcbiAgICAgICAgICAgICAgICAgICAgJyNDNEM5Q0QnXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDBcclxuICAgICAgICAgICAgfV1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgY3V0b3V0UGVyY2VudGFnZTogNzUsXHJcbiAgICAgICAgICAgIHRvb2x0aXBzOiB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRkZGJyxcclxuICAgICAgICAgICAgICAgIGJvZHlGb250Q29sb3I6ICcjMDBhYWUyJyxcclxuICAgICAgICAgICAgICAgIGJvZHlGb250U2l6ZTogMTIsXHJcbiAgICAgICAgICAgICAgICBib2R5Rm9udEZhbWlseTogJ0dvdGhhbS1ib2xkJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjIpJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheUNvbG9yczogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmlnaHQnLFxyXG4gICAgICAgICAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udENvbG9yOiAnIzJiMmIyYicsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDEyLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZvbnRGYW1pbHk6ICdHb3RoYW0gQm9vaycsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlUG9pbnRTdHlsZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvLyBicmFuY2hlcyBcclxuXHJcbiAgICB2YXIgY3R4MyA9ICQoXCIjYnJhbmNoZXNcIik7XHJcblxyXG4gICAgdmFyIGJyYW5jaGVzQ2hhcnQgPSBuZXcgQ2hhcnQoY3R4Mywge1xyXG4gICAgICAgIHR5cGU6ICdkb3VnaG51dCcsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBsYWJlbHM6IFtcItCc0LDRgNC60LXRgtC40L3Qs1wiLCBcItCc0LXQvdC10LTQttC80LXQvdGCXCIsIFwi0JjQvdGC0LXRgNC90LXRgi3QvNCw0YDQutC10YLQuNC90LNcIiwgXCJT0JzQnFwiLCBcItCf0YDQvtGH0LjQtVwiXSxcclxuICAgICAgICAgICAgZGF0YXNldHM6IFt7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogJyMgb2YgVm90ZXMnLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogWzEzLCAxOSwgMywgNSwgMl0sXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcclxuICAgICAgICAgICAgICAgICAgICAnIzAwNEM5NycsXHJcbiAgICAgICAgICAgICAgICAgICAgJyMwMDg1Q0EnLFxyXG4gICAgICAgICAgICAgICAgICAgICcjMDBBQUUyJyxcclxuICAgICAgICAgICAgICAgICAgICAnIzNDQkVFOScsXHJcbiAgICAgICAgICAgICAgICAgICAgJyNDNEM5Q0QnXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDBcclxuICAgICAgICAgICAgfV1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgY3V0b3V0UGVyY2VudGFnZTogNzUsXHJcbiAgICAgICAgICAgIHRvb2x0aXBzOiB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRkZGJyxcclxuICAgICAgICAgICAgICAgIGJvZHlGb250Q29sb3I6ICcjMDBhYWUyJyxcclxuICAgICAgICAgICAgICAgIGJvZHlGb250U2l6ZTogMTIsXHJcbiAgICAgICAgICAgICAgICBib2R5Rm9udEZhbWlseTogJ0dvdGhhbS1ib2xkJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjIpJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheUNvbG9yczogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmlnaHQnLFxyXG4gICAgICAgICAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udENvbG9yOiAnIzJiMmIyYicsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDEyLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZVBvaW50U3R5bGU6IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy8gbWFpbi1zdHJlYW1cclxuXHJcbiAgICB2YXIgY3R4NCA9ICQoXCIjbWFpbi1zdHJlYW1cIik7XHJcblxyXG4gICAgdmFyIG1haW5DaGFydCA9IG5ldyBDaGFydChjdHg0LCB7XHJcbiAgICAgICAgdHlwZTogJ2RvdWdobnV0JyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGxhYmVsczogW1wi0JjRgdC70LXQtNC+0LLQsNC90LjRjyDQuCDRgNCw0LfRgNCw0LHQvtGC0LrQuFwiLFxyXG4gICAgICAgICAgICAgICAgXCLQmtC+0LzQvNC10YDRhtC40LDQu9C40LfQsNGG0LjRjyDQuNC90L3QvtCy0LDRhtC40LlcIixcclxuICAgICAgICAgICAgICAgIFwi0JjQvdGC0LXRgNC90LXRgi3QvNCw0YDQutC10YLQuNC90LNcIixcclxuICAgICAgICAgICAgICAgIFwi0JrQvtC80LzQtdGA0YfQtdGB0LrQuNC5INC+0YLQtNC10LsgKNCc0YHQuilcIiwgXCLQmtC+0LzQvNC10YDRh9C10YHQutC40Lkg0L7RgtC00LXQuyAo0KHQv9CxKVwiLFxyXG4gICAgICAgICAgICAgICAgXCLQmtC+0LzQvNC10YDRh9C10YHQutC40Lkg0L7RgtC00LXQuyAo0KDQvdCUKVwiLFxyXG4gICAgICAgICAgICAgICAgXCLQnNCw0YDQutC10YLQuNC90LNcIixcclxuICAgICAgICAgICAgICAgIFwi0J/Qu9Cw0L3QuNGA0L7QstCw0L3QuNC1INGG0LXQv9C10Lkg0L/QvtGB0YLQsNCy0L7QulwiLFxyXG4gICAgICAgICAgICAgICAgXCLQo9C/0YDQsNCy0LvQtdC90LjQtSDQvNCw0YHRgtC10YAt0LTQsNC90L3Ri9C80LhcIixcclxuICAgICAgICAgICAgICAgIFwi0KTQuNC90LDQvdGB0YtcIixcclxuICAgICAgICAgICAgICAgIFwiUiZEXCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgZGF0YXNldHM6IFt7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogJyMgb2YgVm90ZXMnLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogWzEzLCAxOSwgMywgNSwgMiwgNCwgNiwgOCwgOSwgOSwgNV0sXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcclxuICAgICAgICAgICAgICAgICAgICAnIzAwNEM5NycsXHJcbiAgICAgICAgICAgICAgICAgICAgJyMwMDg1Q0EnLFxyXG4gICAgICAgICAgICAgICAgICAgICcjMDBBQUUyJyxcclxuICAgICAgICAgICAgICAgICAgICAnIzNDQkVFOScsXHJcbiAgICAgICAgICAgICAgICAgICAgJyNFRjY1MzAnLFxyXG4gICAgICAgICAgICAgICAgICAgICcjRjU5MTNCJyxcclxuICAgICAgICAgICAgICAgICAgICAnIzAwOTYzOScsXHJcbiAgICAgICAgICAgICAgICAgICAgJyM3OEJFMjAnLFxyXG4gICAgICAgICAgICAgICAgICAgICcjRkZDQzNEJyxcclxuICAgICAgICAgICAgICAgICAgICAnI0U3MkUzNicsXHJcbiAgICAgICAgICAgICAgICAgICAgJyNDNEM5Q0QnXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDBcclxuICAgICAgICAgICAgfV1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgY3V0b3V0UGVyY2VudGFnZTogNzUsXHJcbiAgICAgICAgICAgIHRvb2x0aXBzOiB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRkZGJyxcclxuICAgICAgICAgICAgICAgIGJvZHlGb250Q29sb3I6ICcjMDBhYWUyJyxcclxuICAgICAgICAgICAgICAgIGJvZHlGb250U2l6ZTogMTIsXHJcbiAgICAgICAgICAgICAgICBib2R5Rm9udEZhbWlseTogJ0dvdGhhbS1ib2xkJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjIpJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheUNvbG9yczogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmlnaHQnLFxyXG4gICAgICAgICAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udENvbG9yOiAnIzJiMmIyYicsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDEyLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZVBvaW50U3R5bGU6IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vc2Vjb25kYXJ5IHN0cmVhbVxyXG5cclxuICAgIHZhciBjdHg1ID0gJChcIiNzZWNvbmRhcnktc3RyZWFtXCIpO1xyXG5cclxuICAgIHZhciBzZWNvbmRhcnlDaGFydCA9IG5ldyBDaGFydChjdHg1LCB7XHJcbiAgICAgICAgdHlwZTogJ2RvdWdobnV0JyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGxhYmVsczogW1wi0JjRgdC70LXQtNC+0LLQsNC90LjRjyDQuCDRgNCw0LfRgNCw0LHQvtGC0LrQuFwiLFxyXG4gICAgICAgICAgICAgICAgXCLQmtC+0LzQvNC10YDRhtC40LDQu9C40LfQsNGG0LjRjyDQuNC90L3QvtCy0LDRhtC40LlcIixcclxuICAgICAgICAgICAgICAgIFwi0JjQvdGC0LXRgNC90LXRgi3QvNCw0YDQutC10YLQuNC90LNcIixcclxuICAgICAgICAgICAgICAgIFwi0JrQvtC80LzQtdGA0YfQtdGB0LrQuNC5INC+0YLQtNC10LsgKNCc0YHQuilcIiwgXCLQmtC+0LzQvNC10YDRh9C10YHQutC40Lkg0L7RgtC00LXQuyAo0KHQv9CxKVwiLFxyXG4gICAgICAgICAgICAgICAgXCLQmtC+0LzQvNC10YDRh9C10YHQutC40Lkg0L7RgtC00LXQuyAo0KDQvdCUKVwiLFxyXG4gICAgICAgICAgICAgICAgXCLQnNCw0YDQutC10YLQuNC90LNcIixcclxuICAgICAgICAgICAgICAgIFwi0J/Qu9Cw0L3QuNGA0L7QstCw0L3QuNC1INGG0LXQv9C10Lkg0L/QvtGB0YLQsNCy0L7QulwiLFxyXG4gICAgICAgICAgICAgICAgXCLQo9C/0YDQsNCy0LvQtdC90LjQtSDQvNCw0YHRgtC10YAt0LTQsNC90L3Ri9C80LhcIixcclxuICAgICAgICAgICAgICAgIFwi0KTQuNC90LDQvdGB0YtcIixcclxuICAgICAgICAgICAgICAgIFwiUiZEXCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgZGF0YXNldHM6IFt7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogJyMgb2YgVm90ZXMnLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogWzEzLCAxOSwgMywgNSwgMiwgNCwgNiwgOCwgOSwgOSwgNV0sXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcclxuICAgICAgICAgICAgICAgICAgICAnIzAwNEM5NycsXHJcbiAgICAgICAgICAgICAgICAgICAgJyMwMDg1Q0EnLFxyXG4gICAgICAgICAgICAgICAgICAgICcjMDBBQUUyJyxcclxuICAgICAgICAgICAgICAgICAgICAnIzNDQkVFOScsXHJcbiAgICAgICAgICAgICAgICAgICAgJyNFRjY1MzAnLFxyXG4gICAgICAgICAgICAgICAgICAgICcjRjU5MTNCJyxcclxuICAgICAgICAgICAgICAgICAgICAnIzAwOTYzOScsXHJcbiAgICAgICAgICAgICAgICAgICAgJyM3OEJFMjAnLFxyXG4gICAgICAgICAgICAgICAgICAgICcjRkZDQzNEJyxcclxuICAgICAgICAgICAgICAgICAgICAnI0U3MkUzNicsXHJcbiAgICAgICAgICAgICAgICAgICAgJyNDNEM5Q0QnXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDBcclxuICAgICAgICAgICAgfV1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgY3V0b3V0UGVyY2VudGFnZTogNzUsXHJcbiAgICAgICAgICAgIHRvb2x0aXBzOiB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRkZGJyxcclxuICAgICAgICAgICAgICAgIGJvZHlGb250Q29sb3I6ICcjMDBhYWUyJyxcclxuICAgICAgICAgICAgICAgIGJvZHlGb250U2l6ZTogMTIsXHJcbiAgICAgICAgICAgICAgICBib2R5Rm9udEZhbWlseTogJ0dvdGhhbS1ib2xkJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjIpJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheUNvbG9yczogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmlnaHQnLFxyXG4gICAgICAgICAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udENvbG9yOiAnIzJiMmIyYicsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDEyLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZVBvaW50U3R5bGU6IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuLy8gcG9wdXBzIGZpbGVzXHJcblxyXG5sZXQgJGlucHV0TmFtZSA9ICQoJy5wcm9maWxlX19hdHRhY2htZW50cy1pbnB1dCcpLFxyXG4gICAgJGltZ0lucHV0ID0gJCgnI2ltZ0lucHV0JyksXHJcbiAgICAkZG9jeElucHV0ID0gJCgnI2RvY3hJbnB1dCcpLFxyXG4gICAgJGRlc2NJbnB1dCA9ICQoJyNkZXNjSW5wdXQnKSxcclxuICAgICRwcmVzZW50SW5wdXQgPSAkKCcjcHJlc2VudElucHV0JyksXHJcbiAgICAkZG9jeFByZXNlbnRhdGlvbiA9ICQoJyNkb2N4UHJlc2VudGF0aW9uJyksXHJcbiAgICAkcHB0eCA9ICQoJyNwcHR4JyksXHJcbiAgICAkZG9jeCA9ICQoJyNkb2N4JyksXHJcbiAgICAkaW1hZ2UgPSAkKCcjaW1hZ2VXcmFwJyksXHJcbiAgICAkbGFiZWxEb2N4ID0gJCgnI2xhYmVsRG9jeCcpLFxyXG4gICAgJGxhYmVsSW1hZ2UgPSAkKCcjbGFiZWxJbWFnZScpLFxyXG4gICAgJGxhYmVsUHJlc2VudGF0aW9uID0gJCgnI2xhYmVsUHJlc2VudGF0aW9uJyksXHJcbiAgICAkbGFiZWxEZXNjID0gJCgnI2xhYmVsRGVzYycpLFxyXG4gICAgJGF0dGNoQnRuID0gJCgnLnByb2ZpbGVfX2F0dGFjaG1lbnRzLWJ0bicpO1xyXG5cclxuLy8gZGVsZXRlIGF0dGFjaG1lbnRzXHJcblxyXG4kKCdbZGF0YS1jbG9zZV0nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgJHRoaXMgPSAkKHRoaXMpLFxyXG4gICAgICAgICRkYXRhVHlwZSA9ICR0aGlzLmRhdGEoJ2Nsb3NlJyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coJGRhdGFUeXBlKTtcclxuICAgIHN3aXRjaCAoJGRhdGFUeXBlKSB7XHJcbiAgICAgICAgY2FzZSAnZG9jeCc6XHJcbiAgICAgICAgICAgIGRlbGV0ZURvY3goKTtcclxuICAgICAgICAgICAgdmFsaWRhdGVQcm9qZWN0KCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2ltZyc6XHJcbiAgICAgICAgICAgIGRlbGV0ZUltZygpO1xyXG4gICAgICAgICAgICB2YWxpZGF0ZVByb2plY3QoKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnZGVzY3JpcHRpb24nOlxyXG4gICAgICAgICAgICBkZWxldGVEZXNjcmlwdGlvbigpO1xyXG4gICAgICAgICAgICB2YWxpZGF0ZVByZXNlbnQoKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAncHJlc2VudGF0aW9uJzpcclxuICAgICAgICAgICAgZGVsZXRlUHJlc2VudGF0aW9uKCk7XHJcbiAgICAgICAgICAgIHZhbGlkYXRlUHJlc2VudCgpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gZGVsZXRlRG9jeCgpIHtcclxuICAgICRkb2N4SW5wdXQud3JhcCgnPGZvcm0+JykuY2xvc2VzdCgnZm9ybScpLmdldCgwKS5yZXNldCgpO1xyXG4gICAgJGRvY3hJbnB1dC51bndyYXAoKTtcclxuICAgICRkb2N4LnJlbW92ZUNsYXNzKCdzaG93Jyk7XHJcbiAgICAkZG9jeC5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAkbGFiZWxEb2N4LnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcclxuICAgICRsYWJlbERvY3guYWRkQ2xhc3MoJ3Nob3cnKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZUltZygpIHtcclxuICAgICRpbWdJbnB1dC53cmFwKCc8Zm9ybT4nKS5jbG9zZXN0KCdmb3JtJykuZ2V0KDApLnJlc2V0KCk7XHJcbiAgICAkaW1nSW5wdXQudW53cmFwKCk7XHJcbiAgICAkaW1hZ2UucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcclxuICAgICRpbWFnZS5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAkbGFiZWxJbWFnZS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAkbGFiZWxJbWFnZS5hZGRDbGFzcygnc2hvdycpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gZGVsZXRlRGVzY3JpcHRpb24oKSB7XHJcbiAgICAkZGVzY0lucHV0LndyYXAoJzxmb3JtPicpLmNsb3Nlc3QoJ2Zvcm0nKS5nZXQoMCkucmVzZXQoKTtcclxuICAgICRkZXNjSW5wdXQudW53cmFwKCk7XHJcbiAgICAkZG9jeFByZXNlbnRhdGlvbi5yZW1vdmVDbGFzcygnc2hvdycpO1xyXG4gICAgJGRvY3hQcmVzZW50YXRpb24uYWRkQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgJGxhYmVsRGVzYy5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAkbGFiZWxEZXNjLmFkZENsYXNzKCdzaG93Jyk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBkZWxldGVQcmVzZW50YXRpb24oKSB7XHJcbiAgICAkaW1nSW5wdXQud3JhcCgnPGZvcm0+JykuY2xvc2VzdCgnZm9ybScpLmdldCgwKS5yZXNldCgpO1xyXG4gICAgJGltZ0lucHV0LnVud3JhcCgpO1xyXG4gICAgJHBwdHgucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcclxuICAgICRwcHR4LmFkZENsYXNzKCdoaWRkZW4nKTtcclxuICAgICRsYWJlbFByZXNlbnRhdGlvbi5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAkbGFiZWxQcmVzZW50YXRpb24uYWRkQ2xhc3MoJ3Nob3cnKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNoYW5nZURvY3goKSB7XHJcbiAgICAkZG9jeC5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAkZG9jeC5hZGRDbGFzcygnc2hvdycpO1xyXG4gICAgJGxhYmVsRG9jeC5yZW1vdmVDbGFzcygnc2hvdycpO1xyXG4gICAgJGxhYmVsRG9jeC5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VJbWFnZSgpIHtcclxuICAgICRpbWFnZS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAkaW1hZ2UuYWRkQ2xhc3MoJ3Nob3cnKTtcclxuICAgICRsYWJlbEltYWdlLnJlbW92ZUNsYXNzKCdzaG93Jyk7XHJcbiAgICAkbGFiZWxJbWFnZS5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VEZXNjKCkge1xyXG4gICAgJGRvY3hQcmVzZW50YXRpb24ucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgJGRvY3hQcmVzZW50YXRpb24uYWRkQ2xhc3MoJ3Nob3cnKTtcclxuICAgICRsYWJlbERlc2MucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcclxuICAgICRsYWJlbERlc2MuYWRkQ2xhc3MoJ2hpZGRlbicpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gY2hhbmdlUHJlc2VudGF0aW9uKCkge1xyXG4gICAgJHBwdHgucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgJHBwdHguYWRkQ2xhc3MoJ3Nob3cnKTtcclxuICAgICRsYWJlbFByZXNlbnRhdGlvbi5yZW1vdmVDbGFzcygnc2hvdycpO1xyXG4gICAgJGxhYmVsUHJlc2VudGF0aW9uLmFkZENsYXNzKCdoaWRkZW4nKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIHByZXZpZXdGaWxlKCkge1xyXG5cclxuICAgIGxldCBwcmV2aWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ltYWdlJyk7XHJcbiAgICBsZXQgZmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbWdJbnB1dCcpLmZpbGVzWzBdO1xyXG4gICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcblxyXG4gICAgcmVhZGVyLm9ubG9hZGVuZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBwcmV2aWV3LnNyYyA9IHJlYWRlci5yZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGZpbGUpIHtcclxuICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcHJldmlldy5zcmMgPSBcIlwiO1xyXG4gICAgfVxyXG59O1xyXG5cclxuLy8gY2hlY2sgZm9ybXNcclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlUHJvamVjdCgpIHtcclxuICAgIGxldCAkZG9jID0gJCgnI2RvY3hJbnB1dCcpLFxyXG4gICAgICAgICRpbWcgPSAkKCcjaW1nSW5wdXQnKSxcclxuICAgICAgICAkbmFtZSA9ICQoJyNwcm9qZWN0TmFtZScpLFxyXG4gICAgICAgICRidG4gPSAkKCcjc3VibWl0UHJvamVjdCcpO1xyXG5cclxuICAgIGlmICgkZG9jLmdldCgwKS5maWxlcy5sZW5ndGggIT09IDAgJiYgJGltZy5nZXQoMCkuZmlsZXMubGVuZ3RoICE9PSAwICYmICRuYW1lLnZhbCgpLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICRidG4uYWRkQ2xhc3MoJ2J0bi0tYWN0aXZlJyk7XHJcbiAgICB9IGVsc2UgJGJ0bi5yZW1vdmVDbGFzcygnYnRuLS1hY3RpdmUnKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlUHJlc2VudCgpIHtcclxuICAgIGxldCAkZGVzYyA9ICQoJyNkZXNjSW5wdXQnKSxcclxuICAgICAgICAkcHJlc2VudGF0aW9uID0gJCgnI3ByZXNlbnRJbnB1dCcpLFxyXG4gICAgICAgICRidG5QcmVzZW50ID0gJCgnI3N1Ym1pdFByZXNlbnQnKTtcclxuXHJcbiAgICBpZiAoJGRlc2MuZ2V0KDApLmZpbGVzLmxlbmd0aCAhPT0gMCAmJiAkcHJlc2VudGF0aW9uLmdldCgwKS5maWxlcy5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAkYnRuUHJlc2VudC5hZGRDbGFzcygnYnRuLS1hY3RpdmUnKTtcclxuICAgIH0gZWxzZSAkYnRuUHJlc2VudC5yZW1vdmVDbGFzcygnYnRuLS1hY3RpdmUnKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNoZWNrTGVuZ3RoKCkge1xyXG4gICAgbGV0ICRjb21tZW50ID0gJCgnLnBhcnRpY2lwYW50X19hc3Nlc3NtZW50LWlucHV0JyksXHJcbiAgICAgICAgJGJ0bk1lbnRvciA9ICQoJyNidG5NZW50b3InKTtcclxuXHJcbiAgICAkYnRuTWVudG9yLnRvZ2dsZUNsYXNzKCdidG4tLWFjdGl2ZScsICRjb21tZW50LnZhbCgpLmxlbmd0aCAhPT0gMCk7IC8vIHByZWZlcmFibGVcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNoZWNrRm9ybSgpIHtcclxuICAgIGxldCAkYnRuQXV0aCA9ICQoJy5mb3JtX19hdXRoLWJ0bicpLFxyXG4gICAgICAgICRhdXRoSW5wdXRzID0gJCgnLmZvcm1fX2xvZ2luLCAuZm9ybV9fcGFzc3dvcmQnKTtcclxuICAgICRidG5BdXRoLnRvZ2dsZUNsYXNzKCdidG4tLXdoaXRlJywgJGF1dGhJbnB1dHMudmFsKCkubGVuZ3RoICE9PSAwKTsgLy8gcHJlZmVyYWJsZVxyXG59O1xyXG5cclxuLy8vLy8vLy9cclxuXHJcblxyXG5mdW5jdGlvbiBnZXREYXRhKCkge1xyXG4gICAgbGV0IGRhdGVGcm9tID0gJChcIi5qcy1yYW5nZS1mcm9tXCIpLnZhbCgpLFxyXG4gICAgICAgIGRhdGVUbyA9ICQoXCIuanMtcmFuZ2UtdG9cIikudmFsKCksXHJcbiAgICAgICAgdXNlclNlbGVjdGlvbiA9ICQoXCIuanMtdXNlci1zZWxlY3Rpb25cIikudmFsKCksXHJcbiAgICAgICAgbWVudG9yU2VsZWN0aW9uID0gJChcIi5qcy1tZW50b3Itc2VsZWN0aW9uXCIpLnZhbCgpLFxyXG4gICAgICAgIHN0cmVhbVNlbGVjdGlvbiA9ICQoXCIuanMtc3RyZWFtLXNlbGVjdGlvblwiKS52YWwoKTtcclxuXHJcbiAgICBpZighZGF0ZUZyb20gfHwgIWRhdGVUbykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6ICdHRVQnLFxyXG4gICAgICAgIHVybDogJ2Fzc2V0cy9qc29uL3BhcmFtcy5qc29uJyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGRhdGVGcm9tOiBkYXRlRnJvbSxcclxuICAgICAgICAgICAgZGF0ZVRvOiBkYXRlVG8sXHJcbiAgICAgICAgICAgIHVzZXJTZWxlY3Rpb246IHVzZXJTZWxlY3Rpb24sXHJcbiAgICAgICAgICAgIG1lbnRvclNlbGVjdGlvbjogbWVudG9yU2VsZWN0aW9uLFxyXG4gICAgICAgICAgICBzdHJlYW1TZWxlY3Rpb246IHN0cmVhbVNlbGVjdGlvblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICA7KGZ1bmN0aW9uIHJlbmRlckRhdGEoKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrZXlJbm5lciBpbiBkYXRhW2tleV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9iaiA9IGRhdGFba2V5XVtrZXlJbm5lcl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCAkY29udGFpbmVyID0gJChgW2RhdGEtY2hhcnQ9XCIke2tleUlubmVyfVwiXWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcuanMtcmF0ZScsICRjb250YWluZXIpLnRleHQob2JqLnBlcmNlbnRhZ2UgKyAnJScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmpzLWNoYXJ0JywgJGNvbnRhaW5lcikuY3NzKFwiaGVpZ2h0XCIsIG9iai5wZXJjZW50YWdlICsgJyUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKGNoYW5nZWRhdGEob2JqLnBlcmNlbnRhZ2UpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmpzLXBhc3NlZCcsICRjb250YWluZXIpLnRleHQob2JqLnBhc3NlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5qcy1vZGRzJywgJGNvbnRhaW5lcikudGV4dChvYmoub2Rkcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5qcy1udW1iZXInLCAkY29udGFpbmVyKS50ZXh0KG9iai5udW1iZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkoZGF0YSk7XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBjaGFuZ2VkYXRhKHBlcmNlbnRhZ2Upe1xyXG4gICAgICAgICAgICAgICAgaWYocGVyY2VudGFnZSA8IDkwICYmIHBlcmNlbnRhZ2UgPj0gNzUpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcImJsdWU3NVwiO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKHBlcmNlbnRhZ2UgPCA3NSAmJiBwZXJjZW50YWdlID49IDUwKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJibHVlNTBcIjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZihwZXJjZW50YWdlIDwgNTAgJiYgcGVyY2VudGFnZSA+PSAzNSl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiYmx1ZTM1XCI7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYocGVyY2VudGFnZSA+PSA5MCAmJiBwZXJjZW50YWdlIDw9IDEwMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiYmx1ZTEwMFwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
