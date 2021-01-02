const axios = require('axios')

module.exports = async (fullname, phone, cookie, ipHeader) => {
    const headers = {
        'authority': 'igobuy.app',
        'accept': '*/*',
        'x-requested-with': 'XMLHttpRequest',
        'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'origin': 'https://igobuy.app',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'referer': 'https://igobuy.app/index/my/edit_address.html',
        'accept-language': 'en-US,en;q=0.9',
        'cookie': cookie,
        ...ipHeader
    }

    const data = `shoujianren=${fullname}&shouhuohaoma=${phone}&area=Hanoi&address=Cau+Giay`

    const options = {
        url: 'https://igobuy.app/index/my/edit_address_goods',
        method: 'POST'
    }

    const response = await axios({ method: options.method || 'GET', url: options.url, headers, data })

    return response.data
}
