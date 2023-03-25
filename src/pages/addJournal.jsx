import { useForm } from "react-hook-form";
import { DateInputField, TextAreaInputField, TextInputField } from "../components/input";
import journalService from "../services/journal.service";

export function AddJournalPage({onSuccess}) {
    const { register, handleSubmit, formState,reset } = useForm({ mode: "onChange", reValidateMode: "onChange" });
    const onSubmit = async(data) => {
        try {
            await journalService.addJournal({...data});
            reset();
            onSuccess();
        } catch (error) {
            console.log("error adding journal", error);
        }
    }
    return <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type={"text"} {...register("title",{required: true})} />
            <input type={"date"} {...register("publishedDate", {required: true})} />
            <textarea {...register("body")}></textarea>
            <button type="submit" disabled={!formState.isValid}>Add New Record</button>
        </form>
    </div>
}