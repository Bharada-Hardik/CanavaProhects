import React from 'react'

function Main() {
  return (
    <div className='flex flex-col  gap-8 mt-10 md:w-1/2 md:pl-19 md:w-[65%] lg:w-[50%] '>
      <h1 className='text-4xl mt-10 font-bold text-center leading-12 md:text-left
 md:text-5xl md:leading-12 md:mt-0 lg:text-6xl lg:mt-23 lg:leading-16'>Bilgi Teknolojilerinde 23 Yıllık Tecrübe</h1>
      <h3 className='text-xs leading-5 lg:text-lg lg:leading-7'>Müşterilerimizin yüksek kalite seviyelerini koruyabilmeleri için farklı sektörlerde tecrübe kazanmış uzman kadrolarımızla Proje Yönetimi, İş Analizi ve Test Yönetimi hizmetleri sunmaktayız.</h3>
      <div className='w-full rounded-lg bg-white p-1 flex pl-6 md:w-[65%] md:pl-4 '>
        <input type="text" placeholder='Mail bültenimize kayıt ol' className='w-[80%] md:w-[60%]' />
        <button className='bg-[#F84646] w-[30%] h-[50px] rounded-sm text-white font-bold md:w-[40%]'>Kayıt Ol</button>
      </div>
    </div>
  )
}

export default Main