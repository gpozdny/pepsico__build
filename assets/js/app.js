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
    universitiesEvent = "universities",
    specialitiesEvent = "specialities",
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

    if (type === usersEvent) {
        activeUrl = 'assets/json/chartsUsers.json';
        usersData(activeUrl);
    } else if (type === mentorsEvent) {
        activeUrl = 'assets/json/chartsMentor.json';
        usersData(activeUrl);
    } else if (type === usersEventStream) {
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
                                .css("background-color", changeData(obj.percentage));
                            $('.js-passed', $container).text(obj.passed);
                            $('.js-odds', $container).text(obj.odds + '%');
                            $('.js-number', $container).text(obj.number);
                        }
                    }
                })(data);

                function changeData(percentage) {
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

// JSON URLs

let jsonURLs = {
    cities: 'assets/json/cities.json',
    universities: 'assets/json/universities.json',
    universitiesStreams: 'assets/json/universitiesStreams.json',
    specialities: 'assets/json/specialities.json',
    specialitiesStream: 'assets/json/specialitiesStreams.json',
    branchesMain: 'assets/json/branchesMain.json',
    branchesSecondary: 'assets/json/branchesSecondary.json'
};

// END

// GET DATA

let citiesNames,
    citiesValues,
    universitiesNames,
    universitiesValues,
    specialitiesNames,
    specialitiesValues,
    branchesMainNames,
    branchesMainValues,
    branchesSecondaryNames,
    branchesSecondaryValues;


getDataCircles();

function getDataCircles(type){

    if(type === universitiesEvent){
        $.ajax({
            type: 'GET',
            url: jsonURLs.universitiesStreams,
            data: {
            },
            dataType: 'json',
            success: function (data) {;
                (function renderData() {
                    universitiesNames = Object.keys(data.universities);
                    universitiesValues = Object.values(data.universities);
                })(data);
                renderCharts();
            }
        });

    } else if (type === specialitiesEvent){
        $.ajax({
            type: 'GET',
            url: jsonURLs.specialitiesStream,
            data: {
            },
            dataType: 'json',
            success: function (data) {;
                (function renderData() {
                    specialitiesNames = Object.keys(data.specialities);
                    specialitiesValues = Object.values(data.specialities);
                })(data);
                renderCharts();
            }
        });
    } else {
        $.ajax({
            type: 'GET',
            url: jsonURLs.cities,
            data: {
            },
            dataType: 'json',
            success: function (data) {;
                (function renderData() {
                    citiesNames = Object.keys(data.cities);
                    citiesValues = Object.values(data.cities);
                })(data);
            }
        });
        $.ajax({
            type: 'GET',
            url: jsonURLs.universities,
            data: {
            },
            dataType: 'json',
            success: function (data) {;
                (function renderData() {
                    universitiesNames = Object.keys(data.universities);
                    universitiesValues = Object.values(data.universities);
                })(data);
            }
        });
        $.ajax({
            type: 'GET',
            url: jsonURLs.specialities,
            data: {
            },
            dataType: 'json',
            success: function (data) {;
                (function renderData() {
                    specialitiesNames = Object.keys(data.specialities);
                    specialitiesValues = Object.values(data.specialities);
                })(data);
            }
        });
        $.ajax({
            type: 'GET',
            url: jsonURLs.branchesMain,
            data: {
            },
            dataType: 'json',
            success: function (data) {;
                (function renderData() {
                    branchesMainNames = Object.keys(data.branchesMain);
                    branchesMainValues = Object.values(data.branchesMain);
                })(data);
            }
        });
        $.ajax({
            type: 'GET',
            url: jsonURLs.branchesSecondary,
            data: {
            },
            dataType: 'json',
            success: function (data) {;
                (function renderData() {
                    branchesSecondaryNames = Object.keys(data.branchesSecondary);
                    branchesSecondaryValues = Object.values(data.branchesSecondary);
                })(data);
            }
        });
    
        setTimeout(function(){ renderCharts(); }, 300);
    }
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
           labels: universitiesNames,
           datasets: [{
               label: '# of Votes',
               data: universitiesValues,
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
           labels: specialitiesNames,
           datasets: [{
               label: '# of Votes',
               data: specialitiesValues,
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
           labels: branchesMainNames,
           datasets: [{
               label: '# of Votes',
               data: branchesMainValues,
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
           labels: branchesSecondaryNames,
           datasets: [{
               label: '# of Votes',
               data: branchesSecondaryValues,
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
   

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAvLyBmaWx0ZXIgZHJvcGRvd25cclxuICAgIGxldCAkZHJvcGRvd24gPSAkKCcuZmlsdGVyX19kcm9wZG93bicpLFxyXG4gICAgICAgICRmaWx0ZXIgPSAkKCcubGlzdF9fZmlsdGVyJyksXHJcbiAgICAgICAgJG92ZXJsYXlNZW50b3IgPSAkKCcubWVudG9yX19vdmVybGF5JyksXHJcbiAgICAgICAgJGZpbHRlckljb24gPSAkKCcubGlzdF9fZmlsdGVyJyk7XHJcblxyXG4gICAgJGZpbHRlci5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdG9nZ2xlRmlsdGVyKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkb3ZlcmxheU1lbnRvci5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdG9nZ2xlRmlsdGVyKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiB0b2dnbGVGaWx0ZXIoKSB7XHJcbiAgICAgICAgJG92ZXJsYXlNZW50b3IudG9nZ2xlQ2xhc3MoJ3Nob3duJyk7XHJcbiAgICAgICAgJGRyb3Bkb3duLnRvZ2dsZUNsYXNzKCdmaWx0ZXJfX2Ryb3Bkb3duLS1hY3RpdmUnKTtcclxuICAgICAgICAkZmlsdGVyLnRvZ2dsZUNsYXNzKCdsaXN0X19maWx0ZXItLWFjdGl2ZScpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBwb3B1cHNcclxuXHJcbiAgICBsZXQgJHByb2ZpbGVJdGVtID0gJCgnLnByb2ZpbGVfX2l0ZW0nKSxcclxuICAgICAgICAkaW50ZXJ2aWV3ID0gJCgnI2ludGVydmlldycpLFxyXG4gICAgICAgICRicmllZmluZyA9ICQoJyNicmllZmluZycpLFxyXG4gICAgICAgICRwcmVzZW50YXRpb24gPSAkKCcjcHJlc2VudGF0aW9uJyksXHJcbiAgICAgICAgJGZpbmFscyA9ICQoJyNmaW5hbHMnKSxcclxuICAgICAgICAkb3ZlcmxheSA9ICQoJy5wcm9maWxlX19tb2RhbHMtb3ZlcmxheScpLFxyXG4gICAgICAgICRtb2RhbF9icmllZmluZyA9ICQoJy5wcm9maWxlX19tb2RhbHMnKSxcclxuICAgICAgICAkbW9kYWxfcHJlc2VudGF0aW9uID0gJCgnLnByb2ZpbGVfX21vZGFscy1wcmVzZW50YXRpb24nKSxcclxuICAgICAgICAkbW9kYWxfZmFpbCA9ICQoJy5wcm9maWxlX19tb2RhbHMtZmFpbCcpLFxyXG4gICAgICAgICRtb2RhbF9kZWFkbGluZSA9ICQoJy5wcm9maWxlX19tb2RhbHMtZGVhZGxpbmUnKSxcclxuICAgICAgICAkbW9kYWxfZmluYWxzID0gJCgnI2ZpbmFsc01vZGFsJyksXHJcbiAgICAgICAgJG1vZGFsX3N1Y2Nlc3MgPSAkKCcjc3VjY2Vzc01vZGFsJyksXHJcbiAgICAgICAgJHBsYWNlaG9sZGVyID0gJCgnI3BsYWNlaG9sZGVyJyksXHJcbiAgICAgICAgJGNyb3NzID0gJCgnLnByb2ZpbGVfX21vZGFsLWNyb3NzJyksXHJcbiAgICAgICAgJGJ0bkNsb3NlID0gJCgnLmJ0bi1jbG9zZScpLFxyXG4gICAgICAgICR3cmFwcGVyID0gJCgnLndyYXBwZXInKTtcclxuXHJcbiAgICBmdW5jdGlvbiBhZGRCbHVycmVkT3ZlcmxheSgpIHtcclxuICAgICAgICAkb3ZlcmxheS5hZGRDbGFzcygncHJvZmlsZV9fbW9kYWxzLW92ZXJsYXktLWFjdGl2ZScpO1xyXG4gICAgICAgICR3cmFwcGVyLmFkZENsYXNzKCdibHVyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgJCgnW2RhdGEtbW9kYWxdJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCAkdGhpcyA9ICQodGhpcyksXHJcbiAgICAgICAgICAgICRkYXRhVHlwZSA9ICR0aGlzLmRhdGEoJ21vZGFsJyk7XHJcblxyXG4gICAgICAgIHJlbW92ZU1vZGFscygpO1xyXG4gICAgICAgIGFkZEJsdXJyZWRPdmVybGF5KCk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCRkYXRhVHlwZSk7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoJGRhdGFUeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2FkZC1icmllZic6XHJcbiAgICAgICAgICAgICAgICAkbW9kYWxfYnJpZWZpbmcuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2FkZC1wcmVzZW50YXRpb24nOlxyXG4gICAgICAgICAgICAgICAgJG1vZGFsX3ByZXNlbnRhdGlvbi5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnZmFpbCc6XHJcbiAgICAgICAgICAgICAgICAkbW9kYWxfZmFpbC5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnZGVhZGxpbmUnOlxyXG4gICAgICAgICAgICAgICAgJG1vZGFsX2RlYWRsaW5lLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdzdWNjZXNzJzpcclxuICAgICAgICAgICAgICAgICRtb2RhbF9zdWNjZXNzLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdmaW5hbCc6XHJcbiAgICAgICAgICAgICAgICAkbW9kYWxfZmluYWxzLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAkY3Jvc3Mub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJlbW92ZU1vZGFscygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJGJ0bkNsb3NlLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZW1vdmVNb2RhbHMoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZU1vZGFscygpIHtcclxuICAgICAgICAkKCdbZGF0YS1wb3B1cF0nKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAgICAgICAkb3ZlcmxheS5yZW1vdmVDbGFzcyhcInByb2ZpbGVfX21vZGFscy1vdmVybGF5LS1hY3RpdmVcIik7XHJcbiAgICAgICAgJHdyYXBwZXIucmVtb3ZlQ2xhc3MoJ2JsdXInKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gV2hlbiB0aGUgdXNlciBjbGlja3MgYW55d2hlcmUgb3V0c2lkZSBvZiB0aGUgbW9kYWwsIGNsb3NlIGl0XHJcbiAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwnKTtcclxuICAgIHdpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PSBtb2RhbCkge1xyXG4gICAgICAgICAgICByZW1vdmVNb2RhbHMoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGl0ZW1zJyBiYWNrZ3JvdW5kc1xyXG4gICAgaWYgKCRpbnRlcnZpZXcuaXMoJy5wcm9maWxlX19pdGVtLS1kZXNjcmlwdGlvbicpKSB7XHJcbiAgICAgICAgJGludGVydmlldy5hZGRDbGFzcygncHJvZmlsZV9faXRlbS1pY29uLS1pbnRlcnZpZXctd2hpdGUnKVxyXG4gICAgfVxyXG5cclxuICAgIGlmICgkYnJpZWZpbmcuaXMoJy5wcm9maWxlX19pdGVtLS1kZXNjcmlwdGlvbicpKSB7XHJcbiAgICAgICAgJGJyaWVmaW5nLmFkZENsYXNzKCdwcm9maWxlX19pdGVtLWljb24tLWlkZWEtd2hpdGUnKVxyXG4gICAgfVxyXG5cclxuICAgIGlmICgkZmluYWxzLmlzKCcucHJvZmlsZV9faXRlbS0tZGVzY3JpcHRpb24nKSkge1xyXG4gICAgICAgICRmaW5hbHMuYWRkQ2xhc3MoJ3Byb2ZpbGVfX2l0ZW0taWNvbi0tZmluYWxzLWFjdGl2ZScpXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCRwcmVzZW50YXRpb24uaXMoJy5wcm9maWxlX19pdGVtLS1kZXNjcmlwdGlvbicpKSB7XHJcbiAgICAgICAgJHByZXNlbnRhdGlvbi5hZGRDbGFzcygncHJvZmlsZV9faXRlbS1pY29uLS1wcmVzZW50YXRpb24tYWN0aXZlJylcclxuICAgIH1cclxuXHJcbiAgICAvLyBwYXJ0aWNpcGFudCBsaXN0IFxyXG5cclxuICAgIGxldCAkcGFydGljaXBhbnQgPSAkKCcucGFydGljaXBhbnQnKTtcclxuXHJcbiAgICAkcGFydGljaXBhbnQub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJwYXJ0aWNpcGFudC0tYWN0aXZlXCIpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoXCJwYXJ0aWNpcGFudC0tYWN0aXZlXCIpO1xyXG4gICAgfSlcclxuICAgIC8vIGpRdWVyeSBLbm9iXHJcblxyXG4gICAgbGV0ICRkaWFsID0gJChcIi5kaWFsXCIpO1xyXG5cclxuICAgICRkaWFsLmtub2Ioe1xyXG4gICAgICAgICdtaW4nOiAwLFxyXG4gICAgICAgICdtYXgnOiAxMCxcclxuICAgICAgICAncm90YXRpb24nOiBcImFudGljbG9ja3dpc2VcIixcclxuICAgICAgICAncmVsZWFzZSc6IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgICAgIGxldCBjb2xvcjtcclxuICAgICAgICAgICAgbGV0IGRhdGFIaWdoID0gJGRpYWwuZGF0YShcImhpZ2hcIik7XHJcbiAgICAgICAgICAgIGxldCBkYXRhTG93ID0gJGRpYWwuZGF0YShcImxvd1wiKTtcclxuICAgICAgICAgICAgaWYgKHYgPD0gZGF0YUxvdykge1xyXG4gICAgICAgICAgICAgICAgY29sb3IgPSAnI0U3MkUzNic7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodiA8IGRhdGFIaWdoKSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvciA9ICcjRjU5MTNCJztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yID0gJyMwMDk2MzknO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuJC50cmlnZ2VyKCdjb25maWd1cmUnLCB7XHJcbiAgICAgICAgICAgICAgICBcImZnQ29sb3JcIjogY29sb3IsXHJcbiAgICAgICAgICAgICAgICBcImlucHV0Q29sb3JcIjogY29sb3JcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvLyBkaXNhYmxlIEVOVEVSIG9uIGlucHV0XHJcbiAgICAkZGlhbC5rZXlwcmVzcyhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmIChlLndoaWNoID09IDEzKSBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBicmllZiArIHByZXNlbnRhdGlvbiB3aWR0aCAhIGNydXRjaCAhXHJcbiAgICBsZXQgJHByb2plY3RzID0gJCgnLnBhcnRpY2lwYW50LWluZm9fX3JpZ2h0Jyk7XHJcblxyXG4gICAgaWYgKCRwcm9qZWN0cy5sZW5ndGggPT0gMSkge1xyXG4gICAgICAgICRwcm9qZWN0cy5jc3MoXCJ3aWR0aFwiLCBcIjUwJVwiKTtcclxuICAgIH0gZWxzZSAkcHJvamVjdHMuY3NzKFwid2lkdGhcIiwgXCIyNSVcIik7XHJcblxyXG5cclxuICAgIC8vIHBvcHVwcyBmaWxlc1xyXG5cclxuICAgIGxldCAkaW5wdXROYW1lID0gJCgnLnByb2ZpbGVfX2F0dGFjaG1lbnRzLWlucHV0JyksXHJcbiAgICAgICAgJGltZ0lucHV0ID0gJCgnI2ltZ0lucHV0JyksXHJcbiAgICAgICAgJGRvY3hJbnB1dCA9ICQoJyNkb2N4SW5wdXQnKSxcclxuICAgICAgICAkZGVzY0lucHV0ID0gJCgnI2Rlc2NJbnB1dCcpLFxyXG4gICAgICAgICRwcmVzZW50SW5wdXQgPSAkKCcjcHJlc2VudElucHV0JyksXHJcbiAgICAgICAgJGRvY3hQcmVzZW50YXRpb24gPSAkKCcjZG9jeFByZXNlbnRhdGlvbicpLFxyXG4gICAgICAgICRwcHR4ID0gJCgnI3BwdHgnKSxcclxuICAgICAgICAkZG9jeCA9ICQoJyNkb2N4JyksXHJcbiAgICAgICAgJGltYWdlID0gJCgnI2ltYWdlV3JhcCcpLFxyXG4gICAgICAgICRsYWJlbERvY3ggPSAkKCcjbGFiZWxEb2N4JyksXHJcbiAgICAgICAgJGxhYmVsSW1hZ2UgPSAkKCcjbGFiZWxJbWFnZScpLFxyXG4gICAgICAgICRsYWJlbFByZXNlbnRhdGlvbiA9ICQoJyNsYWJlbFByZXNlbnRhdGlvbicpLFxyXG4gICAgICAgICRsYWJlbERlc2MgPSAkKCcjbGFiZWxEZXNjJyksXHJcbiAgICAgICAgJGF0dGNoQnRuID0gJCgnLnByb2ZpbGVfX2F0dGFjaG1lbnRzLWJ0bicpO1xyXG5cclxuICAgIC8vIGRlbGV0ZSBhdHRhY2htZW50c1xyXG5cclxuICAgICQoJ1tkYXRhLWNsb3NlXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgJHRoaXMgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICAkZGF0YVR5cGUgPSAkdGhpcy5kYXRhKCdjbG9zZScpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygkZGF0YVR5cGUpO1xyXG4gICAgICAgIHN3aXRjaCAoJGRhdGFUeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2RvY3gnOlxyXG4gICAgICAgICAgICAgICAgZGVsZXRlRG9jeCgpO1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGVQcm9qZWN0KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnaW1nJzpcclxuICAgICAgICAgICAgICAgIGRlbGV0ZUltZygpO1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGVQcm9qZWN0KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnZGVzY3JpcHRpb24nOlxyXG4gICAgICAgICAgICAgICAgZGVsZXRlRGVzY3JpcHRpb24oKTtcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlUHJlc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3ByZXNlbnRhdGlvbic6XHJcbiAgICAgICAgICAgICAgICBkZWxldGVQcmVzZW50YXRpb24oKTtcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlUHJlc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGRlbGV0ZURvY3goKSB7XHJcbiAgICAgICAgJGRvY3hJbnB1dC53cmFwKCc8Zm9ybT4nKS5jbG9zZXN0KCdmb3JtJykuZ2V0KDApLnJlc2V0KCk7XHJcbiAgICAgICAgJGRvY3hJbnB1dC51bndyYXAoKTtcclxuICAgICAgICAkZG9jeC5yZW1vdmVDbGFzcygnc2hvdycpO1xyXG4gICAgICAgICRkb2N4LmFkZENsYXNzKCdoaWRkZW4nKTtcclxuICAgICAgICAkbGFiZWxEb2N4LnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcclxuICAgICAgICAkbGFiZWxEb2N4LmFkZENsYXNzKCdzaG93Jyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGRlbGV0ZUltZygpIHtcclxuICAgICAgICAkaW1nSW5wdXQud3JhcCgnPGZvcm0+JykuY2xvc2VzdCgnZm9ybScpLmdldCgwKS5yZXNldCgpO1xyXG4gICAgICAgICRpbWdJbnB1dC51bndyYXAoKTtcclxuICAgICAgICAkaW1hZ2UucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcclxuICAgICAgICAkaW1hZ2UuYWRkQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgICAgICRsYWJlbEltYWdlLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcclxuICAgICAgICAkbGFiZWxJbWFnZS5hZGRDbGFzcygnc2hvdycpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBkZWxldGVEZXNjcmlwdGlvbigpIHtcclxuICAgICAgICAkZGVzY0lucHV0LndyYXAoJzxmb3JtPicpLmNsb3Nlc3QoJ2Zvcm0nKS5nZXQoMCkucmVzZXQoKTtcclxuICAgICAgICAkZGVzY0lucHV0LnVud3JhcCgpO1xyXG4gICAgICAgICRkb2N4UHJlc2VudGF0aW9uLnJlbW92ZUNsYXNzKCdzaG93Jyk7XHJcbiAgICAgICAgJGRvY3hQcmVzZW50YXRpb24uYWRkQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgICAgICRsYWJlbERlc2MucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgICAgICRsYWJlbERlc2MuYWRkQ2xhc3MoJ3Nob3cnKTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gZGVsZXRlUHJlc2VudGF0aW9uKCkge1xyXG4gICAgICAgICRpbWdJbnB1dC53cmFwKCc8Zm9ybT4nKS5jbG9zZXN0KCdmb3JtJykuZ2V0KDApLnJlc2V0KCk7XHJcbiAgICAgICAgJGltZ0lucHV0LnVud3JhcCgpO1xyXG4gICAgICAgICRwcHR4LnJlbW92ZUNsYXNzKCdzaG93Jyk7XHJcbiAgICAgICAgJHBwdHguYWRkQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgICAgICRsYWJlbFByZXNlbnRhdGlvbi5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAgICAgJGxhYmVsUHJlc2VudGF0aW9uLmFkZENsYXNzKCdzaG93Jyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGNoYW5nZURvY3goKSB7XHJcbiAgICAgICAgJGRvY3gucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgICAgICRkb2N4LmFkZENsYXNzKCdzaG93Jyk7XHJcbiAgICAgICAgJGxhYmVsRG9jeC5yZW1vdmVDbGFzcygnc2hvdycpO1xyXG4gICAgICAgICRsYWJlbERvY3guYWRkQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBjaGFuZ2VJbWFnZSgpIHtcclxuICAgICAgICAkaW1hZ2UucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgICAgICRpbWFnZS5hZGRDbGFzcygnc2hvdycpO1xyXG4gICAgICAgICRsYWJlbEltYWdlLnJlbW92ZUNsYXNzKCdzaG93Jyk7XHJcbiAgICAgICAgJGxhYmVsSW1hZ2UuYWRkQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBjaGFuZ2VEZXNjKCkge1xyXG4gICAgICAgICRkb2N4UHJlc2VudGF0aW9uLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcclxuICAgICAgICAkZG9jeFByZXNlbnRhdGlvbi5hZGRDbGFzcygnc2hvdycpO1xyXG4gICAgICAgICRsYWJlbERlc2MucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcclxuICAgICAgICAkbGFiZWxEZXNjLmFkZENsYXNzKCdoaWRkZW4nKTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gY2hhbmdlUHJlc2VudGF0aW9uKCkge1xyXG4gICAgICAgICRwcHR4LnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcclxuICAgICAgICAkcHB0eC5hZGRDbGFzcygnc2hvdycpO1xyXG4gICAgICAgICRsYWJlbFByZXNlbnRhdGlvbi5yZW1vdmVDbGFzcygnc2hvdycpO1xyXG4gICAgICAgICRsYWJlbFByZXNlbnRhdGlvbi5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIHByZXZpZXdGaWxlKCkge1xyXG5cclxuICAgICAgICBsZXQgcHJldmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbWFnZScpO1xyXG4gICAgICAgIGxldCBmaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ltZ0lucHV0JykuZmlsZXNbMF07XHJcbiAgICAgICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcblxyXG4gICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHByZXZpZXcuc3JjID0gcmVhZGVyLnJlc3VsdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChmaWxlKSB7XHJcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHByZXZpZXcuc3JjID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGNoZWNrIGZvcm1zXHJcblxyXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVQcm9qZWN0KCkge1xyXG4gICAgICAgIGxldCAkZG9jID0gJCgnI2RvY3hJbnB1dCcpLFxyXG4gICAgICAgICAgICAkaW1nID0gJCgnI2ltZ0lucHV0JyksXHJcbiAgICAgICAgICAgICRuYW1lID0gJCgnI3Byb2plY3ROYW1lJyksXHJcbiAgICAgICAgICAgICRidG4gPSAkKCcjc3VibWl0UHJvamVjdCcpO1xyXG5cclxuICAgICAgICBpZiAoJGRvYy5nZXQoMCkuZmlsZXMubGVuZ3RoICE9PSAwICYmICRpbWcuZ2V0KDApLmZpbGVzLmxlbmd0aCAhPT0gMCAmJiAkbmFtZS52YWwoKS5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgJGJ0bi5hZGRDbGFzcygnYnRuLS1hY3RpdmUnKTtcclxuICAgICAgICB9IGVsc2UgJGJ0bi5yZW1vdmVDbGFzcygnYnRuLS1hY3RpdmUnKTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVQcmVzZW50KCkge1xyXG4gICAgICAgIGxldCAkZGVzYyA9ICQoJyNkZXNjSW5wdXQnKSxcclxuICAgICAgICAgICAgJHByZXNlbnRhdGlvbiA9ICQoJyNwcmVzZW50SW5wdXQnKSxcclxuICAgICAgICAgICAgJGJ0blByZXNlbnQgPSAkKCcjc3VibWl0UHJlc2VudCcpO1xyXG5cclxuICAgICAgICBpZiAoJGRlc2MuZ2V0KDApLmZpbGVzLmxlbmd0aCAhPT0gMCAmJiAkcHJlc2VudGF0aW9uLmdldCgwKS5maWxlcy5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgJGJ0blByZXNlbnQuYWRkQ2xhc3MoJ2J0bi0tYWN0aXZlJyk7XHJcbiAgICAgICAgfSBlbHNlICRidG5QcmVzZW50LnJlbW92ZUNsYXNzKCdidG4tLWFjdGl2ZScpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBjaGVja0xlbmd0aCgpIHtcclxuICAgICAgICBsZXQgJGNvbW1lbnQgPSAkKCcucGFydGljaXBhbnRfX2Fzc2Vzc21lbnQtaW5wdXQnKSxcclxuICAgICAgICAgICAgJGJ0bk1lbnRvciA9ICQoJyNidG5NZW50b3InKTtcclxuXHJcbiAgICAgICAgJGJ0bk1lbnRvci50b2dnbGVDbGFzcygnYnRuLS1hY3RpdmUnLCAkY29tbWVudC52YWwoKS5sZW5ndGggIT09IDApOyAvLyBwcmVmZXJhYmxlXHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGNoZWNrRm9ybSgpIHtcclxuICAgICAgICBsZXQgJGJ0bkF1dGggPSAkKCcuZm9ybV9fYXV0aC1idG4nKSxcclxuICAgICAgICAgICAgJGF1dGhJbnB1dHMgPSAkKCcuZm9ybV9fbG9naW4sIC5mb3JtX19wYXNzd29yZCcpO1xyXG4gICAgICAgICRidG5BdXRoLnRvZ2dsZUNsYXNzKCdidG4tLXdoaXRlJywgJGF1dGhJbnB1dHMudmFsKCkubGVuZ3RoICE9PSAwKTsgLy8gcHJlZmVyYWJsZVxyXG4gICAgfTtcclxufSk7XHJcblxyXG4gICAgLy8gYW5hbHl0aWNzXHJcblxyXG4gICAgbGV0IHVzZXJzRXZlbnQgPSBcInVzZXJzXCIsXHJcbiAgICB1c2Vyc0V2ZW50U3RyZWFtID0gXCJzdHJlYW1cIixcclxuICAgIG1lbnRvcnNFdmVudCA9IFwibWVudG9yc1wiLFxyXG4gICAgdW5pdmVyc2l0aWVzRXZlbnQgPSBcInVuaXZlcnNpdGllc1wiLFxyXG4gICAgc3BlY2lhbGl0aWVzRXZlbnQgPSBcInNwZWNpYWxpdGllc1wiLFxyXG4gICAgYWxsRGF0YSA9IFwiYWxsRGF0YVwiO1xyXG5cclxuZ2V0RGF0YShhbGxEYXRhKTtcclxuXHJcbmZ1bmN0aW9uIGdldERhdGEodHlwZSkge1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHR5cGUpO1xyXG4gICAgbGV0IGRhdGVGcm9tID0gJChcIi5qcy1yYW5nZS1mcm9tXCIpLnZhbCgpLFxyXG4gICAgICAgIGRhdGVUbyA9ICQoXCIuanMtcmFuZ2UtdG9cIikudmFsKCksXHJcbiAgICAgICAgdXNlclNlbGVjdGlvbiA9ICQoXCIuanMtdXNlci1zZWxlY3Rpb25cIikudmFsKCksXHJcbiAgICAgICAgbWVudG9yU2VsZWN0aW9uID0gJChcIi5qcy1tZW50b3Itc2VsZWN0aW9uXCIpLnZhbCgpLFxyXG4gICAgICAgIHN0cmVhbVNlbGVjdGlvbiA9ICQoXCIuanMtc3RyZWFtLXNlbGVjdGlvblwiKS52YWwoKSxcclxuICAgICAgICBhbGxEYXRhVXJsID0gJ2Fzc2V0cy9qc29uL3BhcmFtcy5qc29uJyxcclxuICAgICAgICB1c2Vyc1VybCA9ICdhc3NldHMvanNvbi9jaGFydHNVc2Vycy5qc29uJyxcclxuICAgICAgICBtZW50b3JzVXJsID0gJ2Fzc2V0cy9qc29uL2NoYXJ0c01lbnRvci5qc29uJyxcclxuICAgICAgICBhY3RpdmVVcmwgPSAnYXNzZXRzL2pzb24vcGFyYW1zLmpzb24nO1xyXG5cclxuICAgIGlmICghZGF0ZUZyb20gfHwgIWRhdGVUbykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZSA9PT0gdXNlcnNFdmVudCkge1xyXG4gICAgICAgIGFjdGl2ZVVybCA9ICdhc3NldHMvanNvbi9jaGFydHNVc2Vycy5qc29uJztcclxuICAgICAgICB1c2Vyc0RhdGEoYWN0aXZlVXJsKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gbWVudG9yc0V2ZW50KSB7XHJcbiAgICAgICAgYWN0aXZlVXJsID0gJ2Fzc2V0cy9qc29uL2NoYXJ0c01lbnRvci5qc29uJztcclxuICAgICAgICB1c2Vyc0RhdGEoYWN0aXZlVXJsKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gdXNlcnNFdmVudFN0cmVhbSkge1xyXG4gICAgICAgIGFjdGl2ZVVybCA9ICdhc3NldHMvanNvbi9jaGFydHNVc2Vyc1N0cmVhbS5qc29uJztcclxuICAgICAgICB1c2Vyc0RhdGEoYWN0aXZlVXJsKTtcclxuICAgIH0gXHJcblxyXG4gICAgdXNlcnNEYXRhKGFjdGl2ZVVybCk7XHJcblxyXG4gICAgZnVuY3Rpb24gdXNlcnNEYXRhKGFjdGl2ZVVybCkge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdHRVQnLFxyXG4gICAgICAgICAgICB1cmw6IGFjdGl2ZVVybCxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgZGF0ZUZyb206IGRhdGVGcm9tLFxyXG4gICAgICAgICAgICAgICAgZGF0ZVRvOiBkYXRlVG8sXHJcbiAgICAgICAgICAgICAgICB1c2VyU2VsZWN0aW9uOiB1c2VyU2VsZWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgbWVudG9yU2VsZWN0aW9uOiBtZW50b3JTZWxlY3Rpb24sXHJcbiAgICAgICAgICAgICAgICBzdHJlYW1TZWxlY3Rpb246IHN0cmVhbVNlbGVjdGlvblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkgeztcclxuICAgICAgICAgICAgICAgIChmdW5jdGlvbiByZW5kZXJEYXRhKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGtleUlubmVyIGluIGRhdGFba2V5XSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9iaiA9IGRhdGFba2V5XVtrZXlJbm5lcl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgJGNvbnRhaW5lciA9ICQoYFtkYXRhLWNoYXJ0PVwiJHtrZXlJbm5lcn1cIl1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy5qcy1yYXRlJywgJGNvbnRhaW5lcikudGV4dChvYmoucGVyY2VudGFnZSArICclJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmpzLWNoYXJ0JywgJGNvbnRhaW5lcikuY3NzKFwiaGVpZ2h0XCIsIG9iai5wZXJjZW50YWdlICsgJyUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jc3MoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIGNoYW5nZURhdGEob2JqLnBlcmNlbnRhZ2UpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy5qcy1wYXNzZWQnLCAkY29udGFpbmVyKS50ZXh0KG9iai5wYXNzZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmpzLW9kZHMnLCAkY29udGFpbmVyKS50ZXh0KG9iai5vZGRzICsgJyUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy5qcy1udW1iZXInLCAkY29udGFpbmVyKS50ZXh0KG9iai5udW1iZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSkoZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gY2hhbmdlRGF0YShwZXJjZW50YWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBlcmNlbnRhZ2UgPCA5MCAmJiBwZXJjZW50YWdlID49IDc1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIiMxRjY2QjFcIjtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBlcmNlbnRhZ2UgPCA3NSAmJiBwZXJjZW50YWdlID49IDUwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIiMwMDg1Q0FcIjtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBlcmNlbnRhZ2UgPCA1MCAmJiBwZXJjZW50YWdlID49IDM1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIiMyNjk4RDNcIjtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBlcmNlbnRhZ2UgPj0gOTAgJiYgcGVyY2VudGFnZSA8PSAxMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiIzAwNEM5N1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGVyY2VudGFnZSA8PSAzNSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCIjMDBBQUUyXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEpTT04gVVJMc1xyXG5cclxubGV0IGpzb25VUkxzID0ge1xyXG4gICAgY2l0aWVzOiAnYXNzZXRzL2pzb24vY2l0aWVzLmpzb24nLFxyXG4gICAgdW5pdmVyc2l0aWVzOiAnYXNzZXRzL2pzb24vdW5pdmVyc2l0aWVzLmpzb24nLFxyXG4gICAgdW5pdmVyc2l0aWVzU3RyZWFtczogJ2Fzc2V0cy9qc29uL3VuaXZlcnNpdGllc1N0cmVhbXMuanNvbicsXHJcbiAgICBzcGVjaWFsaXRpZXM6ICdhc3NldHMvanNvbi9zcGVjaWFsaXRpZXMuanNvbicsXHJcbiAgICBzcGVjaWFsaXRpZXNTdHJlYW06ICdhc3NldHMvanNvbi9zcGVjaWFsaXRpZXNTdHJlYW1zLmpzb24nLFxyXG4gICAgYnJhbmNoZXNNYWluOiAnYXNzZXRzL2pzb24vYnJhbmNoZXNNYWluLmpzb24nLFxyXG4gICAgYnJhbmNoZXNTZWNvbmRhcnk6ICdhc3NldHMvanNvbi9icmFuY2hlc1NlY29uZGFyeS5qc29uJ1xyXG59O1xyXG5cclxuLy8gRU5EXHJcblxyXG4vLyBHRVQgREFUQVxyXG5cclxubGV0IGNpdGllc05hbWVzLFxyXG4gICAgY2l0aWVzVmFsdWVzLFxyXG4gICAgdW5pdmVyc2l0aWVzTmFtZXMsXHJcbiAgICB1bml2ZXJzaXRpZXNWYWx1ZXMsXHJcbiAgICBzcGVjaWFsaXRpZXNOYW1lcyxcclxuICAgIHNwZWNpYWxpdGllc1ZhbHVlcyxcclxuICAgIGJyYW5jaGVzTWFpbk5hbWVzLFxyXG4gICAgYnJhbmNoZXNNYWluVmFsdWVzLFxyXG4gICAgYnJhbmNoZXNTZWNvbmRhcnlOYW1lcyxcclxuICAgIGJyYW5jaGVzU2Vjb25kYXJ5VmFsdWVzO1xyXG5cclxuXHJcbmdldERhdGFDaXJjbGVzKCk7XHJcblxyXG5mdW5jdGlvbiBnZXREYXRhQ2lyY2xlcyh0eXBlKXtcclxuXHJcbiAgICBpZih0eXBlID09PSB1bml2ZXJzaXRpZXNFdmVudCl7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogJ0dFVCcsXHJcbiAgICAgICAgICAgIHVybDoganNvblVSTHMudW5pdmVyc2l0aWVzU3RyZWFtcyxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkgeztcclxuICAgICAgICAgICAgICAgIChmdW5jdGlvbiByZW5kZXJEYXRhKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHVuaXZlcnNpdGllc05hbWVzID0gT2JqZWN0LmtleXMoZGF0YS51bml2ZXJzaXRpZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHVuaXZlcnNpdGllc1ZhbHVlcyA9IE9iamVjdC52YWx1ZXMoZGF0YS51bml2ZXJzaXRpZXMpO1xyXG4gICAgICAgICAgICAgICAgfSkoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICByZW5kZXJDaGFydHMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gc3BlY2lhbGl0aWVzRXZlbnQpe1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdHRVQnLFxyXG4gICAgICAgICAgICB1cmw6IGpzb25VUkxzLnNwZWNpYWxpdGllc1N0cmVhbSxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkgeztcclxuICAgICAgICAgICAgICAgIChmdW5jdGlvbiByZW5kZXJEYXRhKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNwZWNpYWxpdGllc05hbWVzID0gT2JqZWN0LmtleXMoZGF0YS5zcGVjaWFsaXRpZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNwZWNpYWxpdGllc1ZhbHVlcyA9IE9iamVjdC52YWx1ZXMoZGF0YS5zcGVjaWFsaXRpZXMpO1xyXG4gICAgICAgICAgICAgICAgfSkoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICByZW5kZXJDaGFydHMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiAnR0VUJyxcclxuICAgICAgICAgICAgdXJsOiBqc29uVVJMcy5jaXRpZXMsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHs7XHJcbiAgICAgICAgICAgICAgICAoZnVuY3Rpb24gcmVuZGVyRGF0YSgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjaXRpZXNOYW1lcyA9IE9iamVjdC5rZXlzKGRhdGEuY2l0aWVzKTtcclxuICAgICAgICAgICAgICAgICAgICBjaXRpZXNWYWx1ZXMgPSBPYmplY3QudmFsdWVzKGRhdGEuY2l0aWVzKTtcclxuICAgICAgICAgICAgICAgIH0pKGRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogJ0dFVCcsXHJcbiAgICAgICAgICAgIHVybDoganNvblVSTHMudW5pdmVyc2l0aWVzLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7O1xyXG4gICAgICAgICAgICAgICAgKGZ1bmN0aW9uIHJlbmRlckRhdGEoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdW5pdmVyc2l0aWVzTmFtZXMgPSBPYmplY3Qua2V5cyhkYXRhLnVuaXZlcnNpdGllcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdW5pdmVyc2l0aWVzVmFsdWVzID0gT2JqZWN0LnZhbHVlcyhkYXRhLnVuaXZlcnNpdGllcyk7XHJcbiAgICAgICAgICAgICAgICB9KShkYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdHRVQnLFxyXG4gICAgICAgICAgICB1cmw6IGpzb25VUkxzLnNwZWNpYWxpdGllcyxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkgeztcclxuICAgICAgICAgICAgICAgIChmdW5jdGlvbiByZW5kZXJEYXRhKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNwZWNpYWxpdGllc05hbWVzID0gT2JqZWN0LmtleXMoZGF0YS5zcGVjaWFsaXRpZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNwZWNpYWxpdGllc1ZhbHVlcyA9IE9iamVjdC52YWx1ZXMoZGF0YS5zcGVjaWFsaXRpZXMpO1xyXG4gICAgICAgICAgICAgICAgfSkoZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiAnR0VUJyxcclxuICAgICAgICAgICAgdXJsOiBqc29uVVJMcy5icmFuY2hlc01haW4sXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHs7XHJcbiAgICAgICAgICAgICAgICAoZnVuY3Rpb24gcmVuZGVyRGF0YSgpIHtcclxuICAgICAgICAgICAgICAgICAgICBicmFuY2hlc01haW5OYW1lcyA9IE9iamVjdC5rZXlzKGRhdGEuYnJhbmNoZXNNYWluKTtcclxuICAgICAgICAgICAgICAgICAgICBicmFuY2hlc01haW5WYWx1ZXMgPSBPYmplY3QudmFsdWVzKGRhdGEuYnJhbmNoZXNNYWluKTtcclxuICAgICAgICAgICAgICAgIH0pKGRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogJ0dFVCcsXHJcbiAgICAgICAgICAgIHVybDoganNvblVSTHMuYnJhbmNoZXNTZWNvbmRhcnksXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHs7XHJcbiAgICAgICAgICAgICAgICAoZnVuY3Rpb24gcmVuZGVyRGF0YSgpIHtcclxuICAgICAgICAgICAgICAgICAgICBicmFuY2hlc1NlY29uZGFyeU5hbWVzID0gT2JqZWN0LmtleXMoZGF0YS5icmFuY2hlc1NlY29uZGFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJhbmNoZXNTZWNvbmRhcnlWYWx1ZXMgPSBPYmplY3QudmFsdWVzKGRhdGEuYnJhbmNoZXNTZWNvbmRhcnkpO1xyXG4gICAgICAgICAgICAgICAgfSkoZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXsgcmVuZGVyQ2hhcnRzKCk7IH0sIDMwMCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiAgIC8vIGNpdGllc1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyQ2hhcnRzKCl7XHJcbiAgICB2YXIgY3R4ID0gJChcIiNjaXRpZXNcIik7XHJcblxyXG4gICAgdmFyIGNpdGllc0NoYXJ0ID0gbmV3IENoYXJ0KGN0eCwge1xyXG4gICAgICAgIHR5cGU6ICdkb3VnaG51dCcsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBsYWJlbHM6IGNpdGllc05hbWVzLFxyXG4gICAgICAgICAgICBkYXRhc2V0czogW3tcclxuICAgICAgICAgICAgICAgIGxhYmVsOiAnIyBvZiBWb3RlcycsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBjaXRpZXNWYWx1ZXMsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcclxuICAgICAgICAgICAgICAgICAgICAnIzAwNEM5NycsXHJcbiAgICAgICAgICAgICAgICAgICAgJyMwMDg1Q0EnLFxyXG4gICAgICAgICAgICAgICAgICAgICcjMDBBQUUyJyxcclxuICAgICAgICAgICAgICAgICAgICAnIzNDQkVFOScsXHJcbiAgICAgICAgICAgICAgICAgICAgJyNDNEM5Q0QnXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDBcclxuICAgICAgICAgICAgfV1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgY3V0b3V0UGVyY2VudGFnZTogNzUsXHJcbiAgICAgICAgICAgIHRvb2x0aXBzOiB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRkZGJyxcclxuICAgICAgICAgICAgICAgIGJvZHlGb250Q29sb3I6ICcjMDBhYWUyJyxcclxuICAgICAgICAgICAgICAgIGJvZHlGb250U2l6ZTogMTIsXHJcbiAgICAgICAgICAgICAgICBib2R5Rm9udEZhbWlseTogJ0dvdGhhbS1ib2xkJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjIpJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheUNvbG9yczogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmlnaHQnLFxyXG4gICAgICAgICAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udENvbG9yOiAnIzJiMmIyYicsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDEyLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZVBvaW50U3R5bGU6IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgIC8vIHVuaXZlcnNpdGllc1xyXG4gICB2YXIgY3R4MiA9ICQoXCIjdW5pdmVyXCIpO1xyXG5cclxuICAgdmFyIHVuaXZlckRvdWdobnV0Q2hhcnQgPSBuZXcgQ2hhcnQoY3R4Miwge1xyXG4gICAgICAgdHlwZTogJ2RvdWdobnV0JyxcclxuICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICBsYWJlbHM6IHVuaXZlcnNpdGllc05hbWVzLFxyXG4gICAgICAgICAgIGRhdGFzZXRzOiBbe1xyXG4gICAgICAgICAgICAgICBsYWJlbDogJyMgb2YgVm90ZXMnLFxyXG4gICAgICAgICAgICAgICBkYXRhOiB1bml2ZXJzaXRpZXNWYWx1ZXMsXHJcbiAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogW1xyXG4gICAgICAgICAgICAgICAgICAgJyMwMDRDOTcnLFxyXG4gICAgICAgICAgICAgICAgICAgJyMwMDg1Q0EnLFxyXG4gICAgICAgICAgICAgICAgICAgJyMwMEFBRTInLFxyXG4gICAgICAgICAgICAgICAgICAgJyMzQ0JFRTknLFxyXG4gICAgICAgICAgICAgICAgICAgJyNDNEM5Q0QnXHJcbiAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAwXHJcbiAgICAgICAgICAgfV1cclxuICAgICAgIH0sXHJcbiAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgY3V0b3V0UGVyY2VudGFnZTogNzUsXHJcbiAgICAgICAgICAgdG9vbHRpcHM6IHtcclxuICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0ZGRicsXHJcbiAgICAgICAgICAgICAgIGJvZHlGb250Q29sb3I6ICcjMDBhYWUyJyxcclxuICAgICAgICAgICAgICAgYm9keUZvbnRTaXplOiAxMixcclxuICAgICAgICAgICAgICAgYm9keUZvbnRGYW1pbHk6ICdHb3RoYW0tYm9sZCcsXHJcbiAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjIpJyxcclxuICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgIGRpc3BsYXlDb2xvcnM6IGZhbHNlXHJcbiAgICAgICAgICAgfSxcclxuICAgICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgcG9zaXRpb246ICdyaWdodCcsXHJcbiAgICAgICAgICAgICAgIGxhYmVsczoge1xyXG4gICAgICAgICAgICAgICAgICAgZm9udENvbG9yOiAnIzJiMmIyYicsXHJcbiAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTIsXHJcbiAgICAgICAgICAgICAgICAgICAvLyBmb250RmFtaWx5OiAnR290aGFtIEJvb2snLFxyXG4gICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTAsXHJcbiAgICAgICAgICAgICAgICAgICB1c2VQb2ludFN0eWxlOiB0cnVlXHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICB9XHJcbiAgICAgICB9XHJcbiAgIH0pO1xyXG5cclxuICAgLy8gYnJhbmNoZXMgXHJcblxyXG4gICB2YXIgY3R4MyA9ICQoXCIjYnJhbmNoZXNcIik7XHJcblxyXG4gICB2YXIgYnJhbmNoZXNDaGFydCA9IG5ldyBDaGFydChjdHgzLCB7XHJcbiAgICAgICB0eXBlOiAnZG91Z2hudXQnLFxyXG4gICAgICAgZGF0YToge1xyXG4gICAgICAgICAgIGxhYmVsczogc3BlY2lhbGl0aWVzTmFtZXMsXHJcbiAgICAgICAgICAgZGF0YXNldHM6IFt7XHJcbiAgICAgICAgICAgICAgIGxhYmVsOiAnIyBvZiBWb3RlcycsXHJcbiAgICAgICAgICAgICAgIGRhdGE6IHNwZWNpYWxpdGllc1ZhbHVlcyxcclxuICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXHJcbiAgICAgICAgICAgICAgICAgICAnIzAwNEM5NycsXHJcbiAgICAgICAgICAgICAgICAgICAnIzAwODVDQScsXHJcbiAgICAgICAgICAgICAgICAgICAnIzAwQUFFMicsXHJcbiAgICAgICAgICAgICAgICAgICAnIzNDQkVFOScsXHJcbiAgICAgICAgICAgICAgICAgICAnI0M0QzlDRCdcclxuICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDBcclxuICAgICAgICAgICB9XVxyXG4gICAgICAgfSxcclxuICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICBjdXRvdXRQZXJjZW50YWdlOiA3NSxcclxuICAgICAgICAgICB0b29sdGlwczoge1xyXG4gICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRkZGJyxcclxuICAgICAgICAgICAgICAgYm9keUZvbnRDb2xvcjogJyMwMGFhZTInLFxyXG4gICAgICAgICAgICAgICBib2R5Rm9udFNpemU6IDEyLFxyXG4gICAgICAgICAgICAgICBib2R5Rm9udEZhbWlseTogJ0dvdGhhbS1ib2xkJyxcclxuICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuMiknLFxyXG4gICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMSxcclxuICAgICAgICAgICAgICAgZGlzcGxheUNvbG9yczogZmFsc2VcclxuICAgICAgICAgICB9LFxyXG4gICAgICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICBmb250Q29sb3I6ICcjMmIyYjJiJyxcclxuICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxMixcclxuICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgdXNlUG9pbnRTdHlsZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgfVxyXG4gICB9KTtcclxuICAgLy8gbWFpbi1zdHJlYW1cclxuXHJcbiAgIHZhciBjdHg0ID0gJChcIiNtYWluLXN0cmVhbVwiKTtcclxuXHJcbiAgIHZhciBtYWluQ2hhcnQgPSBuZXcgQ2hhcnQoY3R4NCwge1xyXG4gICAgICAgdHlwZTogJ2RvdWdobnV0JyxcclxuICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICBsYWJlbHM6IGJyYW5jaGVzTWFpbk5hbWVzLFxyXG4gICAgICAgICAgIGRhdGFzZXRzOiBbe1xyXG4gICAgICAgICAgICAgICBsYWJlbDogJyMgb2YgVm90ZXMnLFxyXG4gICAgICAgICAgICAgICBkYXRhOiBicmFuY2hlc01haW5WYWx1ZXMsXHJcbiAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogW1xyXG4gICAgICAgICAgICAgICAgICAgJyMwMDRDOTcnLFxyXG4gICAgICAgICAgICAgICAgICAgJyMwMDg1Q0EnLFxyXG4gICAgICAgICAgICAgICAgICAgJyMwMEFBRTInLFxyXG4gICAgICAgICAgICAgICAgICAgJyMzQ0JFRTknLFxyXG4gICAgICAgICAgICAgICAgICAgJyNFRjY1MzAnLFxyXG4gICAgICAgICAgICAgICAgICAgJyNGNTkxM0InLFxyXG4gICAgICAgICAgICAgICAgICAgJyMwMDk2MzknLFxyXG4gICAgICAgICAgICAgICAgICAgJyM3OEJFMjAnLFxyXG4gICAgICAgICAgICAgICAgICAgJyNGRkNDM0QnLFxyXG4gICAgICAgICAgICAgICAgICAgJyNFNzJFMzYnLFxyXG4gICAgICAgICAgICAgICAgICAgJyNDNEM5Q0QnXHJcbiAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAwXHJcbiAgICAgICAgICAgfV1cclxuICAgICAgIH0sXHJcbiAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgY3V0b3V0UGVyY2VudGFnZTogNzUsXHJcbiAgICAgICAgICAgdG9vbHRpcHM6IHtcclxuICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0ZGRicsXHJcbiAgICAgICAgICAgICAgIGJvZHlGb250Q29sb3I6ICcjMDBhYWUyJyxcclxuICAgICAgICAgICAgICAgYm9keUZvbnRTaXplOiAxMixcclxuICAgICAgICAgICAgICAgYm9keUZvbnRGYW1pbHk6ICdHb3RoYW0tYm9sZCcsXHJcbiAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjIpJyxcclxuICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgIGRpc3BsYXlDb2xvcnM6IGZhbHNlXHJcbiAgICAgICAgICAgfSxcclxuICAgICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgcG9zaXRpb246ICdyaWdodCcsXHJcbiAgICAgICAgICAgICAgIGxhYmVsczoge1xyXG4gICAgICAgICAgICAgICAgICAgZm9udENvbG9yOiAnIzJiMmIyYicsXHJcbiAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTIsXHJcbiAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMCxcclxuICAgICAgICAgICAgICAgICAgIHVzZVBvaW50U3R5bGU6IHRydWVcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIH1cclxuICAgICAgIH1cclxuICAgfSk7XHJcblxyXG4gICAvL3NlY29uZGFyeSBzdHJlYW1cclxuICAgXHJcbiAgIHZhciBjdHg1ID0gJChcIiNzZWNvbmRhcnktc3RyZWFtXCIpO1xyXG5cclxuICAgdmFyIHNlY29uZGFyeUNoYXJ0ID0gbmV3IENoYXJ0KGN0eDUsIHtcclxuICAgICAgIHR5cGU6ICdkb3VnaG51dCcsXHJcbiAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgbGFiZWxzOiBicmFuY2hlc1NlY29uZGFyeU5hbWVzLFxyXG4gICAgICAgICAgIGRhdGFzZXRzOiBbe1xyXG4gICAgICAgICAgICAgICBsYWJlbDogJyMgb2YgVm90ZXMnLFxyXG4gICAgICAgICAgICAgICBkYXRhOiBicmFuY2hlc1NlY29uZGFyeVZhbHVlcyxcclxuICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXHJcbiAgICAgICAgICAgICAgICAgICAnIzAwNEM5NycsXHJcbiAgICAgICAgICAgICAgICAgICAnIzAwODVDQScsXHJcbiAgICAgICAgICAgICAgICAgICAnIzAwQUFFMicsXHJcbiAgICAgICAgICAgICAgICAgICAnIzNDQkVFOScsXHJcbiAgICAgICAgICAgICAgICAgICAnI0VGNjUzMCcsXHJcbiAgICAgICAgICAgICAgICAgICAnI0Y1OTEzQicsXHJcbiAgICAgICAgICAgICAgICAgICAnIzAwOTYzOScsXHJcbiAgICAgICAgICAgICAgICAgICAnIzc4QkUyMCcsXHJcbiAgICAgICAgICAgICAgICAgICAnI0ZGQ0MzRCcsXHJcbiAgICAgICAgICAgICAgICAgICAnI0U3MkUzNicsXHJcbiAgICAgICAgICAgICAgICAgICAnI0M0QzlDRCdcclxuICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDBcclxuICAgICAgICAgICB9XVxyXG4gICAgICAgfSxcclxuICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICBjdXRvdXRQZXJjZW50YWdlOiA3NSxcclxuICAgICAgICAgICB0b29sdGlwczoge1xyXG4gICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRkZGJyxcclxuICAgICAgICAgICAgICAgYm9keUZvbnRDb2xvcjogJyMwMGFhZTInLFxyXG4gICAgICAgICAgICAgICBib2R5Rm9udFNpemU6IDEyLFxyXG4gICAgICAgICAgICAgICBib2R5Rm9udEZhbWlseTogJ0dvdGhhbS1ib2xkJyxcclxuICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuMiknLFxyXG4gICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMSxcclxuICAgICAgICAgICAgICAgZGlzcGxheUNvbG9yczogZmFsc2VcclxuICAgICAgICAgICB9LFxyXG4gICAgICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICBmb250Q29sb3I6ICcjMmIyYjJiJyxcclxuICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxMixcclxuICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgdXNlUG9pbnRTdHlsZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgfVxyXG4gICB9KTtcclxufVxyXG4gICBcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
