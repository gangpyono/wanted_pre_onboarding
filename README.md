# wanted_pre_onboarding

## APP 컴포넌트

- 작성한 과제를 한눈에 볼 수 있도록 과제내용들을 BOX컴포넌트 단위로 import시켰다.

## 1.Toggle

### 1) 구현법

- 클릭시 변경되는 사항으로는 총 3가지가있었다.
  - 토글 배경색
  - 토글 안 switch버튼 위치
  - on/off 텍스트

#### i) 토글 배경색

- 변경 전/후의 상태를 관리하는 active변수를 선언하고 onClick이벤트애 active를 업데이트시키는 setActive함수를 !연산자로 인자를 토글시켜 on/off를 설정해준다.

#### ii) 토글 안 switch버튼 위치

- 토글 배경색과 동일한 상태를 통해 관리한다.
- position 속성으로 새로운 layout를 그리는것보단 translate속성으로 단순히 위치만 변경시키기위해 translate특성을 고려하여 box컴포넌트로 한번더 감싸서 이동시켰다.

#### iii) on/off 텍스트

- 마찬가지로 active상태를 통해 3항 연산자로 보여질 문장을 표현했다.

## 2. Modal
