import * as React from 'react'

const smartContractCovers = [
  {
    name: 'Venus',
    imgSrc: '/images/covers/venus.png'
  },
  {
    name: 'Compound',
    imgSrc: '/images/covers/compound.png'
  },
  {
    name: 'Curve Finance',
    imgSrc: '/images/covers/curve-finance.png'
  }
]

const exchangeCovers = [
  {
    name: 'Binance',
    imgSrc: '/images/covers/binance.png'
  },
  {
    name: 'Kucoin',
    imgSrc: '/images/covers/kucoin.png'
  },
  {
    name: 'Okex',
    imgSrc: '/images/covers/okex.png'
  }
  // {
  //   name: 'Coinbase',
  //   imgSrc: '/images/covers/coinbase.png'
  // }
]

export const Covers = () => {
  return (
    <>
    <div className='flex flex-wrap gap-8 md:gap-16 mt-8 md:mt-16'>
      <div>
        <div className='font-numbers font-medium text-base md:text-lg tracking-wider mb-6'>
          SMART CONTRACT COVERS
        </div>
        <div className='flex flex-wrap gap-8 items-center'>
          {smartContractCovers.map((x) => (
            <img
              key={x.name}
              src={x.imgSrc}
              alt={x.name}
              className='max-h-10'
              loading='lazy'
            />
          ))}
        </div>
      </div>
      <div>
        <div className='font-numbers font-medium text-base md:text-lg tracking-wider mb-6'>
          EXCHANGE COVERS
        </div>
        <div className='flex flex-wrap gap-8 items-center'>
          {exchangeCovers.map((x) => (
            <img
              key={x.name}
              src={x.imgSrc}
              alt={x.name}
              className='max-h-10'
              loading='lazy'
            />
          ))}
        </div>
      </div>
    </div>
    <div className='text-xs'>The above logos do not indicate or suggest partnership with Neptune Mutual. For demonstration purpose only.</div>
    </>
  )
}
