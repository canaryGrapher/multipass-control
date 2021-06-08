
# Multipass Control
<p align="center" width="100%">
    <img src="https://user-images.githubusercontent.com/27415791/121166577-d3c82880-c86e-11eb-8ea5-a61e02717476.png" alt="multipass control" height="200px" />
</p>

## What is it?
A package to control Multipass hypervisor from within your NodeJS application for controls like launching, stopping or deleting Ubuntu images. This package requires an installation of [Multipass](https://multipass.run/) on your system.


Works on: <br />
![](https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white) ![](https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black) ![](https://img.shields.io/badge/Apple-white?style=for-the-badge&logo=apple&logoColor=black)

## Installation
To install the package:

Using **NPM**:
```
npm install multipass-control
```

Using **Yarn**:
```
yarn add multipass-control
```

## Usage
You can perform the following tasks using multipass-control:
  - List available instances
  - List installed instances
  - Launch instance
  - Instance information
  - Start instances
  - Stop instances
  - Restart instances
  - Suspend instances
  - Delete instances
  - Recover instances
  - Execute command on instances
  - Purge deleted instances


### List available images
This function returns a JSON object with aliases that can be used to launch instances on your device along with information about them.


### List installed instances
This function returns a JSON object containing all the created instances along with some of their properties

### Launch instances
This function will create and start a new instance based on the object provided as argument

### Instance information
This function returns a JSON object with properties of the instances provided as arguments

### Start instances
This function will start the instance provided as the argument.

### Stop instances
This function will stop the instance provided as the argument.

### Restart instances
This function will restart the instance provided as the argument.

###  Suspend instances
This function will suspend the instance provided as the argument.

### Delete instances
This function will delete the instance provided as the argument.

### Recover instances
This function will recover the deleted instance provided as the argument.

### Execute command on instances
This function will execute the command on the instance provided as the argument.

### Purge deleted instances
This function will remove all deleted instances from your system permanently


