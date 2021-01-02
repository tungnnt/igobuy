const bindBank = require('./api/bind-bank')
const editAddress = require('./api/edit-address')
const login = require('./api/login')
const register = require("./api/register")
const submitOrder = require('./api/submit-order')
const doOrder = require('./api/do-order')
const getCsrf = require('./api/get-csrf')

const {
    randomString,
    randomName,
    randomCookie,
    randomPhone,
    randomIPHeader,
    randomDate,
    normalizeName,
    randomCSRF,
    randomFirstName,
    randomeBankNumber,
} = require('./helper/random')

require('./helper/createFolder')('data')

setImmediate(async () => {
    while (true) {
        try {
            let response

            const name = randomName()

            const birthDate = randomDate()

            const username = (normalizeName(name) + birthDate.replace(/\//gmi, '')).substr(0, 12)

            console.log({ username })

            const cookie = randomCookie('PHPSESSID=n8hp08u12gtv5hr1fvdpd25vk3')

            const captcha = 'N7pt'

            const ipHeader = randomIPHeader()

            response = await register(username, captcha, cookie, ipHeader)

            console.log(response)

            require('fs').appendFileSync('./data/accounts.txt', `${username}\n`, () => { })

            // const csrf = await getCsrf(ipHeader)

            const csrf = '5fefdc7017f69'

            console.log({ csrf })

            response = await login(username, cookie, csrf, ipHeader)

            console.log(response)

            if (response.info && response.info === 'The system is busy, please try again later.') {
                process.exit()
            }

            const fullname = normalizeName(randomFirstName() + ' ' + name, '+', false)

            console.log({ fullname })

            const phone = randomPhone()

            console.log({ phone })

            response = await editAddress(fullname, phone, cookie, ipHeader)

            console.log(response)

            const bankNumber = randomeBankNumber()

            response = await bindBank(fullname, bankNumber, cookie, ipHeader)

            console.log(response)

            for (let i = 0; i < 10; i++) {
                response = await submitOrder(cookie, ipHeader)

                const { oid } = response

                console.log({ oid })

                response = await doOrder(cookie, oid, ipHeader)

                console.log(response)
            }
        } catch (error) {
            console.log(error)
        }
    }
})