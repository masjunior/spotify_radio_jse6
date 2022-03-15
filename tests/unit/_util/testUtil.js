import { jest } from '@jest/globals';
import { Readable, Writable } from 'stream'


export default class TestUtil {

    static genereReadableStream(data) {
        return new Readable({
            read() {
                for (const item of data) {
                    this.push(item);
                }
                this.push(null);
            }
        });
    }
    static genereWritableStream(onData) {
        return new Writable({
            write(chunk, encoding, callback) {
                onData(chunk);
                callback(null, chunk);
            }

        });
    }

    static defaultHandleParams() {
        const requestStream = TestUtil.genereReadableStream([`body da requisicao`]);
        const responseStream = TestUtil.genereWritableStream(() => { });
        const data = {
            request: Object.assign(requestStream, {
                headers: {},
                method: ``,
                url: ``,
            }),
            response: Object.assign(responseStream, {
                writeHead: jest.fn(),
                end: jest.fn(),
            }),
        }
        return {
            values: () => Object.values(data),
            ...data
        }
    }
}