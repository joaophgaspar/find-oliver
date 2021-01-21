$(document).ready(function() {

    // random image selection
    var size = images.length
    var x = Math.floor(size * Math.random())

    $('#rotation_img').attr('src', "images/emojis/" + images[x]);

    // detect and change language
    var userLang = navigator.language || navigator.userLanguage;
    if (userLang.split('-')[0]) {
        changeTextLanguage(userLang.split('-')[0])
    }

    $(".flag").on("click", function() {
        changeTextLanguage($(this).attr("lang"))
        $(this).hide()
    });

    function changeTextLanguage(language) {
        if (typeof texts[language] === 'undefined') {
            $("#h1_title").html(texts["en"].title)
            $("#p_info").html(texts["en"].description)
            $(".flag[lang='pt']").show()
        } else {
            $("#h1_title").html(texts[language].title)
            $("#p_info").html(texts[language].description)

            if (language == 'en')
                $(".flag[lang='pt']").show()
            else
                $(".flag[lang='en']").show()
        }
    }
});