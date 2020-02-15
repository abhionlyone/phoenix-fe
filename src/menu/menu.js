import React from "react";
import { Container, Image, Menu } from "semantic-ui-react";
import logo from '../assets/logo.png'
import {Link} from 'react-router-dom'
export default () => (
  <Menu>
    <Container>
      <Menu.Item as="a" header>
        <Image size="small" src={logo} />
      </Menu.Item>
      <Menu.Menu position="right">
        <Link to='/' className='item'>
          Home
        </Link>
        <Menu.Item as="a" name="item 2">
          link 2
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
);
