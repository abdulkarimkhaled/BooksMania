const axios = require('axios');
const fetchBook = async (key) => {
    //'0061964360 1603093680' example ISBNs to test
    const myArr = key.queryKey[0].replace(/\s/g, ' ').split(" "); //Splits the string because the api doesnt support multiple seearch
    const booksArr = [] //declare empty array
    for (let i = 0; i < myArr.length; i++) { // retrieves each book's details individually
        if (myArr[i] != '') {
            try {
                const response = await axios.get(`https://openlibrary.org/isbn/${myArr[i]}.json`)
                booksArr.push(response.data) //pushes book details into previously declared array
            } catch (error) {
                if (myArr != '') {
                    booksArr.push({
                        title: `ISBN No. ${myArr[i]} is not found`
                    })
                }
            }
        }
    }
    console.log(booksArr)
    return booksArr // return books array
}
export default fetchBook