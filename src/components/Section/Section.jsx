import { Wrapper, Title, Children } from "./Section.styled";


export const Section = ({title, children}) => {
    return (
        <Wrapper>
            <Title>{title}</Title>
            <Children>{children}</Children>
        </Wrapper>
    );
}