(function($) {
    var $window = $(window),
        $body = $('body'),
        $nav = $('#nav');

    // Breakpoints
    breakpoints({
        wide:      [ '961px',  '1880px' ],
        normal:    [ '961px',  '1620px' ],
        narrow:    [ '961px',  '1320px' ],
        narrower:  [ '737px',  '960px'  ],
        mobile:    [ null,     '736px'  ]
    });

    // Initial animations on page load
    $window.on('load', function() {
        window.setTimeout(function() {
            $body.removeClass('is-preload');
            $('.animated-element').addClass('fadeIn'); // Example animation on load
        }, 100);
    });

    // Nav interaction and smooth scroll
    var $nav_a = $nav.find('a');

    $nav_a
        .addClass('scrolly')
        .on('click', function(e) {
            var $this = $(this);

            // External link? Bail.
            if ($this.attr('href').charAt(0) != '#')
                return;

            // Prevent default.
            e.preventDefault();

            // Deactivate all links.
            $nav_a.removeClass('active');

            // Activate link and lock it.
            $this
                .addClass('active')
                .addClass('active-locked');

            // Smooth scroll
            $('html, body').animate({
                scrollTop: $($this.attr('href')).offset().top
            }, 1000, 'swing', function() {
                // Remove active-locked class after scroll
                $this.removeClass('active-locked');
            });
        });

    // Scrollex animations
    $(document).ready(function() {
        $('.section').each(function() {
            var $this = $(this);

            $this.scrollex({
                mode: 'middle',
                top: '-10vh',
                bottom: '-10vh',
                initialize: function() {
                    $this.addClass('inactive');
                },
                enter: function() {
                    $this.removeClass('inactive');
                    $this.find('.animated-element').addClass('fadeIn');
                    $this.find('.bounce-element').addClass('bounceIn');
                }
            });
        });
    });

    // Header (narrower + mobile)
    $('<div id="headerToggle">' +
        '<a href="#header" class="toggle"></a>' +
      '</div>')
        .appendTo($body);

    $('#header')
        .panel({
            delay: 500,
            hideOnClick: true,
            hideOnSwipe: true,
            resetScroll: true,
            resetForms: true,
            side: 'left',
            target: $body,
            visibleClass: 'header-visible'
        });

})(jQuery);

