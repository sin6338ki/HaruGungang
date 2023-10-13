import React from 'react'
import { Card, CardBody } from 'reactstrap';

const FloatDetailFunc = ({title, nutri, effect}) => {
  return (
    <div>
         <Card className="card-shadow p-0">
            <CardBody>
                <div className="p-20">
                    <span className="label label-info label-rounded" class="badge text-bg-success">{title}</span>
                    <h3 className="title font-bold">{nutri}</h3>
                    <p className='font-Pretendard-Regular'>{effect}</p>
                    <a className="btn btn-success btn-md btn-arrow m-t-20" href={`/haru/nutri/${nutri}`}><span>상세 정보 및 제품 보러가기  <i className="ti-arrow-right"></i></span></a>
                </div>
            </CardBody>
        </Card>
    </div>
  )
}

export default FloatDetailFunc