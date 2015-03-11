/**
 * Created by Merry on 11.03.2015.
 */
function HideOrOpenPanel(id_panel){
    var panel=document.getElementById(id_panel);
    var mainId = document.getElementById(element_id);

    if (panel.style.display != "block") {
        panel.style.display = "block"; //Показываем элемент
    }
    else {
        panel.style.display = "none";
    } //Скрываем элемент




}