import React, { useEffect, useState } from 'react'
import { Row, Col, Container, Card, CardBody } from 'reactstrap';
import FloatDetailFunc from './FloatDetailFunc';

const DetailFunc = ({title, setTitle, nutri, setNutri, effect, setEffect, func, btnClick, visible, setVisible}) => {



    
    useEffect(()=>{
        if(title === "혈행흐름개선"){
            setNutri("오메가3")
            setEffect("오메가3는 생선이나 해조류에서 추출한 여러 종류의 불포화지방산을 부르는 말이에요. 그 중 가장 중요한 것은 EPA와 DHA에요. EPA는 간에서 중성지방 합성을 줄여 혈중 중성지방 농도를 낮춰주고, 혈액순환 개선에 도움을 줘요. DHA는 뇌, 신경 조직, 망막의 중요 구성 성분으로 뇌세포를 손상시키는 물질을 감소시켜, 기억력을 높이는 데 도움을 줄 수 있어요. 또, 건조한 눈을 개선해주는 효과도 있답니다!")
        }else if(title === "장 건강"){
            setNutri("유산균")
            setEffect("우리 몸에 살고 있는 100개가 넘는 균주 중에서 몸에 좋은 균을 '유익균' 또는 '프로바이오틱스'라고 해요. 반대로 나쁜 영향을 주는 균을 '유해균'이라고 하죠. 건강한 장 환경과 원활한 배변활동을 위해서는 여러 종류의 균들이 균형을 이뤄야해요. '유산균'은 장 면역을 조절하여 장 건강에 도움을 준답니다!")
        }else if(title === "간 건강"){
            setNutri("밀크씨슬")
            setEffect("'밀크씨슬'은 활성산소로부터 간 세포를 보호하는 항산화 작용이 있어서 간 건강에 도움을 줄 수 있어요. 또한 단백질 합성을 증가시키고, 간 성장세포의 섬유화를 억제하는 효과가 있다고 알려져 있답니다!")
        }else if(title === "눈 건강"){
            setNutri("루테인")
            setEffect("시력에 중요한 '황반색소' 밀도를 유지해, 눈 건강에 도움이 되는 영양소에요. '황반'은 빛을 인식하는 시세포가 가장 많이 모여있는 곳이에요. 이 부위가 빛에 손상되지 않도록 항산화작용을 하는 색소들이 황반에 많이 모여 있는데, '루테인'이 그 중 하나에요.")
        }else if(title === "관절/뼈 건강"){
            setNutri("보스웰리아")
            setEffect("염증 반응을 조절해, 관절을 건강하게 유지하도록 도와주는 영양소입니다. 골 흡수 및 골 형성의 균형을 통해 뼈 기능을 개선하는 효과가 있어요!")
        }else{
            setNutri("비타민C")
            setEffect("세포를 늙게 만드는 '활성산소'를 없애주는 대표적인 항산화제에요. 콜라겐 합성을 위해서도 필요하기 때문에 피부를 건강하게 만드는데 효과적인 영양소에요. 잇몸과 같이 손상을 입기 쉬운 신체조직을 건강하게 지켜줄 수 있어요. 철분의 흡수율을 높여, 혈액을 통해 산소를 전달하는 적혈구를 건강하게 만들 수 있도록 도와줘요. 피부를 탱탱하게 유지하는 콜라겐을 만드는 것을 돕고, 기미를 만드는 멜라닌이 만들어지지 않도록 막아줘요. 다양한 면역 관련 세포 기능을 도와 면역 기능을 유지하는데 도움을 준답니다!")
        }
    },[title])

  return (
    <div >
        <Row>
        {func.map((item)=>(
            <Col col-md-3 col-sm-3 col-xs-6>
            <Card className="card-shadow p-10" outline="true" color="white" >
                <a href="#" className="img-ho" onClick={(e)=>{
                    setVisible(!visible)
                    setTitle(e.target.name);
                }}>
                    <img className="card-img-top" alt="wrappixel kit" src={item.url} name={item.effect}/>
                    </a>
                {!visible && <CardBody>
                <h6 className="title font-bold-center">{item.effect}</h6> 
                </CardBody>}
            </Card>
        </Col>
        ))}
        {visible && <Col xl="6" className='title font-bold'><FloatDetailFunc title={title} nutri={nutri} effect={effect.replace('|', '.')} /></Col>}
        </Row>




    </div>
  )
}

export default DetailFunc