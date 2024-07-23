async function fetchInterestRates() {
    try {
        const response = await axios.get('https://www.lolcfinance.com/rates-and-returns/interest-rates/');
        const html = response.data;
        const $ = cheerio.load(html);
        const interestRatesTable = $('#InterestRates').html();

        document.getElementById('interest-rates').innerHTML = interestRatesTable;
    } catch (error) {
        console.error('Error fetching interest rates:', error);
    }
}

fetchInterestRates();
