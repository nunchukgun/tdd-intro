import {
    getUserInfo,
    getAllUserInfo
} from './ExternalApiFetcher'

export const getUser = async (id) => {
    if(!id){
        throw new Error('Param: id must be a positive integer!')
    }

    const user = await getUserInfo(id)

    const formattedUser = formatUser(user)

    return formattedUser
}

export const getAllUsers = async () => {
    const users = await getAllUserInfo()
    const formattedUsers = users.map(formatUser)
    return formattedUsers
}

const formatUser = (user) => ({
    name: `${user.firstName} ${user.lastName}`,
    phone: formatPhoneNumber(user.phoneNumber),
    address: user.address
})

const formatPhoneNumber = (phoneNum) => {
    const areaCode = phoneNum.slice(0, 3)
    const centralOfficeCode = phoneNum.slice(3, 6)
    const stationNumber = phoneNum.slice(6)
    
    return `${areaCode}-${centralOfficeCode}-${stationNumber}`
}