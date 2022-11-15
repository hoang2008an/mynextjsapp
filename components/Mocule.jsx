import Atom from "./Atom";
export default function Mocule({ atoms, number }) {
  return (
    <>
      {number > 1 ? <span>{number}</span> : null}

      {atoms.map((value, key) => {
        return (
          <Atom identifier={value.name} number={value.count} key={key}></Atom>
        );
      })}
    </>
  );
}
