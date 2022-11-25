import React from 'react'
import { useSelector } from 'react-redux'

export default function Statistiques() {

  const budget = useSelector(state => state.budget);
  const depenses = useSelector(state => state.depenses).reduce((sum,item) => sum + item.montant, 0)
  return (
    <div className='statistiques'>
      <div>
        Budget : {budget}
      </div>

      <div>
        Depenses : {depenses}
      </div>

      <div>
        Ecart : {budget-depenses}
      </div>
    </div>
  )
}
