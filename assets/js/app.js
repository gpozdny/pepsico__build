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

    // if(type === universitiesEvent){
    //     $.ajax({
    //         type: 'GET',
    //         url: jsonURLs.universitiesStreams,
    //         data: {
    //         },
    //         dataType: 'json',
    //         success: function (data) {;
    //             (function renderData() {
    //                 universitiesNames = Object.keys(data.universities);
    //                 universitiesValues = Object.values(data.universities);
    //             })(data);
    //         }
    //     });

    // } else if (type === specialitiesEvent){
    //     $.ajax({
    //         type: 'GET',
    //         url: jsonURLs.specialitiesStream,
    //         data: {
    //         },
    //         dataType: 'json',
    //         success: function (data) {;
    //             (function renderData() {
    //                 specialitiesNames = Object.keys(data.specialities);
    //                 specialitiesValues = Object.values(data.specialities);
    //             })(data);
    //         }
    //     });
    // }

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
   

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIC8vIGZpbHRlciBkcm9wZG93blxyXG4gICAgbGV0ICRkcm9wZG93biA9ICQoJy5maWx0ZXJfX2Ryb3Bkb3duJyksXHJcbiAgICAgICAgJGZpbHRlciA9ICQoJy5saXN0X19maWx0ZXInKSxcclxuICAgICAgICAkb3ZlcmxheU1lbnRvciA9ICQoJy5tZW50b3JfX292ZXJsYXknKSxcclxuICAgICAgICAkZmlsdGVySWNvbiA9ICQoJy5saXN0X19maWx0ZXInKTtcclxuXHJcbiAgICAkZmlsdGVyLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0b2dnbGVGaWx0ZXIoKTtcclxuICAgIH0pO1xyXG5cclxuICAgICRvdmVybGF5TWVudG9yLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0b2dnbGVGaWx0ZXIoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIHRvZ2dsZUZpbHRlcigpIHtcclxuICAgICAgICAkb3ZlcmxheU1lbnRvci50b2dnbGVDbGFzcygnc2hvd24nKTtcclxuICAgICAgICAkZHJvcGRvd24udG9nZ2xlQ2xhc3MoJ2ZpbHRlcl9fZHJvcGRvd24tLWFjdGl2ZScpO1xyXG4gICAgICAgICRmaWx0ZXIudG9nZ2xlQ2xhc3MoJ2xpc3RfX2ZpbHRlci0tYWN0aXZlJyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIHBvcHVwc1xyXG5cclxuICAgIGxldCAkcHJvZmlsZUl0ZW0gPSAkKCcucHJvZmlsZV9faXRlbScpLFxyXG4gICAgICAgICRpbnRlcnZpZXcgPSAkKCcjaW50ZXJ2aWV3JyksXHJcbiAgICAgICAgJGJyaWVmaW5nID0gJCgnI2JyaWVmaW5nJyksXHJcbiAgICAgICAgJHByZXNlbnRhdGlvbiA9ICQoJyNwcmVzZW50YXRpb24nKSxcclxuICAgICAgICAkZmluYWxzID0gJCgnI2ZpbmFscycpLFxyXG4gICAgICAgICRvdmVybGF5ID0gJCgnLnByb2ZpbGVfX21vZGFscy1vdmVybGF5JyksXHJcbiAgICAgICAgJG1vZGFsX2JyaWVmaW5nID0gJCgnLnByb2ZpbGVfX21vZGFscycpLFxyXG4gICAgICAgICRtb2RhbF9wcmVzZW50YXRpb24gPSAkKCcucHJvZmlsZV9fbW9kYWxzLXByZXNlbnRhdGlvbicpLFxyXG4gICAgICAgICRtb2RhbF9mYWlsID0gJCgnLnByb2ZpbGVfX21vZGFscy1mYWlsJyksXHJcbiAgICAgICAgJG1vZGFsX2RlYWRsaW5lID0gJCgnLnByb2ZpbGVfX21vZGFscy1kZWFkbGluZScpLFxyXG4gICAgICAgICRtb2RhbF9maW5hbHMgPSAkKCcjZmluYWxzTW9kYWwnKSxcclxuICAgICAgICAkbW9kYWxfc3VjY2VzcyA9ICQoJyNzdWNjZXNzTW9kYWwnKSxcclxuICAgICAgICAkcGxhY2Vob2xkZXIgPSAkKCcjcGxhY2Vob2xkZXInKSxcclxuICAgICAgICAkY3Jvc3MgPSAkKCcucHJvZmlsZV9fbW9kYWwtY3Jvc3MnKSxcclxuICAgICAgICAkYnRuQ2xvc2UgPSAkKCcuYnRuLWNsb3NlJyksXHJcbiAgICAgICAgJHdyYXBwZXIgPSAkKCcud3JhcHBlcicpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGFkZEJsdXJyZWRPdmVybGF5KCkge1xyXG4gICAgICAgICRvdmVybGF5LmFkZENsYXNzKCdwcm9maWxlX19tb2RhbHMtb3ZlcmxheS0tYWN0aXZlJyk7XHJcbiAgICAgICAgJHdyYXBwZXIuYWRkQ2xhc3MoJ2JsdXInKTtcclxuICAgIH1cclxuXHJcbiAgICAkKCdbZGF0YS1tb2RhbF0nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0ICR0aGlzID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgJGRhdGFUeXBlID0gJHRoaXMuZGF0YSgnbW9kYWwnKTtcclxuXHJcbiAgICAgICAgcmVtb3ZlTW9kYWxzKCk7XHJcbiAgICAgICAgYWRkQmx1cnJlZE92ZXJsYXkoKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJGRhdGFUeXBlKTtcclxuXHJcbiAgICAgICAgc3dpdGNoICgkZGF0YVR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAnYWRkLWJyaWVmJzpcclxuICAgICAgICAgICAgICAgICRtb2RhbF9icmllZmluZy5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnYWRkLXByZXNlbnRhdGlvbic6XHJcbiAgICAgICAgICAgICAgICAkbW9kYWxfcHJlc2VudGF0aW9uLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdmYWlsJzpcclxuICAgICAgICAgICAgICAgICRtb2RhbF9mYWlsLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdkZWFkbGluZSc6XHJcbiAgICAgICAgICAgICAgICAkbW9kYWxfZGVhZGxpbmUuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxyXG4gICAgICAgICAgICAgICAgJG1vZGFsX3N1Y2Nlc3MuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2ZpbmFsJzpcclxuICAgICAgICAgICAgICAgICRtb2RhbF9maW5hbHMuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgICRjcm9zcy5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmVtb3ZlTW9kYWxzKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkYnRuQ2xvc2Uub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJlbW92ZU1vZGFscygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlTW9kYWxzKCkge1xyXG4gICAgICAgICQoJ1tkYXRhLXBvcHVwXScpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgICAgICRvdmVybGF5LnJlbW92ZUNsYXNzKFwicHJvZmlsZV9fbW9kYWxzLW92ZXJsYXktLWFjdGl2ZVwiKTtcclxuICAgICAgICAkd3JhcHBlci5yZW1vdmVDbGFzcygnYmx1cicpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBXaGVuIHRoZSB1c2VyIGNsaWNrcyBhbnl3aGVyZSBvdXRzaWRlIG9mIHRoZSBtb2RhbCwgY2xvc2UgaXRcclxuICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbCcpO1xyXG4gICAgd2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09IG1vZGFsKSB7XHJcbiAgICAgICAgICAgIHJlbW92ZU1vZGFscygpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8gaXRlbXMnIGJhY2tncm91bmRzXHJcbiAgICBpZiAoJGludGVydmlldy5pcygnLnByb2ZpbGVfX2l0ZW0tLWRlc2NyaXB0aW9uJykpIHtcclxuICAgICAgICAkaW50ZXJ2aWV3LmFkZENsYXNzKCdwcm9maWxlX19pdGVtLWljb24tLWludGVydmlldy13aGl0ZScpXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCRicmllZmluZy5pcygnLnByb2ZpbGVfX2l0ZW0tLWRlc2NyaXB0aW9uJykpIHtcclxuICAgICAgICAkYnJpZWZpbmcuYWRkQ2xhc3MoJ3Byb2ZpbGVfX2l0ZW0taWNvbi0taWRlYS13aGl0ZScpXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCRmaW5hbHMuaXMoJy5wcm9maWxlX19pdGVtLS1kZXNjcmlwdGlvbicpKSB7XHJcbiAgICAgICAgJGZpbmFscy5hZGRDbGFzcygncHJvZmlsZV9faXRlbS1pY29uLS1maW5hbHMtYWN0aXZlJylcclxuICAgIH1cclxuXHJcbiAgICBpZiAoJHByZXNlbnRhdGlvbi5pcygnLnByb2ZpbGVfX2l0ZW0tLWRlc2NyaXB0aW9uJykpIHtcclxuICAgICAgICAkcHJlc2VudGF0aW9uLmFkZENsYXNzKCdwcm9maWxlX19pdGVtLWljb24tLXByZXNlbnRhdGlvbi1hY3RpdmUnKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHBhcnRpY2lwYW50IGxpc3QgXHJcblxyXG4gICAgbGV0ICRwYXJ0aWNpcGFudCA9ICQoJy5wYXJ0aWNpcGFudCcpO1xyXG5cclxuICAgICRwYXJ0aWNpcGFudC5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcInBhcnRpY2lwYW50LS1hY3RpdmVcIikuc2libGluZ3MoKS5yZW1vdmVDbGFzcyhcInBhcnRpY2lwYW50LS1hY3RpdmVcIik7XHJcbiAgICB9KVxyXG4gICAgLy8galF1ZXJ5IEtub2JcclxuXHJcbiAgICBsZXQgJGRpYWwgPSAkKFwiLmRpYWxcIik7XHJcblxyXG4gICAgJGRpYWwua25vYih7XHJcbiAgICAgICAgJ21pbic6IDAsXHJcbiAgICAgICAgJ21heCc6IDEwLFxyXG4gICAgICAgICdyb3RhdGlvbic6IFwiYW50aWNsb2Nrd2lzZVwiLFxyXG4gICAgICAgICdyZWxlYXNlJzogZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICAgICAgbGV0IGNvbG9yO1xyXG4gICAgICAgICAgICBsZXQgZGF0YUhpZ2ggPSAkZGlhbC5kYXRhKFwiaGlnaFwiKTtcclxuICAgICAgICAgICAgbGV0IGRhdGFMb3cgPSAkZGlhbC5kYXRhKFwibG93XCIpO1xyXG4gICAgICAgICAgICBpZiAodiA8PSBkYXRhTG93KSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvciA9ICcjRTcyRTM2JztcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh2IDwgZGF0YUhpZ2gpIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yID0gJyNGNTkxM0InO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29sb3IgPSAnIzAwOTYzOSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy4kLnRyaWdnZXIoJ2NvbmZpZ3VyZScsIHtcclxuICAgICAgICAgICAgICAgIFwiZmdDb2xvclwiOiBjb2xvcixcclxuICAgICAgICAgICAgICAgIFwiaW5wdXRDb2xvclwiOiBjb2xvclxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vIGRpc2FibGUgRU5URVIgb24gaW5wdXRcclxuICAgICRkaWFsLmtleXByZXNzKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYgKGUud2hpY2ggPT0gMTMpIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGJyaWVmICsgcHJlc2VudGF0aW9uIHdpZHRoICEgY3J1dGNoICFcclxuICAgIGxldCAkcHJvamVjdHMgPSAkKCcucGFydGljaXBhbnQtaW5mb19fcmlnaHQnKTtcclxuXHJcbiAgICBpZiAoJHByb2plY3RzLmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgICAgJHByb2plY3RzLmNzcyhcIndpZHRoXCIsIFwiNTAlXCIpO1xyXG4gICAgfSBlbHNlICRwcm9qZWN0cy5jc3MoXCJ3aWR0aFwiLCBcIjI1JVwiKTtcclxuXHJcblxyXG4gICAgLy8gcG9wdXBzIGZpbGVzXHJcblxyXG4gICAgbGV0ICRpbnB1dE5hbWUgPSAkKCcucHJvZmlsZV9fYXR0YWNobWVudHMtaW5wdXQnKSxcclxuICAgICAgICAkaW1nSW5wdXQgPSAkKCcjaW1nSW5wdXQnKSxcclxuICAgICAgICAkZG9jeElucHV0ID0gJCgnI2RvY3hJbnB1dCcpLFxyXG4gICAgICAgICRkZXNjSW5wdXQgPSAkKCcjZGVzY0lucHV0JyksXHJcbiAgICAgICAgJHByZXNlbnRJbnB1dCA9ICQoJyNwcmVzZW50SW5wdXQnKSxcclxuICAgICAgICAkZG9jeFByZXNlbnRhdGlvbiA9ICQoJyNkb2N4UHJlc2VudGF0aW9uJyksXHJcbiAgICAgICAgJHBwdHggPSAkKCcjcHB0eCcpLFxyXG4gICAgICAgICRkb2N4ID0gJCgnI2RvY3gnKSxcclxuICAgICAgICAkaW1hZ2UgPSAkKCcjaW1hZ2VXcmFwJyksXHJcbiAgICAgICAgJGxhYmVsRG9jeCA9ICQoJyNsYWJlbERvY3gnKSxcclxuICAgICAgICAkbGFiZWxJbWFnZSA9ICQoJyNsYWJlbEltYWdlJyksXHJcbiAgICAgICAgJGxhYmVsUHJlc2VudGF0aW9uID0gJCgnI2xhYmVsUHJlc2VudGF0aW9uJyksXHJcbiAgICAgICAgJGxhYmVsRGVzYyA9ICQoJyNsYWJlbERlc2MnKSxcclxuICAgICAgICAkYXR0Y2hCdG4gPSAkKCcucHJvZmlsZV9fYXR0YWNobWVudHMtYnRuJyk7XHJcblxyXG4gICAgLy8gZGVsZXRlIGF0dGFjaG1lbnRzXHJcblxyXG4gICAgJCgnW2RhdGEtY2xvc2VdJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCAkdGhpcyA9ICQodGhpcyksXHJcbiAgICAgICAgICAgICRkYXRhVHlwZSA9ICR0aGlzLmRhdGEoJ2Nsb3NlJyk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCRkYXRhVHlwZSk7XHJcbiAgICAgICAgc3dpdGNoICgkZGF0YVR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAnZG9jeCc6XHJcbiAgICAgICAgICAgICAgICBkZWxldGVEb2N4KCk7XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZVByb2plY3QoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdpbWcnOlxyXG4gICAgICAgICAgICAgICAgZGVsZXRlSW1nKCk7XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZVByb2plY3QoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdkZXNjcmlwdGlvbic6XHJcbiAgICAgICAgICAgICAgICBkZWxldGVEZXNjcmlwdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGVQcmVzZW50KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAncHJlc2VudGF0aW9uJzpcclxuICAgICAgICAgICAgICAgIGRlbGV0ZVByZXNlbnRhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGVQcmVzZW50KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gZGVsZXRlRG9jeCgpIHtcclxuICAgICAgICAkZG9jeElucHV0LndyYXAoJzxmb3JtPicpLmNsb3Nlc3QoJ2Zvcm0nKS5nZXQoMCkucmVzZXQoKTtcclxuICAgICAgICAkZG9jeElucHV0LnVud3JhcCgpO1xyXG4gICAgICAgICRkb2N4LnJlbW92ZUNsYXNzKCdzaG93Jyk7XHJcbiAgICAgICAgJGRvY3guYWRkQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgICAgICRsYWJlbERvY3gucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgICAgICRsYWJlbERvY3guYWRkQ2xhc3MoJ3Nob3cnKTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gZGVsZXRlSW1nKCkge1xyXG4gICAgICAgICRpbWdJbnB1dC53cmFwKCc8Zm9ybT4nKS5jbG9zZXN0KCdmb3JtJykuZ2V0KDApLnJlc2V0KCk7XHJcbiAgICAgICAgJGltZ0lucHV0LnVud3JhcCgpO1xyXG4gICAgICAgICRpbWFnZS5yZW1vdmVDbGFzcygnc2hvdycpO1xyXG4gICAgICAgICRpbWFnZS5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAgICAgJGxhYmVsSW1hZ2UucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgICAgICRsYWJlbEltYWdlLmFkZENsYXNzKCdzaG93Jyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGRlbGV0ZURlc2NyaXB0aW9uKCkge1xyXG4gICAgICAgICRkZXNjSW5wdXQud3JhcCgnPGZvcm0+JykuY2xvc2VzdCgnZm9ybScpLmdldCgwKS5yZXNldCgpO1xyXG4gICAgICAgICRkZXNjSW5wdXQudW53cmFwKCk7XHJcbiAgICAgICAgJGRvY3hQcmVzZW50YXRpb24ucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcclxuICAgICAgICAkZG9jeFByZXNlbnRhdGlvbi5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAgICAgJGxhYmVsRGVzYy5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAgICAgJGxhYmVsRGVzYy5hZGRDbGFzcygnc2hvdycpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBkZWxldGVQcmVzZW50YXRpb24oKSB7XHJcbiAgICAgICAgJGltZ0lucHV0LndyYXAoJzxmb3JtPicpLmNsb3Nlc3QoJ2Zvcm0nKS5nZXQoMCkucmVzZXQoKTtcclxuICAgICAgICAkaW1nSW5wdXQudW53cmFwKCk7XHJcbiAgICAgICAgJHBwdHgucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcclxuICAgICAgICAkcHB0eC5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAgICAgJGxhYmVsUHJlc2VudGF0aW9uLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcclxuICAgICAgICAkbGFiZWxQcmVzZW50YXRpb24uYWRkQ2xhc3MoJ3Nob3cnKTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gY2hhbmdlRG9jeCgpIHtcclxuICAgICAgICAkZG9jeC5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAgICAgJGRvY3guYWRkQ2xhc3MoJ3Nob3cnKTtcclxuICAgICAgICAkbGFiZWxEb2N4LnJlbW92ZUNsYXNzKCdzaG93Jyk7XHJcbiAgICAgICAgJGxhYmVsRG9jeC5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGNoYW5nZUltYWdlKCkge1xyXG4gICAgICAgICRpbWFnZS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAgICAgJGltYWdlLmFkZENsYXNzKCdzaG93Jyk7XHJcbiAgICAgICAgJGxhYmVsSW1hZ2UucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcclxuICAgICAgICAkbGFiZWxJbWFnZS5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGNoYW5nZURlc2MoKSB7XHJcbiAgICAgICAgJGRvY3hQcmVzZW50YXRpb24ucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgICAgICRkb2N4UHJlc2VudGF0aW9uLmFkZENsYXNzKCdzaG93Jyk7XHJcbiAgICAgICAgJGxhYmVsRGVzYy5yZW1vdmVDbGFzcygnc2hvdycpO1xyXG4gICAgICAgICRsYWJlbERlc2MuYWRkQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBjaGFuZ2VQcmVzZW50YXRpb24oKSB7XHJcbiAgICAgICAgJHBwdHgucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgICAgICRwcHR4LmFkZENsYXNzKCdzaG93Jyk7XHJcbiAgICAgICAgJGxhYmVsUHJlc2VudGF0aW9uLnJlbW92ZUNsYXNzKCdzaG93Jyk7XHJcbiAgICAgICAgJGxhYmVsUHJlc2VudGF0aW9uLmFkZENsYXNzKCdoaWRkZW4nKTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gcHJldmlld0ZpbGUoKSB7XHJcblxyXG4gICAgICAgIGxldCBwcmV2aWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ltYWdlJyk7XHJcbiAgICAgICAgbGV0IGZpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW1nSW5wdXQnKS5maWxlc1swXTtcclxuICAgICAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuXHJcbiAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcHJldmlldy5zcmMgPSByZWFkZXIucmVzdWx0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGZpbGUpIHtcclxuICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcHJldmlldy5zcmMgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8gY2hlY2sgZm9ybXNcclxuXHJcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZVByb2plY3QoKSB7XHJcbiAgICAgICAgbGV0ICRkb2MgPSAkKCcjZG9jeElucHV0JyksXHJcbiAgICAgICAgICAgICRpbWcgPSAkKCcjaW1nSW5wdXQnKSxcclxuICAgICAgICAgICAgJG5hbWUgPSAkKCcjcHJvamVjdE5hbWUnKSxcclxuICAgICAgICAgICAgJGJ0biA9ICQoJyNzdWJtaXRQcm9qZWN0Jyk7XHJcblxyXG4gICAgICAgIGlmICgkZG9jLmdldCgwKS5maWxlcy5sZW5ndGggIT09IDAgJiYgJGltZy5nZXQoMCkuZmlsZXMubGVuZ3RoICE9PSAwICYmICRuYW1lLnZhbCgpLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICAkYnRuLmFkZENsYXNzKCdidG4tLWFjdGl2ZScpO1xyXG4gICAgICAgIH0gZWxzZSAkYnRuLnJlbW92ZUNsYXNzKCdidG4tLWFjdGl2ZScpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZVByZXNlbnQoKSB7XHJcbiAgICAgICAgbGV0ICRkZXNjID0gJCgnI2Rlc2NJbnB1dCcpLFxyXG4gICAgICAgICAgICAkcHJlc2VudGF0aW9uID0gJCgnI3ByZXNlbnRJbnB1dCcpLFxyXG4gICAgICAgICAgICAkYnRuUHJlc2VudCA9ICQoJyNzdWJtaXRQcmVzZW50Jyk7XHJcblxyXG4gICAgICAgIGlmICgkZGVzYy5nZXQoMCkuZmlsZXMubGVuZ3RoICE9PSAwICYmICRwcmVzZW50YXRpb24uZ2V0KDApLmZpbGVzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICAkYnRuUHJlc2VudC5hZGRDbGFzcygnYnRuLS1hY3RpdmUnKTtcclxuICAgICAgICB9IGVsc2UgJGJ0blByZXNlbnQucmVtb3ZlQ2xhc3MoJ2J0bi0tYWN0aXZlJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGNoZWNrTGVuZ3RoKCkge1xyXG4gICAgICAgIGxldCAkY29tbWVudCA9ICQoJy5wYXJ0aWNpcGFudF9fYXNzZXNzbWVudC1pbnB1dCcpLFxyXG4gICAgICAgICAgICAkYnRuTWVudG9yID0gJCgnI2J0bk1lbnRvcicpO1xyXG5cclxuICAgICAgICAkYnRuTWVudG9yLnRvZ2dsZUNsYXNzKCdidG4tLWFjdGl2ZScsICRjb21tZW50LnZhbCgpLmxlbmd0aCAhPT0gMCk7IC8vIHByZWZlcmFibGVcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gY2hlY2tGb3JtKCkge1xyXG4gICAgICAgIGxldCAkYnRuQXV0aCA9ICQoJy5mb3JtX19hdXRoLWJ0bicpLFxyXG4gICAgICAgICAgICAkYXV0aElucHV0cyA9ICQoJy5mb3JtX19sb2dpbiwgLmZvcm1fX3Bhc3N3b3JkJyk7XHJcbiAgICAgICAgJGJ0bkF1dGgudG9nZ2xlQ2xhc3MoJ2J0bi0td2hpdGUnLCAkYXV0aElucHV0cy52YWwoKS5sZW5ndGggIT09IDApOyAvLyBwcmVmZXJhYmxlXHJcbiAgICB9O1xyXG59KTtcclxuXHJcbiAgICAvLyBhbmFseXRpY3NcclxuXHJcbiAgICBsZXQgdXNlcnNFdmVudCA9IFwidXNlcnNcIixcclxuICAgIHVzZXJzRXZlbnRTdHJlYW0gPSBcInN0cmVhbVwiLFxyXG4gICAgbWVudG9yc0V2ZW50ID0gXCJtZW50b3JzXCIsXHJcbiAgICB1bml2ZXJzaXRpZXNFdmVudCA9IFwidW5pdmVyc2l0aWVzXCIsXHJcbiAgICBzcGVjaWFsaXRpZXNFdmVudCA9IFwic3BlY2lhbGl0aWVzXCIsXHJcbiAgICBhbGxEYXRhID0gXCJhbGxEYXRhXCI7XHJcblxyXG5nZXREYXRhKGFsbERhdGEpO1xyXG5cclxuZnVuY3Rpb24gZ2V0RGF0YSh0eXBlKSB7XHJcblxyXG4gICAgY29uc29sZS5sb2codHlwZSk7XHJcbiAgICBsZXQgZGF0ZUZyb20gPSAkKFwiLmpzLXJhbmdlLWZyb21cIikudmFsKCksXHJcbiAgICAgICAgZGF0ZVRvID0gJChcIi5qcy1yYW5nZS10b1wiKS52YWwoKSxcclxuICAgICAgICB1c2VyU2VsZWN0aW9uID0gJChcIi5qcy11c2VyLXNlbGVjdGlvblwiKS52YWwoKSxcclxuICAgICAgICBtZW50b3JTZWxlY3Rpb24gPSAkKFwiLmpzLW1lbnRvci1zZWxlY3Rpb25cIikudmFsKCksXHJcbiAgICAgICAgc3RyZWFtU2VsZWN0aW9uID0gJChcIi5qcy1zdHJlYW0tc2VsZWN0aW9uXCIpLnZhbCgpLFxyXG4gICAgICAgIGFsbERhdGFVcmwgPSAnYXNzZXRzL2pzb24vcGFyYW1zLmpzb24nLFxyXG4gICAgICAgIHVzZXJzVXJsID0gJ2Fzc2V0cy9qc29uL2NoYXJ0c1VzZXJzLmpzb24nLFxyXG4gICAgICAgIG1lbnRvcnNVcmwgPSAnYXNzZXRzL2pzb24vY2hhcnRzTWVudG9yLmpzb24nLFxyXG4gICAgICAgIGFjdGl2ZVVybCA9ICdhc3NldHMvanNvbi9wYXJhbXMuanNvbic7XHJcblxyXG4gICAgaWYgKCFkYXRlRnJvbSB8fCAhZGF0ZVRvKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlID09PSB1c2Vyc0V2ZW50KSB7XHJcbiAgICAgICAgYWN0aXZlVXJsID0gJ2Fzc2V0cy9qc29uL2NoYXJ0c1VzZXJzLmpzb24nO1xyXG4gICAgICAgIHVzZXJzRGF0YShhY3RpdmVVcmwpO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBtZW50b3JzRXZlbnQpIHtcclxuICAgICAgICBhY3RpdmVVcmwgPSAnYXNzZXRzL2pzb24vY2hhcnRzTWVudG9yLmpzb24nO1xyXG4gICAgICAgIHVzZXJzRGF0YShhY3RpdmVVcmwpO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSB1c2Vyc0V2ZW50U3RyZWFtKSB7XHJcbiAgICAgICAgYWN0aXZlVXJsID0gJ2Fzc2V0cy9qc29uL2NoYXJ0c1VzZXJzU3RyZWFtLmpzb24nO1xyXG4gICAgICAgIHVzZXJzRGF0YShhY3RpdmVVcmwpO1xyXG4gICAgfSBcclxuXHJcbiAgICB1c2Vyc0RhdGEoYWN0aXZlVXJsKTtcclxuXHJcbiAgICBmdW5jdGlvbiB1c2Vyc0RhdGEoYWN0aXZlVXJsKSB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogJ0dFVCcsXHJcbiAgICAgICAgICAgIHVybDogYWN0aXZlVXJsLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBkYXRlRnJvbTogZGF0ZUZyb20sXHJcbiAgICAgICAgICAgICAgICBkYXRlVG86IGRhdGVUbyxcclxuICAgICAgICAgICAgICAgIHVzZXJTZWxlY3Rpb246IHVzZXJTZWxlY3Rpb24sXHJcbiAgICAgICAgICAgICAgICBtZW50b3JTZWxlY3Rpb246IG1lbnRvclNlbGVjdGlvbixcclxuICAgICAgICAgICAgICAgIHN0cmVhbVNlbGVjdGlvbjogc3RyZWFtU2VsZWN0aW9uXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7O1xyXG4gICAgICAgICAgICAgICAgKGZ1bmN0aW9uIHJlbmRlckRhdGEoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQga2V5SW5uZXIgaW4gZGF0YVtrZXldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgb2JqID0gZGF0YVtrZXldW2tleUlubmVyXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCAkY29udGFpbmVyID0gJChgW2RhdGEtY2hhcnQ9XCIke2tleUlubmVyfVwiXWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmpzLXJhdGUnLCAkY29udGFpbmVyKS50ZXh0KG9iai5wZXJjZW50YWdlICsgJyUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcuanMtY2hhcnQnLCAkY29udGFpbmVyKS5jc3MoXCJoZWlnaHRcIiwgb2JqLnBlcmNlbnRhZ2UgKyAnJScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNzcyhcImJhY2tncm91bmQtY29sb3JcIiwgY2hhbmdlRGF0YShvYmoucGVyY2VudGFnZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmpzLXBhc3NlZCcsICRjb250YWluZXIpLnRleHQob2JqLnBhc3NlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcuanMtb2RkcycsICRjb250YWluZXIpLnRleHQob2JqLm9kZHMgKyAnJScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmpzLW51bWJlcicsICRjb250YWluZXIpLnRleHQob2JqLm51bWJlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KShkYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBjaGFuZ2VEYXRhKHBlcmNlbnRhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocGVyY2VudGFnZSA8IDkwICYmIHBlcmNlbnRhZ2UgPj0gNzUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiIzFGNjZCMVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGVyY2VudGFnZSA8IDc1ICYmIHBlcmNlbnRhZ2UgPj0gNTApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiIzAwODVDQVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGVyY2VudGFnZSA8IDUwICYmIHBlcmNlbnRhZ2UgPj0gMzUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiIzI2OThEM1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGVyY2VudGFnZSA+PSA5MCAmJiBwZXJjZW50YWdlIDw9IDEwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCIjMDA0Qzk3XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwZXJjZW50YWdlIDw9IDM1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIiMwMEFBRTJcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gSlNPTiBVUkxzXHJcblxyXG5sZXQganNvblVSTHMgPSB7XHJcbiAgICBjaXRpZXM6ICdhc3NldHMvanNvbi9jaXRpZXMuanNvbicsXHJcbiAgICB1bml2ZXJzaXRpZXM6ICdhc3NldHMvanNvbi91bml2ZXJzaXRpZXMuanNvbicsXHJcbiAgICB1bml2ZXJzaXRpZXNTdHJlYW1zOiAnYXNzZXRzL2pzb24vdW5pdmVyc2l0aWVzU3RyZWFtcy5qc29uJyxcclxuICAgIHNwZWNpYWxpdGllczogJ2Fzc2V0cy9qc29uL3NwZWNpYWxpdGllcy5qc29uJyxcclxuICAgIHNwZWNpYWxpdGllc1N0cmVhbTogJ2Fzc2V0cy9qc29uL3NwZWNpYWxpdGllc1N0cmVhbXMuanNvbicsXHJcbiAgICBicmFuY2hlc01haW46ICdhc3NldHMvanNvbi9icmFuY2hlc01haW4uanNvbicsXHJcbiAgICBicmFuY2hlc1NlY29uZGFyeTogJ2Fzc2V0cy9qc29uL2JyYW5jaGVzU2Vjb25kYXJ5Lmpzb24nXHJcbn07XHJcblxyXG4vLyBFTkRcclxuXHJcbi8vIEdFVCBEQVRBXHJcblxyXG5sZXQgY2l0aWVzTmFtZXMsXHJcbiAgICBjaXRpZXNWYWx1ZXMsXHJcbiAgICB1bml2ZXJzaXRpZXNOYW1lcyxcclxuICAgIHVuaXZlcnNpdGllc1ZhbHVlcyxcclxuICAgIHNwZWNpYWxpdGllc05hbWVzLFxyXG4gICAgc3BlY2lhbGl0aWVzVmFsdWVzLFxyXG4gICAgYnJhbmNoZXNNYWluTmFtZXMsXHJcbiAgICBicmFuY2hlc01haW5WYWx1ZXMsXHJcbiAgICBicmFuY2hlc1NlY29uZGFyeU5hbWVzLFxyXG4gICAgYnJhbmNoZXNTZWNvbmRhcnlWYWx1ZXM7XHJcblxyXG5cclxuZ2V0RGF0YUNpcmNsZXMoKTtcclxuXHJcbmZ1bmN0aW9uIGdldERhdGFDaXJjbGVzKHR5cGUpe1xyXG5cclxuICAgIC8vIGlmKHR5cGUgPT09IHVuaXZlcnNpdGllc0V2ZW50KXtcclxuICAgIC8vICAgICAkLmFqYXgoe1xyXG4gICAgLy8gICAgICAgICB0eXBlOiAnR0VUJyxcclxuICAgIC8vICAgICAgICAgdXJsOiBqc29uVVJMcy51bml2ZXJzaXRpZXNTdHJlYW1zLFxyXG4gICAgLy8gICAgICAgICBkYXRhOiB7XHJcbiAgICAvLyAgICAgICAgIH0sXHJcbiAgICAvLyAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAvLyAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7O1xyXG4gICAgLy8gICAgICAgICAgICAgKGZ1bmN0aW9uIHJlbmRlckRhdGEoKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdW5pdmVyc2l0aWVzTmFtZXMgPSBPYmplY3Qua2V5cyhkYXRhLnVuaXZlcnNpdGllcyk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdW5pdmVyc2l0aWVzVmFsdWVzID0gT2JqZWN0LnZhbHVlcyhkYXRhLnVuaXZlcnNpdGllcyk7XHJcbiAgICAvLyAgICAgICAgICAgICB9KShkYXRhKTtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH0pO1xyXG5cclxuICAgIC8vIH0gZWxzZSBpZiAodHlwZSA9PT0gc3BlY2lhbGl0aWVzRXZlbnQpe1xyXG4gICAgLy8gICAgICQuYWpheCh7XHJcbiAgICAvLyAgICAgICAgIHR5cGU6ICdHRVQnLFxyXG4gICAgLy8gICAgICAgICB1cmw6IGpzb25VUkxzLnNwZWNpYWxpdGllc1N0cmVhbSxcclxuICAgIC8vICAgICAgICAgZGF0YToge1xyXG4gICAgLy8gICAgICAgICB9LFxyXG4gICAgLy8gICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgLy8gICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkgeztcclxuICAgIC8vICAgICAgICAgICAgIChmdW5jdGlvbiByZW5kZXJEYXRhKCkge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHNwZWNpYWxpdGllc05hbWVzID0gT2JqZWN0LmtleXMoZGF0YS5zcGVjaWFsaXRpZXMpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHNwZWNpYWxpdGllc1ZhbHVlcyA9IE9iamVjdC52YWx1ZXMoZGF0YS5zcGVjaWFsaXRpZXMpO1xyXG4gICAgLy8gICAgICAgICAgICAgfSkoZGF0YSk7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6ICdHRVQnLFxyXG4gICAgICAgIHVybDoganNvblVSTHMuY2l0aWVzLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHs7XHJcbiAgICAgICAgICAgIChmdW5jdGlvbiByZW5kZXJEYXRhKCkge1xyXG4gICAgICAgICAgICAgICAgY2l0aWVzTmFtZXMgPSBPYmplY3Qua2V5cyhkYXRhLmNpdGllcyk7XHJcbiAgICAgICAgICAgICAgICBjaXRpZXNWYWx1ZXMgPSBPYmplY3QudmFsdWVzKGRhdGEuY2l0aWVzKTtcclxuICAgICAgICAgICAgfSkoZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6ICdHRVQnLFxyXG4gICAgICAgIHVybDoganNvblVSTHMudW5pdmVyc2l0aWVzLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHs7XHJcbiAgICAgICAgICAgIChmdW5jdGlvbiByZW5kZXJEYXRhKCkge1xyXG4gICAgICAgICAgICAgICAgdW5pdmVyc2l0aWVzTmFtZXMgPSBPYmplY3Qua2V5cyhkYXRhLnVuaXZlcnNpdGllcyk7XHJcbiAgICAgICAgICAgICAgICB1bml2ZXJzaXRpZXNWYWx1ZXMgPSBPYmplY3QudmFsdWVzKGRhdGEudW5pdmVyc2l0aWVzKTtcclxuICAgICAgICAgICAgfSkoZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6ICdHRVQnLFxyXG4gICAgICAgIHVybDoganNvblVSTHMuc3BlY2lhbGl0aWVzLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHs7XHJcbiAgICAgICAgICAgIChmdW5jdGlvbiByZW5kZXJEYXRhKCkge1xyXG4gICAgICAgICAgICAgICAgc3BlY2lhbGl0aWVzTmFtZXMgPSBPYmplY3Qua2V5cyhkYXRhLnNwZWNpYWxpdGllcyk7XHJcbiAgICAgICAgICAgICAgICBzcGVjaWFsaXRpZXNWYWx1ZXMgPSBPYmplY3QudmFsdWVzKGRhdGEuc3BlY2lhbGl0aWVzKTtcclxuICAgICAgICAgICAgfSkoZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6ICdHRVQnLFxyXG4gICAgICAgIHVybDoganNvblVSTHMuYnJhbmNoZXNNYWluLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHs7XHJcbiAgICAgICAgICAgIChmdW5jdGlvbiByZW5kZXJEYXRhKCkge1xyXG4gICAgICAgICAgICAgICAgYnJhbmNoZXNNYWluTmFtZXMgPSBPYmplY3Qua2V5cyhkYXRhLmJyYW5jaGVzTWFpbik7XHJcbiAgICAgICAgICAgICAgICBicmFuY2hlc01haW5WYWx1ZXMgPSBPYmplY3QudmFsdWVzKGRhdGEuYnJhbmNoZXNNYWluKTtcclxuICAgICAgICAgICAgfSkoZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6ICdHRVQnLFxyXG4gICAgICAgIHVybDoganNvblVSTHMuYnJhbmNoZXNTZWNvbmRhcnksXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkgeztcclxuICAgICAgICAgICAgKGZ1bmN0aW9uIHJlbmRlckRhdGEoKSB7XHJcbiAgICAgICAgICAgICAgICBicmFuY2hlc1NlY29uZGFyeU5hbWVzID0gT2JqZWN0LmtleXMoZGF0YS5icmFuY2hlc1NlY29uZGFyeSk7XHJcbiAgICAgICAgICAgICAgICBicmFuY2hlc1NlY29uZGFyeVZhbHVlcyA9IE9iamVjdC52YWx1ZXMoZGF0YS5icmFuY2hlc1NlY29uZGFyeSk7XHJcbiAgICAgICAgICAgIH0pKGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXsgcmVuZGVyQ2hhcnRzKCk7IH0sIDMwMCk7XHJcbn1cclxuXHJcbiAgIC8vIGNpdGllc1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyQ2hhcnRzKCl7XHJcbiAgICB2YXIgY3R4ID0gJChcIiNjaXRpZXNcIik7XHJcblxyXG4gICAgdmFyIGNpdGllc0NoYXJ0ID0gbmV3IENoYXJ0KGN0eCwge1xyXG4gICAgICAgIHR5cGU6ICdkb3VnaG51dCcsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBsYWJlbHM6IGNpdGllc05hbWVzLFxyXG4gICAgICAgICAgICBkYXRhc2V0czogW3tcclxuICAgICAgICAgICAgICAgIGxhYmVsOiAnIyBvZiBWb3RlcycsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBjaXRpZXNWYWx1ZXMsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcclxuICAgICAgICAgICAgICAgICAgICAnIzAwNEM5NycsXHJcbiAgICAgICAgICAgICAgICAgICAgJyMwMDg1Q0EnLFxyXG4gICAgICAgICAgICAgICAgICAgICcjMDBBQUUyJyxcclxuICAgICAgICAgICAgICAgICAgICAnIzNDQkVFOScsXHJcbiAgICAgICAgICAgICAgICAgICAgJyNDNEM5Q0QnXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDBcclxuICAgICAgICAgICAgfV1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgY3V0b3V0UGVyY2VudGFnZTogNzUsXHJcbiAgICAgICAgICAgIHRvb2x0aXBzOiB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRkZGJyxcclxuICAgICAgICAgICAgICAgIGJvZHlGb250Q29sb3I6ICcjMDBhYWUyJyxcclxuICAgICAgICAgICAgICAgIGJvZHlGb250U2l6ZTogMTIsXHJcbiAgICAgICAgICAgICAgICBib2R5Rm9udEZhbWlseTogJ0dvdGhhbS1ib2xkJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjIpJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheUNvbG9yczogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmlnaHQnLFxyXG4gICAgICAgICAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udENvbG9yOiAnIzJiMmIyYicsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDEyLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZVBvaW50U3R5bGU6IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgIC8vIHVuaXZlcnNpdGllc1xyXG4gICB2YXIgY3R4MiA9ICQoXCIjdW5pdmVyXCIpO1xyXG5cclxuICAgdmFyIHVuaXZlckRvdWdobnV0Q2hhcnQgPSBuZXcgQ2hhcnQoY3R4Miwge1xyXG4gICAgICAgdHlwZTogJ2RvdWdobnV0JyxcclxuICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICBsYWJlbHM6IHVuaXZlcnNpdGllc05hbWVzLFxyXG4gICAgICAgICAgIGRhdGFzZXRzOiBbe1xyXG4gICAgICAgICAgICAgICBsYWJlbDogJyMgb2YgVm90ZXMnLFxyXG4gICAgICAgICAgICAgICBkYXRhOiB1bml2ZXJzaXRpZXNWYWx1ZXMsXHJcbiAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogW1xyXG4gICAgICAgICAgICAgICAgICAgJyMwMDRDOTcnLFxyXG4gICAgICAgICAgICAgICAgICAgJyMwMDg1Q0EnLFxyXG4gICAgICAgICAgICAgICAgICAgJyMwMEFBRTInLFxyXG4gICAgICAgICAgICAgICAgICAgJyMzQ0JFRTknLFxyXG4gICAgICAgICAgICAgICAgICAgJyNDNEM5Q0QnXHJcbiAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAwXHJcbiAgICAgICAgICAgfV1cclxuICAgICAgIH0sXHJcbiAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgY3V0b3V0UGVyY2VudGFnZTogNzUsXHJcbiAgICAgICAgICAgdG9vbHRpcHM6IHtcclxuICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0ZGRicsXHJcbiAgICAgICAgICAgICAgIGJvZHlGb250Q29sb3I6ICcjMDBhYWUyJyxcclxuICAgICAgICAgICAgICAgYm9keUZvbnRTaXplOiAxMixcclxuICAgICAgICAgICAgICAgYm9keUZvbnRGYW1pbHk6ICdHb3RoYW0tYm9sZCcsXHJcbiAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjIpJyxcclxuICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgIGRpc3BsYXlDb2xvcnM6IGZhbHNlXHJcbiAgICAgICAgICAgfSxcclxuICAgICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgcG9zaXRpb246ICdyaWdodCcsXHJcbiAgICAgICAgICAgICAgIGxhYmVsczoge1xyXG4gICAgICAgICAgICAgICAgICAgZm9udENvbG9yOiAnIzJiMmIyYicsXHJcbiAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTIsXHJcbiAgICAgICAgICAgICAgICAgICAvLyBmb250RmFtaWx5OiAnR290aGFtIEJvb2snLFxyXG4gICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTAsXHJcbiAgICAgICAgICAgICAgICAgICB1c2VQb2ludFN0eWxlOiB0cnVlXHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICB9XHJcbiAgICAgICB9XHJcbiAgIH0pO1xyXG5cclxuICAgLy8gYnJhbmNoZXMgXHJcblxyXG4gICB2YXIgY3R4MyA9ICQoXCIjYnJhbmNoZXNcIik7XHJcblxyXG4gICB2YXIgYnJhbmNoZXNDaGFydCA9IG5ldyBDaGFydChjdHgzLCB7XHJcbiAgICAgICB0eXBlOiAnZG91Z2hudXQnLFxyXG4gICAgICAgZGF0YToge1xyXG4gICAgICAgICAgIGxhYmVsczogc3BlY2lhbGl0aWVzTmFtZXMsXHJcbiAgICAgICAgICAgZGF0YXNldHM6IFt7XHJcbiAgICAgICAgICAgICAgIGxhYmVsOiAnIyBvZiBWb3RlcycsXHJcbiAgICAgICAgICAgICAgIGRhdGE6IHNwZWNpYWxpdGllc1ZhbHVlcyxcclxuICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXHJcbiAgICAgICAgICAgICAgICAgICAnIzAwNEM5NycsXHJcbiAgICAgICAgICAgICAgICAgICAnIzAwODVDQScsXHJcbiAgICAgICAgICAgICAgICAgICAnIzAwQUFFMicsXHJcbiAgICAgICAgICAgICAgICAgICAnIzNDQkVFOScsXHJcbiAgICAgICAgICAgICAgICAgICAnI0M0QzlDRCdcclxuICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDBcclxuICAgICAgICAgICB9XVxyXG4gICAgICAgfSxcclxuICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICBjdXRvdXRQZXJjZW50YWdlOiA3NSxcclxuICAgICAgICAgICB0b29sdGlwczoge1xyXG4gICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRkZGJyxcclxuICAgICAgICAgICAgICAgYm9keUZvbnRDb2xvcjogJyMwMGFhZTInLFxyXG4gICAgICAgICAgICAgICBib2R5Rm9udFNpemU6IDEyLFxyXG4gICAgICAgICAgICAgICBib2R5Rm9udEZhbWlseTogJ0dvdGhhbS1ib2xkJyxcclxuICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuMiknLFxyXG4gICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMSxcclxuICAgICAgICAgICAgICAgZGlzcGxheUNvbG9yczogZmFsc2VcclxuICAgICAgICAgICB9LFxyXG4gICAgICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICBmb250Q29sb3I6ICcjMmIyYjJiJyxcclxuICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxMixcclxuICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgdXNlUG9pbnRTdHlsZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgfVxyXG4gICB9KTtcclxuICAgLy8gbWFpbi1zdHJlYW1cclxuXHJcbiAgIHZhciBjdHg0ID0gJChcIiNtYWluLXN0cmVhbVwiKTtcclxuXHJcbiAgIHZhciBtYWluQ2hhcnQgPSBuZXcgQ2hhcnQoY3R4NCwge1xyXG4gICAgICAgdHlwZTogJ2RvdWdobnV0JyxcclxuICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICBsYWJlbHM6IGJyYW5jaGVzTWFpbk5hbWVzLFxyXG4gICAgICAgICAgIGRhdGFzZXRzOiBbe1xyXG4gICAgICAgICAgICAgICBsYWJlbDogJyMgb2YgVm90ZXMnLFxyXG4gICAgICAgICAgICAgICBkYXRhOiBicmFuY2hlc01haW5WYWx1ZXMsXHJcbiAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogW1xyXG4gICAgICAgICAgICAgICAgICAgJyMwMDRDOTcnLFxyXG4gICAgICAgICAgICAgICAgICAgJyMwMDg1Q0EnLFxyXG4gICAgICAgICAgICAgICAgICAgJyMwMEFBRTInLFxyXG4gICAgICAgICAgICAgICAgICAgJyMzQ0JFRTknLFxyXG4gICAgICAgICAgICAgICAgICAgJyNFRjY1MzAnLFxyXG4gICAgICAgICAgICAgICAgICAgJyNGNTkxM0InLFxyXG4gICAgICAgICAgICAgICAgICAgJyMwMDk2MzknLFxyXG4gICAgICAgICAgICAgICAgICAgJyM3OEJFMjAnLFxyXG4gICAgICAgICAgICAgICAgICAgJyNGRkNDM0QnLFxyXG4gICAgICAgICAgICAgICAgICAgJyNFNzJFMzYnLFxyXG4gICAgICAgICAgICAgICAgICAgJyNDNEM5Q0QnXHJcbiAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAwXHJcbiAgICAgICAgICAgfV1cclxuICAgICAgIH0sXHJcbiAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgY3V0b3V0UGVyY2VudGFnZTogNzUsXHJcbiAgICAgICAgICAgdG9vbHRpcHM6IHtcclxuICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0ZGRicsXHJcbiAgICAgICAgICAgICAgIGJvZHlGb250Q29sb3I6ICcjMDBhYWUyJyxcclxuICAgICAgICAgICAgICAgYm9keUZvbnRTaXplOiAxMixcclxuICAgICAgICAgICAgICAgYm9keUZvbnRGYW1pbHk6ICdHb3RoYW0tYm9sZCcsXHJcbiAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjIpJyxcclxuICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgIGRpc3BsYXlDb2xvcnM6IGZhbHNlXHJcbiAgICAgICAgICAgfSxcclxuICAgICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgcG9zaXRpb246ICdyaWdodCcsXHJcbiAgICAgICAgICAgICAgIGxhYmVsczoge1xyXG4gICAgICAgICAgICAgICAgICAgZm9udENvbG9yOiAnIzJiMmIyYicsXHJcbiAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTIsXHJcbiAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMCxcclxuICAgICAgICAgICAgICAgICAgIHVzZVBvaW50U3R5bGU6IHRydWVcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIH1cclxuICAgICAgIH1cclxuICAgfSk7XHJcblxyXG4gICAvL3NlY29uZGFyeSBzdHJlYW1cclxuICAgXHJcbiAgIHZhciBjdHg1ID0gJChcIiNzZWNvbmRhcnktc3RyZWFtXCIpO1xyXG5cclxuICAgdmFyIHNlY29uZGFyeUNoYXJ0ID0gbmV3IENoYXJ0KGN0eDUsIHtcclxuICAgICAgIHR5cGU6ICdkb3VnaG51dCcsXHJcbiAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgbGFiZWxzOiBicmFuY2hlc1NlY29uZGFyeU5hbWVzLFxyXG4gICAgICAgICAgIGRhdGFzZXRzOiBbe1xyXG4gICAgICAgICAgICAgICBsYWJlbDogJyMgb2YgVm90ZXMnLFxyXG4gICAgICAgICAgICAgICBkYXRhOiBicmFuY2hlc1NlY29uZGFyeVZhbHVlcyxcclxuICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXHJcbiAgICAgICAgICAgICAgICAgICAnIzAwNEM5NycsXHJcbiAgICAgICAgICAgICAgICAgICAnIzAwODVDQScsXHJcbiAgICAgICAgICAgICAgICAgICAnIzAwQUFFMicsXHJcbiAgICAgICAgICAgICAgICAgICAnIzNDQkVFOScsXHJcbiAgICAgICAgICAgICAgICAgICAnI0VGNjUzMCcsXHJcbiAgICAgICAgICAgICAgICAgICAnI0Y1OTEzQicsXHJcbiAgICAgICAgICAgICAgICAgICAnIzAwOTYzOScsXHJcbiAgICAgICAgICAgICAgICAgICAnIzc4QkUyMCcsXHJcbiAgICAgICAgICAgICAgICAgICAnI0ZGQ0MzRCcsXHJcbiAgICAgICAgICAgICAgICAgICAnI0U3MkUzNicsXHJcbiAgICAgICAgICAgICAgICAgICAnI0M0QzlDRCdcclxuICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDBcclxuICAgICAgICAgICB9XVxyXG4gICAgICAgfSxcclxuICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICBjdXRvdXRQZXJjZW50YWdlOiA3NSxcclxuICAgICAgICAgICB0b29sdGlwczoge1xyXG4gICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRkZGJyxcclxuICAgICAgICAgICAgICAgYm9keUZvbnRDb2xvcjogJyMwMGFhZTInLFxyXG4gICAgICAgICAgICAgICBib2R5Rm9udFNpemU6IDEyLFxyXG4gICAgICAgICAgICAgICBib2R5Rm9udEZhbWlseTogJ0dvdGhhbS1ib2xkJyxcclxuICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuMiknLFxyXG4gICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMSxcclxuICAgICAgICAgICAgICAgZGlzcGxheUNvbG9yczogZmFsc2VcclxuICAgICAgICAgICB9LFxyXG4gICAgICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICBmb250Q29sb3I6ICcjMmIyYjJiJyxcclxuICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxMixcclxuICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgdXNlUG9pbnRTdHlsZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgfVxyXG4gICB9KTtcclxufVxyXG4gICBcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
