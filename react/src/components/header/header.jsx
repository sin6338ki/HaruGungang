/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Container, NavbarBrand, Navbar, Nav, NavItem, NavbarToggler, Collapse } from 'reactstrap';

import logo from '../../assets/images/logos/하루건강로고-removebg-preview.png';
import { useLocation, useNavigate } from 'react-router';


const Header = () => {
    const location = useLocation()
    const nav = useNavigate()
    
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    
    // 로그인 체크 변수
    const [isLogin, setIsLogin] = useState(false)

    // 로그인 여부 확인
    useEffect(()=>{
        if(sessionStorage.getItem('id')){
            console.log('로그인 검사', sessionStorage.getItem('id'));
            setIsLogin(true)
        } else {
            setIsLogin(false)
        }
        console.log('로그인', isLogin);
    }, [])

    // 로그아웃 버튼 클릭
    const logoutClick = () => {
        console.log('로그아웃 버튼 클릭!');
        sessionStorage.clear()
        console.log('로그아웃, 세션 삭제 완료');
        setIsOpen(!isOpen)
        window.location.href = 'http://localhost:3000/haru/main'
    }

    /*--------------------------------------------------------------------------------*/
    /*To open NAVBAR in MOBILE VIEW                                                   */
    /*--------------------------------------------------------------------------------*/

    return (
        <div className="topbar" id="top">
            <div className="header6">
                <Container className="po-relative">
                    <Navbar className="navbar-expand-lg h6-nav-bar">
                    <NavbarBrand><img Src={logo} width='30%' alt="HARUGUNGANG" onClick={()=>{window.location.href="/haru/preview"}}/></NavbarBrand>
                        
                        {
                            isLogin == false ? (
                                <>
                                    <NavbarToggler onClick={toggle}><span className="ti-menu"></span></NavbarToggler>
                                    <Collapse isOpen={isOpen} navbar className="hover-dropdown font-14 ml-auto" id="h6-info">
                                        <Nav navbar className="ml-auto">
                                            <NavItem>
                                                <Link className="nav-link" to={"/haru/login/login"}>
                                                    LOGIN
                                                    </Link>
                                            </NavItem>
                                            <NavItem>
                                                <Link className="nav-link" to={"/haru/join"}>
                                                    JOIN
                                                    </Link>
                                            </NavItem>
                                        </Nav>
                                    </Collapse>
                                </>
                            ) :
                            (
                                <>
                                    <NavbarToggler onClick={toggle}><span className="ti-menu"></span></NavbarToggler>
                                    <Collapse isOpen={isOpen} navbar className="hover-dropdown font-14 ml-auto" id="h6-info">
                                        <Nav navbar className="ml-auto">
                                            <NavItem>
                                                <Link className="nav-link" to={"/haru/mypage"}>
                                                    MYPAGE
                                                    </Link>
                                            </NavItem>
                                            <NavItem>
                                                <Link className="nav-link" to={"/haru/wishlist"}>
                                                    WISHLIST
                                                    </Link>
                                            </NavItem>
                                            <NavItem>
                                                <Link onClick={logoutClick} className="nav-link" to={"/haru/preview"}>
                                                    LOGOUT
                                                    </Link>
                                            </NavItem>
                                        </Nav>
                                    </Collapse>
                                </>
                            )
                        }
                    </Navbar>
                </Container>
            </div>
        </div>
    );

}
export default Header;
