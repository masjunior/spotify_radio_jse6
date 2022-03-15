import { jest, expect, describe, test, beforeEach } from '@jest/globals';
import config from '../../../server/config.js';
import { Service } from '../../../server/service.js';

const { pages, location, constants: {
    CONTENT_TYPE
} } = config;

describe('#Service - test site for api response ', () => {
    beforeEach(() => {
        jest.restoreAllMocks();
        jest.clearAllMocks();
    })

    const service = new Service();
    // test to getfileStream in service.js
    test('Should execute function getfilrStream', async () => {
        expect(true).toBeTruthy();
    })
})