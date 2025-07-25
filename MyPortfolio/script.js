const roles = ['Programmer', 'Web Developer', 'UI/UX Designer'];
const roleText = document.getElementById('roleText');

let roleIndex = 0;
let charIndex = 0;
let typing = true;

function typeRole() {
  if (typing) {
    if (charIndex < roles[roleIndex].length) {
      roleText.textContent += roles[roleIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeRole, 100);
    } else {
      typing = false;
      setTimeout(typeRole, 1500);
    }
  } else {
    if (charIndex > 0) {
      roleText.textContent = roles[roleIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(typeRole, 50);
    } else {
      typing = true;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeRole, 300);
    }
  }
}

typeRole();
