export default function Stats({numberOfCharacters, instagramCharacterLeft, facebookCharacterLeft, numberOfWords}) {
  return (

    <section className="stats">
    <Stat label = "Words" number={numberOfWords}/>
    <Stat label = "Characters" number={numberOfCharacters}/>
    <Stat label = "Instagram" number={instagramCharacterLeft} />
    <Stat label = "Facebook" number={facebookCharacterLeft}/>
    </section>
  )
}

function Stat({ label , number}) {
  
    return (
        <section className="stat">
        <span className={`stat__number ${number < 0 ? "stat__number--limit" : ""}`}>{number}</span>
        <h2 className="second-heading">{label}</h2>
      </section>
    );

}