import { DateInputField } from "../components/input";
import { TableField } from "../components/table";

export function JournalListPage({datasource=[], onSearchChange}) {
    return <div>
        <DateInputField label={"Filter by published date"} onChange={onSearchChange}/>
        <TableField datasource={datasource}/>
    </div>
}