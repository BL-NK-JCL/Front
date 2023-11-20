import React from 'react'
import "./bluelight.css"

function main() {
  return (
	<div>
		<div class="left-section">
            <div class="service-name">BL!NK</div>
            <div class="Auto-Bluelight">
                <img class="button_img" src="/images/auto-bluelight-menu-btn.png"/>
                <button class="Auto-Bluelight-Button">Auto BlueLight</button>
            </div>
            <div class="Alarms">
                <img class="button_img" src="/images/alarm-btn.png" />
                <button class="Auto-Bluelight-Button">Alarms</button>
            </div>
            <div class="data">
                <img class="button_img" src="/images/data-btn.png" />
                <button class="Auto-Bluelight-Button">Eye Data Care</button>
            </div>
        </div>

		
        <div class="right-section">
            <div class="level-zero">
                <div class="right-box">
                    <button class="back-btn">
                        <img class="back-btn-img" src='/images/backButton.png' />
                    </button>
                    <div class="main-text">
                        <div class="eng-main-text">Start Bluelight!</div>
                        <div class="kor-main-text">자동 블루라이트 활성화</div>
                    </div>
                </div>
                <div class="bg-rectagle">
                    <div class="top-text">사용자 설정 시간</div>
                    <div class="bottom-text">
                        한계 눈깜박임 시간을 설정해 주세요.
                    </div>
                </div>
            </div>
            <div class="average-blink-text">
                정상적인 평균 눈깜박임 시간은 분당 26회 입니다.
            </div>
            <div class="level-one">
                <button class="sec-btn">5초</button>
                <button class="sec-btn">10초</button>
                <button class="sec-btn">15초</button>
                <button class="sec-btn">20초</button>
            </div>
            <div class="level-two">
                <button class="start-btn" onclick="startBlueLight()">
                    시작하기
                </button>
            </div>

            <div class="processBluelight show">
                <div class="process-text">블루라이트가 실행 중입니다.</div>
                <div class="process-end-btn">
                    <button class="end-btn" onclick="goBackBlueLightMain()">
                        종료하기
                    </button>
                </div>
            </div>
        </div>
	</div>
  )
}

export default main