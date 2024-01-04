(function ($) {
  $.fn.guide = function (options) {
    // Iterate over each selected element
    var defaults = {
      titleList:[],
      data: [],
    };
    let setting = $.extend(defaults, options || {});
    this.append(`
        <div class="container">
          <div class="row">
            <div class="col-md-4 col-12">
              <div class="title-column">
                <div class="navigate-title">Navigation</div>
                <div class="title-list" id="title-list"></div>
              </div>
            </div>
            <div class="col-md-8 col-12 mt-5 mt-md-0">
              <div>
                <div class="item-intro">
                    <span class="title-name" id = "title-name"></span>
                    <span class="basic-intro" id = "basic-intro"></span>
                </div>
                <div class="detailed-list" id = "detailed-list">
                </div>
              </div>
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
                <div class="d-flex">
                  <img class="description-img" src="./assets/description.svg">
                  <span class="link-title">${innerValue.itemHead}</span>
                </div>
                <div class="link-tail">
                <i class="fa-regular fa-clock"></i>
                  <span class="time-spent">${innerValue.itemTime}</span>
                  <i class="fa-solid fa-chevron-right"></i>
                </div>
            </div>
          `);
            } else {
              $(`#detailed-link-list-${index}`).append(`
            <div class="link-info"  id="link-info-${index}-${innerIndex}">
                <div>
                  <img class="description-img" src="./assets/description.svg">
                  <span class="link-title">${innerValue.itemHead}</span>
                </div>
                <div class="link-tail">
               <i class="fa-regular fa-clock"></i>
                  <span class="time-spent">${innerValue.itemTime}</span>
                  <i class="fa-solid fa-chevron-right"></i>
                </div>
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
