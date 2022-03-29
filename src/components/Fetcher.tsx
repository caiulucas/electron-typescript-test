import { Knex } from 'knex';
import React, { useEffect, useState } from 'react';

type FetcherProps = {
  database: Knex;
}

export const Fetcher: React.FC<FetcherProps> = ({database}) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchItems() {
      const result = await database('items').select();

      setItems(result);
    }

    fetchItems();
  })

  return (
    <div>
      {items.map(item => {
        <p>{item.value}</p>
      })}
    </div>
  )
}