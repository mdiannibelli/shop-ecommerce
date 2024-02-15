import React from 'react'

export default function Pagination({productsPerPage, totalProducts, paginate, activePage}) {
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalProducts / productsPerPage) ; i++){ /* math.ceil round over = 6,33 => 7 */
        pageNumbers.push(i);
    }                        /* 76 total products / 12 products per page = 6,33 */
    return (
    <ul className='default-pagination lab-ul'>
        <li>
            <a href="#" onClick={() => {
                if(activePage < pageNumbers.length){
                    paginate(activePage - 1)
                }
            }}>
                <i className='icofont-rounded-left'></i>
            </a>
        </li>
        {
            pageNumbers.map((number) =>(
                <li key={number} className={`page-item ${number === activePage ? "bg-warning" : ""}`}>
                    <button onClick={() => paginate(number)} className='bg-transparent'>{number}</button>
                </li>
            ))
        }
        <li>
            <a href="#" onClick={() => {
                if(activePage < pageNumbers.length){
                    paginate(activePage + 1)
                }
            }}>
                <i className='icofont-rounded-right'></i>
            </a>
        </li>
    </ul>
  )
}
