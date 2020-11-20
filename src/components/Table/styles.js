import styled from 'styled-components'
import colors from '../../utils/colors'
import fonts from '../../utils/fonts'

export const TableWrap = styled.div`
  display: block;
  max-width: 100%;
  overflow-x: auto;
  background: ${colors.white};
  border-radius: 10px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
`

export const TableStyle = styled.table`
  width: 100%;
`

export const THead = styled.thead``

export const TBody = styled.tbody``

export const THeadRow = styled.tr`
  background: ${colors.tertiary};
  border-radius: 10px 10px 0 0;
  min-height: 60px;
`

export const THeader = styled.th`
  padding-left: 20px;
  font-family: ${fonts.ubuntuRegular};
  font-size: 14px;
  line-height: 18px;
  color: ${colors.dark};
  text-align: ${({ align }) => (align ? align : 'left')};
  display: flex;
  align-items: center;
  justify-content: ${({ align }) =>
    align
      ? align === 'right'
        ? 'flex-end'
        : align === 'left'
        ? 'flex-start'
        : align === 'center'
        ? 'center'
        : 'flex-start'
      : 'flex-start'};

  &:last-child {
    padding-right: 20px;
  }

  &:first-child {
    border-radius: 10px 0 0 10px;
  }

  &:last-child {
    border-radius: 0 10px 10px 0;
    padding-right: 20px;
  }
`

export const TBodyRow = styled.tr`
  cursor: ${({ hasClick }) => (hasClick ? 'pointer' : 'initial')};

  border-bottom: 1px solid ${colors.dark};

  &:last-child {
    border-bottom: none;
  }
`

export const TData = styled.td`
  min-height: 60px;
  padding-left: 20px;
  vertical-align: middle;
  font-family: ${fonts.ubuntuRegular};
  font-size: 14px;
  line-height: 18px;
  color: ${colors.darkGray};
  text-align: ${({ align }) => (align ? align : 'left')};
  display: flex;
  align-items: center;

  justify-content: ${({ align }) =>
    align
      ? align === 'right'
        ? 'flex-end'
        : align === 'left'
        ? 'flex-start'
        : align === 'center'
        ? 'center'
        : 'flex-start'
      : 'flex-start'};

  &:last-child {
    padding-right: 20px;
  }
`

export const SortArrowStyle = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 5px;
`

export const TDLoading = styled.td`
  background: ${colors.light};
  height: 61px;
  padding: 0 20px;
  vertical-align: middle;
  font-family: 'Itau Text Regular';
  font-size: 14px;
  line-height: 18px;
  color: ${colors.darkGray};
  text-align: ${({ align }) => (align ? align : 'left')};
  border-radius: 10px;
`
