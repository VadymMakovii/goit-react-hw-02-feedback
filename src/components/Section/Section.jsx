import PropTypes from 'prop-types';
import { Wrapper, Title, Children } from "./Section.styled";


export const Section = ({ title, children }) => {
    return (
        <Wrapper>
            <Title>{title}</Title>
            <Children>{children}</Children>
        </Wrapper>
    );
};


Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
}