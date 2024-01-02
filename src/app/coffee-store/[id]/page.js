import Link from 'next/link';
import React from 'react';

import StoresData from '@/../data/coffee-store.json';

export async function generateStaticParams() {
  return [{ id: '0' }, { id: '1' }]
}

async function getStores(staticProps) {
  const params = staticProps.params;
 StoresData.find( storeData => {return storeData.id == 0} );
}



function Store() {
  return (
    <Link href='/' >Go back home</Link>
  )
}

export default Store