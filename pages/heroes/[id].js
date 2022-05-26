export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
  
    // map data to an array of path objects with params (id)
    const paths = data.map(hero => {
      return {
        params: { id: hero.id.toString() }
      }
    })
  
    return {
      paths,
      fallback: false
    }
  }
  
  export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();
  
    return {
      props: { hero: data }
    }
  }
  
  const Details = ({ hero }) => {
    return (
      <div>
        <h1>{ hero.name }</h1>
        <p>{ hero.email }</p>
        <p>{ hero.website }</p>
        <p>{ hero.address.city }</p>
      </div>
    );
  }
  
  export default Details;