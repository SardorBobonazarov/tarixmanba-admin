import { Box, TableCell, Typography } from "@mui/material"
import DisplayData from "../../components/displayData"
import { useMemo, useState } from "react"
import { headers } from "./constants/headers"
import { DisplayDataHeaders } from "../../types"
import { getFilteredData } from "../../utils/getFilteredData"
import TableCells from "../../components/displayData/tableCells"
import useFetchGetAllDatas from "../../hooks/useFetchGetAllDatas"
import { useDebounce } from "../../hooks/useDebounce"
import UISearch from "../../ui-components/search"

const Filters: React.FC = () => {
    const [page, setPage] = useState<number>(1)
    const [search, setSearch] = useState<string>("")

    const debouncedSearch = useDebounce(search)

    const {data, loading, count} = useFetchGetAllDatas("filters", page, debouncedSearch)

    const totalHeaders = useMemo(() => {
        return headers.reduce((sum, header) => sum + header.space, 1)
    }, [headers])

    const headersDisplay = headers.map((header: DisplayDataHeaders) => {
        return (
            <TableCell key={header.text} sx={{
                width: `${header.space/totalHeaders*90}%`
            }}>
                <Typography>{header.text}</Typography>
            </TableCell>
        )
    })

    const result = data && data.length > 0 && data.map((info: any) => {
        const filtered = getFilteredData({data: info, keys: ["cat_title", "filter_categories_name", "title", "created_time", "updated_time"]})
        
        return (
            <TableCells key={info.id} filtered={filtered} info={info} deleteText="filters" />      
        )
    })

    return (
        <Box>
            <UISearch updateSearch={e => setSearch(e)} />
            <DisplayData 
                count={count}
                headersDisplay={headersDisplay}
                loading={loading}
                data={data || []}
                result={result}
                page={page}
                updatePage={e => setPage(e)}
            />
        </Box>
    )
}

export default Filters