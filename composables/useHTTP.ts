export const useHTTP = () => {
    
    const config = useRuntimeConfig()
    const baseURL = config.public.apiBaseUrl

    const headers = {
        "Content-Type": "application/json"
    }

    class ResponseError extends Error {
        response: any
        constructor(message: string, res: any) {
            super(message)
            this.response = res
        }
    }

    async function useCustomFetch<T>(url: string, options = {}): Promise<T> {
        const finalUrl = (url.slice(0, 4) !== "http"|| url.slice(0, 5) !== "https") ? `${baseURL}${url}` : url

        const res = await $fetch<T>(finalUrl, { headers: headers, ...options })
        
        if (!res)
            throw new ResponseError("Bad fetch response", res)

        return res
    }

    return { useCustomFetch }
}