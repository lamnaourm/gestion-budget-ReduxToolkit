import { createSlice } from "@reduxjs/toolkit";


const DepenseSlice = createSlice({
    name:"depenses",
    initialState: {
        budget:2000,
        depenses:[
            {
                titre:"Achat PC",
                montant: 3000
            },
            {
                titre:"Achat vetement ",
                montant: 300
            },
            {
                titre:"Diesel",
                montant: 500
            },
        ]
    },
    reducers :{
        addbudget : (state,action) => {
            state.budget += parseFloat(action.payload);
        },
        addDepense : (state, action) => {
            state.depenses = [...state.depenses, action.payload];
        }
    }
})

export const {addbudget, addDepense} = DepenseSlice.actions
export default DepenseSlice.reducer;