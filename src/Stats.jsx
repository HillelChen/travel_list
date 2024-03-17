export default function Stats({ items }) {
  if (!items.length) return (
    <p className="stats">
      <em >
        Your list is empty. Lets pack and go!
      </em>
    </p>
  );


  const itemsNums = items.length;
  const itempacked = items.filter((item) => item.packed).length;
  const avar = Math.round(itempacked / itemsNums * 100);

  return <footer className="stats">
    <em>
      {avar === 100 ? `You paked all your list. have a nice trip` :
        `you have ${itemsNums} items on your list, and you packed ${itempacked} (${avar} %) of them`} </em>
  </footer>
}