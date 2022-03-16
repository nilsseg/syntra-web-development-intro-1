export const useUrlPicker = () => {
  const [url, setUrl] = useState("");

  return {
    selectedUrl: "",
    picker: (
      <>
      <button onClick = {()=> setUrl("https://picsum.photos/id/237/200/300")}>Click me</button>
      <button onClick = {()=> setUrl("https://picsum.photos/id/238/200/300")}>No click me</button>
      <button onClick = {()=> setUrl("https://picsum.photos/id/239/200/300")}>I ies die best</button>
      </>
    )
  }
}