import { FaGoodreads, FaAudible, FaGoogle, FaAmazon } from "react-icons/fa";
import { Button, Tooltip, WrapItem, Link } from "@chakra-ui/react";

import WordSplit from "lib/WordSplit";
/* ------------------------- */
// CARD BUTTONS DETAILS
/* ------------------------- */
function BookCardButtons(bookdetails) {
  // Separate, distinct details for each book card button
  const buttonDetails = [
    {
      name: "GoodReads",
      label: "See reader reviews for this book!",
      background: "darkcyan",
      color: "white",
      icon: <FaGoodreads />,
      variant: "solid",
      alt: "Goodreads anchor button",
      source:
        bookdetails.props.hasOwnProperty("id_goodreads") === true &&
        bookdetails.props.id_goodreads !== null &&
        bookdetails.props.id_goodreads !== undefined &&
        bookdetails.props.id_goodreads[0] !== undefined &&
        bookdetails.props.id_goodreads !== "" &&
        Array.isArray(bookdetails.props.id_goodreads) === true
          ? `https://www.goodreads.com/book/show/${bookdetails.props.id_goodreads[0]} `
          : false,
    },
    {
      name: "Amazon",
      label: "See available products and books for this book on amazon!",
      background: "gold",
      color: "black",
      icon: <FaAmazon />,
      variant: "solid",
      alt: "Amazon anchor button",
      source:
      bookdetails.props.hasOwnProperty("id_amazon") === true &&
      bookdetails.props.id_amazon !== null &&
      bookdetails.props.id_amazon !== undefined &&
      bookdetails.props.id_amazon[0] !== undefined &&
      bookdetails.props.id_amazon !== "" &&
      Array.isArray(bookdetails.props.id_amazon) === true
        ? `https://www.amazon.com/dp/${bookdetails.props.id_amazon[0]}`

        : false,
    },

    {
      name: "Audible",
      label: "Search for the audiobook version here!",
      background: "orange",
      color: "black",
      icon: <FaAudible />,
      variant: "solid",
      alt: "Audible anchor button",
      source: `https://www.audible.com/search?keywords=${WordSplit(
        bookdetails.props.title
      )} ${bookdetails.props.author_name}`,
    },
    {
      name: "Google",
      label: "Search for this book on Google Books!",
      background: "dodgerblue",
      color: "white",
      icon: <FaGoogle />,
      variant: "solid",
      alt: "Google anchor button",
      source: `https://www.google.com/search?q=${WordSplit(
        bookdetails.props.title
      )} book by ${bookdetails.props.author_name}`,
    },
  ];

  // console.log(`This is the book's isbn --> ${bookdetails.props.isbn}`);
  // console.log(`This is the book's author --> ${bookdetails.props.author_name}`);
  // console.log(`This is the book's key --> ${bookdetails.props.key}`);
  // console.log(
  //   `This is the book's amazon id --> ${bookdetails.props.id_amazon}`
  // );
  // console.log(
  //   `This is the book's goodreads id --> ${bookdetails.props.id_goodreads}`
  // );

  /* ------------------------- */
  // BOOK CARD BUTTON + ANCHOR LINKS
  /* ------------------------- */
  const cardBtns = buttonDetails.map((button, id) => {
    // Converting Button name to href link name from book object
    // let bookSourceName = button.name.toLowerCase();
    return (
      <WrapItem key={id + button.name}>
        <Tooltip
          label={
            !button.source ? `Not available on ${button.name}` : button.label
          }
          color={"white"}
          placement="top"
        >
          <Link
            href={button.source}
            isExternal
            rel="Noopener noreferrer nofollow"
          >
            <Button
              variant={button.variant}
              backgroundColor={button.background}
              color={button.color}
              leftIcon={button.icon}
              isDisabled={!button.source ? true : false}
            >
              {button.name}
            </Button>
          </Link>
        </Tooltip>
      </WrapItem>
    );
  });

  return cardBtns;
}

export default BookCardButtons;

// ? ------------------
// ? NOTES
// ? ------------------

// LIBRARY THING + LIBRARYTHING_ID
// https://www.librarything.com/work/ <----4220>

// GOODREADS URL + GOODREADS_ID // RE-ARRANGE TO LARGEST NUMBER FOR ENGLISH VERSION?
// https://www.goodreads.com/book/show/<----738228>
// alt version -> https://www.goodreads.com/search?utf8=%E2%9C%93&q=THE+DARK+TOWER&search_type=books
// alt version -> https://www.goodreads.com/search?utf8=%E2%9C%93&q=THE+mist&search_type=books

// AMAZON URL + AMAZON_ID
// https://www.amazon.com/dp/<----B006RLQ456>

// AUDIBLE
// https://www.audible.com/search?keywords=the+mist&ref-override=a_hp_t1_header_search&k=the+mist&crid=2KPCXRBLTF6AN&sprefix=the+mist%2Cna-audible-us%2C76&i=na-audible-us&url=search-alias%3Dna-audible-us&ref=nb_sb_noss_1

// OVERDRIVE URL + OVERDRIVE_ID
// https://www.overdrive.com/media/<----E7168E5B-47F0-41A1-8D8E-83F05C44985B>

// BETTER WORLD BOOK
// https://www.betterworldbooks.com/search/results?q=THE%20MAGIC%20FINGER <--- title = book title with spaces between words replaced with %20 and capitalized
