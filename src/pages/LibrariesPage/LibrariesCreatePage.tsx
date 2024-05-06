import { Box, Typography, Button } from "@mui/material"
import UISelect from "../../ui-components/input/select"
import { useEffect, useMemo, useState } from "react"
import UIInput from "../../ui-components/input/input"
import UIFile from "../../ui-components/input/file"
import { getAllDatas } from "../../api/apiGetCalls"
import Loading from "../../components/loading"
import { createData } from "../../api/apiPostCalls"

const LibrariesCreatePage: React.FC = () => {
    const [libraryCategory, setLibraryCategory] = useState<{id: string, value: string}>({})
    const [title, setTitle] = useState<string>("")
    const [author, setAuthor] = useState<string>("")
    const [type, setType] = useState<string>("")
    const [year, setYear] = useState<number>()
    const [country, setCountry] = useState<string>("")
    const [language, setLanguage] = useState<string>("")
    const [image, setImage] = useState<FileList | null>(null)
    const [file, setFile] = useState<FileList | null>(null)

    const [libraryCategoryList, setLibraryCategoryList] = useState<string[]>([])

    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        getAllDatas("library_category")
            .then(res => {setLibraryCategoryList(res.results)})
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])

    const getAllLibraryCategoryList = useMemo(() => {
        // if(libraryCategoryList.length < 1) return []
        const result: {id: string, value: string}[] = []
        libraryCategoryList.map(list => {
            result.push({
                id: list.id,
                value: list.title
            })
        })
        return result
    }, [libraryCategoryList])

    const handleSubmit = () => {
        if(!libraryCategory || !title || !author || !type || !year || !country || !language) {
            console.log("nothing");
            return
        }
        
        const form = new FormData()
        form.append("title", title)
        form.append("category", libraryCategory.id)
        form.append("author", author)
        form.append("type", type)
        form.append("year", year+"")
        form.append("country", country)
        form.append("language", language)
        form.append("author", author)
        if(image) form.append("image", image[0])
        if(file) form.append("file", file[0])

        createData("library", form, true)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <Box>
            {/* getAllLibraryCategoryList.length > 0 && */}
            {loading && <Loading />}
            {!loading && (
                <Box>
                    <Typography sx={{margin: "5px 0"}}><span style={{color: "red"}}>*</span> Select Library Category</Typography>
                    <UISelect options={getAllLibraryCategoryList} placeholder="" updateValue={e => {
                        const libCat = { id: e.id, value: e.value }
                        setLibraryCategory(libCat)
                    }}/>

                    <Typography sx={{margin: "15px 0 5px"}}><span style={{color: "red"}}>*</span> Title</Typography>
                    <UIInput updateValue={(e) => setTitle(e)} />

                    <Typography sx={{margin: "15px 0 5px"}}><span style={{color: "red"}}>*</span> Author</Typography>
                    <UIInput updateValue={(e) => setAuthor(e)} />

                    <Typography sx={{margin: "15px 0 5px"}}><span style={{color: "red"}}>*</span> Type</Typography>
                    <UIInput updateValue={(e) => setType(e)} />

                    <Typography sx={{margin: "15px 0 5px"}}><span style={{color: "red"}}>*</span> Year</Typography>
                    <UIInput updateValue={(e) => setYear(Number(e))} type="number" />

                    <Typography sx={{margin: "15px 0 5px"}}><span style={{color: "red"}}>*</span> Country</Typography>
                    <UIInput updateValue={(e) => setCountry(e)} />

                    <Typography sx={{margin: "15px 0 5px"}}><span style={{color: "red"}}>*</span> Language</Typography>
                    <UIInput updateValue={(e) => setLanguage(e)} />

                    <Typography sx={{margin: "15px 0 5px"}}>Click to upload an image</Typography>
                    <UIFile fileChange={e => setImage(e)} />

                    <Typography sx={{margin: "15px 0 5px"}}>Click to upload an file</Typography>
                    <UIFile fileChange={e => setFile(e)} />

                    <Button onClick={handleSubmit} variant="contained" sx={{marginTop: "20px"}}>Create</Button>
                </Box>
                    
            )}
        </Box>
    )
}

export default LibrariesCreatePage