import { flexRender } from "@tanstack/react-table";
import type { Row } from "@tanstack/react-table";
import "./TableBody.scss";

type TProps<TColumn extends object> = {
  rows: Row<TColumn>[];
};

export const TableBody = <T extends object>({ rows }: TProps<T>) => {
  return (
    <tbody className="TableBody-TBody">
      {rows.map((row) => {
        return (
          <tr className="TableBody-TR" key={row.id}>
            {row.getVisibleCells().map((cell) => {
              return (
                <td
                  className="TableBody-TD"
                  key={cell.id}
                  style={{
                    width: cell.column.getSize(),
                    minWidth: cell.column.getSize(),
                    maxWidth: cell.column.getSize(),
                  }}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
};
