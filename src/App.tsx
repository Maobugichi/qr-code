import QRCode from "react-qr-code";
function App() {
  return (
    <>
      <div className="border-gray-400 border  w-[15%] h-[200px] mt-10 ml-10 rounded-lg flex flex-col justify-center gap-1 items-center">
       
        <QRCode size={150} value='https://maobugichi.github.io/wink-and-flirt'/>
        <h2>connect with us</h2>
      </div>
    </>
  )
}

export default App
