function renderLicenseBadge(license) {
  switch(license) {
    case 'Apache 2.0':
      return "Apache 2.0 Badge"
      
    case 'MIT':
      return "MIT Badge"
      
    case 'GPL 3.0':
      return "GPL 3.0 Badge"
      
    case 'BSD 3':
      return "BSD 3 Badge"

    default:
      return "";  
  }
  
}

function renderLicenseLink(license) {
  switch(license) {
    case 'Apache 2.0':
      return "Apache 2.0 Link"
      
    case 'MIT':
      return "MIT Link"
      
    case 'GPL 3.0':
      return "GPL 3.0 Link"

    case 'BSD 3':
      return "BSD Link"
      
    default:
      return "";  
  }
}

function renderLicenseSection(license) {
  switch(license) {
    case 'Apache 2.0':
      return "Apache 2.0 Section"
      
    case 'MIT':
      return "MIT Section"
      
    case 'GPL 3.0':
      return "GPL 3.0 Section"

    case 'BSD 3':
      return "BSD 3 Section"
      
    default:
      return "";  
  }
}

function formatTable(tableofcontents) {
  let str = "";

  for(let i = 0; i < tableofcontents.length; i++) {

    str += `* [${tableofcontents[i]}](${tableofcontents[i]})\n`;
    
  }

  return str;

}

function generateMarkdown(data) {
  console.log(data)
  return `# ${data.title} 

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
${formatTable(data.tableofcontents)}

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