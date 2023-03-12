import { FileBlockProps, getLanguageFromFilename } from "@githubnext/blocks";
import { Button, Box } from "@primer/react";
import { useEffect, useState } from "react";
import "./index.css";

export default function ExampleFileBlock(props: FileBlockProps) {

  const [postBody, setPostBody] = useState<string>();
 
  const getData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await res.json();
    console.log(data)
    setPostBody(data.body)
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>Test {postBody}</div>
  );
}
