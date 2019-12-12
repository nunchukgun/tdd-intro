import {
    getUser,
    getAllUsers
} from '../UserInfoController_solution'

jest.mock('../ExternalApiFetcher', () => ({
    getUserInfo: jest.fn(() => mockUsers[0]),
    getAllUserInfo: jest.fn(() => mockUsers)
}))

describe('UserInfoController_solution', () => {
    describe('getUser', () => {
        it('throws if the id param is missing or falsy', async () => {
            const input = null
            const expected = 'Param: id must be a positive integer!'
    
            await expect(getUser(input)).rejects.toThrow(expected)
        })
    
        it('returns user info from the api, formatted', async () => {
            const input = -99
            const expected = {
                name: 'FirstName LastName',
                phone: '999-999-9999',
                address: '123 Fake Street'
            }
    
            const result = await getUser(input)
            expect(result).toEqual(expected)
        })
    })

    describe('getAllUsers', () => {
        it('returns all user info from the api, formatted', async () => {
            const expected = [
                {
                    name: 'FirstName LastName',
                    phone: '999-999-9999',
                    address: '123 Fake Street'
                },
                {
                    name: 'Mocko TheMockMan',
                    phone: '123-456-7899',
                    address: 'The haunted mansion up the street'
                }
            ]

            const result = await getAllUsers()
            expect(result).toEqual(expected)
        })
    })
})

const mockUsers = [
    {
        firstName: 'FirstName',
        lastName: 'LastName',
        phoneNumber: '9999999999',
        address: '123 Fake Street'
    },
    {
        firstName: 'Mocko',
        lastName: 'TheMockMan',
        phoneNumber: '1234567899',
        address: 'The haunted mansion up the street'
    }
]
