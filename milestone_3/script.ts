// Interface to define the structure of the resume data
interface ResumeData {
    name: string;
    email: string;
    phone: string;
    education: string;
    experience: string;
    skills: string;
}

// Function to handle profile picture upload and preview
function handlePic() {
    const profilePicInput = document.getElementById('profile-pic') as HTMLInputElement;
    const profilePreview = document.getElementById('profile-preview') as HTMLImageElement;

    profilePicInput.addEventListener('change', (event) => {
        const file = (event.target as HTMLInputElement).files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                profilePreview.src = e.target?.result as string;
                profilePreview.style.display = 'block';
            }
            reader.readAsDataURL(file);
        }
    });
}

// Function to collect form data and generate the resume
function generate(event: Event) {
    event.preventDefault();
    
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
    const profilePicSrc = (document.getElementById('profile-preview') as HTMLImageElement).src;

    const resumeData: ResumeData = { name, email, phone , education, experience, skills };

    displayResume(resumeData, profilePicSrc);
}

// Function to display the generated resume
function display(resumeData: ResumeData, profilePicSrc: string) {
    const resumeDisplay = document.getElementById('resume-display') as HTMLDivElement;

    resumeDisplay.innerHTML = `
        <h2>Resume</h2>
        <img src="${profilePicSrc}" alt="Profile Picture" style="max-width: 100px; border-radius: 50%;" />
        <p><strong>Name:</strong> ${resumeData.name}</p>
        <p><strong>Email:</strong> ${resumeData.email}</p>
        <p><strong>Phone:</strong> ${resumeData.phone}</p>
        <p><strong>Education:</strong> ${resumeData.education}</p>
        <p><strong>Experience:</strong> ${resumeData.experience}</p>
        <p><strong>Skills:</strong> ${resumeData.skills}</p>
    `;
}

function init() {
    document.getElementById('resume-form')?.addEventListener('submit', generateResume);
    handleProfilePictureUpload();
}


document.addEventListener('DOMContentLoaded', initialize);
