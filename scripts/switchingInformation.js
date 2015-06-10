/**
 * Created by Merry on 25.03.2015.
 */
var currentLanguage;


function switchInformation(item) {
    //item - номер из списка
    //0-resume
    //1-autobiography
    //..etc
    CleanContent();
    switch (item) {
        case 0:
            switch (currentLanguage) {
                case 0:
                    $("#contentText").load("language/ru/ru_resume.html #Resume_russian > *");
                    setTopText(0);
                    break;
                case 2:
                    $("#contentText").load("language/en/en_resume.html #Resume_english > *");
                    setTopText(2);
                    break;
                case 1:
                    $("#contentText").load("language/uk/uk_resume.html #Resume_uk> *");
                    setTopText(1);
                    break;
            }//switch
            break;//case 0
        case 1:
            switch (currentLanguage) {
                case 0:
                    $("#contentText").load("language/ru/ru_bio.html #AboutMyself > *");
                    setTopText(0);
                    break;
                case 1:
                    $("#contentText").load("language/uk/uk_bio.html #AboutMyself > *");
                    setTopText(1);
                    break;
            }//switch
            break;//case 1

        case 2:
            switch (currentLanguage) {
                case 0:
                    $("#contentText").load("language/ru/ru_abstract.html #abstract > *");
                    setTopText(0);
                    break;
                case 1:
                    $("#contentText").load("language/uk/uk_abstract.html #abstract > *");
                    setTopText(1);
                    break;
                case 2:
                    $("#contentText").load("language/en/en_adstract.html #en-abstract > *");
                    setTopText(2);
                    break;
            }//switch
            break;//case 2
        case 3:
            $("#contentText").load("language/ru/ru_library.html #library > *");
            setTopText(0);
            break;
        case 4:
            $("#contentText").load("language/ru/ru_reference.html #refer > *");
            setTopText(0);
            break;
        case 5:
            $("#contentText").load("language/ru/ru_report.html .GlobalReport > *");
            setTopText(0);
            break;//case 5
    }
}//switchInformation

function CleanContent() {
    $('#contentText').empty();
}

function setTopText(numerLanguge) {
    switch (numerLanguge) {
        case 0:
            $("#topTextPanel").load("language/ru/ru_topInformation.html #top_russian> *");
            break;
        case 1:
            $("#topTextPanel").load("language/uk/uk_topInformation.html #top_ukrain> *");
            break;
        case 2:
            $("#topTextPanel").load("language/en/en_topInformation.html #top_english> *");
            break;
    }
}

function setCurrentLanguage(numerLanguge) {

    switch (numerLanguge) {
        case 0:
            currentLanguage = 0;
            $("#en_left_panel").css('display', 'none');
            $('#ru_left_panel').css('display', 'block');
            $('#uk_left_panel').css('display', 'none');
            $("#contentText").load("language/ru/ru_resume.html #Resume_russian > *");
            setTopText(0);
            break;
        case 1:
            currentLanguage = 1;
            $("#en_left_panel").css('display', 'none');
            $('#ru_left_panel').css('display', 'none');
            $('#uk_left_panel').css('display', 'block');
            $("#contentText").load("language/uk/uk_resume.html #Resume_uk> *");
            setTopText(1);
            ;
            break;
        case 2:
        {
            currentLanguage = 2;
            $("#en_left_panel").show();
            $('#ru_left_panel').css('display', 'none');
            $('#uk_left_panel').css('display', 'none');
            $("#contentText").load("language/en/en_resume.html #Resume_english > *");
            setTopText(2);
            break;
        }
    }

}
