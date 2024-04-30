import React from "react";

function Transaction({date, description, category, amount}) {
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td><button type="button" class="px-4 py-2 text-sm font-medium 
      text-gray-900 bg-transparent border border-gray-900 rounded-s-lg 
      hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 
      focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:
      text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
    delete
  </button></td>
    </tr>
  );
}

export default Transaction;