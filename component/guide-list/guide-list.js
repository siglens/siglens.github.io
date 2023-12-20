(function ($) {
  $.fn.guide = function (options) {
    // Iterate over each selected element
    var defaults = {
      titleList:[],
      data: [],
    };
    let setting = $.extend(defaults, options || {});
    this.append(`
        <div class="container-guide">
          <div class="title-column">
            <div class="navigate-title">Navigation</div>
            <div class="title-list" id="title-list"></div>
          </div>
          <div class="right-block">
            <div class="item-intro">
                <span class="title-name" id = "title-name"></span>
                <span class="basic-intro" id = "basic-intro"></span>
            </div>
            <div class="detailed-list" id = "detailed-list">
            </div>
          </div>
        </div>
    `);
    setting.titleList.forEach((value, index) => {
      $(`#title-list`).append(`
        <div class="title-item" id = "title-item-${index}" name="${index}">${value}</div>
    `);
    });
    $(`#title-list`).on("click", ".title-item", function () {
      showInfo(this);
    });
    function showInfo(that){
      $(`.title-item`).removeClass("active");
      $(that).addClass("active");
      let curIndex = parseInt($(that).attr("name"));
      let curInfo = setting.data[curIndex];
      $(`#title-name`).text($(that).text());
      $(`#basic-intro`).text(curInfo.basicIntro);
      $(`#detailed-list`).html("");
      curInfo.detailedList.forEach((value, index) => {
        $(`#detailed-list`).append(`
          <div class="detailed-box">
            <div class="detailed-item-title">${value.title}</div>
            <div class="detailed-link-list" id="detailed-link-list-${index}"></div>
          </div>
        `);
        curInfo.detailedList[index].linkList.forEach(
          (innerValue, innerIndex) => {
            if (innerIndex == curInfo.detailedList[index].linkList.length - 1) {
              console.log("innerIndex=", innerIndex);
              console.log("cone in");
              $(`#detailed-link-list-${index}`).append(`
            <div class="link-info remove-line" id="link-info-${index}-${innerIndex}">
                <img class="description-img" src="./assets/description.svg">
                <span class="link-title">${innerValue.itemHead}</span>
                <div class="link-tail">
                  <img class="time-img" src="./assets/schedule.svg">
                  <span class="time-spent">${innerValue.itemTime}</span>
                </div>
                <img src="./assets/chevron.svg" class="arrow">
            </div>
          `);
            } else {
              $(`#detailed-link-list-${index}`).append(`
            <div class="link-info"  id="link-info-${index}-${innerIndex}">
                <img class="description-img" src="./assets/description.svg">
                <span class="link-title">${innerValue.itemHead}</span>
                <div class="link-tail">
                  <img class="time-img" src="./assets/schedule.svg">
                  <span class="time-spent">${innerValue.itemTime}</span>
                </div>
                <img src="./assets/chevron.svg" class="arrow">
            </div>
          `);
            }
            $(`#link-info-${index}-${innerIndex}`).on("click", function () {
              window.location.href = innerValue.redirectPage;
            });
          }
        );
      });
    }
    $("#title-item-0").trigger("click");
    return this;
  };
})(jQuery);
