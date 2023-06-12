import axios from "axios"
import { useEffect } from "react";
import {Center} from "@chakra-ui/react"
import BookLoader from "../components/ui/BookLoader/BookLoader"





function FetchBook(props) {
    let x = '';
    useEffect(() => {

        // axios.get('http://openlibrary.org/subjects/love.json?published_in=1500-1900')
        axios.get('http://openlibrary.org/search.json?q=the+library+at+mount+char')
            .then(function (response) {
                // handle success
                console.log(response);

                x = "https://covers.openlibrary.org/b/isbn/" + response.data.docs[0].isbn[0] + "-L.jpg";
                console.log(x);
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
            <br />
            <br />
            <br />
            <br />
            {/* <BookLoader /> */}
            <Center>
                <img src={x} />

            </Center>
        </div>
    )
}

export default FetchBook;