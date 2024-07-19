import { StyledButton } from './Button.styeld'

export default function Button({ text, onClick }: { text: string; onClick: () => void }) {
    return <StyledButton onClick={onClick}>{text}</StyledButton>
}
