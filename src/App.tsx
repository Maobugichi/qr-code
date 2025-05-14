import QRCode from "react-qr-code";
function App() {
  return (
    <div className="w-full grid place-items-center h-[80vh]">
      <div className="border-gray-400 border  w-[60%] md:w-[18%] h-[260px] md:h-[260px]  rounded-lg flex flex-col justify-center gap-1 items-center">
       
        <QRCode className="w-[90%]" value='https://maobugichi.github.io/wink-and-flirt'/>
        <h2 className="text-lg">connect with us</h2>
      </div>
    </div>
  )
}

export default App
