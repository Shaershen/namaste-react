import React, { useState } from 'react'

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="border border-black p-2 m-2">
      <h3 className="font-bold text-xl">{title}</h3>
      {isVisible ? (
        <button
          onClick={() => setIsVisible(false)}
          className="cursor-pointer underline"
        >
          Hide
        </button>
      ) : (
        <button
          onClick={() => setIsVisible(true)}
          className="cursor-pointer underline"
        >
          Show
        </button>
      )}

      {isVisible && <p>{description}</p>}
    </div>
  )
}

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState('')

  return (
    <div>
      <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
      <Section
        title={'About Instamart'}
        description={'This is about section'}
        isVisible={visibleSection === 'about'}
        setIsVisible={() => setVisibleSection('about')}
      />
      <Section
        title={'Team Instamart'}
        description={'This is team section'}
        isVisible={visibleSection === 'team'}
        setIsVisible={() => setVisibleSection('team')}
      />
      <Section
        title={'Career Instamart'}
        description={'This is career section'}
        isVisible={visibleSection === 'career'}
        setIsVisible={() => setVisibleSection('career')}
      />
      {/* <AboutInstamart />
      <DetailsOfInstamart />
      <TeamInstamart />
      <Product /> */}
    </div>
  )
}

export default Instamart
