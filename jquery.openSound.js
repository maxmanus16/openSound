/**
 * @author Fatih Soysal <fatihsoysal@outlook.com>
 * Copyright (c) 2011 Fatih Soysal - released under MIT License
 * Usage: $.openSound('http://example.org/sound')
 * $.openSound('http://example.org/sound.wav')
 * $.openSound('/attachments/sounds/1234.wav')
 * $.openSound('/attachments/sounds/1234.mp3')
 * $.stopSound();
**/


(function ($) {
    $.extend({
        openSound: function () {
            return $(
                   '<audio class="sound-player" autoplay="autoplay" style="display:none;">'
                     + '<source src="' + arguments[0] + '" />'
                     + '<embed src="' + arguments[0] + '" hidden="true" autostart="true" loop="false"/>'
                   + '</audio>'
                 ).appendTo('body');
        },
        stopSound: function () {
            $(".sound-player").remove();
        }
    });
})(jQuery);