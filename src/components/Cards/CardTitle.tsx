import Image from "next/image";
import * as Icon from  "phosphor-react"
import { useState } from "react";
import Modal from "../../components/Modal"

interface CardTitleProps extends React.HTMLAttributes<HTMLElement>{
  title: string;
  alt?: string;
  srcimage?: string | StaticImport;
  width?: number;
  height?: number;
  type?: "image" | "color";
  editImage?: boolean;
  handleImg?: Function;
}

export function CardTitle(props: CardTitleProps) {

  const [newImage, setNewImage] = useState(props.srcimage)
 
	


  
  
  function handleImg(srcImg: any) {
    console.log("mudar imagem")
    // afunção chamada pelo formulário quee pede o caminho da nova imagem. aí quando submeter ele vai trocar a imagem no banco 
  
    console.log("srcImg", srcImg)
    


    setNewImage(srcImg)
		
}



  return (
    <>
      
      {props.type === "image" ? (<div className="flex item-center">
        <Image src={newImage} width={props.width} height={props.height} alt={props.alt} className="rounded-xl -top-7 -ml-3 relative " />
        {props.editImage ? (

          <Modal handle={ handleImg} />
        
   
        ) : <></>}
        
      </div>) : (props.type === "color" ? <div className="bg-pink-500 w-22 h-22 -top-7 rounded-xl -ml-3 relative"></div> : <></>)}
      
      
    <h2 className="text-light-bg font-normal text-base flex items-center justify-end mr-6" {...props}>
      {props.title}
    </h2>
    </>
  );
}
