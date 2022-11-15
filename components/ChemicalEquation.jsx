import Mocule from "./Mocule";
export default function ChemicalEquation({
  reactantMocules,
  productantMocules,
  coefs,
}) {
  const numofReactants = reactantMocules.length;

  const reactantCoefs = coefs.slice(0, numofReactants - 1);
  const productantCoefs = coefs.slice(numofReactants);
  console.log(reactantCoefs);
  console.log(productantCoefs);
  return (
    <>
      {reactantMocules.map((value, key) => {
        return (
          <>
            <Mocule
              key={key}
              atoms={value.items}
              number={reactantCoefs[key]}
            ></Mocule>{" "}
            {key + 1 < numofReactants ? <span>+</span> : null}
          </>
        );
      })}
      <span>{" --> "}</span>
      {productantMocules.map((value, key) => {
        return (
          <>
            <Mocule
              key={key}
              atoms={value.items}
              number={productantCoefs[key]}
            ></Mocule>
            {key + 1 < productantMocules.length ? <span>+</span> : null}
          </>
        );
      })}
    </>
  );
}
