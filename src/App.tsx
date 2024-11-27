import './App.css'
// @ts-ignore
import LeetCodeCalendar from 'leetcode-calendar'

function App() {
  const exampleTheme = {
    light: [
      'rgb(0, 0, 0)',
      'rgba(192, 132, 245, 0.44)',
      'rgba(192, 132, 245, 0.6)',
      'rgba(192, 132, 245, 0.76)',
      'rgba(192, 132, 245, 0.92)',
    ],
    dark: [
      'rgb(235, 235, 235)',
      'rgba(192, 132, 245, 0.44)',
      'rgba(192, 132, 245, 0.6)',
      'rgba(192, 132, 245, 0.76)',
      'rgba(192, 132, 245, 0.92)',
    ],
  }
  const queryString = window.location.search;
  // Create a URLSearchParams object
    const urlParams:URLSearchParams = new URLSearchParams(queryString);
    const userNameToUse:string = urlParams == null ? "": urlParams.get('username')?.toString()!
    //ie localhost:5173/LeetcodeCal/?username=Peter-Kang
  
  return (
    <>
     <LeetCodeCalendar
        username={userNameToUse} // Replace with your LeetCode username
        blockSize={15} // Optional: Size of each block in pixels (default: 15)
        blockMargin={5} // Optional: Margin between blocks in pixels (default: 5)
        fontSize={16} // Optional: Font size of the text within blocks (default: 16)
        theme={exampleTheme} // Optional: A custom theme object to style the calendar
        style={{ maxWidth: '1100px' }} // Optional: Inline styles for the calendar container
      >
      </LeetCodeCalendar>
    </>
  )
}

export default App
