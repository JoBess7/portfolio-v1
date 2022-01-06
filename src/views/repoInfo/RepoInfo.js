import styled from "styled-components";

const Info = styled.div`
    color: ${props => props.theme.title}
`;

export default function RepoInfo() {
    return (
        <Info className="repo-info">
            Built by Jonathan Bessette
        </Info>
    );
}