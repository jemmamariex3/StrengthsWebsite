
// You can get your username and user key from your Developer Portal
// You must have already created and compiled a bot before you can talk to it
var pb = new Pandorabot("aiaas.pandorabots.com", '1409614605295', 'cinthy', '96490ff0b6df05aace561df0f1c063aa');
function doTalk() {
    var input = document.getElementById("yousay").value;
    document.getElementById("yousay").value = "";
    pb.talk(input, function (data) {
        var response = data["responses"];
        // console.log(response[0]);

        // this appends the bots responses to the chat window
        var html = ' <div class="row msg_container base_receive">' +
            '<div class="col-md-2 col-xs-2 avatar">' +
            '<img src="img/Cinthy.svg" class=" img-responsive ">' +
            ' </div>' +
            '<div class="col-xs-10 col-md-10 cinthyRes">' +
            ' <div class="messages msg_receive">' +
            `<p>${response[0]}</p>` +
            '</div>' +
            '</div>' +
            '</div>';

        $('#chat_content').append(html);

        var objDiv = document.getElementById('chat_content');
        console.log(objDiv.scrollHeight)
        objDiv.scrollTop = objDiv.scrollHeight;
    });
}

let slide1 = false;
let slide2 = false;

$(document).ready(function () {
    $('.panel-footer').hide();
});

$(document).on('click', '.panel-heading span.icon_minim', function (e) {
    var $this = $(this);
    if (!$this.hasClass('panel-collapsed')) {
        $this.parents('.panel').find('.panel-body').slideUp();
        $this.addClass('panel-collapsed');
        console.log('first if');
        slide1 = true;
    } else {
        $('.panel-footer').slideDown(); 
        $this.parents('.panel').find('.panel-body').slideDown();
        $this.removeClass('panel-collapsed');
        console.log('testing');
        slide2 = true;
    }

    //minimize the footer chatbox
    if (slide1 && slide2) {
        $('.panel-footer').slideUp();
        slide1 = false;
        slide2 = false;
    }
});

$(document).on('focus', '.panel-footer input.chat_input', function (e) {
    var $this = $(this);
    if ($('#minim_chat_window').hasClass('panel-collapsed')) {
        $this.parents('.panel').find('.panel-body').slideDown();
        $('#minim_chat_window').removeClass('panel-collapsed');
        $('#minim_chat_window').removeClass('glyphicon-plus').addClass('glyphicon-minus');
        console.log('im here');
    }
});

$(document).on('click', '#btn-chat', function (e) {
    doTalk();
});