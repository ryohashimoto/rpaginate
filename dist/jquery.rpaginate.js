(function($) {
  $.fn.rpaginate = function(opts) {
    this.each(function() {
      var name = $(this).attr('id');
      var self = $('#' + name);
      if (opts !== false) {
        opts = $.extend($.fn.rpaginate.defaults, opts);
        var numberOfItems = self.children().size();
        var numberOfPages = Math.ceil(numberOfItems/opts.showPerPage);

        $('#' + name + 'CurrentPage').val(0);
        $('#' + name + 'ShowPerPage').val(opts.showPerPage);

        // var navContent = '<a class="prev-' + name + '-list" href="#!/books/prev_page">&lt;</a>&nbsp;';
        var navContent = '';
        var currentLink = 1;
        while (numberOfPages+1 > currentLink) {
          navContent += '<a class="' + name + '-list" href="#!/books/pages/' + currentLink + '">' + currentLink + '</a>&nbsp;';
          currentLink += 1;
        }
        // navContent += '<a class="next-' + name + '-list" href="#!/books/next_page">&gt;</a>';

        $('#' + name + 'Navigation').html(navContent);
        $('#' + name + 'Navigation .' + name + '-list:first').addClass(name + '-active-page');
        self.children().hide();
        self.children().slice(0, opts.showPerPage).fadeIn('slow');
      }
    });
    return self;
  };

  $.fn.rpaginate.defaults = {
    'showPerPage': 5
  };

  $.fn.rpagenav = {
    prev: function(name) {
      console.log('prev');
      var newPage = parseInt($('#' + name + '-current-page').val());
      if ($('.' + name + '-active-page').prev('.' + name + '-list').length == true) {
        $.fn.rpagenav.goTo(name, newPage);
      }
    },
    next: function(name) {
      console.log('next');
      var newPage = parseInt($('#' + name + '-current-page').val()) + 1;
      if ($('.' + name + '-active-page').next('.' + name + '_list').length == true) {
        $.fn.rpagenav.goTo(name, newPage);
      }
    },
    goTo: function(name, num) {
      console.log('goTo');
      var self = $('#' + name);
      var showPerPage = parseInt($('#' + name + 'ShowPerPage').val());
      var startFrom = (num-1) * showPerPage;
      var endOn = startFrom + showPerPage;
      $('#' + name).children().hide().slice(startFrom, endOn).fadeIn('slow');
      var navs = $('.' + name + '-list');
      $.each(navs, function() {
        if (this.text == num) {
          $(this).addClass(name + '-active-page');
          $(this).siblings('.' + name + '-active-page').removeClass(name + '-active-page');
        }
      });
      $.data($('#' + name), 'currentPage', num);
    },
  }
})(jQuery);
