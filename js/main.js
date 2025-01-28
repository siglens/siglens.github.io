
'use strict';


$(document).ready(() => {
    $("#copyBtn").on("click", copyInstallCmd);
    $("#copyCmdBtn").on("click", copyGenerateTextCmd);

    const currentUrl = window.location.href;
    if (currentUrl.includes("guides.html")) {
      renderGuidesList();
    }
    // else if (currentUrl.includes("questions.html")) {
    //   renderQuestionsList();
    // }
});
function copyInstallCmd() {
  let text = $("#install-text").text();
  copyToClipboard(text);
  var checkMark = document.getElementById("check-mark");
  checkMark.classList.remove("show");
  checkMark.classList.add("show");
  checkMark.addEventListener(
    "transitionend",
    function () {
      checkMark.classList.remove("show");
    },
    { once: true }
  );
  var disappearingImage = document.getElementById("copyBtn");
  disappearingImage.classList.add("disappear");
  setTimeout(function () {
    disappearingImage.classList.remove("disappear");
  }, 1000);
}
function copyGenerateTextCmd() {
  let text = $("#cmd-box").text();
  copyToClipboard(text);
  var checkMark = document.getElementById("check-mark-data");
  checkMark.classList.remove("show");
  checkMark.classList.add("show");
  checkMark.addEventListener(
    "transitionend",
    function () {
      checkMark.classList.remove("show");
    },
    { once: true }
  );
  var disappearingImage = document.getElementById("copyCmdBtn");
  disappearingImage.classList.add("disappear");
  setTimeout(function () {
    disappearingImage.classList.remove("disappear");
  }, 1000);
}
function copyToClipboard(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

function redirectToPage(url) {
  window.location.href = url;
}

function renderGuidesList(){
  let titleList = ["ElasticSearch", "Logs"];
  let guidesData = [
    {
      title: "ElasticSearch",
      detailedList: [
        {
          title: "",
          linkList: [
            {
              itemHead: "Elasticsearch Index and Replica Management",
              itemTime: "6 min",
              redirectPage: "../guides/elasticSearch.html",
            }
          ],
        }
      ],
    },
    {
      title: "2222",
      detailedList: [
        {
          title: "",
          linkList: [
            {
              itemHead: "Logging Frameworks in Python",
              itemTime: "6 min",
              redirectPage: "../guides/logging-frameworks-python.html",

            },
            {
              itemHead: "Logging Frameworks in Go",
              itemTime: "4 min",
              redirectPage: "../guides/logging-frameworks-go.html",
            },
            {
              itemHead: "Logging Frameworks in Node.js",
              itemTime: "4 min",
              redirectPage: "../guides/logging-frameworks-nodeJs.html",
            },
            {
              itemHead: "Logging Frameworks in Java",
              itemTime: "6 min",
              redirectPage: "../guides/logging-frameworks-java.html",

            },
            {
              itemHead: "Logging Frameworks in .Net",
              itemTime: "6 min",
              redirectPage: "../guides/logging-frameworks-dotNet.html",

            },
          ],
        }
      ],
    },
  ];
  $("#guide-link-list").guide({
    titleList: titleList,
    data: guidesData,
  });
}

function renderQuestionsList(){
  let questionsData = [
    {
      title: "How to WhiteList Sigscalr IPs",
      introduce:
        "The official documentation provides list of all used Better Stack IPs as well as the User Agent. They are split into regions for easier navigation.",
      keywords: ["Sigscalr IP", "Logging", "Python"],
      updateDate: "October 10, 2010",
      redirectPage: "guides.html",
    }
  ];
  $("#question-list").question({
    data: questionsData,
});
}