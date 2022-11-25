import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addbudget } from '../redux/DepenseSlice';

export default function AddBudget() {

  const dispatch = useDispatch();
  const [montant, SetMontant] = useState('');

  const add = () => {
    dispatch(addbudget(montant))
    SetMontant('');
    document.getElementById('montant').focus();
  }
  return (
    <div className='addbudget'>
      <input id="montant" type="number" placeholder='Saisir une valeur ...' value={montant} onChange={(e) => SetMontant(e.target.value)}/>
      <button disabled={montant===''} onClick={add}>Ajouter budget</button>
    </div>
  )
}
