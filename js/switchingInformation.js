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
                    $("#contentText").load("res_ru/index.html #Resume_russian > *");
                    setTopText(0);
                    break;
                case 2:
                    $("#contentText").load("indexe.html #Resume_english > *");
                    setTopText(2);
                    break;
                case 1:
                    $("#contentText").load("indexu.html #Resume_uk> *");
                    setTopText(1);
                    break;
            }//switch
            break;//case 0
        case 1:
            switch (currentLanguage) {
                case 0:
                    $("#contentText").load("bio/index.html #AboutMyself > *");
                    setTopText(0);
                    break;
                case 1:
                    $("#contentText").load("bio/indexu.html #AboutMyself > *");
                    setTopText(1);
                    break;
            }//switch
            break;//case 1

        case 2:
            switch (currentLanguage) {
                case 0:
                    $("#contentText").load("diss/index.html #abstract > *");
                    setTopText(0);
                    break;
                case 1:
                    $("#contentText").load("diss/indexu.html #abstract > *");
                    setTopText(1);
                    break;
                case 2:
                    $("#contentText").load("diss/indexe.html #en-abstract > *");
                    setTopText(2);
                    break;
            }//switch
            break;//case 2
        case 3:
            $("#contentText").load("library/index.html #library > *");
            setTopText(0);
            break;
        case 4:
            $("#contentText").load("links/index.html #refer > *");
            setTopText(0);
            break;
        case 5:
            $("#contentText").load("report/index.html .GlobalReport > *");
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
            $("#topTextPanel").load("topInf/index.html #top_russian> *");
            break;
        case 1:
            $("#topTextPanel").load("topInf/indexu.html #top_ukrain> *");
            break;
        case 2:
            $("#topTextPanel").load("topInf/indexe.html #top_english> *");
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
            $("#contentText").load("res_ru/index.html #Resume_russian > *");
            setTopText(0);
            break;
        case 1:
            currentLanguage = 1;
            $("#en_left_panel").css('display', 'none');
            $('#ru_left_panel').css('display', 'none');
            $('#uk_left_panel').css('display', 'block');
            $("#contentText").load("indexu.html #Resume_uk> *");
            setTopText(1);

            break;
        case 2:
        {
            currentLanguage = 2;
            $("#en_left_panel").show();
            $('#ru_left_panel').css('display', 'none');
            $('#uk_left_panel').css('display', 'none');
            $("#contentText").load("indexe.html #Resume_english > *");
            setTopText(2);
            break;
        }
    }

}
