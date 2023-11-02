import a from "../../../images/gifs/ezgif-2-4d621ee77d.gif";
import b from "../../../images/gifs/ezgif-2-961879ee07.gif";
import c from "../../../images/gifs/ezgif-2-bce42e72ff.gif";
import d from "../../../images/gifs/ezgif-2-e9ae1c0cc0.gif";
import e from "../../../images/gifs/ezgif-2-ea012c7180.gif";

function RandomBookCoverAnimation() {
  const cover_animation_arry = [a, b, c, d, e];

  let random = Math.floor(Math.random() * cover_animation_arry.length);

  return (
    <div style={{marginBottom:"50px"}}>
      <img src={cover_animation_arry[random]} alt="book cover animation" />
    </div>
  );
}

export default RandomBookCoverAnimation;
