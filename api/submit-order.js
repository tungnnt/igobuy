const axios = require('axios')

module.exports = async (cookie, ipHeader) => {
    const headers = {
        'authority': 'igobuy.app',
        'content-length': '0',
        'accept': '*/*',
        'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
        'x-requested-with': 'XMLHttpRequest',
        'origin': 'https://igobuy.app',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'referer': 'https://igobuy.app/index/rot_order/index',
        'accept-language': 'en-US,en;q=0.9',
        'cookie': cookie,
        ...ipHeader
    }

    const options = {
        url: 'https://igobuy.app/index/rot_order/submit_order.html?cid=0&reCAPTCHA=&v=3&m=' + Math.random(),
        method: 'POST'
    }

    const response = await axios({ method: options.method || 'GET', url: options.url, headers, })

    return response.data
}
