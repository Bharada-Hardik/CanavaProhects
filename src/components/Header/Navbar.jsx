import React from 'react'

const Navbar = () => {
    return (
        <div className='flex justify-between'>
            <img src="src/assets/List.png" alt="" className='' />
            {/* <ul className='flex font-medium gap-8 sm:hidden '>
                <li><a href="">Çözüm ve Hizmetler</a></li>
                <li><a href="">Ürünler</a></li>
                <li><a href="">Teknolojiler</a></li>
                <li><a href="">İnsan Kaynakları</a></li>
                <li><a href="">Kurumsal</a></li>

            </ul> */}
            <button className='pt-4 pr-6 pb-4 pl-6 bg-[#F84646] border-none text-white font-bold rounded-sm'>İletişim</button>
        </div>
    )
}

export default Navbar