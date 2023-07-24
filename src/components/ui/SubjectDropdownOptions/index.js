// --------------------------------------------------------------------- //
// TEST DATA
// --------------------------------------------------------------------- //
import book_subjects from "../../../data/book_subjects.json";
import languages from "../../../data/languages.json";

// NOTES
// https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes

// ? Has to be async? & Move to separate file?
// --------------------------------------------------------------------- //
// Book subject select component
// --------------------------------------------------------------------- //
function SubjectDropdownOptions(props) {
  // --------------------------------------------------------------------- //
  // Sorts the JSON data of book subjects (will be used with API call)
  // --------------------------------------------------------------------- //

  let options;
  if (props.type === "subject") {
    const sorted_subjects = book_subjects.b_subjects.sort((a, b) =>
      Object.keys(a) > Object.keys(b)
        ? 1
        : Object.keys(a) < Object.keys(b)
        ? -1
        : 0
    );

    // --------------------------------------------------------------------- //
    // Inserts sorted book subjects into individual select option components
    // --------------------------------------------------------------------- //

    options = sorted_subjects.map((book) => {
      return (
        <option
          key={Object.keys(book)}
          className="select_placeholder"
          value={Object.values(book)}
          style={{ color: "black", backgroundColor: "white" }}
        >
          {Object.keys(book)}{" "}
        </option>
      );
    });
  } else if (props.type === "languages") {
    const sorted_languages = languages.options.sort((a, b) =>
      Object.keys(a) > Object.keys(b)
        ? 1
        : Object.keys(a) < Object.keys(b)
        ? -1
        : 0
    );

    options = sorted_languages.map((language) => {
      return (
        <option
          key={Object.keys(language)}
          className="select_placeholder"
          value={Object.values(language)}
          style={{ color: "black", backgroundColor: "white" }}
        >
          {Object.keys(language)}{" "}
        </option>
      );
    });
  } else {
    <option
      key={Object.keys("Unknown")}
      className="select_placeholder"
      value={"Unknown"}
      style={{ color: "black", backgroundColor: "white" }}
    >
      {" "}
    </option>;
  }

  // --------------------------------------------------------------------- //
  // Inserts array of option components into select component
  // --------------------------------------------------------------------- //
  return options;
}

export default SubjectDropdownOptions;
