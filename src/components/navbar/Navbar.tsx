import React, { useState } from 'react'
import {
  Container,
  Logo,
  Menu,
  ButtonWrapper,
  MobileLink,
  DesktopLink,
  BurgerMenu,
  Wrapper,
} from './Navbar.style'
import { Link } from 'react-router-dom'
import UserInfo from '../modals/user-info/UserInfo'
import AddTask from '../modals/add-task/AddTask'

const Navbar = () => {
  const userId = localStorage.getItem('userId')
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState<boolean>(false)
  const [isUserInfoModalOpen, setIsUserInfoModalOpen] = useState<boolean>(false)
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState<boolean>(false)
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
            {userId ? (
              <>
                <div onClick={() => setIsBurgerMenuOpen(!isBurgerMenuOpen)}>
                  <MobileLink onClick={openAddTaskModal}>
                    <p>&gt; Add Task</p>
                  </MobileLink>
                </div>
                <DesktopLink onClick={openAddTaskModal}>
                  <p>Add Task</p>
                </DesktopLink>
              </>
            ) : null}
            <div onClick={() => setIsBurgerMenuOpen(!isBurgerMenuOpen)}>
              <MobileLink onClick={openUserInfoModal}>
                <p>&gt; User</p>
              </MobileLink>
            </div>
            <DesktopLink onClick={openUserInfoModal}>
              <p>User</p>
            </DesktopLink>
          </ButtonWrapper>
        </Menu>
        <UserInfo isUserInfoOpen={isUserInfoModalOpen} setIsUserInfoOpen={setIsUserInfoModalOpen} />
        <AddTask isAddTaskOpen={isAddTaskModalOpen} setIsAddTaskOpen={setIsAddTaskModalOpen} />
      </Wrapper>
    </Container>
  )
}
export default Navbar
