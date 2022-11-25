import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addDepense } from '../redux/DepenseSlice';

export default function AddDepense() {

  const dispatch = useDispatch();
  const [montant, SetMontant] = useState('');
  const [titre, SetTitre] = useState('');

  const add = () => {
    dispatch(addDepense({titre:titre, montant:parseFloat(montant)}))
    SetTitre('');
    SetMontant('');
  }

  return (
    <div className='adddepense'>
      <input type="text" placeholder='Donner une description ...' value={titre} onChange={(e) => SetTitre(e.target.value)}/>
      <input type="number" placeholder='Donner un montant ...' value={montant} onChange={(e) => SetMontant(e.target.value)}/>
      <button disabled={titre==='' || montant===''} onClick={add}>Ajouter depense</button>
    </div>
  )
}
