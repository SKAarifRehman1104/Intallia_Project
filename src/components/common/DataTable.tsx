import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";


export interface Column<T> {
  key: keyof T | string;
  header: React.ReactNode;
  render?: (row: T) => React.ReactNode;
  className?: string;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  rowKey: (row: T) => string;
  selectable?: boolean;
  actions?: (row: T) => React.ReactNode;
}

export function DataTable<T>({
  data,
  columns,
  rowKey,
  selectable = false,
  actions,
}: DataTableProps<T>) {
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedRows([]);
    } else {
      setSelectedRows(data.map(rowKey));
    }
    setSelectAll(!selectAll);
  };

  const handleSelectRow = (id: string) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  return (
    <div className="rounded-md">
      <Table>
        <TableHeader>
          <TableRow className="bg-[#F9FAFB]">
            <TableHead className="px-4">
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAll}
              />
            </TableHead>
            {columns?.map((col) => (
              <TableHead
                key={String(col.key)}
                className={col.className || "text-sm"}
              >
                {" "}
                {col.header}
              </TableHead>
            ))}
            {actions && <th>Action</th>}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((row) => {
            const id = rowKey(row);
            return (
              <TableRow key={id} className="text-sm">
                {selectable && (
                  <td className="px-4">
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(id)}
                      onChange={() => handleSelectRow(id)}
                    />
                  </td>
                )}
                {columns.map((col) => (
                  <TableCell
                    key={String(col.key)}
                    className={col.className || "py-4 text-sm"}
                  >
                    {col.render
                      ? col.render(row)
                      : String(row[col.key as keyof T] ?? "")}
                  </TableCell>
                ))}
                {actions && <TableCell>{actions(row)}</TableCell>}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
