const axios = require('axios')
const { async } = require('crypto-random-string')

module.exports = async (ipHeader) => {
    const headers = {
        'authority': 'igobuy.app',
        'upgrade-insecure-requests': '1',
        'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'sec-fetch-site': 'none',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-user': '?1',
        'sec-fetch-dest': 'document',
        'accept-language': 'en-US,en;q=0.9',
        ...ipHeader
    }

    const options = {
        url: 'https://igobuy.app/index/user/login.html'
    }

    const response = await axios({ method: options.method || 'GET', url: options.url, headers, })

    return response.data.match(/\b[a-z,0-9]{13}\b/gmi)[3]
}