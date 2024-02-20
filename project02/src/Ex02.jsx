import React from 'react'
import Ex02MemberBox from './components/Ex02MemberBox'

function Ex02() {
    const containerStyle = {
        display: 'flex',
        justifyContent: 'space-around', // 컨테이너 내의 공간을 주변에 분산 배치
        padding: '1rem', // 전체 컨테이너에 대한 패딩
      };
    
      const memberBoxStyle = {
        flex: '1', // 자식 요소들이 공간을 동일하게 차지하도록 함
      };
  return (
    <div style={containerStyle}>

        <Ex02MemberBox style={memberBoxStyle} name="정윤오" age="20" sex="남"/>
        <Ex02MemberBox style={memberBoxStyle} name="임다이" age="20" sex="여"/>
        <Ex02MemberBox style={memberBoxStyle} name="안서혁" age="20" sex="남"/>
        <Ex02MemberBox style={memberBoxStyle} name="이상훈" age="20" sex="남"/>

    </div>
  )
}

export default Ex02