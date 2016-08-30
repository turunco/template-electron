# What is this
Template for Electron.

# Preparation
## Install Node & npm
[Node & npm](https://nodejs.org/en/)

## Install Electron
```
% npm install -g electron-prebuilt
```

## Prepare package.json
```
% npm init
%   (answer some questions.)
```

# Boot
1. % cd ..
2. % electron ./template-electron


# Create stand alone binary
## Preparation
### Install Packager
```
% npm install -g electron-packager
```

## [Create binary](https://github.com/electron-userland/electron-packager#usage)
```
% electron.cmd --version
v1.3.4
% electron-packager ./template-electron test --platform=win32 --arch=x64 --version=1.3.4
Packaging app for platform win32 x64 using electron v1.3.4
Wrote new app to C:\Users\<username>\Documents\GitHub\test-win32-x64
```
