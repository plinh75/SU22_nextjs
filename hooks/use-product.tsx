import useSWR from "swr"
import instance from "../api/instance"
import { add, removeItem } from "../api/product"

const useProducts = () => {
    const { data, error, mutate } = useSWR('/products')
    //create
    const create = async (item:any) => {
        const product = await add(item)
        mutate([...data, product])
    }

    //delete
    const remove = async (id:any) => {        
        await removeItem(id)
        const newProducts = data.data.filter((item:any) => item.id != id)        
        mutate(newProducts)
    }

    return{
        data, 
        error, 
        create,
        remove
    }
}
export default useProducts