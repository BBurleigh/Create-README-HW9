// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case (license === 'Apache'):
      return "Apache Badge"
      break;
    case (license === 'MIT'):
      return "MIT Badge"
      break;
    case (license === 'GPLv3'):
      return "GPLv3 Badge"
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
      return "Apache Link"
      break;
    case (license === 'MIT'):
      return "MIT Link"
      break;
    case (license === 'GPLv3'):
      return "GPLv3 Link"
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
      return "Apache Section"
      break;
    case (license === 'MIT'):
      return "MIT Section"
      break;
    case (license === 'GPLv3'):
      return "GPLv3 Section"
      break;
    default:
      return "";  
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  ${data.tableofcontents}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributions
  ${data.test}

  ## License
  ${data.license}

  ${renderLicenseLink(data.license)}

  ${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;