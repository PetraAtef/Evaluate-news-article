import { checkUrl } from "../js/URL_checker";

describe('Test checking the URL', () => {
    test('Testing the checkURL function functionality', () => {
        expect(checkUrl).toBeDefined()
    })

    test('check if checkUrl function returns false for invalid url', () => {
        expect(checkUrl('false url')).toBeFalsy()
    })

    test('checkUrl return true for valid url', () => {
        expect(checkUrl('http://goodURL.com')).toBeTruthy()
    })
})