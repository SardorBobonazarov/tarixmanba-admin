import { Box, Button, Stack, Typography } from "@mui/material"
import { useState } from "react"
import UIInput from "../../ui-components/input/input"
import UIFile from "../../ui-components/input/file"
import { createData } from "../../api/apiPostCalls"

const SlidersCreatePage: React.FC = () => {
    const [title, setTitle] = useState<string>("")
    const [link, setLink] = useState<string>("")
    const [file, setFile] = useState<FileList | null>(null)

    const submit = () => {
        if(!title || !link) return
        const form = new FormData()
        form.append("title", title)
        form.append("link", link)
        if(file) form.append("file", file[0])

        createData("sliders", form, true)
            .then(res => {console.log(res)})
            .catch(err => console.log(err))

    }

    return (
        <Box>
            <Stack direction={"row"} gap={2} sx={{marginBottom: "20px"}}>
                <Box sx={{width: "100%"}}>
                    <Typography sx={{marginBottom: "10px"}}><span style={{color: "red"}}>*</span> Title</Typography>
                    <UIInput updateValue={(e) => setTitle(e)} fullWidth />
                </Box>
                <Box sx={{width: "100%"}}>
                    <Typography sx={{marginBottom: "10px"}}><span style={{color: "red"}}>*</span> Link</Typography>
                    <UIInput updateValue={(e) => setLink(e)} fullWidth/>
                </Box>

            </Stack>

            <UIFile fileChange={(e) => setFile(e)} />
            
            <Button variant="contained" sx={{marginTop: "20px"}} onClick={submit}>Create</Button>
        </Box>
    )
}

export default SlidersCreatePage