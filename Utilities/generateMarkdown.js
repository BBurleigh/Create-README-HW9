function renderLicenseBadge(license) {
  switch(license) {
    case 'Apache 2.0':
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
      
    case 'MIT':
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
      
    case 'GPL 3.0':
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
      
    case 'BSD 3':
      return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"

    default:
      return "";  
  }
  
}
// [insert-text](https://…...com)

function renderLicenseLink(license) {
  switch(license) {
    case 'Apache 2.0':
      return "[Apache 2.0 Link](http://www.apache.org/licenses/LICENSE-2.0.html)"
      
    case 'MIT':
      return "[MIT Link]((https://opensource.org/licenses/MIT))"
      
    case 'GPL 3.0':
      return "[GPL 3.0 Link](http://www.gnu.org/licenses/gpl-3.0.html)"

    case 'BSD 3':
      return "[BSD Link]()"
      
    default:
      return "";  
  }
}

function renderLicenseSection(license) {
  switch(license) {
    case 'Apache 2.0':
      return "You have the freedom to do as you like with this permissive software. This license also contains a patent license from the contributors of the code."
      
    case 'MIT':
      return "You have the freedom to do as you like with this permissive software, as long as an original copy and license notice is included. I cannot be held liable for this software."
      
    case 'GPL 3.0':
      return "You have the freedom to run, study, share, and modify this permissive software. Anyone who acquires this software must make it available to anyone else under the same licensing agreement."

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

