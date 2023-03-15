/**
 * @param id - a numeric primary key for a user
 * @returns - an object of the form:
* {
    firstName: 'John',
    lastName: 'McKeever',
    phoneNumber: '3144482383' //note: phone number format is US standard
    address: '123 Nunya Avenue'
* }
 */
export const getUserInfo = async (id) => {
    throw new Error("getUser should be mocked!")
}

/**
 * @returns - an array of the above-defined user objects
 */
export const getAllUserInfo = async () => {
    throw new Error("getAllUserInfo should be mocked!")
}
