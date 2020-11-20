export default function getHeaderProps(column, hasSortBy) {
  return column.getHeaderProps(
    (hasSortBy &&
      !column.disableSort &&
      column.getSortByToggleProps([
        {
          ...(column.header && column.header),
          align: column.align,
          minWidth: column.minWidth,
          width: column.width,
          maxWidth: column.maxWidth,
          style: {
            color: column.header && column.header.color,
            ...(column.header && column.header.style && column.header.style),
          },
        },
      ])) || [
      {
        ...(column.header && column.header),
        align: column.align,
        minWidth: column.minWidth,
        width: column.width,
        maxWidth: column.maxWidth,
        style: {
          color: column.header && column.header.color,
          ...(column.header && column.header.style && column.header.style),
        },
      },
    ]
  )
}
