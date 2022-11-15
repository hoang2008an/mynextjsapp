export default function Atom({ identifier, number }) {
  return (
    <>
      {identifier}
      {number > 1 ? <sub>{number}</sub> : null}
    </>
  );
}
