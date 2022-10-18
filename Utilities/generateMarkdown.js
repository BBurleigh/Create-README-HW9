// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case 'Apache':
      return "Apache Badge"
      
    case 'MIT':
      return "MIT Badge"
      
    case 'GPLv3':
      return "GPLv3 Badge"
      
    default:
      return "";  
  }
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case 'Apache':
      return "Apache Link"
      
    case 'MIT':
      return "MIT Link"
      
    case 'GPLv3':
      return "GPLv3 Link"
      
    default:
      return "";  
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch(license) {
    case 'Apache':
      return license
      
    case 'MIT':
      return "MIT Section"
      
    case 'GPLv3':
      return "GPLv3 Section"
      
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