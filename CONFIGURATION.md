# Configuration Files

## Guidelines

1. **.anyhooksrc**
    - This file contains user and project-level preferences and should be located in the user's home directory.

2. **.anyhooksopenapi.enc**
    - This encrypted file contains sensitive information and should also be located in the user's home directory.

## References
- [Configuration File Best Practices](https://12factor.net/config)


# Configuration Guidelines for Electron-React Boilerplate Project

## Introduction

The Electron-React Boilerplate Project is structured to provide a streamlined and standardized setup for building Electron-React applications. Configuration files are instrumental in tailoring the project setup to meet specific requirements and ensuring a consistent development environment. This document outlines the guidelines and practices for managing configuration files within the project.

## Configuration Files

### `.env`

The `.env` file is used for setting environment-specific variables that are crucial for the project's functionality. It's advisable to keep sensitive information such as API keys or credentials out of source control by utilizing the `.env` file.

Example:
```plaintext
API_KEY=your-api-key-here
```

### `.gitconfig`

The `.gitconfig` file is used for Git configuration on a project level, ensuring that Git behaves as expected for all contributors, regardless of their personal global configurations.

Example:
```plaintext
[core]
    autocrlf = input
```

### `.editorconfig`

The `.editorconfig` file helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs.

Example:
```plaintext
root = true

[*]
indent_style = space
indent_size = 4
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```

## Managing Configurations

### Version Control

- It's advisable to keep a template of configuration files with necessary fields in the version control.
- Sensitive or environment-specific information should be omitted, and a placeholder or documentation should be provided for contributors to know what information they need to provide.

### Documentation

- Document any non-trivial configurations or configurations that deviate from defaults or common practices.
- Provide sufficient documentation to explain the purpose and usage of different configurations to new contributors.

### Automation

- Utilize setup scripts or automation tools to streamline the configuration setup process.
- Ensure that automated setups have clear documentation and fallbacks for manual setup.

## Conclusion

Proper management and documentation of configuration files are pivotal in maintaining a robust, consistent, and contributor-friendly project setup. Adhering to these guidelines will ensure that the project remains organized, flexible, and easy to set up for new contributors.


---

These guidelines provide a structured approach to managing configuration files in the Electron-React Boilerplate Project, ensuring a consistent and streamlined setup process for all contributors.

-- Author: Ricardo Malnati