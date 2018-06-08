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
});

    // analytics

    let usersEvent = "users",
    usersEventStream = "stream",
    mentorsEvent = "mentors",
    allData = "allData";

getData(allData);

function getData(type) {

    console.log(type);
    let dateFrom = $(".js-range-from").val(),
        dateTo = $(".js-range-to").val(),
        userSelection = $(".js-user-selection").val(),
        mentorSelection = $(".js-mentor-selection").val(),
        streamSelection = $(".js-stream-selection").val(),
        allDataUrl = 'assets/json/params.json',
        usersUrl = 'assets/json/chartsUsers.json',
        mentorsUrl = 'assets/json/chartsMentor.json',
        activeUrl = 'assets/json/params.json';

    if (!dateFrom || !dateTo) {
        return;
    }

    if (type === "users") {
        activeUrl = 'assets/json/chartsUsers.json';
        usersData(activeUrl);
    } else if (type === "mentors") {
        activeUrl = 'assets/json/chartsMentor.json';
        usersData(activeUrl);
    } else if (type === "stream") {
        activeUrl = 'assets/json/chartsUsersStream.json';
        usersData(activeUrl);
    }

    usersData(activeUrl);

    function usersData(activeUrl) {
        $.ajax({
            type: 'GET',
            url: activeUrl,
            data: {
                dateFrom: dateFrom,
                dateTo: dateTo,
                userSelection: userSelection,
                mentorSelection: mentorSelection,
                streamSelection: streamSelection
            },
            dataType: 'json',
            success: function (data) {;
                (function renderData() {
                    for (let key in data) {
                        for (let keyInner in data[key]) {
                            let obj = data[key][keyInner];
                            let $container = $(`[data-chart="${keyInner}"]`);
                            $('.js-rate', $container).text(obj.percentage + '%');

                            $('.js-chart', $container).css("height", obj.percentage + '%')
                                .css("background-color", changedata(obj.percentage));
                            $('.js-passed', $container).text(obj.passed);
                            $('.js-odds', $container).text(obj.odds + '%');
                            $('.js-number', $container).text(obj.number);
                        }
                    }
                })(data);

                function changedata(percentage) {
                    if (percentage < 90 && percentage >= 75) {
                        return "#1F66B1";
                    } else if (percentage < 75 && percentage >= 50) {
                        return "#0085CA";
                    } else if (percentage < 50 && percentage >= 35) {
                        return "#2698D3";
                    } else if (percentage >= 90 && percentage <= 100) {
                        return "#004C97";
                    } else if (percentage <= 35) {
                        return "#00AAE2";
                    }
                }
            }
        });
    }
}

let citiesNames,
    citiesValues;

getDataCircles();

function getDataCircles(){
    $.ajax({
        type: 'GET',
        url: 'assets/json/cities.json',
        data: {
        },
        dataType: 'json',
        success: function (data) {;
            (function renderData() {
                citiesNames = Object.keys(data.cities);
                citiesValues = Object.values(data.cities);
                renderCharts();
            })(data);
        }
    });
}

   // cities

function renderCharts(){
    var ctx = $("#cities");

    var citiesChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: citiesNames,
            datasets: [{
                label: '# of Votes',
                data: citiesValues,
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
}
   

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgLy8gZmlsdGVyIGRyb3Bkb3duXHJcbiAgICBsZXQgJGRyb3Bkb3duID0gJCgnLmZpbHRlcl9fZHJvcGRvd24nKSxcclxuICAgICAgICAkZmlsdGVyID0gJCgnLmxpc3RfX2ZpbHRlcicpLFxyXG4gICAgICAgICRvdmVybGF5TWVudG9yID0gJCgnLm1lbnRvcl9fb3ZlcmxheScpLFxyXG4gICAgICAgICRmaWx0ZXJJY29uID0gJCgnLmxpc3RfX2ZpbHRlcicpO1xyXG5cclxuICAgICRmaWx0ZXIuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRvZ2dsZUZpbHRlcigpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJG92ZXJsYXlNZW50b3Iub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRvZ2dsZUZpbHRlcigpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gdG9nZ2xlRmlsdGVyKCkge1xyXG4gICAgICAgICRvdmVybGF5TWVudG9yLnRvZ2dsZUNsYXNzKCdzaG93bicpO1xyXG4gICAgICAgICRkcm9wZG93bi50b2dnbGVDbGFzcygnZmlsdGVyX19kcm9wZG93bi0tYWN0aXZlJyk7XHJcbiAgICAgICAgJGZpbHRlci50b2dnbGVDbGFzcygnbGlzdF9fZmlsdGVyLS1hY3RpdmUnKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gcG9wdXBzXHJcblxyXG4gICAgbGV0ICRwcm9maWxlSXRlbSA9ICQoJy5wcm9maWxlX19pdGVtJyksXHJcbiAgICAgICAgJGludGVydmlldyA9ICQoJyNpbnRlcnZpZXcnKSxcclxuICAgICAgICAkYnJpZWZpbmcgPSAkKCcjYnJpZWZpbmcnKSxcclxuICAgICAgICAkcHJlc2VudGF0aW9uID0gJCgnI3ByZXNlbnRhdGlvbicpLFxyXG4gICAgICAgICRmaW5hbHMgPSAkKCcjZmluYWxzJyksXHJcbiAgICAgICAgJG92ZXJsYXkgPSAkKCcucHJvZmlsZV9fbW9kYWxzLW92ZXJsYXknKSxcclxuICAgICAgICAkbW9kYWxfYnJpZWZpbmcgPSAkKCcucHJvZmlsZV9fbW9kYWxzJyksXHJcbiAgICAgICAgJG1vZGFsX3ByZXNlbnRhdGlvbiA9ICQoJy5wcm9maWxlX19tb2RhbHMtcHJlc2VudGF0aW9uJyksXHJcbiAgICAgICAgJG1vZGFsX2ZhaWwgPSAkKCcucHJvZmlsZV9fbW9kYWxzLWZhaWwnKSxcclxuICAgICAgICAkbW9kYWxfZGVhZGxpbmUgPSAkKCcucHJvZmlsZV9fbW9kYWxzLWRlYWRsaW5lJyksXHJcbiAgICAgICAgJG1vZGFsX2ZpbmFscyA9ICQoJyNmaW5hbHNNb2RhbCcpLFxyXG4gICAgICAgICRtb2RhbF9zdWNjZXNzID0gJCgnI3N1Y2Nlc3NNb2RhbCcpLFxyXG4gICAgICAgICRwbGFjZWhvbGRlciA9ICQoJyNwbGFjZWhvbGRlcicpLFxyXG4gICAgICAgICRjcm9zcyA9ICQoJy5wcm9maWxlX19tb2RhbC1jcm9zcycpLFxyXG4gICAgICAgICRidG5DbG9zZSA9ICQoJy5idG4tY2xvc2UnKSxcclxuICAgICAgICAkd3JhcHBlciA9ICQoJy53cmFwcGVyJyk7XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkQmx1cnJlZE92ZXJsYXkoKSB7XHJcbiAgICAgICAgJG92ZXJsYXkuYWRkQ2xhc3MoJ3Byb2ZpbGVfX21vZGFscy1vdmVybGF5LS1hY3RpdmUnKTtcclxuICAgICAgICAkd3JhcHBlci5hZGRDbGFzcygnYmx1cicpO1xyXG4gICAgfVxyXG5cclxuICAgICQoJ1tkYXRhLW1vZGFsXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgJHRoaXMgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICAkZGF0YVR5cGUgPSAkdGhpcy5kYXRhKCdtb2RhbCcpO1xyXG5cclxuICAgICAgICByZW1vdmVNb2RhbHMoKTtcclxuICAgICAgICBhZGRCbHVycmVkT3ZlcmxheSgpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygkZGF0YVR5cGUpO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKCRkYXRhVHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlICdhZGQtYnJpZWYnOlxyXG4gICAgICAgICAgICAgICAgJG1vZGFsX2JyaWVmaW5nLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdhZGQtcHJlc2VudGF0aW9uJzpcclxuICAgICAgICAgICAgICAgICRtb2RhbF9wcmVzZW50YXRpb24uY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2ZhaWwnOlxyXG4gICAgICAgICAgICAgICAgJG1vZGFsX2ZhaWwuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2RlYWRsaW5lJzpcclxuICAgICAgICAgICAgICAgICRtb2RhbF9kZWFkbGluZS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnc3VjY2Vzcyc6XHJcbiAgICAgICAgICAgICAgICAkbW9kYWxfc3VjY2Vzcy5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnZmluYWwnOlxyXG4gICAgICAgICAgICAgICAgJG1vZGFsX2ZpbmFscy5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgJGNyb3NzLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZW1vdmVNb2RhbHMoKTtcclxuICAgIH0pO1xyXG5cclxuICAgICRidG5DbG9zZS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmVtb3ZlTW9kYWxzKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmVNb2RhbHMoKSB7XHJcbiAgICAgICAgJCgnW2RhdGEtcG9wdXBdJykuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICAgICAgJG92ZXJsYXkucmVtb3ZlQ2xhc3MoXCJwcm9maWxlX19tb2RhbHMtb3ZlcmxheS0tYWN0aXZlXCIpO1xyXG4gICAgICAgICR3cmFwcGVyLnJlbW92ZUNsYXNzKCdibHVyJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFdoZW4gdGhlIHVzZXIgY2xpY2tzIGFueXdoZXJlIG91dHNpZGUgb2YgdGhlIG1vZGFsLCBjbG9zZSBpdFxyXG4gICAgbGV0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsJyk7XHJcbiAgICB3aW5kb3cub25jbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGlmIChldmVudC50YXJnZXQgPT0gbW9kYWwpIHtcclxuICAgICAgICAgICAgcmVtb3ZlTW9kYWxzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBpdGVtcycgYmFja2dyb3VuZHNcclxuICAgIGlmICgkaW50ZXJ2aWV3LmlzKCcucHJvZmlsZV9faXRlbS0tZGVzY3JpcHRpb24nKSkge1xyXG4gICAgICAgICRpbnRlcnZpZXcuYWRkQ2xhc3MoJ3Byb2ZpbGVfX2l0ZW0taWNvbi0taW50ZXJ2aWV3LXdoaXRlJylcclxuICAgIH1cclxuXHJcbiAgICBpZiAoJGJyaWVmaW5nLmlzKCcucHJvZmlsZV9faXRlbS0tZGVzY3JpcHRpb24nKSkge1xyXG4gICAgICAgICRicmllZmluZy5hZGRDbGFzcygncHJvZmlsZV9faXRlbS1pY29uLS1pZGVhLXdoaXRlJylcclxuICAgIH1cclxuXHJcbiAgICBpZiAoJGZpbmFscy5pcygnLnByb2ZpbGVfX2l0ZW0tLWRlc2NyaXB0aW9uJykpIHtcclxuICAgICAgICAkZmluYWxzLmFkZENsYXNzKCdwcm9maWxlX19pdGVtLWljb24tLWZpbmFscy1hY3RpdmUnKVxyXG4gICAgfVxyXG5cclxuICAgIGlmICgkcHJlc2VudGF0aW9uLmlzKCcucHJvZmlsZV9faXRlbS0tZGVzY3JpcHRpb24nKSkge1xyXG4gICAgICAgICRwcmVzZW50YXRpb24uYWRkQ2xhc3MoJ3Byb2ZpbGVfX2l0ZW0taWNvbi0tcHJlc2VudGF0aW9uLWFjdGl2ZScpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gcGFydGljaXBhbnQgbGlzdCBcclxuXHJcbiAgICBsZXQgJHBhcnRpY2lwYW50ID0gJCgnLnBhcnRpY2lwYW50Jyk7XHJcblxyXG4gICAgJHBhcnRpY2lwYW50Lm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwicGFydGljaXBhbnQtLWFjdGl2ZVwiKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKFwicGFydGljaXBhbnQtLWFjdGl2ZVwiKTtcclxuICAgIH0pXHJcbiAgICAvLyBqUXVlcnkgS25vYlxyXG5cclxuICAgIGxldCAkZGlhbCA9ICQoXCIuZGlhbFwiKTtcclxuXHJcbiAgICAkZGlhbC5rbm9iKHtcclxuICAgICAgICAnbWluJzogMCxcclxuICAgICAgICAnbWF4JzogMTAsXHJcbiAgICAgICAgJ3JvdGF0aW9uJzogXCJhbnRpY2xvY2t3aXNlXCIsXHJcbiAgICAgICAgJ3JlbGVhc2UnOiBmdW5jdGlvbiAodikge1xyXG4gICAgICAgICAgICBsZXQgY29sb3I7XHJcbiAgICAgICAgICAgIGxldCBkYXRhSGlnaCA9ICRkaWFsLmRhdGEoXCJoaWdoXCIpO1xyXG4gICAgICAgICAgICBsZXQgZGF0YUxvdyA9ICRkaWFsLmRhdGEoXCJsb3dcIik7XHJcbiAgICAgICAgICAgIGlmICh2IDw9IGRhdGFMb3cpIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yID0gJyNFNzJFMzYnO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHYgPCBkYXRhSGlnaCkge1xyXG4gICAgICAgICAgICAgICAgY29sb3IgPSAnI0Y1OTEzQic7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvciA9ICcjMDA5NjM5JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLiQudHJpZ2dlcignY29uZmlndXJlJywge1xyXG4gICAgICAgICAgICAgICAgXCJmZ0NvbG9yXCI6IGNvbG9yLFxyXG4gICAgICAgICAgICAgICAgXCJpbnB1dENvbG9yXCI6IGNvbG9yXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy8gZGlzYWJsZSBFTlRFUiBvbiBpbnB1dFxyXG4gICAgJGRpYWwua2V5cHJlc3MoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAoZS53aGljaCA9PSAxMykgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gYnJpZWYgKyBwcmVzZW50YXRpb24gd2lkdGggISBjcnV0Y2ggIVxyXG4gICAgbGV0ICRwcm9qZWN0cyA9ICQoJy5wYXJ0aWNpcGFudC1pbmZvX19yaWdodCcpO1xyXG5cclxuICAgIGlmICgkcHJvamVjdHMubGVuZ3RoID09IDEpIHtcclxuICAgICAgICAkcHJvamVjdHMuY3NzKFwid2lkdGhcIiwgXCI1MCVcIik7XHJcbiAgICB9IGVsc2UgJHByb2plY3RzLmNzcyhcIndpZHRoXCIsIFwiMjUlXCIpO1xyXG5cclxuXHJcbiAgICAvLyBwb3B1cHMgZmlsZXNcclxuXHJcbiAgICBsZXQgJGlucHV0TmFtZSA9ICQoJy5wcm9maWxlX19hdHRhY2htZW50cy1pbnB1dCcpLFxyXG4gICAgICAgICRpbWdJbnB1dCA9ICQoJyNpbWdJbnB1dCcpLFxyXG4gICAgICAgICRkb2N4SW5wdXQgPSAkKCcjZG9jeElucHV0JyksXHJcbiAgICAgICAgJGRlc2NJbnB1dCA9ICQoJyNkZXNjSW5wdXQnKSxcclxuICAgICAgICAkcHJlc2VudElucHV0ID0gJCgnI3ByZXNlbnRJbnB1dCcpLFxyXG4gICAgICAgICRkb2N4UHJlc2VudGF0aW9uID0gJCgnI2RvY3hQcmVzZW50YXRpb24nKSxcclxuICAgICAgICAkcHB0eCA9ICQoJyNwcHR4JyksXHJcbiAgICAgICAgJGRvY3ggPSAkKCcjZG9jeCcpLFxyXG4gICAgICAgICRpbWFnZSA9ICQoJyNpbWFnZVdyYXAnKSxcclxuICAgICAgICAkbGFiZWxEb2N4ID0gJCgnI2xhYmVsRG9jeCcpLFxyXG4gICAgICAgICRsYWJlbEltYWdlID0gJCgnI2xhYmVsSW1hZ2UnKSxcclxuICAgICAgICAkbGFiZWxQcmVzZW50YXRpb24gPSAkKCcjbGFiZWxQcmVzZW50YXRpb24nKSxcclxuICAgICAgICAkbGFiZWxEZXNjID0gJCgnI2xhYmVsRGVzYycpLFxyXG4gICAgICAgICRhdHRjaEJ0biA9ICQoJy5wcm9maWxlX19hdHRhY2htZW50cy1idG4nKTtcclxuXHJcbiAgICAvLyBkZWxldGUgYXR0YWNobWVudHNcclxuXHJcbiAgICAkKCdbZGF0YS1jbG9zZV0nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0ICR0aGlzID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgJGRhdGFUeXBlID0gJHRoaXMuZGF0YSgnY2xvc2UnKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJGRhdGFUeXBlKTtcclxuICAgICAgICBzd2l0Y2ggKCRkYXRhVHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlICdkb2N4JzpcclxuICAgICAgICAgICAgICAgIGRlbGV0ZURvY3goKTtcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlUHJvamVjdCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2ltZyc6XHJcbiAgICAgICAgICAgICAgICBkZWxldGVJbWcoKTtcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlUHJvamVjdCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2Rlc2NyaXB0aW9uJzpcclxuICAgICAgICAgICAgICAgIGRlbGV0ZURlc2NyaXB0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZVByZXNlbnQoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdwcmVzZW50YXRpb24nOlxyXG4gICAgICAgICAgICAgICAgZGVsZXRlUHJlc2VudGF0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZVByZXNlbnQoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBkZWxldGVEb2N4KCkge1xyXG4gICAgICAgICRkb2N4SW5wdXQud3JhcCgnPGZvcm0+JykuY2xvc2VzdCgnZm9ybScpLmdldCgwKS5yZXNldCgpO1xyXG4gICAgICAgICRkb2N4SW5wdXQudW53cmFwKCk7XHJcbiAgICAgICAgJGRvY3gucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcclxuICAgICAgICAkZG9jeC5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAgICAgJGxhYmVsRG9jeC5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAgICAgJGxhYmVsRG9jeC5hZGRDbGFzcygnc2hvdycpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBkZWxldGVJbWcoKSB7XHJcbiAgICAgICAgJGltZ0lucHV0LndyYXAoJzxmb3JtPicpLmNsb3Nlc3QoJ2Zvcm0nKS5nZXQoMCkucmVzZXQoKTtcclxuICAgICAgICAkaW1nSW5wdXQudW53cmFwKCk7XHJcbiAgICAgICAgJGltYWdlLnJlbW92ZUNsYXNzKCdzaG93Jyk7XHJcbiAgICAgICAgJGltYWdlLmFkZENsYXNzKCdoaWRkZW4nKTtcclxuICAgICAgICAkbGFiZWxJbWFnZS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAgICAgJGxhYmVsSW1hZ2UuYWRkQ2xhc3MoJ3Nob3cnKTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gZGVsZXRlRGVzY3JpcHRpb24oKSB7XHJcbiAgICAgICAgJGRlc2NJbnB1dC53cmFwKCc8Zm9ybT4nKS5jbG9zZXN0KCdmb3JtJykuZ2V0KDApLnJlc2V0KCk7XHJcbiAgICAgICAgJGRlc2NJbnB1dC51bndyYXAoKTtcclxuICAgICAgICAkZG9jeFByZXNlbnRhdGlvbi5yZW1vdmVDbGFzcygnc2hvdycpO1xyXG4gICAgICAgICRkb2N4UHJlc2VudGF0aW9uLmFkZENsYXNzKCdoaWRkZW4nKTtcclxuICAgICAgICAkbGFiZWxEZXNjLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcclxuICAgICAgICAkbGFiZWxEZXNjLmFkZENsYXNzKCdzaG93Jyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGRlbGV0ZVByZXNlbnRhdGlvbigpIHtcclxuICAgICAgICAkaW1nSW5wdXQud3JhcCgnPGZvcm0+JykuY2xvc2VzdCgnZm9ybScpLmdldCgwKS5yZXNldCgpO1xyXG4gICAgICAgICRpbWdJbnB1dC51bndyYXAoKTtcclxuICAgICAgICAkcHB0eC5yZW1vdmVDbGFzcygnc2hvdycpO1xyXG4gICAgICAgICRwcHR4LmFkZENsYXNzKCdoaWRkZW4nKTtcclxuICAgICAgICAkbGFiZWxQcmVzZW50YXRpb24ucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgICAgICRsYWJlbFByZXNlbnRhdGlvbi5hZGRDbGFzcygnc2hvdycpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBjaGFuZ2VEb2N4KCkge1xyXG4gICAgICAgICRkb2N4LnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcclxuICAgICAgICAkZG9jeC5hZGRDbGFzcygnc2hvdycpO1xyXG4gICAgICAgICRsYWJlbERvY3gucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcclxuICAgICAgICAkbGFiZWxEb2N4LmFkZENsYXNzKCdoaWRkZW4nKTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gY2hhbmdlSW1hZ2UoKSB7XHJcbiAgICAgICAgJGltYWdlLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcclxuICAgICAgICAkaW1hZ2UuYWRkQ2xhc3MoJ3Nob3cnKTtcclxuICAgICAgICAkbGFiZWxJbWFnZS5yZW1vdmVDbGFzcygnc2hvdycpO1xyXG4gICAgICAgICRsYWJlbEltYWdlLmFkZENsYXNzKCdoaWRkZW4nKTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gY2hhbmdlRGVzYygpIHtcclxuICAgICAgICAkZG9jeFByZXNlbnRhdGlvbi5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAgICAgJGRvY3hQcmVzZW50YXRpb24uYWRkQ2xhc3MoJ3Nob3cnKTtcclxuICAgICAgICAkbGFiZWxEZXNjLnJlbW92ZUNsYXNzKCdzaG93Jyk7XHJcbiAgICAgICAgJGxhYmVsRGVzYy5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGNoYW5nZVByZXNlbnRhdGlvbigpIHtcclxuICAgICAgICAkcHB0eC5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAgICAgJHBwdHguYWRkQ2xhc3MoJ3Nob3cnKTtcclxuICAgICAgICAkbGFiZWxQcmVzZW50YXRpb24ucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcclxuICAgICAgICAkbGFiZWxQcmVzZW50YXRpb24uYWRkQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBwcmV2aWV3RmlsZSgpIHtcclxuXHJcbiAgICAgICAgbGV0IHByZXZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW1hZ2UnKTtcclxuICAgICAgICBsZXQgZmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbWdJbnB1dCcpLmZpbGVzWzBdO1xyXG4gICAgICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG5cclxuICAgICAgICByZWFkZXIub25sb2FkZW5kID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBwcmV2aWV3LnNyYyA9IHJlYWRlci5yZXN1bHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZmlsZSkge1xyXG4gICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwcmV2aWV3LnNyYyA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBjaGVjayBmb3Jtc1xyXG5cclxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlUHJvamVjdCgpIHtcclxuICAgICAgICBsZXQgJGRvYyA9ICQoJyNkb2N4SW5wdXQnKSxcclxuICAgICAgICAgICAgJGltZyA9ICQoJyNpbWdJbnB1dCcpLFxyXG4gICAgICAgICAgICAkbmFtZSA9ICQoJyNwcm9qZWN0TmFtZScpLFxyXG4gICAgICAgICAgICAkYnRuID0gJCgnI3N1Ym1pdFByb2plY3QnKTtcclxuXHJcbiAgICAgICAgaWYgKCRkb2MuZ2V0KDApLmZpbGVzLmxlbmd0aCAhPT0gMCAmJiAkaW1nLmdldCgwKS5maWxlcy5sZW5ndGggIT09IDAgJiYgJG5hbWUudmFsKCkubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgICRidG4uYWRkQ2xhc3MoJ2J0bi0tYWN0aXZlJyk7XHJcbiAgICAgICAgfSBlbHNlICRidG4ucmVtb3ZlQ2xhc3MoJ2J0bi0tYWN0aXZlJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlUHJlc2VudCgpIHtcclxuICAgICAgICBsZXQgJGRlc2MgPSAkKCcjZGVzY0lucHV0JyksXHJcbiAgICAgICAgICAgICRwcmVzZW50YXRpb24gPSAkKCcjcHJlc2VudElucHV0JyksXHJcbiAgICAgICAgICAgICRidG5QcmVzZW50ID0gJCgnI3N1Ym1pdFByZXNlbnQnKTtcclxuXHJcbiAgICAgICAgaWYgKCRkZXNjLmdldCgwKS5maWxlcy5sZW5ndGggIT09IDAgJiYgJHByZXNlbnRhdGlvbi5nZXQoMCkuZmlsZXMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgICRidG5QcmVzZW50LmFkZENsYXNzKCdidG4tLWFjdGl2ZScpO1xyXG4gICAgICAgIH0gZWxzZSAkYnRuUHJlc2VudC5yZW1vdmVDbGFzcygnYnRuLS1hY3RpdmUnKTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gY2hlY2tMZW5ndGgoKSB7XHJcbiAgICAgICAgbGV0ICRjb21tZW50ID0gJCgnLnBhcnRpY2lwYW50X19hc3Nlc3NtZW50LWlucHV0JyksXHJcbiAgICAgICAgICAgICRidG5NZW50b3IgPSAkKCcjYnRuTWVudG9yJyk7XHJcblxyXG4gICAgICAgICRidG5NZW50b3IudG9nZ2xlQ2xhc3MoJ2J0bi0tYWN0aXZlJywgJGNvbW1lbnQudmFsKCkubGVuZ3RoICE9PSAwKTsgLy8gcHJlZmVyYWJsZVxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBjaGVja0Zvcm0oKSB7XHJcbiAgICAgICAgbGV0ICRidG5BdXRoID0gJCgnLmZvcm1fX2F1dGgtYnRuJyksXHJcbiAgICAgICAgICAgICRhdXRoSW5wdXRzID0gJCgnLmZvcm1fX2xvZ2luLCAuZm9ybV9fcGFzc3dvcmQnKTtcclxuICAgICAgICAkYnRuQXV0aC50b2dnbGVDbGFzcygnYnRuLS13aGl0ZScsICRhdXRoSW5wdXRzLnZhbCgpLmxlbmd0aCAhPT0gMCk7IC8vIHByZWZlcmFibGVcclxuICAgIH07XHJcbn0pO1xyXG5cclxuICAgIC8vIGFuYWx5dGljc1xyXG5cclxuICAgIGxldCB1c2Vyc0V2ZW50ID0gXCJ1c2Vyc1wiLFxyXG4gICAgdXNlcnNFdmVudFN0cmVhbSA9IFwic3RyZWFtXCIsXHJcbiAgICBtZW50b3JzRXZlbnQgPSBcIm1lbnRvcnNcIixcclxuICAgIGFsbERhdGEgPSBcImFsbERhdGFcIjtcclxuXHJcbmdldERhdGEoYWxsRGF0YSk7XHJcblxyXG5mdW5jdGlvbiBnZXREYXRhKHR5cGUpIHtcclxuXHJcbiAgICBjb25zb2xlLmxvZyh0eXBlKTtcclxuICAgIGxldCBkYXRlRnJvbSA9ICQoXCIuanMtcmFuZ2UtZnJvbVwiKS52YWwoKSxcclxuICAgICAgICBkYXRlVG8gPSAkKFwiLmpzLXJhbmdlLXRvXCIpLnZhbCgpLFxyXG4gICAgICAgIHVzZXJTZWxlY3Rpb24gPSAkKFwiLmpzLXVzZXItc2VsZWN0aW9uXCIpLnZhbCgpLFxyXG4gICAgICAgIG1lbnRvclNlbGVjdGlvbiA9ICQoXCIuanMtbWVudG9yLXNlbGVjdGlvblwiKS52YWwoKSxcclxuICAgICAgICBzdHJlYW1TZWxlY3Rpb24gPSAkKFwiLmpzLXN0cmVhbS1zZWxlY3Rpb25cIikudmFsKCksXHJcbiAgICAgICAgYWxsRGF0YVVybCA9ICdhc3NldHMvanNvbi9wYXJhbXMuanNvbicsXHJcbiAgICAgICAgdXNlcnNVcmwgPSAnYXNzZXRzL2pzb24vY2hhcnRzVXNlcnMuanNvbicsXHJcbiAgICAgICAgbWVudG9yc1VybCA9ICdhc3NldHMvanNvbi9jaGFydHNNZW50b3IuanNvbicsXHJcbiAgICAgICAgYWN0aXZlVXJsID0gJ2Fzc2V0cy9qc29uL3BhcmFtcy5qc29uJztcclxuXHJcbiAgICBpZiAoIWRhdGVGcm9tIHx8ICFkYXRlVG8pIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGUgPT09IFwidXNlcnNcIikge1xyXG4gICAgICAgIGFjdGl2ZVVybCA9ICdhc3NldHMvanNvbi9jaGFydHNVc2Vycy5qc29uJztcclxuICAgICAgICB1c2Vyc0RhdGEoYWN0aXZlVXJsKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJtZW50b3JzXCIpIHtcclxuICAgICAgICBhY3RpdmVVcmwgPSAnYXNzZXRzL2pzb24vY2hhcnRzTWVudG9yLmpzb24nO1xyXG4gICAgICAgIHVzZXJzRGF0YShhY3RpdmVVcmwpO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcInN0cmVhbVwiKSB7XHJcbiAgICAgICAgYWN0aXZlVXJsID0gJ2Fzc2V0cy9qc29uL2NoYXJ0c1VzZXJzU3RyZWFtLmpzb24nO1xyXG4gICAgICAgIHVzZXJzRGF0YShhY3RpdmVVcmwpO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZXJzRGF0YShhY3RpdmVVcmwpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHVzZXJzRGF0YShhY3RpdmVVcmwpIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiAnR0VUJyxcclxuICAgICAgICAgICAgdXJsOiBhY3RpdmVVcmwsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGRhdGVGcm9tOiBkYXRlRnJvbSxcclxuICAgICAgICAgICAgICAgIGRhdGVUbzogZGF0ZVRvLFxyXG4gICAgICAgICAgICAgICAgdXNlclNlbGVjdGlvbjogdXNlclNlbGVjdGlvbixcclxuICAgICAgICAgICAgICAgIG1lbnRvclNlbGVjdGlvbjogbWVudG9yU2VsZWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgc3RyZWFtU2VsZWN0aW9uOiBzdHJlYW1TZWxlY3Rpb25cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHs7XHJcbiAgICAgICAgICAgICAgICAoZnVuY3Rpb24gcmVuZGVyRGF0YSgpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrZXlJbm5lciBpbiBkYXRhW2tleV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvYmogPSBkYXRhW2tleV1ba2V5SW5uZXJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0ICRjb250YWluZXIgPSAkKGBbZGF0YS1jaGFydD1cIiR7a2V5SW5uZXJ9XCJdYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcuanMtcmF0ZScsICRjb250YWluZXIpLnRleHQob2JqLnBlcmNlbnRhZ2UgKyAnJScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy5qcy1jaGFydCcsICRjb250YWluZXIpLmNzcyhcImhlaWdodFwiLCBvYmoucGVyY2VudGFnZSArICclJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY3NzKFwiYmFja2dyb3VuZC1jb2xvclwiLCBjaGFuZ2VkYXRhKG9iai5wZXJjZW50YWdlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcuanMtcGFzc2VkJywgJGNvbnRhaW5lcikudGV4dChvYmoucGFzc2VkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy5qcy1vZGRzJywgJGNvbnRhaW5lcikudGV4dChvYmoub2RkcyArICclJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcuanMtbnVtYmVyJywgJGNvbnRhaW5lcikudGV4dChvYmoubnVtYmVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pKGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNoYW5nZWRhdGEocGVyY2VudGFnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwZXJjZW50YWdlIDwgOTAgJiYgcGVyY2VudGFnZSA+PSA3NSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCIjMUY2NkIxXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwZXJjZW50YWdlIDwgNzUgJiYgcGVyY2VudGFnZSA+PSA1MCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCIjMDA4NUNBXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwZXJjZW50YWdlIDwgNTAgJiYgcGVyY2VudGFnZSA+PSAzNSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCIjMjY5OEQzXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwZXJjZW50YWdlID49IDkwICYmIHBlcmNlbnRhZ2UgPD0gMTAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIiMwMDRDOTdcIjtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBlcmNlbnRhZ2UgPD0gMzUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiIzAwQUFFMlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5sZXQgY2l0aWVzTmFtZXMsXHJcbiAgICBjaXRpZXNWYWx1ZXM7XHJcblxyXG5nZXREYXRhQ2lyY2xlcygpO1xyXG5cclxuZnVuY3Rpb24gZ2V0RGF0YUNpcmNsZXMoKXtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogJ0dFVCcsXHJcbiAgICAgICAgdXJsOiAnYXNzZXRzL2pzb24vY2l0aWVzLmpzb24nLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHs7XHJcbiAgICAgICAgICAgIChmdW5jdGlvbiByZW5kZXJEYXRhKCkge1xyXG4gICAgICAgICAgICAgICAgY2l0aWVzTmFtZXMgPSBPYmplY3Qua2V5cyhkYXRhLmNpdGllcyk7XHJcbiAgICAgICAgICAgICAgICBjaXRpZXNWYWx1ZXMgPSBPYmplY3QudmFsdWVzKGRhdGEuY2l0aWVzKTtcclxuICAgICAgICAgICAgICAgIHJlbmRlckNoYXJ0cygpO1xyXG4gICAgICAgICAgICB9KShkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuICAgLy8gY2l0aWVzXHJcblxyXG5mdW5jdGlvbiByZW5kZXJDaGFydHMoKXtcclxuICAgIHZhciBjdHggPSAkKFwiI2NpdGllc1wiKTtcclxuXHJcbiAgICB2YXIgY2l0aWVzQ2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XHJcbiAgICAgICAgdHlwZTogJ2RvdWdobnV0JyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGxhYmVsczogY2l0aWVzTmFtZXMsXHJcbiAgICAgICAgICAgIGRhdGFzZXRzOiBbe1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6ICcjIG9mIFZvdGVzJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IGNpdGllc1ZhbHVlcyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogW1xyXG4gICAgICAgICAgICAgICAgICAgICcjMDA0Qzk3JyxcclxuICAgICAgICAgICAgICAgICAgICAnIzAwODVDQScsXHJcbiAgICAgICAgICAgICAgICAgICAgJyMwMEFBRTInLFxyXG4gICAgICAgICAgICAgICAgICAgICcjM0NCRUU5JyxcclxuICAgICAgICAgICAgICAgICAgICAnI0M0QzlDRCdcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMFxyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICBjdXRvdXRQZXJjZW50YWdlOiA3NSxcclxuICAgICAgICAgICAgdG9vbHRpcHM6IHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGRkYnLFxyXG4gICAgICAgICAgICAgICAgYm9keUZvbnRDb2xvcjogJyMwMGFhZTInLFxyXG4gICAgICAgICAgICAgICAgYm9keUZvbnRTaXplOiAxMixcclxuICAgICAgICAgICAgICAgIGJvZHlGb250RmFtaWx5OiAnR290aGFtLWJvbGQnLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuMiknLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5Q29sb3JzOiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyaWdodCcsXHJcbiAgICAgICAgICAgICAgICBsYWJlbHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBmb250Q29sb3I6ICcjMmIyYjJiJyxcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZm9udEZhbWlseTogJ0dvdGhhbSBCb29rJyxcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICB1c2VQb2ludFN0eWxlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgICAvLyB1bml2ZXJzaXRpZXNcclxuICAgdmFyIGN0eDIgPSAkKFwiI3VuaXZlclwiKTtcclxuXHJcbiAgIHZhciB1bml2ZXJEb3VnaG51dENoYXJ0ID0gbmV3IENoYXJ0KGN0eDIsIHtcclxuICAgICAgIHR5cGU6ICdkb3VnaG51dCcsXHJcbiAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgbGFiZWxzOiBbXCLQnNCT0KNcIiwgXCLQnNCT0JjQnNCeXCIsIFwi0KHQn9Cx0JPQo1wiLCBcItCu0KTQnlwiLCBcItCf0YDQvtGH0LjQtVwiXSxcclxuICAgICAgICAgICBkYXRhc2V0czogW3tcclxuICAgICAgICAgICAgICAgbGFiZWw6ICcjIG9mIFZvdGVzJyxcclxuICAgICAgICAgICAgICAgZGF0YTogWzEzLCAxOSwgMywgNSwgMl0sXHJcbiAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogW1xyXG4gICAgICAgICAgICAgICAgICAgJyMwMDRDOTcnLFxyXG4gICAgICAgICAgICAgICAgICAgJyMwMDg1Q0EnLFxyXG4gICAgICAgICAgICAgICAgICAgJyMwMEFBRTInLFxyXG4gICAgICAgICAgICAgICAgICAgJyMzQ0JFRTknLFxyXG4gICAgICAgICAgICAgICAgICAgJyNDNEM5Q0QnXHJcbiAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAwXHJcbiAgICAgICAgICAgfV1cclxuICAgICAgIH0sXHJcbiAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgY3V0b3V0UGVyY2VudGFnZTogNzUsXHJcbiAgICAgICAgICAgdG9vbHRpcHM6IHtcclxuICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0ZGRicsXHJcbiAgICAgICAgICAgICAgIGJvZHlGb250Q29sb3I6ICcjMDBhYWUyJyxcclxuICAgICAgICAgICAgICAgYm9keUZvbnRTaXplOiAxMixcclxuICAgICAgICAgICAgICAgYm9keUZvbnRGYW1pbHk6ICdHb3RoYW0tYm9sZCcsXHJcbiAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjIpJyxcclxuICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgIGRpc3BsYXlDb2xvcnM6IGZhbHNlXHJcbiAgICAgICAgICAgfSxcclxuICAgICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgcG9zaXRpb246ICdyaWdodCcsXHJcbiAgICAgICAgICAgICAgIGxhYmVsczoge1xyXG4gICAgICAgICAgICAgICAgICAgZm9udENvbG9yOiAnIzJiMmIyYicsXHJcbiAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTIsXHJcbiAgICAgICAgICAgICAgICAgICAvLyBmb250RmFtaWx5OiAnR290aGFtIEJvb2snLFxyXG4gICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTAsXHJcbiAgICAgICAgICAgICAgICAgICB1c2VQb2ludFN0eWxlOiB0cnVlXHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICB9XHJcbiAgICAgICB9XHJcbiAgIH0pO1xyXG4gICAvLyBicmFuY2hlcyBcclxuXHJcbiAgIHZhciBjdHgzID0gJChcIiNicmFuY2hlc1wiKTtcclxuXHJcbiAgIHZhciBicmFuY2hlc0NoYXJ0ID0gbmV3IENoYXJ0KGN0eDMsIHtcclxuICAgICAgIHR5cGU6ICdkb3VnaG51dCcsXHJcbiAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgbGFiZWxzOiBbXCLQnNCw0YDQutC10YLQuNC90LNcIiwgXCLQnNC10L3QtdC00LbQvNC10L3RglwiLCBcItCY0L3RgtC10YDQvdC10YIt0LzQsNGA0LrQtdGC0LjQvdCzXCIsIFwiU9Cc0JxcIiwgXCLQn9GA0L7Rh9C40LVcIl0sXHJcbiAgICAgICAgICAgZGF0YXNldHM6IFt7XHJcbiAgICAgICAgICAgICAgIGxhYmVsOiAnIyBvZiBWb3RlcycsXHJcbiAgICAgICAgICAgICAgIGRhdGE6IFsxMywgMTksIDMsIDUsIDJdLFxyXG4gICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcclxuICAgICAgICAgICAgICAgICAgICcjMDA0Qzk3JyxcclxuICAgICAgICAgICAgICAgICAgICcjMDA4NUNBJyxcclxuICAgICAgICAgICAgICAgICAgICcjMDBBQUUyJyxcclxuICAgICAgICAgICAgICAgICAgICcjM0NCRUU5JyxcclxuICAgICAgICAgICAgICAgICAgICcjQzRDOUNEJ1xyXG4gICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMFxyXG4gICAgICAgICAgIH1dXHJcbiAgICAgICB9LFxyXG4gICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgIGN1dG91dFBlcmNlbnRhZ2U6IDc1LFxyXG4gICAgICAgICAgIHRvb2x0aXBzOiB7XHJcbiAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGRkYnLFxyXG4gICAgICAgICAgICAgICBib2R5Rm9udENvbG9yOiAnIzAwYWFlMicsXHJcbiAgICAgICAgICAgICAgIGJvZHlGb250U2l6ZTogMTIsXHJcbiAgICAgICAgICAgICAgIGJvZHlGb250RmFtaWx5OiAnR290aGFtLWJvbGQnLFxyXG4gICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC4yKScsXHJcbiAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgICBkaXNwbGF5Q29sb3JzOiBmYWxzZVxyXG4gICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmlnaHQnLFxyXG4gICAgICAgICAgICAgICBsYWJlbHM6IHtcclxuICAgICAgICAgICAgICAgICAgIGZvbnRDb2xvcjogJyMyYjJiMmInLFxyXG4gICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDEyLFxyXG4gICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTAsXHJcbiAgICAgICAgICAgICAgICAgICB1c2VQb2ludFN0eWxlOiB0cnVlXHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICB9XHJcbiAgICAgICB9XHJcbiAgIH0pO1xyXG4gICAvLyBtYWluLXN0cmVhbVxyXG5cclxuICAgdmFyIGN0eDQgPSAkKFwiI21haW4tc3RyZWFtXCIpO1xyXG5cclxuICAgdmFyIG1haW5DaGFydCA9IG5ldyBDaGFydChjdHg0LCB7XHJcbiAgICAgICB0eXBlOiAnZG91Z2hudXQnLFxyXG4gICAgICAgZGF0YToge1xyXG4gICAgICAgICAgIGxhYmVsczogW1wi0JjRgdC70LXQtNC+0LLQsNC90LjRjyDQuCDRgNCw0LfRgNCw0LHQvtGC0LrQuFwiLFxyXG4gICAgICAgICAgICAgICBcItCa0L7QvNC80LXRgNGG0LjQsNC70LjQt9Cw0YbQuNGPINC40L3QvdC+0LLQsNGG0LjQuVwiLFxyXG4gICAgICAgICAgICAgICBcItCY0L3RgtC10YDQvdC10YIt0LzQsNGA0LrQtdGC0LjQvdCzXCIsXHJcbiAgICAgICAgICAgICAgIFwi0JrQvtC80LzQtdGA0YfQtdGB0LrQuNC5INC+0YLQtNC10LsgKNCc0YHQuilcIiwgXCLQmtC+0LzQvNC10YDRh9C10YHQutC40Lkg0L7RgtC00LXQuyAo0KHQv9CxKVwiLFxyXG4gICAgICAgICAgICAgICBcItCa0L7QvNC80LXRgNGH0LXRgdC60LjQuSDQvtGC0LTQtdC7ICjQoNC90JQpXCIsXHJcbiAgICAgICAgICAgICAgIFwi0JzQsNGA0LrQtdGC0LjQvdCzXCIsXHJcbiAgICAgICAgICAgICAgIFwi0J/Qu9Cw0L3QuNGA0L7QstCw0L3QuNC1INGG0LXQv9C10Lkg0L/QvtGB0YLQsNCy0L7QulwiLFxyXG4gICAgICAgICAgICAgICBcItCj0L/RgNCw0LLQu9C10L3QuNC1INC80LDRgdGC0LXRgC3QtNCw0L3QvdGL0LzQuFwiLFxyXG4gICAgICAgICAgICAgICBcItCk0LjQvdCw0L3RgdGLXCIsXHJcbiAgICAgICAgICAgICAgIFwiUiZEXCJcclxuICAgICAgICAgICBdLFxyXG4gICAgICAgICAgIGRhdGFzZXRzOiBbe1xyXG4gICAgICAgICAgICAgICBsYWJlbDogJyMgb2YgVm90ZXMnLFxyXG4gICAgICAgICAgICAgICBkYXRhOiBbMTMsIDE5LCAzLCA1LCAyLCA0LCA2LCA4LCA5LCA5LCA1XSxcclxuICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXHJcbiAgICAgICAgICAgICAgICAgICAnIzAwNEM5NycsXHJcbiAgICAgICAgICAgICAgICAgICAnIzAwODVDQScsXHJcbiAgICAgICAgICAgICAgICAgICAnIzAwQUFFMicsXHJcbiAgICAgICAgICAgICAgICAgICAnIzNDQkVFOScsXHJcbiAgICAgICAgICAgICAgICAgICAnI0VGNjUzMCcsXHJcbiAgICAgICAgICAgICAgICAgICAnI0Y1OTEzQicsXHJcbiAgICAgICAgICAgICAgICAgICAnIzAwOTYzOScsXHJcbiAgICAgICAgICAgICAgICAgICAnIzc4QkUyMCcsXHJcbiAgICAgICAgICAgICAgICAgICAnI0ZGQ0MzRCcsXHJcbiAgICAgICAgICAgICAgICAgICAnI0U3MkUzNicsXHJcbiAgICAgICAgICAgICAgICAgICAnI0M0QzlDRCdcclxuICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDBcclxuICAgICAgICAgICB9XVxyXG4gICAgICAgfSxcclxuICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICBjdXRvdXRQZXJjZW50YWdlOiA3NSxcclxuICAgICAgICAgICB0b29sdGlwczoge1xyXG4gICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRkZGJyxcclxuICAgICAgICAgICAgICAgYm9keUZvbnRDb2xvcjogJyMwMGFhZTInLFxyXG4gICAgICAgICAgICAgICBib2R5Rm9udFNpemU6IDEyLFxyXG4gICAgICAgICAgICAgICBib2R5Rm9udEZhbWlseTogJ0dvdGhhbS1ib2xkJyxcclxuICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuMiknLFxyXG4gICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMSxcclxuICAgICAgICAgICAgICAgZGlzcGxheUNvbG9yczogZmFsc2VcclxuICAgICAgICAgICB9LFxyXG4gICAgICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICBmb250Q29sb3I6ICcjMmIyYjJiJyxcclxuICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxMixcclxuICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgdXNlUG9pbnRTdHlsZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgfVxyXG4gICB9KTtcclxuXHJcbiAgIC8vc2Vjb25kYXJ5IHN0cmVhbVxyXG4gICBcclxuICAgdmFyIGN0eDUgPSAkKFwiI3NlY29uZGFyeS1zdHJlYW1cIik7XHJcblxyXG4gICB2YXIgc2Vjb25kYXJ5Q2hhcnQgPSBuZXcgQ2hhcnQoY3R4NSwge1xyXG4gICAgICAgdHlwZTogJ2RvdWdobnV0JyxcclxuICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICBsYWJlbHM6IFtcItCY0YHQu9C10LTQvtCy0LDQvdC40Y8g0Lgg0YDQsNC30YDQsNCx0L7RgtC60LhcIixcclxuICAgICAgICAgICAgICAgXCLQmtC+0LzQvNC10YDRhtC40LDQu9C40LfQsNGG0LjRjyDQuNC90L3QvtCy0LDRhtC40LlcIixcclxuICAgICAgICAgICAgICAgXCLQmNC90YLQtdGA0L3QtdGCLdC80LDRgNC60LXRgtC40L3Qs1wiLFxyXG4gICAgICAgICAgICAgICBcItCa0L7QvNC80LXRgNGH0LXRgdC60LjQuSDQvtGC0LTQtdC7ICjQnNGB0LopXCIsIFwi0JrQvtC80LzQtdGA0YfQtdGB0LrQuNC5INC+0YLQtNC10LsgKNCh0L/QsSlcIixcclxuICAgICAgICAgICAgICAgXCLQmtC+0LzQvNC10YDRh9C10YHQutC40Lkg0L7RgtC00LXQuyAo0KDQvdCUKVwiLFxyXG4gICAgICAgICAgICAgICBcItCc0LDRgNC60LXRgtC40L3Qs1wiLFxyXG4gICAgICAgICAgICAgICBcItCf0LvQsNC90LjRgNC+0LLQsNC90LjQtSDRhtC10L/QtdC5INC/0L7RgdGC0LDQstC+0LpcIixcclxuICAgICAgICAgICAgICAgXCLQo9C/0YDQsNCy0LvQtdC90LjQtSDQvNCw0YHRgtC10YAt0LTQsNC90L3Ri9C80LhcIixcclxuICAgICAgICAgICAgICAgXCLQpNC40L3QsNC90YHRi1wiLFxyXG4gICAgICAgICAgICAgICBcIlImRFwiXHJcbiAgICAgICAgICAgXSxcclxuICAgICAgICAgICBkYXRhc2V0czogW3tcclxuICAgICAgICAgICAgICAgbGFiZWw6ICcjIG9mIFZvdGVzJyxcclxuICAgICAgICAgICAgICAgZGF0YTogWzEzLCAxOSwgMywgNSwgMiwgNCwgNiwgOCwgOSwgOSwgNV0sXHJcbiAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogW1xyXG4gICAgICAgICAgICAgICAgICAgJyMwMDRDOTcnLFxyXG4gICAgICAgICAgICAgICAgICAgJyMwMDg1Q0EnLFxyXG4gICAgICAgICAgICAgICAgICAgJyMwMEFBRTInLFxyXG4gICAgICAgICAgICAgICAgICAgJyMzQ0JFRTknLFxyXG4gICAgICAgICAgICAgICAgICAgJyNFRjY1MzAnLFxyXG4gICAgICAgICAgICAgICAgICAgJyNGNTkxM0InLFxyXG4gICAgICAgICAgICAgICAgICAgJyMwMDk2MzknLFxyXG4gICAgICAgICAgICAgICAgICAgJyM3OEJFMjAnLFxyXG4gICAgICAgICAgICAgICAgICAgJyNGRkNDM0QnLFxyXG4gICAgICAgICAgICAgICAgICAgJyNFNzJFMzYnLFxyXG4gICAgICAgICAgICAgICAgICAgJyNDNEM5Q0QnXHJcbiAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAwXHJcbiAgICAgICAgICAgfV1cclxuICAgICAgIH0sXHJcbiAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgY3V0b3V0UGVyY2VudGFnZTogNzUsXHJcbiAgICAgICAgICAgdG9vbHRpcHM6IHtcclxuICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0ZGRicsXHJcbiAgICAgICAgICAgICAgIGJvZHlGb250Q29sb3I6ICcjMDBhYWUyJyxcclxuICAgICAgICAgICAgICAgYm9keUZvbnRTaXplOiAxMixcclxuICAgICAgICAgICAgICAgYm9keUZvbnRGYW1pbHk6ICdHb3RoYW0tYm9sZCcsXHJcbiAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjIpJyxcclxuICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgIGRpc3BsYXlDb2xvcnM6IGZhbHNlXHJcbiAgICAgICAgICAgfSxcclxuICAgICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgcG9zaXRpb246ICdyaWdodCcsXHJcbiAgICAgICAgICAgICAgIGxhYmVsczoge1xyXG4gICAgICAgICAgICAgICAgICAgZm9udENvbG9yOiAnIzJiMmIyYicsXHJcbiAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTIsXHJcbiAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMCxcclxuICAgICAgICAgICAgICAgICAgIHVzZVBvaW50U3R5bGU6IHRydWVcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIH1cclxuICAgICAgIH1cclxuICAgfSk7XHJcbn1cclxuICAgXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
