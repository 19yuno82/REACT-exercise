import React, {useRef} from 'react'

const Ex08 = () => {

    const iframeRef = useRef();
    const inputRef = useRef();

    const changePdf =()=>{
        // console.log("inputRef",inputRef)
        // console.log("iframeRef",iframeRef)
        if(inputRef.current.value === '첫번째') {
            iframeRef.current.src = "/pdf/pdfFile1.pdf"
        } else if(inputRef.current.value === '두번째'){
            iframeRef.current.src = "/pdf/pdfFile2.pdf"
        }
    }
  return (
    <div>
        <input type='text' ref={inputRef} autoFocus/>
        <button onClick={changePdf}>pdf change</button>
        <iframe 
        title='PDF viewer'
        width="100%"
        height="90%"
        src="" frameborder="0"
        ref={iframeRef}></iframe>
    </div>
  )
}

export default Ex08