export const contactData = async ({request}) => {
    try {
        const res = await request.formData();
        const data = Object.fromEntries(res);
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}