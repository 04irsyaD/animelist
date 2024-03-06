const Pagination = ({ page, lastPage, setPage }) => {

    const scrolltop = () => {
        scrollTo({
            behavior: 'smooth',
            top: 0
        })
    }

    const handleNextPage = () => {
        setPage((prevState) => prevState + 1)
        scrolltop()
    }
    const handleprevPage = () => {
        setPage((prevState) => prevState - 1)
        scrolltop()
    }
    return (
        <div className="flex justify-center items-center py-4 px-2 gap-4 text-color-primary text-2xl">
            {page <= 1 ? null :
                <button onClick={handleprevPage} className="transition-all hover:text-color-accent">Prev</button>
            }
            <p>{page} of {lastPage}</p>

            {page >= lastPage ? null :
                <button onClick={handleNextPage} className=" transition-all hover:text-color-accent">Next</button>
            }
        </div>
    )
}

export default Pagination