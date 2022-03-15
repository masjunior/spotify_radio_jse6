import fs from 'fs';
import fsPromises from 'fs/promises';
import { join, extname } from 'path';
import config from './config.js';

const {
    dir: {
        publicDirectory
    }
} = config;

export class Service {
    createFileStream(fileName) {
        return fs.createReadStream(fileName);
    }

    async getFileInfo(file) {
        // file = home/index.html
        const fullFilePath = join(publicDirectory, file);
        // valida se existe, se não existe estoura erro!!
        await fsPromises.access(fullFilePath);
        //pega a extensão do arquivo
        const fileType = extname(fullFilePath);
        return {
            type: fileType,
            name: fullFilePath,
        }
    }

    async getFileStream(file) {
        const { name, type } = await this.getFileInfo(file);
        return {
            stream: this.createFileStream(name),
            type,
        };
    }
}