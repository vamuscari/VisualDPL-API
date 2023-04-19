import {describe, expect, test} from '@jest/globals';
import {jsDateToUnixDate} from "../src/utils";


describe('Utils', () => {
    test('converts JS date to Unix Date', () => {
        const jsDate = new Date( 2022, 5, 9, 4, 20, 0, 0);
        const locale: string  = ((-jsDate.getTimezoneOffset() / 60).toString() + ":00").replace(/([^0-9])(\d)(?=[^0-9])/g, '$10$2');
        const unixDateFunction = jsDateToUnixDate(jsDate);
        expect(unixDateFunction).toEqual("2022-06-09 04:20:00" + " " + locale);
    });
});