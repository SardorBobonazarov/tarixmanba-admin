import instance from "./settings"

export const getAllDatas = async (text: string) => {
    try {
        const res = await instance.get(`${text}`, {
            headers: {
                "Content-Type": "application/json",
            },
            // responseType: "arraybuffer"
        })
        return res.data
    } catch (error) {
        throw error
    }
}