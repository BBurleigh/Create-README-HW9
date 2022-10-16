// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case (license === 'Apache'):

      break;
    case (license === 'MIT'):

      break;
    case (license === 'GPLv3'):

      break;
    default:
      return "";  
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case (license === 'Apache'):

      break;
    case (license === 'MIT'):

      break;
    case (license === 'GPLv3'):

      break;
    default:
      return "";  
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch(license) {
    case (license === 'Apache'):

      break;
    case (license === 'MIT'):

      break;
    case (license === 'GPLv3'):

      break;
    default:
      return "";  
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;