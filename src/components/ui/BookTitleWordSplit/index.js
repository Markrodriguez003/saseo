export default function BookTitleWordSplit(title) {
  let splitTitle = title.split(" ").join("+");
  console.log(`SPLIT TITLE FUCKER: ${splitTitle}`);

  return splitTitle;
}
