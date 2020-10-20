const GetQuotes = async () => {

    const response = await fetch('https://programming-quotes-api.herokuapp.com/quotes/lang/en');

    if (response.status !== 200) {
        throw new Error('cannot fetch the data');
    }
    const data = await response.json();

    return data;

}

// GetQuotes()
// .then((data) => {
//     const quoteText = data.map(item => {
//         return item.en;
//     })
//     console.log('resolved', quoteText);
//     // return quoteText;
// })
// .catch(err => console.log('rejected', err));

export default GetQuotes;