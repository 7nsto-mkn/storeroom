$(function() {
        $('#sort li').on('click', function() {
            var $this = $(this),
            $grid = $('#itemList');
            $('#sort .active').removeClass('active');
            $this.addClass('active');
            $grid.shuffle($this.data('group'));
        });
        
        if(document.URL.match("#red")) {
        $('#itemList').shuffle({
            group: 'red'
        });
    } else if(document.URL.match("#blue")) {
        $('#itemList').shuffle({
            group: 'blue'
        });
    }
    });