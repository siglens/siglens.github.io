(function ($) {
  $.fn.question = function (options) {
    // Iterate over each selected element
    var defaults = {
      data: [],
    };
    let setting = $.extend(defaults, options || {});
    this.append(
      `<div class="question-container" id="question-container"></div>`
    );
    setting.data.forEach((value, index) => {
      $(`#question-container`).append(`
      <div class="ques-box" id="ques-box-${index}">
        <div class="question-item" id = "question-item-${index}" name="${index}">${value.title}</div>
        <div class="ques-intro">${value.introduce}</div>
        <div class="ques-keywords-list" id="ques-keywords-list-${index}"></div>
        <div class="bottom-element">
            <span class="question-text">Questions</span>
            <span class="company-text"> · Siglens</span>
            <span class="update-text"> · Updated on ${value.updateDate}</span>
        </div>
      <div>  
    `);
        value.keywords.forEach((innerValue, innerIndex) => {
            $(`#ques-keywords-list-${index}`).append(`
                <div class="keyword-box">${innerValue}</div>
            `);
        });
        $(`#ques-box-${index}`).on("click", function () {
          window.location.href = value.redirectPage;
        });
    });
    return this;
  };
})(jQuery);
