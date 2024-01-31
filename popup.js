var cusid_ele = document.getElementsByClassName('planner-course-lesson__description__cards-container__activity-cards');
for (var i = 0; i < cusid_ele.length; ++i) {
    var item = cusid_ele[i];  
    chrome.runtime.sendMessage({value: String(item)}, null);
}
