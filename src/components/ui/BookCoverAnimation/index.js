import "./style.css";

function BookCoverAnimation({ cover, author_name, title }) {
  console.log(`Book Cover Animation: ${title} - ${cover} - ${author_name} `);
  return (
    <>
      <div className="container">
        <div className="book">
          <div className="front">
            <div className="cover">
              <img
                src={`https://covers.openlibrary.org/b/id/${cover}-L.jpg`}
                alt={`cover-${cover}`}
              />
              {/* <img src={`https://m.media-amazon.com/images/I/71UJ-KsY0xL._AC_UL480_FMwebp_QL65_.jpg`} alt={`cover-${cover}`} /> */}
            </div>
          </div>
          <div className="left-side">
            <h2>
              <span>{author_name}</span>
              <span>{title}</span>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookCoverAnimation;
