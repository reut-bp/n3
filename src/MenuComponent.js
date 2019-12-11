import React from 'react'
import { Icon, Menu } from 'semantic-ui-react'
import './Menu.css';
import { Button, Divider } from 'semantic-ui-react'

export default class MenuComponent extends React.Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
    <div className="Menu">
      <Menu compact icon='labeled' widths='4'>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
          <Icon name='home' />
          Home
        </Menu.Item>

        <Menu.Item
          name='upload'
          active={activeItem === 'upload'}
          onClick={this.handleItemClick}
        >
          <Icon name='upload' />
          Upload
        </Menu.Item>

        <Menu.Item
          name='bomb'
          active={activeItem === 'bomb'}
          onClick={this.handleItemClick}
        >
          <Icon name='bomb' />
          Busted
        </Menu.Item>

        <Menu.Item
          name='setting'
          active={activeItem === 'setting'}
          onClick={this.handleItemClick}
        >
          <Icon name='setting' />
          Setting
        </Menu.Item>

      </Menu>
      </div>
    )
  }
}