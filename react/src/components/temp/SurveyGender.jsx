/* eslint-disable */
import React from 'react';
import { Button, Row, Col, Container } from 'reactstrap';
import male from '../../assets/scss/icons/use/male.png';
import female from '../../assets/scss/icons/use/female.png';

const SurveyGender = ({selectGender, submitGender}) => {

    return (
        // <div className="wrapper">
            <div className="middle-spacer survey-year" id="card-component">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h2 className="title font-bold">성별을 알려주세요.</h2>
                        </Col>
                    </Row>
                </Container>
                <br/><br/>
                <div>
                <div id="gender-select">
                    <Button type="button" className="gender-btn" color="outline-success" name="gender" value="m" onClick={selectGender}><img src={male} width='100px' id="m"></img><br/><br/>남성</Button>
                    <Button type="button" className="gender-btn" color="outline-success" name="gender" value="w" onClick={selectGender}><img src={female} width='100px' id="w"></img><br/><br/>여성</Button>
                </div>
                  </div>
                <Button color="success" size='lg' onClick={submitGender}>다음</Button>
                </div>
        // </div>
    );
}

export default SurveyGender;
