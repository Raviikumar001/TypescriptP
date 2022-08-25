
import * as React from 'react';
import { FC, useState, ChangeEvent } from 'react';



export enum HairColor{
  Blonde = "Your hair is blonde, good for you.",
  brown = "Cool  hair color",
  Pink = "cool"
}

export interface Props 

{
 
  name:string;
  age : number;
  email: string;
  hairColor: HairColor

}



export const  Person:FC<Props> =  ({name, age , email, hairColor})=> {
  
   const [country, setCountry ] = useState<string>("")

   type NameType ="ravi" | "Jack" | "kumar"

   const nameForType: NameType= "ravi"

   const handleChange= (event:ChangeEvent<HTMLInputElement>)=>{
    setCountry(event.target.value)
   }  


  return (
    <div>
      <h1> {name}</h1>
      <h2>{age}</h2>
      <h3> {email}</h3>
      <input placeholder="What is the name of your country ." onChange={ handleChange}/>

      {country}
      {hairColor}
    </div>
  );

}
