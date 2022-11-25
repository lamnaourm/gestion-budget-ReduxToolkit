import React from 'react'
import { useSelector } from 'react-redux'

export default function ListDepenses() {

  const depenses = useSelector(state => state.depenses);

  return (
    <div className='list'>
      <table>
        <tr>
          <th>Titre</th>
          <th>Montant</th>
        </tr>
        {
          depenses.map((item,index) => <tr key={index}>
              <td>{item.titre}</td>
              <td>{item.montant}</td>
          </tr>)
        }
      </table>
    </div>
  )
}
