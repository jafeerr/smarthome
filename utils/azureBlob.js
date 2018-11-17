if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load();
}

const path = require('path');
const args = require('yargs').argv;
const storage = require('azure-storage');

const blobService = storage.createBlobService();
const containerName = 'test-container';
const sourceFilePath = path.resolve('./example.txt');
const blobName = path.basename(sourceFilePath, path.extname(sourceFilePath));

export const createContainer = () => {
    return new Promise((resolve, reject) => {
        blobService.createContainerIfNotExists(containerName, { publicAccessLevel: 'blob' }, err => {
            if (err) {
                reject(err);
            } else {
                resolve({ message: `Container '${containerName}' created` });
            }
        });
    });
};

export const upload = (imagePath,blobOut) => {
    return new Promise((resolve, reject) => {
        console.log("1");
        const sourceFilePath = path.resolve(imagePath);
    const blobName = path.basename(sourceFilePath, path.extname(sourceFilePath));
    blobOut=blobName;
    console.log("2"+blobName+sourceFilePath);
        blobService.createBlockBlobFromLocalFile(containerName, blobName, sourceFilePath, err => {
            
            if (err) {
                reject(err);
            } else {
                resolve({ message: `Upload of '${blobName}' complete` });
            }
        });
    });
};

export const download = () => {
    const dowloadFilePath = sourceFilePath.replace('.txt', '.downloaded.txt');
    return new Promise((resolve, reject) => {
        blobService.getBlobToLocalFile(containerName, blobName, dowloadFilePath, err => {
            if (err) {
                reject(err);
            } else {
                resolve({ message: `Download of '${blobName}' complete` });
            }
        });
    });
};

export const list = () => {
    return new Promise((resolve, reject) => {
        blobService.listBlobsSegmented(containerName, null, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve({ message: `Items in container '${containerName}':`, data: data });
            }
        });
    });
};

const deleteBlock = () => {
    return new Promise((resolve, reject) => {
        blobService.deleteBlobIfExists(containerName, blobName, err => {
            if (err) {
                reject(err);
            } else {
                resolve({ message: `Block blob '${blobName}' deleted` });
            }
        });
    });
};

const uploadAndList = () => {
    return _module.upload().then(_module.list);
};

const _module = {
    "createContainer": createContainer,
    "uploadAndList": uploadAndList,
    "upload": upload,
    "download": download,
    "delete": deleteBlock,
    "list": list
};
/*
const commandExists = () => exists = !!_module[args.command];

const executeCommand = async () => {
    const response = await _module[args.command]();

    console.log(response.message);

    if (response.data) {
        response.data.entries.forEach(entry => {
            console.log('Name:', entry.name, ' Type:', entry.blobType)
        });
    }
};

try {
    const cmd = args.command;

    console.log(`Executing '${cmd}'...`);

    if (commandExists()) {
        executeCommand();
    } else {
        console.log(`The '${cmd}' command does not exist. Try one of these:`);
        Object.keys(_module).forEach(key => console.log(` - ${key}`));
    }
} catch (e) {
    console.log(e);
}*/