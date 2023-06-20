const myForm = $("form")
    myForm.on('submit', e => {
        e.preventDefault();
        checkInputs();
    })

function checkInputs() {
    // getting ids in variables
    const fnamevalue = $("#fname").val().trim();
    const lnamevalue = $("#lname").val().trim();
    const emailvalue = $("#email").val().trim();
    const MobileNovalue = $("#MobileNo").val().trim();
    const Agevalue = $("#Age").val().trim();
    const AddressValue = $("#Addre").val().trim();
    const QualificationValue = $("#Qualification");
    const ProfileValue = $('#ProfilePic').val().trim();
    const GenderValue = $('[name="gender"]:checked').val();
    const SkillsValue = $('[name="Skills"]:checked').val();
    const AgreeValue = $("#Agreebox").prop("checked");

    //to Validate firstnameValue
    if (fnamevalue == "") {
        $('#alert-fname').removeClass('alert-None ');
    }
    else {
        $('#alert-fname').addClass('alert-None');
    }
    //to Validate LastnameValue
    if (lnamevalue == "") {
        $('#alert-lname').removeClass('alert-None ');
    }
    else {
        $('#alert-lname').addClass('alert-None');
    }
    //to Validate EmailValue
    const check1 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (emailvalue == "") {
        $('#alert-email').removeClass('alert-None ');
    }
    else if (check1.test(email)) {
        $('#alert-email1').removeClass('alert-None');
    }
    else {
        $('#alert-email').addClass('alert-None');
    }

    //to Validate MobileNo
    const check2 = /^[0-9]{10}$/;
    if (MobileNovalue == "") {
        $('#alert-MobileNo').removeClass('alert-None');
    }

    else if (!check2.test(MobileNovalue)) {

        $('#alert-MobileNo').removeClass('alert-None');
    }
    else {
        $('#alert-MobileNo').addClass('alert-None');
    }
    //to Validate AgeValue
    if (Agevalue == "") {
        $('#alert-Age').removeClass('alert-None');
    }
    else {
        $('#alert-Age').addClass('alert-None');
    }

    //to  Validate Address
    if (AddressValue == "") {
        $('#alert-Address').removeClass('alert-None');
    }
    else {
        $('#alert-Address').addClass('alert-None');
    }

    //to  Validate Gender
    if (!GenderValue) {
        $('#alert-Gender').removeClass('alert-None');
    }
    else {
        $('#alert-Gender').addClass('alert-None');
    }

    //to  Validate Gender
    if (!SkillsValue) {
        $('#alert-Skills').removeClass('alert-None');
    }
    else {
        $('#alert-Skills').addClass('alert-None');
    }

    //to  Validate QualificationValue
    if (QualificationValue.val()) {
        $('#alert-Qual').addClass('alert-None');
    }
    else {
        $('#alert-Qual').removeClass('alert-None');
    }

    //to  Validate Profile
    if (ProfileValue === "") {
        $("#alert-Profile").removeClass('alert-None');

    }
    else {
        $("#alert-Profile").addClass('');
    }

    // to  Validate AgreeValue
    if (!AgreeValue) {
        $('#alert-Agree').css('color', 'red');

    }
    else {
        $('#alert-Agree').css('color', 'white');
    }
}

// to upload image and Delete
const Prof = $('#Prof');

$('.bt').on('click', function () {
    deleteImage();
});

$('#ProfilePic').on('change', function () {
    changeImage(this);
});

function changeImage(input) {
    var reader;

    if (input.files && input.files[0]) {
        reader = new FileReader();

        reader.onload = function (e) {
            $("#alert-Profile").addClass('alert-None')
            Prof.html(`<img src="${e.target.result}" alt="Uploaded Image">
        <a class="bt" onclick="deleteImage()"><i class="fa-solid fa-trash rr"></i></a>`);
        };
        reader.readAsDataURL(input.files[0]);

    }
}
// delete Function
function deleteImage() {
    Prof.html('');
    $('#ProfilePic').val('');

}
