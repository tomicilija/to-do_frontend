import React from 'react'
import { useContext, useEffect, useState, useCallback } from 'react'
import {
  Container,
  Logo,
  Menu,
  Home,
  ButtonWrapper,
  Button,
  ButtonLoggedin,
  MobileLink,
  DesktopLink,
  BurgerMenu,
  AddMobile,
  BorderlessButton,
  IconWrapper,
  Wrapper,
  ProfilePicture,
} from './Navbar.style'
import { useLocation, Link } from 'react-router-dom'
import ProfileSettings from '../modals/user-info/UserInfo'
import UserInfo from '../modals/user-info/UserInfo'
import AddTask from '../modals/tadd-task/AddTask'

const Navbar = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState<boolean>(false)
  const [isUserInfoModalOpen, setIsUserInfoModalOpen] = useState<boolean>(false)
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState<boolean>(false)
  const [image, setImage] = useState<string>()
  const openUserInfoModal = () => {
    setIsUserInfoModalOpen((prev) => !prev)
  }
  const openAddTaskModal = () => {
    setIsAddTaskModalOpen((prev) => !prev)
  }
  
  return (
    <Container>
      <Wrapper>
        <Logo className={isBurgerMenuOpen ? 'hideLogo' : 'showLogo'}>
          <Link to='/' style={{ textDecoration: 'none' }}>
            To<span>Do</span>
          </Link>
        </Logo>
        <BurgerMenu onClick={() => setIsBurgerMenuOpen(!isBurgerMenuOpen)}>
          <span className={isBurgerMenuOpen ? 'xmark' : 'burger'}></span>
          <span className={isBurgerMenuOpen ? 'xmark' : 'burger'}></span>
          <span className={isBurgerMenuOpen ? 'xmark' : 'burger'}></span>
        </BurgerMenu>
        <Menu className={isBurgerMenuOpen ? 'showMenuNav' : 'hideMenuNav'}>
          <ButtonWrapper>
            <div onClick={() => setIsBurgerMenuOpen(!isBurgerMenuOpen)}>
              <MobileLink onClick={openUserInfoModal}>
                <h5>User</h5>
              </MobileLink>
            </div>
            <div onClick={() => setIsBurgerMenuOpen(!isBurgerMenuOpen)}>
              <MobileLink onClick={openAddTaskModal}>
                <h5>Tasks</h5>
              </MobileLink>
            </div>
            <DesktopLink onClick={openAddTaskModal}>
              <p>Tasks</p>
            </DesktopLink>
            <DesktopLink onClick={openUserInfoModal}>
              <p>User</p>
            </DesktopLink>
          </ButtonWrapper>
        </Menu>
        <UserInfo
          isUserInfoOpen={isUserInfoModalOpen}
          setIsUserInfoOpen={setIsUserInfoModalOpen}
        />
        <AddTask
          isAddTaskOpen={isAddTaskModalOpen}
          setIsAddTaskOpen={setIsAddTaskModalOpen}
        />
      </Wrapper>
    </Container>
  )
}
export default Navbar