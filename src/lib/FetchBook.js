import axios from "axios"
import { useEffect } from "react";
import BookLoader from "../components/ui/BookLoader/BookLoader"





function FetchBook(props) {

    useEffect(() => {

        // axios.get('http://openlibrary.org/subjects/love.json?published_in=1500-1900')
        axios.get('http://openlibrary.org/subjects')
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
        <div>
            {/* <BookLoader /> */}
        </div>
    )
}

export default FetchBook;