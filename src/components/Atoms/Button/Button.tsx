import { StyledButton } from './Button.styeld'

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'outline'
  children: React.ReactNode
  onClick?: () => void
}

// 버튼 컴포넌트
export const Button = ({ variant = 'primary', children, ...props }: ButtonProps) => {
  return (
    <StyledButton variant={variant} {...props}>
      {children}
    </StyledButton>
  )
}
