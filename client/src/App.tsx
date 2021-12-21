import "destyle.css";
import React, { useCallback, useEffect, useState } from "react";
import { getRatParams, getRats } from "./api";
import { RatsInfo, RatsSelect } from "./components";

type RatParamsType = {
  nickname: string
  width: number
  height: number
}


const loadRats = async (updateRatsState: (rats: string[]) => void) => {
  const rats = await getRats()
  updateRatsState(rats)
}

const loadRatParams = async (nameOfRat: string, updateRatParamsState: (ratParams: RatParamsType) => void) => {
  const ratParams = await getRatParams(nameOfRat)
  updateRatParamsState({...ratParams, nickname: ratParams.nickname 
    ? ratParams.nickname 
    : 'Uncool Rat with no Nickname'})

}

const App: React.FC = () => { 
  const defaultRat = 'No Rat'

  const [rats, setRats] = useState<string[]>([])
  const [ratParams, setRatParams] = useState<RatParamsType | null>(null)
  const updateRatsState = (rats: string[]) => setRats(rats)

  useEffect(() => {
    loadRats(updateRatsState)
  }, [])

  const onChangeSelectedRat = (e:  React.ChangeEvent<HTMLSelectElement>) => {
    const nameOfRat = e.target.value 
    nameOfRat === defaultRat ? setRatParams(null) : loadRatParams(nameOfRat, setRatParams)
  }

  const onChangeSelectedRatCallBack = useCallback(
    onChangeSelectedRat,
    [],
  )

  return (
  <div className="rats-wrapper">
    {rats.length && 
    <RatsSelect 
      defaultRat={defaultRat} 
      rats={rats} 
      onChangeSelectedRat={onChangeSelectedRatCallBack}
    />}
    {ratParams && <RatsInfo {...ratParams}/>}
  </div>)
};

export default App;
