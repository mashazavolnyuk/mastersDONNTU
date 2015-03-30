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
                    break;
                case 2:
                   $("#contentText").load("language/en/en_resume.html #Resume_english > *");
                    break;
                case 1:
                    break;
            }//switch
            break;//case 0

        case 1:
            switch (currentLanguage) {
                case 0:
                    $("#contentText").load("language/ru/ru_bio.html #AboutMyself > *");

                    break;
                case 2:
                    $("#contentText").load("language/en/en_resume.html #Resume_english > *");
                    break;
                case 1:
                    break;
            }//switch
            break;//case 2

        case 2:
            break;//case 1


    }
    $('#contentText').update();

}//switchInformation
function CleanContent() {

    $('#contentText').empty();
}
function setCurrentLanguage(numerLanguge) {

    switch (numerLanguge) {
        case 0:
            currentLanguage = 0;

            break;
        case 1:
            currentLanguage = 1;

            break;
        case 2:
            currentLanguage = 2;

            break;

    }

}
