import React from "react";

interface Props {
    defaultRat: string
    rats: string[],
    onChangeSelectedRat: React.ChangeEventHandler<HTMLSelectElement>
}

export const RatsSelect: React.FC<Props> = ({defaultRat, rats, onChangeSelectedRat}) => {
  return <select name="ratSelect" onChange={onChangeSelectedRat}>
            <option selected={true}>{defaultRat}</option>
            {rats.map((r, i) => <option key={i}>{r}</option>)}
         </select>
}