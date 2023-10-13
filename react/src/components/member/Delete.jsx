import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const Delete = () => {

    const nav = useNavigate()

    const [id, setId] = useState('')
    const [pw, setPw] = useState('')

    const deleteClick = () => {        
        console.log('회원탈퇴 클릭!');

        console.log('사용자가 입력 id :', id);
        console.log('사용자가 입력 pw :', pw);
        console.log('세션에 있던 id 값 :', sessionStorage.getItem('id'));
        console.log('세션에 있던 pw 값 :', sessionStorage.getItem('pw'));

        if(id == sessionStorage.getItem('id') && pw == sessionStorage.getItem('pw')){
            axios.get(`http://localhost:8085/haru/delete/${id}`)
            .then(res => {
                console.log(res);
                if (res.data == 1) {
                    alert('회원삭제 성공!')
                    sessionStorage.clear()
                    nav('/haru/preview')
                }
            })
            .catch(e => {
                console.log(e);
            })
        } else {
            alert('아이디 비밀번호를 확인하세요!')
        }
    }

  return (
    <div className='wrapper'>
<div className="spacer" id="forms-component">
    <Container>
        <Row className="justify-content-center">
            <Col md="7" className="text-center">
                <h1 className="title font-bold">회원탈퇴</h1>
            </Col>
        </Row>
    </Container>
</div>
<Container>
    <Row>
            <Form className="row" id="form-center">
                <FormGroup className="col-md-6">
                    <Label htmlFor="id">ID</Label>
                    <Input onChange={e=>{setId(e.target.value)}} type="text" className="form-control" id="id" placeholder="ID" />
                </FormGroup>

                <FormGroup className="col-md-6">
                    <Label htmlFor="password">Password</Label>
                    <Input onChange={e=>{setPw(e.target.value)}} type="password" className="form-control" id="password" placeholder="Password" />
                </FormGroup>
                {/* <FormGroup className="col-md-6">
                    <Label htmlFor="confirmpwd">Confirm Password</Label>
                    <Input type="password" className="form-control" id="confirmpwd" placeholder="Confirm Password" />
                </FormGroup> */}
                <br/><br/>
                <Col className='detailFunc_container'>
                    <Button onClick={deleteClick} className="btn btn-success waves-effect waves-light m-r-10">회원탈퇴</Button>
                    <Button type="reset" className="btn btn-inverse waves-effect waves-light">취소</Button>
                </Col>
            </Form>
    </Row>
</Container>      
    </div>
  )
}

export default Delete