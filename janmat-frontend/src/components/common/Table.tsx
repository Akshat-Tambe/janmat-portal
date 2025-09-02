import React from 'react';

interface TableProps<T> {
  columns: (keyof T)[];
  data: T[];
}

const Table = <T extends Record<string, unknown>>({ columns, data }: TableProps<T>) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 rounded-md">
        <thead className="bg-primary text-white">
          <tr>
            {columns.map((col) => (
              <th key={String(col)} className="py-2 px-4 text-left">{String(col)}</th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, idx) => (
            <tr key={idx}>
              {columns.map((col) => (
                <td key={String(col)} className="py-2 px-4">
                  {String(row[col])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
