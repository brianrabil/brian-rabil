import * as React from 'react'



export default () => {

    const portfolioItems = [
        {title: 'Warrior Academy (Desktop)', path: 'warrior-academy-mockup.png'},
        {title: 'MyFinancial', path:'my-financial-mockup.png' },
        {title: 'The Opendoor', path: 'opendoor-mockup.png' },
        {title: 'Warrior Academy (Learning Platform)', path: 'warrior-academy-learning-mockup.png' },
        {title: 'Data Studio (Wireframe)', path: 'data-studio-wireframe.png' },
        {title: 'Synthetic Analyst (Editor)', path: 'sa-module-builder-mockup.png' },
        {title: 'Compeat', path: 'compeat-mockup.png' },
        {title: 'CAP Map', path: 'cap-map-mockup.png' },
        {title: 'GMARS Logo', path: 'gmars-logo.png' },
    ]

    const [viewingImage, setViewingImage] = React.useState<number | null>();

    function renderCard(title: string, url: string, index: number) {
        return (
            <div onClick={() => setViewingImage(index)} key={title} className={`flex flex-col cursor-pointer`}>
                <img className={`object-cover`} src={url} />
                <div className={`flex items-center justify-between py-2`}>
                    <span className={`text-sm text-black dark:text-gray-400`}>
                        {title}
                    </span>
                    <div className={`flex items-center space-x-3`}>
                        {/* <img src={`http://placehold.it/20x20`} />
                        <img src={`http://placehold.it/20x20`} /> */}
                    </div>
                </div>
              
            </div>
        )
    }

    React.useEffect(() => {
        console.log(viewingImage)
        console.log(portfolioItems[viewingImage])
    })

    function onPrevImage() {
        setViewingImage(
            (viewingImage === 0) ? portfolioItems.length - 1 : viewingImage - 1
        )
    }

    function onNextImage() {
        setViewingImage(
            (portfolioItems.length -1 > viewingImage) ? viewingImage + 1 : 0
        )
    }

    function renderPhotoViewer() {
        return (
            <div className={`fixed inset-0 z-50 hidden md:block`}>
                <div className={`relative h-full w-full`}>
                    <div className={`absolute inset-0 z-30`}>
                        <div className={`h-16 border-b border-gray-600 flex items-center justify-between px-4`}>
                            <span className={`text-lg text-white`}>{ portfolioItems[viewingImage].title }</span>
                            <button onClick={() => setViewingImage(null)} className={`text-white hover:text-red-500 transition duration-200 ease-in-out p-3`}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                            </button>
                        </div>
                        <div className={`h-full w-full flex`} style={{ height: 'calc(100vh - 64px)' }}>
                            <button onClick={onPrevImage} className={`h-full w-24 text-white hover:bg-gray-800 transition duration-150 ease-in-out flex items-center justify-center`}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                            </button>
                            <div className={`h-full w-full p-10 flex items-center justify-center`}>
                                <img className={`object-contain h-full w-auto rounded-xl`} src={portfolioItems[viewingImage].path} />
                            </div>
                            <button onClick={onNextImage} className={`h-full w-24 text-white hover:bg-gray-800 transition duration-150 ease-in-out flex items-center justify-center`}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                            </button>
                        </div>
                    </div>
                    <div className={`bg-gray-900 h-full w-full opacity-100 absolute inset-0 z-20`}></div>
                </div>

            </div>
        )
    }

    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 pb-24`}>
            {(viewingImage || viewingImage === 0 )&& (renderPhotoViewer())}
            {portfolioItems.map(({ title, path }, index) => renderCard(title, path, index))}
        </div>
    )
}