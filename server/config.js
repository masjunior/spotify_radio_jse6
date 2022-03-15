import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const cutrrentDir = dirname(fileURLToPath(import.meta.url));
const root = join(cutrrentDir, '../');
const audioDirectory = join(root, 'audio');
const publicDirectory = join(root, 'public');

export default {
    port: process.env.PORT || 3000,
    dir: {
        root,
        publicDirectory,
        audioDirectory,
        songsDirectory: join(audioDirectory, 'songs'),
        fxDirectory: join(audioDirectory, 'fx'),
    },
    pages: {
        homeHTML: 'home/index.html',
        controllerHTML: 'controller/index.html',
    },
    location: {
        home: '/home',
    },
    constants: {
        CONTENT_TYPE: {
            '.html': 'text/html',
            '.css': 'text/css',
            '.js': 'text/javascript',
        }
    }
};