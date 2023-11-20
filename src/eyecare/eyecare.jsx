import React from 'react'
import "./eyecare.css"
import { AwesomeButton } from 'react-awesome-button';
import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss';



function eyecare() {

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
                        <div class="eng-main-text">BL!nk Data</div>
                        <div class="kor-main-text">사용자 눈 건강 데이터</div>
                    </div>
                </div>
                <div class="bg-rectagle">
                    <div class="top-text">사용자 눈 깜빡임 데이터</div>
                    <div class="bottom-text">
                        오늘 얼마나 눈을 자주 깜빡였나요?
                    </div>
                </div>
            </div>
            
          
        </div>
	</div>
  )
}

export default eyecare