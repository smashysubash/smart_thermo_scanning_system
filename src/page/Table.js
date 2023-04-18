import React from 'react'
import './Table.css';

export default function Table()
{
 return (
    <div>
        <table className='table'>
            <thead className='head'>
                <tr>
                <th>Regno</th>
                <th>Name</th>
                <th>Temperature</th>
                <th>Date</th>
                <th>Email</th>
                <th>Batch</th>
                </tr>
            </thead>
            <tbody className='body'>
                <tr>
                    <td>2012083</td>
                    <td>Karthikeyan C</td>
                    <td>98.5 F</td>
                    <td>11/04/2023</td>
                    <td>2012083@nec.edu.in</td>
                    <td>graph</td>
                </tr>
                <tr>
                    <td>2012083</td>
                    <td>Karthikeyan C</td>
                    <td>98.5 F</td>
                    <td>11/04/2023</td>
                    <td>2012083@nec.edu.in</td>
                    <td>graph</td>
                </tr>
                <tr>
                    <td>2012083</td>
                    <td>Karthikeyan C</td>
                    <td>98.5 F</td>
                    <td>11/04/2023</td>
                    <td>2012083@nec.edu.in</td>
                    <td>graph</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
