# HaruGungang 
## 1. 프로젝트 개요
* 과제명 : 건강기능식품정보 및 의약품개요정보 API를 활용한 영양제 정보 제공 반응형 웹서비스
* 프로젝트 기간 : 2023.05.27 ~ 2023.06.27
* 프로젝트 설명 : 영양제를 섭취하거나 섭취하고자 하는 소비자가 필요로하는 (성분, 주의사항, 섭취방법 등)을 직관적이면서도 쉬운 UI로 제공하는 영양제 정보 제공 웹사이트 개발

## 2. 시연영상
https://www.youtube.com/watch?v=mRnVtz-5ddc

## 3. 주요기능
* 간단 설문조사를 통한 영양성분 추천
* 크롤링을 통한 영양 성분 정보 수집 > 데이터 가공하여 화면 구현
* 네이버 쇼핑 API를 활용하여 해당 영양성분에 대한 상위 랭킹 제품 리스트업 및 제품 상세 정보 제공
* 제품 찜하기 후 장바구니에 담기 > 그래프, 테이블을 활용하여 제품 비교
* SNS 소셜 로그인 (네이버, 카카오, 구글)
<br><br>
## 4. 사용언어 및 도구
![image](https://github.com/sin6338ki/HaruGungang/assets/130349912/b95be808-43bf-4e58-9e5e-06b3cb478273)

## 5. 웹구성도
![image](https://github.com/sin6338ki/HaruGungang/assets/130349912/60b926e3-5d15-455d-bfc2-dcbad54e55c8)

## 6. 담당 역할
  * 프로젝트 팀장, **프로젝트 총괄 및 결과 발표**
  * 기획 및 목업 제작
  * 리액트 템플릿 적용 : 구 문법 적용에서 최신 문법 적용 (react-router-dom 5version >> 6version)
  * front-end & back-end
    * 설문조사 페이지 : 설문조사 진행, 결과(영양성분 추천) 기능 및 화면 구현
      1) 사용자에게 연령, 성별을 입력받고, 네이버 데이터랩에서 제공하는 데이터를 활용하여 해당 연령, 성별대가 많이 검색한 영양성분 3가지를 추천함  
![image](https://github.com/sin6338ki/HaruGungang/assets/130349912/adc9b808-9972-4007-a37e-7d7a38281b5f)

    * 메인 페이지 : 성별, 연령 선택 필터 기능 구현, 필터 선택 후 성별/연령별 추천 영양 성분 파이차트로 보여주는 기능 구현
![image](https://github.com/sin6338ki/HaruGungang/assets/130349912/f41567bb-df93-4bf1-8d69-0af3d3977622)

    * 영양성분 상세 페이지 : 영양성분 DB에서 정보를 불러와 화면에 카드 형식으로 구현
![image](https://github.com/sin6338ki/HaruGungang/assets/130349912/918445c8-d04c-4e18-b07e-61a623eb163e)

    * 제품 상세페이지 : 제품 DB에서 정보를 불러와 카드 형식으로 화면 구현, 찜하기 버튼 클릭시 위시리스트에 저장되도록 기능 구현 및 DB 저장, 찜하기 취소 기능 구현
![image](https://github.com/sin6338ki/HaruGungang/assets/130349912/4a74e051-3b3c-41e9-b00b-09f93ee54593)

    * 위시 리스트 : DB에 저장된 위시리스트를 불러와 카드 형태로 화면 구현, 각 제품을 기능성별로 분류하여 배치
     1) 사용자가 제품 찜하기를 클릭했을 때 찜목록에 해당 제품을 저장
     2) 데이터베이스에 찜목록 엔터티를 추가하고, 사용자의 id와 제품 id만을 저장하여 연관관계를 활용해 제품 테이블에서 제품 정보를 조회할 수 있도록 하였음 
![image](https://github.com/sin6338ki/HaruGungang/assets/130349912/bfb946f2-9baf-47a6-8ca5-decff25d3c38)

    * 동일 영양성분군 비교하기 & 서로 다른 영양성분 종합 정보 조회 : 위시리스트에서 체크박스로 선택한 1~3개의 상품을 하나의 페이지에서 비교할 수 있도록 화면 구현, DB에 저장된 정보를 recharts 라이브러리로 구현할 수 있도록 데이터 가공, recharts 및 테이블 활용하여 제품 비교 페이지 구현
![image](https://github.com/sin6338ki/HaruGungang/assets/130349912/52154040-5659-45ae-bbea-24ecf7de00dc)
![image](https://github.com/sin6338ki/HaruGungang/assets/130349912/f1acd4c5-72f3-46ae-b9a3-10b07803dd0b)


## 7. 트러블슈팅
### 7-1) react 템플릿 적용시 react-router-dom 구버전 설치로 구문법으로 작성된 코드
  * 해결방안 : 기존 버전 삭제 후 6버전 설치 후 ver6에 맞는 문법으로 코드 변경
![image](https://github.com/sin6338ki/HaruGungang/assets/130349912/1099b857-ff9b-43e0-94f8-ae4d20322b5a)

  
