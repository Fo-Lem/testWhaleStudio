export const useAPI = () => {

    const { useCustomFetch } = useHTTP()

    const apiGetSliders = async (): Promise<Array<Slide> | void> => {
        try {
            const response = await useCustomFetch<Array<Slide>>("menu",{
                method: "GET"
            })
            if (response&&response.length>0)
                return response
        }
        catch (error) {
            console.error("API Error:", error)
        }
    }

    return { apiGetSliders }
}