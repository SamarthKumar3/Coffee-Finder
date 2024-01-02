import styles from './page.module.css'
import Banner from '../../components/banner'
import Image from 'next/image';
import Card from '../../components/card';
import StoresData from '../../data/coffee-store.json'

async function getStores() {
  return StoresData;
}

export default async function Home() {
  // const bannerOnClick = () => {
  //   "use server"
  //   console.log('hi');
  // }

  const Stores = await getStores();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Banner buttonText="View Stores"  />
        <Image src='/static/icon1.svg' width={200} height={200} className={styles.hero1} alt='hero icon 1' />
        <Image src='/static/icon2.svg' width={200} height={200} className={styles.hero2} alt='hero icon 2' />
        <Image src='/static/icon3.svg' width={250} height={250} className={styles.hero3} alt='hero icon 3' />
        {Stores.length > 0 &&
        <>
          <h2 className={styles.heading2}>Noida Stores</h2>
          <div className={styles.cardLayout}>
            {Stores.map((store) => {
              return <Card
                key={store.name}
                name={store.name}
                imgUrl={store.imgUrl}
                href={`/coffee-store/${store.id}`}
              />
            })}
          </div>
        </>
        }
      </main>
    </div>
  )
}
