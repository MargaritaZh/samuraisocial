import { PersonsDialogType } from "../../../data/types.ts";
import { UserElement } from "../../../components/userElement/UserElement.tsx";

type SideDialogsProps = {
    persons: PersonsDialogType[]
};
export const SideDialogs = ({persons}: SideDialogsProps) => {
    return (
        <div>
            <h2>Диалоги</h2>
            <ul>
                {persons.map(person => {
                    return (
                        <li key={person.id}>
                            <UserElement id={person.id} name={person.name} smallText={person.smallText}/>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};