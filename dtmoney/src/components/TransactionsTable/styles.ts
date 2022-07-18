import styled from "styled-components";

export const Container = styled.main`
    margin-top: -3rem;
    
    table {
        width: 100%;
        border-spacing: 0 0.5rem;
        max-width: 1120px;
        margin: 0 auto;
        padding: 1.5rem 1rem;

        th {
            color: var(--text-body);
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
        }

        td {
            color: var(--text-body);
            font-weight: 400;
            padding: 1rem 2rem;
            background: var(--shape);
            border: 0;
            border-radius: 0.25rem;

            &:first-child {
                color: var(--text-title);
            }

            &.deposit {
                color: var(--green);
            }

            &.withdraw {
                color: var(--red);
            }
        }
    }
`;