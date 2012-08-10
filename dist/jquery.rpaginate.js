(function($) {
  $.fn.rpaginate = function(opts) {
    this.each(function() {
      var name = $(this).attr('id');
      var self = $('#' + name);
      if (opts !== false) {
        opts = $.extend($.fn.rpaginate.defaults, opts);
        var numberOfItems = self.children().size();
        var numberOfPages = Math.ceil(numberOfItems/opts.showPerPage);

        $('#' + name + 'CurrentPage').val(1);
        $('#' + name + 'ShowPerPage').val(opts.showPerPage);

        var navContent = '<a class="prev-' + name + '-list" href="">&lt;</a>&nbsp;';
        var currentLink = 1;
        while (numberOfPages+1 > currentLink) {
          navContent += '<a class="' + name + '-list" href="#!/' + name + '/pages/' + currentLink + '">' + currentLink + '</a>&nbsp;';
          currentLink += 1;
        }
        navContent += '<a class="next-' + name + '-list" href="">&gt;</a>';

        $('#' + name + 'Navigation').html(navContent);
        $('#' + name + 'Navigation .' + name + '-list:first').addClass(name + '-active-page');

        $('a.prev-' + name + '-list').live('click', (function() {
          $.fn.rpagenav.prev(name);
          return false;
        }));
        $('a.next-' + name + '-list').live('click', (function() {
          $.fn.rpagenav.next(name);
          return false;
        }));
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
      var newPage = parseInt($('#' + name + 'CurrentPage').val()) - 1;
      var showPerPage = parseInt($('#' + name + 'ShowPerPage').val());
      console.log(newPage);
      if (newPage > 0 && newPage <= $('a.'+ name + '-list').size()) {
        hasher.setHash('/' + name + '/pages/' + newPage);
      }
    },
    next: function(name) {
      console.log('next');
      var newPage = parseInt($('#' + name + 'CurrentPage').val()) + 1;
      var showPerPage = parseInt($('#' + name + 'ShowPerPage').val());
      console.log(newPage);
      if (newPage > 0 && newPage <= $('a.'+ name + '-list').size()) {
        hasher.setHash('/' + name + '/pages/' + newPage);
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
      $('#' + name + 'CurrentPage').val(num);
    },
  }
})(jQuery);
