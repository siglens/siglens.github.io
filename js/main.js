
'use strict';


$(document).ready(() => {
    $('#ns-form-btn').on('click', newsletterFormHandler);
 
    // Copy to clipboard functionality
  $('#copyBtn').click(function() {
    var codeText = $('.code').text().trim();
    navigator.clipboard.writeText(codeText)

    $('#copyBtn').tooltip({
        title: 'Copied!',
        trigger: 'manual'
    }).tooltip('show');
    setTimeout(function() {
        $('#copyBtn').tooltip('hide');
    }, 1000);
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