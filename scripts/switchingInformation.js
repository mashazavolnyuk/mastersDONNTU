/**
 * Created by Merry on 25.03.2015.
 */
var currentLanguage;
function switchInformation(item){

    switch (item){
        case 0:
          if(currentLanguage==0)
              $("#contentText").load("language/ru/ru_resume.html #Resume_russian > *");
            if(currentLanguage==2)
                $("#contentText").load("language/en/en_resume.html #Resume_english > *");
            break;
        case 1:
        case 2:



    }

}

function getCurrentLanguage(){



}

function setCurrentLanguage(numerLanguge){

    switch(numer){
        case 0:
            currentLanguage=0;
            break;
        case 1:
            currentLanguage=1;
            break;
        case 2:
            currentLanguage=2;
            break;

    }

}
