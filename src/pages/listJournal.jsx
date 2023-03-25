import { DateInputField } from "../components/input";
import { TableField } from "../components/table";

export function JournalListPage({datasource=[], onSearchChange}) {
    return <div>
        <input type={"date"} onChange={onSearchChange}/>
        {/* <DateInputField onChange={onSearchChange}/> */}
        <TableField datasource={datasource}/>
    </div>
}