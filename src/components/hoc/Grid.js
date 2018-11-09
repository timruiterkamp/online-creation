import React from 'react';
import styled from 'styled-components';

const Grid = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: 0.1fr 1fr;
`

export default function GridWrapper(props) {
    return (
        <Grid>
            {props.children}
        </Grid>
    )
}