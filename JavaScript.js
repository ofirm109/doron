$('#google_form_submit').submit(function (e) {
    e.preventDefault();
    var formData = $('#google_form_submit').serialize();
    $.ajax({
        type: 'POST',
        url: 'https://script.google.com/macros/s/AKfycbzBvgWZZUgFbxCAlhPG4429wth61Rm7kymPaui3d5328UHHOiA/exec',
        data: formData,
        dataType: 'json',
        encode: true
    }).done(function (data) {
        if (data.result == 'success') {
            // Form submission was successful and accepted by google. 
            // You can show your success message here

        } else {
            // Form was submission failed for some reasons.
            // You can examine the response from google to see whats missing

        }
    }).fail(function (jqXHR, status, err) {
        // Form submission failed due to some network or other errors
        // I am alerting the error but you can do anything else with it     
        alert(err);
    });
});