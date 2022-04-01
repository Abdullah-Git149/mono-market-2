import { Link } from "react-router-dom"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Pagination = ({ page, count, perPage }) => {
    let totalPages = Math.ceil(count / perPage)
    let startLoop = page
    let diff = totalPages - page
    if (diff <= 3) {
        startLoop = totalPages - 3
    }
    let endLoop = startLoop + 3
    if (startLoop <= 0) {
        startLoop = 1
    }
    const links = () => {
        const store = []
        for (let i = startLoop; i <= endLoop; i++) {
            store.push(<li key={i}><Link to={`/home/${i}`}>{i}</Link></li>)
        }
        return store
    }
    const next = () => {
        if (page < totalPages) {
            return (<li><Link to={`/home/${parseInt(page + 1)}`}><AiOutlineArrowRight /></Link></li>)
        }
    }
    const prev = () => {
        if (page > 1) {
            return (<li><Link to={`/home/${parseInt(page - 1)}`}><AiOutlineArrowLeft /></Link></li>)
        }
    }
    return <div className="pagination">
        {prev()}
        {links()}
        {next()}

    </div>
}

export default Pagination;