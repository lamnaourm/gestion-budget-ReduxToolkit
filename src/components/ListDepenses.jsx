import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaTrash } from 'react-icons/fa';
import { deleteDepense } from '../redux/DepenseSlice';

export default function ListDepenses() {

  const dispatch = useDispatch();
  const depenses = useSelector(state => state.depenses);

  const deleteD = (index) => {
    if(window.confirm("Voulez-vous supprimer cette depense ? ")){
      dispatch(deleteDepense(index))
    }
  }
  return (
    <div className='list'>
      <table>
        <tr>
          <th>Titre</th>
          <th>Montant</th>
          <th>Actions</th>
        </tr>
        {
          depenses.map((item,index) => <tr key={index}>
              <td>{item.titre}</td>
              <td>{item.montant}</td>
              <td><button onClick={() => deleteD(index)}> <FaTrash /></button></td>
          </tr>)
        }
      </table>
    </div>
  )
}
