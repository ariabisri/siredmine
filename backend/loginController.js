export{db} from ('../backend/config/db')
export const getLogin = async (req, res) =>{
    try {
        const response = await db.find('login_logs');
        res.status.json(response)
    } catch (error) {
        console.log(error.message)
    }
}