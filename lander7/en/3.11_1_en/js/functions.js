$(document).ready(function() {
        $('link[href*="favicon.ico"]').attr('href',$('.favicon').attr('src'));
        /*step switch*/
        var $btnNext = $('.step-btn');
        var currentStep = 0;
        var $step = $('.step-item');
        var totalStep = $step.length;
        $btnNext.not('.submit-btn').on('click', function() {
                currentStep++;
                $step.hide().eq(currentStep).fadeIn();
            }
        );
        /*select checkbox*/
        $('.checkbox-item').on('click', function() {
                $(this).toggleClass('checked tr-selected');
            }
        );
        var $loaderOverlay = $('.loader-overlay');
        $('.popup-btn').on('click', function() {
                $(this).closest('.popup-block').hide();
                $loaderOverlay.fadeIn();
                setTimeout(function() {
                        $loaderOverlay.fadeOut();
                        $('.step-block').fadeIn();
                    }
                    , 2500);
            }
        );
    }
);
