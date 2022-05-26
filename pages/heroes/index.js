import styles from '../../styles/heroes.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { heroes:data }
    }

}

const Heroes = ({heroes}) => {
    return ( 
        <div>
            <h1>All Heroes</h1>
            {heroes.map(hero => (
                <Link href={'/heroes/' + hero.id} key={ hero.id }>
                    <a className={styles.single}>
                        <h3>{ hero.name } a.k.a { hero.username }</h3>
                    </a>
                </Link>
            ))}
        </div>
     );
}
 
export default Heroes;