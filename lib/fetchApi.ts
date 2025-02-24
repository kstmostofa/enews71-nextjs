
export async function fetchApi<T>(url: string, method: string = "GET", body?: any): Promise<T> {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://new.enews71.com/api/';
    try {
        const res = await fetch(`${baseUrl}${url}`, {
            method,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error('Failed to fetch API');
        }
        const result = await res.json();
        return result.data;
    }
    catch (error) {
        console.error(error);
        throw new Error('Failed to fetch API');
    }
}