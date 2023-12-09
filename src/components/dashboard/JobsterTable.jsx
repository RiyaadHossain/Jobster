export default function JobsterTable({ columns, dataSource }) {
  return (
    <table className="w-full">
      {columns && (
        <thead>
          <tr className="text-left border-b border-black text-accent font-medium [&>*]:p-3 [&>*]:text-sm [&>*]:font-medium">
            {columns.map((column) => (
              <th className={column.className}>{column.title}</th>
            ))}
          </tr>
        </thead>
      )}
      <tbody>{dataSource}</tbody>
    </table>
  );
}
