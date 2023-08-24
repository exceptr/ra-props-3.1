import Star from "./Star"

export default function Stars({count}: {count: number}) {
  if(count > 5 || count < 1) {
    return
  }
  const stars = new Array(count).fill(undefined).map( () => <li key={Math.floor(Math.random() * 100)}><Star/></li> )
  return (
    <>
    <ul className="card-body-stars u-clearfix">
      {stars}
    </ul>
    </>
  )
}