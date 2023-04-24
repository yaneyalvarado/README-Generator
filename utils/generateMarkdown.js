// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return ``;
  } else {
    return `(https://img.shields.io/github/license/yaneyalvarado/README-Generator)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return ``;
  } else  if (license === 'MIT')  {
  return `https://img.shields.io/github/license/yaneyalvarado/README-Generator`
  }
  }


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ``;
  } else {
    return  `https://img.shields.io/github/license/yaneyalvarado/README-Generator`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
 ${renderLicenseBadge(data.license)}

 ## Table of Contents
 - Description
 - Installation
 - Usage
 - License
 - Contributing
 - Tests
 - Questions
 - Credits

 ## Description

 ## Installation

 ## Usage
${renderLicenseSection(data.license)}

## Contributing

## Tests
`;
}

module.exports = generateMarkdown;
