import { colors, Colors } from '@/styles/colorPalette'
import styled from '@emotion/styled'

interface TagProps {
  color?: string
  backgroundColor?: string
  size?: 'medium' | 'large'
}
const Tag = styled.span<TagProps>(
  ({
    color = colors.white,
    backgroundColor = colors.blue,
    size = 'medium',
  }) => ({
    fontSize: size === 'medium' ? '11px' : '12px',
    padding: size === 'medium' ? '4px 5px' : '5px 6px',
    fontWeight: 'bold',
    borderRadius: '2px',
    textAlign: 'center',
    color: color in colors ? colors[color as Colors] : color,
    backgroundColor:
      color in colors ? colors[backgroundColor as Colors] : backgroundColor,
  }),
)

export default Tag
