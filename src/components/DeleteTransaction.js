
import React from "react";


function Transaction({ setOnDelete}) {

  function handleDelete(id)

    {
      fetch(`http://localhost:8001/transactions/${id}`, {
        method: "DELETE"
      })
      .then((data)=> data.json())
      .then((res)=>{   
        
        setOnDelete(id)

      })
    }

  return (
    <tr>
     <td><Delete style = {{color: "red"}} onClick = {()=> handleDelete(transaction.id)}/></td>      
    </tr>
  );
}

export default Transaction;