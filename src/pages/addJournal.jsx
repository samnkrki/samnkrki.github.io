import { useForm } from "react-hook-form";
import { ButtonField } from "../components/button";
import { DateInputField, TextAreaInputField, TextInputField } from "../components/input";
import journalService from "../services/journal.service";

export function AddJournalPage({onSuccess}) {
    const { register, handleSubmit, formState,reset, watch } = useForm({ mode: "onChange", reValidateMode: "onChange" });
    const onSubmit = async(data) => {
        try {
            await journalService.addJournal({...data});
            reset();
            onSuccess();
        } catch (error) {
            console.log("error adding journal", error);
        }
    }
    console.log(watch())
    return <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextInputField label={"Your Journal Title(required)"} required={true} register={register} name={"title"}/>
            <DateInputField label={"Published Date(required)"} required={true} register={register} name={"publishedDate"}/>
            <TextAreaInputField label={"Journal Description"} required={false} register={register} name={"body"}/>
            <ButtonField type="submit" disabled={!formState.isValid}>Add New Record</ButtonField>
        </form>
    </div>
}