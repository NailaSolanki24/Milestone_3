// Function to handle profile picture upload and preview
function handleProfilePictureUpload() {
    var profilePicInput = document.getElementById('profile-pic');
    var profilePreview = document.getElementById('profile-preview');
    profilePicInput.addEventListener('change', function (event) {
        var _a;
        var file = (_a = event.target.files) === null || _a === void 0 ? void 0 : _a[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var _a;
                profilePreview.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
                profilePreview.style.display = 'block';
            };
            reader.readAsDataURL(file);
        }
    });
}
// Function to collect form data and generate the resume
function generateResume(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var profilePicSrc = document.getElementById('profile-preview').src;
    var resumeData = { name: name, email: email, phone: phone, education: education, experience: experience, skills: skills };
    displayResume(resumeData, profilePicSrc);
}
// Function to display the generated resume
function displayResume(resumeData, profilePicSrc) {
    var resumeDisplay = document.getElementById('resume-display');
    resumeDisplay.innerHTML = "\n        <h2>Resume</h2>\n        <img src=\"".concat(profilePicSrc, "\" alt=\"Profile Picture\" style=\"max-width: 100px; border-radius: 50%;\" />\n        <p><strong>Name:</strong> ").concat(resumeData.name, "</p>\n        <p><strong>Email:</strong> ").concat(resumeData.email, "</p>\n        <p><strong>Phone:</strong> ").concat(resumeData.phone, "</p>\n        <p><strong>Education:</strong> ").concat(resumeData.education, "</p>\n        <p><strong>Experience:</strong> ").concat(resumeData.experience, "</p>\n        <p><strong>Skills:</strong> ").concat(resumeData.skills, "</p>\n    ");
}
// Function to initialize the event listeners
function initialize() {
    var _a;
    (_a = document.getElementById('resume-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', generateResume);
    handleProfilePictureUpload();
}
// Initialize the event listeners when the DOM content is loaded
document.addEventListener('DOMContentLoaded', initialize);
