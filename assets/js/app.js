"use strict";

$( document ).ready(function() {
    
    // filter dropdown
    $('.list__filter').click(function(){

        let dropdown = $('.filter__dropdown');
        let filter = $('.list__filter');

        dropdown.toggleClass("filter__dropdown--active");
        filter.toggleClass("list__filter--active");
        
    });

    // modals

    let briefing = $('#briefing'),
        overlay = $('.profile__modals-overlay'),
        modal = $('.profile__modals'),
        cross = $('.profile__modal-cross'),
        wrapper = $('.wrapper');

    briefing.click(function(){

        overlay.css("display", "block");
        modal.css("display", "block");
        wrapper.addClass('blur');

    });

    overlay.click(function(){

        $(this).css("display", "none");
        modal.css("display", "none");
        wrapper.removeClass('blur');

    });

    cross.click(function(){

        overlay.css("display", "none");
        modal.css("display", "none");
        wrapper.removeClass('blur');

    });

});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4kKCBkb2N1bWVudCApLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgXHJcbiAgICAvLyBmaWx0ZXIgZHJvcGRvd25cclxuICAgICQoJy5saXN0X19maWx0ZXInKS5jbGljayhmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICBsZXQgZHJvcGRvd24gPSAkKCcuZmlsdGVyX19kcm9wZG93bicpO1xyXG4gICAgICAgIGxldCBmaWx0ZXIgPSAkKCcubGlzdF9fZmlsdGVyJyk7XHJcblxyXG4gICAgICAgIGRyb3Bkb3duLnRvZ2dsZUNsYXNzKFwiZmlsdGVyX19kcm9wZG93bi0tYWN0aXZlXCIpO1xyXG4gICAgICAgIGZpbHRlci50b2dnbGVDbGFzcyhcImxpc3RfX2ZpbHRlci0tYWN0aXZlXCIpO1xyXG4gICAgICAgIFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gbW9kYWxzXHJcblxyXG4gICAgbGV0IGJyaWVmaW5nID0gJCgnI2JyaWVmaW5nJyksXHJcbiAgICAgICAgb3ZlcmxheSA9ICQoJy5wcm9maWxlX19tb2RhbHMtb3ZlcmxheScpLFxyXG4gICAgICAgIG1vZGFsID0gJCgnLnByb2ZpbGVfX21vZGFscycpLFxyXG4gICAgICAgIGNyb3NzID0gJCgnLnByb2ZpbGVfX21vZGFsLWNyb3NzJyksXHJcbiAgICAgICAgd3JhcHBlciA9ICQoJy53cmFwcGVyJyk7XHJcblxyXG4gICAgYnJpZWZpbmcuY2xpY2soZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgb3ZlcmxheS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICAgICAgbW9kYWwuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgICAgIHdyYXBwZXIuYWRkQ2xhc3MoJ2JsdXInKTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICBvdmVybGF5LmNsaWNrKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgICQodGhpcykuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICAgICAgbW9kYWwuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICAgICAgd3JhcHBlci5yZW1vdmVDbGFzcygnYmx1cicpO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIGNyb3NzLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIG92ZXJsYXkuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICAgICAgbW9kYWwuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICAgICAgd3JhcHBlci5yZW1vdmVDbGFzcygnYmx1cicpO1xyXG5cclxuICAgIH0pO1xyXG5cclxufSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
