
'use strict';


$(document).ready(() => {
    $('#ns-form-btn').on('click', newsletterFormHandler);
    let titleList = ["Incident Management", "2222"];
    let data = [
      {
        title: "Incident Management",
        basicIntro:
          "Everything about incidents, on-call scheduling, alerting, status pages, MTTRs, SLAs and more.",
        detailedList: [
          {
            title: "Incident Response and On-Call",
            linkList: [
              {
                itemHead: "title1",
                itemTime: "6 min",
                redirectPage: "questions.html",
              },
              {
                itemHead: "title2",
                itemTime: "4 min",
                redirectPage: "",
              },
            ],
          },
          {
            title: "Incident Communication",
            linkList: [
              {
                itemHead: "bbbbb title1",
                itemTime: "6 min",
                redirectPage: "",
              },
              {
                itemHead: "bbbbb title2",
                itemTime: "4 min",
                redirectPage: "",
              },
            ],
          },
        ],
      },
      {
        title: "2222",
        basicIntro: "Basic intro",
        detailedList: [
          {
            title: "Basic intro ccccc",
            linkList: [
              {
                itemHead: "title1",
                itemTime: "6 min",
              },
              {
                itemHead: "title2",
                itemTime: "4 min",
              },
            ],
          },
          {
            title: "Basic intro ddddd",
            linkList: [
              {
                itemHead: "bbbbb title1",
                itemTime: "6 min",
              },
              {
                itemHead: "bbbbb title2",
                itemTime: "4 min",
              },
            ],
          },
        ],
      },
    ];
    $("#guide-link-list").guide({
      titleList: titleList,
      data: data,
    });
});

function newsletterFormHandler(evt) {
    evt.preventDefault();
    let email = $('#ns-email').val();
    let d = new Date();
    let timestamp = d.getTime();
    let form_id = "85ae463f-2bdb-478f-983d-17bdb1d91e97";
    let portal_id = 22020892;


    if (email.length > 0) {
        let data = {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            "submittedAt": timestamp,
            "fields": [
                {
                    "name": "email",
                    "value": email
                },
            ],
            
            "context": {
                "pageUri": window.location.href,
                "pageName": "Subscribe to Newsletter Page"
            },
        };

        $.ajax({
            url: 'https://api.hsforms.com/submissions/v3/integration/submit/'+ portal_id + '/' + form_id,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            dataType: 'json',
            data: JSON.stringify(data),
            success: function (response) {
                console.log("Newsletter form POST SUCCESS");
                $('#newsletter-form').trigger("reset");
                alert("Thanks for subscribing to our newsletter.");
            },
            failure: function (response) {
                console.log("newsletter form : POST failed ",response);
                alert('Error, something went wrong.');
            }
        });
    } else {
        alert( "Please enter valid email.");
    }
}

function redirectToPage(url) {
    window.location.href = url;
  }