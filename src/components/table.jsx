// create a journal add page (title, date and body), (required validation of form)
// create a journal list page (pagination)
// api to add journal entry
// api to fetch journal entry
// filter to view journal entries by specific date

import "./table.module.css";

export function TableField({ datasource = [] }) {
    return <table>
        <thead>
        <tr>
            <th>Title</th>
            <th>Published Date</th>
            <th>Description</th>
        </tr>
        </thead>
        <tbody>{datasource.map((eachRow, index) => {
            return <tr key={"row-" + index}>
                <td>{eachRow.title ?? "-"}</td>
                <td>{eachRow.publishedDate? new Date(eachRow.publishedDate).toLocaleDateString():"-"}</td>
                <td>{eachRow.body ?? "-"}</td>
            </tr>
        })}</tbody>
    </table>
}