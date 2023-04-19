export function unixDateToJSDate(unixDate: number): Date {
    return new Date(unixDate * 1000);
}
export function jsDateToUnixDate(jsDate: Date): string {
    let unixDate = jsDate.getFullYear() + '-' +
        (jsDate.getMonth() + 1) + '-' +
        jsDate.getDate() + ' ' +
        jsDate.getHours() + ':' +
        jsDate.getMinutes() + ':' +
        jsDate.getSeconds() + ' ' +
        -jsDate.getTimezoneOffset() / 60 + ':00';
    return unixDate.replace(/([^0-9])(\d)(?=[^0-9])/g, '$10$2');
}