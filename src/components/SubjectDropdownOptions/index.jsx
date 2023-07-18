// --------------------------------------------------------------------- //
// TEST DATA
// --------------------------------------------------------------------- //
import book_subjects from "../../data/book_subjects.json";

// ? Has to be async? & Move to separate file?
// --------------------------------------------------------------------- //
// Book subject select component
// --------------------------------------------------------------------- //
function SubjectDropdownOptions(options) {
    // --------------------------------------------------------------------- //
    // Sorts the JSON data of book subjects (will be used with API call)
    // --------------------------------------------------------------------- //
  
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
  
    const subjects = sorted_subjects.map((book) => {
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
  
    // --------------------------------------------------------------------- //
    // Inserts array of option components into select component
    // --------------------------------------------------------------------- //
    return subjects;
  }


export default SubjectDropdownOptions;