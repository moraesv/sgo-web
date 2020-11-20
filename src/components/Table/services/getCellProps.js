export default function getCellProps(cell) {
  return cell.getCellProps([
    {
      ...(cell.column && cell.column),
      style: {
        color: cell.column.color,
        ...(cell.column.style && cell.column.style),
      },
    },
  ])
}
