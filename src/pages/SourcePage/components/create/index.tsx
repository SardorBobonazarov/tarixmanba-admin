// mui
import { Box, Button, Stack, Typography } from "@mui/material"
// react
import { useEffect, useState } from "react"
// ui-components
import UISelect from "../../../../ui-components/input/select"
// import {UITinyMCE} from "../../../ui-components/input/tinymce"
import UIInput from "../../../../ui-components/input/input"
import UIFile from "../../../../ui-components/input/file"
// types
import UISwitch from "../../../../ui-components/input/switch"
import useFetchGetAllDatas from "../../../../hooks/useFetchGetAllDatas"
import { getAllFilteredLists } from "../../../../utils/getFilteredList"
import { createData } from "../../../../api/apiPostCalls"
import { divideToLists } from "../../../../utils/divideToLists"
import { useNavigate } from "react-router-dom"

const CreateField: React.FC<{isEdit?: boolean, data?: any}> = ({isEdit, data}) => {
    const navigate = useNavigate()

    const interiveType = [
        {id: "0", value: "Gallery"}, 
        {id: "1", value: "Audio"}, 
        {id: "2", value: "File"}, 
        {id: "3", value: "Virtual_reality"},
        {id: "4", value: "Video"},
        {id: "5", value: "Location"},
    ]

    // const [interiveInputType, setInteriveInputType] = useState<"file" | "link" | "location">("file")
    const [category, setCategory] = useState<{[x: string]: string} | null>(null)
    const [filterCategory, setFilterCategory] = useState<{[x: string]: string} | null>(null)
    const [filter, setFilter] = useState<{[x: string]: string} | null>(null)
    const [periodFilter, setPeriodFilter] = useState<{[x: string]: string} | null>(null)
    const [title, setTitle] = useState<string>("")
    const [image, setImage] = useState<string|ArrayBuffer|null>(null)
    const [content, setContent] = useState<string>("")
    const [statehood, setStatehood] = useState<boolean>(true)
    const [province, setProvince] = useState<{[x: string]: string} | null>(null)

    const [attributes, setAttributes] = useState<{[x: string]: string | number}[]>([{id: Date.now(), attributes_title: "", attributes_description: "", sequence: 1}])
    const [contents, setContents] = useState<{[x: string]: string | number}[]>([{id: Date.now(), contents_title: "", sequence: 1, contents_description: ""}])
    const [interactiveContent, setInteractiveContent] = useState<{[x: string]: string | number | FileList | null}[]>([{
        id: Date.now(), 
        interive_item: "file", 
        interive_status: "",
        interive_title: "", 
        interive_sequence: 1, 
        interive_file: null, 
        interive_link: "", 
        interive_latitude: "", 
        interive_longitude: ""
    }])

    const [active, setActive] = useState<boolean>(false)

    const addAttribute = () => {
        let result = [...attributes, {id: Date.now(), attributes_title: "", attributes_description: "", sequence: 1}]
        setAttributes(result)
    }

    const editAttribute = (id: number, key: string, value: string | number) => {
        const result = [...attributes]
        result[id] = {
            ...attributes[id],
            [key]: value
        }
        setAttributes(result)
    }

    const deleteAttribute = (id: number) => {
        const arr = [...attributes]
        arr.splice(id, 1)
        setAttributes(arr)
    }

    const addContent = () => {
        let result = [...contents, {id: Date.now(), contents_title: "", sequence: 1, contents_description: ""}]
        setContents(result)
    }

    const editContent = (id: number, key: string, value: string | number) => {
        const result = [...contents]
        result[id] = {
            ...contents[id],
            [key]: value
        }
        setContents(result)
    }

    const deleteContent = (id: number) => {
        const arr = [...contents]
        arr.splice(id, 1)
        setContents(arr)
    }

    const addInteractiveContent = () => {
        let result = [...interactiveContent, {
            id: Date.now(), 
            interive_item: "file", 
            interive_title: "", 
            interive_sequence: 1, 
            interive_file: null, 
            interive_link: "", 
            interive_latitude: "", 
            interive_longitude: ""
        }]
        setInteractiveContent(result)
    }

    const editInteractiveContent = (id: number, key: string, value: string | number | FileList | null) => {
        const itemType: {[x: string]: "file" | "link" | "location"} = {
            "Gallery": "file",
            "Audio": "file",
            "File": "file",
            "Virtual_reality": "file",
            "Video": "link",
            "Location": "location"
        }
        const result = [...interactiveContent]

        if(key==="interive_file" && value){
            
            const reader: FileReader = new FileReader();
            reader.onloadend = () => {
                result[id] = {
                    ...interactiveContent[id],
                    [key]: reader.result
                }
            };
            reader.readAsDataURL(value[0]);
            console.log("go", reader.result);
        }

        if(key === "interive_item" && typeof value === "string") {
            result[id] = {
                ...interactiveContent[id],
                [key]: itemType[value],
                "interive_status": value
            }
        }else {
            result[id] = {
                ...interactiveContent[id],
                [key]: value
            }
        }
        setInteractiveContent(result)
    }

    const deleteInteractiveContent = (id: number) => {
        const arr = [...interactiveContent]
        arr.splice(id, 1)
        setInteractiveContent(arr)
    }

    const updateImage = async (e: any) => {
        if (e) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(e[0]);
        }
    }

    const [filterCategoryList, setFilterCategoryList] = useState<any[]>([])
    const [filterList, setFilterList] = useState<any[]>([])
    
    const {data: allCategoriesList} = useFetchGetAllDatas("category")
    const {data: allPeriodFilterList} = useFetchGetAllDatas("period_filter")
    const {data: allProvinceList} = useFetchGetAllDatas("province")

    useEffect(() => {
        allCategoriesList?.map(list => {
            if(list.id === category?.id) {
                setFilterCategoryList(list.categories)
            }
        })
    }, [category])

    useEffect(() => {
        filterCategoryList?.map(list => {
            if(filterCategory && list.id === filterCategory.id) {
                setFilterList(list.filters_category)
            }
        })
    }, [filterCategory])

    const allCategories = getAllFilteredLists({data: allCategoriesList})
    const allFilterCategoriesList = getAllFilteredLists({data: filterCategoryList})
    const allFiltersList = getAllFilteredLists({data: filterList})
    const allPeriodFilter = getAllFilteredLists({data: allPeriodFilterList})
    const allProvince = getAllFilteredLists({data: allProvinceList})

    const handleSubmit = () => {
        console.log("working");
        
        if(!category || !filterCategory || !filter || !periodFilter || !title) {
            return
        }

        setActive(true)

        const attributesTitles = divideToLists({data: attributes, key: "attributes_title"})
        const attributesDescriptions = divideToLists({data: attributes, key: "attributes_description"})
        const contentTitles = divideToLists({data: contents, key: "contents_title"})
        const contentDescriptions = divideToLists({data: contents, key: "contents_description"})
        const interiveTitles = divideToLists({data: interactiveContent, key: "interive_title"})
        const interiveStatus = divideToLists({data: interactiveContent, key: "interive_status"})
        const interiveFiles = divideToLists({data: interactiveContent, key: "interive_file"})
        const interiveLinks = divideToLists({data: interactiveContent, key: "interive_link"})
        const interiveLatitudes = divideToLists({data: interactiveContent, key: "interive_latitude"})
        const interiveLongitude = divideToLists({data: interactiveContent, key: "interive_longitude"})

        const result = {
            category: category?.id+"",
            filter_category: filterCategory?.id+"",
            filters: filter?.id+"",
            period_filter: periodFilter?.id+"",
            title,
            image,
            content,
            statehood,
            province: province?.id+"",
            attributes_title_list: attributesTitles,
            attributes_description_list: attributesDescriptions,
            contents_title_list: contentTitles,
            contents_description_list: contentDescriptions,
            interive_title_list: interiveTitles,
            status_list: interiveStatus,
            // interive_file_list: interiveFiles,
            link_list: interiveLinks,
            latitude_list: interiveLatitudes,
            longitude_list: interiveLongitude
        }

        if(interiveFiles.length > 0) result.interive_file_list = interiveFiles

        console.log(result);

        createData("resource", result)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))
            .finally(() => {
                navigate("/sources", {replace: true})
                console.log("it should be working", result)
                setActive(false)
            })
    }
    
    return (
        <Box>
            <Typography sx={{marginBottom: "10px"}}>Filter</Typography>
            <UISelect options={allCategories} placeholder="Select a category" updateValue={(e) => {
                setCategory(e)
                setFilterCategory(null)
                setFilter(null)
            }} />
            <Stack direction={"row"} gap={5} sx={{
                margin: "20px 0"
            }}>
                <UISelect disabled={Boolean(category)} options={allFilterCategoriesList} placeholder="Select a filter category" updateValue={(e) => {
                    setFilterCategory(e)
                    setFilter(null)
                }} />
                <UISelect disabled={Boolean(category) && Boolean(filterCategory)} options={allFiltersList} placeholder="Select a filter" updateValue={(e) => setFilter(e)} />
            </Stack>
            
            <Typography sx={{margin: "15px 0 5px"}}><span style={{color: "red"}}>*</span> Select period filter</Typography>
            <UISelect options={allPeriodFilter} placeholder="" updateValue={(e) => setPeriodFilter(e)} />
            
            <Typography sx={{margin: "15px 0 5px"}}><span style={{color: "red"}}>*</span> Title</Typography>
            <UIInput updateValue={(e) => setTitle(e)} />

            <Typography sx={{margin: "20px 0 10px"}}>Click to upload an image</Typography>
            <UIFile fileChange={(e) => updateImage(e)} id="one"/>

            <Typography sx={{margin: "20px 0 10px"}}>Content</Typography>
            <UIInput updateValue={(e) => setContent(e)} />

            <Typography sx={{margin: "20px 0 10px"}}>Statehood</Typography>
            <UISwitch value={statehood} changeValue={(e) => setStatehood(e)} />
            
            <Typography sx={{margin: "15px 0 5px"}}><span style={{color: "red"}}>*</span> Select Province</Typography>
            <UISelect options={allProvince} placeholder="" updateValue={(e) => setProvince(e)} />

            <Typography sx={{margin: "15px 0 5px"}}><span style={{color: "red"}}>*</span> Attributes</Typography>
            {attributes.map((attribute: any, id: number) => {
                return (
                    <Stack direction={"row"} gap={2} sx={{marginBottom: "10px"}} key={attribute.id}>                            
                        <UIInput updateValue={(e) => editAttribute(id, "attributes_title", e)} defaultValue={attribute.attributes_title} placeholder="Title" />
                        <UIInput updateValue={(e) => editAttribute(id, "attributes_description", e)} defaultValue={attribute.attributes_description} placeholder="Description" />
                        <UIInput type="number" fullWidth={false} updateValue={(e) => editAttribute(id, "sequence", e)} placeholder="Sequence" defaultValue={attribute.sequence} /> 
                        {attributes.length > 1 && (<Button variant="contained" onClick={() => deleteAttribute(id)}>Delete</Button>)}                        
                    </Stack>
                )
            })}
            <Button 
                variant="outlined" 
                fullWidth 
                sx={{marginTop: "10px"}}
                onClick={addAttribute}
            >Add Attribute</Button>

            <Typography sx={{margin: "15px 0 5px"}}><span style={{color: "red"}}>*</span> Contents</Typography>
            {contents.map((attribute: any, id: number) => {
                return (
                    <Box key={attribute.id}>
                        <Stack direction={"row"} gap={2} sx={{marginBottom: "10px"}}>                            
                            <UIInput updateValue={(e) => editContent(id, "contents_title", e)} defaultValue={attribute.title} placeholder="Title" />
                            <UIInput type="number" fullWidth={false} updateValue={(e) => editContent(id, "sequence", e)} placeholder="Sequence" defaultValue={attribute.sequence} /> 
                        </Stack>
                        <UIInput updateValue={(e) => editContent(id, "contents_description", e)} defaultValue={attribute.para} placeholder="" />
                        {contents.length > 1 && (<Button variant="contained" onClick={() => deleteContent(id)}>Delete</Button>)}                        
                    </Box>
                )
            })}
            <Button 
                variant="outlined" 
                fullWidth 
                sx={{marginTop: "10px"}}
                onClick={addContent}
            >Add Content</Button>

            <Typography sx={{margin: "15px 0 5px"}}><span style={{color: "red"}}>*</span> Interactive Content</Typography>
            {interactiveContent.map((interive: any, id: number) => {
                return (
                    <Box key={interive.id}>
                        <Stack direction={"row"} gap={2} sx={{margin: "10px 0"}}>  
                            <UISelect options={interiveType} defaultValue={interiveType[0].value} placeholder="Select type" updateValue={(e) => editInteractiveContent(id, "interive_item", e.value)} />
                            <UIInput updateValue={(e) => editInteractiveContent(id, "interive_title", e)} defaultValue={interive.title} placeholder="Title" />
                            <UIInput type="number" fullWidth={false} updateValue={(e) => editInteractiveContent(id, "interive_sequence", e)} placeholder="Sequence" defaultValue={interive.sequence} /> 
                        </Stack>
                        {interive.interive_item === "file" && (<UIFile id={id+""} fileChange={(e) => editInteractiveContent(id, "interive_file", e)} />)}
                        {interive.interive_item === "link" && (<UIInput updateValue={(e => editInteractiveContent(id, "interive_link", e))} defaultValue={interive.interive_link} placeholder="Link" />)}
                        {interive.interive_item === "location" && (
                            <Stack direction={"row"} gap={2}>
                                <UIInput updateValue={(e) => editInteractiveContent(id, "interive_latitude", e)} defaultValue={interive.interive_latitude} placeholder="Latitude" />
                                <UIInput updateValue={(e) => editInteractiveContent(id, "interive_longitude", e)} defaultValue={interive.interive_longitude} placeholder="Longitude" />
                            </Stack>
                        )}
                        {interactiveContent.length > 1 && (<Button variant="contained" sx={{margin: "10px 0"}} onClick={() => deleteInteractiveContent(id)}>Delete</Button>)}                        
                    </Box>
                )
            })}
            <Button 
                variant="outlined" 
                fullWidth 
                sx={{marginTop: "10px"}}
                onClick={addInteractiveContent}
            >Add Interactive Content</Button>

            <Button variant="contained" disabled={active} onClick={handleSubmit} sx={{marginTop: "20px"}}>Create</Button>
        </Box>
    )
}

export default CreateField