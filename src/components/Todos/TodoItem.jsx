import React from 'react'

const  TodoItem=({yubordim})=> {
  return (
        <div className='todItem'>
                   <table>
                       <thead>
                           <tr className='karimov'>
                               <th className='sardor'> {yubordim.id}</th>
                               <th className='sardor'> {yubordim.name}</th>
                               <th className='sardor'> {yubordim.role}</th>
                           </tr>
                       </thead>
                   </table>
        </div>
  )
}
export default TodoItem;
