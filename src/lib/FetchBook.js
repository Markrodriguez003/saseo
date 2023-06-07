import axios from "axios"
import { useEffect } from "react";





function FetchBook(props) {

    useEffect(() => {

        axios.get('http://openlibrary.org/subjects/love.json?published_in=1500-1600')
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }, [])

    return (
        <h1>ETCHING BOOKS!</h1>
    )
}

export default FetchBook;