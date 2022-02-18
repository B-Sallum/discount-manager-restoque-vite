import React from 'react';

const LogRow = (log) => {

  return (

  <tr className="dash-row">
    <td className="monospace-font">
      {log.id}
    </td>
    <td>
      {log.userID}
    </td>
    <td>
      {log.prodID}
    </td>
    <td>
      {log.alter}
    </td>
    <td>
      {log.original}
    </td>
    <td>
      {log.new}
    </td>
  </tr>
  )

}

export default LogRow;