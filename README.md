
# Multipass Control
<p align="center" width="100%">
    <img src="https://user-images.githubusercontent.com/27415791/121166577-d3c82880-c86e-11eb-8ea5-a61e02717476.png" alt="multipass control" height="200px" />
</p>

## What is it?
A package to control Multipass VM manager from within your NodeJS application for controls like launching, stopping or deleting Ubuntu images. This package requires an installation of [Multipass](https://multipass.run/) on your system.

Made with: <br />
![](https://img.shields.io/badge/Node.js-black?style=for-the-badge&logo=javascript&logoColor=green)

Works on: <br />
![](https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white) ![](https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black) ![](https://img.shields.io/badge/Mac_OS-white?style=for-the-badge&logo=apple&logoColor=black)

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
  - [List available instances](https://github.com/canaryGrapher/multipass-control/blob/main/README.md#list-available-images)
  - [List installed instances](https://github.com/canaryGrapher/multipass-control/blob/main/README.md#list-installed-instances)
  - [Launch instance](https://github.com/canaryGrapher/multipass-control/blob/main/README.md#launch-instances)
  - [Instance information](https://github.com/canaryGrapher/multipass-control/blob/main/README.md#instance-information)
  - [Start instances](https://github.com/canaryGrapher/multipass-control/blob/main/README.md#start-instances)
  - [Stop instances](https://github.com/canaryGrapher/multipass-control/blob/main/README.md#stop-instances)
  - [Restart instances](https://github.com/canaryGrapher/multipass-control/blob/main/README.md#restart-instances)
  - [Suspend instances](https://github.com/canaryGrapher/multipass-control/blob/main/README.md#suspend-instances)
  - [Delete instances](https://github.com/canaryGrapher/multipass-control/blob/main/README.md#delete-instances)
  - [Recover instances](https://github.com/canaryGrapher/multipass-control/blob/main/README.md#recover-instances)
  - [Execute command on instances](https://github.com/canaryGrapher/multipass-control/blob/main/README.md#execute-command-on-instances)
  - [Purge deleted instances](https://github.com/canaryGrapher/multipass-control/blob/main/README.md#purge-deleted-instances)


### List available images
This function returns a JSON object with aliases that can be used to launch instances on your device along with information about them. This function does not take any parameters.

```js
const { findImages } = require("multipass-control")

const main = async () => {
    const availableImages = await findImages();
    return availableImages;
}

```

<details>
  <summary>Click here to see sample output</summary>

    {
      "errors": [],
      "images": {
        "18.04": {
          "aliases": ["bionic"],
          "os": "Ubuntu",
          "release": "18.04 LTS",
          "remote": "",
          "version": "20210604"
        },
        "20.04": {
          "aliases": ["focal", "lts"],
          "os": "Ubuntu",
          "release": "20.04 LTS",
          "remote": "",
          "version": "20210603"
        },
        "20.10": {
          "aliases": ["groovy"],
          "os": "Ubuntu",
          "release": "20.10",
          "remote": "",
          "version": "20210604"
        },
        "appliance:adguard-home": {
          "aliases": [],
          "os": "Ubuntu",
          "release": "AdGuard Home Appliance",
          "remote": "appliance",
          "version": "20200812"
        },
        "appliance:mosquitto": {
          "aliases": [],
          "os": "Ubuntu",
          "release": "Mosquitto Appliance",
          "remote": "appliance",
          "version": "20200812"
        },
        "appliance:nextcloud": {
          "aliases": [],
          "os": "Ubuntu",
          "release": "Nextcloud Appliance",
          "remote": "appliance",
          "version": "20200812"
        },
        "appliance:openhab": {
          "aliases": [],
          "os": "Ubuntu",
          "release": "openHAB Home Appliance",
          "remote": "appliance",
          "version": "20200812"
        },
        "appliance:plexmediaserver": {
          "aliases": [],
          "os": "Ubuntu",
          "release": "Plex Media Server Appliance",
          "remote": "appliance",
          "version": "20200812"
        },
        "core": {
          "aliases": ["core16"],
          "os": "Ubuntu",
          "release": "Core 16",
          "remote": "",
          "version": "20200818"
        },
        "core18": {
          "aliases": [],
          "os": "Ubuntu",
          "release": "Core 18",
          "remote": "",
          "version": "20200812"
        },
        "snapcraft:core18": {
          "aliases": [],
          "os": "",
          "release": "Snapcraft builder for Core 18",
          "remote": "snapcraft",
          "version": "20201111"
        },
        "snapcraft:core20": {
          "aliases": [],
          "os": "",
          "release": "Snapcraft builder for Core 20",
          "remote": "snapcraft",
          "version": "20201111"
        }
      }
    }

</details>
    
### List installed instances
This function returns a JSON object containing all the created instances along with some of their properties.
```js
const { localImages } = require("multipass-control")

const main = async () => {
    const listInstance = await localImages();
    return listInstance;
}

```

<details>
    <summary>Click here to see sample output</summary>

        {
          "list": [
            {
              "ipv4": [],
              "name": "Rabbit-Hole",
              "release": "Core 16",
              "state": "Suspended"
            },
            {
              "ipv4": ["N/A"],
              "name": "primary",
              "release": "20.04 LTS",
              "state": "Running"
            },
            {
              "ipv4": ["N/A"],
              "name": "included-rudd",
              "release": "Core 16",
              "state": "Running"
            }
          ]
        }

</details>

### Launch instances
This function will create and start a new instance based on the object provided as argument.

```js
const { launchImage } = require("multipass-control")

const main = async () => {
    const launchInstance = await launchImage({ 
        image: "core18", 
        name: "flattering-racoons" 
    });
    return launchInstance;
}
```
<details>
    <summary>Click here to see sample output</summary>
  
    {
        "successful": true,
        "error": null,
        "output": "Launched: flattering-racoons"
    }

    
</details>


The function takes `image` as a necessary object property, however you can customize your instance by providing other properties as well. These are all the properties the object takes:

| Property Name | Required | Description |
| :-----------: | :------: | :--------- |
| `image` | yes | The type of instance you want to create, from the list obtained [here](https://github.com/canaryGrapher/multipass-control/blob/main/README.md#list-available-images) |
| `name` | no | Name for the instance you would like to give. If it is 'primary' (the configured primary instance name), the user's home directory is mounted inside the newly launched instance, in 'Home'. |
| `memory` | no | Number of CPUs to allocate | 
| `disk` | no | Disk space to allocate. Positive integers, in bytes, or with K, M, G suffix. | 
| `cpu` | no | Number of CPUs to allocate. Minimum: 1, default: 1. | 


### Instance information
This function returns a JSON object with properties of the instances provided as arguments
```js
const { imageInfo } = require("multipass-control")

const main = async () => {
    const instanceInformation = await imageInfo("flattering-racoons");
    return instanceInformation;
}

```

<details>
    <summary>Click here to see sample output</summary>
    
        {
          "errors": [],
          "info": {
            "flattering-racoons": {
              "disks": { "sda1": { "total": "104071168", "used": "104071168" } },
              "image_hash": "db3a6130f46f8d84adb792a95081671a14d8b90c6ddda7b3e25a1d7d4c0e98b4",
              "image_release": "Core 16",
              "ipv4": ["N/A"],
              "load": [0, 0, 0],
              "memory": { "total": 511766528, "used": 40534016 },
              "mounts": {},
              "release": "Core 16",
              "state": "Running"
            }
          }
        }
    
</details>

### Start instances
This function will start the instance provided as the argument.
```js
const { startImage } = require("multipass-control")

const main = async () => {
    const startInstance = await startImage("flattering-racoons");
    return startInstance;
}

```


<details>
    <summary>Click here to see sample output</summary>

        {
          "successful": true,
          "error": null
        }
    
</details>

### Stop instances
This function will stop the instance provided as the argument.
```js
const { stopImage } = require("multipass-control")

const main = async () => {
    const stopInstance = await stopImage("flattering-racoons");
    return stopInstance;
}

```

<details>
    <summary>Click here to see sample output</summary>
    
        {
          "successful": true,
          "error": null
        }
    
</details>

### Restart instances
This function will restart the instance provided as the argument.
```js
const { restartImage } = require("multipass-control")

const main = async () => {
    const restartInstance = await restartImage("flattering-racoons");
    return restartInstance;
}

```

<details>
    <summary>Click here to see sample output</summary>

    {
      "successful": true,
      "error": null
    }
    
</details>

###  Suspend instances
This function will suspend the instance provided as the argument.
```js
const { suspendImage } = require("multipass-control")

const main = async () => {
    const suspendInstance = await suspendImage("flattering-racoons");
    return suspendInstance;
}

```

<details>
    <summary>Click here to see sample output</summary>

        {
          "successful": true,
          "error": null
        }
    
</details>

### Delete instances
This function will delete the instance provided as the argument.
```js
const { deleteImage } = require("multipass-control")

const main = async () => {
    const deleteInstance = await deleteImage("flattering-racoons");
    return deleteInstance;
}

```

<details>
    <summary>Click here to see sample output</summary>
   
        {
          "successful": true,
          "error": null
        }
    
</details>

### Recover instances
This function will recover the deleted instance provided as the argument.
```js
const { recoverImage } = require("multipass-control")

const main = async () => {
    const recoverInstance = await recoverImage("flattering-racoons");
    return recoverInstance;
}

```

<details>
    <summary>Click here to see sample output</summary>

        {
          "successful": true,
          "error": null
        }

</details>

### Execute command on instances
This function will execute the command on the instance provided as the argument.
```js
const { executeCommand } = require("multipass-control")

const main = async () => {
      const executing = await executeCommand({
        name: "flattering-racoons",
        cmd: "pwd",
      });
    return availableImages;
}

```
<details>
    <summary>Click here to see sample output</summary>
    
        {
          "successful": true,
          "error": null,
          "output": "/home/ubuntu"
        }
    
</details>

The function takes `name` and `cmd` as a necessary object property, however you can customize your instance by providing other properties as well. These are all the properties the object takes:

| Property Name | Required | Description |
| :-----------: | :------: | :--------- |
| `name` | yes | The name of the instance you want to execute the command on |
| `cmd` | yes | The command you want to execute on the instance |

Keep in mind that all commands are run with respect to `/home/ubuntu` directory.

### Purge deleted instances
This function will remove all deleted instances from your system permanently
```js
const { purgeImages } = require("multipass-control")

const main = async () => {
    const purgeInstances = await purgeImages();
    return purgeInstances;
}

```

<details>
    <summary>Click here to see sample output</summary>

    {
      "successful": true,
      "error": null
    }
    
</details>

# Contributing
I am working on making this package more robust and fast. If you have ideas on how can that be done, create an issue as a feature request and I will get on it as soon as possible.

# Error reporting
If you encounter an error, please create a new [issue](https://github.com/canaryGrapher/multipass-control/issues/new) along with:
- Steps to reproduce
- Error log (if available)

## License

[![MIT license](https://img.shields.io/badge/License-MIT-red.svg)](https://lbesson.mit-license.org/)

You can do whatever you want as long as you include the original copyright and license notice in any copy of the software/source. The work is provided "as is". You may not hold the author liable. 

## Mentions

![](https://img.shields.io/badge/Canonical-orange?style=for-the-badge&logo=canonical&logoColor=white) <br />
A shoutout to the [Canonical](https://github.com/canonical) team for creating such an amazing software.
