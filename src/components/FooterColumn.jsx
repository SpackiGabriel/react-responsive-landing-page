const FooterColumn = ({title, list}) => {

    return(
        <div>
            <h6 className='font-medium text-gray-400'>{title}</h6>
            <ul>
                {
                    list.map((item) => (
                        <li className='py-2 text-sm'>{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default FooterColumn