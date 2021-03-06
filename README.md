# wanted_pre_onboarding

## APP 컴포넌트

- 작성한 과제를 한눈에 볼 수 있도록 과제내용들을 BOX컴포넌트 단위로 import시켰다.

## 1.Toggle

### 1) 구현법

- 클릭시 변경되는 사항으로는 총 3가지가있었다.
  - 토글 배경색
  - 토글 안 switch버튼 위치
  - on/off 텍스트

### 2) 구현과정

#### i) 토글 배경색

- 변경 전/후의 상태를 관리하는 active변수를 선언하고 onClick이벤트애 active를 업데이트시키는 setActive함수를 !연산자로 인자를 토글시켜 on/off를 설정해준다.

#### ii) 토글 안 switch버튼 위치

- 토글 배경색과 동일한 상태를 통해 관리한다.
- position 속성으로 새로운 layout를 그리는것보단 translate속성으로 단순히 위치만 변경시키기위해 translate특성을 고려하여 box컴포넌트로 한번더 감싸서 이동시켰다.

#### iii) on/off 텍스트

- 마찬가지로 active상태를 통해 3항 연산자로 보여질 문장을 표현했다.
  <br></br>
  <br></br>

## 2. Modal

### 1) 구현법

- 모달의 상태를 나타내는 isOpen 변수를통해 제어한다.
- 최초에 open버튼과 모달을 띄웠을떄 closed버튼에 동일한 handleModal함수를 onClick함수에 달아준다.
- handleModal함수에서 !연산자를통해 모달의 상태를 true/false로 관리한다.

### 2) 구현과정중 어려웠던 점

#### i) 모달 바탕화면 투명도 제어하기

- 최초엔 css의 opacity 속성으로 모달의 배경색을 제어하려했으나, 이렇게되면 모달메세지또한 투명도가 적용되는 문제가 발생하여 배경색상을 rgba속성으로 투명도를 포함한 색상을 적용했다.
  <br></br>
  <br></br>

## 3. tab

### 1) 구현법

- 탭의 이름(title), 보여줄 컨텐츠(content), 배경색 유무(isActive)의 총 3가지를 하나의 객체로 표현한 배열을 정의.
- 이후 배열을 map함수를 이용하여 순회하며 각 탭들을 return.
- 각탭에 1.동적css, 2.탭에해당하는 컨텐츠를 보여줄 변수들을 핸들링하는 함수 부여.

### 어려웠던점

#### 1) 새로운 탭을 눌렀을때마다 동적 css적용하기.

- 새로운 탭을 클릭할떄마다, map함수를 실행시켜 isActive를 전부 false로 바꿔준다.
- 이후 클릭했을시 핸들링함수에 전달되는 인덱스 값을 사용하여 해당하는 탭의 isActive를 true값으로 변경시켜준다.

#### 2) 눌렀을떄 해당하는 탭의 내용을 보여주기.

- 이부분은 두가지로 생각해봤다.
  - 1. useTabs커스텀훅 사용하기
    - useState를통해 현재 선택된 인덱스를관리하고 탭의 정보를 리턴하는 훅.
    - 커스텀훅을 사용함으로써 재사용성을 높힘.(최초 인덱스와 배열만 인자로 관리.)
  - 2. 선택된 인덱스를 관리하는 currentIdx 설정.
    - 이 currentIdx를 Tab컴포넌트 안에서 직접 관리함으로써 배열에 직접접근하여 해당하는 content를 보여준다.




# 구현과제 링크
- https://gangpyono.github.io/wanted_pre_onboarding/
- local에서 동작방법
  ```
  yarn install
  yarn start
  ```
