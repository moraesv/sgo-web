/* import styled from 'styled-components'
import { ArrowRightIcon, ArrowLeftIcon, BulletsIcon } from '~/styles/Icons'
import colors from '~/utils/colors'
import fonts from '~/utils/fonts'

export const PaginationWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  flex-shrink: 0;
`

export const PaginationStyle = styled.div`
  padding: 30px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: fit-content;
  margin: 0 auto;
`

export const PreviousButton = styled.button`
  width: 30px;
  height: 30px;
  background-image: url(${ArrowLeftIcon});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 50px 50px;
  margin-right: 10px;
  flex-shrink: 0;
`

export const NextButton = styled.button`
  width: 30px;
  height: 30px;
  background-image: url(${ArrowRightIcon});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 50px 50px;
  flex-shrink: 0;
`

export const PageButton = styled.button`
  width: 44px;
  height: 44px;
  border: 4px solid ${colors.light};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.black};
  font-family: ${fonts.displayRegular};
  font-size: 16px;
  line-height: 21px;
  text-align: center;
  margin-right: 10px;
  flex-shrink: 0;

  ${({ active }) =>
    active
      ? `
  border: 4px solid ${colors.black};
  background: ${colors.black};
  color: ${colors.white};
  `
      : ``}
`

export const Bullets = styled.div`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  flex-shrink: 0;

  background-image: url(${BulletsIcon});
  background-position: center 20px;
  background-repeat: no-repeat;
  background-size: 28px 28px;
`
 */
