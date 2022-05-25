import React from 'react';
import { Container } from 'react-bootstrap';

const Layout = (props) => (
    <Container className="mt-5 pb-5">
        {props.children}
    </Container>
)

export default Layout;
